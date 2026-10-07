import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ChevronDown, ChevronUp, PanelLeftClose, 
  PanelLeftOpen, Upload, MousePointer2, Edit3, Image as ImageIcon, 
  Type, RotateCcw, Eye, EyeOff 
} from 'lucide-react';
import { CONTACT_EMAIL, API_URL } from '../config/constants';

import * as Navs from './piezas/Navs';
import * as Heros from './piezas/Heros';
import * as Nosotros from './piezas/Nosotros';
import * as Servicios from './piezas/Servicios';
import * as Contactos from './piezas/Contactos';
import * as Footers from './piezas/Footers';


import defaultLogo from './piezas/assets/logo.webp';

const compressImage = (file, maxWidth = 1200, quality = 0.7) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height = (maxWidth / width) * height;
          width = maxWidth;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
    };
  });
};

const sanitizeInput = (val) => {
  if (typeof val !== 'string') return val;
  return val.replace(/<[^>]*>?/gm, ''); // Quita etiquetas HTML
};

export default function Editor() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (isMobile === null) return null;

  if (isMobile) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-8 text-center">
        <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-2xl max-w-md shadow-2xl">
          <h2 className="text-2xl font-black mb-4 text-indigo-400 uppercase tracking-tighter">Modo Escritorio Requerido</h2>
          <p className="text-gray-400 mb-6">El Constructor de Vowk Studio requiere una pantalla más grande. Por favor, accedé desde un ordenador.</p>
          <button onClick={() => navigate('/')} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all">
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }
  const visorRef = useRef(null);
  const [activeTab, setActiveTab] = useState('nav');
  const [showPanel, setShowPanel] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragTarget, setDragTarget] = useState(null);
  const FONT_OPTIONS = [
  'font-sans', 
  'font-serif', 
  'font-mono', 
  'font-playfair', 
  'font-montserrat',
  'font-oswald'
];

const defaultConfigs = {
    nav: {
      version: '1', 
      bgColor: '#ffffff', 
      navHeight: '15',
      navContainerBg: 'rgba(255, 255, 255, 0.7)', 
      showLogo: true, 
      showText: true,
      brandText: 'VOWK STUDIO', 
      brandFontSize: '40', 
      brandColor: '#1a1a1a', 
      brandFontFamily: 'font-sans',
      logoUrl: defaultLogo, 
      logoSize: '120', 
      logoPosX: 5, 
      logoPosY: 10,
      navPosX: 50, 
      navPosY: 70,
      fontSize: '20', 
      textColor: '#1a1a1a', 
      navFontFamily: 'font-sans',
      fontFamily: 'font-sans', // <--- Nueva
      paddingY: '10',          // <--- Nueva para el Nav (menos aire)
      buttonBg: '#000000', 
      buttonTextColor: '#ffffff',
      links: [
        { id: 1, label: 'Inicio' }, 
        { id: 2, label: 'Servicios' },
        { id: 3, label: 'Nosotros' }, 
        { id: 4, label: 'Contacto' }
      ]
    },
    hero: {
      version: '1',
      bgColor: '#ffffff',
      title: 'TRANSFORMA TU NEGOCIO',
      fontSize: '8',
      titleColor: '#1a1a1a',
      mainBoxBg: 'rgba(255, 255, 255, 0.6)',
      btnText: 'GET STARTED',
      btnBg: '#000000',
      btnTextColor: '#ffffff',
      secondaryText: 'Click Here',
      secondaryFontSize: '2.5',
      secondaryTextColor: '#ffffff',
      secondaryBoxBg: '#000000',
      fontFamily: 'font-sans', // <--- Nueva
      paddingY: '80'           // <--- Nueva para el Hero (más aire)
    },
    nosotros: { 
  version: '1', 
  bgColor: '#050505', 
  title: '', 
  secondaryText: '',
  description: '',
  // Fuentes independientes
  titleFont: 'font-sans',
  secondaryFont: 'font-sans',
  descriptionFont: 'font-sans',
  // Tamaños independientes (usando tu lógica de sliders)
  titleSize: '6', 
  secondarySize: '2.5',
  descriptionSize: '1.4',
  // Estilos
  titleColor: '#ffffff',
  secondaryColor:'#ffffff',
  decriptionColor:'#ffffff',
  isBold: true,
  isItalic: false,
  isUnderline: false
},
servicios: {
  version:'1',
  sectionTitle: "Nuestros Servicios",
  titleColor: "#000000",
  descriptionColor: "#cccccc",
  bgColor: "#ffffff",
  titleSize: 2.5,
  descriptionSize: 2,
  // Esta es la parte clave: una lista (array)
  items: [
    { t: "Servicio 01", d: "Descripción del primer servicio." },
    { t: "Servicio 02", d: "Descripción del segundo servicio." },
    { t: "Servicio 03", d: "Descripción del tercer servicio." }
  ]
},
contactos: {
  version: '1',
  sectionTitle: "Contacto",
  titleColor: '#ffffff',
  glassColor: "rgba(255, 255, 255, 0.1)",
  blurAmount: 10,
  formTitle: "Comencemos tu proyecto",
  buttonLabel: "Enviar Mensaje",
  buttonBg: "#ffffff",
  buttonText: "#000000",
  paddingY: 0,
  // Nueva lista dinámica (todo en minúsculas)
  socialList: [
    { id: 1, platform: 'instagram', url: 'https://instagram.com/vowk', visible: true },
    { id: 2, platform: 'linkedin', url: 'https://linkedin.com/in/vowk', visible: true },
    { id: 3, platform: 'mail', url: 'hola@vowkstudio.com', visible: true },
    { id: 4, platform: 'location', url: 'Buenos Aires, Argentina', visible: true }
  ]
},
footers: {
  version: '1',
  brandName: 'VOWK STUDIO',
  bgColor: '#0d0d0e',
  textColor: '#ffffff',
  // Ahora usamos una lista en lugar de variables sueltas
  socialList: [
    { id: 1, platform: 'instagram', url: 'https://instagram.com/vowk', visible: true },
    { id: 2, platform: 'linkedin', url: 'https://linkedin.com/in/vowk', visible: true }
  ]
}

  };

  const [config, setConfig] = useState({
    sections: {
      nav: { ...defaultConfigs.nav },
      hero: { ...defaultConfigs.hero},
      nosotros: { ...defaultConfigs.nosotros},
      servicios: { ...defaultConfigs.servicios},
      contactos: { ...defaultConfigs.contactos},
      footers: { ...defaultConfigs.footers }
    }
  });

// Esta función ahora es universal y usa la key que le pases
const restoreSection = (sectionKey) => {
  if (defaultConfigs[sectionKey]) {
    setConfig(prev => ({
      ...prev,
      sections: {
        ...prev.sections,
        [sectionKey]: { ...defaultConfigs[sectionKey] }
      }
    }));
  }
};

  const updateSectionProp = (section, prop, value) => {
    setConfig(prev => ({
      ...prev,
      sections: { ...prev.sections, [section]: { ...prev.sections[section], [prop]: value } }
    }));
  };

