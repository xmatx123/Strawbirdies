import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FONTS = [
  { name: 'Dancing Script', label: 'Dancing Script', css: "'Dancing Script', cursive" },
  { name: 'Pacifico', label: 'Pacifico', css: "'Pacifico', cursive" },
  { name: 'Great Vibes', label: 'Great Vibes', css: "'Great Vibes', cursive" },
  { name: 'Caveat', label: 'Caveat', cursive: "'Caveat', cursive" },
];

const SignatureModal = ({ isOpen, onClose, onApply }) => {
  const [activeTab, setActiveTab] = useState('draw');
  const [typedText, setTypedText] = useState('');
  const [selectedFont, setSelectedFont] = useState(FONTS[0]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const lastPos = useRef(null);

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&family=Great+Vibes&family=Caveat:wght@700&display=swap';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const getPos = (e, canvas) => {
    const rect = canvas.getBoundingClientRect();
    if (e.touches) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    isDrawing.current = true;
    lastPos.current = getPos(e, canvas);
  };

  const draw = (e) => {
    e.preventDefault();
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const pos = getPos(e, canvas);

    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
    lastPos.current = pos;
  };

  const stopDrawing = () => {
    isDrawing.current = false;
    lastPos.current = null;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setUploadedImage(e.target.result);
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpg', '.jpeg'] },
    multiple: false,
  });

  const getDrawSignatureDataUrl = () => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    return canvas.toDataURL('image/png');
  };

  const getTypedSignatureDataUrl = () => {
    const offscreen = document.createElement('canvas');
    offscreen.width = 400;
    offscreen.height = 120;
    const ctx = offscreen.getContext('2d');
    ctx.clearRect(0, 0, 400, 120);
    ctx.font = `56px ${selectedFont.css || selectedFont.name + ', cursive'}`;
    ctx.fillStyle = '#1e293b';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(typedText, 200, 60);
    return offscreen.toDataURL('image/png');
  };

  const handleApply = () => {
    let dataUrl = null;
    if (activeTab === 'draw') {
      dataUrl = getDrawSignatureDataUrl();
    } else if (activeTab === 'type') {
      if (!typedText.trim()) {
        alert('Please enter signature text');
        return;
      }
      dataUrl = getTypedSignatureDataUrl();
    } else if (activeTab === 'upload') {
      if (!uploadedImage) {
        alert('Please upload an image');
        return;
      }
      dataUrl = uploadedImage;
    }
    if (dataUrl) {
      onApply(dataUrl);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: 520 }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Signature</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="sig-tabs">
            {['draw', 'type', 'upload'].map((tab) => (
              <button
                key={tab}
                className={`sig-tab-btn${activeTab === tab ? ' active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === 'draw' && (
            <div>
              <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                Draw your signature below:
              </p>
              <canvas
                ref={canvasRef}
                width={460}
                height={200}
                className="signature-canvas"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
              />
              <button onClick={clearCanvas} style={{ marginTop: '0.5rem' }}>
                Clear
              </button>
            </div>
          )}

          {activeTab === 'type' && (
            <div>
              <input
                type="text"
                placeholder="Type your name..."
                value={typedText}
                onChange={(e) => setTypedText(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  fontSize: '1rem',
                  marginBottom: '1rem',
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {FONTS.map((font) => (
                  <label key={font.name} className="sig-font-option">
                    <input
                      type="radio"
                      name="sig-font"
                      checked={selectedFont.name === font.name}
                      onChange={() => setSelectedFont(font)}
                    />
                    <span style={{ fontFamily: font.css || `${font.name}, cursive`, fontSize: '1.75rem', marginLeft: '0.75rem' }}>
                      {typedText || font.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'upload' && (
            <div>
              <div {...getRootProps()} className="merge-dropzone">
                <input {...getInputProps()} />
                {uploadedImage ? (
                  <img src={uploadedImage} alt="Uploaded signature" style={{ maxHeight: 120, maxWidth: '100%' }} />
                ) : (
                  <>
                    <p>Drop PNG or JPG here</p>
                    <span>or click to select</span>
                  </>
                )}
              </div>
              {uploadedImage && (
                <button onClick={() => setUploadedImage(null)} style={{ marginTop: '0.5rem' }}>
                  Remove
                </button>
              )}
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="cancel-btn">Cancel</button>
          <button onClick={handleApply} className="primary-btn">
            Apply Signature
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignatureModal;
