import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Image Grid */}
          <div className="w-full md:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://picsum.photos/400/500?random=1"
                alt="Instalaciones"
                className="w-full h-64 object-cover rounded-sm shadow-md mt-8"
              />
              <img
                src="https://picsum.photos/400/500?random=2"
                alt="Atención"
                className="w-full h-64 object-cover rounded-sm shadow-md"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] border-2 border-brand-100 rounded-sm" />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h4 className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-2">Sobre Nosotros</h4>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">
              Una trayectoria de compromiso y empatía
            </h2>
            <p className="text-brand-600 mb-6 leading-relaxed">
              En <strong>Renacer Nuevo</strong>, entendemos que despedir a un ser querido es uno de los momentos más trascendentales de la vida. Por eso, nos dedicamos a brindar un servicio que combine la eficiencia profesional con la calidez humana que las familias necesitan.
            </p>
            <p className="text-brand-600 mb-8 leading-relaxed">
              Nuestra misión es facilitar cada paso del proceso, encargándonos de todos los detalles operativos y burocráticos para que usted pueda enfocarse en lo más importante: honrar la memoria y estar junto a sus afectos.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-brand-100 pt-8 mb-10">
              <div>
                <span className="block text-4xl font-serif text-brand-800 font-bold mb-1">24hs</span>
                <span className="text-sm text-brand-500 uppercase tracking-wide">Atención Permanente</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-brand-800 font-bold mb-1">+50</span>
                <span className="text-sm text-brand-500 uppercase tracking-wide">Años de Trayectoria</span>
              </div>
            </div>

            <a
              href="https://wa.me/5491124009374?text=Hola%20Renacer%20Nuevo!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-brand-900 text-white font-medium rounded-sm uppercase tracking-widest hover:bg-accent-500 transition-colors shadow-lg"
            >
              Consulta Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;