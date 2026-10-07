import { useState, useRef } from 'react';
import { sanitizeText, sanitizeColor } from '../utils/sanitizers';
import { compressImage } from '../utils/fileHelpers';
import { CONTACT_EMAIL, API_URL, DEFAULT_CONFIGS } from '../config/constants';

export const useEditor = () => {
  const visorRef = useRef(null);
  const [activeTab, setActiveTab] = useState('nav');
  const [showPanel, setShowPanel] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragTarget, setDragTarget] = useState(null);

  const [config, setConfig] = useState({
    sections: {
      nav: { ...DEFAULT_CONFIGS.nav },
      hero: { ...DEFAULT_CONFIGS.hero },
      nosotros: { ...DEFAULT_CONFIGS.nosotros },
      servicios: { ...DEFAULT_CONFIGS.servicios },
      contactos: { ...DEFAULT_CONFIGS.contactos },
      footers: { ...DEFAULT_CONFIGS.footers }
    }
  });

  const updateSectionProp = (section, prop, value) => {
    setConfig(prev => ({
      ...prev,
      sections: { 
        ...prev.sections, 
        [section]: value === null ? prop : { ...prev.sections[section], [prop]: value } 
      }
    }));
  };

  const handleNavText = (e) => updateSectionProp('nav', 'brandText', sanitizeText(e.target.value));
  const handleNavColor = (prop, value) => updateSectionProp('nav', prop, sanitizeColor(value));
  
  const handleNavLinkUpdate = (id, newLabel) => {
    const updatedLinks = config.sections.nav.links.map(link => 
      link.id === id ? { ...link, label: sanitizeText(newLabel) } : link
    );
    updateSectionProp('nav', 'links', updatedLinks);
  };

  const handleFileUpload = async (e, section, prop) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const compressed = await compressImage(file);
      updateSectionProp(section, prop, compressed);
    }
  };

  const handleMouseDown = (e, target) => { e.stopPropagation(); setDragTarget(target); setIsDragging(true); };
  const handleMouseUp = () => { setIsDragging(false); setDragTarget(null); };
  const handleMouseMove = (e) => {
    if (!isDragging || !visorRef.current) return;
    const rect = visorRef.current.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    if (dragTarget === 'brand') updateSectionProp('nav', 'logoPosX', x.toFixed(2));
  };

  const restoreSection = (key) => {
    if (DEFAULT_CONFIGS[key]) updateSectionProp(key, null, { ...DEFAULT_CONFIGS[key] });
  };

  const handleExportZip = async () => {
    const s = config.sections;

    const archivosGenerados = [
      {
        nombre: "src/components/Nav.jsx",
        codigo: `import React from 'react';
export default function Nav() {
  return (
    <nav style={{ backgroundColor: '${s.nav.navContainerBg}', height: '${s.nav.navHeight}vh' }} className="w-full flex justify-between items-center px-8 fixed top-0 z-50">
      <div style={{ color: '${s.nav.brandColor}', marginLeft: '${s.nav.logoPosX}%', fontSize: '${s.nav.brandFontSize}px' }} className="font-bold uppercase">
        ${s.nav.showLogo ? `<img src="${s.nav.logoUrl}" style={{ width: '${s.nav.logoSize}px' }} alt="logo" />` : ''}
        ${s.nav.showText ? `<span>${s.nav.brandText}</span>` : ''}
      </div>
      <div className="flex gap-8">
        ${s.nav.links.map(l => `<a href="#${l.path}" style={{ color: '${s.nav.textColor}', fontSize: '${s.nav.fontSize}px' }} className="hover:opacity-75 transition-all font-medium">${l.label}</a>`).join('\n        ')}
      </div>
    </nav>
  );
};`
      },
      {
        nombre: "src/components/Hero.jsx",
        codigo: `import React from 'react';
export default function Hero() {
  return (
    <section style={{ backgroundColor: '${s.hero.bgColor}', paddingTop: '${s.hero.paddingY}px', paddingBottom: '${s.hero.paddingY}px' }} className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
      <h1 style={{ fontSize: '${s.hero.fontSize}rem', color: '${s.hero.titleColor}' }} className="font-black uppercase italic leading-none tracking-tighter z-10">
        ${s.hero.title.replace(/\n/g, '<br/>')}
      </h1>
      <p style={{ color: '${s.hero.secondaryTextColor}', fontSize: '${s.hero.secondaryFontSize}rem', backgroundColor: '${s.hero.secondaryBoxBg}' }} className="mt-6 px-4 py-2 z-10">
        ${s.hero.secondaryText || ''}
      </p>
      <button style={{ backgroundColor: '${s.hero.btnBg}', color: '${s.hero.btnTextColor}' }} className="mt-12 px-12 py-6 rounded-full font-bold uppercase italic hover:scale-105 transition-transform z-10">
        ${s.hero.btnText}
      </button>
    </section>
  );
};`
      },
      {
        nombre: "src/components/Nosotros.jsx",
        codigo: `import React from 'react';
export default function Nosotros() {
  return (
    <section style={{ backgroundColor: '${s.nosotros.bgColor}' }} className="py-24 px-8">
      <h2 style={{ fontSize: '${s.nosotros.titleSize}rem', color: '${s.nosotros.titleColor}' }} className="font-bold uppercase mb-8">
        ${s.nosotros.title}
      </h2>
      <h3 style={{ fontSize: '${s.nosotros.secondarySize}rem', color: '${s.nosotros.secondaryColor}' }} className="mb-4">
        ${s.nosotros.secondaryText}
      </h3>
      <p style={{ fontSize: '${s.nosotros.descriptionSize}rem', color: '${s.nosotros.descriptionColor}' }} className="max-w-4xl leading-relaxed">
        ${s.nosotros.description}
      </p>
    </section>
  );
};`
      },
      {
        nombre: "src/components/Servicios.jsx",
        codigo: `import React from 'react';
export default function Servicios() {
  const items = ${JSON.stringify(s.servicios.items)};
  return (
    <section style={{ backgroundColor: '${s.servicios.bgColor}' }} className="py-20 px-10">
      <h2 style={{ fontSize: '${s.servicios.titleSize}rem', color: '${s.servicios.titleColor}' }} className="text-center mb-16 font-black uppercase">
        ${s.servicios.sectionTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map((item, i) => (
          <div key={i} className="border-t border-black/10 pt-6">
            <h4 style={{ fontSize: '${s.servicios.itemTitleSize}rem', color: '${s.servicios.titleColor}' }} className="font-bold mb-4 uppercase">{item.t}</h4>
            <p style={{ fontSize: '${s.servicios.descriptionSize}rem', color: '${s.servicios.descriptionColor}' }}>{item.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
};`
      },
      {
        nombre: "src/components/Contacto.jsx",
        codigo: `import React from 'react';
export default function Contacto() {
  return (
    <section style={{ backgroundColor: 'black' }} className="py-24 px-8 text-white">
      <div style={{ backgroundColor: '${s.contactos.glassColor}', backdropFilter: 'blur(${s.contactos.blurAmount}px)' }} className="max-w-5xl mx-auto p-12 rounded-3xl">
        <h2 style={{ color: '${s.contactos.titleColor}' }} className="text-5xl font-black uppercase mb-12 text-center">${s.contactos.formTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            ${s.contactos.socialList.filter(s => s.visible).map(soc => `<div className="mb-4 uppercase font-bold text-sm">${soc.platform}: ${soc.url}</div>`).join('\n            ')}
          </div>
          <button style={{ backgroundColor: '${s.contactos.buttonBg}', color: '${s.contactos.buttonText}' }} className="w-full py-6 font-black uppercase italic rounded-xl">
            ${s.contactos.buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
};`
      },
      {
        nombre: "src/components/Footer.jsx",
        codigo: `import React from 'react';
export default function Footer() {
  return (
    <footer style={{ backgroundColor: '${s.footers.bgColor}', color: '${s.footers.textColor}' }} className="py-12 px-8 flex justify-between items-center border-t border-white/10">
      <span className="font-bold uppercase text-2xl">${s.footers.brandName}</span>
      <div className="flex gap-6">
        ${s.footers.socialList.filter(s => s.visible).map(soc => `<a href="${soc.url}" className="uppercase text-xs tracking-widest hover:opacity-50 transition-all">${soc.platform}</a>`).join('\n        ')}
      </div>
    </footer>
  );
};`
      }
    ];

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'export_project',
          files: archivosGenerados,
          email_destino: CONTACT_EMAIL
        })
      });
      const result = await response.json();
      if (result.status === "success") alert("🚀 Archivos individuales enviados.");
    } catch (error) { console.error("Error:", error); }
  };

  return {
    config, activeTab, setActiveTab, showPanel, setShowPanel, visorRef,
    handleNavText, handleNavColor, handleNavLinkUpdate, handleFileUpload,
    handleMouseDown, handleMouseMove, handleMouseUp, handleExportZip,
    restoreSection, updateSectionProp
  };
};