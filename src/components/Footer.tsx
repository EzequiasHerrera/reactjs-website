import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'rgba(243,243,243,1)' }} className="text-brand-900 pt-16 pb-8 border-t border-brand-100">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12 text-center md:text-left">

          {/* Menu */}
          <div>
            <h5 className="font-serif font-bold text-lg mb-4 text-brand-900 uppercase tracking-wider">Menú</h5>
            <ul className="space-y-3 text-base text-gray-600 font-medium">
              <li><a href="/" className="hover:text-accent-600 transition-colors">Inicio</a></li>
              <li><a href="/nosotros" className="hover:text-accent-600 transition-colors">Nosotros</a></li>
              <li><a href="/instalaciones" className="hover:text-accent-600 transition-colors">Instalaciones</a></li>
              <li><a href="/contacto" className="hover:text-accent-600 transition-colors">Contactanos</a></li>
            </ul>
          </div>

          {/* Donde Estamos */}
          <div>
            <h5 className="font-serif font-bold text-lg mb-6 text-brand-900 uppercase tracking-wider">Dónde Estamos</h5>
            <p className="text-gray-600 text-base font-medium">
              Buenos Aires, Pilar Zona Norte
            </p>
            <p className="text-gray-600 text-base font-medium mt-2">
              <a href="mailto:centrofortisbsas@gmail.com" className="hover:text-accent-600 transition-colors">
                centrofortisbsas@gmail.com
              </a>
            </p>
          </div>

          {/* About / Contact */}
          <div>
            <p className="text-gray-600 text-base leading-relaxed mb-6 font-medium">
              Nuestro enfoque colaborativo fomenta un ambiente de confianza y motivación, permitiéndote desarrollarte plenamente en un camino hacia el bienestar y la autorrealización.
            </p>
            <a
              href="https://wa.me/5491124009374?text=Hola%20Renacer%20Nuevo!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-accent-600 font-bold hover:text-accent-700 transition-colors"
            >
              Contáctanos de forma gratuita por WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-brand-200 pt-8 text-center text-sm text-gray-500">
          <p>&copy; Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;