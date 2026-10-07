import React from 'react';
// 1. Cambiamos 'motion' por 'm' (Lite)
import { m } from 'framer-motion';
import { Shield, Zap, Activity, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { WS_PRE, WS_NUM } from '../config/constants';

const VowkCyberDefense = () => {

  const handleSecureContact = (type) => {
    const messages = {
      analisis: "Hola Vowk! Me interesa el Análisis de Riesgo para mi sitio web.",
      activar: "Hola! Quiero activar el blindaje de Ciberdefensa en mi empresa.",
      reporte: "Hola! Me gustaría ver un ejemplo de los reportes de seguridad que emiten."
    };
    
    const text = encodeURIComponent(messages[type] || "Hola Vowk! Quiero información sobre Ciberdefensa.");
    const link = `https://wa.me/${WS_PRE}${WS_NUM}?text=${text}`;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="ciberdefensa" className="bg-[#0a0a0a] text-white py-20 md:py-32 relative overflow-hidden font-sans">
      
      {/* FONDO TÉCNICO NEÓN */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 20 L40 40 L60 10 L100 30" stroke="#00f2ff" strokeWidth="0.1" fill="none" />
          <path d="M0 80 L30 60 L70 90 L100 70" stroke="#ff00ff" strokeWidth="0.1" fill="none" />
        </svg>
        <div className="absolute top-[38%] left-[39%] w-3 h-3 bg-[#00f2ff] rounded-full shadow-[0_0_15px_#00f2ff]"></div>
        <div className="absolute top-[88%] left-[69%] w-3 h-3 bg-[#ff00ff] rounded-full shadow-[0_0_15px_#ff00ff]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ENCABEZADO */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <p className="text-[10px] font-bold tracking-[0.5em] text-[#00f2ff] uppercase mb-4 italic">Max-W-4kl // Core Security</p>
          
          <h2 className="font-black tracking-tighter leading-none mb-8 italic uppercase break-words">
            <span className="text-5xl md:text-9xl block">VOWK</span> 
            <span className="text-4xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#8b5cf6] to-[#ff00ff] block">
              CYBERDEFENSA
            </span>
          </h2>
          
          <p className="text-lg md:text-2xl text-white font-light max-w-2xl leading-tight">
            El 90% de los sitios web son vulnerables. Elevamos tu seguridad a <span className="text-white font-bold italic">"Grado Militar"</span> para blindar tu facturación 24/7.
          </p>
        </div>

        {/* GRILLA BENTO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Tarjeta 1 */}
          <div className="bg-[#151515] p-8 rounded-3xl border border-white/5 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/40 rounded-2xl flex items-center justify-center mb-10 text-[#00f2ff]">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-black mb-3 uppercase italic tracking-tighter">Análisis de Riesgo</h3>
              <p className="text-white text-sm leading-relaxed">Descubrimos vulnerabilidades en minutos con escaneo profundo.</p>
            </div>
            <button 
              onClick={() => handleSecureContact('analisis')}
              className="mt-8 self-end px-4 py-2 rounded-full border border-cyan-500/30 text-[10px] font-bold uppercase text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all flex items-center gap-2"
            >
              Analizar Ahora <ArrowRight size={14} />
            </button>
          </div>

          {/* TARJETA CENTRAL: Reemplazamos motion.div por m.div */}
          <m.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-[#00f2ff] via-[#a855f7] to-[#ff00ff] p-10 rounded-[2.5rem] text-white shadow-[0_0_50px_rgba(168,85,247,0.3)] relative overflow-hidden md:-mt-4"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-[0.9] uppercase italic">
                  BLINDA TU <br /> EMPRESA
                </h3>
                <p className="text-white/80 text-sm font-medium mb-10 max-w-[240px]">
                  Protección 360° para tu ecosistema digital. Activa el escudo hoy.
                </p>
              </div>
              
              <button 
                onClick={() => handleSecureContact('activar')}
                className="bg-white text-black py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all flex items-center justify-center gap-3"
              >
                Activar Ahora <ArrowRight size={18} />
              </button>
            </div>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl animate-pulse"></div>
          </m.div>

          {/* Tarjeta 3 */}
          <div className="bg-[#151515] p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-magenta-500/10 border border-[#ff00ff]/40 rounded-2xl flex items-center justify-center mb-10 text-[#ff00ff]">
                <Lock size={28} />
              </div>
              <h3 className="text-xl font-black mb-3 uppercase italic tracking-tighter text-white">Diagnóstico</h3>
              <p className="text-white text-sm leading-relaxed">Reportes en tiempo real de amenazas y ataques bloqueados.</p>
            </div>
            <button 
              onClick={() => handleSecureContact('reporte')}
              className="mt-8 self-end px-4 py-2 rounded-full border border-[#ff00ff]/30 text-[10px] font-bold uppercase text-[#ff00ff] hover:bg-[#ff00ff] hover:text-white transition-all flex items-center gap-2"
            >
              Ver Reporte <ArrowRight size={14} />
            </button>
          </div>

          {/* ... resto del contenido se mantiene igual ... */}
          <div className="bg-[#111] p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-[#00f2ff]"><Zap size={20} /></div>
              <h3 className="font-bold uppercase text-xs tracking-widest">Monitoreo Proactivo</h3>
            </div>
            <p className="text-[11px] text-white italic mb-6 uppercase tracking-tighter">Test de penetración y escaneo</p>
            <div className="h-px w-full bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
          </div>

          <div className="bg-[#111] p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400"><Activity size={20} /></div>
              <h3 className="font-bold uppercase text-xs tracking-widest">Soluciones a Medida</h3>
            </div>
            <p className="text-[11px] text-white italic mb-6 uppercase tracking-tighter">Reportes detallados</p>
            <div className="h-px w-full bg-gradient-to-r from-purple-500/50 to-transparent"></div>
          </div>

          <div className="bg-[#111] p-8 rounded-3xl border border-white/5 flex items-center justify-center text-center group">
            <div className="relative z-10">
              <ShieldCheck size={40} className="mx-auto mb-3 text-[#ff00ff]" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-1">Vowk Seguridad</p>
              <p className="text-[9px] text-white italic">Secure Ecosystem</p>
            </div>
          </div>

        </div>

        <div className="mt-20 flex justify-center gap-8 md:gap-12 text-[10px] font-bold text-white uppercase tracking-widest">
           <span onClick={() => handleSecureContact('info')} className="hover:text-[#00f2ff] cursor-pointer transition-colors">Contact</span>
           <span className="hover:text-[#ff00ff] cursor-pointer transition-colors">Loricus</span>
           <span className="hover:text-white cursor-pointer transition-colors font-mono tracking-tighter">v.1.0_2026</span>
        </div>

      </div>
    </section>
  );
};

export default VowkCyberDefense;