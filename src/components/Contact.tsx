import React from 'react';
import Button from './Button';
import { MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <Button className="mb-5" href="#contact" icon={<MessageCircle className="w-5 h-5" />}>
            Consulta Online
          </Button>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-1 uppercase tracking-wide">
            Contactanos
          </h2>
          <p className="text-xl md:text-2xl text-accent-500 font-bold tracking-[0.2em] uppercase">
            Atención las 24hs
          </p>
          <a
            href="tel:01141234567"
            className="text-xl md:text-2xl font-light text-brand-700 hover:text-accent-500 transition-colors"
          >
            (011) 4123-4567
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;