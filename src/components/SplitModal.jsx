import React, { useState } from 'react';

const SplitModal = ({ isOpen, onClose, onSplit, pageCount }) => {
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(pageCount);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSplit = async () => {
    if (startPage < 1 || endPage > pageCount || startPage > endPage) {
      alert('Invalid page range');
      return;
    }
    setIsProcessing(true);
    try {
      await onSplit(startPage - 1, endPage - 1);
    } catch (error) {
      console.error('Split error:', error);
      alert('Error splitting PDF');
    }
    setIsProcessing(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Split PDF</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <p>Select the page range to extract:</p>
          <div className="page-range-inputs">
            <label>
              From page:
              <input
                type="number"
                min={1}
                max={pageCount}
                value={startPage}
                onChange={(e) => setStartPage(parseInt(e.target.value) || 1)}
              />
            </label>
            <label>
              To page:
              <input
                type="number"
                min={1}
                max={pageCount}
                value={endPage}
                onChange={(e) => setEndPage(parseInt(e.target.value) || pageCount)}
              />
            </label>
          </div>
          <p className="page-count">Total pages: {pageCount}</p>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="cancel-btn">Cancel</button>
          <button 
            onClick={handleSplit} 
            className="primary-btn"
            disabled={isProcessing}
          >
            {isProcessing ? 'Splitting...' : 'Extract Pages'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplitModal;
