import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PDFViewer = ({ pdfFile, onLoad, scale = 1.0 }) => {
  const canvasRef = useRef(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [rendering, setRendering] = useState(false);

  useEffect(() => {
    if (!pdfFile) return;

    const loadPDF = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(pdfFile);
        const pdf = await loadingTask.promise;
        setPdfDoc(pdf);
        if (onLoad) onLoad(pdf);
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };

    loadPDF();
  }, [pdfFile]);

  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;

    const renderPage = async () => {
      if (rendering) return;
      setRendering(true);

      try {
        const page = await pdfDoc.getPage(pageNum);
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

      setRendering(false);
    };

    renderPage();
  }, [pdfDoc, pageNum, scale]);

  if (!pdfFile) {
    return <div className="no-pdf">No PDF loaded</div>;
  }

  return (
    <div className="pdf-viewer">
      <canvas ref={canvasRef} />
      {pdfDoc && (
        <div className="pdf-controls">
          <button
            onClick={() => setPageNum((p) => Math.max(1, p - 1))}
            disabled={pageNum <= 1}
          >
            Previous
          </button>
          <span>
            Page {pageNum} of {pdfDoc.numPages}
          </span>
          <button
            onClick={() => setPageNum((p) => Math.min(pdfDoc.numPages, p + 1))}
            disabled={pageNum >= pdfDoc.numPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
