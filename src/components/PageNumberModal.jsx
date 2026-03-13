import React, { useState } from 'react';

const PageNumberModal = ({ isOpen, onClose, onApply }) => {
  const [position, setPosition] = useState('bottom-center');
  const [format, setFormat] = useState('number');
  const [startNumber, setStartNumber] = useState(1);
  const [fontSize, setFontSize] = useState(10);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Page Numbers</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
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
            Apply Page Numbers
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNumberModal;
