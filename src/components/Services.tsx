import React from 'react';
import { Laptop, TrendingUp, Eraser, Eye, Palette, MessageSquare } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'ATENCION ONLINE',
    description: 'Técnicas para el refuerzo de las conductas deseables.',
    icon: <Laptop size={32} />
  },
  {
    id: '2',
    title: 'REFUERZO',
    description: 'Técnicas para el refuerzo de las conductas deseables.',
    icon: <TrendingUp size={32} />
  },
  {
    id: '3',
    title: 'ELIMINACIÓN',
    description: 'Eliminación y/o sustitución de las conductas y/o hábitos no deseados y desadaptativos',
    icon: <Eraser size={32} />
  },
  {
    id: '4',
    title: 'PERSPECTIVA',
    description: 'Llevar las situaciones a perspectivas',
    icon: <Eye size={32} />
  },
  {
    id: '5',
    title: 'TALLERES Y ACTIVIDADES',
    description: 'Para desarrollar habilidades vocacionales, sociales y de vida independiente.',
    icon: <Palette size={32} />
  },
  {
    id: '6',
    title: 'CHARLAS INDIVIDUAL Y GRUPAL',
    description: 'Para abordar los problemas de fondo y desarrollar habilidades de afrontamiento.',
    icon: <MessageSquare size={32} />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-50">
      <div className="container mx-auto px-4">

        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-900 border-l-4 border-accent-500 pl-4 py-2">
            NUESTROS SERVICIOS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-accent-500 p-8 rounded-lg shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 group border-b-2 border-transparent hover:border-accent-600 flex flex-col items-center text-center h-full justify-center transform hover:scale-105"
            >
              <h3 className="text-xl font-serif font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;