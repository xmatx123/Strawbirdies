import React from 'react';
import { Filter, Calendar } from 'lucide-react';

const Filters = ({ showVerifiedOnly, setShowVerifiedOnly }) => {
  return (
    <div className="glass-panel" style={{
      position: 'absolute',
      top: '20px',
      left: '20px',
      zIndex: 1010,
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Freshness First</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={showVerifiedOnly}
            onChange={(e) => setShowVerifiedOnly(e.target.checked)}
          />
          <span className="slider round"></span>
        </label>
      </div>

      <style>{`
        /* Toggle Switch */
        .switch {
          position: relative;
          display: inline-block;
          width: 40px;
          height: 24px;
        }
        .switch input { 
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--color-bg-main);
          transition: .4s;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: var(--color-accent);
        }
        input:checked + .slider:before {
          transform: translateX(16px);
        }
        .slider.round {
          border-radius: 34px;
        }
      `}</style>
    </div>
  );
};

export default Filters;
