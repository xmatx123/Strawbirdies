import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import BatchModal from '../components/BatchModal';
import * as pdfUtils from '../lib/pdfUtils';

/* ─────────────────────────────────────────────────────────────────────────────
   STRAWBERRY BIRD LOGO — refined version with better proportions
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
    <ellipse cx="16" cy="19" rx="10" ry="11" fill="#E8453C"/>
    <ellipse cx="16" cy="16" rx="11" ry="9" fill="#E8453C"/>
    {/* Seed dots */}
    <circle cx="12" cy="21" r="1" fill="#C73530"/>
    <circle cx="16" cy="23" r="1" fill="#C73530"/>
    <circle cx="20" cy="21" r="1" fill="#C73530"/>
    <circle cx="14" cy="18" r="0.8" fill="#C73530"/>
    <circle cx="18" cy="18" r="0.8" fill="#C73530"/>
    {/* Wings */}
    <ellipse cx="6" cy="16" rx="4" ry="3" fill="#FF8C69" transform="rotate(-15 6 16)"/>
    <ellipse cx="26" cy="16" rx="4" ry="3" fill="#FF8C69" transform="rotate(15 26 16)"/>
    {/* Leaf/stem */}
    <path d="M13 7 Q16 2 19 7" stroke="#2D6A4F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <line x1="16" y1="7" x2="16" y2="10" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
    {/* Eyes */}
    <ellipse cx="13" cy="14" rx="2.2" ry="2.2" fill="white"/>
    <ellipse cx="19" cy="14" rx="2.2" ry="2.2" fill="white"/>
    <circle cx="13.5" cy="14" r="1.1" fill="#1A0A08"/>
    <circle cx="19.5" cy="14" r="1.1" fill="#1A0A08"/>
    <circle cx="14" cy="13.5" r="0.4" fill="white"/>
    <circle cx="20" cy="13.5" r="0.4" fill="white"/>
    {/* Beak */}
    <polygon points="22,16 26,17.5 22,19" fill="#FFD166"/>
  </svg>
);

/* ─────────────────────────────────────────────────────────────────────────────
   INLINE STYLES — Scoped to this page, avoiding CSS class collisions
   ───────────────────────────────────────────────────────────────────────────── */
