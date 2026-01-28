import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = ({ images = [], height = '200px', style = {} }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) {
        return (
            <div style={{ height, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
                <span style={{ color: '#888' }}>No Image</span>
            </div>
        );
    }

    if (images.length === 1) {
        return (
            <img
                src={images[0]}
                alt="Spot"
                style={{ width: '100%', height, objectFit: 'cover', ...style }}
            />
        );
    }

    const nextSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index, e) => {
        e.stopPropagation();
        setCurrentIndex(index);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height, overflow: 'hidden', ...style }} className="group">
            <AnimatePresence initial={false} mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                />
            </AnimatePresence>

            {/* Controls */}
            <button
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10
                }}
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10
                }}
            >
                <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '6px',
                zIndex: 10
            }}>
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={(e) => goToSlide(idx, e)}
                        style={{
                            width: idx === currentIndex ? '8px' : '6px',
                            height: idx === currentIndex ? '8px' : '6px',
                            borderRadius: '50%',
                            background: idx === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
