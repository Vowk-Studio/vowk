import React from 'react';

const getValidLink = (url, whatsapp) => {
  if (whatsapp) return `https://wa.me/${whatsapp}`;
  if (!url || url === "#") return null;
  return url.startsWith('http') ? url : `https://${url}`;
};

const toCQ = (size) => `${size}cqw`;

export const HeroV1 = (props) => {
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
  {/* Lógica para Botón 1 */}
  {(() => {
    const link1 = getValidLink(props.btnLink, props.btn1Whatsapp);
    return link1 ? (
      <a href={link1} target="_blank" rel="noreferrer" className="px-[3cqw] py-[1cqw] rounded-full font-black shadow-lg text-[1.2cqw] uppercase" style={{ backgroundColor: props.btnBg, color: props.btnTextColor }}>
        {props.btnText}
      </a>
    ) : (
      <span className="px-[3cqw] py-[1cqw] rounded-full font-black shadow-lg text-[1.2cqw] uppercase opacity-50 cursor-default" style={{ backgroundColor: props.btnBg, color: props.btnTextColor }}>
        {props.btnText}
      </span>
    );
  })()}

  {/* Lógica para Botón 2 */}
  {(() => {
    const link2 = getValidLink(props.btn2Link, props.btn2Whatsapp);
    return link2 ? (
      <a href={link2} target="_blank" rel="noreferrer" className="px-[3cqw] py-[1cqw] rounded-full font-black border-2 text-[1.2cqw] uppercase" style={{ borderColor: props.btnBg, color: props.btnBg }}>
        {props.btn2Text || 'LEARN MORE'}
      </a>
    ) : (
      <span className="px-[3cqw] py-[1cqw] rounded-full font-black border-2 text-[1.2cqw] uppercase opacity-50 cursor-default" style={{ borderColor: props.btnBg, color: props.btnBg }}>
        {props.btn2Text || 'LEARN MORE'}
      </span>
    );
  })()}
</div>
            
          </div>
        </div>

        {/* CAJA TERCIARIA */}
        <a href={props.imageLink || "#"} target="_blank" className="col-span-4 row-span-1 rounded-[3cqw] bg-gray-100 overflow-hidden relative group cursor-pointer">
          <img src={props.tertiaryImg || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Hero" />
        </a>

        {/* CAJA SECUNDARIA */}
        <a href={props.secondaryLink || "#"} target="_blank" className="col-span-4 row-span-1 relative rounded-[3cqw] overflow-hidden flex flex-col items-center justify-center p-[2cqw] hover:scale-[1.02] transition-all">
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
// HERO V2: BOLD MARQUEE & IMAGE (CON BADGE CIRCULAR CONECTADO)
export const HeroV2 = (props) => {
  // Lógica de links (WhatsApp o Link normal)
  const wsLink1 = props.btn1Whatsapp 
    ? `https://wa.me/${props.btn1Whatsapp.replace(/[^0-9]/g, '')}` 
    : (props.btnLink || "#");

  return (
    <section 
      className={`w-full relative overflow-hidden flex items-center ${props.fontFamily}`} 
      style={{ backgroundColor: props.bgColor, minHeight: '80vh' }}
    >
      {/* Marquee de fondo */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden opacity-[0.03] pointer-events-none whitespace-nowrap">
        <span className="text-[30cqw] font-black uppercase tracking-tighter inline-block animate-marquee">
          {props.title} • {props.title} • {props.title} • 
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-[5cqw] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* IZQUIERDA: TEXTOS */}
        <div className="flex flex-col items-start">
          <div className="w-20 h-1 bg-current mb-8" style={{ color: props.titleColor }}></div>
          <h1 
  className={`${props.isBold ? 'font-black' : 'font-normal'} ${props.isItalic ? 'italic' : ''} ${props.isUnderline ? 'underline' : ''} leading-[0.85] uppercase mb-8 tracking-tighter`} 
  style={{ color: props.titleColor, fontSize: `${(props.fontSize || 7)*0.7}cqw` }}
>
  {props.title}
</h1>
          <a 
            href={wsLink1}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-4 rounded-full font-black text-[1.1cqw] uppercase transition-all hover:scale-105"
            style={{ backgroundColor: props.btnBg, color: props.btnTextColor }}
          >
            <span>{props.btnText}</span>
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </a>
        </div>

        {/* DERECHA: IMAGEN + CÍRCULO (CONECTADO A LOS DATOS DE M4CHIP) */}
        <div className="relative group flex justify-center items-center">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border border-black/5">
            <img 
              src={props.mainBoxImg || "https://images.unsplash.com/photo-1558655146-d09347e92766"} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="Work" 
            />
          </div>
          
          {/* EL CÍRCULO: Ahora usa secondaryText, secondaryBoxBg y secondaryLink */}
          <a 
            href={props.secondaryLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-8 -left-8 w-[12cqw] h-[12cqw] min-w-[100px] min-h-[100px] rounded-full flex items-center justify-center text-center p-4 shadow-2xl backdrop-blur-md border border-white/20 animate-bounce-slow transition-all hover:scale-110 z-20 cursor-pointer"
            style={{ 
              backgroundColor: props.secondaryBoxBg || '#000', 
              color: props.secondaryTextColor || '#fff' 
            }}
          >
            <span 
              className="font-black leading-tight tracking-widest uppercase italic"
              style={{ fontSize: `${props.secondaryFontSize || 1.2}cqw` }}
            >
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

export const HeroV3 = ({ 
  title, titleColor, fontSize, bgColor, fontFamily, 
  mainBoxImg, secondaryText, secondaryTextColor, btnText, btnBg, btnTextColor,
  isBold, isItalic, isUnderline 
}) => {
  return (
    <div 
      className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden ${fontFamily}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Esferas de luz de fondo (Efecto Aurora) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-500/20 rounded-full blur-[120px]" />

      {/* Tarjeta de Vidrio (Glassmorphism) */}
      <div className="relative z-10 w-[90%] max-w-5xl p-12 md:p-24 rounded-[40px] border border-white/20 backdrop-blur-xl bg-white/10 shadow-2xl flex flex-col items-center text-center">
        
        {/* Etiqueta superior */}
        <span 
          className="px-4 py-1 rounded-full border border-white/30 text-[10px] font-black tracking-[4px] uppercase mb-8"
          style={{ color: secondaryTextColor, backgroundColor: 'rgba(0,0,0,0.1)' }}
        >
          {secondaryText}
        </span>

        {/* Título Masivo */}
        <h1 
  className={`${isBold ? 'font-black' : 'font-normal'} ${isItalic ? 'italic' : ''} ${isUnderline ? 'underline' : ''} leading-[0.9] uppercase mb-10 tracking-tighter`} 
  style={{ 
    color: titleColor, 
    fontSize: `${fontSize}vw`,
    textShadow: '0 10px 30px rgba(0,0,0,0.1)' 
  }}
>
  {title}
</h1>

        {/* Botón Call to Action */}
        <button 
          className="group relative px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 overflow-hidden"
          style={{ backgroundColor: btnBg, color: btnTextColor }}
        >
          <span className="relative z-10">{btnText}</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>

      {/* Imagen de fondo sutil si existe */}
      {mainBoxImg && (
        <div 
          className="absolute inset-0 z-0 opacity-20 grayscale"
          style={{ backgroundImage: `url(${mainBoxImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      )}
    </div>
  );
};



