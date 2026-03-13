import React, { useState, useRef, useEffect } from 'react';

const AIPanel = ({ pdfjsDoc, pageCount, activePage, onClose }) => {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('sb_ai_key') || '');
  const [provider, setProvider] = useState(() => localStorage.getItem('sb_ai_provider') || 'openai');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [documentText, setDocumentText] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Extract text from all pages
  const extractDocumentText = async () => {
    if (!pdfjsDoc || documentText !== null) return documentText;

    const texts = [];
    const pagesToExtract = Math.min(pageCount, 50); // Limit to 50 pages
    for (let i = 1; i <= pagesToExtract; i++) {
      try {
        const page = await pdfjsDoc.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items.map(item => item.str).join(' ');
        if (pageText.trim()) {
          texts.push(`[Page ${i}]\n${pageText}`);
        }
      } catch (err) {
        console.error(`Error extracting page ${i}:`, err);
      }
    }

    const fullText = texts.join('\n\n');
    setDocumentText(fullText);
    return fullText;
  };

  const callAI = async (prompt, context) => {
    if (provider === 'openai') {
      const resp = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: `You are a helpful PDF document assistant. The user has a PDF document open. Here is the extracted text from the document:\n\n${context}\n\nHelp the user with questions about this document. Be concise and cite page numbers when possible.` },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: prompt },
          ],
          max_tokens: 1000,
        }),
      });
      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error?.message || `API error: ${resp.status}`);
      }
      const data = await resp.json();
      return data.choices[0].message.content;
    }

    if (provider === 'anthropic') {
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 1000,
          system: `You are a helpful PDF document assistant. The user has a PDF document open. Here is the extracted text:\n\n${context}\n\nHelp with questions about this document. Be concise, cite page numbers when possible.`,
          messages: [
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: prompt },
          ],
        }),
      });
      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error?.message || `API error: ${resp.status}`);
      }
      const data = await resp.json();
      return data.content[0].text;
    }

    throw new Error('Unknown provider');
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    if (!apiKey) {
      setShowSettings(true);
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const text = await extractDocumentText();
      const response = await callAI(userMessage, text || '(No text could be extracted from this PDF)');
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${err.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action) => {
    let prompt;
    if (action === 'summarize') prompt = 'Summarize this document in a few bullet points.';
    else if (action === 'keypoints') prompt = 'What are the key points and main takeaways from this document?';
    else if (action === 'questions') prompt = 'Generate 5 important questions someone should be able to answer after reading this document.';
    else return;

    setInput(prompt);
    // Auto-send
    setTimeout(() => {
      const fakeEvent = { preventDefault: () => {} };
      setInput('');
      setMessages(prev => [...prev, { role: 'user', content: prompt }]);
      setIsLoading(true);
      extractDocumentText().then(text => {
        return callAI(prompt, text || '(No text extracted)');
      }).then(response => {
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      }).catch(err => {
        setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${err.message}` }]);
      }).finally(() => setIsLoading(false));
    }, 0);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('sb_ai_key', apiKey);
    localStorage.setItem('sb_ai_provider', provider);
    setShowSettings(false);
  };

  return (
    <div className="ai-panel">
      <div className="ai-panel-header">
        <h3>AI Assistant</h3>
        <div>
          <button className="sticky-note-btn" onClick={() => setShowSettings(v => !v)} title="Settings">⚙</button>
          <button className="sticky-note-btn" onClick={onClose} title="Close">✕</button>
        </div>
      </div>

      {showSettings && (
        <div className="ai-settings">
          <div className="form-group" style={{ margin: '8px 0' }}>
            <label style={{ fontSize: '0.75rem' }}>AI Provider</label>
            <select value={provider} onChange={(e) => setProvider(e.target.value)} style={{ fontSize: '0.8rem' }}>
              <option value="openai">OpenAI (GPT-4o mini)</option>
              <option value="anthropic">Anthropic (Claude Haiku)</option>
            </select>
          </div>
          <div className="form-group" style={{ margin: '8px 0' }}>
            <label style={{ fontSize: '0.75rem' }}>API Key</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder={provider === 'openai' ? 'sk-...' : 'sk-ant-...'}
              style={{ fontSize: '0.8rem' }}
            />
          </div>
          <button className="small primary" onClick={handleSaveSettings} style={{ width: '100%', marginTop: 4 }}>
            Save Settings
          </button>
          <p style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', marginTop: 4 }}>
            Your API key is stored locally in your browser and never sent to our servers.
          </p>
        </div>
      )}

      {!apiKey && !showSettings && (
        <div className="ai-setup-prompt">
          <p>Set up your AI provider to use the assistant.</p>
          <button className="small primary" onClick={() => setShowSettings(true)}>Configure AI</button>
        </div>
      )}

      {apiKey && (
        <>
          {messages.length === 0 && (
            <div className="ai-quick-actions">
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 8 }}>Quick actions:</p>
              <button className="ai-quick-btn" onClick={() => handleQuickAction('summarize')}>📝 Summarize</button>
              <button className="ai-quick-btn" onClick={() => handleQuickAction('keypoints')}>🎯 Key Points</button>
              <button className="ai-quick-btn" onClick={() => handleQuickAction('questions')}>❓ Generate Questions</button>
            </div>
          )}

          <div className="ai-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`ai-message ${msg.role}`}>
                <div className="ai-message-content">{msg.content}</div>
              </div>
            ))}
            {isLoading && (
              <div className="ai-message assistant">
                <div className="ai-message-content ai-typing">Thinking...</div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="ai-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about this document..."
              disabled={isLoading}
            />
            <button className="primary" onClick={handleSend} disabled={isLoading || !input.trim()}>
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AIPanel;
