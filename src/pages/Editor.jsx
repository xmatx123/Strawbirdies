import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as pdfjsLib from 'pdfjs-dist';
import Toolbar from '../components/Toolbar';
import PageThumbnails from '../components/PageThumbnails';
import PageEditorView from '../components/PageEditorView';
import MergeModal from '../components/MergeModal';
import SplitModal from '../components/SplitModal';
import SignatureModal from '../components/SignatureModal';
import PasswordModal from '../components/PasswordModal';
import ShareModal from '../components/ShareModal';
import AnnotationPanel from '../components/AnnotationPanel';
import ZoomControl from '../components/ZoomControl';
import WatermarkModal from '../components/WatermarkModal';
import PageNumberModal from '../components/PageNumberModal';
import HeaderFooterModal from '../components/HeaderFooterModal';
import ExportModal from '../components/ExportModal';
import FindReplaceBar from '../components/FindReplaceBar';
import StampModal from '../components/StampModal';
import OCRModal from '../components/OCRModal';
import BookmarksPanel from '../components/BookmarksPanel';
import AIPanel from '../components/AIPanel';
import * as pdfUtils from '../lib/pdfUtils';

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).href;

let annotationCounter = 0;
let textBoxCounter = 0;
let highlightCounter = 0;
let drawingCounter = 0;
let imageCounter = 0;
let redactionCounter = 0;
let stickyNoteCounter = 0;
let stampCounter = 0;

