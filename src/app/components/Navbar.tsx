import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: 'EN' | 'ES';
  setLang: (lang: 'EN' | 'ES') => void;
}

export function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsOpen(false); // Close mobile menu on scroll
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0056D2] rounded-lg flex items-center justify-center transform rotate-3">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Ruiz Unger <span className="font-light text-gray-500">Medical Center</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="bg-gray-100/50 p-1 rounded-full border border-gray-200/50 mr-6 backdrop-blur-sm">
              {[
                { id: 'services', en: 'Services', es: 'Servicios' },
                { id: 'about', en: 'About', es: 'Nosotros' },
                { id: 'contact', en: 'Contact', es: 'Contacto' }
              ].map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-5 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-[#0056D2] hover:bg-white transition-all duration-300"
                >
                  {lang === 'EN' ? item.en : item.es}
                </a>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 mr-4 bg-white border border-gray-100 rounded-full p-1 shadow-sm">
              <button
                onClick={() => setLang('EN')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
                  lang === 'EN' 
                    ? 'bg-gray-100 text-gray-900 shadow-sm ring-1 ring-black/5' 
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                }`}
                aria-label="English"
              >
                <img src="https://flagcdn.com/us.svg" alt="USA" className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm" />
                <span className="font-bold text-xs tracking-wide">EN</span>
              </button>
              <button
                onClick={() => setLang('ES')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
                  lang === 'ES' 
                    ? 'bg-gray-100 text-gray-900 shadow-sm ring-1 ring-black/5' 
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                }`}
                aria-label="Spanish"
              >
                <img src="https://flagcdn.com/es.svg" alt="Spain" className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm" />
                <span className="font-bold text-xs tracking-wide">ES</span>
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden gap-4">
            <button
              onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')}
              className="flex items-center justify-center p-2"
            >
              <img 
                src={lang === 'EN' ? "https://flagcdn.com/us.svg" : "https://flagcdn.com/es.svg"} 
                alt={lang}
                className="w-6 h-4 object-cover rounded-[2px] shadow-sm" 
              />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-gray-100 text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 md:hidden shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-3">
             {[
                { id: 'services', en: 'Services', es: 'Servicios' },
                { id: 'about', en: 'About', es: 'Nosotros' },
                { id: 'contact', en: 'Contact', es: 'Contacto' }
              ].map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  className="block px-4 py-3 rounded-xl bg-gray-50 text-gray-900 font-medium"
                >
                  {lang === 'EN' ? item.en : item.es}
                </a>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
}