const handleFileUpload = (e, section, prop) => {
  const file = e.target.files[0];

  // Seguridad: Validamos que el archivo exista y sea una imagen antes de leerlo
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();

    reader.onloadend = () => {
      // El resultado es un string Base64 que solo vive en la memoria del navegador
      updateSectionProp(section, prop, reader.result);
    };

    reader.readAsDataURL(file);
  }
};

  const handleMouseDown = (e, target) => {
    e.stopPropagation();
    setDragTarget(target);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !visorRef.current || !dragTarget) return;
    const rect = visorRef.current.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;

    if (dragTarget === 'brand') {
      updateSectionProp('nav', 'logoPosX', Math.max(0, Math.min(95, x)).toFixed(2));
      updateSectionProp('nav', 'logoPosY', Math.max(0, Math.min(95, y)).toFixed(2));
    } else if (dragTarget === 'menu') {
      updateSectionProp('nav', 'navPosX', Math.max(5, Math.min(95, x)).toFixed(2));
      updateSectionProp('nav', 'navPosY', Math.max(5, Math.min(95, y)).toFixed(2));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragTarget(null);
  };

const renderSafe = (type, library) => {
    const sectionData = config.sections[type];
    
    // 1. Si el botón del ojo está en 'oculto', no renderiza nada
    if (sectionData.isVisible === false) return null;

    const Component = library[`${type.charAt(0).toUpperCase() + type.slice(1)}V${sectionData.version}`];
    const linkLabels = sectionData.links?.map(l => l.label) || [];
    
    // 2. Envolvemos el componente en un div que aplica el Padding y el Fondo
    return Component ? (
      <div 
        key={type}
        style={{ 
          paddingTop: `${sectionData.paddingY || 0}px`, 
          paddingBottom: `${sectionData.paddingY || 0}px`,
          backgroundColor: sectionData.bgColor 
        }}
      >
        <Component {...sectionData} links={linkLabels} onMouseDown={handleMouseDown} />
      </div>
    ) : null;
  };
  const handleExportZip = async () => {
  const destino = CONTACT_EMAIL;

  // Creamos un array con los archivos que vamos a mandar
  const archivosParaEnviar = [];

  // Mapeamos las secciones que tenés en el visor
  // 'nav', 'hero', 'nosotros', 'servicios', 'contactos', 'footers'
  Object.keys(config.sections).forEach(sectionKey => {
    const sectionData = config.sections[sectionKey];
    const version = sectionData.version; // Ejemplo: 'V1', 'V2'
    
    // Creamos el nombre del archivo (Ej: Contactos.jsx)
    const fileName = sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1);

    // Generamos el código fuente como un string
    // OJO: Aquí podrías importar tus plantillas reales o mandar el esqueleto
    // Como vos lo editás a mano, te mando el código base con sus props aplicadas
    const code = `
import React from 'react';

export const ${fileName} = () => {
  return (
    <section id="${sectionKey}" style={{ backgroundColor: '${sectionData.bgColor || "#000"}', padding: '${sectionData.paddingY || "80"}px 0' }}>
      <div className="container mx-auto">
         <h2 style={{ color: '${sectionData.titleColor || "#fff"}' }}>
            {/* Aquí iría el contenido de la ${version} que elegiste */}
            ${sectionData.title || sectionData.brandName || "Sección " + fileName}
         </h2>
         {/* Al exportar, vos vas a pegar acá el código real de tu ${version} */}
      </div>
    </section>
  );
};`;

    archivosParaEnviar.push({
      nombre: fileName,
      codigo: code
    });
  });

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'export_project',
        config: config, // Mandamos el config por las dudas
        email_destino: destino,
        files: archivosParaEnviar // ESTO ES LO QUE EL PHP VA A METER EN EL ZIP
      })
    });

    if (response.ok) {
      alert(`🚀 Proyecto enviado con éxito a: ${destino}`);
    } else {
      alert("❌ Error en el servidor.");
    }
  } catch (error) {
    console.error("Error exportando:", error);
  }
};
  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden" 
         onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      
      <aside className={`bg-white text-black z-20 flex flex-col transition-all duration-500 ${showPanel ? 'w-96' : 'w-0 overflow-hidden'}`}>
        <div className="p-6 border-b flex items-center justify-between sticky top-0 bg-white z-10">
          <h2 className="font-black italic text-xl uppercase tracking-tighter">Vowk Editor</h2>
          <button onClick={() => setShowPanel(false)} className="text-gray-400 hover:text-black"><PanelLeftClose size={20}/></button>
        </div>
           <div className="p-6 border-b">
    <button 
      onClick={handleExportZip}
      className="
        block mx-auto 
        w-[85%] 
        bg-indigo-500 text-white 
        text-[10px] font-black uppercase tracking-[0.2em] 
        py-4 rounded-xl 
        shadow-xl transition-all 
        hover:bg-indigo-800 active:scale-95
      "
    >
      <div className="flex items-center justify-center gap-2">
        <Upload size={14} /> 
        <span>Exportar ZIP</span>
      </div>
    </button>
  </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
      
          {Object.keys(config.sections).map((key) => (
            <div key={key} className={`border rounded-xl ${activeTab === key ? 'border-black shadow-lg' : 'border-gray-100'}`}>
              <button onClick={() => setActiveTab(activeTab === key ? null : key)} className="w-full p-4 flex justify-between items-center text-[10px] font-black uppercase text-gray-400">
                {key} {activeTab === key ? <ChevronUp size={14}/> : <ChevronDown size={14}/>}
              </button>

              {activeTab === key && (
                <div className="p-4 pt-0 space-y-6 text-black">
               {/* --- CABECERA UNIVERSAL CORREGIDA --- */}
          <div className="space-y-4 border-b pb-4 border-gray-100">
          <div className="flex flex-col gap-2 mb-4">

          <div className="flex items-center gap-2">   
      
      <button 
        /* CAMBIO: Usamos 'key' en lugar de 'contactos' */
        onClick={() => restoreSection(key)} 
        className="flex-1 py-2 bg-gray-100 hover:bg-red-50 hover:text-red-600 text-[10px] font-black uppercase transition-all rounded-lg border border-dashed border-gray-300"
      >
        Reestablecer valores predeterminados
      </button>
      <button 
        onClick={() => {
        const estadoActual = config.sections[key].isVisible;
        // Forzamos el cambio a booleano puro
        const nuevoEstado = estadoActual === false ? true : false;
        updateSectionProp(key, 'isVisible', nuevoEstado);
          }}
        className={`px-3 py-2 rounded-lg border transition-colors ${config.sections[key].isVisible === false ? 'bg-red-50 text-red-500 border-red-200' : 'bg-gray-50 text-gray-400'}`}
      >
        {config.sections[key].isVisible === false ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>

    <div className="flex bg-gray-100 p-1 rounded-xl">
      {['1', '2', '3'].map((v) => (
        <button
          key={v}
          /* CAMBIO: Usamos 'key' para que cambie la versión de la sección actual */
          onClick={() => {
            const versionesValidas = ['1', '2', '3'];
            if (versionesValidas.includes(v)) {
            updateSectionProp(key, 'version', v);
            }
              }} 
          className={`flex-1 py-1 text-[10px] font-black rounded-lg transition-all ${config.sections[key].version === v ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}
        >
          V{v}
        </button>
      ))}
    </div>
  </div>

  {/* Los inputs de color y padding ya los tenías bien con [key] */}
  <div className="grid grid-cols-2 gap-4 pt-2">
    <div>
      <label className="text-[9px] font-black text-gray-400 uppercase italic">Color Fondo</label>
      <input 
        type="color" 
        value={config.sections[key].bgColor || '#ffffff'} 
        
        onChange={e => {
          const valor = e.target.value;
  // Verifica que empiece con # y tenga caracteres hex
          if (/^#[0-9A-F]{6}$/i.test(valor)) {
          updateSectionProp(key, 'bgColor', valor);
          }
            }}
        className="w-full h-8 mt-1 cursor-pointer block" 
      />
    </div>
    <div>
      <label className="text-[9px] font-black text-gray-400 uppercase italic">Espacio (Padding)</label>
      <input 
        type="range" 
        min="-100" 
        max="100" 
        value={(config.sections[key].paddingY || (key === 'nav' ? 10 : 80)) - (key === 'nav' ? 10 : 80)} 
        onChange={e => {
          const base = key === 'nav' ? 10 : 80;
          const offset = parseInt(e.target.value, 10);
    // Si por alguna razón el valor no es un número, lo reseteamos a 0
          const safeOffset = isNaN(offset) ? 0 : offset;

          updateSectionProp(key, 'paddingY', base + safeOffset);
            }}
        className="w-full h-8 mt-1 accent-black" 
      />
    </div>
  </div>
</div>
                  
                  {key === 'nav' && (
                    <div className="space-y-4">

                      <div className="p-3 bg-gray-50 rounded-xl space-y-4 border border-gray-100">
                        <label className="text-[10px] font-black text-indigo-600 uppercase italic">Identidad Visual</label>
                        <div className="flex gap-4 border-b pb-2 border-gray-200">
                           <label className="flex items-center gap-1 text-[10px] font-bold cursor-pointer"><input type="checkbox" checked={config.sections.nav.showLogo} onChange={e => updateSectionProp('nav', 'showLogo', e.target.checked)} className="accent-black"/> Logo</label>
                           <label className="flex items-center gap-1 text-[10px] font-bold cursor-pointer"><input type="checkbox" checked={config.sections.nav.showText} onChange={e => updateSectionProp('nav', 'showText', e.target.checked)} className="accent-black"/> Texto</label>
                        </div>
                        {config.sections.nav.showLogo && (
                          <div className="space-y-2">
                            <label className="cursor-pointer bg-white border border-dashed rounded border-gray-300 flex flex-col items-center p-2 hover:border-indigo-500">
                                <Upload size={14} className="text-gray-400 mb-1"/><span className="text-[9px] font-black uppercase">Subir Logo</span>
                              <input type="file" className="hidden" accept="image/*" 
                                onChange={(e) => {const file = e.target.files[0];
                              // Solo ejecutamos si el archivo existe y es una imagen
                                if (file && file.type.startsWith('image/')) {
                                handleFileUpload(e, 'nav', 'logoUrl');
                                  }
                                    }}/>

                            </label>
                            <input type="range" min="0" max="240" value={config.sections.nav.logoSize} 
                            onChange={e => {const val = parseInt(e.target.value, 10);
                            // Si no es un número, lo dejamos en 40 por defecto
                            updateSectionProp('nav', 'logoSize', isNaN(val) ? 40 : val);
                          }} className="w-full h-1 accent-black"/>
                          </div>
                        )}
                        {config.sections.nav.showText && (
                          <div className="space-y-3 pt-2 border-t border-gray-200">
                            <input type="text" value={config.sections.nav.brandText} 
                              onChange={e => {const cleanBrand = e.target.value.replace(/<[^>]*>?/gm, '');
                              updateSectionProp('nav', 'brandText', cleanBrand);}} 
                              className="w-full bg-white border p-2 text-xs font-bold rounded"/>

                            <input type="range" min="0" max="80" value={config.sections.nav.brandFontSize} 
                              onChange={e => {const val = parseInt(e.target.value, 10);
                              // Si no es un número, lo dejamos en 24 por defecto
                              updateSectionProp('nav', 'brandFontSize', isNaN(val) ? 24 : val);}} 
                              className="w-full h-1 accent-black" />
                            <input type="color" value={config.sections.nav.brandColor} className="w-full h-8 cursor-pointer rounded border-none"
                            onChange={e => {
                              const val = e.target.value;
                              if (/^#[0-9A-F]{6}$/i.test(val)) updateSectionProp('nav', 'brandColor', val);}} />
                          </div>
                        )}
                      </div>

                      <div className="p-3 bg-gray-50 rounded-xl space-y-4 border border-gray-100">
                        <label className="text-[10px] font-black text-indigo-600 uppercase italic">Botones del Menú</label>
                        <div className="space-y-2">
                          {config.sections.nav.links.map(link => (
                            <div key={link.id} className="flex items-center gap-2 bg-white p-1 rounded border shadow-sm">
                              <Edit3 size={12} className="text-gray-300 ml-2" />
                             <input 
                              value={link.label} 
                              onChange={(e) => {
                            // Quitamos cualquier intento de meter etiquetas <script> o HTML
                              const cleanLabel = e.target.value.trim().replace(/<[^>]*>?/gm, '');
                              const nl = config.sections.nav.links.map(l => l.id === link.id ? {...l, label: cleanLabel} : l);
                              updateSectionProp('nav', 'links', nl);  
                              }} 
                              className="w-full text-[11px] font-bold outline-none" />
                            </div>
                          ))}
                        </div>
                        <input type="range" min="8" max="60" value={config.sections.nav.fontSize}  className="w-full h-1 accent-black" 
                        onChange={e => {
                          const val = parseInt(e.target.value, 10);
                          updateSectionProp('nav', 'fontSize', isNaN(val) ? 14 : val);}}/>
                      </div>

                      <div className="p-3 bg-gray-50 rounded-xl space-y-2 border border-gray-100">
                        <label className="text-[10px] font-black text-indigo-600 uppercase italic">Estilo Botones (V3)</label>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col gap-1">
                            <span className="text-[8.5px] font-bold text-gray-400 uppercase">Fondo</span>
                            <input type="color" value={config.sections.nav.buttonBg}  className="w-full h-8" 
                            onChange={e => {
                              const val = e.target.value;
                              if (/^#[0-9A-F]{6}$/i.test(val)) updateSectionProp('nav', 'buttonBg', val);}}/>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-[8.5px] font-bold text-gray-400 uppercase">Texto</span>
                            <input type="color" value={config.sections.nav.buttonTextColor} className="w-full h-8" 
                            onChange={e => {
                              const val = e.target.value;
                              if (/^#[0-9A-F]{6}$/i.test(val)) updateSectionProp('nav', 'buttonTextColor', val);}}/>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-gray-50 rounded-xl space-y-2">
                        <label className="text-[10px] font-black text-indigo-600 uppercase">Colores Nav</label>
                        <div className="grid grid-cols-2 gap-2">
                           <div className="flex flex-col gap-1">
                              <span className="text-[8.5px] font-bold text-gray-400 uppercase">Fondo Contenedor</span>
                              <input type="color" value={config.sections.nav.navContainerBg}className="w-full h-8" 
                              onChange={e => {
                                const val = e.target.value;
                                if (/^#[0-9A-F]{6}$/i.test(val)) updateSectionProp('nav', 'navContainerBg', val);}}/>
                           </div>
                           <div className="flex flex-col gap-1">
                              <span className="text-[8.5px] font-bold text-gray-400 uppercase">Color Texto</span>
                              <input type="color" value={config.sections.nav.textColor}  className="w-full h-8" 
                              onChange={e => {
                                const val = e.target.value;
                                if (/^#[0-9A-F]{6}$/i.test(val)) updateSectionProp('nav', 'textColor', val);}}/>
                           </div>
                        </div>
                      </div>
                    </div>
                  )}
               
                  {key === 'hero' && (
  <div className="space-y-4">
    {/* CAJA PRINCIPAL Y BOTONES */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-2 border border-gray-100">
      <label className="text-[10px] font-black text-indigo-600 uppercase italic">Caja Principal y Botones</label>
      <input type="text" value={config.sections.hero.title}  className="w-full bg-white border p-2 text-xs font-bold rounded"
        onChange={e => {
        const cleanTitle = e.target.value.replace(/<[^>]*>?/gm, '');
        updateSectionProp('hero', 'title', cleanTitle);}} />
      {/* BOTÓN 1 */}
  <div className="space-y-2 p-3 bg-gray-50 rounded-xl border border-gray-100">
    <label className="text-[9px] font-black text-black uppercase flex items-center gap-2">
      <div className="w-1.5 h-1.5 bg-black rounded-full" /> Botón Primario
    </label>
    <input 
      type="text" 
      placeholder="Texto del botón"
      value={config.sections.hero.btnText} 
      onChange={e => {
        const cleanBtn = e.target.value.replace(/<[^>]*>?/gm, '');
        updateSectionProp('hero', 'btnText', cleanBtn);}}
      className="w-full p-2 text-[11px] font-bold border rounded"
    />
    <div className="grid grid-cols-2 gap-2 mt-1">
      <input type="color" value={config.sections.hero.btnBg}  className="w-full h-6 rounded cursor-pointer" title="Fondo Botón"
        onChange={e => {
        if (/^#[0-9A-F]{6}$/i.test(e.target.value)) updateSectionProp('hero', 'btnBg', e.target.value);}} />

      <input type="color" value={config.sections.hero.btnTextColor} className="w-full h-6 rounded cursor-pointer" title="Texto Botón" 
        onChange={e => {
        if (/^#[0-9A-F]{6}$/i.test(e.target.value)) updateSectionProp('hero', 'btnTextColor', e.target.value);}}/>

    </div>
    <div className="space-y-1 mt-2">
  <label className="text-[7px] font-black text-gray-400 uppercase italic">Tamaño Título</label>
  <input 
    type="range" 
    min="0" 
    max="16" // El doble de tu valor predeterminado (10)
    value={config.sections.hero.fontSize || 8} 
    onChange={e => {
    const val = parseInt(e.target.value, 10);
    updateSectionProp('hero', 'fontSize', isNaN(val) ? 8 : val);}} 
    className="w-full h-8 mt-1 accent-black" 
  />
</div>
    
    <div className="space-y-1 mt-2">
      <input 
        type="text" 
        placeholder="Link (https://...)" 
        value={config.sections.hero.btnLink || ''} 
        onChange={e => {
          const cleanLnk1 = e.target.value.trim().replace(/<[^>]*>?/gm, '');
          updateSectionProp('hero', 'btnLink', cleanLnk1);}}
        className={`w-full border p-2 text-[9px] rounded ${config.sections.hero.btn1Whatsapp ? 'bg-gray-100 opacity-50' : 'bg-white'}`}
        disabled={!!config.sections.hero.btn1Whatsapp}
      />
      <div className="relative">
       <input 
        type="text" 
        placeholder="O WhatsApp (ej: 54911...)" 
        value={config.sections.hero.btn1Whatsapp || ''} 
        onChange={e => {
    // Filtramos: solo permitimos números del 0 al 9
        const cleanNum = e.target.value.replace(/[^0-9]/g, '');
        updateSectionProp('hero', 'btn1Whatsapp', cleanNum);}}
        className="w-full bg-green-50 border border-green-200 p-2 text-[9px] rounded font-bold text-green-700" 
/>
        <span className="absolute right-2 top-2 text-[7px] text-green-500 font-bold uppercase">WhatsApp</span>
      </div>
    </div>
  </div>

  {/* BOTÓN 2 */}
  <div className="space-y-2 p-3 bg-gray-50 rounded-xl border border-gray-100">
    <label className="text-[9px] font-black text-black uppercase flex items-center gap-2">
      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" /> Botón Secundario
    </label>
    <input 
      type="text" 
      placeholder="Texto del botón 2"
      value={config.sections.hero.btn2Text || ''} 
      onChange={e => {
    const cleanText = e.target.value.replace(/<[^>]*>?/gm, '');
    updateSectionProp('hero', 'btn2Text', cleanText);
  }}
      className="w-full p-2 text-[11px] font-bold border rounded"
    />
    <div className="space-y-1 mt-2">
      <input 
        type="text" 
        placeholder="Link (https://...)" 
        value={config.sections.hero.btn2Link || ''} 
        onChange={e => {
        const cleanLnk2 = e.target.value.trim().replace(/<[^>]*>?/gm, '');
        updateSectionProp('hero', 'btn2Link', cleanLnk2);}}
        className={`w-full border p-2 text-[9px] rounded ${config.sections.hero.btn2Whatsapp ? 'bg-gray-100 opacity-50' : 'bg-white'}`}
        disabled={!!config.sections.hero.btn2Whatsapp}
      />
      <div className="relative">
        <input 
        type="text" 
        placeholder="O WhatsApp (ej: 54911...)" 
        value={config.sections.hero.btn2Whatsapp || ''} 
        onChange={e => {
        const cleanNum = e.target.value.replace(/[^0-9]/g, '');
        updateSectionProp('hero', 'btn2Whatsapp', cleanNum);
        }} 
        className="w-full bg-green-50 border border-green-200 p-2 text-[9px] rounded font-bold text-green-700" />
        <span className="absolute right-2 top-2 text-[7px] text-green-500 font-bold uppercase">WhatsApp</span>
      </div>
    </div>
  </div>
    </div>
    {/*carga imagen*/}
    <label className="cursor-pointer bg-white border border-dashed rounded border-gray-300 flex flex-col items-center p-2 mt-2 hover:border-indigo-500">
    <Upload size={14} className="text-gray-400 mb-1"/>
    <span className="text-[9px] font-black uppercase text-black">Imagen Fondo Principal</span>
    <input type="file" className="hidden" onChange={(e) => {
    const file = e.target.files[0];
    // Solo disparamos la función si hay un archivo y es una imagen
    if (file && file.type.startsWith('image/')) {
      handleFileUpload(e, 'hero', 'mainBoxImg');
    }
  }} />
</label>

    {/* CAJA SECUNDARIA (M4 CHIP) */}
    <div className="p-3 bg-gray-100 rounded-xl space-y-2 border border-gray-200">
      <label className="text-[10px] font-black uppercase italic">Caja Secundaria</label>
      <input type="text" value={config.sections.hero.secondaryText} className="w-full bg-white border p-2 text-[10px] rounded"
      onChange={e => {
      const cleanSec = e.target.value.replace(/<[^>]*>?/gm, '');
      updateSectionProp('hero', 'secondaryText', cleanSec);}} />
      <input type="text" placeholder="Link Caja Secundaria" value={config.sections.hero.secondaryLink || ''} className="w-full bg-white border p-2 text-[10px] rounded"
      onChange={e => {
    // Limpiamos espacios en blanco accidentales en el link
    updateSectionProp('hero', 'secondaryLink', e.target.value.trim());
  }} />
    </div>
    {/*carga imagen*/}
    <label className="cursor-pointer bg-white border border-dashed rounded border-gray-300 flex flex-col items-center p-2 mt-2 hover:border-indigo-500">
    <Upload size={14} className="text-gray-400 mb-1"/>
    <span className="text-[9px] font-black uppercase text-black">Imagen Fondo Secundaria</span>
    <input type="file" className="hidden" onChange={(e) => {
    const file = e.target.files[0];
    // Solo disparamos la función si hay un archivo y es una imagen
    if (file && file.type.startsWith('image/')) {
      handleFileUpload(e, 'hero', 'secondaryBoxImg');
    }
  }} />
</label>

    {/* CAJA TERCIARIA (IMAGEN) */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-2 border border-gray-100">
      <label className="text-[10px] font-black text-orange-600 uppercase italic">Caja Terciaria (Imagen)</label>
      <input 
  type="text" 
  placeholder="Link al hacer clic en imagen" 
  value={config.sections.hero.imageLink || ''} 
  onChange={e => {
  const cleanImgLnk = e.target.value.trim().replace(/<[^>]*>?/gm, '');
  updateSectionProp('hero', 'imageLink', cleanImgLnk);
}}
  className="w-full bg-white border p-2 text-[10px] rounded" 
/>
    </div>
    {/*carga imagen*/}
    <label className="cursor-pointer bg-white border border-dashed rounded border-gray-300 flex flex-col items-center p-2 mt-2 hover:border-indigo-500">
    <Upload size={14} className="text-gray-400 mb-1"/>
    <span className="text-[9px] font-black uppercase text-black">Cambiar Imagen Terciaria</span>
    <input type="file" className="hidden" onChange={(e) => {
    const file = e.target.files[0];
    // Solo disparamos la función si hay un archivo y es una imagen
    if (file && file.type.startsWith('image/')) {
      handleFileUpload(e, 'hero', 'tertiaryImg');
    }
  }} />
</label>
  </div>
  
)}

{key === 'nosotros' && (
  <div className="space-y-4">
    {/* CAJA TÍTULO */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-2 border border-gray-100">
      <label className="text-[10px] font-black text-indigo-600 uppercase italic">Título Principal</label>
      <input type="text" value={config.sections.nosotros.title} className="w-full bg-white border p-2 text-xs font-bold rounded" 
      onChange={e => {
  const cleanTitle = e.target.value.replace(/<[^>]*>?/gm, '');
  updateSectionProp('nosotros', 'title', cleanTitle);
}}/>
      
      {/* Fuente Título */}
      <div className="pt-2">
        <label className="text-[8.5px] font-black text-gray-400 uppercase italic">Tipografía Título</label>
        <select value={config.sections.nosotros.titleFont || 'font-sans'} onChange={e => updateSectionProp('nosotros', 'titleFont', e.target.value)} className="w-full p-2 text-[10px] border rounded bg-white font-bold mt-1">
          {FONT_OPTIONS.map(font => <option key={font} value={font}>{font.replace('font-', '').toUpperCase()}</option>)}
        </select>
      </div>

      {/* Slider Tamaño Título (Bolita al medio: 8 de 16) */}
      <div className="space-y-1 mt-2">
        <label className="text-[8.5px] font-black text-gray-400 uppercase italic">Tamaño Título</label>
        <input type="range" min="0" max="12" value={config.sections.nosotros.titleSize || 6} className="w-full h-8 mt-1 accent-black" 
        onChange={e => updateSectionProp('nosotros', 'titleSize', parseInt(e.target.value, 10))}/>
      </div>
    </div>
    {/* Color Título */}
<div className="flex items-center justify-start gap-3 mt-4">
  <label className="text-[10px] font-black text-gray-400 uppercase italic">Color Título</label>
  <input 
    type="color" 
    value={config.sections.nosotros.titleColor || '#ffffff'} 
    onChange={e => {
  if (/^#[0-9A-F]{6}$/i.test(e.target.value)) updateSectionProp('nosotros', 'titleColor', e.target.value);
}}
    className="w-6 h-6 bg-transparent cursor-pointer"
  />
</div>

    {/* CAJA SUBTÍTULO */}
    <div className="p-3 bg-gray-100 rounded-xl space-y-2 border border-gray-200">
      <label className="text-[10px] font-black uppercase italic">Subtítulo</label>
      <input type="text" value={config.sections.nosotros.secondaryText} className="w-full bg-white border p-2 text-[10px] rounded"
      onChange={e => {
  const cleanSec = e.target.value.replace(/<[^>]*>?/gm, '');
  updateSectionProp('nosotros', 'secondaryText', cleanSec);
}} />
      
      {/* Fuente Subtítulo */}
      <div className="pt-2">
        <label className="text-[8.5px] font-black text-gray-400 uppercase italic">Tipografía Subtítulo</label>
        <select value={config.sections.nosotros.secondaryFont || 'font-sans'} onChange={e => updateSectionProp('nosotros', 'secondaryFont', e.target.value)} className="w-full p-2 text-[10px] border rounded bg-white font-bold mt-1">
          {FONT_OPTIONS.map(font => <option key={font} value={font}>{font.replace('font-', '').toUpperCase()}</option>)}
        </select>
      </div>

      {/* Slider Tamaño Subtítulo (Bolita al medio: 2.5 de 5) */}
      <div className="space-y-1 mt-2">
        <label className="text-[8.5px] font-black text-gray-400 uppercase italic">Tamaño Texto Secundario</label>
        <input type="range" min="0" max="5" step="0.1" value={config.sections.nosotros.secondarySize || 2.5} className="w-full h-8 mt-1 accent-black" 
        onChange={e => updateSectionProp('nosotros', 'secondarySize', parseFloat(e.target.value))}/>
      </div>
    </div>
    {/* Color Subtítulo / Cita */}
<div className="flex items-center justify-start gap-3 mt-2">
  <label className="text-[10px] font-black text-gray-400 uppercase italic">Color Secundario</label>
  <input 
    type="color" 
    value={config.sections.nosotros.secondaryColor || '#ffffff'} 
    onChange={e => {
  if (/^#[0-9A-F]{6}$/i.test(e.target.value)) updateSectionProp('nosotros', 'secondaryColor', e.target.value);
}}
    className="w-6 h-6 bg-transparent cursor-pointer"
  />
</div>

    {/* CAJA DESCRIPCIÓN (CUERPO) */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-2 border border-gray-100">
      <label className="text-[10px] font-black text-indigo-600 uppercase italic">Cuerpo del Mensaje</label>
      <textarea value={config.sections.nosotros.description} className="w-full bg-white border p-2 text-xs font-medium rounded h-24" 
      onChange={e => {
  const cleanDesc = e.target.value.replace(/<[^>]*>?/gm, '');
  updateSectionProp('nosotros', 'description', cleanDesc);
}}/>
      
      {/* Fuente Cuerpo */}
      <div className="pt-2">
        <label className="text-[8.5px] font-black text-gray-400 uppercase italic">Tipografía Cuerpo</label>
        <select value={config.sections.nosotros.descriptionFont || 'font-sans'} onChange={e => updateSectionProp('nosotros', 'descriptionFont', e.target.value)} className="w-full p-2 text-[10px] border rounded bg-white font-bold mt-1">
          {FONT_OPTIONS.map(font => <option key={font} value={font}>{font.replace('font-', '').toUpperCase()}</option>)}
        </select>
      </div>

      {/* Slider Tamaño Cuerpo (Bolita al medio: 1.5 de 3) */}
      <div className="space-y-1 mt-2">
        <label className="text-[8.5px] font-black text-gray-400 uppercase italic">Tamaño Cuerpo</label>
        <input type="range" min="0" max="3" step="0.1" value={config.sections.nosotros.descriptionSize || 1.5} className="w-full h-8 mt-1 accent-black" 
        onChange={e => updateSectionProp('nosotros', 'descriptionSize', parseFloat(e.target.value))}/>
      </div>
      {/* Color Cuerpo */}
<div className="flex items-center justify-start gap-3 mt-2">
  <label className="text-[10px] font-black text-gray-400 uppercase italic">Color Cuerpo</label>
  <input 
    type="color" 
    value={config.sections.nosotros.descriptionColor || '#ffffff'} 
    onChange={e => {
  if (/^#[0-9A-F]{6}$/i.test(e.target.value)) updateSectionProp('nosotros', 'descriptionColor', e.target.value);
}}
    className="w-6 h-6 bg-transparent cursor-pointer"
  />
</div>
    </div>
  </div>
)}
{key === 'servicios' && (
  <div className="flex flex-col gap-6">
    {/* --- CONFIGURACIÓN GENERAL --- */}
    <div className="flex flex-col gap-4 bg-blue-700/100 p-3 rounded-lg border border-zinc-800">
      <label className="text-[8px] font-black text-white uppercase tracking-widest border-b border-zinc-800 pb-2 mb-2">
        Configuración General
      </label>

      {/* Título de la Sección */}
      <div className="flex flex-col gap-2">
        <label className="text-[8px] font-black text-white uppercase italic">Título de Sección</label>
        <input 
          type="text"
          value={config.sections.servicios.sectionTitle}
          onChange={e => {
  const cleanSecTitle = e.target.value.replace(/<[^>]*>?/gm, '');
  updateSectionProp('servicios', 'sectionTitle', cleanSecTitle);
}}
          className="w-full bg-zinc-900 text-white text-xs p-2 rounded border border-zinc-800 outline-none focus:border-zinc-600"
        />
      </div>

      {/* Colores con selector a la izquierda */}
      <div className="flex flex-col gap-3 mt-2">
        <div className="flex items-center justify-start gap-3">
          <input 
            type="color" 
            value={config.sections.servicios.bgColor} 
            onChange={e => {
  if (/^#[0-9A-F]{6}$/i.test(e.target.value)) updateSectionProp('servicios', 'bgColor', e.target.value);
}}
            className="w-8 h-8 bg-transparent cursor-pointer border border-zinc-700 rounded-sm overflow-hidden" 
          />
          <label className="text-[7.5px] font-black text-white uppercase italic">Color de Fondo</label>
        </div>

        <div className="flex items-center justify-start gap-3">
          <input 
            type="color" 
            value={config.sections.servicios.titleColor} 
            onChange={e => {
  if (/^#[0-9A-F]{6}$/i.test(e.target.value)) updateSectionProp('servicios', 'titleColor', e.target.value);
}} 
            className="w-8 h-8 bg-transparent cursor-pointer border border-zinc-700 rounded-sm overflow-hidden" 
          />
          <label className="text-[7.5px] font-black text-white uppercase italic">Color de Títulos</label>
        </div>

        <div className="flex items-center justify-start gap-3">
          <input 
            type="color" 
            value={config.sections.servicios.descriptionColor} 
            onChange={e => {
  if (/^#[0-9A-F]{6}$/i.test(e.target.value)) updateSectionProp('servicios', 'descriptionColor', e.target.value);
}} 
            className="w-8 h-8 bg-transparent cursor-pointer border border-zinc-700 rounded-sm overflow-hidden" 
          />
          <label className="text-[7.5px] font-black text-white uppercase italic">Color de Cuerpo</label>
        </div>
      </div>

      {/* Sliders de tamaño */}
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex flex-col gap-2">
          <label className="text-[7.5px] font-black text-white uppercase italic">Tamaño Títulos</label>
          <input 
            type="range" min="0" max="5" step="2.5"
            value={config.sections.servicios.titleSize}
            onChange={e => updateSectionProp('servicios', 'titleSize', parseFloat(e.target.value))}
            className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[7.5px] font-black text-white uppercase italic">Tamaño Cuerpo</label>
          <input 
            type="range" min="0" max="6" step="3"
            value={config.sections.servicios.descriptionSize}
            onChange={e => updateSectionProp('servicios', 'descriptionSize', parseFloat(e.target.value))}
            className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
          />
        </div>
      </div>
    </div>

    {/* --- GESTOR DE ÍTEMS --- */}
    <div className="flex flex-col gap-4">
      <label className="text-[8px] font-black text-white uppercase tracking-widest text-center border-b border-zinc-800 pb-2">
        Lista de Servicios
      </label>
      
      {config.sections.servicios.items.map((item, index) => (
        <div key={index} className="p-4 bg-zinc-900 rounded-lg border border-zinc-800 relative group transition-all hover:border-zinc-600">
          
          {/* Botón Eliminar */}
          <button 
            onClick={() => {
              const newItems = config.sections.servicios.items.filter((_, i) => i !== index);
              updateSectionProp('servicios', 'items', newItems);
            }}
            className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-500 text-white w-5 h-5 rounded-full text-[10px] font-bold shadow-lg transition-colors"
          >
            ✕
          </button>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[6px] font-bold text-zinc-500 uppercase">Nombre del Servicio</label>
              <input 
                type="text"
                value={item.t}
                onChange={e => {
                 const newItems = [...config.sections.servicios.items];
                 const cleanT = e.target.value.trim().replace(/<[^>]*>?/gm, '');
                 newItems[index].t = cleanT;
                 updateSectionProp('servicios', 'items', newItems);
                  }}
                className="bg-transparent text-white text-xs font-bold outline-none border-b border-zinc-800 focus:border-white transition-colors pb-1"
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-[6px] font-bold text-zinc-500 uppercase">Descripción</label>
              <textarea 
                value={item.d}
                onChange={e => {
                 const newItems = [...config.sections.servicios.items];
                 const cleanD = e.target.value.replace(/<[^>]*>?/gm, '');
                 newItems[index].d = cleanD;
                 updateSectionProp('servicios', 'items', newItems);
                    }}
                className="bg-transparent text-zinc-400 text-[10px] h-16 resize-none outline-none leading-tight border border-zinc-800 p-1 rounded focus:border-zinc-600"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Botón Añadir */}
      <button 
        onClick={() => {
  if (config.sections.servicios.items.length >= 6) return; // Bloqueo quirúrgico
  const newItems = [...config.sections.servicios.items, { t: "", d: "" }];
  updateSectionProp('servicios', 'items', newItems);
}}
        className="w-full py-3 bg-white text-black text-[9px] font-black uppercase italic rounded shadow-md hover:bg-zinc-200 transition-all active:scale-95"
      >
        + Añadir Nuevo Servicio
      </button>
    </div>
  </div>
)}


  {key === 'contactos' && (
  <div className="space-y-4">
    {/* REESTABLECER Y VERSIONES */}
 
    {/* CARGA DE IMAGEN (SOLO PARA V2) */}
    {config.sections.contactos.version === '2' && (
      <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100 space-y-2">
        <label className="text-[10px] font-black text-indigo-600 uppercase italic flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" /> Imagen Lateral V2
        </label>
        <label className="cursor-pointer bg-white border border-dashed rounded border-indigo-200 flex flex-col items-center p-4 hover:border-indigo-500 transition-colors">
          <Upload size={16} className="text-indigo-400 mb-1"/>
          <span className="text-[9px] font-black uppercase text-indigo-600">Subir contactoFoto.png</span>
          <input 
            type="file" 
            accept="image/png, image/jpeg, image/webp"
            className="hidden" 
            onChange={(e) => handleFileUpload(e, 'contactos', 'contactoImg')} />
        </label>
      </div>
    )}

    {/* TEXTOS PRINCIPALES */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-3 border border-gray-100">
      <label className="text-[10px] font-black text-black uppercase italic tracking-widest">Textos</label>
      <div className="space-y-2">
        <input 
          type="text" 
          placeholder="Título del Formulario"
          value={config.sections.contactos.formTitle} 
          onChange={e => {
          const cleanTitle = e.target.value.replace(/<[^>]*>?/gm, '');
          updateSectionProp('contactos', 'formTitle', cleanTitle);
            }}
          className="w-full bg-white border p-2 text-xs font-bold rounded outline-none focus:ring-1 focus:ring-black" 
        />
        <input 
          type="text" 
          placeholder="Texto del Botón"
          value={config.sections.contactos.buttonLabel} 
          onChange={e => {
            const cleanLabel = e.target.value.replace(/<[^>]*>?/gm, '');
            updateSectionProp('contactos', 'buttonLabel', cleanLabel);
              }}
          className="w-full bg-white border p-2 text-xs font-bold rounded outline-none focus:ring-1 focus:ring-black" 
        />
      </div>
    </div>

    {/* SECCIÓN REDES SOCIALES DINÁMICAS */}
<div className="p-3 bg-gray-50 rounded-xl space-y-3 border border-gray-100">
  <div className="flex justify-between items-center">
    <label className="text-[10px] font-black text-black uppercase italic tracking-widest">Botones de Contacto</label>
    <button 
      onClick={() => {
        const actuales = config.sections.contactos.socialList || [];
        if (actuales.length >= 5) return; // Límite quirúrgico
        const nuevaRed = { id: Date.now(), platform: 'instagram', url: '', visible: true };
        updateSectionProp('contactos', 'socialList', [...actuales, nuevaRed]);
        }}
      className="text-[9px] bg-black text-white px-2 py-1 rounded-full font-bold hover:bg-gray-800"
    >
      + AÑADIR
    </button>
  </div>

  <div className="space-y-3">
    {(config.sections.contactos.socialList || []).map((red, index) => (
      <div key={red.id} className="p-2 bg-white border border-gray-200 rounded-lg space-y-2">
        <div className="flex justify-between items-center gap-2">
          <select 
            value={red.platform}
            onChange={e => {
  const nuevaLista = [...config.sections.contactos.socialList];
  nuevaLista[index].platform = e.target.value;
  updateSectionProp('contactos', 'socialList', nuevaLista);
}}
            className="text-[9px] font-bold uppercase bg-transparent outline-none cursor-pointer border-b border-gray-100"
          >
            <option value="instagram">Instagram</option>
            <option value="linkedin">LinkedIn</option>
            <option value="facebook">Facebook</option>
            <option value="x">X</option>
            <option value="mail">Email</option>
            <option value="location">Ubicación</option>
          </select>

          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={red.visible} 
              onChange={e => {
                const nuevaLista = [...config.sections.contactos.socialList];
                nuevaLista[index].visible = e.target.checked;
                updateSectionProp('contactos', 'socialList', nuevaLista);
              }}
              className="w-3 h-3 accent-black"
            />
            <button 
              onClick={() => {
                const nuevaLista = config.sections.contactos.socialList.filter((_, i) => i !== index);
                updateSectionProp('contactos', 'socialList', nuevaLista);
              }}
              className="text-red-500 text-xs font-bold"
            > × </button>
          </div>
        </div>

        <input 
          type="text" 
          placeholder={red.platform === 'location' ? "Ciudad, País" : "URL o Email"}
          value={red.url} 
          onChange={e => {
  const nuevaLista = [...config.sections.contactos.socialList];
  // 1. Siempre quitamos etiquetas HTML para seguridad
  let cleanValue = e.target.value.replace(/<[^>]*>?/gm, ''); 
  
  // 2. Blindaje condicional:
  if (red.platform === 'location') {
    // Si es ubicación (ej: Buenos Aires), permitimos espacios
    cleanValue = cleanValue.trimStart(); 
  } else {
    // Si es URL o Email, barremos TODOS los espacios
    cleanValue = cleanValue.trim().replace(/\s+/g, '');
  }
  
  nuevaLista[index].url = cleanValue;
  updateSectionProp('contactos', 'socialList', nuevaLista);
}}
          className="w-full bg-gray-50 border p-2 text-[10px] font-medium rounded outline-none" 
        />
      </div>
    ))}
  </div>
</div>
    {/* SLIDER PADDING CON BOLITA EN EL MEDIO */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-2 border border-gray-100">
      <label className="text-[10px] font-black text-black uppercase italic text-center block">Espaciado Vertical</label>
      <div className="flex items-center justify-center h-6 relative">
        <input 
          type="range" min="0" max="200" 
          value={config.sections.contactos.paddingY} 
          onChange={e => updateSectionProp('contactos', 'paddingY', parseInt(e.target.value, 10))}
          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
        />
        <div className="absolute left-1/2 -translate-x-1/2 w-[1px] h-3 bg-gray-400 pointer-events-none" />
      </div>
      <div className="flex justify-between text-[8px] font-bold text-gray-400 uppercase">
        <span>0px</span>
        <span className="text-black">{config.sections.contactos.paddingY}px</span>
        <span>200px</span>
      </div>
    </div>
  </div>
)}              


                {key === 'footers' && (
  <div className="space-y-4">
    {/* IDENTIDAD DE MARCA */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-3 border border-gray-100">
      <label className="text-[10px] font-black text-black uppercase italic tracking-widest">Identidad</label>
      <div className="space-y-2">
        <p className="text-[8px] font-bold text-gray-400 uppercase">Nombre de Marca</p>
        <input 
          type="text" 
          value={config.sections.footers.brandName || ''} 
          onChange={e => {
            const clean = e.target.value.replace(/<[^>]*>?/gm, '');
            updateSectionProp('footers', 'brandName', clean);
            }}
          className="w-full bg-white border p-2 text-xs font-bold rounded outline-none focus:ring-1 focus:ring-black" 
        />
        {config.sections.footers.version === '3' && (
          <div className="pt-1">
            <p className="text-[8px] font-bold text-gray-400 uppercase">Email de Contacto</p>
            <input 
              type="text" 
              value={config.sections.footers.emLink || ''} 
              onChange={e => {
              const cleanEmail = e.target.value.trim().replace(/\s+/g, '').replace(/<[^>]*>?/gm, '');
              updateSectionProp('footers', 'emLink', cleanEmail);
                  }}
              className="w-full bg-white border p-2 text-xs font-bold rounded outline-none focus:ring-1 focus:ring-black" 
            />
          </div>
        )}
      </div>
    </div>

    {/* APARIENCIA Y COLORES */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-3 border border-gray-100">
      <label className="text-[10px] font-black text-black uppercase italic tracking-widest">Apariencia</label>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-[8px] font-bold text-gray-400 uppercase mb-1">Fondo</p>
          <input 
            type="color" 
            value={config.sections.footers.bgColor} 
            onChange={e => {
              if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
              updateSectionProp('footers', 'bgColor', e.target.value); // Cambiá la propiedad según corresponda
              }
                }}
            className="w-full h-8 cursor-pointer rounded border-none bg-transparent"
          />
        </div>
        <div>
          <p className="text-[8px] font-bold text-gray-400 uppercase mb-1">Texto</p>
          <input 
            type="color" 
            value={config.sections.footers.textColor} 
           onChange={e => {
            if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
            updateSectionProp('footers', 'textColor', e.target.value); // Cambiá la propiedad según corresponda
            }
              }}
            className="w-full h-8 cursor-pointer rounded border-none bg-transparent"
          />
        </div>
      </div>
    </div>

{/* SECCIÓN REDES SOCIALES DINÁMICAS */}
<div className="p-3 bg-gray-50 rounded-xl space-y-3 border border-gray-100">
  <div className="flex justify-between items-center">
    <label className="text-[10px] font-black text-black uppercase italic tracking-widest">Redes Sociales</label>
    <button 
      onClick={() => {
      const actuales = config.sections.footers.socialList || [];
      if (actuales.length >= 5) return; // <--- AGREGÁ ESTA LÍNEA
      const nuevaRed = { id: Date.now(), platform: 'instagram', url: '', visible: true };
      updateSectionProp('footers', 'socialList', [...actuales, nuevaRed]);
      }}
      className="text-[9px] bg-black text-white px-2 py-1 rounded-full font-bold hover:bg-gray-800"
    >
      + AÑADIR
    </button>
  </div>

  <div className="space-y-3">
    {(config.sections.footers.socialList || []).map((red, index) => (
      <div key={red.id} className="p-2 bg-white border border-gray-200 rounded-lg space-y-2">
        <div className="flex justify-between items-center gap-2">
          {/* Selector de Plataforma */}
          <select 
            value={red.platform}
           onChange={e => {
            const nuevaLista = [...config.sections.footers.socialList];
    // Solo actualizamos el nombre de la plataforma (ej: 'instagram')
            nuevaLista[index].platform = e.target.value;
            updateSectionProp('footers', 'socialList', nuevaLista);
              }}
            className="text-[9px] font-bold uppercase bg-transparent outline-none cursor-pointer border-b border-gray-100"
          >
            <option value="instagram">Instagram</option>
            <option value="linkedin">LinkedIn</option>
            <option value="facebook">Facebook</option>
            <option value="x">X</option>
            <option value="youtube">YouTube</option>
            <option value="mail">Email</option>
          </select>

          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={red.visible} 
              onChange={e => {
                const nuevaLista = [...config.sections.footers.socialList];
                nuevaLista[index].visible = e.target.checked;
                updateSectionProp('footers', 'socialList', nuevaLista);
              }}
              className="w-3 h-3 accent-black cursor-pointer"
            />
            <button 
              onClick={() => {
                const nuevaLista = config.sections.footers.socialList.filter((_, i) => i !== index);
                updateSectionProp('footers', 'socialList', nuevaLista);
              }}
              className="text-red-500 text-xs font-bold"
            >
              ×
            </button>
          </div>
        </div>

        <input 
          type="text" 
          placeholder="URL (https://...)"
          value={red.url} 
          onChange={e => {
    const nuevaLista = [...config.sections.footers.socialList];
    // ACÁ aplicamos el filtro: quitamos espacios y etiquetas HTML
    const cleanUrl = e.target.value.trim().replace(/\s+/g, '').replace(/<[^>]*>?/gm, '');
    nuevaLista[index].url = cleanUrl;
    updateSectionProp('footers', 'socialList', nuevaLista);
  }}
          className="w-full bg-gray-50 border p-2 text-[10px] font-medium rounded outline-none focus:border-black" 
        />
      </div>
    ))}
  </div>
</div>
</div>

 )}


                </div>
              )}
            </div>
          ))}

        </div>
      </aside>


          <main className="flex-1 flex items-center justify-center relative bg-[#0f0f0f]">
        {!showPanel && (
          <button 
            onClick={() => setShowPanel(true)} 
            className="fixed top-6 left-6 z-50 p-4 bg-white text-black rounded-full shadow-2xl hover:scale-105 transition-transform"
          >
            <PanelLeftOpen size={24} />
          </button>
        )}

        <div 
          ref={visorRef} 
          style={{ containerType: 'inline-size' }} 
          className={`bg-white transition-all duration-500 shadow-2xl relative select-none ${
            showPanel 
              ? 'w-[96%] h-[94%] rounded-2xl border border-white/10 overflow-hidden' 
              : 'w-full h-full overflow-y-auto'
          }`}
        >
          <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
            {renderSafe('nav', Navs)}
            {renderSafe('hero', Heros)}
            {renderSafe('nosotros', Nosotros)}
            {renderSafe('servicios', Servicios)}
            {renderSafe('contactos', Contactos)}
            {renderSafe('footers', Footers)}
          </div>
        </div>
      </main>
    </div>
  );
}