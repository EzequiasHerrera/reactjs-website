import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../assets/images/comunidad-terapeutica.webp';
import img2 from '../assets/images/nosotros.webp';

const slides = [
  {
    image: img1,
    subtitle: "",
    title: "Podemos Ayudarte",
    description: "Contactanos hoy mismo y comenza un nuevo camino.",
    buttonPrimary: "Contactar Ahora",
    buttonSecondary: ""
  },
  {
    image: img2,
    subtitle: "Atención Permanente 24hs",
    title: "Operadores Terapeuticos en linea",
    description: "Estan para brindarte toda la informacion...",
    buttonPrimary: "",
    buttonSecondary: ""
  }
];

const Hero: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex flex-col bg-brand-900 group">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        speed={1000}
        onSwiper={setSwiperInstance}
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
              <div className="absolute inset-0 bg-brand-900/50 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-brand-900/90" />
            </div>

            {/* 📝 CONTENIDO */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
              <div className="w-full max-w-4xl mx-auto flex flex-col items-start text-left">
                {//SI TIENE SUBTITULO, LO MUESTRA
                  slide.subtitle && (
                    <span className="block text-accent-500 tracking-[0.2em] uppercase text-xs md:text-sm mb-3 md:mb-4 font-bold animate-fade-in-up">
                      {slide.subtitle}
                    </span>
                  )}

                {//SI TIENE TITULO, LO MUESTRA
                  slide.title && (
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg text-white whitespace-pre-line">
                      {slide.title}
                    </h1>
                  )}

                {//SI TIENE DESCRIPCION, LO MUESTRA
                  slide.description && (
                    <p className="text-base md:text-xl text-left text-gray-200 mb-8 md:mb-10 max-w-2xl font-light leading-relaxed">
                      {slide.description}
                    </p>
                  )}

                <div className="flex flex-col sm:flex-row gap-4 justify-start w-full sm:w-auto">
                  {//SI TIENE BOTON PRIMARIO, LO MUESTRA
                    slide.buttonPrimary && (
                      <Button
                        href="#contact"
                        variant="primary"
                        className="shadow-lg"
                      >
                        {slide.buttonPrimary}
                      </Button>
                    )
                  }
                  {//SI TIENE BOTON SECUNDARIO, LO MUESTRA
                    slide.buttonSecondary && (
                      <Button
                        href="#services"
                        variant="outline"
                        className="border-white/40 text-white hover:bg-white hover:text-brand-900 backdrop-blur-sm"
                      >
                        {slide.buttonSecondary}
                      </Button>
                    )
                  }
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div
          onClick={() => swiperInstance?.slidePrev()}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white cursor-pointer transition-colors p-2 hidden md:block"
        >
          <ChevronLeft size={48} />
        </div>
        <div
          onClick={() => swiperInstance?.slideNext()}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white cursor-pointer transition-colors p-2 hidden md:block"
        >
          <ChevronRight size={48} />
        </div>

      </Swiper>

      {/* Scroll Indicator - Positioned absolutely over the swiper */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70 z-20 text-white pointer-events-none">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;