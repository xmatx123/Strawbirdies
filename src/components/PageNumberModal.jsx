import React, { useState, useEffect } from 'react';

const PageNumberModal = ({ isOpen, onClose, onApply, onRemove, currentSettings }) => {
  const [position, setPosition] = useState('bottom-center');
  const [format, setFormat] = useState('number');
  const [startNumber, setStartNumber] = useState(1);
  const [fontSize, setFontSize] = useState(10);

  // Populate from current settings when opening
  useEffect(() => {
    if (isOpen && currentSettings) {
      setPosition(currentSettings.position || 'bottom-center');
      setFormat(currentSettings.format || 'number');
      setStartNumber(currentSettings.startNumber || 1);
      setFontSize(currentSettings.fontSize || 10);
    }
  }, [isOpen, currentSettings]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Page Numbers</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          {currentSettings && (
            <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 6, padding: '8px 12px', marginBottom: '0.75rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Page numbers are active ({currentSettings.format === 'page-of' ? 'Page X of N' : currentSettings.format === 'dash' ? '- X -' : 'numeric'}, {currentSettings.position})</span>
              <button onClick={onRemove} className="danger" style={{ fontSize: '0.75rem', padding: '2px 8px', minWidth: 'auto' }}>Remove</button>
            </div>
          )}
          <div className="form-group">
            <label>Position</label>
            <select value={position} onChange={(e) => setPosition(e.target.value)}>
              <option value="bottom-left">Bottom Left</option>
              <option value="bottom-center">Bottom Center</option>
              <option value="bottom-right">Bottom Right</option>
              <option value="top-left">Top Left</option>
              <option value="top-center">Top Center</option>
              <option value="top-right">Top Right</option>
            </select>
          </div>
          <div className="form-group">
            <label>Format</label>
            <select value={format} onChange={(e) => setFormat(e.target.value)}>
              <option value="number">1, 2, 3...</option>
              <option value="dash">- 1 -, - 2 -...</option>
              <option value="page-of">Page 1 of N</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Start Number</label>
              <input type="number" min="1" value={startNumber} onChange={(e) => setStartNumber(Number(e.target.value))} />
            </div>
            <div className="form-group">
              <label>Font Size</label>
              <input type="number" min="6" max="24" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary" onClick={() => onApply({ position, format, startNumber, fontSize })}>
            {currentSettings ? 'Update Page Numbers' : 'Apply Page Numbers'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNumberModal;
