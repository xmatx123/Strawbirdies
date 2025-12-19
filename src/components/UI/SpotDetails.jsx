import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Navigation, X, Wifi, Signal, Droplets, Bath, MessageSquare, Send } from 'lucide-react';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const SpotDetails = ({ spot, onClose, onNavigate }) => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(5);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch Reviews
    useEffect(() => {
        if (!spot?.id) return;
        const q = query(collection(db, `spots/${spot.id}/reviews`), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setReviews(data);
        });
        return () => unsubscribe();
    }, [spot?.id]);

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        if (!newReview.trim()) return;
        setIsSubmitting(true);
        try {
            await addDoc(collection(db, `spots/${spot.id}/reviews`), {
                text: newReview,
                rating,
                createdAt: new Date().toISOString(),
                userName: "Traveler" // Anonymous for now
            });
            setNewReview('');
        } catch (error) {
            console.error("Error adding review:", error);
            alert("Could not post review.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!spot) return null;

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 3000, // Top layer
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel"
                style={{
                    width: '100%',
                    maxWidth: '800px',
                    height: '90vh', // Nearly full height
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#1e293b' // Solid dark background for readability
                }}
            >
                {/* Header Image */}
                <div style={{ height: '250px', position: 'relative' }}>
                    <img
                        src={spot.image || "https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&q=80&w=800"}
                        alt={spot.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute', top: 16, right: 16,
                            background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white',
                            borderRadius: '50%', width: 40, height: 40, cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                    >
                        <X size={24} />
                    </button>

                    {/* Header Info Overlay */}
                    <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                        padding: '20px'
                    }}>
                        <h1 style={{ margin: 0, fontSize: '2rem' }}>{spot.name}</h1>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px', color: '#fbbf24' }}>
                            <Star fill="currentColor" size={20} />
                            {/* Calculate Average Rating if we had it, or use spot.rating */}
                            <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{spot.rating || 5.0}</span>
                            <span style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: 'normal' }}>({reviews.length} reviews)</span>
                        </div>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>

                    <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                        <button className="btn-primary" style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '8px' }} onClick={onNavigate}>
                            <Navigation size={18} /> Navigate
                        </button>
                        {/* Placeholder for "Add Photo" */}
                        <button className="btn-primary" disabled style={{ flex: 1, background: 'rgba(255,255,255,0.1)', opacity: 0.5 }}>
                            Add Photo (Coming Soon)
                        </button>
                    </div>

                    {/* Description */}
                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '12px' }}>About</h3>
                        <p style={{ lineHeight: '1.6', color: '#e2e8f0', fontSize: '1.05rem' }}>
                            {spot.description || "No description provided."}
                        </p>
                    </div>

                    {/* Amenities */}
                    {spot.amenities && Object.keys(spot.amenities).length > 0 && (
                        <div style={{ marginBottom: '24px' }}>
                            <h3 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '12px' }}>Amenities</h3>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                {spot.amenities.wifi && <AmenityBadge icon={Wifi} label="WiFi" />}
                                {spot.amenities.cell_signal && <AmenityBadge icon={Signal} label="Cell Signal" />}
                                {spot.amenities.toilet && <AmenityBadge icon={Bath} label="Toilet" />}
                                {spot.amenities.water && <AmenityBadge icon={Droplets} label="Water" />}
                            </div>
                        </div>
                    )}

                    {/* Reviews Section */}
                    <div>
                        <h3 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px' }}>Reviews</h3>

                        {/* Write Review */}
                        <form onSubmit={handleSubmitReview} style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', marginBottom: '24px' }}>
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                                {[1, 2, 3, 4, 5].map(star => (
                                    <Star
                                        key={star}
                                        size={24}
                                        fill={star <= rating ? "#fbbf24" : "none"}
                                        color={star <= rating ? "#fbbf24" : "#64748b"}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setRating(star)}
                                    />
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <input
                                    type="text"
                                    placeholder="Write a review..."
                                    value={newReview}
                                    onChange={(e) => setNewReview(e.target.value)}
                                    style={{ flex: 1, background: 'rgba(0,0,0,0.2)', border: '1px solid #334155', padding: '12px', borderRadius: '8px', color: 'white' }}
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{ background: 'var(--color-accent)', border: 'none', borderRadius: '8px', padding: '0 16px', cursor: 'pointer', color: 'white' }}
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </form>

                        {/* Reviews List */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {reviews.length === 0 ? (
                                <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>No reviews yet. Be the first!</p>
                            ) : (
                                reviews.map(review => (
                                    <div key={review.id} style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                            <span style={{ fontWeight: 'bold', color: '#e2e8f0' }}>{review.userName}</span>
                                            <div style={{ display: 'flex', gap: '2px' }}>
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={14} fill={i < review.rating ? "#fbbf24" : "none"} color={i < review.rating ? "#fbbf24" : "#475569"} />
                                                ))}
                                            </div>
                                        </div>
                                        <p style={{ margin: 0, color: '#cbd5e1', lineHeight: '1.5' }}>{review.text}</p>
                                        <small style={{ color: '#64748b', display: 'block', marginTop: '8px' }}>
                                            {new Date(review.createdAt).toLocaleDateString()}
                                        </small>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

const AmenityBadge = ({ icon: Icon, label }) => (
    <div style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8',
        padding: '6px 12px', borderRadius: '20px', fontSize: '0.9rem'
    }}>
        <Icon size={16} /> <span>{label}</span>
    </div>
);

export default SpotDetails;
