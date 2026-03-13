import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ref, getDownloadURL } from 'firebase/storage';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { storage, db } from '../lib/firebase';
import PDFViewer from '../components/PDFViewer';

const Viewer = () => {
  const { docId } = useParams();
  const [pdfUrl, setPdfUrl] = useState(null);
  const [docName, setDocName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPDF = async () => {
      if (!docId) {
        setError('Invalid document ID.');
        setIsLoading(false);
        return;
      }

      try {
        // Try to fetch metadata from Firestore
        const q = query(collection(db, 'sharedDocs'), where('id', '==', docId));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const data = snapshot.docs[0].data();
          setPdfUrl(data.url);
          setDocName(data.name || 'Shared Document');
        } else {
          // Fallback: try to get directly from Storage
          const storageRef = ref(storage, `shared/${docId}.pdf`);
          const url = await getDownloadURL(storageRef);
          setPdfUrl(url);
          setDocName('Shared Document');
        }
      } catch (err) {
        console.error('Error loading shared PDF:', err);
        setError('Could not load the shared document. It may have been removed or the link is invalid.');
      }

      setIsLoading(false);
    };

    fetchPDF();
  }, [docId]);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner" />
        <p>Loading shared document...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading-screen">
        <p style={{ color: 'var(--danger)', textAlign: 'center', maxWidth: 400 }}>{error}</p>
        <a href="/" style={{ color: 'var(--primary)', marginTop: '1rem' }}>
          Go to Strawbirdies
        </a>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <header
        style={{
          padding: '1rem 2rem',
          background: 'var(--bg-card)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <a href="/" style={{ textDecoration: 'none', color: 'var(--primary)', fontWeight: 600 }}>
          Strawbirdies
        </a>
        <span style={{ color: 'var(--text-secondary)' }}>/</span>
        <span style={{ fontWeight: 500 }}>{docName}</span>
      </header>

      <main style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
        {pdfUrl ? (
          <PDFViewer pdfFile={pdfUrl} scale={1.2} />
        ) : (
          <p style={{ color: 'var(--text-secondary)' }}>No PDF found.</p>
        )}
      </main>
    </div>
  );
};

export default Viewer;
