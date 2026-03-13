import React, { useState, useRef, useEffect } from 'react';

const StickyNote = ({ note, onUpdate, onDelete }) => {
  const [expanded, setExpanded] = useState(!note.text);
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: note.x, y: note.y });
  const dragStart = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => { setPos({ x: note.x, y: note.y }); }, [note.x, note.y]);

  useEffect(() => {
    if (expanded && textareaRef.current) textareaRef.current.focus();
  }, [expanded]);

  const handleMouseDown = (e) => {
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON') return;
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
    dragStart.current = { mx: e.clientX, my: e.clientY, ox: pos.x, oy: pos.y };
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => {
      setPos({
        x: dragStart.current.ox + (e.clientX - dragStart.current.mx),
        y: dragStart.current.oy + (e.clientY - dragStart.current.my),
      });
    };
    const onUp = () => {
      setDragging(false);
      onUpdate({ ...note, x: pos.x, y: pos.y });
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [dragging, pos, note, onUpdate]);

  const noteColor = note.color || '#fef08a';

  return (
    <div
      className="sticky-note"
      style={{
        position: 'absolute',
        left: pos.x,
        top: pos.y,
        zIndex: 15,
        cursor: dragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
    >
      {expanded ? (
        <div className="sticky-note-expanded" style={{ background: noteColor }}>
          <div className="sticky-note-header">
            <span className="sticky-note-title">Note</span>
            <div>
              <button
                className="sticky-note-btn"
                onClick={(e) => { e.stopPropagation(); setExpanded(false); }}
                title="Minimize"
              >—</button>
              <button
                className="sticky-note-btn danger"
                onClick={(e) => { e.stopPropagation(); onDelete(note.id); }}
                title="Delete note"
              >✕</button>
            </div>
          </div>
          <textarea
            ref={textareaRef}
            className="sticky-note-textarea"
            value={note.text || ''}
            onChange={(e) => onUpdate({ ...note, text: e.target.value })}
            onMouseDown={(e) => e.stopPropagation()}
            placeholder="Add a comment..."
            rows={4}
          />
        </div>
      ) : (
        <div
          className="sticky-note-icon"
          style={{ background: noteColor }}
          onClick={(e) => { e.stopPropagation(); setExpanded(true); }}
          title={note.text || 'Click to open note'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          {note.text && <span className="sticky-note-badge" />}
        </div>
      )}
    </div>
  );
};

export default StickyNote;
