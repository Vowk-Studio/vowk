import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Facebook, X, Link as LinkIcon } from 'lucide-react';
import contactoFoto from '../../assets/contactoFoto.webp';

// Diccionario para asignar el icono correcto
const ICON_COMPONENTS = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  x: X,
  mail: Mail,
  location: MapPin
};

export const ContactosV1 = (props) => {
  const { 
    paddingY, titleColor, formTitle, 
    socialList, // Usamos la lista dinámica
    glassColor, blurAmount, buttonBg, buttonText, buttonLabel 
  } = props;

  const buttonClass = "flex items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 border border-white/5";

  return (
    <section 
    id={props.id || 'contacto'}
      style={{ backgroundColor: '#111111', padding: `${paddingY}px 5cqw`, minHeight:'50cqw' }} 
      className="w-full relative z-10 border-t border-white/5 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <h2 className="text-5xl font-black tracking-tighter uppercase italic" style={{ color: titleColor }}>
              {formTitle}
            </h2>
            
            <div className="flex gap-4 flex-wrap">
              {/* Usamos (socialList || []) para que si está vacío, React simplemente no renderice nada en vez de romperse */}
{(socialList || []).map((red) => {
  // Verificamos que 'red' exista antes de pedirle propiedades
  if (!red || !red.visible || !red.url) return null;

  // Blindamos la plataforma por si viene vacía
  const platformName = (red.platform || 'link').toLowerCase();
  const IconTag = ICON_COMPONENTS[platformName] || LinkIcon;

  let finalHref = red.url;
  if (platformName === 'mail') finalHref = `mailto:${red.url}`;
  if (platformName === 'location') finalHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(red.url)}`;

  return (
    <a key={red.id || Math.random()} href={finalHref} target="_blank" rel="noreferrer noopener" className={buttonClass}>
      <IconTag className="w-5 h-5" />
    </a>
  );
})}
          
            </div>
          </div>

          {/* Formulario */}
          <div 
            className="p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden shadow-2xl"
            style={{ 
              backgroundColor: glassColor, 
              backdropFilter: `blur(${blurAmount}px)`,
              WebkitBackdropFilter: `blur(${blurAmount}px)`
            }}
          >
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="NOMBRE" 
                className="w-full bg-transparent border-b border-white/10 p-4 outline-none text-white text-xs font-bold uppercase tracking-widest focus:border-indigo-500 transition-all placeholder:text-gray-600" 
              />
              <textarea 
                placeholder="PROYECTO" 
                className="w-full bg-transparent border-b border-white/10 p-4 h-32 resize-none outline-none text-white text-xs font-bold uppercase tracking-widest focus:border-indigo-500 transition-all placeholder:text-gray-600" 
              />
              <button 
                className="w-full py-5 rounded-2xl font-black uppercase italic tracking-widest text-sm transition-all hover:scale-[1.02] active:scale-95" 
                style={{ backgroundColor: buttonBg, color: buttonText }}
              >
                {buttonLabel}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};


export const ContactosV2 = (props) => {
  const { 
    paddingY, formTitle, socialList,
    buttonBg, buttonText, buttonLabel, contactoImg,
    bgColor 
  } = props;

  const iconClass = "flex items-center justify-center p-[1cqw] bg-gray-100 rounded-[0.8cqw] hover:bg-black hover:text-white transition-all duration-300 border border-gray-200 text-gray-600";

  return (
    <section 
      id={props.id || 'contacto'}
      style={{ 
        backgroundColor: '#ffffff', 
        padding: `${paddingY}px 0`,
        minHeight: '100vh' 
      }} 
      className="w-full relative z-10 flex items-center justify-center transition-colors duration-500"
    >
      <div className="container mx-auto px-[2cqw] flex justify-center">
        <div className="flex flex-col lg:flex-row gap-0 rounded-[3cqw] overflow-hidden border border-gray-100 shadow-2xl bg-white w-full max-w-[70cqw]">
          
          <div className="lg:w-1/2 aspect-square lg:aspect-auto relative overflow-hidden bg-gray-50">
            <img 
              src={contactoImg || contactoFoto} 
              alt={formTitle || "Imagen de contacto"} 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          <div className="lg:w-1/2 p-[4cqw] lg:p-[5cqw] flex flex-col justify-center space-y-[2cqw] bg-white">
            <div className="space-y-[1cqw]">
              <h2 className="text-[4.5cqw] lg:text-[3.5cqw] font-black tracking-tighter uppercase italic text-black leading-none">
                {formTitle || "Comencemos"}
              </h2>
              <div className="h-[0.4cqw] w-[6cqw] bg-black"></div>
            </div>

            <form className="space-y-[1.5cqw]" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5cqw]">
                <input type="text" placeholder="NOMBRE" className="w-full bg-gray-50 border border-gray-100 p-[1.2cqw] outline-none text-black text-[1cqw] font-bold uppercase focus:border-black transition-all" />
                <input type="email" placeholder="EMAIL" className="w-full bg-gray-50 border border-gray-100 p-[1.2cqw] outline-none text-black text-[1cqw] font-bold uppercase focus:border-black transition-all" />
              </div>
              <textarea placeholder="PROYECTO..." className="w-full bg-gray-50 border border-gray-100 p-[1.2cqw] h-[8cqw] resize-none outline-none text-black text-[1cqw] font-bold uppercase focus:border-black transition-all" />
              
              <button 
                className="w-full py-[1.5cqw] rounded-[1.2cqw] font-black uppercase italic text-[1.2cqw] transition-all hover:opacity-90 shadow-md" 
                style={{ backgroundColor: buttonBg || '#000', color: buttonText || '#fff' }}
              >
                {buttonLabel || "Enviar"}
              </button>
            </form>

            <div className="pt-[2cqw] border-t border-gray-100 flex items-center gap-[1.5cqw]">
               <div className="flex gap-[1cqw]">
                {(socialList || []).map((red) => {
                 if (!red || !red.visible || !red.url) return null;
                 const platformName = (red.platform || 'link').toLowerCase();
                 const IconTag = ICON_COMPONENTS[platformName] || LinkIcon;
                 let finalHref = platformName === 'mail' ? `mailto:${red.url}` : red.url;

                    return (
                   <a key={red.id || Math.random()} href={finalHref} target="_blank" rel="noreferrer noopener" className={iconClass}>
                    <IconTag size="1.2cqw" /> </a>
                              );
                                })}
              </div>
              <p className="text-[0.7cqw] font-black uppercase tracking-widest text-gray-300 italic">Vowk Studio</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export const ContactosV3 = (props) => {
  const { 
    paddingY, formTitle, socialList,
    buttonBg, buttonText, buttonLabel
  } = props;

  const socialBtnClass = "flex items-center justify-center p-[1.2cqw] rounded-[1cqw] transition-all duration-300 hover:scale-110 shadow-sm border border-black/5";

  return (
    <section 
      id={props.id || 'contacto'}
      style={{ 
        backgroundColor: '#ffffff', 
        padding: `${paddingY}px 0`,
        minHeight: '100vh' 
      }} 
      className="w-full relative z-10 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-[15%] -translate-y-1/2 text-[18cqw] font-black text-gray-50 select-none leading-none z-0">
        CONTACTO
      </div>

      <div className="container mx-auto px-[5cqw] relative z-10">
        <div className="flex flex-col items-center text-center mb-[5cqw]">
          <div className="flex items-center justify-center gap-[1.5cqw] mb-[1cqw]">
            <div className="h-[1px] w-[3cqw] bg-black/10"></div>
            <span className="w-[0.7cqw] h-[0.7cqw] bg-black rounded-full"></span>
            <div className="h-[1px] w-[3cqw] bg-black/10"></div>
          </div>
          <h2 className="text-[5.5cqw] font-black uppercase leading-none tracking-tighter text-black italic">
            {formTitle || "Let's Create"}
          </h2>
        </div>

        <div className="max-w-[75cqw] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[3cqw] items-stretch">
          
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="space-y-[2.5cqw]">
              <div className="grid grid-cols-2 gap-[1cqw]">
                {(socialList || []).map((red) => {
  if (!red || !red.visible || !red.url) return null;
  const platformName = (red.platform || 'link').toLowerCase();
  const IconTag = ICON_COMPONENTS[platformName] || LinkIcon;
  
  const brandColors = {
    instagram: "bg-[#E1306C]/10 text-[#E1306C] hover:bg-[#E1306C] hover:text-white",
    linkedin: "bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white",
    facebook: "bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white",
    mail: "bg-[#EA4335]/10 text-[#EA4335] hover:bg-[#EA4335] hover:text-white"
  };
  const colorClass = brandColors[platformName] || "bg-black/5 text-black hover:bg-black hover:text-white";

  return (
    <a key={red.id || Math.random()} href={red.url} target="_blank" rel="noreferrer noopener" className={`${socialBtnClass} ${colorClass}`}>
      <IconTag size="1.8cqw" /> {/* <--- V3 usa size más grande */}
    </a>
  );
})}
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm p-[2cqw] rounded-[2cqw] border border-black/5 shadow-sm">
                <p className="text-[0.7cqw] font-bold text-black/30 uppercase tracking-[0.2em] mb-[0.5cqw]">Location</p>
                <p className="text-[1cqw] font-black text-black flex items-center gap-[0.5cqw]">
                  <MapPin size="1.2cqw" className="text-black" /> Buenos Aires, AR.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white border border-gray-100 p-[4cqw] rounded-[3cqw] shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
            <form className="space-y-[2cqw]" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[2cqw]">
                <input type="text" placeholder="NAME" className="w-full bg-gray-50 border-b-2 border-transparent p-[1.5cqw] outline-none text-[1cqw] font-bold focus:border-black transition-all rounded-t-[1cqw]" />
                <input type="email" placeholder="EMAIL" className="w-full bg-gray-50 border-b-2 border-transparent p-[1.5cqw] outline-none text-[1cqw] font-bold focus:border-black transition-all rounded-t-[1cqw]" />
              </div>
              <textarea placeholder="YOUR MESSAGE" className="w-full bg-gray-50 border-b-2 border-transparent p-[1.5cqw] h-[10cqw] resize-none outline-none text-[1cqw] font-bold focus:border-black transition-all rounded-t-[1cqw]" />
              <button 
                className="w-full py-[2cqw] rounded-[1.5cqw] text-[1.2cqw] font-black uppercase italic tracking-widest transition-all hover:invert shadow-lg"
                style={{ backgroundColor: buttonBg || '#000', color: buttonText || '#fff' }}
              >
                {buttonLabel || "SEND MESSAGE"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};