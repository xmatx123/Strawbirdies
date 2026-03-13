import React, { useState } from 'react';

const WatermarkModal = ({ isOpen, onClose, onApply }) => {
  const [text, setText] = useState('CONFIDENTIAL');
  const [fontSize, setFontSize] = useState(50);
  const [opacity, setOpacity] = useState(0.15);
  const [rotation, setRotation] = useState(45);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Watermark</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Watermark Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter watermark text" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Font Size: {fontSize}pt</label>
              <input type="range" min="20" max="100" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} />
            </div>
            <div className="form-group">
              <label>Opacity: {Math.round(opacity * 100)}%</label>
              <input type="range" min="5" max="50" value={opacity * 100} onChange={(e) => setOpacity(Number(e.target.value) / 100)} />
            </div>
          </div>
          <div className="form-group">
            <label>Rotation: {rotation}°</label>
            <input type="range" min="-90" max="90" value={rotation} onChange={(e) => setRotation(Number(e.target.value))} />
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary" onClick={() => onApply(text, { fontSize, opacity, rotation })} disabled={!text.trim()}>
            Apply Watermark
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatermarkModal;