const styles = {
  page: {
    minHeight: '100vh',
    background: '#FFFCFA',
    display: 'flex',
    flexDirection: 'column',
  },

  /* Navigation */
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1.5rem, 5vw, 4rem)',
    borderBottom: '1px solid #F5E6E0',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.625rem',
    textDecoration: 'none',
  },
  logoText: {
    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
    fontWeight: 700,
    color: '#E8453C',
    letterSpacing: '-0.02em',
  },
  navLinks: {
    display: 'flex',
    gap: '0.5rem',
  },
  navLink: {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#7A5C58',
    background: 'transparent',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'color 0.15s, background 0.15s',
  },

  /* Main content */
  main: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr)',
    gap: 'clamp(2rem, 6vw, 4rem)',
    padding: 'clamp(2rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
  },

  /* Hero section - asymmetric layout */
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 'clamp(2rem, 5vw, 3rem)',
    alignItems: 'start',
  },
  heroContent: {
    maxWidth: '640px',
  },
  heroEyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.375rem 0.875rem',
    background: '#FFF0EB',
    borderRadius: '100px',
    fontSize: '0.8125rem',
    fontWeight: 600,
    color: '#E8453C',
    marginBottom: '1.25rem',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 7vw, 4rem)',
    fontWeight: 700,
    lineHeight: 1.08,
    letterSpacing: '-0.03em',
    color: '#1A0A08',
    marginBottom: '1rem',
  },
  heroTitleAccent: {
    color: '#E8453C',
  },
  heroSubtitle: {
    fontSize: 'clamp(1.0625rem, 2.5vw, 1.25rem)',
    lineHeight: 1.6,
    color: '#7A5C58',
    maxWidth: '480px',
  },

  /* Upload zone - the hero interaction */
  uploadZone: {
    position: 'relative',
    background: '#FFFFFF',
    border: '2px dashed #E8D5D0',
    borderRadius: '20px',
    padding: 'clamp(2.5rem, 6vw, 4rem) clamp(2rem, 4vw, 3rem)',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
    maxWidth: '580px',
  },
  uploadZoneActive: {
    borderColor: '#E8453C',
    boxShadow: '0 0 0 4px rgba(232, 69, 60, 0.12)',
    transform: 'scale(1.01)',
  },
  uploadZoneHover: {
    borderColor: '#E8453C',
    boxShadow: '0 8px 40px rgba(232, 69, 60, 0.12)',
  },
  uploadIcon: {
    width: '64px',
    height: '64px',
    margin: '0 auto 1.25rem',
    background: 'linear-gradient(135deg, #FFF0EB 0%, #FFE4DC 100%)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadTitle: {
    fontSize: '1.375rem',
    fontWeight: 600,
    color: '#1A0A08',
    marginBottom: '0.5rem',
  },
  uploadSubtitle: {
    fontSize: '0.9375rem',
    color: '#7A5C58',
    marginBottom: '1.5rem',
  },
  uploadButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 1.75rem',
    background: '#E8453C',
    color: 'white',
    border: 'none',
    borderRadius: '100px',
    fontSize: '0.9375rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background 0.15s, transform 0.15s',
  },
  uploadFormats: {
    marginTop: '1.25rem',
    fontSize: '0.8125rem',
    color: '#A89490',
  },

  /* Loading state */
  loadingOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(255, 252, 250, 0.95)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },
  loadingDots: {
    display: 'flex',
    gap: '6px',
  },
  loadingDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#E8453C',
    animation: 'dotPulse 1.2s ease-in-out infinite',
  },
  loadingText: {
    fontSize: '0.9375rem',
    fontWeight: 500,
    color: '#7A5C58',
  },

  /* Quick actions row */
  quickActions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginTop: '1.5rem',
  },
  quickAction: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.625rem 1rem',
    background: '#FFFCFA',
    border: '1px solid #F0DDD8',
    borderRadius: '10px',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#5A4440',
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
  quickActionIcon: {
    fontSize: '1rem',
  },

  /* Features section - editorial layout */
  featuresSection: {
    paddingTop: 'clamp(1rem, 4vw, 2rem)',
    borderTop: '1px solid #F5E6E0',
  },
  featuresHeader: {
    marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
  },
  featuresTitle: {
    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
    fontWeight: 600,
    color: '#1A0A08',
    letterSpacing: '-0.01em',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1px',
    background: '#F0DDD8',
    borderRadius: '16px',
    overflow: 'hidden',
  },
  featureItem: {
    background: '#FFFFFF',
    padding: 'clamp(1.25rem, 3vw, 1.75rem)',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    transition: 'background 0.15s',
    cursor: 'default',
  },
  featureIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    flexShrink: 0,
  },
  featureContent: {
    flex: 1,
  },
  featureName: {
    fontSize: '0.9375rem',
    fontWeight: 600,
    color: '#1A0A08',
    marginBottom: '0.25rem',
  },
  featureDesc: {
    fontSize: '0.8125rem',
    color: '#7A5C58',
    lineHeight: 1.5,
  },

  /* Footer */
  footer: {
    padding: '1.5rem clamp(1.5rem, 5vw, 4rem)',
    borderTop: '1px solid #F5E6E0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  footerText: {
    fontSize: '0.8125rem',
    color: '#A89490',
  },
  footerBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.8125rem',
    color: '#7A5C58',
    fontWeight: 500,
  },
};

