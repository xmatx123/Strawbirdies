import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const MergeModal = ({ isOpen, onClose, onMerge }) => {
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prev) => [
      ...prev,
      ...acceptedFiles.filter((f) => f.type === 'application/pdf'),
    ]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: true,
  });

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      alert('Please select at least 2 PDF files to merge');
      return;
    }
    setIsProcessing(true);
    try {
      await onMerge(files);
    } catch (error) {
      console.error('Merge error:', error);
      alert('Error merging PDFs');
    }
    setIsProcessing(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Merge PDFs</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div {...getRootProps()} className="merge-dropzone">
            <input {...getInputProps()} />
            <p>Drop additional PDFs here</p>
            <span>or click to select</span>
          </div>

          {files.length > 0 && (
            <div className="file-list">
              <h3>Files to merge ({files.length}):</h3>
              <ul>
                {files.map((file, index) => (
                  <li key={index}>
                    <span>{file.name}</span>
                    <button onClick={() => removeFile(index)}>×</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="cancel-btn">Cancel</button>
          <button 
            onClick={handleMerge} 
            className="primary-btn"
            disabled={files.length < 2 || isProcessing}
          >
            {isProcessing ? 'Merging...' : 'Merge PDFs'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MergeModal;
