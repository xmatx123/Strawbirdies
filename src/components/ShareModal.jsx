import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { storage, db } from '../lib/firebase';

const isFirebaseConfigured = () => {
  return (
    import.meta.env.VITE_FIREBASE_API_KEY &&
    import.meta.env.VITE_FIREBASE_API_KEY !== 'YOUR_API_KEY'
  );
};

const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const ShareModal = ({ isOpen, onClose, getPdfBlob, pdfBlob, fileName }) => {
  const [shareLink, setShareLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerateLink = async () => {
    // Resolve blob from prop or getter
    let resolvedBlob = pdfBlob;
    if (!resolvedBlob && getPdfBlob) {
      resolvedBlob = await getPdfBlob();
    }
    if (!resolvedBlob) {
      setError('No PDF available to share.');
      return;
    }
    setIsLoading(true);
    setError('');
    setShareLink('');

    try {
      const uuid = generateUUID();
      const storageRef = ref(storage, `shared/${uuid}.pdf`);

      await uploadBytes(storageRef, resolvedBlob, { contentType: 'application/pdf' });
      const downloadUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, 'sharedDocs'), {
        id: uuid,
        url: downloadUrl,
        name: fileName || 'document.pdf',
        createdAt: serverTimestamp(),
      });

      const link = `https://strawbirdies.com/view/${uuid}`;
      setShareLink(link);
    } catch (err) {
      console.error('Share error:', err);
      setError('Failed to generate share link. Please check Firebase configuration.');
    }

    setIsLoading(false);
  };

  const handleCopy = () => {
    if (!shareLink) return;
    navigator.clipboard
      .writeText(shareLink)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        alert('Could not copy to clipboard');
      });
  };

  const handleClose = () => {
    setShareLink('');
    setError('');
    setCopied(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Share PDF</h2>
          <button className="close-btn" onClick={handleClose}>×</button>
        </div>

        <div className="modal-body">
          {!isFirebaseConfigured() ? (
            <div
              style={{
                padding: '1rem',
                background: '#fef3c7',
                borderRadius: 'var(--radius)',
                color: '#92400e',
                fontSize: '0.875rem',
              }}
            >
              Share requires Firebase configuration. Set your Firebase environment variables to enable sharing.
            </div>
          ) : (
            <>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                Upload your PDF to Firebase Storage and generate a shareable link.
              </p>

              {fileName && (
                <p style={{ fontWeight: 500, marginBottom: '1rem' }}>
                  File: {fileName}
                </p>
              )}

              {!shareLink && (
                <button
                  onClick={handleGenerateLink}
                  className="primary-btn"
                  disabled={isLoading}
                  style={{ width: '100%' }}
                >
                  {isLoading ? 'Uploading...' : 'Generate Link'}
                </button>
              )}

              {isLoading && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1rem' }}>
                  <div className="dots-loader">
                    <span/><span/><span/>
                  </div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Uploading PDF...</span>
                </div>
              )}

              {shareLink && (
                <div style={{ marginTop: '1rem' }}>
                  <p style={{ fontWeight: 500, marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    Shareable Link:
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                      type="text"
                      value={shareLink}
                      readOnly
                      style={{
                        flex: 1,
                        padding: '0.5rem',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)',
                        fontSize: '0.875rem',
                        background: 'var(--bg-secondary)',
                      }}
                    />
                    <button onClick={handleCopy} className={copied ? 'primary-btn' : ''}>
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              )}

              {error && (
                <p style={{ color: 'var(--danger)', marginTop: '0.75rem', fontSize: '0.875rem' }}>
                  {error}
                </p>
              )}
            </>
          )}
        </div>

        <div className="modal-footer">
          <button onClick={handleClose} className="cancel-btn">Close</button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
