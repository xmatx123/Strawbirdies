import React from 'react';
import { Star, MapPin } from 'lucide-react';

const SpotList = ({ spots, onSelectSpot }) => {
    return (
        <div className="glass-panel" style={{
            position: 'absolute',
            top: '80px', // Below Freshness toggle
            left: '20px',
            width: '260px',
            maxHeight: 'calc(100vh - 120px)',
            overflowY: 'auto',
            zIndex: 1010, // High z-index to be above map
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
        }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
                Nearby Spots ({spots.length})
            </h3>
            {spots.map(spot => (
                <div
                    key={spot.id}
                    onClick={() => onSelectSpot(spot)}
                    style={{
                        padding: '8px',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.05)',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                >
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px' }}>{spot.name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                        <Star size={12} color="var(--color-rating)" /> {spot.rating}
                        <span>•</span>
                        <MapPin size={12} /> {spot.type === 'water' ? 'Water' : 'Camp'}
                        {spot.distance && (
                            <>
                                <span>•</span>
                                <span>{spot.distance.toFixed(1)} km</span>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SpotList;
