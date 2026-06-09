import React from 'react';
import Button from './Button';
import { MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <Button className="mb-5" href="https://wa.me/5491124009374?text=Hola%20Renacer%20Nuevo!" icon={<MessageCircle className="w-5 h-5" />}>
            Consulta Online
          </Button>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-1 uppercase tracking-wide">
            Contactanos
          </h2>
          <p className="text-xl md:text-2xl text-accent-500 font-bold tracking-[0.2em] uppercase">
            Atención las 24hs
          </p>
          <a
            href="tel:+5491124009374"
            className="text-xl md:text-2xl font-light text-brand-700 hover:text-accent-500 transition-colors"
          >
            +5491124009374
          </a>
          <div className="mt-8 space-y-2">
            <p className="text-lg md:text-xl text-brand-600">
              Buenos Aires, Pilar Zona Norte
            </p>
            <a
              href="mailto:centrofortisbsas@gmail.com"
              className="block text-lg md:text-xl text-brand-600 hover:text-accent-500 transition-colors"
            >
              centrofortisbsas@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;