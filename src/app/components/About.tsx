import React, { JSX as ReactJSX } from 'react';
import { Award, Users, Stethoscope, CheckCircle2 } from 'lucide-react';
import doctorImage from './Images/Dr_Image.png';

interface AboutProps {
  lang: 'EN' | 'ES';
}

export function About({ lang }: AboutProps) {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Image */}
          <div className="flex-1 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                    src={doctorImage} 
                    alt="Doctor"
                    className="w-full h-auto object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-bold text-xl">Dr. Ruiz Unger</p>
                <p className="opacity-90">{lang === 'EN' ? 'Medical Director' : 'Director Médico'}</p>
              </div>
            </div>
            
            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-[#0056D2]">
                  <Award size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">20+ Years</p>
                  <p className="text-xs text-gray-500">{lang === 'EN' ? 'Experience' : 'Experiencia'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0056D2] text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0056D2]"></span>
              {lang === 'EN' ? 'About Our Center' : 'Sobre Nuestro Centro'}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              {lang === 'EN' 
                ? 'Dedicated to Excellence in Healthcare' 
                : 'Dedicados a la Excelencia en Salud'}
            </h2>
            
            <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed">
              {lang === 'EN'
                ? 'At Ruiz Unger Medical Center, we combine professional medical expertise with genuine compassion. We are proud to be a trusted resource for the immigration community in Miami, providing USCIS certified exams alongside comprehensive primary care and accident rehabilitation services.'
                : 'En Ruiz Unger Medical Center, combinamos experiencia médica profesional con compasión genuina. Estamos orgullosos de ser un recurso confiable para la comunidad inmigrante en Miami, brindando exámenes certificados por USCIS junto con atención primaria integral y servicios de rehabilitación de accidentes.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { 
                  icon: Users, 
                  title: lang === 'EN' ? "Bilingual Team" : "Equipo Bilingüe",
                  desc: lang === 'EN' ? "English & Spanish fluent staff" : "Personal fluido en Inglés y Español"
                },
                { 
                  icon: CheckCircle2, 
                  title: lang === 'EN' ? "USCIS Certified" : "Certificado USCIS",
                  desc: lang === 'EN' ? "Official Civil Surgeons" : "Cirujanos Civiles Oficiales"
                },
                { 
                  icon: Stethoscope, 
                  title: lang === 'EN' ? "Modern Facility" : "Instalaciones Modernas",
                  desc: lang === 'EN' ? "Latest medical technology" : "Última tecnología médica"
                },
                { 
                  icon: Award, 
                  title: lang === 'EN' ? "Patient First" : "Paciente Primero",
                  desc: lang === 'EN' ? "Personalized care plans" : "Planes de cuidado personalizado"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 text-[#0056D2]">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="text-[#0056D2] font-semibold flex items-center gap-2 hover:gap-3 transition-all group">
              {lang === 'EN' ? 'Learn more about us' : 'Aprenda más sobre nosotros'}
              <span className="bg-blue-50 p-1 rounded-full group-hover:bg-[#0056D2] group-hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
