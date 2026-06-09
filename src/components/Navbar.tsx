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
    // Navbar.tsx
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950 shadow-md py-3' : 'bg-gray-950/90 py-5'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo ajustado para fondo oscuro */}
          <Link to="/" className="flex items-center">
            <img
              src='src/assets/images/smalllogo.png'
              alt="Logo"
              className="h-12 w-auto" // Filtro para hacer el logo blanco
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors uppercase tracking-wide 
      ${location.pathname === link.href ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-accent-400 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-xl border-t border-gray-800 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 border-b border-gray-800 hover:text-yellow-400 
      ${location.pathname === link.href ? 'text-yellow-400 font-bold' : 'text-gray-200 font-medium'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;