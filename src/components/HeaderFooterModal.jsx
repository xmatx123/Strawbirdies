import React, { useState, useEffect } from 'react';

const HeaderFooterModal = ({ isOpen, onClose, onApply, onRemove, currentSettings }) => {
  const [headerText, setHeaderText] = useState('');
  const [footerText, setFooterText] = useState('');
  const [fontSize, setFontSize] = useState(9);

  // Populate from current settings when opening
  useEffect(() => {
    if (isOpen && currentSettings) {
      setHeaderText(currentSettings.header || '');
      setFooterText(currentSettings.footer || '');
      setFontSize(currentSettings.fontSize || 9);
    }
  }, [isOpen, currentSettings]);

  if (!isOpen) return null;

  const hasHeader = currentSettings?.header;
  const hasFooter = currentSettings?.footer;
  const activeLabel = [hasHeader && 'Header', hasFooter && 'Footer'].filter(Boolean).join(' & ');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Headers & Footers</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          {currentSettings && (
            <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 6, padding: '8px 12px', marginBottom: '0.75rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>{activeLabel} active</span>
              <button onClick={onRemove} className="danger" style={{ fontSize: '0.75rem', padding: '2px 8px', minWidth: 'auto' }}>Remove</button>
            </div>
          )}
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            Use <code>{'{page}'}</code> for page number and <code>{'{total}'}</code> for total pages.
          </p>
          <div className="form-group">
            <label>Header Text</label>
            <input type="text" value={headerText} onChange={(e) => setHeaderText(e.target.value)} placeholder="e.g. My Document - Page {page}" />
          </div>
          <div className="form-group">
            <label>Footer Text</label>
            <input type="text" value={footerText} onChange={(e) => setFooterText(e.target.value)} placeholder="e.g. Page {page} of {total}" />
          </div>
          <div className="form-group">
            <label>Font Size: {fontSize}pt</label>
            <input type="range" min="6" max="16" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} />
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary" onClick={() => onApply(headerText, footerText, { fontSize })} disabled={!headerText && !footerText}>
            {currentSettings ? 'Update' : 'Apply'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderFooterModal;
