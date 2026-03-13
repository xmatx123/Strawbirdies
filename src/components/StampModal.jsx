import React, { useState } from 'react';

const PRESET_STAMPS = [
  { label: 'APPROVED', color: '#16a34a', bg: '#dcfce7' },
  { label: 'REJECTED', color: '#dc2626', bg: '#fee2e2' },
  { label: 'DRAFT', color: '#9333ea', bg: '#f3e8ff' },
  { label: 'CONFIDENTIAL', color: '#dc2626', bg: '#fee2e2' },
  { label: 'FINAL', color: '#1e40af', bg: '#dbeafe' },
  { label: 'REVIEWED', color: '#0891b2', bg: '#cffafe' },
  { label: 'COPY', color: '#6b7280', bg: '#f3f4f6' },
  { label: 'NOT APPROVED', color: '#dc2626', bg: '#fee2e2' },
];

const StampModal = ({ isOpen, onClose, onApply }) => {
  const [selectedStamp, setSelectedStamp] = useState(null);
  const [customText, setCustomText] = useState('');
  const [includeDate, setIncludeDate] = useState(false);
  const [stampSize, setStampSize] = useState(40);

  if (!isOpen) return null;

  const handleApply = () => {
    let text;
    if (selectedStamp !== null) {
      text = PRESET_STAMPS[selectedStamp].label;
    } else if (customText.trim()) {
      text = customText.trim().toUpperCase();
    } else return;

    if (includeDate) {
      text += `\n${new Date().toLocaleDateString()}`;
    }

    const stamp = selectedStamp !== null ? PRESET_STAMPS[selectedStamp] : { color: '#1e40af', bg: '#dbeafe' };
    onApply({ text, color: stamp.color, bg: stamp.bg, fontSize: stampSize });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Stamp</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="stamp-grid">
            {PRESET_STAMPS.map((s, i) => (
              <button
                key={s.label}
                className={`stamp-preset ${selectedStamp === i ? 'selected' : ''}`}
                style={{ color: s.color, background: s.bg, border: selectedStamp === i ? `2px solid ${s.color}` : '2px solid transparent' }}
                onClick={() => { setSelectedStamp(i); setCustomText(''); }}
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className="form-group" style={{ marginTop: '0.75rem' }}>
            <label>Or custom text</label>
            <input
              type="text"
              value={customText}
              onChange={(e) => { setCustomText(e.target.value); setSelectedStamp(null); }}
              placeholder="YOUR STAMP TEXT"
              maxLength={30}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Size: {stampSize}pt</label>
              <input type="range" min="20" max="72" value={stampSize} onChange={(e) => setStampSize(Number(e.target.value))} />
            </div>
            <div className="form-group">
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={includeDate}
                  onChange={(e) => setIncludeDate(e.target.checked)}
                />
                Include date
              </label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary" onClick={handleApply} disabled={selectedStamp === null && !customText.trim()}>
            Place Stamp
          </button>
        </div>
      </div>
    </div>
  );
};

export default StampModal;
