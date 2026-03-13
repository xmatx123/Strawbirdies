import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUpload from '../components/FileUpload';
import BatchModal from '../components/BatchModal';
import * as pdfUtils from '../lib/pdfUtils';

const StrawberryBirdWhite = () => (
  <svg width="72" height="72" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-brand-mark">
    {/* Body */}
    <ellipse cx="15" cy="20" rx="9" ry="10" fill="white" fillOpacity="0.95"/>
    <ellipse cx="15" cy="17" rx="10" ry="8" fill="white" fillOpacity="0.95"/>
    {/* Wings */}
    <ellipse cx="6" cy="18" rx="4" ry="3" fill="white" fillOpacity="0.7" transform="rotate(-20 6 18)"/>
    <ellipse cx="24" cy="18" rx="4" ry="3" fill="white" fillOpacity="0.7" transform="rotate(20 24 18)"/>
    {/* Green leaf */}
    <path d="M12 9 Q15 4 18 9" stroke="#86efac" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <line x1="15" y1="9" x2="15" y2="12" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Eyes */}
    <ellipse cx="12" cy="17" rx="1.8" ry="1.8" fill="white"/>
    <ellipse cx="18" cy="17" rx="1.8" ry="1.8" fill="white"/>
    <circle cx="12.5" cy="17" r="0.8" fill="#1A0A08"/>
    <circle cx="18.5" cy="17" r="0.8" fill="#1A0A08"/>
    {/* Beak */}
    <polygon points="21,19 24,20.5 21,22" fill="#FFD166"/>
  </svg>
);

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showBatchModal, setShowBatchModal] = useState(false);

  const handleFileSelect = async (file) => {
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = (e) => {
      const arrayBuffer = e.target.result;
      const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      sessionStorage.setItem('pdfData', url);
      sessionStorage.setItem('pdfFileName', file.name);
      setIsLoading(false);
      navigate('/editor');
    };
    reader.onerror = () => {
      alert('Error reading file');
      setIsLoading(false);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="home-page">
      <header className="hero fade-in">
        <StrawberryBirdWhite />
        <h1>Strawbirdies PDF Editor</h1>
        <p className="tagline">Edit PDFs like magic. No installs, no fuss.</p>
      </header>

      <main className="upload-section fade-in-delay-1">
        <div className="upload-card">
          <FileUpload
            onFileSelect={handleFileSelect}
            isLoading={isLoading}
          />
        </div>

        <div className="quick-actions">
          <button
            onClick={async () => {
              setIsLoading(true);
              try {
                const doc = await pdfUtils.createBlankPDF();
                const bytes = await doc.save();
                const blob = new Blob([bytes], { type: 'application/pdf' });
                const url = URL.createObjectURL(blob);
                sessionStorage.setItem('pdfData', url);
                sessionStorage.setItem('pdfFileName', 'new-document.pdf');
                navigate('/editor');
              } catch (err) {
                console.error(err);
                alert('Error creating blank PDF');
              } finally {
                setIsLoading(false);
              }
            }}
            className="quick-action-btn"
          >
            📄 Create Blank PDF
          </button>
          <button
            onClick={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = 'image/png,image/jpeg,image/jpg';
              input.multiple = true;
              input.onchange = async (e) => {
                const files = Array.from(e.target.files);
                if (files.length === 0) return;
                setIsLoading(true);
                try {
                  const doc = await pdfUtils.imagesToPdf(files);
                  const bytes = await doc.save();
                  const blob = new Blob([bytes], { type: 'application/pdf' });
                  const url = URL.createObjectURL(blob);
                  sessionStorage.setItem('pdfData', url);
                  sessionStorage.setItem('pdfFileName', 'images.pdf');
                  navigate('/editor');
                } catch (err) {
                  console.error(err);
                  alert('Error converting images to PDF');
                } finally {
                  setIsLoading(false);
                }
              };
              input.click();
            }}
            className="quick-action-btn"
          >
            🖼 Images to PDF
          </button>
          <button
            onClick={() => setShowBatchModal(true)}
            className="quick-action-btn"
          >
            ⚡ Batch Operations
          </button>
        </div>
      </main>

      <section className="features fade-in-delay-2">
        <h2>Everything you need, nothing you don&apos;t</h2>
        <div className="feature-grid">
          <div className="feature">
            <span className="icon">✏️</span>
            <h3>Edit &amp; Add Text</h3>
            <p>Place text boxes anywhere on your PDF with full formatting</p>
          </div>
          <div className="feature">
            <span className="icon">✍️</span>
            <h3>Sign &amp; Annotate</h3>
            <p>Draw, type or upload signatures. Add highlights and notes</p>
          </div>
          <div className="feature">
            <span className="icon">🖼</span>
            <h3>Insert Images</h3>
            <p>Add photos and graphics to any page, positioned with drag-and-drop</p>
          </div>
          <div className="feature">
            <span className="icon">🎨</span>
            <h3>Draw &amp; Markup</h3>
            <p>Freehand pen, shapes, arrows, highlights, and redaction tools</p>
          </div>
          <div className="feature">
            <span className="icon">⊞</span>
            <h3>Merge &amp; Split</h3>
            <p>Combine multiple PDFs or extract page ranges into new files</p>
          </div>
          <div className="feature">
            <span className="icon">💧</span>
            <h3>Watermark &amp; Numbers</h3>
            <p>Add watermarks, page numbers, headers and footers</p>
          </div>
          <div className="feature">
            <span className="icon">📤</span>
            <h3>Export &amp; Convert</h3>
            <p>Export pages as images or convert images into PDFs</p>
          </div>
          <div className="feature">
            <span className="icon">🔍</span>
            <h3>Find Text</h3>
            <p>Search for text across all pages with match navigation</p>
          </div>
          <div className="feature">
            <span className="icon">🔒</span>
            <h3>Protect &amp; Compress</h3>
            <p>Password protect, compress, and strip metadata from PDFs</p>
          </div>
        </div>
      </section>

      <footer className="home-footer fade-in-delay-3">
        <p>Made with ❤️ and 🍓 by Strawbirdies • Free forever</p>
      </footer>

      <BatchModal isOpen={showBatchModal} onClose={() => setShowBatchModal(false)} />
    </div>
  );
};

export default Home;
