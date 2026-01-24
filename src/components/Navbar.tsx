import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Instalaciones', href: '/instalaciones' },
    { name: 'Contactanos', href: '/contacto' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-5'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo - Text Only */}
          <Link to="/" className="flex items-center group">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-brand-900 tracking-tight leading-none group-hover:text-accent-500 transition-colors">RENACER</span>
              <span className="text-xs uppercase tracking-[0.3em] text-accent-500 font-bold ml-0.5">Nuevo</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors uppercase tracking-wide ${location.pathname === link.href ? 'text-accent-500' : 'text-brand-700 hover:text-accent-500'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-800 hover:text-accent-500 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 border-b border-gray-50 hover:text-accent-500 ${location.pathname === link.href ? 'text-accent-600 font-bold' : 'text-brand-800 font-medium'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col space-y-3 text-sm text-gray-500">
            <div className="flex items-center"><Phone size={16} className="mr-2" /> +5491124009374</div>
            <div className="flex items-center"><MapPin size={16} className="mr-2" /> Buenos Aires, Pilar Zona Norte</div>
            <div className="flex items-center"><Mail size={16} className="mr-2" /> centrorenacerbsas@gmail.com</div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;