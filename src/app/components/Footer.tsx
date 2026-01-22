import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  lang: 'EN' | 'ES';
}

export function Footer({ lang }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="max-w-xs">
            <h3 className="text-2xl font-bold tracking-tight mb-6">
              Ruiz Unger <span className="text-[#0056D2]">Medical Center</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {lang === 'EN' 
                ? 'Dedicated to providing the highest standard of medical care and immigration services in Florida.'
                : 'Dedicado a brindar el más alto nivel de atención médica y servicios de inmigración en Florida.'}
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#0056D2] transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h4 className="font-bold text-lg mb-6">{lang === 'EN' ? 'Company' : 'Empresa'}</h4>
              <ul className="space-y-4 text-gray-400">
                {['About', 'Services', 'Location', 'Contact'].map(item => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {lang === 'EN' ? item : (item === 'Services' ? 'Servicios' : item === 'About' ? 'Nosotros' : 'Contacto')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">{lang === 'EN' ? 'Legal' : 'Legal'}</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{lang === 'EN' ? 'Privacy' : 'Privacidad'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{lang === 'EN' ? 'Terms' : 'Términos'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HIPAA</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>&copy; 2026 Ruiz Unger Medical Center</p>
          <p>Designed with excellence in Miami</p>
        </div>
      </div>
    </footer>
  );
}
