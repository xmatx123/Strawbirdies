import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import StickyNote from './StickyNote';

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).href;

const COLORS = ['#000000', '#1e40af', '#dc2626', '#16a34a', '#92400e', '#7c3aed', '#db2777'];
const FONTS = [
  { value: 'Plus Jakarta Sans, sans-serif', label: 'Jakarta Sans' },
  { value: 'Arial, sans-serif', label: 'Arial' },
  { value: 'Georgia, serif', label: 'Georgia' },
  { value: 'Times New Roman, serif', label: 'Times New Roman' },
  { value: 'Courier New, monospace', label: 'Courier New' },
  { value: 'Verdana, sans-serif', label: 'Verdana' },
  { value: 'Trebuchet MS, sans-serif', label: 'Trebuchet MS' },
  { value: 'Impact, sans-serif', label: 'Impact' },
];
const HIGHLIGHT_COLORS = ['#fde047', '#86efac', '#93c5fd', '#fda4af', '#fdba74'];

const PageEditorView = ({
  pdfjsDoc,
  activePage,
  pageCount,
  scale = 1.2,
  textBoxes = [],
  onAddTextBox,
  onUpdateTextBox,
  onDeleteTextBox,
  onPageChange,
  signature = null,
  onUpdateSignature,
  onDeleteSignature,
  highlights = [],
  onAddHighlight,
  onDeleteHighlight,
  drawings = [],
  onAddDrawing,
  onDeleteDrawing,
  placedImages = [],
  onAddImage,
  onUpdateImage,
  onDeleteImage,
  redactions = [],
  onAddRedaction,
  onDeleteRedaction,
  activeTool = 'select',
  onToolChange,
  drawingTool = 'freehand',
  activeColor = '#000000',
  highlightColor = '#fde047',
  activeLineWidth = 2,
  stickyNotes = [],
  onAddStickyNote,
  onUpdateStickyNote,
  onDeleteStickyNote,
  stamps = [],
  onUpdateStamp,
  onDeleteStamp,
}) => {
  const canvasRef = useRef(null);
  const overlayRef = useRef(null);
  const containerRef = useRef(null);
  const renderTaskRef = useRef(null);
  const [editingId, setEditingId] = useState(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  // Drawing state (for freehand / shapes / highlight / redaction drawing-in-progress)
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawStart, setDrawStart] = useState(null);
  const [currentPoints, setCurrentPoints] = useState([]);
  const [previewRect, setPreviewRect] = useState(null);
  const [drawEnd, setDrawEnd] = useState(null);

  // Render the current page
  useEffect(() => {
    if (!pdfjsDoc || !activePage) return;
    let cancelled = false;

    const render = async () => {
      try {
        if (renderTaskRef.current) {
          renderTaskRef.current.cancel();
          renderTaskRef.current = null;
        }
        const page = await pdfjsDoc.getPage(activePage);
        if (cancelled) return;

        const viewport = page.getViewport({ scale });
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.height = viewport.height;
        canvas.width = viewport.width;
        setCanvasSize({ width: viewport.width, height: viewport.height });

        const ctx = canvas.getContext('2d');
        const task = page.render({ canvasContext: ctx, viewport });
        renderTaskRef.current = task;
        await task.promise;
        renderTaskRef.current = null;
      } catch (err) {
        if (err?.name !== 'RenderingCancelledException') {
          console.error('Page render error:', err);
        }
      }
    };

    render();
    return () => {
      cancelled = true;
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
        renderTaskRef.current = null;
      }
    };
  }, [pdfjsDoc, activePage, scale]);

  // Get coordinates relative to the canvas
  const getCanvasCoords = useCallback((e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  // ─── Mouse handlers for tools ─────────────────────────────────────────
  const handleCanvasMouseDown = useCallback((e) => {
    if (activeTool === 'text') {
      const { x, y } = getCanvasCoords(e);
      onAddTextBox({ page: activePage, x, y, text: '', fontSize: 14, color: '#000000' });
      if (onToolChange) onToolChange('select');
      return;
    }

    if (activeTool === 'note') {
      const { x, y } = getCanvasCoords(e);
      onAddStickyNote?.({ page: activePage, x, y, text: '', color: '#fef08a' });
      if (onToolChange) onToolChange('select');
      return;
    }

    if (activeTool === 'highlight' || activeTool === 'redact') {
      const { x, y } = getCanvasCoords(e);
      setIsDrawing(true);
      setDrawStart({ x, y });
      setPreviewRect({ x, y, width: 0, height: 0 });
      return;
    }

    if (activeTool === 'draw') {
      const { x, y } = getCanvasCoords(e);
      setIsDrawing(true);
      setDrawStart({ x, y });
      if (drawingTool === 'freehand') {
        setCurrentPoints([{ x, y }]);
      } else {
        setPreviewRect({ x, y, width: 0, height: 0 });
      }
      return;
    }
  }, [activeTool, activePage, getCanvasCoords, onAddTextBox, onToolChange, drawingTool]);

  const handleCanvasMouseMove = useCallback((e) => {
    if (!isDrawing) return;
    const { x, y } = getCanvasCoords(e);

    if (activeTool === 'highlight' || activeTool === 'redact') {
      setPreviewRect({
        x: Math.min(drawStart.x, x),
        y: Math.min(drawStart.y, y),
        width: Math.abs(x - drawStart.x),
        height: Math.abs(y - drawStart.y),
      });
      return;
    }

    if (activeTool === 'draw') {
      if (drawingTool === 'freehand') {
        setCurrentPoints(prev => [...prev, { x, y }]);
      } else if (drawingTool === 'line' || drawingTool === 'arrow') {
        setDrawEnd({ x, y });
      } else {
        setPreviewRect({
          x: Math.min(drawStart.x, x),
          y: Math.min(drawStart.y, y),
          width: Math.abs(x - drawStart.x),
          height: Math.abs(y - drawStart.y),
        });
      }
    }
  }, [isDrawing, activeTool, drawStart, getCanvasCoords, drawingTool]);

  const handleCanvasMouseUp = useCallback((e) => {
    if (!isDrawing) return;
    const { x, y } = getCanvasCoords(e);

    if (activeTool === 'highlight') {
      const rect = {
        x: Math.min(drawStart.x, x),
        y: Math.min(drawStart.y, y),
        width: Math.abs(x - drawStart.x),
        height: Math.abs(y - drawStart.y),
      };
      if (rect.width > 5 && rect.height > 5) {
        onAddHighlight({ page: activePage, ...rect, color: highlightColor });
      }
    }

    if (activeTool === 'redact') {
      const rect = {
        x: Math.min(drawStart.x, x),
        y: Math.min(drawStart.y, y),
        width: Math.abs(x - drawStart.x),
        height: Math.abs(y - drawStart.y),
      };
      if (rect.width > 5 && rect.height > 5) {
        onAddRedaction({ page: activePage, ...rect });
      }
    }

    if (activeTool === 'draw') {
      if (drawingTool === 'freehand') {
        const pts = [...currentPoints, { x, y }];
        if (pts.length >= 2) {
          onAddDrawing({
            page: activePage,
            type: 'freehand',
            points: pts,
            color: activeColor,
            lineWidth: activeLineWidth,
          });
        }
      } else if (drawingTool === 'line' || drawingTool === 'arrow') {
        onAddDrawing({
          page: activePage,
          type: drawingTool,
          points: [drawStart, { x, y }],
          color: activeColor,
          lineWidth: activeLineWidth,
        });
      } else {
        // rect or circle
        const rect = {
          x: Math.min(drawStart.x, x),
          y: Math.min(drawStart.y, y),
          width: Math.abs(x - drawStart.x),
          height: Math.abs(y - drawStart.y),
        };
        if (rect.width > 3 && rect.height > 3) {
          onAddDrawing({
            page: activePage,
            type: drawingTool,
            ...rect,
            color: activeColor,
            lineWidth: activeLineWidth,
          });
        }
      }
    }

    setIsDrawing(false);
    setDrawStart(null);
    setCurrentPoints([]);
    setPreviewRect(null);
    setDrawEnd(null);
  }, [isDrawing, activeTool, drawStart, getCanvasCoords, activePage, currentPoints, onAddHighlight, onAddRedaction, onAddDrawing, drawingTool, activeColor, activeLineWidth, highlightColor]);

  // Filter items for current page
  const currentPageBoxes = textBoxes.filter((tb) => tb.page === activePage);
  const currentHighlights = highlights.filter((h) => h.page === activePage);
  const currentDrawings = drawings.filter((d) => d.page === activePage);
  const currentRedactions = redactions.filter((r) => r.page === activePage);
  const currentImages = placedImages.filter((img) => img.page === activePage);
  const currentStickyNotes = stickyNotes.filter((n) => n.page === activePage);
  const currentStamps = stamps.filter((s) => s.page === activePage);
  const showSignature = signature && signature.page === activePage;

  // Determine cursor based on active tool
  const getCursor = () => {
    if (activeTool === 'text') return 'crosshair';
    if (activeTool === 'note') return 'crosshair';
    if (activeTool === 'highlight') return 'crosshair';
    if (activeTool === 'redact') return 'crosshair';
    if (activeTool === 'draw') return 'crosshair';
    return 'default';
  };

  if (!pdfjsDoc) {
    return (
      <div className="page-editor-view empty">
        <div className="spinner" />
        <p>Loading document…</p>
      </div>
    );
  }

  return (
    <div className="page-editor-view">
      {/* Page controls bar */}
      <div className="page-editor-controls">
        <button
          onClick={() => onPageChange(Math.max(1, activePage - 1))}
          disabled={activePage <= 1}
        >
          ‹ Prev
        </button>
        <span className="page-indicator">
          Page {activePage} of {pageCount}
        </span>
        <button
          onClick={() => onPageChange(Math.min(pageCount, activePage + 1))}
          disabled={activePage >= pageCount}
        >
          Next ›
        </button>
      </div>

      {/* Canvas + all overlays */}
      <div
        className="page-canvas-container"
        ref={containerRef}
        style={{ cursor: getCursor(), position: 'relative' }}
      >
        <canvas
          ref={canvasRef}
          onMouseDown={handleCanvasMouseDown}
          onMouseMove={handleCanvasMouseMove}
          onMouseUp={handleCanvasMouseUp}
          style={{ display: 'block' }}
        />

        {/* SVG overlay for drawings, highlights, redactions */}
        <svg
          ref={overlayRef}
          className="page-svg-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: canvasSize.width,
            height: canvasSize.height,
            pointerEvents: 'none',
          }}
        >
          {/* Existing highlights */}
          {currentHighlights.map((h, i) => (
            <rect
              key={`hl-${i}`}
              x={h.x} y={h.y}
              width={h.width} height={h.height}
              fill={h.color || '#fde047'}
              opacity={0.35}
              style={{ pointerEvents: 'all', cursor: 'pointer' }}
              onClick={() => onDeleteHighlight && onDeleteHighlight(h.id)}
            />
          ))}

          {/* Existing redactions */}
          {currentRedactions.map((r, i) => (
            <rect
              key={`red-${i}`}
              x={r.x} y={r.y}
              width={r.width} height={r.height}
              fill="#000000"
              opacity={1}
              style={{ pointerEvents: 'all', cursor: 'pointer' }}
              onClick={() => onDeleteRedaction && onDeleteRedaction(r.id)}
            />
          ))}

          {/* Existing drawings */}
          {currentDrawings.map((d, i) => {
            const stroke = d.color || '#000000';
            const sw = d.lineWidth || 2;
            if (d.type === 'freehand' && d.points?.length >= 2) {
              const pathData = d.points.reduce((acc, p, idx) =>
                idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`, '');
              return <path key={`dr-${i}`} d={pathData} stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'all', cursor: 'pointer' }} onClick={() => onDeleteDrawing && onDeleteDrawing(d.id)} />;
            }
            if (d.type === 'rect') {
              return <rect key={`dr-${i}`} x={d.x} y={d.y} width={d.width} height={d.height} stroke={stroke} strokeWidth={sw} fill="none" style={{ pointerEvents: 'all', cursor: 'pointer' }} onClick={() => onDeleteDrawing && onDeleteDrawing(d.id)} />;
            }
            if (d.type === 'circle') {
              return <ellipse key={`dr-${i}`} cx={d.x + d.width / 2} cy={d.y + d.height / 2} rx={d.width / 2} ry={d.height / 2} stroke={stroke} strokeWidth={sw} fill="none" style={{ pointerEvents: 'all', cursor: 'pointer' }} onClick={() => onDeleteDrawing && onDeleteDrawing(d.id)} />;
            }
            if ((d.type === 'line' || d.type === 'arrow') && d.points?.length >= 2) {
              const s = d.points[0];
              const en = d.points[d.points.length - 1];
              return (
                <g key={`dr-${i}`} style={{ pointerEvents: 'all', cursor: 'pointer' }} onClick={() => onDeleteDrawing && onDeleteDrawing(d.id)}>
                  <line x1={s.x} y1={s.y} x2={en.x} y2={en.y} stroke={stroke} strokeWidth={sw} />
                  {d.type === 'arrow' && (() => {
                    const angle = Math.atan2(en.y - s.y, en.x - s.x);
                    const hl = 12;
                    return (
                      <>
                        <line x1={en.x} y1={en.y} x2={en.x - hl * Math.cos(angle - Math.PI / 6)} y2={en.y - hl * Math.sin(angle - Math.PI / 6)} stroke={stroke} strokeWidth={sw} />
                        <line x1={en.x} y1={en.y} x2={en.x - hl * Math.cos(angle + Math.PI / 6)} y2={en.y - hl * Math.sin(angle + Math.PI / 6)} stroke={stroke} strokeWidth={sw} />
                      </>
                    );
                  })()}
                </g>
              );
            }
            return null;
          })}

          {/* Drawing/highlight/redaction preview */}
          {isDrawing && previewRect && (activeTool === 'highlight') && (
            <rect x={previewRect.x} y={previewRect.y} width={previewRect.width} height={previewRect.height} fill={highlightColor} opacity={0.35} />
          )}
          {isDrawing && previewRect && (activeTool === 'redact') && (
            <rect x={previewRect.x} y={previewRect.y} width={previewRect.width} height={previewRect.height} fill="#000000" opacity={0.85} />
          )}
          {isDrawing && activeTool === 'draw' && drawingTool === 'freehand' && currentPoints.length >= 2 && (
            <path d={currentPoints.reduce((acc, p, idx) => idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`, '')} stroke={activeColor} strokeWidth={activeLineWidth} fill="none" strokeLinecap="round" />
          )}
          {isDrawing && previewRect && activeTool === 'draw' && drawingTool === 'rect' && (
            <rect x={previewRect.x} y={previewRect.y} width={previewRect.width} height={previewRect.height} stroke={activeColor} strokeWidth={activeLineWidth} fill="none" />
          )}
          {isDrawing && previewRect && activeTool === 'draw' && drawingTool === 'circle' && (
            <ellipse cx={previewRect.x + previewRect.width / 2} cy={previewRect.y + previewRect.height / 2} rx={previewRect.width / 2} ry={previewRect.height / 2} stroke={activeColor} strokeWidth={activeLineWidth} fill="none" />
          )}
          {isDrawing && drawStart && drawEnd && activeTool === 'draw' && (drawingTool === 'line' || drawingTool === 'arrow') && (
            <line x1={drawStart.x} y1={drawStart.y} x2={drawEnd.x} y2={drawEnd.y} stroke={activeColor} strokeWidth={activeLineWidth} />
          )}
        </svg>

        {/* Signature overlay (draggable) */}
        {showSignature && (
          <DraggableOverlay
            x={signature.x}
            y={signature.y}
            onDragEnd={(x, y) => onUpdateSignature({ ...signature, x, y })}
          >
            <div className="signature-overlay" style={{ width: signature.width || 200, height: signature.height || 80 }}>
              <img src={signature.dataUrl} alt="Signature" draggable={false} />
              <button
                className="overlay-delete-btn"
                onClick={(e) => { e.stopPropagation(); onDeleteSignature(); }}
                title="Remove signature"
              >✕</button>
            </div>
          </DraggableOverlay>
        )}

        {/* Placed image overlays */}
        {currentImages.map((img) => (
          <DraggableOverlay
            key={img.id}
            x={img.x}
            y={img.y}
            onDragEnd={(x, y) => onUpdateImage({ ...img, x, y })}
          >
            <div className="image-overlay" style={{ width: img.width, height: img.height }}>
              <img src={img.dataUrl} alt="Placed image" draggable={false} />
              <button
                className="overlay-delete-btn"
                onClick={(e) => { e.stopPropagation(); onDeleteImage(img.id); }}
                title="Remove image"
              >✕</button>
            </div>
          </DraggableOverlay>
        ))}

        {/* Stamp overlays */}
        {currentStamps.map((s) => (
          <DraggableOverlay
            key={s.id}
            x={s.x}
            y={s.y}
            onDragEnd={(x, y) => onUpdateStamp?.({ ...s, x, y })}
          >
            <div className="stamp-overlay" style={{
              color: s.color || '#1e40af',
              background: s.bg || '#dbeafe',
              border: `2px solid ${s.color || '#1e40af'}`,
              fontSize: s.fontSize || 30,
              fontWeight: 'bold',
              padding: '4px 12px',
              borderRadius: 4,
              whiteSpace: 'pre-line',
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '2px',
              userSelect: 'none',
            }}>
              {s.text}
              <button
                className="overlay-delete-btn"
                onClick={(e) => { e.stopPropagation(); onDeleteStamp?.(s.id); }}
                title="Remove stamp"
              >✕</button>
            </div>
          </DraggableOverlay>
        ))}

        {/* Sticky note overlays */}
        {currentStickyNotes.map((n) => (
          <StickyNote
            key={n.id}
            note={n}
            onUpdate={onUpdateStickyNote}
            onDelete={onDeleteStickyNote}
          />
        ))}

        {/* Text box overlays */}
        {currentPageBoxes.map((tb) => (
          <TextBoxOverlay
            key={tb.id}
            textBox={tb}
            isEditing={editingId === tb.id}
            onStartEdit={() => setEditingId(tb.id)}
            onBlur={() => setEditingId(null)}
            onUpdate={onUpdateTextBox}
            onDelete={onDeleteTextBox}
            colors={COLORS}
          />
        ))}
      </div>
    </div>
  );
};

