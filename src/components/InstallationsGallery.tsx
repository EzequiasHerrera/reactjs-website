import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

import img03 from '../assets/images/03.webp';
import img04 from '../assets/images/04.jpg';
import img05 from '../assets/images/05.jpg';
import img06 from '../assets/images/06.jpg';
import img07 from '../assets/images/07.jpg';
import img08 from '../assets/images/08.webp';
import img09 from '../assets/images/09.webp';
import img10 from '../assets/images/10.jpg';

const images = [
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10
];

const InstallationsGallery: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-left mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-900 border-l-4 border-accent-500 pl-4 py-2">
                        NUESTRAS INSTALACIONES
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative group aspect-[4/3] overflow-hidden cursor-pointer"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={src}
                                alt={`Instalación ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Carousel */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white hover:text-accent-500 transition-colors z-50"
                    >
                        <X size={40} />
                    </button>

                    <div
                        className="relative w-full max-w-5xl aspect-video flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                    >
                        <button
                            onClick={prevImage}
                            className="absolute left-2 md:-left-12 text-white hover:text-accent-500 transition-colors p-2"
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <img
                            src={images[currentIndex]}
                            alt={`Instalación ${currentIndex + 1}`}
                            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
                        />

                        <button
                            onClick={nextImage}
                            className="absolute right-2 md:-right-12 text-white hover:text-accent-500 transition-colors p-2"
                        >
                            <ChevronRight size={48} />
                        </button>
                    </div>

                    {/* Thumbnails indicator */}
                    <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2 overflow-x-auto px-4">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                                className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-accent-500 scale-125' : 'bg-white/50 hover:bg-white'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default InstallationsGallery;
