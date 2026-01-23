import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const messages = [
  "CONSULTA GRATUITA ONLINE",
  "MAS INFORMACION POR WHATSAPP",
  "CONSULTA SIN COMPROMISO"
];

const TextTicker: React.FC = () => {
  return (
    <div className="bg-white relative z-20 py-10 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 relative">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={600}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          className="w-full"
        >
          {messages.map((msg, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <p className="text-accent-500 text-sm md:text-base font-bold tracking-[0.15em] uppercase text-center w-full select-none">
                <span className="text-accent-500 mr-2">•</span> {msg} <span className="text-accent-500 ml-2">•</span>
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TextTicker;