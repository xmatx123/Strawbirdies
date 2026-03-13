import React, { useState, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import * as pdfUtils from '../lib/pdfUtils';

const OPERATIONS = [
  { id: 'merge', label: 'Merge into one PDF', icon: '📎' },
  { id: 'compress', label: 'Compress all', icon: '📦' },
  { id: 'watermark', label: 'Add watermark to all', icon: '💧' },
  { id: 'pageNumbers', label: 'Add page numbers', icon: '🔢' },
  { id: 'removeMetadata', label: 'Remove metadata from all', icon: '🧹' },
  { id: 'convertImages', label: 'Convert images to PDFs', icon: '🖼' },
];

const BatchModal = ({ isOpen, onClose }) => {
  const [files, setFiles] = useState([]);
  const [operation, setOperation] = useState('merge');
  const [watermarkText, setWatermarkText] = useState('CONFIDENTIAL');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState('');
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFileAdd = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...newFiles]);
  };

  const handleRemoveFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const downloadBlob = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleProcess = async () => {
    if (files.length === 0) return;
    setIsProcessing(true);
    setProgress(0);

    try {
      if (operation === 'merge') {
        setProgressText('Merging PDFs...');
        const pdfs = [];
        for (let i = 0; i < files.length; i++) {
          setProgress(Math.round((i / files.length) * 80));
          const doc = await PDFDocument.load(await files[i].arrayBuffer());
          pdfs.push(doc);
        }
        const merged = await pdfUtils.mergePDFs(pdfs);
        const bytes = await merged.save();
        const blob = new Blob([bytes], { type: 'application/pdf' });
        downloadBlob(blob, 'merged.pdf');
      }

      if (operation === 'compress') {
        for (let i = 0; i < files.length; i++) {
          setProgressText(`Compressing ${files[i].name}...`);
          setProgress(Math.round((i / files.length) * 100));
          const doc = await PDFDocument.load(await files[i].arrayBuffer());
          const compressed = await pdfUtils.compressPDF(doc);
          const bytes = await compressed.save();
          const blob = new Blob([bytes], { type: 'application/pdf' });
          downloadBlob(blob, files[i].name.replace('.pdf', '_compressed.pdf'));
          if (files.length > 1) await new Promise(r => setTimeout(r, 300));
        }
      }

      if (operation === 'watermark') {
        for (let i = 0; i < files.length; i++) {
          setProgressText(`Watermarking ${files[i].name}...`);
          setProgress(Math.round((i / files.length) * 100));
          const doc = await PDFDocument.load(await files[i].arrayBuffer());
          await pdfUtils.addWatermark(doc, watermarkText);
          const bytes = await doc.save();
          const blob = new Blob([bytes], { type: 'application/pdf' });
          downloadBlob(blob, files[i].name.replace('.pdf', '_watermarked.pdf'));
          if (files.length > 1) await new Promise(r => setTimeout(r, 300));
        }
      }

      if (operation === 'pageNumbers') {
        for (let i = 0; i < files.length; i++) {
          setProgressText(`Adding page numbers to ${files[i].name}...`);
          setProgress(Math.round((i / files.length) * 100));
          const doc = await PDFDocument.load(await files[i].arrayBuffer());
          await pdfUtils.addPageNumbers(doc);
          const bytes = await doc.save();
          const blob = new Blob([bytes], { type: 'application/pdf' });
          downloadBlob(blob, files[i].name.replace('.pdf', '_numbered.pdf'));
          if (files.length > 1) await new Promise(r => setTimeout(r, 300));
        }
      }

      if (operation === 'removeMetadata') {
        for (let i = 0; i < files.length; i++) {
          setProgressText(`Cleaning ${files[i].name}...`);
          setProgress(Math.round((i / files.length) * 100));
          const doc = await PDFDocument.load(await files[i].arrayBuffer());
          pdfUtils.removeMetadata(doc);
          const bytes = await doc.save();
          const blob = new Blob([bytes], { type: 'application/pdf' });
          downloadBlob(blob, files[i].name.replace('.pdf', '_clean.pdf'));
          if (files.length > 1) await new Promise(r => setTimeout(r, 300));
        }
      }

      if (operation === 'convertImages') {
        setProgressText('Converting images to PDF...');
        const doc = await pdfUtils.imagesToPdf(files);
        const bytes = await doc.save();
        const blob = new Blob([bytes], { type: 'application/pdf' });
        downloadBlob(blob, 'images.pdf');
      }

      setProgress(100);
      setProgressText('Done!');
    } catch (err) {
      console.error('Batch error:', err);
      alert('Error processing files: ' + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const acceptTypes = operation === 'convertImages'
    ? 'image/png,image/jpeg,image/jpg'
    : 'application/pdf';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-wide" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Batch Operations</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Operation</label>
            <select value={operation} onChange={(e) => { setOperation(e.target.value); setFiles([]); }}>
              {OPERATIONS.map(op => (
                <option key={op.id} value={op.id}>{op.icon} {op.label}</option>
              ))}
            </select>
          </div>

          {operation === 'watermark' && (
            <div className="form-group">
              <label>Watermark Text</label>
              <input type="text" value={watermarkText} onChange={(e) => setWatermarkText(e.target.value)} />
            </div>
          )}

          <div className="batch-files-area">
            <input
              ref={fileInputRef}
              type="file"
              accept={acceptTypes}
              multiple
              onChange={handleFileAdd}
              style={{ display: 'none' }}
            />
            <button onClick={() => fileInputRef.current?.click()} className="batch-add-btn">
              + Add {operation === 'convertImages' ? 'Images' : 'PDFs'}
            </button>

            {files.length > 0 && (
              <div className="batch-file-list">
                {files.map((f, i) => (
                  <div key={i} className="batch-file-item">
                    <span className="batch-file-name">{f.name}</span>
                    <span className="batch-file-size">{(f.size / 1024).toFixed(0)} KB</span>
                    <button className="batch-file-remove" onClick={() => handleRemoveFile(i)}>✕</button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {isProcessing && (
            <div style={{ marginTop: '0.75rem' }}>
              <div style={{ background: '#eee', borderRadius: 4, height: 8, overflow: 'hidden' }}>
                <div style={{ background: 'var(--accent)', height: '100%', width: `${progress}%`, transition: 'width 0.3s' }} />
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                {progressText} {progress}%
              </p>
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Close</button>
          <button className="primary" onClick={handleProcess} disabled={isProcessing || files.length === 0}>
            {isProcessing ? 'Processing...' : `Process ${files.length} file${files.length !== 1 ? 's' : ''}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BatchModal;
