import React from 'react';
import { ArrowRight, Star, Shield, Clock, Phone } from 'lucide-react';
import interiorImage from './Images/MedicalCenterInterior.png';

interface HeroProps {
  lang: 'EN' | 'ES';
}

export function Hero({ lang }: HeroProps) {
  return (
    <div className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-60 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0056D2] text-sm font-semibold mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0056D2]"></span>
              </span>
              {lang === 'EN' ? 'Accepting new patients' : 'Aceptando nuevos pacientes'}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-6">
              {lang === 'EN' ? (
                <>
                  Medical Center <br/>
                  <span className="text-[#0056D2] relative">
                    redefined.
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span>
                </>
              ) : (
                <>
                  Centro Médico <br/>
                  <span className="text-[#0056D2] relative">
                    redefinido.
                     <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span>
                </>
              )}
            </h1>

            <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
              {lang === 'EN'
                ? 'Experience healthcare that truly prioritizes your well-being. We specialize in USCIS-certified immigration medical exams (I-693), comprehensive post-accident rehabilitation, and advanced IV vitamin therapies. Located centrally in Miami, our dedicated bilingual team provides professional, efficient, and compassionate care to ensure your health and legal documentation needs are met with excellence.'
                : 'Experimente una atención médica que realmente prioriza su bienestar. Nos especializamos en exámenes médicos de inmigración certificados por USCIS (I-693), rehabilitación integral post-accidentes y terapias avanzadas de vitaminas IV. Ubicado centralmente en Miami, nuestro dedicado equipo bilingüe brinda atención profesional, eficiente y compasiva para garantizar que sus necesidades de salud y documentación legal se cumplan con excelencia.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+17865367728" className="bg-[#0056D2] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                <Phone size={20} />
                {lang === 'EN' ? 'Call Us' : 'Llámenos'}
              </a>
              <a href="#services" className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center">
                {lang === 'EN' ? 'View Services' : 'Ver Servicios'}
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-500">
               <div className="flex items-center gap-2">
                 <div className="p-1.5 bg-green-100 rounded-full text-green-700"><Shield size={16} /></div>
                 <span>USCIS Certified</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="p-1.5 bg-orange-100 rounded-full text-orange-700"><Star size={16} /></div>
                 <span>5-Star Care</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="p-1.5 bg-purple-100 rounded-full text-purple-700"><Clock size={16} /></div>
                 <span>Mon-Fri Open</span>
               </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100">
              <img 
                    src={interiorImage}
                    alt="Modern Medical Center Interior" 
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#0056D2] font-bold">
                    Dr.
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Expert Team</p>
                    <p className="text-sm text-gray-500">Board certified professionals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-12 -right-12 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -z-10 -bottom-12 -left-12 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
