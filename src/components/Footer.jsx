import React, { useState } from 'react';
import { Instagram, Linkedin, Mail, MapPin, ArrowUpCircle, X } from 'lucide-react';
import { CONTACT_EMAIL, INSTAGRAM_URL, LOCATION_TEXT, LINKEDIN_URL } from '../config/constants';

function Footer() {
  // Estado para controlar qué texto legal mostrar (null, 'privacidad' o 'terminos')
  const [legalType, setLegalType] = useState(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleMailContact = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${CONTACT_EMAIL}`;
  };

  const handleSocialClick = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Contenido de los legales
  const legalContent = {
    privacidad: {
      title: "Política de Privacidad",
      text: "En Vowk Studio, la seguridad de la información es nuestra prioridad. Los datos recolectados mediante nuestros canales oficiales se utilizan estrictamente para la comunicación comercial. No compartimos bases de datos con terceros y utilizamos protocolos de cifrado para garantizar que tu interacción sea privada."
    },
    terminos: {
      title: "Términos y Condiciones",
      text: "El uso de este sitio implica la aceptación de nuestras políticas. Todo diseño y desarrollo entregado está protegido por leyes de propiedad intelectual. Los presupuestos tienen validez de 15 días. Nos comprometemos a la excelencia técnica y al mantenimiento de los estándares de seguridad acordados."
    }
  };

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-white/5 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Columna 1: Marca */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tighter uppercase italic">
              Vowk<span className="text-indigo-600">.</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Elevamos el estándar digital de negocios ambiciosos mediante diseño estratégico y desarrollo de alta precisión.
            </p>
            <div className="flex gap-4">
              <button 
              aria-label="Ir a Instagram"
                onClick={(e) => handleSocialClick(e, INSTAGRAM_URL)}
                className="p-3 bg-white/5 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
              aria-label="Ir a Instagram"
                onClick={(e) => handleSocialClick(e, LINKEDIN_URL)}
                className="p-3 bg-white/5 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-500 mb-8">Navegación</h4>
            <ul className="space-y-4">
              {['Servicios', 'Sobre Nosotros', 'Testimonios', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-[1px] bg-indigo-600 group-hover:w-4 transition-all"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto Directo */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-500 mb-8">Contacto</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">Escríbenos</p>
                  <button onClick={handleMailContact} className="text-sm hover:text-indigo-400 transition-colors bg-transparent border-none p-0">
                    {CONTACT_EMAIL}
                  </button>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">Ubicación</p>
                  <p className="text-sm text-gray-400">{LOCATION_TEXT}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 4: Status */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4">Estado del Studio</h4>
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Disponible para proyectos</span>
              </div>
              <p className="text-white text-[10px] leading-tight italic">
                Aceptando desafíos para el segundo trimestre de {new Date().getFullYear()}.
              </p>
            </div>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Vowk Studio <span className="text-white mx-2">|</span> Todos los derechos reservados
          </p>
          
          {/* BOTONES DE LEGALES */}
          <div className="flex gap-6 text-[9px] font-black uppercase tracking-widest text-white">
            <button onClick={() => setLegalType('privacidad')} className="hover:text-white transition-colors">Privacidad</button>
            <button onClick={() => setLegalType('terminos')} className="hover:text-white transition-colors">Términos</button>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-white transition-colors group"
          >
            Volver arriba <ArrowUpCircle className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* --- MODAL DE LEGALES (DENTRO DEL FOOTER) --- */}
      {legalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-lg p-8 rounded-[2rem] relative shadow-2xl">
            <button 
              onClick={() => setLegalType(null)} 
              className="absolute top-6 right-6 text-gray-500 hover:text-white"
            >
              <X size={20} />
            </button>
            <p className="text-[10px] font-bold tracking-[0.5em] text-indigo-500 uppercase mb-2">Legal // {legalType}</p>
            <h3 className="text-xl font-black uppercase italic italic mb-4 tracking-tighter">
              {legalContent[legalType].title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
              {legalContent[legalType].text}
            </p>
            <button 
              onClick={() => setLegalType(null)}
              className="w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-indigo-600 hover:text-white transition-all"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;