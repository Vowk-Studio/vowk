import React from 'react';
import { Quote, Star, User, CheckCircle, ArrowRight } from 'lucide-react';

const pageData = {
  testimonials: [
    {
      text: "El equipo de Vowk Studio superó nuestras expectativas. El diseño web es moderno y la funcionalidad es impecable. ¡Totalmente recomendados!",
      name: 'Brenda',
      title: 'Manager Management',
      company: 'DigitalBloomkt'
    },
    {
      text: "Nuestra nueva página web captó un 30% más de leads en el primer mes. Un trabajo excelente y muy profesional desde el inicio.",
      name: 'Nicolas',
      title: 'Director de Operaciones',
      company: 'Imponect'
    },
    {
      text: "Necesitábamos una solución a medida para nuestra empresa y el equipo la desarrolló de forma rápida y eficiente. Son verdaderos expertos.",
      name: 'Pablo',
      title: 'Gerente de Operaciones',
      company: 'xsegu'
    },
  ],
};

function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-32 bg-white overflow-hidden relative">
      
      {/* Textura de fondo sutil */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 text-black px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-gray-100">
            <CheckCircle className="w-3 h-3 text-indigo-600" /> Experiencia del Cliente
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 uppercase tracking-tighter">
            RESULTADOS QUE <span className="text-indigo-600">INSPIRAN</span>
          </h2>
          <div className="h-1.5 w-16 bg-gray-900 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-24">
          {pageData.testimonials.map((t, index) => (
            <div key={index} className="relative group flex flex-col h-full">
              <Quote className="absolute -top-10 -left-6 w-20 h-20 text-gray-50 group-hover:text-indigo-50/50 transition-colors duration-700 -z-10" />
              
              <div className="flex-grow">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
                  ))}
                </div>
                <p className="text-black text-lg leading-relaxed font-medium italic mb-10">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-8 mt-auto">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <User className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-black text-black uppercase tracking-tighter text-base leading-tight">{t.name}</h3>
                  <p className="text-[9px] text-black font-bold uppercase tracking-widest mt-1">
                    {t.title} <span className="text-indigo-600 mx-1">•</span> {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- CIERRE SUTIL Y CHICO --- */}
        <div className="mt-20 pt-10 border-t border-gray-50 text-center flex flex-col items-center gap-4">
          <p className="text-gray-500 text-sm font-medium">
            Únete a Vowk para una <span className="text-gray-900 font-bold">atención 100% personalizada.</span>
          </p>
          
          <button className="flex items-center gap-2 text-indigo-600 font-black text-[10px] uppercase tracking-[0.2em] group hover:gap-4 transition-all duration-300">
            Hablemos de tu proyecto <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;