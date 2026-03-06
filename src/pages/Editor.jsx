import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Toolbar from '../components/Toolbar';
import PageThumbnails from '../components/PageThumbnails';
import MergeModal from '../components/MergeModal';
import SplitModal from '../components/SplitModal';
import * as pdfUtils from '../lib/pdfUtils';

const Editor = () => {
  const navigate = useNavigate();
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [selectedPages, setSelectedPages] = useState([]);
  const [rotations, setRotations] = useState({});
  const [hasChanges, setHasChanges] = useState(false);
  const [showMergeModal, setShowMergeModal] = useState(false);
  const [showSplitModal, setShowSplitModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [originalPdfDoc, setOriginalPdfDoc] = useState(null);

  useEffect(() => {
    const loadPdf = async () => {
      const pdfData = sessionStorage.getItem('pdfData');
      const fileName = sessionStorage.getItem('pdfFileName');
      
      if (!pdfData) {
        navigate('/');
        return;
      }

      try {
        const response = await fetch(pdfData);
        const arrayBuffer = await response.arrayBuffer();
        const pdfDoc = await pdfUtils.loadPDFFromUrl(pdfData);
        
        setPdfDoc(pdfDoc);
        setOriginalPdfDoc(pdfDoc);
        setPdfUrl(pdfData);
        setPageCount(pdfDoc.getPageCount());
        
        const initialRotations = {};
        for (let i = 0; i < pdfDoc.getPageCount(); i++) {
          initialRotations[i] = 0;
        }
        setRotations(initialRotations);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading PDF:', error);
        alert('Error loading PDF');
        navigate('/');
      }
    };

    loadPdf();
  }, [navigate]);

  const handleSelectPage = (pageIndex) => {
    setSelectedPages((prev) => {
      if (prev.includes(pageIndex)) {
        return prev.filter((p) => p !== pageIndex);
      }
      return [...prev, pageIndex];
    });
  };

  const handleRotateLeft = async () => {
    if (!pdfDoc || selectedPages.length === 0) return;
    
    const newPdf = await pdfUtils.rotatePages(pdfDoc, selectedPages, -90);
    setPdfDoc(newPdf);
    
    const newRotations = { ...rotations };
    selectedPages.forEach((pageIndex) => {
      newRotations[pageIndex] = (newRotations[pageIndex] - 90) % 360;
    });
    setRotations(newRotations);
    setHasChanges(true);
  };

  const handleRotateRight = async () => {
    if (!pdfDoc || selectedPages.length === 0) return;
    
    const newPdf = await pdfUtils.rotatePages(pdfDoc, selectedPages, 90);
    setPdfDoc(newPdf);
    
    const newRotations = { ...rotations };
    selectedPages.forEach((pageIndex) => {
      newRotations[pageIndex] = (newRotations[pageIndex] + 90) % 360;
    });
    setRotations(newRotations);
    setHasChanges(true);
  };

  const handleDelete = async () => {
    if (!pdfDoc || selectedPages.length === 0) return;
    
    if (!confirm(`Delete ${selectedPages.length} page(s)?`)) return;
    
    const newPdf = await pdfUtils.deletePages(pdfDoc, selectedPages);
    setPdfDoc(newPdf);
    setPageCount(newPdf.getPageCount());
    setSelectedPages([]);
    
    const newRotations = {};
    for (let i = 0; i < newPdf.getPageCount(); i++) {
      newRotations[i] = 0;
    }
    setRotations(newRotations);
    setHasChanges(true);
  };

  const handleReorder = async (newOrder) => {
    if (!pdfDoc) return;
    
    const newPdf = await pdfUtils.reorderPages(pdfDoc, newOrder);
    setPdfDoc(newPdf);
    setHasChanges(true);
  };

  const handleMerge = async (files) => {
    try {
      setIsLoading(true);
      const pdfs = [pdfDoc];
      
      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const doc = await pdfUtils.loadPDF(file);
        pdfs.push(doc);
      }
      
      const mergedPdf = await pdfUtils.mergePDFs(pdfs);
      setPdfDoc(mergedPdf);
      setPageCount(mergedPdf.getPageCount());
      setHasChanges(true);
      setShowMergeModal(false);
    } catch (error) {
      console.error('Merge error:', error);
      alert('Error merging PDFs');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSplit = async (startPage, endPage) => {
    try {
      const splitPdf = await pdfUtils.splitPDF(pdfDoc, startPage, endPage);
      setPdfDoc(splitPdf);
      setPageCount(splitPdf.getPageCount());
      setHasChanges(true);
      setShowSplitModal(false);
    } catch (error) {
      console.error('Split error:', error);
      alert('Error splitting PDF');
    }
  };

  const handleDownload = async () => {
    if (!pdfDoc) return;
    
    const fileName = sessionStorage.getItem('pdfFileName') || 'document.pdf';
    const nameWithoutExt = fileName.replace('.pdf', '');
    await pdfUtils.downloadPDF(pdfDoc, `${nameWithoutExt}_edited.pdf`);
  };

  const handleNewPdf = () => {
    sessionStorage.removeItem('pdfData');
    sessionStorage.removeItem('pdfFileName');
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading PDF...</p>
      </div>
    );
  }

  return (
    <div className="editor-page">
      <header className="editor-header">
        <button onClick={handleNewPdf} className="back-btn">
          ← New PDF
        </button>
        <h1>Strawbirdies PDF Editor</h1>
        {hasChanges && <span className="unsaved-badge">Unsaved changes</span>}
      </header>

      <Toolbar
        onRotateLeft={handleRotateLeft}
        onRotateRight={handleRotateRight}
        onDelete={handleDelete}
        onMerge={() => setShowMergeModal(true)}
        onSplit={() => setShowSplitModal(true)}
        onDownload={handleDownload}
        selectedPages={selectedPages}
        pageCount={pageCount}
        hasChanges={hasChanges}
      />

      <main className="editor-content">
        <PageThumbnails
          pdfFile={pdfUrl}
          pageCount={pageCount}
          selectedPages={selectedPages}
          onSelectPage={handleSelectPage}
          onReorder={handleReorder}
          rotations={rotations}
        />
      </main>

      <MergeModal
        isOpen={showMergeModal}
        onClose={() => setShowMergeModal(false)}
        onMerge={handleMerge}
      />

      <SplitModal
        isOpen={showSplitModal}
        onClose={() => setShowSplitModal(false)}
        onSplit={handleSplit}
        pageCount={pageCount}
      />
    </div>
  );
};

export default Editor;
