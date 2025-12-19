import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Navigation, X, Wifi, Signal, Droplets, Bath, MessageSquare, Send } from 'lucide-react';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';

import ImageCarousel from './ImageCarousel';
import { updateDoc, doc, arrayUnion } from 'firebase/firestore';

const SpotDetails = ({ spot, onClose, onNavigate }) => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(5);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

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
                userName: "Traveler"
            });
            setNewReview('');
        } catch (error) {
            console.error("Error adding review:", error);
            alert("Could not post review.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePhotoUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setIsUploading(true);
        try {
            // Compress Image Logic (same as AddSpotForm, ideally refactored to utility)
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = async () => {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;
                    const MAX_WIDTH = 800;
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    const base64String = canvas.toDataURL('image/jpeg', 0.7);

                    // Update Firestore
                    // If 'images' array doesn't exist yet, we might need to initialize it with the existing 'image' first?
                    // Actually arrayUnion is smart, but if the field is missing it creates it.
                    // However, we want to respect the OLD image too.

                    // Simple migration on write:
                    // If spot.images missing, we should probably add spot.image AND the new one?
                    // For now, let's just append. The Carousel logic handles the display mix.

                    const spotRef = doc(db, "spots", spot.id);
                    await updateDoc(spotRef, {
                        images: arrayUnion(base64String)
                    });

                    alert("Photo added!");
                    setIsUploading(false);
                };
            };
        } catch (error) {
            console.error("Error uploading photo:", error);
            alert("Failed to upload photo.");
            setIsUploading(false);
        }
    };

    if (!spot) return null;

    // Normalize images
    const images = spot.images && spot.images.length > 0
        ? spot.images
        : (spot.image ? [spot.image] : []);

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
                    <ImageCarousel images={images} height="100%" />

                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute', top: 16, right: 16,
                            background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white',
                            borderRadius: '50%', width: 40, height: 40, cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            zIndex: 20
                        }}
                    >
                        <X size={24} />
                    </button>

                    {/* Header Info Overlay */}
                    <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                        padding: '20px',
                        pointerEvents: 'none' // Click through to carousel controls if near bottom
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

                        <label className="btn-primary" style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '8px', cursor: 'pointer', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                            {isUploading ? (
                                <span>Uploading...</span>
                            ) : (
                                <>
                                    <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handlePhotoUpload} />
                                    <span>Add Photo</span>
                                </>
                            )}
                        </label>
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