const Editor = () => {
  const navigate = useNavigate();

  // pdf-lib document (for manipulation: rotate, delete, merge…)
  const [pdfDoc, setPdfDoc] = useState(null);
  // Current blob URL (for pdfjs rendering)
  const [pdfUrl, setPdfUrl] = useState(null);
  // pdfjs document proxy (for efficient rendering — shared across all thumbnails)
  const [pdfjsDoc, setPdfjsDoc] = useState(null);

  const [pageCount, setPageCount] = useState(0);
  const [activePage, setActivePage] = useState(1); // 1-based, currently viewed page
  const [selectedPages, setSelectedPages] = useState([]); // 0-based, for operations
  const [rotations, setRotations] = useState({});
  const [hasChanges, setHasChanges] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Modals
  const [showMergeModal, setShowMergeModal] = useState(false);
  const [showSplitModal, setShowSplitModal] = useState(false);
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showAnnotationPanel, setShowAnnotationPanel] = useState(false);
  const [showWatermarkModal, setShowWatermarkModal] = useState(false);
  const [showPageNumberModal, setShowPageNumberModal] = useState(false);
  const [showHeaderFooterModal, setShowHeaderFooterModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showFindReplace, setShowFindReplace] = useState(false);
  const [showStampModal, setShowStampModal] = useState(false);
  const [showOCRModal, setShowOCRModal] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [showAIPanel, setShowAIPanel] = useState(false);

  // Core features
  const [zoom, setZoom] = useState(1.0);
  const [annotations, setAnnotations] = useState([]);
  const [signature, setSignature] = useState(null);
  const [textBoxes, setTextBoxes] = useState([]);

  // Overlay content — all get burned into PDF on download
  const [highlights, setHighlights] = useState([]);
  const [drawings, setDrawings] = useState([]);
  const [placedImages, setPlacedImages] = useState([]);
  const [redactions, setRedactions] = useState([]);
  const [stickyNotes, setStickyNotes] = useState([]);
  const [stamps, setStamps] = useState([]);

  // Page numbers & header/footer settings (applied at download, rendered as overlays)
  const [pageNumberSettings, setPageNumberSettings] = useState(null);
  const [headerFooterSettings, setHeaderFooterSettings] = useState(null);

  // Active tool
  const [activeTool, setActiveTool] = useState('select');
  const [drawingTool, setDrawingTool] = useState('freehand');
  const [activeColor, setActiveColor] = useState('#000000');
  const [highlightColor, setHighlightColor] = useState('#fde047');
  const [activeLineWidth, setActiveLineWidth] = useState(2);

  const blobUrlRef = useRef(null);

  // ─── Initial PDF load ────────────────────────────────────────────────────
  useEffect(() => {
    const pdfData = sessionStorage.getItem('pdfData');
    if (!pdfData) { navigate('/'); return; }

    const load = async () => {
      try {
        const doc = await pdfUtils.loadPDFFromUrl(pdfData);
        const count = doc.getPageCount();
        const initRotations = {};
        for (let i = 0; i < count; i++) initRotations[i] = 0;

        setPdfDoc(doc);
        setPdfUrl(pdfData);
        setPageCount(count);
        setRotations(initRotations);
        setActivePage(1);
      } catch (err) {
        console.error('Error loading PDF:', err);
        alert('Could not load PDF. Please try again.');
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [navigate]);

  // ─── Reload pdfjs doc whenever the URL changes ───────────────────────────
  useEffect(() => {
    if (!pdfUrl) return;
    let cancelled = false;
    setPdfjsDoc(null);

    pdfjsLib.getDocument(pdfUrl).promise.then((doc) => {
      if (!cancelled) setPdfjsDoc(doc);
    }).catch((err) => {
      if (!cancelled) console.error('pdfjs load error:', err);
    });

    return () => { cancelled = true; };
  }, [pdfUrl]);

  // ─── Helper: save pdfDoc → new blob URL ─────────────────────────────────
  const refreshPdfUrl = useCallback(async (newPdfDoc) => {
    const bytes = await newPdfDoc.save();
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const newUrl = URL.createObjectURL(blob);

    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
    }
    blobUrlRef.current = newUrl;
    setPdfUrl(newUrl);
  }, []);

  // ─── Page selection ───────────────────────────────────────────────────────
  const handleSelectPage = (pageIndex) => {
    setSelectedPages((prev) =>
      prev.includes(pageIndex) ? prev.filter((p) => p !== pageIndex) : [...prev, pageIndex]
    );
    setActivePage(pageIndex + 1);
  };

  // ─── Page Operations ──────────────────────────────────────────────────────
  const handleRotateLeft = async () => {
    if (!pdfDoc || selectedPages.length === 0) return;
    const newPdf = await pdfUtils.rotatePages(pdfDoc, selectedPages, -90);
    const newRotations = { ...rotations };
    selectedPages.forEach((i) => { newRotations[i] = ((newRotations[i] || 0) - 90 + 360) % 360; });
    setPdfDoc(newPdf);
    setRotations(newRotations);
    setHasChanges(true);
    await refreshPdfUrl(newPdf);
  };

  const handleRotateRight = async () => {
    if (!pdfDoc || selectedPages.length === 0) return;
    const newPdf = await pdfUtils.rotatePages(pdfDoc, selectedPages, 90);
    const newRotations = { ...rotations };
    selectedPages.forEach((i) => { newRotations[i] = ((newRotations[i] || 0) + 90) % 360; });
    setPdfDoc(newPdf);
    setRotations(newRotations);
    setHasChanges(true);
    await refreshPdfUrl(newPdf);
  };

  const handleDelete = async () => {
    if (!pdfDoc || selectedPages.length === 0) return;
    if (!window.confirm(`Delete ${selectedPages.length} page(s)?`)) return;
    const newPdf = await pdfUtils.deletePages(pdfDoc, selectedPages);
    const newCount = newPdf.getPageCount();
    const initRotations = {};
    for (let i = 0; i < newCount; i++) initRotations[i] = 0;
    setPdfDoc(newPdf);
    setPageCount(newCount);
    setSelectedPages([]);
    setRotations(initRotations);
    setActivePage(Math.min(activePage, newCount));
    setHasChanges(true);
    await refreshPdfUrl(newPdf);
  };

  const handleReorder = async (newOrder) => {
    if (!pdfDoc) return;
    const newPdf = await pdfUtils.reorderPages(pdfDoc, newOrder);
    setPdfDoc(newPdf);
    setHasChanges(true);
    await refreshPdfUrl(newPdf);
  };

  const handleMerge = async (files) => {
    try {
      setIsLoading(true);
      const pdfs = [pdfDoc];
      for (const file of files) pdfs.push(await pdfUtils.loadPDF(file));
      const merged = await pdfUtils.mergePDFs(pdfs);
      setPdfDoc(merged);
      setPageCount(merged.getPageCount());
      setHasChanges(true);
      setShowMergeModal(false);
      await refreshPdfUrl(merged);
    } catch (err) {
      console.error('Merge error:', err);
      alert('Error merging PDFs');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSplit = async (startPage, endPage) => {
    try {
      const split = await pdfUtils.splitPDF(pdfDoc, startPage, endPage);
      setPdfDoc(split);
      setPageCount(split.getPageCount());
      setActivePage(1);
      setHasChanges(true);
      setShowSplitModal(false);
      await refreshPdfUrl(split);
    } catch (err) {
      console.error('Split error:', err);
      alert('Error splitting PDF');
    }
  };

  // ─── Download (burns all overlays into PDF) ───────────────────────────────
  const handleDownload = async () => {
    if (!pdfDoc) return;
    try {
      const currentScale = zoom * 1.2;
      let doc = pdfDoc;
      if (textBoxes.length > 0) {
        doc = await pdfUtils.burnTextBoxes(doc, textBoxes, currentScale);
      }
      if (signature) {
        doc = await pdfUtils.burnSignature(doc, signature, currentScale);
      }
      if (highlights.length > 0) {
        doc = await pdfUtils.burnHighlights(doc, highlights, currentScale);
      }
      if (drawings.length > 0) {
        doc = await pdfUtils.burnDrawings(doc, drawings, currentScale);
      }
      if (placedImages.length > 0) {
        doc = await pdfUtils.burnImages(doc, placedImages, currentScale);
      }
      if (redactions.length > 0) {
        doc = await pdfUtils.burnRedactions(doc, redactions, currentScale);
      }
      if (stickyNotes.length > 0) {
        doc = await pdfUtils.burnStickyNotes(doc, stickyNotes, currentScale);
      }
      if (stamps.length > 0) {
        doc = await pdfUtils.burnStamps(doc, stamps, currentScale);
      }
      if (pageNumberSettings) {
        doc = await pdfUtils.addPageNumbers(doc, pageNumberSettings);
      }
      if (headerFooterSettings) {
        doc = await pdfUtils.addHeaderFooter(doc, headerFooterSettings.header, headerFooterSettings.footer, { fontSize: headerFooterSettings.fontSize });
      }

      const fileName = sessionStorage.getItem('pdfFileName') || 'document.pdf';
      await pdfUtils.downloadPDF(doc, fileName.replace('.pdf', '_edited.pdf'));
    } catch (err) {
      console.error('Download error:', err);
      alert('Error preparing PDF for download. Please try again.');
    }
  };

  const handleNewPdf = () => {
    if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    sessionStorage.removeItem('pdfData');
    sessionStorage.removeItem('pdfFileName');
    navigate('/');
  };

  // ─── Print ──────────────────────────────────────────────────────────────
  const handlePrint = () => {
    if (!pdfUrl) return;
    const printWindow = window.open(pdfUrl);
    if (printWindow) {
      printWindow.addEventListener('load', () => {
        printWindow.print();
      });
    }
  };

  // ─── Signature ──────────────────────────────────────────────────────────
  const handleApplySignature = (dataUrl) => {
    setSignature({ dataUrl, page: activePage, x: 100, y: 400, width: 200, height: 80 });
    setHasChanges(true);
    setShowSignatureModal(false);
  };

  // ─── Password protection ───────────────────────────────────────────────
  const handleProtect = async (password) => {
    if (!pdfUrl) return;
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      await pdfUtils.protectPDF(blob, password);
      alert('PDF prepared for protection. Full AES-256 encryption requires server-side processing and is coming soon.');
      setShowPasswordModal(false);
    } catch (err) {
      console.error('Protect error:', err);
      alert('Error protecting PDF');
    }
  };

  const getPdfBlob = async () => {
    if (!pdfDoc) return null;
    const bytes = await pdfDoc.save();
    return new Blob([bytes], { type: 'application/pdf' });
  };

  // ─── Annotations ────────────────────────────────────────────────────────
  const handleAddAnnotation = (annotation) => {
    annotationCounter += 1;
    setAnnotations((prev) => [...prev, { ...annotation, id: `note-${annotationCounter}-${Date.now()}` }]);
  };
  const handleDeleteAnnotation = (id) => setAnnotations((prev) => prev.filter((a) => a.id !== id));

  // ─── Text boxes ─────────────────────────────────────────────────────────
  const handleAddTextBox = (tb) => {
    textBoxCounter += 1;
    setTextBoxes((prev) => [...prev, { ...tb, id: `tb-${textBoxCounter}-${Date.now()}` }]);
    setHasChanges(true);
  };
  const handleUpdateTextBox = (updated) => {
    setTextBoxes((prev) => prev.map((tb) => (tb.id === updated.id ? updated : tb)));
  };
  const handleDeleteTextBox = (id) => {
    setTextBoxes((prev) => prev.filter((tb) => tb.id !== id));
  };

  // ─── Highlights ─────────────────────────────────────────────────────────
  const handleAddHighlight = (hl) => {
    highlightCounter += 1;
    setHighlights((prev) => [...prev, { ...hl, id: `hl-${highlightCounter}-${Date.now()}` }]);
    setHasChanges(true);
  };
  const handleDeleteHighlight = (id) => setHighlights((prev) => prev.filter((h) => h.id !== id));

  // ─── Drawings ───────────────────────────────────────────────────────────
  const handleAddDrawing = (d) => {
    drawingCounter += 1;
    setDrawings((prev) => [...prev, { ...d, id: `dr-${drawingCounter}-${Date.now()}` }]);
    setHasChanges(true);
  };
  const handleDeleteDrawing = (id) => setDrawings((prev) => prev.filter((d) => d.id !== id));

  // ─── Images ─────────────────────────────────────────────────────────────
  const handleAddImage = useCallback((imgData) => {
    imageCounter += 1;
    setPlacedImages((prev) => [...prev, { ...imgData, id: `img-${imageCounter}-${Date.now()}`, page: activePage }]);
    setHasChanges(true);
  }, [activePage]);
  const handleUpdateImage = (updated) => {
    setPlacedImages((prev) => prev.map((img) => (img.id === updated.id ? updated : img)));
  };
  const handleDeleteImage = (id) => setPlacedImages((prev) => prev.filter((img) => img.id !== id));

  // ─── Redactions ─────────────────────────────────────────────────────────
  const handleAddRedaction = (r) => {
    redactionCounter += 1;
    setRedactions((prev) => [...prev, { ...r, id: `red-${redactionCounter}-${Date.now()}` }]);
    setHasChanges(true);
  };
  const handleDeleteRedaction = (id) => setRedactions((prev) => prev.filter((r) => r.id !== id));

  // ─── Sticky Notes ────────────────────────────────────────────────────
  const handleAddStickyNote = (n) => {
    stickyNoteCounter += 1;
    setStickyNotes((prev) => [...prev, { ...n, id: `sn-${stickyNoteCounter}-${Date.now()}` }]);
    setHasChanges(true);
  };
  const handleUpdateStickyNote = (updated) => {
    setStickyNotes((prev) => prev.map((n) => (n.id === updated.id ? updated : n)));
  };
  const handleDeleteStickyNote = (id) => setStickyNotes((prev) => prev.filter((n) => n.id !== id));

  // ─── Stamps ──────────────────────────────────────────────────────────
  const handleAddStamp = (stampData) => {
    stampCounter += 1;
    setStamps((prev) => [...prev, {
      ...stampData,
      id: `stamp-${stampCounter}-${Date.now()}`,
      page: activePage,
      x: 150,
      y: 200,
    }]);
    setHasChanges(true);
  };
  const handleUpdateStamp = (updated) => {
    setStamps((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
  };
  const handleDeleteStamp = (id) => setStamps((prev) => prev.filter((s) => s.id !== id));

  // ─── Image insertion handler ────────────────────────────────────────────
  const handleInsertImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/png,image/jpeg,image/jpg';
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        const img = new Image();
        img.onload = () => {
          const maxW = 300;
          const ratio = Math.min(maxW / img.width, 1);
          handleAddImage({
            dataUrl: evt.target.result,
            x: 100,
            y: 100,
            width: img.width * ratio,
            height: img.height * ratio,
          });
        };
        img.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  // ─── Watermark ──────────────────────────────────────────────────────────
  const handleApplyWatermark = async (text, options) => {
    if (!pdfDoc) return;
    const doc = await pdfUtils.addWatermark(pdfDoc, text, options);
    setPdfDoc(doc);
    setHasChanges(true);
    setShowWatermarkModal(false);
    await refreshPdfUrl(doc);
  };

  // ─── Page Numbers (stored as settings, burned on download) ─────────────
  const handleApplyPageNumbers = (options) => {
    setPageNumberSettings(options);
    setHasChanges(true);
    setShowPageNumberModal(false);
  };
  const handleRemovePageNumbers = () => {
    setPageNumberSettings(null);
    setShowPageNumberModal(false);
  };

  // ─── Headers & Footers (stored as settings, burned on download) ───────
  const handleApplyHeaderFooter = (header, footer, options) => {
    setHeaderFooterSettings({ header, footer, ...options });
    setHasChanges(true);
    setShowHeaderFooterModal(false);
  };
  const handleRemoveHeaderFooter = () => {
    setHeaderFooterSettings(null);
    setShowHeaderFooterModal(false);
  };

  // ─── Metadata removal ──────────────────────────────────────────────────
  const handleRemoveMetadata = async () => {
    if (!pdfDoc) return;
    pdfUtils.removeMetadata(pdfDoc);
    setHasChanges(true);
    await refreshPdfUrl(pdfDoc);
    alert('Document metadata has been removed.');
  };

  // ─── Compress ───────────────────────────────────────────────────────────
  const handleCompress = async () => {
    if (!pdfDoc) return;
    try {
      const compressed = await pdfUtils.compressPDF(pdfDoc);
      setPdfDoc(compressed);
      setHasChanges(true);
      await refreshPdfUrl(compressed);
      alert('PDF has been optimized.');
    } catch (err) {
      console.error('Compress error:', err);
    }
  };

  // ─── Render ─────────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="brand-loader">
          <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="7" fill="#E8453C"/>
            <ellipse cx="14" cy="21" rx="9" ry="8" fill="white"/>
            <path d="M11 12 Q14 7 17 12" fill="#2D6A4F"/>
            <line x1="14" y1="12" x2="14" y2="16" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="11.5" cy="20" r="1.5" fill="#1A0A08"/>
            <circle cx="16.5" cy="20" r="1.5" fill="#1A0A08"/>
            <polygon points="20,20 24,21.5 20,23" fill="#FF8C00"/>
          </svg>
        </div>
        <div className="dots-loader">
          <span/><span/><span/>
        </div>
        <p style={{color: 'var(--text-secondary)', marginTop: '0.5rem'}}>Loading your PDF…</p>
      </div>
    );
  }

  return (
    <div className="editor-page">
      {/* ── Header ── */}
      <header className="editor-header">
        <div className="editor-logo">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="7" fill="#E8453C"/>
            <ellipse cx="14" cy="21" rx="9" ry="8" fill="white"/>
            <path d="M11 12 Q14 7 17 12" fill="#2D6A4F"/>
            <line x1="14" y1="12" x2="14" y2="16" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="11.5" cy="20" r="1.5" fill="#1A0A08"/>
            <circle cx="16.5" cy="20" r="1.5" fill="#1A0A08"/>
            <polygon points="20,20 24,21.5 20,23" fill="#FF8C00"/>
          </svg>
          <span className="editor-logo-text">Strawbirdies</span>
        </div>
        <button onClick={handleNewPdf} className="back-btn" style={{fontSize: '0.8rem', padding: '0.3rem 0.75rem'}}>← New PDF</button>
        <h1 className="editor-title">
          {sessionStorage.getItem('pdfFileName') || 'Document'}
        </h1>
        <div className="editor-header-right">
          {hasChanges && <span className="unsaved-badge">Unsaved changes</span>}
          <ZoomControl zoom={zoom} onZoomChange={setZoom} />
        </div>
      </header>

      {/* ── Toolbar ── */}
      <Toolbar
        onRotateLeft={handleRotateLeft}
        onRotateRight={handleRotateRight}
        onDelete={handleDelete}
        onMerge={() => setShowMergeModal(true)}
        onSplit={() => setShowSplitModal(true)}
        onDownload={handleDownload}
        onSign={() => setShowSignatureModal(true)}
        onProtect={() => setShowPasswordModal(true)}
        onShare={() => setShowShareModal(true)}
        onAnnotate={() => setShowAnnotationPanel((v) => !v)}
        selectedPages={selectedPages}
        pageCount={pageCount}
        hasChanges={hasChanges}
        pdfFile={pdfUrl}
        showAnnotationPanel={showAnnotationPanel}
        // New toolbar actions
        activeTool={activeTool}
        onToolChange={setActiveTool}
        drawingTool={drawingTool}
        onDrawingToolChange={setDrawingTool}
        activeColor={activeColor}
        onColorChange={setActiveColor}
        highlightColor={highlightColor}
        onHighlightColorChange={setHighlightColor}
        onInsertImage={handleInsertImage}
        onPrint={handlePrint}
        onWatermark={() => setShowWatermarkModal(true)}
        onPageNumbers={() => setShowPageNumberModal(true)}
        onHeaderFooter={() => setShowHeaderFooterModal(true)}
        onExport={() => setShowExportModal(true)}
        onFindReplace={() => setShowFindReplace((v) => !v)}
        onRemoveMetadata={handleRemoveMetadata}
        onCompress={handleCompress}
        onStamp={() => setShowStampModal(true)}
        onOCR={() => setShowOCRModal(true)}
        onBookmarks={() => setShowBookmarks((v) => !v)}
        onAI={() => setShowAIPanel((v) => !v)}
      />

      {/* Find & Replace bar */}
      {showFindReplace && (
        <FindReplaceBar
          pdfjsDoc={pdfjsDoc}
          pageCount={pageCount}
          onGoToPage={setActivePage}
          onClose={() => setShowFindReplace(false)}
        />
      )}

      {/* ── Editor body ── */}
      <div className="editor-body">

        {/* Left: thumbnail sidebar */}
        <aside className="thumbnails-sidebar">
          <PageThumbnails
            pdfjsDoc={pdfjsDoc}
            pageCount={pageCount}
            selectedPages={selectedPages}
            activePage={activePage}
            onSelectPage={handleSelectPage}
            onReorder={handleReorder}
            rotations={rotations}
          />
        </aside>

        {/* Centre: full-page editor view */}
        <main className="editor-main">
          <PageEditorView
            pdfjsDoc={pdfjsDoc}
            activePage={activePage}
            pageCount={pageCount}
            scale={zoom * 1.2}
            textBoxes={textBoxes}
            onAddTextBox={handleAddTextBox}
            onUpdateTextBox={handleUpdateTextBox}
            onDeleteTextBox={handleDeleteTextBox}
            onPageChange={setActivePage}
            signature={signature}
            onUpdateSignature={setSignature}
            onDeleteSignature={() => setSignature(null)}
            highlights={highlights}
            onAddHighlight={handleAddHighlight}
            onDeleteHighlight={handleDeleteHighlight}
            drawings={drawings}
            onAddDrawing={handleAddDrawing}
            onDeleteDrawing={handleDeleteDrawing}
            placedImages={placedImages}
            onAddImage={handleAddImage}
            onUpdateImage={handleUpdateImage}
            onDeleteImage={handleDeleteImage}
            redactions={redactions}
            onAddRedaction={handleAddRedaction}
            onDeleteRedaction={handleDeleteRedaction}
            activeTool={activeTool}
            onToolChange={setActiveTool}
            drawingTool={drawingTool}
            activeColor={activeColor}
            highlightColor={highlightColor}
            activeLineWidth={activeLineWidth}
            stickyNotes={stickyNotes}
            onAddStickyNote={handleAddStickyNote}
            onUpdateStickyNote={handleUpdateStickyNote}
            onDeleteStickyNote={handleDeleteStickyNote}
            stamps={stamps}
            onUpdateStamp={handleUpdateStamp}
            onDeleteStamp={handleDeleteStamp}
            pageNumberSettings={pageNumberSettings}
            headerFooterSettings={headerFooterSettings}
          />
        </main>

        {/* Right: annotation notes panel (optional) */}
        {showAnnotationPanel && (
          <AnnotationPanel
            annotations={annotations}
            pageCount={pageCount}
            onAdd={handleAddAnnotation}
            onDelete={handleDeleteAnnotation}
          />
        )}

        {/* Right: bookmarks panel (optional) */}
        {showBookmarks && (
          <BookmarksPanel
            pdfjsDoc={pdfjsDoc}
            onGoToPage={setActivePage}
            onClose={() => setShowBookmarks(false)}
          />
        )}

        {/* Right: AI panel (optional) */}
        {showAIPanel && (
          <AIPanel
            pdfjsDoc={pdfjsDoc}
            pageCount={pageCount}
            activePage={activePage}
            onClose={() => setShowAIPanel(false)}
          />
        )}
      </div>

      {/* ── Modals ── */}
      <MergeModal isOpen={showMergeModal} onClose={() => setShowMergeModal(false)} onMerge={handleMerge} />
      <SplitModal isOpen={showSplitModal} onClose={() => setShowSplitModal(false)} onSplit={handleSplit} pageCount={pageCount} />
      <SignatureModal isOpen={showSignatureModal} onClose={() => setShowSignatureModal(false)} onApply={handleApplySignature} />
      <PasswordModal isOpen={showPasswordModal} onClose={() => setShowPasswordModal(false)} onProtect={handleProtect} />
      <ShareModal isOpen={showShareModal} onClose={() => setShowShareModal(false)} getPdfBlob={getPdfBlob} fileName={sessionStorage.getItem('pdfFileName') || 'document.pdf'} />
      <WatermarkModal isOpen={showWatermarkModal} onClose={() => setShowWatermarkModal(false)} onApply={handleApplyWatermark} />
      <PageNumberModal isOpen={showPageNumberModal} onClose={() => setShowPageNumberModal(false)} onApply={handleApplyPageNumbers} onRemove={handleRemovePageNumbers} currentSettings={pageNumberSettings} />
      <HeaderFooterModal isOpen={showHeaderFooterModal} onClose={() => setShowHeaderFooterModal(false)} onApply={handleApplyHeaderFooter} onRemove={handleRemoveHeaderFooter} currentSettings={headerFooterSettings} />
      <ExportModal isOpen={showExportModal} onClose={() => setShowExportModal(false)} pdfjsDoc={pdfjsDoc} pageCount={pageCount} />
      <StampModal isOpen={showStampModal} onClose={() => setShowStampModal(false)} onApply={handleAddStamp} />
      <OCRModal isOpen={showOCRModal} onClose={() => setShowOCRModal(false)} pdfjsDoc={pdfjsDoc} pageCount={pageCount} />
    </div>
  );
};

export default Editor;