/** Generic draggable overlay wrapper */
const DraggableOverlay = ({ x, y, onDragEnd, children }) => {
  const [pos, setPos] = useState({ x, y });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(null);

  useEffect(() => { setPos({ x, y }); }, [x, y]);

  const handleMouseDown = (e) => {
    if (e.target.tagName === 'BUTTON') return;
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
    dragStart.current = { mx: e.clientX, my: e.clientY, ox: pos.x, oy: pos.y };
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => {
      const dx = e.clientX - dragStart.current.mx;
      const dy = e.clientY - dragStart.current.my;
      setPos({ x: dragStart.current.ox + dx, y: dragStart.current.oy + dy });
    };
    const onUp = () => {
      setDragging(false);
      // Use ref to get the latest position
      const finalX = dragStart.current.ox + (window._lastDragX || 0);
      const finalY = dragStart.current.oy + (window._lastDragY || 0);
      onDragEnd(pos.x, pos.y);
    };
    const wrappedMove = (e) => {
      window._lastDragX = e.clientX - dragStart.current.mx;
      window._lastDragY = e.clientY - dragStart.current.my;
      onMove(e);
    };
    window.addEventListener('mousemove', wrappedMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', wrappedMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [dragging, onDragEnd, pos]);

  return (
    <div
      className="draggable-overlay"
      style={{
        position: 'absolute',
        left: pos.x,
        top: pos.y,
        cursor: dragging ? 'grabbing' : 'grab',
        zIndex: 10,
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

/** Draggable, editable text box overlay on the canvas */
const TextBoxOverlay = ({ textBox, isEditing, onStartEdit, onBlur, onUpdate, onDelete, colors }) => {
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: textBox.x, y: textBox.y });
  const dragStart = useRef(null);
  const textareaRef = useRef(null);
  const containerRef = useRef(null);
  const blurTimeout = useRef(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    setPos({ x: textBox.x, y: textBox.y });
  }, [textBox.x, textBox.y]);

  // Click-outside to close editing (replaces onBlur on textarea)
  useEffect(() => {
    if (!isEditing) return;
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        onBlur();
      }
    };
    // Small delay so the opening click doesn't immediately close
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 50);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEditing, onBlur]);

  const handleMouseDown = (e) => {
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON' || e.target.tagName === 'SELECT') return;
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
    dragStart.current = { mx: e.clientX, my: e.clientY, ox: pos.x, oy: pos.y };
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => {
      const dx = e.clientX - dragStart.current.mx;
      const dy = e.clientY - dragStart.current.my;
      setPos({ x: dragStart.current.ox + dx, y: dragStart.current.oy + dy });
    };
    const onUp = () => {
      setDragging(false);
      onUpdate({ ...textBox, x: pos.x, y: pos.y });
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [dragging, pos, textBox, onUpdate]);

  const fontFamily = textBox.fontFamily || FONTS[0].value;

  return (
    <div
      ref={containerRef}
      className={`text-box-overlay ${isEditing ? 'editing' : ''}`}
      style={{ left: pos.x, top: pos.y, fontSize: textBox.fontSize, color: textBox.color, fontFamily }}
      onMouseDown={handleMouseDown}
      onClick={onStartEdit}
    >
      {isEditing ? (
        <div className="text-box-editor">
          <textarea
            ref={textareaRef}
            value={textBox.text}
            onChange={(e) => onUpdate({ ...textBox, text: e.target.value })}
            rows={3}
            placeholder="Type here…"
            style={{ fontFamily, fontSize: textBox.fontSize, color: textBox.color }}
          />
          <div className="text-box-toolbar">
            <select
              value={fontFamily}
              onChange={(e) => { e.stopPropagation(); onUpdate({ ...textBox, fontFamily: e.target.value }); }}
              onMouseDown={(e) => e.stopPropagation()}
              title="Font family"
              className="tb-font-select"
            >
              {FONTS.map((f) => (
                <option key={f.value} value={f.value} style={{ fontFamily: f.value }}>{f.label}</option>
              ))}
            </select>
            <select
              value={textBox.fontSize}
              onChange={(e) => { e.stopPropagation(); onUpdate({ ...textBox, fontSize: Number(e.target.value) }); }}
              onMouseDown={(e) => e.stopPropagation()}
              title="Font size"
              className="tb-size-select"
            >
              {[8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 64, 72].map((s) => (
                <option key={s} value={s}>{s}pt</option>
              ))}
            </select>
            <div className="color-swatches">
              {colors.map((c) => (
                <button
                  key={c}
                  className={`color-swatch ${textBox.color === c ? 'active' : ''}`}
                  style={{ background: c }}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => { e.stopPropagation(); onUpdate({ ...textBox, color: c }); }}
                  title={c}
                />
              ))}
            </div>
            <button
              className="delete-tb-btn"
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => { e.stopPropagation(); onDelete(textBox.id); }}
              title="Delete text box"
            >
              🗑
            </button>
          </div>
        </div>
      ) : (
        <div className="text-box-display" style={{ fontSize: textBox.fontSize, color: textBox.color, fontFamily }}>
          {textBox.text || <span className="tb-placeholder">Double-click to edit</span>}
        </div>
      )}
    </div>
  );
};

export default PageEditorView;
