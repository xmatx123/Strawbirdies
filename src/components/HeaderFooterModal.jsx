import React, { useState } from 'react';

const HeaderFooterModal = ({ isOpen, onClose, onApply }) => {
  const [headerText, setHeaderText] = useState('');
  const [footerText, setFooterText] = useState('');
  const [fontSize, setFontSize] = useState(9);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Headers & Footers</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
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
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderFooterModal;
