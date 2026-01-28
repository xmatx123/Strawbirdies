import React from 'react';
import { motion } from 'framer-motion';
import { Star, Signal, Truck, ShieldAlert, Mountain } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const SpotCard = ({ spot, onClose, onNavigate, onViewDetails }) => {
    if (!spot) return null;

    // Normalize images: favor spot.images array, fallback to spot.image string wrapped in array
    const images = spot.images && spot.images.length > 0
        ? spot.images
        : (spot.image ? [spot.image] : []);

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="glass-panel spot-card"
            style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)', // Centered properly via CSS usually, but Framer Motion handles animate
                // We'll use CSS for responsive width
                zIndex: 1020,
                padding: '0',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <ImageCarousel images={images} height="160px" />

            <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{spot.name || "Unknown Spot"}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-rating)' }}>
                        <Star size={16} fill="currentColor" />
                        <span style={{ marginLeft: '4px', fontWeight: 'bold' }}>{spot.rating || 4.5}</span>
                    </div>
                </div>

                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '12px' }}>
                    Verified: {spot.lastVerified ? new Date(spot.lastVerified).toLocaleDateString() : "Just now"}
                </p>

                {/* Preview Mode: Limited Info */}
                <div style={{
                    maxHeight: '60px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    marginBottom: '16px',
                    position: 'relative'
                }}>
                    {spot.description && (
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.4', margin: 0, color: '#aaa' }}>
                            {spot.description}
                        </p>
                    )}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '30px',
                        background: 'linear-gradient(transparent, rgba(16, 23, 42, 0.9))'
                    }} />
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                    {/* Primary Option: Open Spot (Full Info) */}
                    <button
                        className="btn-primary"
                        style={{ flex: 2, background: 'var(--color-accent)', color: 'white' }}
                        onClick={onViewDetails}
                    >
                        See Details
                    </button>
                    {/* Secondary Option: Navigate */}
                    <button
                        className="btn-primary"
                        style={{ flex: 1, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                        onClick={onNavigate}
                    >
                        Navigate
                    </button>
                    <button
                        onClick={onClose}
                        style={{ background: 'transparent', border: 'none', color: 'white', padding: '0 8px', cursor: 'pointer' }}
                    >X</button>
                </div>
            </div>

            <style>{`
        .spot-card {
            width: 90%;
            max-width: 400px;
            /* Mobile adjustment loop handled by parent usually, but here fixed for MVP */
        }
        @media (min-width: 768px) {
            .spot-card {
                left: 20px;
                bottom: 20px;
                transform: none !important; /* Override framer for desktop clean pos */
                width: 360px;
            }
        }
      `}</style>
        </motion.div>
    );
};

export default SpotCard;
