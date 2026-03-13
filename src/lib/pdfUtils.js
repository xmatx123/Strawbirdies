import { PDFDocument, degrees, StandardFonts, rgb as pdfRgb, PDFName, PDFString } from 'pdf-lib';

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

// ─── Helper: parse hex color to pdf-lib rgb ──────────────────────────────────
const hexToRgb = (hex) => {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16) / 255;
  const g = parseInt(h.substring(2, 4), 16) / 255;
  const b = parseInt(h.substring(4, 6), 16) / 255;
  return pdfRgb(r, g, b);
};

// ─── Burn text boxes into the PDF ─────────────────────────────────────────────
// textBoxes: [{ page (1-based), x, y, text, fontSize, color, fontFamily, bold, italic }]
// scale: the canvas scale that was used when positioning the text boxes
export const burnTextBoxes = async (pdfDoc, textBoxes, scale = 1.2) => {
  if (!textBoxes || textBoxes.length === 0) return pdfDoc;

  // Embed all standard font families for mapping
  const fontMap = {
    helvetica: {
      normal: await pdfDoc.embedFont(StandardFonts.Helvetica),
      bold: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      italic: await pdfDoc.embedFont(StandardFonts.HelveticaOblique),
      boldItalic: await pdfDoc.embedFont(StandardFonts.HelveticaBoldOblique),
    },
    times: {
      normal: await pdfDoc.embedFont(StandardFonts.TimesRoman),
      bold: await pdfDoc.embedFont(StandardFonts.TimesRomanBold),
      italic: await pdfDoc.embedFont(StandardFonts.TimesRomanItalic),
      boldItalic: await pdfDoc.embedFont(StandardFonts.TimesRomanBoldItalic),
    },
    courier: {
      normal: await pdfDoc.embedFont(StandardFonts.Courier),
      bold: await pdfDoc.embedFont(StandardFonts.CourierBold),
      italic: await pdfDoc.embedFont(StandardFonts.CourierOblique),
      boldItalic: await pdfDoc.embedFont(StandardFonts.CourierBoldOblique),
    },
  };

  // Map CSS font families to PDF standard fonts
  const getFontFamily = (cssFont) => {
    const lower = (cssFont || '').toLowerCase();
    if (lower.includes('times') || lower.includes('georgia') || lower.includes('serif')) return fontMap.times;
    if (lower.includes('courier') || lower.includes('monospace')) return fontMap.courier;
    return fontMap.helvetica; // Arial, Verdana, Trebuchet, Impact, Jakarta Sans → Helvetica
  };

  const pages = pdfDoc.getPages();

  for (const tb of textBoxes) {
    if (!tb.text || !tb.text.trim()) continue;
    const pageIndex = tb.page - 1;
    if (pageIndex < 0 || pageIndex >= pages.length) continue;

    const page = pages[pageIndex];
    const { height } = page.getSize();

    // Choose font based on family and bold/italic
    const family = getFontFamily(tb.fontFamily);
    let selectedFont = family.normal;
    if (tb.bold && tb.italic) selectedFont = family.boldItalic;
    else if (tb.bold) selectedFont = family.bold;
    else if (tb.italic) selectedFont = family.italic;

    const fontSize = tb.fontSize || 14;
    const color = tb.color ? hexToRgb(tb.color) : pdfRgb(0, 0, 0);

    // Convert canvas coordinates to PDF coordinates
    const pdfX = tb.x / scale;
    const pdfY = height - (tb.y / scale) - fontSize;

    // Handle multi-line text
    const lines = tb.text.split('\n');
    lines.forEach((line, i) => {
      page.drawText(line, {
        x: pdfX,
        y: pdfY - (i * fontSize * 1.2),
        size: fontSize,
        font: selectedFont,
        color,
      });
    });
  }

  return pdfDoc;
};

