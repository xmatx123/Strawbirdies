import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PDFPageRenderer = ({ pdfFile, pageNumber, scale = 0.3, onSelect, isSelected, isDeleting }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!pdfFile) return;

    const renderPage = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(pdfFile);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(pageNumber);
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const viewport = page.getViewport({ scale });
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;
      } catch (error) {
        console.error('Error rendering page:', error);
      }
    };

    renderPage();
  }, [pdfFile, pageNumber, scale]);

  return (
    <div
      className={`pdf-page-renderer ${isSelected ? 'selected' : ''} ${isDeleting ? 'deleting' : ''}`}
      onClick={onSelect}
    >
      <canvas ref={canvasRef} />
      <div className="page-number">{pageNumber + 1}</div>
    </div>
  );
};

export default PDFPageRenderer;
