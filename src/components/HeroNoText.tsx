import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../assets/images/comunidad-terapeutica.webp';
import img2 from '../assets/images/nosotros.webp';

const slides = [
    {
        image: img1,
    },
    {
        image: img2,
    }
];

const HeroNoText: React.FC = () => {
    return (
        <section id="hero-no-text" className="relative h-[60vh] min-h-[400px] flex flex-col bg-brand-900 group">
            <Swiper
                modules={[Autoplay, Pagination]}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                loop={true}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative w-full h-full flex items-center justify-center">
                        {/* 🖼️ IMAGEN DE FONDO */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={slide.image}
                                alt="Background"
                                className="w-full h-full object-cover"
                            />

                            {/* ☁️ DETALLES DE LA IMAGEN */}
                            <div className="absolute inset-0 bg-brand-900/30 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-brand-900/40" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroNoText;
