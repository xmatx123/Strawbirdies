import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Use the bundled worker from the installed package (Vite resolves this correctly)
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).href;

/**
 * Renders a single PDF page onto a canvas.
 * Accepts either a pdfjsDoc (PDFDocumentProxy) or a URL string for pdfFile.
 * Prefer passing pdfjsDoc to avoid re-loading the PDF on every render.
 */
const PDFPageRenderer = ({
  pdfjsDoc,
  pdfFile,
  pageNumber, // 1-based
  scale = 0.3,
  onSelect,
  isSelected,
  isDeleting,
}) => {
  const canvasRef = useRef(null);
  const renderTaskRef = useRef(null);

  useEffect(() => {
    const source = pdfjsDoc || pdfFile;
    if (!source) return;

    let cancelled = false;

    const renderPage = async () => {
      try {
        // Cancel any previous render task
        if (renderTaskRef.current) {
          renderTaskRef.current.cancel();
          renderTaskRef.current = null;
        }

        let doc = pdfjsDoc;
        if (!doc) {
          doc = await pdfjsLib.getDocument(pdfFile).promise;
        }
        if (cancelled) return;

        const page = await doc.getPage(pageNumber);
        if (cancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        const viewport = page.getViewport({ scale });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderTask = page.render({ canvasContext: context, viewport });
        renderTaskRef.current = renderTask;

        await renderTask.promise;
        renderTaskRef.current = null;
      } catch (error) {
        if (error?.name !== 'RenderingCancelledException') {
          console.error('Error rendering page:', error);
        }
      }
    };

    renderPage();

    return () => {
      cancelled = true;
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
        renderTaskRef.current = null;
      }
    };
  }, [pdfjsDoc, pdfFile, pageNumber, scale]);

  return (
    <div
      className={`pdf-page-renderer ${isSelected ? 'selected' : ''} ${isDeleting ? 'deleting' : ''}`}
      onClick={onSelect}
    >
      <canvas ref={canvasRef} />
      <div className="page-number">{pageNumber}</div>
    </div>
  );
};

export default PDFPageRenderer;