// ─── Burn signature image into the PDF ────────────────────────────────────────
// signature: { dataUrl, page (1-based), x, y, width, height }
// scale: the canvas scale used for positioning
export const burnSignature = async (pdfDoc, signature, scale = 1.2) => {
  if (!signature || !signature.dataUrl) return pdfDoc;

  const pages = pdfDoc.getPages();
  const pageIndex = (signature.page || 1) - 1;
  if (pageIndex < 0 || pageIndex >= pages.length) return pdfDoc;

  const page = pages[pageIndex];
  const { height } = page.getSize();

  // Embed the signature image
  let img;
  try {
    if (signature.dataUrl.includes('image/png') || signature.dataUrl.includes('image/svg')) {
      // Convert data URL to bytes
      const base64 = signature.dataUrl.split(',')[1];
      const bytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
      img = await pdfDoc.embedPng(bytes);
    } else {
      const base64 = signature.dataUrl.split(',')[1];
      const bytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
      try {
        img = await pdfDoc.embedJpg(bytes);
      } catch {
        img = await pdfDoc.embedPng(bytes);
      }
    }
  } catch (err) {
    console.error('Failed to embed signature image:', err);
    return pdfDoc;
  }

  // Convert canvas coordinates to PDF coordinates
  const sigWidth = (signature.width || 200) / scale;
  const sigHeight = (signature.height || 80) / scale;
  const pdfX = (signature.x || 50) / scale;
  const pdfY = height - ((signature.y || 50) / scale) - sigHeight;

  page.drawImage(img, {
    x: pdfX,
    y: pdfY,
    width: sigWidth,
    height: sigHeight,
  });

  return pdfDoc;
};

// ─── Burn highlights into the PDF ─────────────────────────────────────────────
// highlights: [{ page (1-based), x, y, width, height, color }]
export const burnHighlights = async (pdfDoc, highlights, scale = 1.2) => {
  if (!highlights || highlights.length === 0) return pdfDoc;

  const pages = pdfDoc.getPages();

  for (const hl of highlights) {
    const pageIndex = hl.page - 1;
    if (pageIndex < 0 || pageIndex >= pages.length) continue;

    const page = pages[pageIndex];
    const { height } = page.getSize();

    const color = hl.color ? hexToRgb(hl.color) : pdfRgb(1, 1, 0); // default yellow

    page.drawRectangle({
      x: hl.x / scale,
      y: height - (hl.y / scale) - (hl.height / scale),
      width: hl.width / scale,
      height: hl.height / scale,
      color,
      opacity: 0.35,
    });
  }

  return pdfDoc;
};

