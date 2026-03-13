import React, { useState } from 'react';

const COLOR_OPTIONS = [
  { value: '#fef08a', label: 'Yellow' },
  { value: '#bbf7d0', label: 'Green' },
  { value: '#bfdbfe', label: 'Blue' },
  { value: '#fbcfe8', label: 'Pink' },
];

const AnnotationPanel = ({ annotations, pageCount, onAdd, onDelete }) => {
  const [showForm, setShowForm] = useState(false);
  const [notePage, setNotePage] = useState(1);
  const [noteText, setNoteText] = useState('');
  const [noteColor, setNoteColor] = useState(COLOR_OPTIONS[0].value);

  const handleSave = () => {
    if (!noteText.trim()) {
      alert('Please enter note text');
      return;
    }
    onAdd({
      page: notePage,
      text: noteText.trim(),
      color: noteColor,
    });
    setNoteText('');
    setNotePage(1);
    setNoteColor(COLOR_OPTIONS[0].value);
    setShowForm(false);
  };

  return (
    <div className="annotation-panel">
      <div className="annotation-panel-header">
        <h3>Sticky Notes</h3>
        <button
          className="primary-btn"
          onClick={() => setShowForm((v) => !v)}
          style={{ padding: '0.375rem 0.75rem', fontSize: '0.8rem' }}
        >
          {showForm ? '− Cancel' : '+ Add Note'}
        </button>
      </div>

      {showForm && (
        <div className="annotation-form">
          <label style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>Page</span>
            <select
              value={notePage}
              onChange={(e) => setNotePage(Number(e.target.value))}
              style={{
                padding: '0.375rem',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                fontSize: '0.875rem',
              }}
            >
              {Array.from({ length: pageCount }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  Page {i + 1}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>Note</span>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Enter note text..."
              rows={3}
              style={{
                padding: '0.375rem',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                fontSize: '0.875rem',
                resize: 'vertical',
              }}
            />
          </label>

          <div style={{ marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 500, display: 'block', marginBottom: '0.375rem' }}>
              Color
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {COLOR_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  title={opt.label}
                  onClick={() => setNoteColor(opt.value)}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: opt.value,
                    border: noteColor === opt.value ? '3px solid var(--primary)' : '2px solid var(--border)',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

          <button className="primary-btn" onClick={handleSave} style={{ width: '100%' }}>
            Save Note
          </button>
        </div>
      )}

      <div className="annotation-list">
        {annotations.length === 0 ? (
          <div className="annotation-empty">
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="15" cy="20" rx="9" ry="10" fill="#E8453C" opacity="0.6"/>
              <ellipse cx="15" cy="17" rx="10" ry="8" fill="#E8453C" opacity="0.6"/>
              <ellipse cx="6" cy="18" rx="4" ry="3" fill="#C73530" opacity="0.5" transform="rotate(-20 6 18)"/>
              <ellipse cx="24" cy="18" rx="4" ry="3" fill="#C73530" opacity="0.5" transform="rotate(20 24 18)"/>
              <path d="M12 9 Q15 4 18 9" stroke="#2D6A4F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <line x1="15" y1="9" x2="15" y2="12" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round"/>
              <ellipse cx="12" cy="17" rx="1.8" ry="1.8" fill="white"/>
              <ellipse cx="18" cy="17" rx="1.8" ry="1.8" fill="white"/>
              <circle cx="12.5" cy="17" r="0.8" fill="#1A0A08"/>
              <circle cx="18.5" cy="17" r="0.8" fill="#1A0A08"/>
              <polygon points="21,19 24,20.5 21,22" fill="#FF8C00"/>
            </svg>
            <p>No notes yet</p>
            <span>Click + Add Note to get started</span>
          </div>
        ) : (
          annotations.map((note) => (
            <div key={note.id} className="annotation-item">
              <div
                className="annotation-color-dot"
                style={{ background: note.color }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                  Page {note.page}
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {note.text}
                </div>
              </div>
              <button
                onClick={() => onDelete(note.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--danger)',
                  fontSize: '1.125rem',
                  cursor: 'pointer',
                  padding: '0 0.25rem',
                  flexShrink: 0,
                }}
                title="Delete note"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AnnotationPanel;
