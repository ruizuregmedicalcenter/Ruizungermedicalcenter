import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

interface LocationProps {
  lang: 'EN' | 'ES';
}

export function Location({ lang }: LocationProps) {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
          
          {/* Left Side: Real Google Maps Iframe */}
          <div className="lg:w-1/2 relative min-h-[450px] bg-gray-100 group overflow-hidden">
            <iframe 
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=8300%20SW%208th%20St%20%23107%2C%20Miami%2C%20FL%2033144&t=&z=15&ie=UTF8&iwloc=B&output=embed" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={lang === 'EN' ? 'Location Map' : 'Mapa de Ubicación'}
            ></iframe>
          </div>

          {/* Right Side: Contact Info */}
          <div className="lg:w-1/2 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {lang === 'EN' ? 'Find Us' : 'Encuéntranos'}
            </h2>
            <p className="text-gray-500 mb-12 text-lg md:text-xl">
              {lang === 'EN' 
                ? 'Visit our medical center in the heart of Miami.' 
                : 'Visite nuestro centro médico en el corazón de Miami.'}
            </p>

            <div className="space-y-10">
              {/* Address - Prominent & Bold */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#0056D2] shadow-sm">
                  <MapPin size={36} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-500 text-sm uppercase tracking-wider mb-2">
                    {lang === 'EN' ? 'Address' : 'Dirección'}
                  </h3>
                  <p className="text-2xl text-gray-900 leading-tight max-w-sm">
                    8300 SW 8th St #107,
                    <br />
                    Miami, FL 33144
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-emerald-600 shadow-sm">
                  <Clock size={32} strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-500 text-sm uppercase tracking-wider mb-2">
                    {lang === 'EN' ? 'Opening Hours' : 'Horarios'}
                  </h3>
                  <div className="space-y-2 text-gray-700 text-lg">
                    <div className="flex justify-between w-full max-w-xs border-b border-gray-100 pb-1">
                      <span>Mon - Fri</span>
                      <span className="font-bold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between w-full max-w-xs border-b border-gray-100 pb-1">
                      <span>Sat</span>
                      <span className="font-bold">10:00 AM - 2:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-indigo-600 shadow-sm">
                  <Phone size={32} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-500 text-sm uppercase tracking-wider mb-2">
                    {lang === 'EN' ? 'Phone' : 'Teléfono'}
                  </h3>
                  <a href="tel:+17865367728" className="text-2xl font-bold text-[#0056D2] hover:text-blue-700 transition-colors">
                    (786) 536-7728
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