// ─── Burn drawings (freehand + shapes) into the PDF ───────────────────────────
// drawings: [{ page (1-based), type: 'freehand'|'rect'|'circle'|'line'|'arrow',
//              points: [{x,y},...], color, lineWidth, x, y, width, height }]
export const burnDrawings = async (pdfDoc, drawings, scale = 1.2) => {
  if (!drawings || drawings.length === 0) return pdfDoc;

  const pages = pdfDoc.getPages();

  for (const d of drawings) {
    const pageIndex = d.page - 1;
    if (pageIndex < 0 || pageIndex >= pages.length) continue;

    const page = pages[pageIndex];
    const { height } = page.getSize();
    const color = d.color ? hexToRgb(d.color) : pdfRgb(0, 0, 0);
    const lineWidth = (d.lineWidth || 2) / scale;

    if (d.type === 'rect') {
      page.drawRectangle({
        x: d.x / scale,
        y: height - (d.y / scale) - (d.height / scale),
        width: d.width / scale,
        height: d.height / scale,
        borderColor: color,
        borderWidth: lineWidth,
        opacity: 1,
      });
    } else if (d.type === 'circle') {
      const cx = (d.x + d.width / 2) / scale;
      const cy = height - ((d.y + d.height / 2) / scale);
      page.drawEllipse({
        x: cx,
        y: cy,
        xScale: (d.width / 2) / scale,
        yScale: (d.height / 2) / scale,
        borderColor: color,
        borderWidth: lineWidth,
      });
    } else if (d.type === 'line' || d.type === 'arrow') {
      if (d.points && d.points.length >= 2) {
        const start = d.points[0];
        const end = d.points[d.points.length - 1];
        page.drawLine({
          start: { x: start.x / scale, y: height - start.y / scale },
          end: { x: end.x / scale, y: height - end.y / scale },
          thickness: lineWidth,
          color,
        });
        // Arrow head
        if (d.type === 'arrow' && d.points.length >= 2) {
          const ex = end.x / scale;
          const ey = height - end.y / scale;
          const sx = start.x / scale;
          const sy = height - start.y / scale;
          const angle = Math.atan2(ey - sy, ex - sx);
          const headLen = 10;
          const p1x = ex - headLen * Math.cos(angle - Math.PI / 6);
          const p1y = ey - headLen * Math.sin(angle - Math.PI / 6);
          const p2x = ex - headLen * Math.cos(angle + Math.PI / 6);
          const p2y = ey - headLen * Math.sin(angle + Math.PI / 6);
          page.drawLine({ start: { x: ex, y: ey }, end: { x: p1x, y: p1y }, thickness: lineWidth, color });
          page.drawLine({ start: { x: ex, y: ey }, end: { x: p2x, y: p2y }, thickness: lineWidth, color });
        }
      }
    } else if (d.type === 'freehand' && d.points && d.points.length >= 2) {
      // Draw freehand as series of line segments
      for (let i = 1; i < d.points.length; i++) {
        page.drawLine({
          start: { x: d.points[i - 1].x / scale, y: height - d.points[i - 1].y / scale },
          end: { x: d.points[i].x / scale, y: height - d.points[i].y / scale },
          thickness: lineWidth,
          color,
        });
      }
    }
  }

  return pdfDoc;
};

// ─── Burn images placed on pages into the PDF ─────────────────────────────────
// images: [{ page (1-based), dataUrl, x, y, width, height }]
export const burnImages = async (pdfDoc, images, scale = 1.2) => {
  if (!images || images.length === 0) return pdfDoc;

  const pages = pdfDoc.getPages();

  for (const img of images) {
    const pageIndex = img.page - 1;
    if (pageIndex < 0 || pageIndex >= pages.length) continue;

    const page = pages[pageIndex];
    const { height } = page.getSize();

    let embeddedImg;
    try {
      const base64 = img.dataUrl.split(',')[1];
      const bytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
      if (img.dataUrl.includes('image/png')) {
        embeddedImg = await pdfDoc.embedPng(bytes);
      } else {
        try {
          embeddedImg = await pdfDoc.embedJpg(bytes);
        } catch {
          embeddedImg = await pdfDoc.embedPng(bytes);
        }
      }
    } catch (err) {
      console.error('Failed to embed image:', err);
      continue;
    }

    page.drawImage(embeddedImg, {
      x: img.x / scale,
      y: height - (img.y / scale) - (img.height / scale),
      width: img.width / scale,
      height: img.height / scale,
    });
  }

  return pdfDoc;
};

// ─── Burn redaction boxes into the PDF (permanent black rectangles) ───────────
// redactions: [{ page (1-based), x, y, width, height }]
export const burnRedactions = async (pdfDoc, redactions, scale = 1.2) => {
  if (!redactions || redactions.length === 0) return pdfDoc;

  const pages = pdfDoc.getPages();

  for (const r of redactions) {
    const pageIndex = r.page - 1;
    if (pageIndex < 0 || pageIndex >= pages.length) continue;

    const page = pages[pageIndex];
    const { height } = page.getSize();

    page.drawRectangle({
      x: r.x / scale,
      y: height - (r.y / scale) - (r.height / scale),
      width: r.width / scale,
      height: r.height / scale,
      color: pdfRgb(0, 0, 0),
      opacity: 1,
    });
  }

  return pdfDoc;
};

