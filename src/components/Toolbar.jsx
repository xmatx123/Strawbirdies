import React from 'react';

const Toolbar = ({ 
  onRotateLeft, 
  onRotateRight, 
  onDelete, 
  onMerge,
  onSplit,
  onDownload,
  selectedPages,
  pageCount,
  hasChanges
}) => {
  return (
    <div className="toolbar">
      <div className="toolbar-group">
        <button 
          onClick={onRotateLeft} 
          disabled={selectedPages.length === 0}
          title="Rotate left"
        >
          ↺ Rotate Left
        </button>
        <button 
          onClick={onRotateRight} 
          disabled={selectedPages.length === 0}
          title="Rotate right"
        >
          ↻ Rotate Right
        </button>
        <button 
          onClick={onDelete} 
          disabled={selectedPages.length === 0}
          className="danger"
          title="Delete pages"
        >
          🗑 Delete
        </button>
      </div>

      <div className="toolbar-group">
        <button onClick={onMerge}>
          ⊞ Merge PDFs
        </button>
        <button onClick={onSplit} disabled={pageCount < 2}>
          ✂ Split PDF
        </button>
      </div>

      <div className="toolbar-group">
        <button 
          onClick={onDownload}
          className="primary"
          disabled={!hasChanges}
        >
          ⬇ Download
        </button>
      </div>

      <div className="toolbar-info">
        {selectedPages.length > 0 
          ? `${selectedPages.length} page(s) selected`
          : `${pageCount} pages total`
        }
      </div>
    </div>
  );
};

export default Toolbar;
