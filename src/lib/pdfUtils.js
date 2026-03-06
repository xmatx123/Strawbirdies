import { PDFDocument, degrees, RotationTypes } from 'pdf-lib';

export const loadPDF = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  return await PDFDocument.load(arrayBuffer);
};

export const loadPDFFromUrl = async (url) => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return await PDFDocument.load(arrayBuffer);
};

export const getPageCount = (pdfDoc) => pdfDoc.getPageCount();

export const savePDF = async (pdfDoc) => {
  return await pdfDoc.save();
};

export const downloadPDF = async (pdfDoc, filename = 'document.pdf') => {
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
};

export const deletePages = async (pdfDoc, pagesToDelete) => {
  const totalPages = pdfDoc.getPageCount();
  const pagesToKeep = [];
  
  for (let i = 0; i < totalPages; i++) {
    if (!pagesToDelete.includes(i)) {
      pagesToKeep.push(i);
    }
  }
  
  const newPdf = await PDFDocument.create();
  const copiedPages = await newPdf.copyPages(pdfDoc, pagesToKeep);
  
  copiedPages.forEach((page) => {
    newPdf.addPage(page);
  });
  
  return newPdf;
};

export const rotatePages = async (pdfDoc, pagesToRotate, rotation) => {
  const pages = pdfDoc.getPages();
  
  pagesToRotate.forEach((pageIndex) => {
    if (pageIndex >= 0 && pageIndex < pages.length) {
      const page = pages[pageIndex];
      const currentRotation = page.getRotation().angle;
      page.setRotation(degrees(currentRotation + rotation));
    }
  });
  
  return pdfDoc;
};

export const reorderPages = async (pdfDoc, newOrder) => {
  const newPdf = await PDFDocument.create();
  const copiedPages = await newPdf.copyPages(pdfDoc, newOrder);
  
  copiedPages.forEach((page) => {
    newPdf.addPage(page);
  });
  
  return newPdf;
};

export const mergePDFs = async (pdfDocs) => {
  const newPdf = await PDFDocument.create();
  
  for (const pdfDoc of pdfDocs) {
    const copiedPages = await newPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
    copiedPages.forEach((page) => {
      newPdf.addPage(page);
    });
  }
  
  return newPdf;
};

export const splitPDF = async (pdfDoc, startPage, endPage) => {
  const newPdf = await PDFDocument.create();
  const pageIndices = [];
  
  for (let i = startPage; i <= endPage && i < pdfDoc.getPageCount(); i++) {
    pageIndices.push(i);
  }
  
  const copiedPages = await newPdf.copyPages(pdfDoc, pageIndices);
  copiedPages.forEach((page) => {
    newPdf.addPage(page);
  });
  
  return newPdf;
};

export const extractPage = async (pdfDoc, pageIndex) => {
  const newPdf = await PDFDocument.create();
  const copiedPages = await newPdf.copyPages(pdfDoc, [pageIndex]);
  copiedPages.forEach((page) => {
    newPdf.addPage(page);
  });
  
  return newPdf;
};

export const getPageDimensions = (page) => {
  const { width, height } = page.getSize();
  return { width, height };
};

export const addWatermark = async (pdfDoc, text) => {
  const pages = pdfDoc.getPages();
  const watermarkSize = 50;
  
  pages.forEach((page) => {
    const { width, height } = page.getSize();
    page.drawText(text, {
      x: width / 2 - watermarkSize,
      y: height / 2,
      size: watermarkSize,
      color: rgb(0.7, 0.7, 0.7),
      opacity: 0.3,
      rotate: degrees(45),
    });
  });
  
  return pdfDoc;
};

const rgb = (r, g, b) => ({ r: r / 255, g: g / 255, b: b / 255 });