// ─── Add watermark to all pages ───────────────────────────────────────────────
export const addWatermark = async (pdfDoc, text, options = {}) => {
  const pages = pdfDoc.getPages();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = options.fontSize || 50;
  const opacity = options.opacity || 0.15;
  const rotation = options.rotation || 45;
  const color = options.color ? hexToRgb(options.color) : pdfRgb(0.5, 0.5, 0.5);

  pages.forEach((page) => {
    const { width, height } = page.getSize();
    const textWidth = font.widthOfTextAtSize(text, fontSize);
    page.drawText(text, {
      x: (width - textWidth) / 2,
      y: height / 2,
      size: fontSize,
      font,
      color,
      opacity,
      rotate: degrees(rotation),
    });
  });

  return pdfDoc;
};

// ─── Add page numbers ─────────────────────────────────────────────────────────
export const addPageNumbers = async (pdfDoc, options = {}) => {
  const pages = pdfDoc.getPages();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = options.fontSize || 10;
  const startNum = options.startNumber || 1;
  const position = options.position || 'bottom-center'; // bottom-left, bottom-center, bottom-right, top-left, top-center, top-right
  const format = options.format || 'number'; // number, dash, page-of
  const color = pdfRgb(0.3, 0.3, 0.3);

  pages.forEach((page, i) => {
    const { width, height } = page.getSize();
    const pageNum = startNum + i;
    const totalPages = pages.length;

    let text;
    if (format === 'dash') text = `- ${pageNum} -`;
    else if (format === 'page-of') text = `Page ${pageNum} of ${totalPages}`;
    else text = `${pageNum}`;

    const textWidth = font.widthOfTextAtSize(text, fontSize);
    let x, y;

    if (position.includes('left')) x = 40;
    else if (position.includes('right')) x = width - textWidth - 40;
    else x = (width - textWidth) / 2;

    if (position.includes('top')) y = height - 30;
    else y = 25;

    page.drawText(text, { x, y, size: fontSize, font, color });
  });

  return pdfDoc;
};

// ─── Add headers and footers ──────────────────────────────────────────────────
export const addHeaderFooter = async (pdfDoc, headerText = '', footerText = '', options = {}) => {
  const pages = pdfDoc.getPages();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = options.fontSize || 9;
  const color = pdfRgb(0.4, 0.4, 0.4);

  pages.forEach((page, i) => {
    const { width, height } = page.getSize();

    if (headerText) {
      const processed = headerText.replace('{page}', i + 1).replace('{total}', pages.length);
      const textWidth = font.widthOfTextAtSize(processed, fontSize);
      page.drawText(processed, {
        x: (width - textWidth) / 2,
        y: height - 25,
        size: fontSize,
        font,
        color,
      });
    }

    if (footerText) {
      const processed = footerText.replace('{page}', i + 1).replace('{total}', pages.length);
      const textWidth = font.widthOfTextAtSize(processed, fontSize);
      page.drawText(processed, {
        x: (width - textWidth) / 2,
        y: 15,
        size: fontSize,
        font,
        color,
      });
    }
  });

  return pdfDoc;
};

// ─── Create a blank PDF ───────────────────────────────────────────────────────
export const createBlankPDF = async (options = {}) => {
  const pdfDoc = await PDFDocument.create();
  const width = options.width || 612;  // US Letter
  const height = options.height || 792;
  const numPages = options.numPages || 1;

  for (let i = 0; i < numPages; i++) {
    pdfDoc.addPage([width, height]);
  }

  return pdfDoc;
};

// ─── PDF Compression (re-save without object streams for smaller size) ────────
export const compressPDF = async (pdfDoc) => {
  // pdf-lib doesn't have explicit compression, but re-saving often reduces size
  // by cleaning up unused objects. We can also strip metadata for additional savings.
  const bytes = await pdfDoc.save();
  const newDoc = await PDFDocument.load(bytes);
  return newDoc;
};

// ─── Remove metadata ──────────────────────────────────────────────────────────
export const removeMetadata = (pdfDoc) => {
  pdfDoc.setTitle('');
  pdfDoc.setAuthor('');
  pdfDoc.setSubject('');
  pdfDoc.setKeywords([]);
  pdfDoc.setProducer('');
  pdfDoc.setCreator('');
  return pdfDoc;
};

