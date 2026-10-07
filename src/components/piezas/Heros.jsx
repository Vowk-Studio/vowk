import React from 'react';
import { scrollToSection } from './utils/layout';
import { getValidLink } from './utils/links';

/**
 * Manejador de clics: Si es un ID interno (scroll), si es URL (navega).
 * No afecta el tamaño ni el estilo.
 */
const handleAction = (e, link) => {
  if (!link) {
    e.preventDefault();
    return;
  }
  if (!link.startsWith('http') && !link.startsWith('mailto:') && !link.startsWith('tel:')) {
    e.preventDefault();
    scrollToSection(link);
  }
};

// --- HERO V1: BENTO GRID STYLE ---
export const HeroV1 = (props) => {
  const link1 = getValidLink(props.btnLink, props.btn1Whatsapp);
  const link2 = getValidLink(props.btn2Link, props.btn2Whatsapp);

  return (
    <section className={`w-full relative overflow-hidden p-[3cqw] ${props.fontFamily}`} style={{ backgroundColor: props.bgColor, height: '45cqw', minHeight: '500px' }}>
      <div className="max-w-[1400px] mx-auto h-full grid grid-cols-12 grid-rows-2 gap-[1.5cqw]">
        
        {/* CAJA PRINCIPAL */}
        <div className="col-span-8 row-span-2 relative rounded-[3cqw] overflow-hidden p-[4cqw] flex flex-col justify-center border border-black/5 shadow-xl transition-all">
          {props.mainBoxImg && <img src={props.mainBoxImg} className="absolute inset-0 w-full h-full object-cover z-0" alt="" />}
          <div className="absolute inset-0 z-10" style={{ backgroundColor: props.mainBoxBg, opacity: props.mainBoxImg ? 0.7 : 1 }}></div>
          
          <div className="relative z-20">
            <h1 
              className={`${props.isBold ? 'font-black' : 'font-normal'} ${props.isItalic ? 'italic' : ''} ${props.isUnderline ? 'underline' : ''} leading-[0.9] tracking-tighter uppercase mb-[3cqw]`} 
              style={{ fontSize: `${props.fontSize || 7}cqw`, color: props.titleColor }}
            >
              {props.title}
            </h1>
            <div className="flex gap-[1.5cqw]">
              {link1 ? (
                <a href={link1} target="_blank" rel="noreferrer" onClick={(e) => handleAction(e, link1)} className="px-[3cqw] py-[1cqw] rounded-full font-black shadow-lg text-[1.2cqw] uppercase" style={{ backgroundColor: props.btnBg, color: props.btnTextColor }}>
                  {props.btnText}
                </a>
              ) : (
                <span className="px-[3cqw] py-[1cqw] rounded-full font-black shadow-lg text-[1.2cqw] uppercase opacity-50 cursor-default" style={{ backgroundColor: props.btnBg, color: props.btnTextColor }}>
                  {props.btnText}
                </span>
              )}

              {link2 ? (
                <a href={link2} target="_blank" rel="noreferrer" onClick={(e) => handleAction(e, link2)} className="px-[3cqw] py-[1cqw] rounded-full font-black border-2 text-[1.2cqw] uppercase" style={{ borderColor: props.btnBg, color: props.btnBg }}>
                  {props.btn2Text || 'LEARN MORE'}
                </a>
              ) : (
                <span className="px-[3cqw] py-[1cqw] rounded-full font-black border-2 text-[1.2cqw] uppercase opacity-50 cursor-default" style={{ borderColor: props.btnBg, color: props.btnBg }}>
                  {props.btn2Text || 'LEARN MORE'}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* CAJA TERCIARIA */}
        <a href={props.imageLink || "#"} onClick={(e) => handleAction(e, props.imageLink)} target="_blank" className="col-span-4 row-span-1 rounded-[3cqw] bg-gray-100 overflow-hidden relative group cursor-pointer">
          <img src={props.tertiaryImg || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Hero" />
        </a>

        {/* CAJA SECUNDARIA */}
        <a href={props.secondaryLink || "#"} onClick={(e) => handleAction(e, props.secondaryLink)} target="_blank" className="col-span-4 row-span-1 relative rounded-[3cqw] overflow-hidden flex flex-col items-center justify-center p-[2cqw] hover:scale-[1.02] transition-all">
          {props.secondaryBoxImg && <img src={props.secondaryBoxImg} className="absolute inset-0 w-full h-full object-cover z-0" alt="" />}
          <div className="absolute inset-0 z-10" style={{ backgroundColor: props.secondaryBoxBg, opacity: props.secondaryBoxImg ? 0.6 : 1 }}></div>
          <p className="relative z-20 font-black tracking-tighter uppercase leading-none text-center" style={{ fontSize: `${props.secondaryFontSize || 2.5}cqw`, color: props.secondaryTextColor }}>
            {props.secondaryText}
          </p>
        </a>
      </div>
    </section>
  );
};

// --- HERO V2 ---
export const HeroV2 = (props) => {
  const link1 = getValidLink(props.btnLink, props.btn1Whatsapp);

  return (
    <section className={`w-full relative overflow-hidden flex items-center ${props.fontFamily}`} style={{ backgroundColor: props.bgColor, minHeight: '80vh' }}>
      <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden opacity-[0.03] pointer-events-none whitespace-nowrap">
        <span className="text-[30cqw] font-black uppercase tracking-tighter inline-block animate-marquee">
          {props.title} • {props.title} • {props.title} • 
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-[5cqw] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-start">
          <div className="w-20 h-1 bg-current mb-8" style={{ color: props.titleColor }}></div>
          <h1 className={`${props.isBold ? 'font-black' : 'font-normal'} ${props.isItalic ? 'italic' : ''} ${props.isUnderline ? 'underline' : ''} leading-[0.85] uppercase mb-8 tracking-tighter`} style={{ color: props.titleColor, fontSize: `${(props.fontSize || 7) * 0.7}cqw` }}>
            {props.title}
          </h1>
          <a href={link1 || "#"} onClick={(e) => handleAction(e, link1)} target="_blank" className="group flex items-center gap-4 px-8 py-4 rounded-full font-black text-[1.1cqw] uppercase transition-all hover:scale-105" style={{ backgroundColor: props.btnBg, color: props.btnTextColor }}>
            <span>{props.btnText}</span>
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </a>
        </div>

        <div className="relative group flex justify-center items-center">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border border-black/5">
            <img src={props.mainBoxImg || "https://images.unsplash.com/photo-1558655146-d09347e92766"} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Work" />
          </div>
          <a href={props.secondaryLink || "#"} onClick={(e) => handleAction(e, props.secondaryLink)} target="_blank" className="absolute -bottom-8 -left-8 w-[12cqw] h-[12cqw] min-w-[100px] min-h-[100px] rounded-full flex items-center justify-center text-center p-4 shadow-2xl backdrop-blur-md border border-white/20 animate-bounce-slow transition-all hover:scale-110 z-20 cursor-pointer" style={{ backgroundColor: props.secondaryBoxBg || '#000', color: props.secondaryTextColor || '#fff' }}>
            <span className="font-black leading-tight tracking-widest uppercase italic" style={{ fontSize: `${props.secondaryFontSize || 1.2}cqw` }}>
              {props.secondaryText || "CLICK HERE"}
            </span>
          </a>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: inline-block; animation: marquee 20s linear infinite; }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .animate-bounce-slow { animation: bounce-slow 5s infinite ease-in-out; }
      `}</style>
    </section>
  );
};

// --- HERO V3 ---
export const HeroV3 = (props) => {
  const link1 = getValidLink(props.btnLink, props.btn1Whatsapp);

  return (
    <div className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden ${props.fontFamily}`} style={{ backgroundColor: props.bgColor }}>
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-500/20 rounded-full blur-[120px]" />

      <div className="relative z-10 w-[90%] max-w-5xl p-12 md:p-24 rounded-[40px] border border-white/20 backdrop-blur-xl bg-white/10 shadow-2xl flex flex-col items-center text-center">
        <span className="px-4 py-1 rounded-full border border-white/30 text-[10px] font-black tracking-[4px] uppercase mb-8" style={{ color: props.secondaryTextColor, backgroundColor: 'rgba(0,0,0,0.1)' }}>
          {props.secondaryText}
        </span>
        <h1 className={`${props.isBold ? 'font-black' : 'font-normal'} ${props.isItalic ? 'italic' : ''} ${props.isUnderline ? 'underline' : ''} leading-[0.9] uppercase mb-10 tracking-tighter`} style={{ color: props.titleColor, fontSize: `${props.fontSize}vw`, textShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          {props.title}
        </h1>
        <button onClick={(e) => handleAction(e, link1)} className="group relative px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 overflow-hidden" style={{ backgroundColor: props.btnBg, color: props.btnTextColor }}>
          <span className="relative z-10">{props.btnText}</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>

      {props.mainBoxImg && (
        <div className="absolute inset-0 z-0 opacity-20 grayscale" style={{ backgroundImage: `url(${props.mainBoxImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      )}
    </div>
  );
};