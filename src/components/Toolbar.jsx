import React, { useState } from 'react';

const HIGHLIGHT_COLORS = ['#fde047', '#86efac', '#93c5fd', '#fda4af', '#fdba74'];
const DRAW_TOOLS = [
  { id: 'freehand', label: 'Pen', icon: '✏️' },
  { id: 'rect', label: 'Rectangle', icon: '▭' },
  { id: 'circle', label: 'Circle', icon: '○' },
  { id: 'line', label: 'Line', icon: '╱' },
  { id: 'arrow', label: 'Arrow', icon: '→' },
];

const Toolbar = ({
  onRotateLeft, onRotateRight, onDelete,
  onMerge, onSplit, onDownload,
  onSign, onProtect, onShare, onAnnotate,
  selectedPages, pageCount, hasChanges, pdfFile,
  showAnnotationPanel,
  activeTool = 'select', onToolChange,
  drawingTool = 'freehand', onDrawingToolChange,
  highlightColor = '#fde047', onHighlightColorChange,
  onInsertImage, onPrint,
  onWatermark, onPageNumbers, onHeaderFooter,
  onExport, onFindReplace,
  onRemoveMetadata, onCompress,
  onStamp,
  onOCR,
  onBookmarks,
  onAI,
}) => {
  const [showDrawDropdown, setShowDrawDropdown] = useState(false);
  const [showHighlightDropdown, setShowHighlightDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);

  return (
    <div className="toolbar-container">
      <div className="toolbar">
        {/* ── Edit Tools ── */}
        <div className="toolbar-group">
          <button
            className={activeTool === 'select' ? 'primary' : ''}
            onClick={() => onToolChange?.('select')}
            title="Select tool"
          >
            ↖ Select
          </button>
          <button
            className={activeTool === 'text' ? 'primary' : ''}
            onClick={() => onToolChange?.('text')}
            title="Click on page to add text"
          >
            T Text
          </button>
          <button
            className={activeTool === 'editText' ? 'primary' : ''}
            onClick={() => onToolChange?.('editText')}
            title="Click existing text to edit it"
          >
            ✎ Edit
          </button>

          <div style={{ position: 'relative', display: 'inline-flex' }}>
            <button
              className={activeTool === 'highlight' ? 'primary' : ''}
              onClick={() => onToolChange?.('highlight')}
              title="Highlight areas"
            >
              <span style={{ background: highlightColor, padding: '0 4px', borderRadius: 2, marginRight: 4 }}>&nbsp;</span>
              Highlight
            </button>
            <button
              onClick={() => setShowHighlightDropdown(v => !v)}
              title="Change highlight color"
              style={{ padding: '0.2rem 0.3rem', minWidth: 'auto', borderLeft: '1px solid rgba(0,0,0,0.1)' }}
            >
              ▾
            </button>
            {showHighlightDropdown && (
              <div className="toolbar-dropdown" onMouseLeave={() => setShowHighlightDropdown(false)}>
                <div style={{ display: 'flex', gap: 4, padding: 4 }}>
                  {HIGHLIGHT_COLORS.map(c => (
                    <button
                      key={c}
                      style={{ background: c, width: 24, height: 24, border: highlightColor === c ? '2px solid #333' : '1px solid #ccc', borderRadius: 4, cursor: 'pointer', padding: 0, minWidth: 'auto' }}
                      onClick={() => { onHighlightColorChange?.(c); setShowHighlightDropdown(false); }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div style={{ position: 'relative', display: 'inline-flex' }}>
            <button
              className={activeTool === 'draw' ? 'primary' : ''}
              onClick={() => onToolChange?.('draw')}
              title={`Draw: ${drawingTool}`}
            >
              {DRAW_TOOLS.find(t => t.id === drawingTool)?.icon || '✏️'} Draw
            </button>
            <button
              onClick={() => setShowDrawDropdown(v => !v)}
              title="Change drawing tool"
              style={{ padding: '0.2rem 0.3rem', minWidth: 'auto', borderLeft: '1px solid rgba(0,0,0,0.1)' }}
            >
              ▾
            </button>
            {showDrawDropdown && (
              <div className="toolbar-dropdown" onMouseLeave={() => setShowDrawDropdown(false)}>
                {DRAW_TOOLS.map(t => (
                  <button
                    key={t.id}
                    onClick={() => { onDrawingToolChange?.(t.id); setShowDrawDropdown(false); }}
                    style={{ display: 'flex', gap: 6, alignItems: 'center', width: '100%', padding: '6px 10px', background: drawingTool === t.id ? 'var(--accent)' : 'transparent', color: drawingTool === t.id ? 'white' : 'inherit', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: '0.8rem', minWidth: 'auto' }}
                  >
                    <span>{t.icon}</span> {t.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className={activeTool === 'note' ? 'primary' : ''}
            onClick={() => onToolChange?.('note')}
            title="Add sticky note"
          >
            📌 Note
          </button>

          <button
            className={activeTool === 'redact' ? 'danger' : ''}
            onClick={() => onToolChange?.('redact')}
            title="Redact: permanently black out content"
          >
            ██ Redact
          </button>
        </div>

        <div className="toolbar-divider" />

        {/* ── Insert ── */}
        <div className="toolbar-group">
          <button onClick={onInsertImage} disabled={!pdfFile} title="Insert an image onto the page">
            🖼 Image
          </button>
          <button onClick={onSign} disabled={!pdfFile} title="Add signature">
            ✍️ Sign
          </button>
          <button onClick={onStamp} disabled={!pdfFile} title="Add stamp">
            🏷 Stamp
          </button>
        </div>

        <div className="toolbar-divider" />

        {/* ── Page Operations ── */}
        <div className="toolbar-group">
          <button onClick={onRotateLeft} disabled={selectedPages.length === 0} title="Rotate selected pages left">↺</button>
          <button onClick={onRotateRight} disabled={selectedPages.length === 0} title="Rotate selected pages right">↻</button>
          <button onClick={onDelete} disabled={selectedPages.length === 0} className="danger" title="Delete selected pages">🗑</button>
        </div>

        <div className="toolbar-divider" />

        {/* ── Document ── */}
        <div className="toolbar-group">
          <button onClick={onMerge} disabled={!pdfFile} title="Merge with another PDF">Merge</button>
          <button onClick={onSplit} disabled={!pdfFile || pageCount < 2} title="Split PDF">Split</button>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button onClick={() => setShowMoreDropdown(v => !v)} disabled={!pdfFile} title="More document tools">
              More ▾
            </button>
            {showMoreDropdown && (
              <div className="toolbar-dropdown toolbar-dropdown-wide" onMouseLeave={() => setShowMoreDropdown(false)}>
                <button onClick={() => { onWatermark?.(); setShowMoreDropdown(false); }}>💧 Watermark</button>
                <button onClick={() => { onPageNumbers?.(); setShowMoreDropdown(false); }}>🔢 Page Numbers</button>
                <button onClick={() => { onHeaderFooter?.(); setShowMoreDropdown(false); }}>📄 Header / Footer</button>
                <hr style={{ margin: '4px 0', border: 'none', borderTop: '1px solid #eee' }} />
                <button onClick={() => { onCompress?.(); setShowMoreDropdown(false); }}>📦 Compress</button>
                <button onClick={() => { onRemoveMetadata?.(); setShowMoreDropdown(false); }}>🧹 Remove Metadata</button>
                <button onClick={() => { onProtect?.(); setShowMoreDropdown(false); }}>🔒 Password Protect</button>
                <hr style={{ margin: '4px 0', border: 'none', borderTop: '1px solid #eee' }} />
                <button onClick={() => { onFindReplace?.(); setShowMoreDropdown(false); }}>🔍 Find Text</button>
                <button onClick={() => { onOCR?.(); setShowMoreDropdown(false); }}>👁 OCR (Extract Text)</button>
                <button onClick={() => { onBookmarks?.(); setShowMoreDropdown(false); }}>📑 Bookmarks</button>
                <button onClick={() => { onAnnotate?.(); setShowMoreDropdown(false); }}>
                  📝 Notes {showAnnotationPanel ? '(on)' : ''}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="toolbar-divider" />

        {/* ── Export & Share ── */}
        <div className="toolbar-group">
          <button onClick={onAI} disabled={!pdfFile} title="AI Assistant - summarize, ask questions">🤖 AI</button>
          <button onClick={onShare} disabled={!pdfFile} title="Share via link">🔗</button>
          <button onClick={onExport} disabled={!pdfFile} title="Export pages as images">📤 Export</button>
          <button onClick={onPrint} disabled={!pdfFile} title="Print PDF">🖨</button>
          <button onClick={onDownload} disabled={!hasChanges} className="primary" title="Download edited PDF">
            ⬇ Download
          </button>
        </div>

        <div className="toolbar-info">
          {selectedPages.length > 0
            ? `${selectedPages.length} selected`
            : `${pageCount} pages`}
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
