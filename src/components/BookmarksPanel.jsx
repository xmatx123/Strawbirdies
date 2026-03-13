import React, { useEffect, useState } from 'react';

const BookmarkItem = ({ item, onNavigate, depth = 0 }) => {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = item.items && item.items.length > 0;

  return (
    <div className="bookmark-item" style={{ paddingLeft: depth * 16 }}>
      <div
        className="bookmark-label"
        onClick={() => {
          if (item.dest) onNavigate(item.dest);
        }}
      >
        {hasChildren && (
          <button
            className="bookmark-toggle"
            onClick={(e) => { e.stopPropagation(); setExpanded(v => !v); }}
          >
            {expanded ? '▾' : '▸'}
          </button>
        )}
        <span className="bookmark-title">{item.title}</span>
      </div>
      {hasChildren && expanded && (
        <div className="bookmark-children">
          {item.items.map((child, i) => (
            <BookmarkItem key={i} item={child} onNavigate={onNavigate} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const BookmarksPanel = ({ pdfjsDoc, onGoToPage, onClose }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!pdfjsDoc) return;
    let cancelled = false;

    const loadOutline = async () => {
      try {
        const outline = await pdfjsDoc.getOutline();
        if (!cancelled) {
          setBookmarks(outline || []);
        }
      } catch (err) {
        console.error('Error loading outline:', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadOutline();
    return () => { cancelled = true; };
  }, [pdfjsDoc]);

  const handleNavigate = async (dest) => {
    if (!pdfjsDoc || !dest) return;
    try {
      let ref;
      if (typeof dest === 'string') {
        ref = await pdfjsDoc.getDestination(dest);
        if (ref) ref = ref[0];
      } else if (Array.isArray(dest)) {
        ref = dest[0];
      }
      if (ref) {
        const pageIndex = await pdfjsDoc.getPageIndex(ref);
        onGoToPage(pageIndex + 1);
      }
    } catch (err) {
      console.error('Navigate bookmark error:', err);
    }
  };

  return (
    <div className="bookmarks-panel">
      <div className="bookmarks-header">
        <h3>Bookmarks</h3>
        <button className="modal-close" onClick={onClose}>✕</button>
      </div>
      <div className="bookmarks-content">
        {loading && <p className="bookmarks-empty">Loading...</p>}
        {!loading && bookmarks.length === 0 && (
          <p className="bookmarks-empty">No bookmarks found in this document.</p>
        )}
        {bookmarks.map((item, i) => (
          <BookmarkItem key={i} item={item} onNavigate={handleNavigate} />
        ))}
      </div>
    </div>
  );
};

export default BookmarksPanel;
