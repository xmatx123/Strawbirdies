import React, { useState } from 'react';
import { exportPageAsImage } from '../lib/pdfUtils';

const ExportModal = ({ isOpen, onClose, pdfjsDoc, pageCount }) => {
  const [format, setFormat] = useState('png');
  const [range, setRange] = useState('current'); // 'current' | 'all' | 'custom'
  const [customRange, setCustomRange] = useState('');
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState(0);

  if (!isOpen) return null;

  const getPageNumbers = () => {
    if (range === 'all') {
      return Array.from({ length: pageCount }, (_, i) => i + 1);
    }
    if (range === 'custom') {
      const pages = [];
      customRange.split(',').forEach((part) => {
        const trimmed = part.trim();
        if (trimmed.includes('-')) {
          const [start, end] = trimmed.split('-').map(Number);
          for (let i = start; i <= end && i <= pageCount; i++) {
            if (i >= 1) pages.push(i);
          }
        } else {
          const n = Number(trimmed);
          if (n >= 1 && n <= pageCount) pages.push(n);
        }
      });
      return [...new Set(pages)].sort((a, b) => a - b);
    }
    return [1]; // current page fallback
  };

  const handleExport = async () => {
    if (!pdfjsDoc) return;
    setIsExporting(true);
    setProgress(0);

    try {
      const pages = getPageNumbers();
      for (let i = 0; i < pages.length; i++) {
        const blob = await exportPageAsImage(pdfjsDoc, pages[i], format);
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `page-${pages[i]}.${format}`;
        link.click();
        URL.revokeObjectURL(url);
        setProgress(Math.round(((i + 1) / pages.length) * 100));
        // Small delay between downloads to avoid browser blocking
        if (pages.length > 1) await new Promise(r => setTimeout(r, 300));
      }
    } catch (err) {
      console.error('Export error:', err);
      alert('Error exporting pages');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Export Pages as Images</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Format</label>
            <select value={format} onChange={(e) => setFormat(e.target.value)}>
              <option value="png">PNG (lossless)</option>
              <option value="jpeg">JPEG (smaller)</option>
            </select>
          </div>
          <div className="form-group">
            <label>Pages to Export</label>
            <select value={range} onChange={(e) => setRange(e.target.value)}>
              <option value="all">All pages</option>
              <option value="custom">Custom range</option>
            </select>
          </div>
          {range === 'custom' && (
            <div className="form-group">
              <input
                type="text"
                value={customRange}
                onChange={(e) => setCustomRange(e.target.value)}
                placeholder="e.g. 1-3, 5, 7-10"
              />
            </div>
          )}
          {isExporting && (
            <div style={{ marginTop: '0.75rem' }}>
              <div style={{ background: '#eee', borderRadius: 4, height: 8, overflow: 'hidden' }}>
                <div style={{ background: 'var(--accent)', height: '100%', width: `${progress}%`, transition: 'width 0.3s' }} />
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                Exporting... {progress}%
              </p>
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary" onClick={handleExport} disabled={isExporting}>
            {isExporting ? 'Exporting...' : 'Export'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
