import React, { useState } from 'react';
import { Wifi, Signal, Droplets, Bath } from 'lucide-react';

const AddSpotForm = ({ location, onClose, onSubmit }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        images: [], // Changed from single image to array
        amenities: {}
    });

    // Helper: Resize and Convert to Base64 (Same logic, reusable)
    const processImage = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const MAX_WIDTH = 800;
                    const scale = MAX_WIDTH / img.width;

                    if (scale < 1) {
                        canvas.width = MAX_WIDTH;
                        canvas.height = img.height * scale;
                    } else {
                        canvas.width = img.width;
                        canvas.height = img.height;
                    }

                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    resolve(canvas.toDataURL('image/jpeg', 0.7));
                };
                img.onerror = reject;
                img.src = event.target.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        setIsProcessing(true);
        try {
            const processedImages = await Promise.all(files.map(file => processImage(file)));
            setFormData(prev => ({
                ...prev,
                images: [...prev.images, ...processedImages]
            }));
        } catch (error) {
            console.error("Error processing images", error);
            alert("Could not process some images.");
        } finally {
            setIsProcessing(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            ...formData,
            location
        });
        onClose();
    };

    return (
        <div className="glass-panel" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2000,
            padding: '24px',
            width: '90%',
            maxWidth: '400px',
            color: 'white',
            maxHeight: '90vh',
            overflowY: 'auto'
        }}>
            <h2 style={{ marginTop: 0 }}>Add a New Spot</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '8px' }}>Name</label>
                    <input
                        type="text"
                        required
                        className="glass-panel"
                        style={{ width: '100%', padding: '8px', color: 'white' }}
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '8px' }}>Description</label>
                    <textarea
                        required
                        className="glass-panel"
                        style={{ width: '100%', padding: '8px', color: 'white', minHeight: '80px', fontFamily: 'inherit' }}
                        value={formData.description}
                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Tell us about this spot..."
                    />
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '8px' }}>Amenities</label>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {['wifi', 'toilet', 'water', 'cell_signal'].map(amenity => (
                            <button
                                key={amenity}
                                type="button"
                                onClick={() => setFormData(prev => ({
                                    ...prev,
                                    amenities: { ...prev.amenities, [amenity]: !prev.amenities?.[amenity] }
                                }))}
                                className={`glass-panel ${formData.amenities?.[amenity] ? 'active' : ''}`}
                                style={{
                                    padding: '8px 12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    cursor: 'pointer',
                                    background: formData.amenities?.[amenity] ? 'rgba(74, 222, 128, 0.2)' : 'rgba(255,255,255,0.05)',
                                    border: formData.amenities?.[amenity] ? '1px solid var(--color-accent)' : '1px solid transparent'
                                }}
                            >
                                {amenity === 'wifi' && <Wifi size={16} />}
                                {amenity === 'toilet' && <Bath size={16} />}
                                {amenity === 'water' && <Droplets size={16} />}
                                {amenity === 'cell_signal' && <Signal size={16} />}
                                <span style={{ textTransform: 'capitalize', fontSize: '0.85rem' }}>{amenity.replace('_', ' ')}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '8px' }}>Photos</label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple // Allow multiple files
                        className="glass-panel"
                        style={{ width: '100%', padding: '8px', color: 'white' }}
                        onChange={handleFileChange}
                    />
                    {isProcessing && <small style={{ color: '#ccc', display: 'block', marginTop: '4px' }}>Processing images...</small>}

                    {/* Preview Images */}
                    {formData.images.length > 0 && (
                        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginTop: '8px', paddingBottom: '4px' }}>
                            {formData.images.map((img, idx) => (
                                <img key={idx} src={img} alt={`Preview ${idx}`} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                            ))}
                        </div>
                    )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <button type="button" onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>Cancel</button>
                    <button type="submit" className="btn-primary" disabled={isProcessing}>
                        {isProcessing ? 'Processing...' : 'Add Spot'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddSpotForm;
