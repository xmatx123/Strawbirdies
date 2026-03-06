import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onFileSelect, isLoading }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file.type === 'application/pdf') {
        onFileSelect(file);
      } else {
        alert('Please upload a PDF file');
      }
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1,
    disabled: isLoading
  });

  return (
    <div 
      {...getRootProps()} 
      className={`file-upload ${isDragActive ? 'active' : ''} ${isLoading ? 'loading' : ''}`}
    >
      <input {...getInputProps()} />
      {isLoading ? (
        <div className="loading-message">
          <div className="spinner"></div>
          <p>Loading PDF...</p>
        </div>
      ) : isDragActive ? (
        <p>Drop the PDF here...</p>
      ) : (
        <div className="upload-prompt">
          <div className="upload-icon">📄</div>
          <h2>Upload Your PDF</h2>
          <p>Drag and drop a PDF file here, or click to select</p>
          <p className="file-types">Supports: PDF files up to 10MB</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
