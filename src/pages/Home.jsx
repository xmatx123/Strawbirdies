import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUpload from '../components/FileUpload';

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);

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
      <header className="hero">
        <h1>Strawbirdies PDF Editor</h1>
        <p className="tagline">Free, powerful PDF editing in your browser</p>
      </header>

      <main className="upload-section">
        <FileUpload 
          onFileSelect={handleFileSelect} 
          isLoading={isLoading}
        />
      </main>

      <section className="features">
        <h2>What you can do for free:</h2>
        <div className="feature-grid">
          <div className="feature">
            <span className="icon">📄</span>
            <h3>View PDFs</h3>
            <p>Open and read any PDF document</p>
          </div>
          <div className="feature">
            <span className="icon">✂️</span>
            <h3>Delete Pages</h3>
            <p>Remove unwanted pages</p>
          </div>
          <div className="feature">
            <span className="icon">↻</span>
            <h3>Rotate Pages</h3>
            <p>Rotate pages left or right</p>
          </div>
          <div className="feature">
            <span className="icon">⊞</span>
            <h3>Merge PDFs</h3>
            <p>Combine multiple PDFs</p>
          </div>
          <div className="feature">
            <span className="icon">✂</span>
            <h3>Split PDF</h3>
            <p>Extract page ranges</p>
          </div>
          <div className="feature">
            <span className="icon">⬇</span>
            <h3>Download</h3>
            <p>Save your edited PDF</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>No installation required • Runs in your browser • 100% Free</p>
      </footer>
    </div>
  );
};

export default Home;
