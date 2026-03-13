import React from 'react';

const ZoomControl = ({ zoom, onZoomChange }) => {
  const steps = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];

  const zoomIn = () => {
    const next = steps.find((s) => s > zoom);
    if (next) onZoomChange(next);
  };

  const zoomOut = () => {
    const prev = [...steps].reverse().find((s) => s < zoom);
    if (prev) onZoomChange(prev);
  };

  return (
    <div className="zoom-control">
      <button onClick={zoomOut} disabled={zoom <= 0.5} title="Zoom out">
        −
      </button>
      <span>{Math.round(zoom * 100)}%</span>
      <button onClick={zoomIn} disabled={zoom >= 2.0} title="Zoom in">
        +
      </button>
    </div>
  );
};

export default ZoomControl;
