import React, { useState } from 'react';
import { CheckCircle2, Zap, ArrowRight, X, Info, ShieldCheck, LayoutTemplate, Settings2 } from 'lucide-react';
// 1. Cambiamos los imports a la versión Lite
import { m, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import fondoPromo from '../assets/fondopromo.webp';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../config/constants';

const pageData = {
  heroImageUrl: fondoPromo, 
  whatsappNumber: WHATSAPP_NUMBER
};

function Promo() {
  const [activeModal, setActiveModal] = useState(null);

  const servicesDetails = {
    express: {
      title: "LANDING EXPRESS ⚡",
      details: ["Entrega en 72hs con Código Limpio", "Estructura de Conversión Instintiva", "Protección contra ataques de fuerza bruta", "Adaptación móvil fluida (cqw logic)", "Despliegue optimizado en Hostinger"]
    },
    diseno: {
      title: "DISEÑO ELITE UX/UI",
      details: ["Análisis de Estatus de Competencia", "Diseño de interfaces en Figma", "Paleta de colores neuro-estratégica", "Prototipado de alta fidelidad", "Identidad visual de autoridad"]
    },
    landing: {
      title: "SISTEMA DE VENTAS BLINDADO",
      details: ["Estructura AIDA para Cierre", "Velocidad de carga extrema (<1s)", "Auditoría de seguridad básica", "Integración de métricas (Ads/FB)", "Copywriting de supervivencia digital"]
    },
    tienda: {
      title: "TIENDA GLOBAL SEGURA",
      details: ["Catálogo autogestionable seguro", "Cifrado de datos transaccionales", "Gestión de stock en tiempo real", "Pasarelas de pago blindadas", "Panel administrativo con seguridad 2FA"]
    }
  };

  const getWhatsAppLink = (message) => 
  `https://wa.me/${pageData.whatsappNumber}?text=${encodeURIComponent(message || WHATSAPP_MESSAGE)}`;

  return (
    <section className="bg-gray-900 text-white py-12 md:py-18 lg:py-24 relative overflow-hidden">
      
      {/* FONDO */}
      <div className="hidden md:block absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: `url(${pageData.heroImageUrl})` }}></div>
      <div className="md:hidden absolute inset-0 z-0 opacity-30">
          <div className="absolute left-0 top-0 w-1/2 h-full bg-cover bg-left no-repeat" style={{ backgroundImage: `url(${pageData.heroImageUrl})` }}></div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-right no-repeat" style={{ backgroundImage: `url(${pageData.heroImageUrl})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center max-w-6xl">
        
        {/* Usamos m.div en lugar de motion.div */}
        <m.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12">
          <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] mb-4 inline-block animate-pulse">SOLO ESTE MES</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase drop-shadow-2xl">IMPULSA TU <span className="text-indigo-500">NEGOCIO</span> HOY</h2>
        </m.div>

        {/* OFERTA RELÁMPAGO */}
        <m.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="mb-16 group max-w-5xl mx-auto px-2">
          <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-indigo-500 to-indigo-900 rounded-2xl p-[1px] shadow-2xl shadow-indigo-500/30">
            <div className="bg-gray-900 rounded-[15px] px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
              
              <div className="text-left z-10 flex-1">
                <div className="bg-yellow-500 text-black font-black px-3 py-1 rounded-lg text-[10px] animate-pulse uppercase tracking-tighter w-fit mb-3">Oferta Flash</div>
                <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic leading-none mb-4">LANDING <span className="text-indigo-400">EXPRESS</span> ⚡</h3>
                <button 
                  onClick={() => setActiveModal('express')}
                  className="flex items-center gap-2 text-gray-400 hover:text-white text-[10px] uppercase tracking-widest transition-colors"
                >
                  <Info className="w-3 h-3" /> Detalles técnicos de la promo
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 z-10 w-full lg:w-auto">
                <div 
                  role="button"
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      alert("El Constructor solo está disponible para ordenadores.");
                      return;
                    }
                    const url = `${window.location.origin}${window.location.pathname}#/editor`;
                    window.open(url, '_blank');
                  }}
                  className="flex-1 flex flex-col items-center gap-2 bg-gray-800/50 border border-gray-700 p-4 rounded-xl hover:border-indigo-500 transition-all group/card text-center relative z-[9999] pointer-events-auto cursor-pointer"
                >
                  <Settings2 className="w-6 h-6 text-indigo-400 group-hover/card:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Armar a medida</span>
                  <span className="text-sm font-black text-white">CONSTRUCTOR</span>
                  <span className="lg:hidden text-[8px] text-amber-500 mt-1 uppercase font-bold">Sólo PC</span>
                </div>

                <a 
                  href={getWhatsAppLink("Hola! Quiero ver el catálogo de plantillas predeterminadas para la promo Landing Express ⚡")}
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex flex-col items-center gap-2 bg-indigo-600 p-4 rounded-xl hover:bg-indigo-500 transition-all group/card shadow-lg shadow-indigo-900/20 text-center"
                >
                  <LayoutTemplate className="w-6 h-6 text-white group-hover/card:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold tracking-widest text-indigo-200 uppercase">Elegir de catálogo</span>
                  <span className="text-sm font-black text-white">PLANTILLAS</span>
                </a>
              </div>

              <div className="z-10 bg-gray-800/80 px-6 py-4 rounded-2xl border border-gray-700 min-w-[140px]">
                <span className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Descuento</span>
                <span className="text-4xl font-black text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">60% OFF</span>
              </div>

            </div>
          </div>
        </m.div>
        
        {/* GRILLA DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* TARJETA 1 - DISEÑO */}
          <m.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.1 }} className="group bg-white text-gray-900 rounded-[2.5rem] px-8 pt-0 pb-10 shadow-2xl transition-all duration-500 hover:-translate-y-4 border-b-8 border-purple-500 flex flex-col h-full">
            <div className="text-white text-center rounded-t-[2.2rem] mx-[-2rem] py-6 mb-6 bg-purple-700 bg-blend-multiply bg-cover bg-center shadow-lg" style={{ backgroundImage: `url(${pageData.heroImageUrl})` }}>
              <h3 className="text-xl md:text-2xl font-black tracking-tighter uppercase italic">DISEÑO ELITE</h3>
            </div>
            <div className="flex-grow flex flex-col text-left">
              <p className="text-sm font-black text-purple-600 mb-6 uppercase tracking-widest text-center">Arquitectura de Estatus Digital</p>
              <ul className="space-y-4 mb-8 text-gray-600">
                <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Archivos fuente <strong>Figma</strong> editables.</li>
                <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Interfaces diseñadas para decidir en 200ms.</li>
              </ul>
              <button onClick={() => setActiveModal('diseno')} className="mt-auto mb-6 flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-white border-2 border-gray-100 text-purple-600 text-[11px] font-black uppercase tracking-widest hover:border-purple-200 transition-all shadow-sm"><Info className="w-4 h-4" /> Ver Ficha Técnica</button>
              <a href={getWhatsAppLink("Hola! Me interesa el Diseño Elite 🎨")} target="_blank" rel="noopener noreferrer" className="bg-purple-50 py-5 rounded-[1.5rem] hover:bg-purple-600 transition-colors duration-300 block text-center group/promo">
                <span className="text-4xl font-black text-purple-600 group-hover/promo:text-white transition-colors">30% OFF</span>
              </a>
            </div>
          </m.div>

          {/* TARJETA 2 - LANDING */}
          <m.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.2 }} className="group bg-white text-gray-900 rounded-[2.5rem] px-8 pt-0 pb-10 shadow-2xl transition-all duration-500 hover:-translate-y-4 border-b-8 border-indigo-600 relative flex flex-col h-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-6 py-1.5 rounded-full z-20 tracking-widest uppercase shadow-lg">MÁS SOLICITADO</div>
            <div className="text-white text-center rounded-t-[2.2rem] mx-[-2rem] py-6 mb-6 bg-indigo-700 bg-blend-multiply bg-cover bg-center shadow-lg" style={{ backgroundImage: `url(${pageData.heroImageUrl})` }}>
              <h3 className="text-xl md:text-2xl font-black tracking-tighter uppercase italic">MÁQUINA DE VENTAS</h3>
            </div>
            <div className="flex-grow flex flex-col text-left">
              <p className="text-sm font-black text-indigo-600 mb-6 uppercase tracking-widest text-center">Conversión Blindada</p>
              <ul className="space-y-4 mb-8 text-gray-600">
                <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Copywriting para <strong>vender más</strong>.</li>
                <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Estructura inmune a Caídas y Optimizadas.</li>
              </ul>
              <button onClick={() => setActiveModal('landing')} className="mt-auto mb-6 flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-white border-2 border-gray-100 text-indigo-600 text-[11px] font-black uppercase tracking-widest hover:border-indigo-200 transition-all shadow-sm"><Info className="w-4 h-4" /> Ver Ficha Técnica</button>
              <a href={getWhatsAppLink("Hola! Quiero la Máquina de Ventas 🚀")} target="_blank" rel="noopener noreferrer" className="bg-indigo-50 py-5 rounded-[1.5rem] hover:bg-indigo-600 transition-colors duration-300 block text-center group/promo">
                <span className="text-4xl font-black text-indigo-600 group-hover/promo:text-white transition-colors">50% OFF</span>
              </a>
            </div>
          </m.div>

          {/* TARJETA 3 - TIENDA */}
          <m.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.3 }} className="group bg-white text-gray-900 rounded-[2.5rem] px-8 pt-0 pb-10 shadow-2xl transition-all duration-500 hover:-translate-y-4 border-b-8 border-emerald-500 flex flex-col h-full">
            <div className="text-white text-center rounded-t-[2.2rem] mx-[-2rem] py-6 mb-6 bg-emerald-700 bg-blend-multiply bg-cover bg-center shadow-lg" style={{ backgroundImage: `url(${pageData.heroImageUrl})` }}>
              <h3 className="text-xl md:text-2xl font-black tracking-tighter uppercase italic">TIENDA GLOBAL</h3>
            </div>
            <div className="flex-grow flex flex-col text-left">
              <p className="text-sm font-black text-emerald-600 mb-6 uppercase tracking-widest text-center">E-commerce Automatizado</p>
              <ul className="space-y-4 mb-8 text-gray-600">
                <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Cobros con <strong>Mercado Pago</strong>.</li>
                <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Gestión de stock inteligente.</li>
              </ul>
              <button onClick={() => setActiveModal('tienda')} className="mt-auto mb-6 flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-white border-2 border-gray-100 text-emerald-600 text-[11px] font-black uppercase tracking-widest hover:border-emerald-200 transition-all shadow-sm"><Info className="w-4 h-4" /> Ver Ficha Técnica</button>
              <a href={getWhatsAppLink("Hola! Quiero la Tienda Global 💰")} target="_blank" rel="noopener noreferrer" className="bg-emerald-50 py-5 rounded-[1.5rem] hover:bg-emerald-600 transition-colors duration-300 block text-center group/promo">
                <span className="text-4xl font-black text-emerald-600 group-hover/promo:text-white transition-colors">40% OFF</span>
              </a>
            </div>
          </m.div>
        </div>

        {/* CIERRE */}
        <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-20 flex flex-col items-center gap-4">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mb-4 opacity-50"></div>
          <p className="text-gray-200 text-lg font-semibold tracking-wide bg-indigo-500/20 backdrop-blur-md rounded-full px-3 py-1 w-fit mx-auto">
            No dejes la seguridad de tu negocio al azar. Uníte a la élite de marcas que dominan su mercado con <span className="text-white font-bold text-base">Vowk Studio</span>.
          </p>
          <a 
            href={getWhatsAppLink("Hola! Me gustaría recibir atención personalizada para un proyecto con Vowk Studio.")}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold uppercase text-[10px] tracking-[0.2em] transition-all group"
          >
            HABLAR CON UN ESPECIALISTA <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </m.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <m.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white text-gray-900 rounded-[2.5rem] w-full max-w-md p-10 relative shadow-2xl">
              <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"><X className="w-6 h-6" /></button>
              <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4"><ShieldCheck className="w-8 h-8 text-indigo-600" /></div>
                  <h4 className="text-2xl font-black uppercase italic tracking-tighter">{servicesDetails[activeModal].title}</h4>
              </div>
              <ul className="space-y-4 mb-10">
                {servicesDetails[activeModal].details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium text-left">
                    <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center shrink-0"><CheckCircle2 className="w-3 h-3 text-emerald-600" /></div> 
                    {detail}
                  </li>
                ))}
              </ul>
              <button onClick={() => setActiveModal(null)} className="w-full bg-indigo-600 text-white font-black py-4 rounded-2xl hover:bg-gray-900 transition-all uppercase tracking-widest text-xs shadow-lg">Cerrar especificaciones</button>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Promo;