// ─── Get form fields ──────────────────────────────────────────────────────────
export const getFormFields = (pdfDoc) => {
  try {
    const form = pdfDoc.getForm();
    const fields = form.getFields();
    return fields.map((field) => ({
      name: field.getName(),
      type: field.constructor.name,
      value: (() => {
        try {
          if (field.getText) return field.getText();
          if (field.isChecked) return field.isChecked();
          if (field.getSelected) return field.getSelected();
          return '';
        } catch { return ''; }
      })(),
    }));
  } catch {
    return [];
  }
};

// ─── Fill a form field ────────────────────────────────────────────────────────
export const fillFormField = (pdfDoc, fieldName, value) => {
  try {
    const form = pdfDoc.getForm();
    const field = form.getField(fieldName);
    const typeName = field.constructor.name;

    if (typeName === 'PDFTextField') {
      field.setText(value);
    } else if (typeName === 'PDFCheckBox') {
      value ? field.check() : field.uncheck();
    } else if (typeName === 'PDFDropdown') {
      field.select(value);
    } else if (typeName === 'PDFRadioGroup') {
      field.select(value);
    }

    return true;
  } catch (err) {
    console.error(`Error filling field "${fieldName}":`, err);
    return false;
  }
};

// ─── Export form data ─────────────────────────────────────────────────────────
export const exportFormData = (pdfDoc) => {
  const fields = getFormFields(pdfDoc);
  const data = {};
  fields.forEach((f) => { data[f.name] = f.value; });
  return data;
};

// ─── Convert images to PDF ────────────────────────────────────────────────────
export const imagesToPdf = async (imageFiles) => {
  const pdfDoc = await PDFDocument.create();

  for (const file of imageFiles) {
    const bytes = new Uint8Array(await file.arrayBuffer());
    let img;
    try {
      if (file.type === 'image/png') {
        img = await pdfDoc.embedPng(bytes);
      } else {
        img = await pdfDoc.embedJpg(bytes);
      }
    } catch {
      try { img = await pdfDoc.embedPng(bytes); } catch { continue; }
    }

    const { width, height } = img.scale(1);
    // Scale to fit US Letter (612x792) while maintaining aspect ratio
    const maxW = 572; // 612 - 40 margins
    const maxH = 752; // 792 - 40 margins
    const ratio = Math.min(maxW / width, maxH / height, 1);

    const page = pdfDoc.addPage([612, 792]);
    page.drawImage(img, {
      x: (612 - width * ratio) / 2,
      y: (792 - height * ratio) / 2,
      width: width * ratio,
      height: height * ratio,
    });
  }

  return pdfDoc;
};

// ─── Export a page as an image (using canvas from pdfjs) ──────────────────────
export const exportPageAsImage = async (pdfjsDoc, pageNum, format = 'png', quality = 0.92) => {
  const page = await pdfjsDoc.getPage(pageNum);
  const scale = 2; // High-res export
  const viewport = page.getViewport({ scale });

  const canvas = document.createElement('canvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  const ctx = canvas.getContext('2d');
  await page.render({ canvasContext: ctx, viewport }).promise;

  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => resolve(blob),
      format === 'jpeg' ? 'image/jpeg' : 'image/png',
      quality
    );
  });
};

// ─── Flatten all annotations (make them non-editable) ─────────────────────────
export const flattenForm = (pdfDoc) => {
  try {
    const form = pdfDoc.getForm();
    form.flatten();
  } catch {
    // No form to flatten
  }
  return pdfDoc;
};