/* Feature data with themed colors */
const features = [
  { icon: '✏️', name: 'Edit Text', desc: 'Place text anywhere with full formatting', bg: '#FFF0EB' },
  { icon: '✍️', name: 'Sign', desc: 'Draw, type, or upload signatures', bg: '#E8F5E9' },
  { icon: '🖼', name: 'Images', desc: 'Drag and drop photos onto any page', bg: '#FFF8E1' },
  { icon: '🎨', name: 'Draw', desc: 'Freehand pen, shapes, and highlights', bg: '#F3E5F5' },
  { icon: '📑', name: 'Merge & Split', desc: 'Combine PDFs or extract pages', bg: '#E3F2FD' },
  { icon: '💧', name: 'Watermark', desc: 'Add watermarks and page numbers', bg: '#E0F7FA' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   HOME COMPONENT
   ───────────────────────────────────────────────────────────────────────────── */
const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showBatchModal, setShowBatchModal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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
    <div style={styles.page}>
      {/* Keyframes for loading animation */}
      <style>{`
        @keyframes dotPulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; }
          40% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .home-animate { animation: fadeIn 0.5s ease forwards; }
        .home-animate-1 { animation: fadeIn 0.5s ease 0.1s forwards; opacity: 0; }
        .home-animate-2 { animation: fadeIn 0.5s ease 0.2s forwards; opacity: 0; }
        .home-animate-3 { animation: fadeIn 0.5s ease 0.3s forwards; opacity: 0; }
        .quick-action:hover {
          background: #FFF0EB !important;
          border-color: #E8453C !important;
          color: #E8453C !important;
        }
        .upload-btn:hover {
          background: #C73530 !important;
          transform: translateY(-1px);
        }
        .feature-cell:hover {
          background: #FFFCFA !important;
        }
        .nav-link:hover {
          color: #E8453C !important;
          background: #FFF0EB !important;
        }
        /* Responsive: side-by-side layout on larger screens */
        @media (min-width: 900px) {
          .home-hero {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto auto !important;
            gap: 3rem !important;
            align-items: center !important;
          }
          .home-hero-content {
            grid-column: 1 !important;
            grid-row: 1 / 3 !important;
          }
          .home-upload-zone {
            grid-column: 2 !important;
            grid-row: 1 !important;
            max-width: none !important;
          }
          .home-quick-actions {
            grid-column: 2 !important;
            grid-row: 2 !important;
            margin-top: 0 !important;
          }
        }
        @media (min-width: 1100px) {
          .home-hero {
            gap: 5rem !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav style={styles.nav} className="home-animate">
        <div style={styles.logo}>
          <StrawberryBird size={36} />
          <span style={styles.logoText}>Strawbirdies</span>
        </div>
        <div style={styles.navLinks}>
          <button
            style={styles.navLink}
            className="nav-link"
            onClick={() => setShowBatchModal(true)}
          >
            Batch Tools
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main style={styles.main}>
        {/* Hero section */}
        <section style={styles.hero} className="home-hero">
          <div style={styles.heroContent} className="home-animate-1 home-hero-content">
            <div style={styles.heroEyebrow}>
              <span>Free forever</span>
              <span style={{ color: '#2D6A4F' }}>•</span>
              <span>No signup</span>
            </div>
            <h1 style={styles.heroTitle}>
              Edit PDFs<br />
              <span style={styles.heroTitleAccent}>like magic</span>
            </h1>
            <p style={styles.heroSubtitle}>
              A fast, free PDF editor that runs entirely in your browser.
              No uploads, no accounts, no fuss.
            </p>
          </div>

          {/* Upload zone */}
          <div
            {...getRootProps()}
            style={{
              ...styles.uploadZone,
              ...(isDragActive ? styles.uploadZoneActive : {}),
              ...(isHovering && !isDragActive ? styles.uploadZoneHover : {}),
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="home-animate-2 home-upload-zone"
          >
            <input {...getInputProps()} />

            {isLoading ? (
              <div style={styles.loadingOverlay}>
                <div style={styles.loadingDots}>
                  <div style={{ ...styles.loadingDot, animationDelay: '0s' }} />
                  <div style={{ ...styles.loadingDot, animationDelay: '0.2s' }} />
                  <div style={{ ...styles.loadingDot, animationDelay: '0.4s' }} />
                </div>
                <span style={styles.loadingText}>Opening your PDF...</span>
              </div>
            ) : (
              <>
                <div style={styles.uploadIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8453C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
                <h2 style={styles.uploadTitle}>
                  {isDragActive ? 'Drop your PDF here' : 'Drop a PDF to start editing'}
                </h2>
                <p style={styles.uploadSubtitle}>
                  or click to browse your files
                </p>
                <button
                  style={styles.uploadButton}
                  className="upload-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Choose PDF
                </button>
                <p style={styles.uploadFormats}>PDF files up to 10MB</p>
              </>
            )}
          </div>

          {/* Quick actions */}
          <div style={styles.quickActions} className="home-animate-3 home-quick-actions">
            <button
              style={styles.quickAction}
              className="quick-action"
              onClick={handleCreateBlank}
            >
              <span style={styles.quickActionIcon}>📄</span>
              Create blank PDF
            </button>
            <button
              style={styles.quickAction}
              className="quick-action"
              onClick={handleImagesToPdf}
            >
              <span style={styles.quickActionIcon}>🖼</span>
              Images to PDF
            </button>
            <button
              style={styles.quickAction}
              className="quick-action"
              onClick={() => setShowBatchModal(true)}
            >
              <span style={styles.quickActionIcon}>⚡</span>
              Batch tools
            </button>
          </div>
        </section>

        {/* Features section */}
        <section style={styles.featuresSection} className="home-animate-3">
          <header style={styles.featuresHeader}>
            <h2 style={styles.featuresTitle}>Everything you need, nothing you don't</h2>
          </header>
          <div style={styles.featuresGrid}>
            {features.map((f, i) => (
              <div key={i} style={styles.featureItem} className="feature-cell">
                <div style={{ ...styles.featureIcon, background: f.bg }}>
                  {f.icon}
                </div>
                <div style={styles.featureContent}>
                  <h3 style={styles.featureName}>{f.name}</h3>
                  <p style={styles.featureDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <span style={styles.footerText}>
          Your files never leave your device
        </span>
        <div style={styles.footerBrand}>
          <StrawberryBird size={20} />
          <span>Made with care by Strawbirdies</span>
        </div>
      </footer>

      <BatchModal isOpen={showBatchModal} onClose={() => setShowBatchModal(false)} />
    </div>
  );
};

export default Home;
