import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import BatchModal from '../components/BatchModal';
import * as pdfUtils from '../lib/pdfUtils';
import './Home.css';

/* ─────────────────────────────────────────────────────────────────────────────
   STRAWBERRY BIRD LOGO
   ───────────────────────────────────────────────────────────────────────────── */
const StrawberryBird = ({ size = 48, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Body - strawberry shape */}
    <ellipse cx="16" cy="19" rx="10" ry="11" fill="var(--primary)"/>
    <ellipse cx="16" cy="16" rx="11" ry="9" fill="var(--primary)"/>
    {/* Seed dots */}
    <circle cx="12" cy="21" r="1" fill="var(--primary-hover)"/>
    <circle cx="16" cy="23" r="1" fill="var(--primary-hover)"/>
    <circle cx="20" cy="21" r="1" fill="var(--primary-hover)"/>
    <circle cx="14" cy="18" r="0.8" fill="var(--primary-hover)"/>
    <circle cx="18" cy="18" r="0.8" fill="var(--primary-hover)"/>
    {/* Wings */}
    <ellipse cx="6" cy="16" rx="4" ry="3" fill="#FF8C69" transform="rotate(-15 6 16)"/>
    <ellipse cx="26" cy="16" rx="4" ry="3" fill="#FF8C69" transform="rotate(15 26 16)"/>
    {/* Leaf/stem */}
    <path d="M13 7 Q16 2 19 7" stroke="var(--accent)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <line x1="16" y1="7" x2="16" y2="10" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
    {/* Eyes */}
    <ellipse cx="13" cy="14" rx="2.2" ry="2.2" fill="white"/>
    <ellipse cx="19" cy="14" rx="2.2" ry="2.2" fill="white"/>
    <circle cx="13.5" cy="14" r="1.1" fill="var(--text-primary)"/>
    <circle cx="19.5" cy="14" r="1.1" fill="var(--text-primary)"/>
    <circle cx="14" cy="13.5" r="0.4" fill="white"/>
    <circle cx="20" cy="13.5" r="0.4" fill="white"/>
    {/* Beak */}
    <polygon points="22,16 26,17.5 22,19" fill="#FFD166"/>
  </svg>
);

/* Feature data */
const features = [
  { icon: '✏️', name: 'Edit Text', desc: 'Place text anywhere with full formatting' },
  { icon: '✍️', name: 'Sign', desc: 'Draw, type, or upload signatures' },
  { icon: '🖼', name: 'Images', desc: 'Drag and drop photos onto any page' },
  { icon: '🎨', name: 'Draw', desc: 'Freehand pen, shapes, and highlights' },
  { icon: '📑', name: 'Merge & Split', desc: 'Combine PDFs or extract pages' },
  { icon: '💧', name: 'Watermark', desc: 'Add watermarks and page numbers' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   HOME COMPONENT
   ───────────────────────────────────────────────────────────────────────────── */
const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showBatchModal, setShowBatchModal] = useState(false);

  const handleFileSelect = useCallback(async (file) => {
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
  }, [navigate]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      handleFileSelect(acceptedFiles[0]);
    }
  }, [handleFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: false,
    noClick: false,
  });

  const handleCreateBlank = async () => {
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
  };

  const handleImagesToPdf = () => {
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
  };

  return (
    <div className="home-page-v2">
      {/* Navigation */}
      <nav className="home-nav fade-in">
        <div className="home-logo">
          <StrawberryBird size={36} />
          <span className="home-logo-text">Strawbirdies</span>
        </div>
        <div className="home-nav-links">
          <button
            className="home-nav-link"
            onClick={() => setShowBatchModal(true)}
          >
            Batch Tools
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main className="home-main">
        {/* Hero section */}
        <section className="home-hero">
          <div className="home-hero-content fade-in-delay-1">
            <div className="home-eyebrow">
              <span>Free forever</span>
              <span className="home-eyebrow-dot">•</span>
              <span>No signup</span>
            </div>
            <h1 className="home-title">
              Edit PDFs<br />
              <span className="home-title-accent">like magic</span>
            </h1>
            <p className="home-subtitle">
              A fast, free PDF editor that runs entirely in your browser.
              No uploads, no accounts, no fuss.
            </p>
          </div>

          {/* Upload zone */}
          <div
            {...getRootProps()}
            className={`home-upload-zone fade-in-delay-2 ${isDragActive ? 'active' : ''}`}
            role="button"
            aria-label="Upload PDF file"
          >
            <input {...getInputProps()} aria-label="Choose PDF file" />

            {isLoading ? (
              <div className="home-loading" role="status" aria-live="polite">
                <div className="dots-loader" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="home-loading-text">Opening your PDF...</span>
              </div>
            ) : (
              <>
                <div className="home-upload-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
                <h2 className="home-upload-title">
                  {isDragActive ? 'Drop your PDF here' : 'Drop a PDF to start editing'}
                </h2>
                <p className="home-upload-subtitle">
                  or click to browse your files
                </p>
                <span
                  className="primary home-upload-btn"
                  role="presentation"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Choose PDF
                </span>
                <p className="home-upload-formats">PDF files up to 10MB</p>
              </>
            )}
          </div>

          {/* Quick actions */}
          <div className="home-quick-actions fade-in-delay-3" role="group" aria-label="Quick actions">
            <button className="home-quick-action" onClick={handleCreateBlank} disabled={isLoading}>
              <span className="home-quick-action-icon" aria-hidden="true">📄</span>
              Create blank PDF
            </button>
            <button className="home-quick-action" onClick={handleImagesToPdf} disabled={isLoading}>
              <span className="home-quick-action-icon" aria-hidden="true">🖼</span>
              Images to PDF
            </button>
            <button className="home-quick-action" onClick={() => setShowBatchModal(true)} disabled={isLoading}>
              <span className="home-quick-action-icon" aria-hidden="true">⚡</span>
              Batch tools
            </button>
          </div>
        </section>

        {/* Features section */}
        <section className="home-features fade-in-delay-3" aria-labelledby="features-heading">
          <header className="home-features-header">
            <h2 id="features-heading" className="home-features-title">Everything you need, nothing you don't</h2>
          </header>
          <div className="home-features-grid" role="list">
            {features.map((f, i) => (
              <div key={i} className="home-feature-item" role="listitem">
                <div className="home-feature-icon" aria-hidden="true">
                  {f.icon}
                </div>
                <div className="home-feature-content">
                  <h3 className="home-feature-name">{f.name}</h3>
                  <p className="home-feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="home-footer-v2">
        <span className="home-footer-text">
          Your files never leave your device
        </span>
        <div className="home-footer-brand">
          <StrawberryBird size={20} />
          <span>Made with care by Strawbirdies</span>
        </div>
      </footer>

      <BatchModal isOpen={showBatchModal} onClose={() => setShowBatchModal(false)} />
    </div>
  );
};

export default Home;