// ─── Burn stamps into the PDF ────────────────────────────────────────────────
// stamps: [{ page (1-based), x, y, text, fontSize, color, bg }]
export const burnStamps = async (pdfDoc, stamps, scale = 1.2) => {
  if (!stamps || stamps.length === 0) return pdfDoc;

  const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const pages = pdfDoc.getPages();

  for (const s of stamps) {
    const pageIndex = s.page - 1;
    if (pageIndex < 0 || pageIndex >= pages.length) continue;

    const page = pages[pageIndex];
    const { height } = page.getSize();
    const fontSize = s.fontSize || 30;
    const color = s.color ? hexToRgb(s.color) : pdfRgb(0.1, 0.3, 0.7);

    const lines = (s.text || '').split('\n');
    const lineHeight = fontSize * 1.3;
    const totalHeight = lines.length * lineHeight;
    const maxWidth = Math.max(...lines.map(l => font.widthOfTextAtSize(l, fontSize)));

    const pdfX = s.x / scale;
    const pdfY = height - (s.y / scale) - totalHeight;

    // Draw background rectangle
    if (s.bg) {
      page.drawRectangle({
        x: pdfX - 8,
        y: pdfY - 4,
        width: maxWidth + 16,
        height: totalHeight + 8,
        color: s.bg ? hexToRgb(s.bg) : pdfRgb(0.9, 0.95, 1),
        opacity: 0.8,
      });
      // Border
      page.drawRectangle({
        x: pdfX - 8,
        y: pdfY - 4,
        width: maxWidth + 16,
        height: totalHeight + 8,
        borderColor: color,
        borderWidth: 2,
      });
    }

    lines.forEach((line, i) => {
      page.drawText(line, {
        x: pdfX,
        y: pdfY + totalHeight - (i + 1) * lineHeight + 4,
        size: fontSize,
        font,
        color,
      });
    });
  }

  return pdfDoc;
};

// ─── Burn sticky notes into the PDF (as comment annotations) ──────────────────
// stickyNotes: [{ page (1-based), x, y, text }]
export const burnStickyNotes = async (pdfDoc, stickyNotes, scale = 1.2) => {
  if (!stickyNotes || stickyNotes.length === 0) return pdfDoc;

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const pages = pdfDoc.getPages();

  for (const n of stickyNotes) {
    const pageIndex = n.page - 1;
    if (pageIndex < 0 || pageIndex >= pages.length) continue;
    if (!n.text || !n.text.trim()) continue;

    const page = pages[pageIndex];
    const { height } = page.getSize();
    const fontSize = 8;
    const pdfX = n.x / scale;
    const pdfY = height - (n.y / scale);

    // Draw a small note icon and text
    const noteSize = 14;
    page.drawRectangle({
      x: pdfX,
      y: pdfY - noteSize,
      width: noteSize,
      height: noteSize,
      color: pdfRgb(1, 0.94, 0.53),
      borderColor: pdfRgb(0.8, 0.7, 0.2),
      borderWidth: 0.5,
    });

    // Draw the note text next to the icon
    const lines = n.text.split('\n').slice(0, 5);
    const textX = pdfX + noteSize + 4;
    lines.forEach((line, i) => {
      page.drawText(line.substring(0, 60), {
        x: textX,
        y: pdfY - 4 - (i * (fontSize + 2)),
        size: fontSize,
        font,
        color: pdfRgb(0.3, 0.3, 0.3),
      });
    });
  }

  return pdfDoc;
};

// ─── Password protection placeholder ──────────────────────────────────────────
// NOTE: pdf-lib does not support AES encryption natively in the browser.
// This applies metadata markers. For real encryption, a server-side solution is needed.
export async function protectPDF(pdfFile, userPassword) {
  let arrayBuffer;
  if (pdfFile instanceof Blob || pdfFile instanceof File) {
    arrayBuffer = await pdfFile.arrayBuffer();
  } else if (typeof pdfFile === 'string') {
    const response = await fetch(pdfFile);
    arrayBuffer = await response.arrayBuffer();
  } else {
    arrayBuffer = (await pdfFile.save()).buffer;
  }

  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const existingTitle = pdfDoc.getTitle() || '';
  if (!existingTitle.includes('[Protected]')) {
    pdfDoc.setTitle(existingTitle + ' [Protected]');
  }
  pdfDoc.setSubject('Password protected document');
  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
}
