import React from 'react';
import { 
  FileText, Syringe, Microscope, Stethoscope, 
  Car, Activity, FileBadge, 
  FlaskConical, Scale, Heart, 
  CheckCircle2, ArrowRight 
} from 'lucide-react';

interface ServicesProps {
  lang: 'EN' | 'ES';
}

export function Services({ lang }: ServicesProps) {
  const pillars = [
    {
      id: 'immigration',
      title: lang === 'EN' ? "Immigration Process" : "Inmigración",
      description: lang === 'EN' ? "USCIS Certified Civil Surgeons" : "Cirujanos Civiles Certificados USCIS",
      color: "blue",
      bg: "bg-blue-50",
      border: "border-blue-100",
      text: "text-blue-700",
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      items: [
        { 
          name: lang === 'EN' ? "I-693 Medical Exam" : "Examen Médico I-693", 
          detail: lang === 'EN' ? "Complete physical & mental assessment" : "Evaluación física y mental completa" 
        },
        { 
          name: lang === 'EN' ? "Vaccination" : "Vacunación", 
          detail: lang === 'EN' ? "Records validation & on-site shots" : "Validación y vacunas en el sitio" 
        },
        { 
          name: lang === 'EN' ? "Laboratory" : "Laboratorio", 
          detail: lang === 'EN' ? "Blood work & communicable disease testing" : "Análisis de sangre y pruebas" 
        },
        { 
          name: lang === 'EN' ? "Form Preparation" : "Preparación de Formas", 
          detail: lang === 'EN' ? "Sealed envelope ready for interview" : "Sobre sellado listo para entrevista" 
        }
      ]
    },
    {
      id: 'recovery',
      title: lang === 'EN' ? "Accident Recovery" : "Recuperación",
      description: lang === 'EN' ? "Complete Post-Accident Care" : "Cuidado Completo Post-Accidente",
      color: "rose",
      bg: "bg-rose-50",
      border: "border-rose-100",
      text: "text-rose-700",
      icon: <Car className="w-8 h-8 text-rose-600" />,
      items: [
        { 
          name: lang === 'EN' ? "Physiotherapy" : "Fisioterapia", 
          detail: lang === 'EN' ? "Pain management & mobility" : "Manejo del dolor y movilidad" 
        },
        { 
          name: lang === 'EN' ? "Clinical Documentation" : "Documentación Clínica", 
          detail: lang === 'EN' ? "Detailed reports for legal claims" : "Reportes detallados para casos legales" 
        },
        { 
          name: lang === 'EN' ? "Specialized Care" : "Atención Especializada", 
          detail: lang === 'EN' ? "Treatment for auto accident injuries" : "Tratamiento lesiones de auto" 
        }
      ]
    },
    {
      id: 'wellness',
      title: lang === 'EN' ? "Wellness & Vitality" : "Bienestar",
      description: lang === 'EN' ? "Holistic Health Solutions" : "Soluciones de Salud Holística",
      color: "teal",
      bg: "bg-teal-50",
      border: "border-teal-100",
      text: "text-teal-700",
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      items: [
        { 
          name: lang === 'EN' ? "IV Vitamin Therapy" : "Terapia Vitaminas IV", 
          detail: lang === 'EN' ? "Immunity, energy & hydration cocktails" : "Cócteles de inmunidad y energía" 
        },
        { 
          name: lang === 'EN' ? "Medical Weight Loss" : "Pérdida de Peso", 
          detail: lang === 'EN' ? "Supervised plans & FDA options" : "Planes supervisados y opciones FDA" 
        },
        { 
          name: lang === 'EN' ? "Preventive Care" : "Cuidado Preventivo", 
          detail: lang === 'EN' ? "Routine check-ups & guidance" : "Chequeos de rutina y guía" 
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {lang === 'EN' ? 'Medical Services' : 'Servicios Médicos'}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            {lang === 'EN' 
              ? 'Everything you need for your health and legal requirements, clearly organized.' 
              : 'Todo lo que necesita para su salud y requisitos legales, claramente organizado.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id} 
              className={`rounded-3xl p-8 border-2 ${pillar.border} ${pillar.bg} hover:shadow-xl transition-all duration-300 flex flex-col h-full`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white rounded-2xl shadow-sm">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xl leading-tight">{pillar.title}</h3>
                  <p className={`text-sm font-medium ${pillar.text}`}>{pillar.description}</p>
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                {pillar.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/60 p-3 rounded-xl">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pillar.text}`} />
                    <div>
                      <p className="font-bold text-gray-900 text-base">{item.name}</p>
                      <p className="text-gray-500 text-sm leading-snug">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}