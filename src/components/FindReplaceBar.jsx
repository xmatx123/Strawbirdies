import React, { useState, useCallback } from 'react';

const FindReplaceBar = ({ pdfjsDoc, pageCount, onGoToPage, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [currentResult, setCurrentResult] = useState(-1);

  const handleSearch = useCallback(async () => {
    if (!pdfjsDoc || !query.trim()) return;
    setSearching(true);
    const found = [];

    try {
      for (let i = 1; i <= pageCount; i++) {
        const page = await pdfjsDoc.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        const lowerQuery = query.toLowerCase();
        const lowerText = pageText.toLowerCase();

        if (lowerText.includes(lowerQuery)) {
          // Count occurrences
          let count = 0;
          let idx = lowerText.indexOf(lowerQuery);
          while (idx !== -1) {
            count++;
            idx = lowerText.indexOf(lowerQuery, idx + 1);
          }
          found.push({ page: i, count, preview: getPreview(pageText, query) });
        }
      }
    } catch (err) {
      console.error('Search error:', err);
    }

    setResults(found);
    setCurrentResult(found.length > 0 ? 0 : -1);
    if (found.length > 0) onGoToPage(found[0].page);
    setSearching(false);
  }, [pdfjsDoc, pageCount, query, onGoToPage]);

  const getPreview = (text, q) => {
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return '';
    const start = Math.max(0, idx - 30);
    const end = Math.min(text.length, idx + q.length + 30);
    return (start > 0 ? '...' : '') + text.slice(start, end) + (end < text.length ? '...' : '');
  };

  const goToResult = (direction) => {
    if (results.length === 0) return;
    const next = direction === 'next'
      ? (currentResult + 1) % results.length
      : (currentResult - 1 + results.length) % results.length;
    setCurrentResult(next);
    onGoToPage(results[next].page);
  };

  const totalCount = results.reduce((sum, r) => sum + r.count, 0);

  return (
    <div className="find-replace-bar">
      <div className="find-input-group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Find text..."
          autoFocus
        />
        <button onClick={handleSearch} disabled={searching || !query.trim()}>
          {searching ? '...' : 'Find'}
        </button>
      </div>

      {results.length > 0 && (
        <div className="find-results">
          <span className="find-count">
            {totalCount} match{totalCount !== 1 ? 'es' : ''} on {results.length} page{results.length !== 1 ? 's' : ''}
          </span>
          <button onClick={() => goToResult('prev')} title="Previous match">‹</button>
          <span style={{ fontSize: '0.75rem' }}>{currentResult + 1}/{results.length}</span>
          <button onClick={() => goToResult('next')} title="Next match">›</button>
        </div>
      )}

      {query && results.length === 0 && !searching && (
        <span className="find-no-results">No matches found</span>
      )}

      <button className="find-close" onClick={onClose} title="Close">✕</button>
    </div>
  );
};

export default FindReplaceBar;
