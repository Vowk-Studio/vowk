import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../config/constants';

function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="relative bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-500/10">
          
          {/* Decoración de fondo tecnológica */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-fuchsia-500 rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10 px-8 py-16 md:py-24 flex flex-col items-center text-center">
            
            {/* Badge de acción */}
            <div className="flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-indigo-500/20">
              <Sparkles className="w-3 h-3" /> Hagamos historia
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none max-w-4xl mb-8">
              ¿LISTO PARA <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200">TRANSFORMAR</span> <br /> TU VISIÓN DIGITAL?
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-12">
              No dejes tu crecimiento para mañana. Empecemos hoy mismo a construir la herramienta que tu negocio necesita.
            </p>

            <div className="flex flex-col items-center gap-6">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Vowk! Estoy listo para potenciar mi negocio. ¿Podemos hablar?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center bg-white text-gray-900 font-black py-5 px-12 rounded-2xl transition-all duration-300 hover:bg-indigo-600 hover:text-white shadow-xl hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-xs"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Iniciar conversación por WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Neuro-indicador de confianza */}
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Respuesta inmediata en horario comercial
              </p>
            </div>

          </div>
        </div>

        {/* Cierre final de página */}
        <div className="mt-16 text-center">
            <p className="text-gray-300 text-[10px] font-black uppercase tracking-[0.5em]">
                Vowk Studio © 2026
            </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;