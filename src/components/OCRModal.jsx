import React, { useState } from 'react';
import { createWorker } from 'tesseract.js';

const LANGUAGES = [
  { code: 'eng', label: 'English' },
  { code: 'spa', label: 'Spanish' },
  { code: 'fra', label: 'French' },
  { code: 'deu', label: 'German' },
  { code: 'ita', label: 'Italian' },
  { code: 'por', label: 'Portuguese' },
  { code: 'nld', label: 'Dutch' },
  { code: 'jpn', label: 'Japanese' },
  { code: 'chi_sim', label: 'Chinese (Simplified)' },
  { code: 'kor', label: 'Korean' },
  { code: 'ara', label: 'Arabic' },
  { code: 'hin', label: 'Hindi' },
  { code: 'rus', label: 'Russian' },
];

const OCRModal = ({ isOpen, onClose, pdfjsDoc, pageCount, onOCRComplete }) => {
  const [language, setLanguage] = useState('eng');
  const [range, setRange] = useState('all');
  const [customRange, setCustomRange] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState('');
  const [results, setResults] = useState(null);

  if (!isOpen) return null;

  const getPageNumbers = () => {
    if (range === 'all') {
      return Array.from({ length: pageCount }, (_, i) => i + 1);
    }
    if (range === 'custom') {
      const pages = [];
      customRange.split(',').forEach((part) => {
        const trimmed = part.trim();
        if (trimmed.includes('-')) {
          const [start, end] = trimmed.split('-').map(Number);
          for (let i = start; i <= end && i <= pageCount; i++) {
            if (i >= 1) pages.push(i);
          }
        } else {
          const n = Number(trimmed);
          if (n >= 1 && n <= pageCount) pages.push(n);
        }
      });
      return [...new Set(pages)].sort((a, b) => a - b);
    }
    return [1];
  };

  const renderPageToCanvas = async (pageNum) => {
    const page = await pdfjsDoc.getPage(pageNum);
    const scale = 2;
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');
    await page.render({ canvasContext: ctx, viewport }).promise;
    return canvas;
  };

  const handleOCR = async () => {
    if (!pdfjsDoc) return;
    setIsProcessing(true);
    setProgress(0);
    setResults(null);

    try {
      const pages = getPageNumbers();
      const worker = await createWorker(language, 1, {
        logger: (m) => {
          if (m.status === 'recognizing text') {
            setProgressText(`Recognizing text...`);
          }
        },
      });

      const allText = [];

      for (let i = 0; i < pages.length; i++) {
        setProgressText(`Processing page ${pages[i]} of ${pages[pages.length - 1]}...`);
        setProgress(Math.round((i / pages.length) * 100));

        const canvas = await renderPageToCanvas(pages[i]);
        const { data } = await worker.recognize(canvas);
        allText.push({
          page: pages[i],
          text: data.text,
          confidence: data.confidence,
        });
      }

      await worker.terminate();

      setProgress(100);
      setProgressText('Done!');
      setResults(allText);

      if (onOCRComplete) {
        onOCRComplete(allText);
      }
    } catch (err) {
      console.error('OCR error:', err);
      alert('Error performing OCR: ' + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopyText = () => {
    if (!results) return;
    const text = results.map(r => `--- Page ${r.page} ---\n${r.text}`).join('\n\n');
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };

  const handleDownloadText = () => {
    if (!results) return;
    const text = results.map(r => `--- Page ${r.page} ---\n${r.text}`).join('\n\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ocr-result.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-wide" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>OCR - Extract Text from Scanned PDF</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="form-row">
            <div className="form-group">
              <label>Language</label>
              <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                {LANGUAGES.map(l => (
                  <option key={l.code} value={l.code}>{l.label}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Pages</label>
              <select value={range} onChange={(e) => setRange(e.target.value)}>
                <option value="all">All pages</option>
                <option value="custom">Custom range</option>
              </select>
            </div>
          </div>
          {range === 'custom' && (
            <div className="form-group">
              <input
                type="text"
                value={customRange}
                onChange={(e) => setCustomRange(e.target.value)}
                placeholder="e.g. 1-3, 5, 7-10"
              />
            </div>
          )}

          {isProcessing && (
            <div style={{ marginTop: '0.75rem' }}>
              <div style={{ background: '#eee', borderRadius: 4, height: 8, overflow: 'hidden' }}>
                <div style={{ background: 'var(--accent)', height: '100%', width: `${progress}%`, transition: 'width 0.3s' }} />
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                {progressText} {progress}%
              </p>
            </div>
          )}

          {results && (
            <div className="ocr-results">
              <div className="ocr-results-header">
                <h3>Extracted Text</h3>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button onClick={handleCopyText} className="small">📋 Copy</button>
                  <button onClick={handleDownloadText} className="small">💾 Save as TXT</button>
                </div>
              </div>
              <div className="ocr-results-text">
                {results.map(r => (
                  <div key={r.page} className="ocr-page-result">
                    <div className="ocr-page-header">
                      Page {r.page} <span className="ocr-confidence">{Math.round(r.confidence)}% confidence</span>
                    </div>
                    <pre>{r.text || '(No text detected)'}</pre>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Close</button>
          <button className="primary" onClick={handleOCR} disabled={isProcessing}>
            {isProcessing ? 'Processing...' : 'Run OCR'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OCRModal;
