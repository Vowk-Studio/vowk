import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronDown, ChevronUp, PanelLeftClose, PanelLeftOpen, Upload,
  ArrowLeft, MousePointer2, Edit3, Image as ImageIcon, Type, RotateCcw, Eye, EyeOff 
} from 'lucide-react';
import { useEditor } from '../hooks/useEditor';
import { useContactosEditor } from '../hooks/useContactosEditor';

import * as Navs from './piezas/Navs';
import * as Heros from './piezas/Heros';
import * as Nosotros from './piezas/Nosotros';
import * as Servicios from './piezas/Servicios';
import * as Contactos from './piezas/Contactos';
import * as Footers from './piezas/Footers';
import SectionHeader from './piezas/sectionHeader'
export default function Editor() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(null);

  // lógica desde el Hook
  const { 
    config, 
    activeTab, 
    setActiveTab, 
    showPanel, 
    setShowPanel, 
    visorRef,
    handleNavText, 
    handleNavColor, 
    handleMouseDown, 
    handleMouseMove, 
    handleMouseUp,
    handleExportZip, 
    restoreSection, 
    updateSectionProp 
  } = useEditor();

    const { 
    socialList, 
    addSocialLink, 
    removeSocialLink, 
    updateSocialLink, 
    updateText 
  } = useContactosEditor(config, updateSectionProp);

  // Detección de dispositivo
  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Función para renderizar las secciones de forma segura
  const renderSafe = (type, library) => {
    const sectionData = config.sections[type];
    if (!sectionData || sectionData.isVisible === false) return null;
    
    const Component = library[`${type.charAt(0).toUpperCase() + type.slice(1)}V${sectionData.version}`];
    const linkLabels = sectionData.links?.map(l => l.label) || [];
    
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
            className="block mx-auto w-[85%] bg-indigo-500 text-white text-[10px] font-black uppercase tracking-[0.2em] py-4 rounded-xl shadow-xl transition-all hover:bg-indigo-800 active:scale-95"
          >
            <div className="flex items-center justify-center gap-2">
              <Upload size={14} /> <span>Exportar ZIP</span>
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
                  <SectionHeader
                    sectionKey={key} 
                    config={config} 
                    updateSectionProp={updateSectionProp} 
                    restoreSection={restoreSection} 
                  />
                {key === 'nav' && (
  <div className="space-y-4">
    {/* Identidad Visual */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-4 border border-gray-100">
      <label className="text-[10px] font-black text-indigo-600 uppercase italic">Identidad Visual</label>
      <div className="flex gap-4 border-b pb-2 border-gray-200">
          <label className="flex items-center gap-1 text-[10px] font-bold cursor-pointer">
            <input type="checkbox" checked={config.sections.nav.showLogo} onChange={e => updateSectionProp('nav', 'showLogo', e.target.checked)} className="accent-black"/> Logo
          </label>
          <label className="flex items-center gap-1 text-[10px] font-bold cursor-pointer">
            <input type="checkbox" checked={config.sections.nav.showText} onChange={e => updateSectionProp('nav', 'showText', e.target.checked)} className="accent-black"/> Texto
          </label>
      </div>
      
      {config.sections.nav.showLogo && (
        <div className="space-y-2">
          <label className="cursor-pointer bg-white border border-dashed rounded border-gray-300 flex flex-col items-center p-2 hover:border-indigo-500">
              <Upload size={14} className="text-gray-400 mb-1"/><span className="text-[9px] font-black uppercase">Subir Logo</span>
              <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'nav', 'logoUrl')}/>
          </label>
          <div className="flex justify-between items-center text-[8px] font-black uppercase text-gray-400">
            <span>Tamaño</span>
            <span>{config.sections.nav.logoSize}px</span>
          </div>
          <input type="range" min="10" max="240" value={config.sections.nav.logoSize} 
            onChange={e => updateSectionProp('nav', 'logoSize', parseInt(e.target.value))} className="w-full h-1 accent-black"/>
        </div>
      )}

      {config.sections.nav.showText && (
        <div className="space-y-3 pt-2 border-t border-gray-200">
          <input 
            type="text" 
            value={config.sections.nav.brandText} 
            onChange={handleNavText} // <--- Usamos el handler del hook directamente
            className="w-full bg-white border p-2 text-xs font-bold rounded"
            placeholder="Nombre de la marca"
          />
          <input 
            type="color" 
            value={config.sections.nav.brandColor} 
            onChange={e => handleNavColor('brandColor', e.target.value)} // <--- Handler del hook
            className="w-full h-8 cursor-pointer rounded overflow-hidden border-none" 
          />
        </div>
      )}
    </div>

    {/* Botones del Menú */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-4 border border-gray-100">
      <label className="text-[10px] font-black text-indigo-600 uppercase italic">Botones del Menú</label>
      <div className="space-y-2">
        {config.sections.nav.links.map(link => (
          <div key={link.id} className="flex items-center gap-2 bg-white p-1 rounded border shadow-sm focus-within:border-indigo-300 transition-colors">
            <Edit3 size={12} className="text-gray-300 ml-2" />
            <input 
              value={link.label} 
              onChange={(e) => handleNavLinkUpdate(link.id, e.target.value)} // <--- Handler del hook
              className="w-full text-[11px] font-bold outline-none" 
            />
          </div>
        ))}
      </div>
    </div>

    {/* Estilos de Colores y Layout */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-2 border border-gray-100">
      <label className="text-[10px] font-black text-indigo-600 uppercase italic">Configuración de Colores</label>
      <div className="grid grid-cols-2 gap-2">
         <div className="flex flex-col gap-1">
            <span className="text-[8.5px] font-bold text-gray-400 uppercase">Fondo Nav</span>
            <input 
              type="color" 
              value={config.sections.nav.navContainerBg}
              onChange={e => handleNavColor('navContainerBg', e.target.value)}
              className="w-full h-8 rounded" 
            />
         </div>
         <div className="flex flex-col gap-1">
            <span className="text-[8.5px] font-bold text-gray-400 uppercase">Texto Links</span>
            <input 
              type="color" 
              value={config.sections.nav.textColor} 
              onChange={e => handleNavColor('textColor', e.target.value)}
              className="w-full h-8 rounded" 
            />
         </div>
      </div>
    </div>
  </div>
)}
               
                 {key === 'hero' && (
  <div className="space-y-4">
    {/* CAJA PRINCIPAL */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-4 border border-gray-100">
      <label className="text-[10px] font-black text-indigo-600 uppercase italic">Título y Estilo</label>
      
      <input 
        type="text" 
        value={config.sections.hero.title}  
        className="w-full bg-white border p-2 text-xs font-bold rounded focus:ring-2 focus:ring-indigo-500 outline-none"
        onChange={e => updateSectionProp('hero', 'title', e.target.value)} 
      />

      <div className="space-y-1">
        <div className="flex justify-between text-[8px] font-black uppercase text-gray-400">
          <span>Tamaño Título</span>
          <span>{config.sections.hero.fontSize || 8}rem</span>
        </div>
        <input 
          type="range" 
          min="1" 
          max="16" 
          value={config.sections.hero.fontSize || 8} 
          onChange={e => updateSectionProp('hero', 'fontSize', parseInt(e.target.value))} 
          className="w-full h-2 accent-black cursor-pointer" 
        />
      </div>
    </div>

    {/* BOTÓN PRIMARIO */}
    <div className="space-y-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
      <label className="text-[9px] font-black text-black uppercase flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse" /> Botón Primario
      </label>
      
      <input 
        type="text" 
        placeholder="Texto del botón"
        value={config.sections.hero.btnText} 
        onChange={e => updateSectionProp('hero', 'btnText', e.target.value)}
        className="w-full p-2 text-[11px] font-bold border rounded shadow-sm"
      />

      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <span className="text-[7px] font-bold text-gray-400 uppercase">Fondo</span>
          <input type="color" value={config.sections.hero.btnBg} className="w-full h-8 rounded cursor-pointer border-none" 
            onChange={e => updateSectionProp('hero', 'btnBg', e.target.value)} />
        </div>
        <div className="space-y-1">
          <span className="text-[7px] font-bold text-gray-400 uppercase">Texto</span>
          <input type="color" value={config.sections.hero.btnTextColor} className="w-full h-8 rounded cursor-pointer border-none" 
            onChange={e => updateSectionProp('hero', 'btnTextColor', e.target.value)}/>
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-gray-200">
        <input 
          type="text" 
          placeholder="Link (https://...)" 
          value={config.sections.hero.btnLink || ''} 
          onChange={e => updateSectionProp('hero', 'btnLink', e.target.value.trim())}
          className={`w-full border p-2 text-[9px] rounded transition-opacity ${config.sections.hero.btn1Whatsapp ? 'bg-gray-100 opacity-50' : 'bg-white'}`}
          disabled={!!config.sections.hero.btn1Whatsapp}
        />
        <div className="relative">
          <input 
            type="text" 
            placeholder="WhatsApp (ej: 54911...)" 
            value={config.sections.hero.btn1Whatsapp || ''} 
            onChange={e => updateSectionProp('hero', 'btn1Whatsapp', e.target.value.replace(/[^0-9]/g, ''))}
            className="w-full bg-green-50 border border-green-100 p-2 text-[9px] rounded font-bold text-green-700 outline-none focus:border-green-400" 
          />
          <span className="absolute right-2 top-2 text-[7px] text-green-500 font-bold uppercase">WhatsApp</span>
        </div>
      </div>
    </div>

    {/* CARGA DE IMÁGENES (Bento Grid) */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-3 border border-gray-100">
      <label className="text-[10px] font-black text-gray-600 uppercase italic">Multimedia (Activos)</label>
      
      <div className="grid grid-cols-1 gap-2">
        {[
          { label: 'Fondo Principal', prop: 'mainBoxImg' },
          { label: 'Fondo Secundaria', prop: 'secondaryBoxImg' },
          { label: 'Imagen Terciaria', prop: 'tertiaryImg' }
        ].map((img) => (
          <label key={img.prop} className="cursor-pointer bg-white border border-dashed rounded-lg border-gray-300 flex items-center justify-between p-3 hover:border-indigo-500 hover:bg-indigo-50/10 transition-all">
            <div className="flex items-center gap-2">
              <ImageIcon size={14} className="text-gray-400"/>
              <span className="text-[9px] font-black uppercase text-black">{img.label}</span>
            </div>
            <Upload size={12} className="text-indigo-500"/>
            <input type="file" className="hidden" accept="image/*" 
              onChange={(e) => handleFileUpload(e, 'hero', img.prop)} />
          </label>
        ))}
      </div>
    </div>

    {/* CAJA SECUNDARIA (CHIP) */}
    <div className="p-3 bg-gray-900 rounded-xl space-y-3 border border-black shadow-xl">
      <label className="text-[10px] font-black text-indigo-400 uppercase italic">Caja Secundaria (M4 Chip)</label>
      <input 
        type="text" 
        value={config.sections.hero.secondaryText} 
        className="w-full bg-gray-800 border-gray-700 text-white p-2 text-[10px] rounded outline-none focus:border-indigo-500"
        onChange={e => updateSectionProp('hero', 'secondaryText', e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="URL de destino" 
        value={config.sections.hero.secondaryLink || ''} 
        className="w-full bg-gray-800 border-gray-700 text-indigo-300 p-2 text-[10px] rounded outline-none focus:border-indigo-500"
        onChange={e => updateSectionProp('hero', 'secondaryLink', e.target.value.trim())} 
      />
    </div>
  </div>
)}
  

{key === 'nosotros' && config.sections.nosotros && (
  <div className="space-y-4">

    {/* CAJA TÍTULO */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-2 border border-gray-100 text-black">
      <label className="text-[10px] font-black text-indigo-600 uppercase italic">Título Principal</label>
      <input 
        type="text" 
        value={config.sections.nosotros.title || ''} 
        className="w-full bg-white border p-2 text-xs font-bold rounded" 
        onChange={e => updateSectionProp('nosotros', 'title', e.target.value)}
      />
      <div className="flex items-center gap-2 mt-2">
        <input 
          type="color" 
          value={config.sections.nosotros.titleColor || '#000000'} 
          onChange={e => updateSectionProp('nosotros', 'titleColor', e.target.value)}
          className="w-6 h-6 bg-transparent cursor-pointer"
        />
        <label className="text-[9px] font-bold text-gray-400">COLOR TÍTULO</label>
      </div>
    </div>

    {/* CAJA SUBTÍTULO (Secundario) */}
    <div className="p-3 bg-gray-100 rounded-xl space-y-2 border border-gray-200 text-black">
      <label className="text-[10px] font-black uppercase italic">Subtítulo / Cita</label>
      <input 
        type="text" 
        value={config.sections.nosotros.secondaryText || ''} 
        className="w-full bg-white border p-2 text-[10px] rounded"
        onChange={e => updateSectionProp('nosotros', 'secondaryText', e.target.value)} 
      />
      <div className="flex items-center gap-2 mt-2">
        <input 
          type="color" 
          value={config.sections.nosotros.secondaryColor || '#000000'} 
          onChange={e => updateSectionProp('nosotros', 'secondaryColor', e.target.value)}
          className="w-6 h-6 bg-transparent cursor-pointer"
        />
        <label className="text-[9px] font-bold text-gray-400">COLOR SUBTÍTULO</label>
      </div>
    </div>

    {/* CAJA DESCRIPCIÓN (Cuerpo) */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-2 border border-gray-100 text-black">
      <label className="text-[10px] font-black text-indigo-600 uppercase italic">Cuerpo del Mensaje</label>
      <textarea 
        value={config.sections.nosotros.description || ''} 
        className="w-full bg-white border p-2 text-xs font-medium rounded h-24" 
        onChange={e => updateSectionProp('nosotros', 'description', e.target.value)}
      />
      <div className="flex items-center gap-2 mt-2">
        <input 
          type="color" 
          value={config.sections.nosotros.descriptionColor || '#000000'} 
          onChange={e => updateSectionProp('nosotros', 'descriptionColor', e.target.value)}
          className="w-6 h-6 bg-transparent cursor-pointer"
        />
        <label className="text-[9px] font-bold text-gray-400">COLOR CUERPO</label>
      </div>
    </div>
  </div>
)}

{key === 'servicios' && config.sections.servicios && (
  <div className="space-y-4">
    
    {/* AJUSTES DE TÍTULO PRINCIPAL */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-4 border border-gray-100 text-black">
      <label className="text-[10px] font-black text-indigo-600 uppercase italic text-center block border-b pb-2">Cabecera de Sección</label>
      
      <div className="space-y-2">
        <p className="text-[8px] font-bold text-gray-400 uppercase">Texto del Título</p>
        <input type="text" value={config.sections.servicios.sectionTitle || ''} 
          className="w-full bg-white border p-2 text-xs font-bold rounded"
          onChange={e => updateSectionProp('servicios', 'sectionTitle', e.target.value)} />
      </div>

      <div className="space-y-1">
        <div className="flex justify-between text-[8px] font-black uppercase text-gray-400">
          <span>Tamaño Título</span>
          <span>{config.sections.servicios.titleSize || 1.5}cqw</span>
        </div>
        <input type="range" min="1" max="5" step="0.1" 
          value={config.sections.servicios.titleSize || 1.5} 
          onChange={e => updateSectionProp('servicios', 'titleSize', parseFloat(e.target.value))}
          className="w-full h-2 accent-black cursor-pointer" />
      </div>
    </div>

    {/* AJUSTES DE LOS ITEMS (SERVICIOS) */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-4 border border-gray-100 text-black">
      <label className="text-[10px] font-black text-indigo-600 uppercase italic text-center block border-b pb-2">Escala de los Servicios</label>
      
      {/* Slider para Títulos de cada Servicio */}
      <div className="space-y-1">
        <div className="flex justify-between text-[8px] font-black uppercase text-gray-400">
          <span>Tamaño Nombres</span>
          <span>{config.sections.servicios.itemTitleSize || 3.5}cqw</span>
        </div>
        <input type="range" min="2" max="10" step="0.1" 
          value={config.sections.servicios.itemTitleSize || 3.5} 
          onChange={e => updateSectionProp('servicios', 'itemTitleSize', parseFloat(e.target.value))}
          className="w-full h-2 accent-indigo-600 cursor-pointer" />
      </div>

      {/* Slider para Descripciones */}
      <div className="space-y-1">
        <div className="flex justify-between text-[8px] font-black uppercase text-gray-400">
          <span>Tamaño Descripción</span>
          <span>{config.sections.servicios.descriptionSize || 1.2}cqw</span>
        </div>
        <input type="range" min="0.8" max="3" step="0.1" 
          value={config.sections.servicios.descriptionSize || 1.2} 
          onChange={e => updateSectionProp('servicios', 'descriptionSize', parseFloat(e.target.value))}
          className="w-full h-2 accent-indigo-600 cursor-pointer" />
      </div>
    </div>

    {/* COLORES Y LISTADO (Lo que ya teníamos) */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-3 border border-gray-100 text-black">
      <label className="text-[10px] font-black text-indigo-600 uppercase italic">Colores</label>
      <div className="grid grid-cols-3 gap-2">
        <div className="text-center">
          <p className="text-[7px] font-bold text-gray-400 uppercase mb-1">Fondo</p>
          <input type="color" value={config.sections.servicios.bgColor || '#050505'} 
            onChange={e => updateSectionProp('servicios', 'bgColor', e.target.value)}
            className="w-full h-8 cursor-pointer rounded border-none bg-transparent" />
        </div>
        <div className="text-center">
          <p className="text-[7px] font-bold text-gray-400 uppercase mb-1">Títulos</p>
          <input type="color" value={config.sections.servicios.titleColor || '#ffffff'} 
            onChange={e => updateSectionProp('servicios', 'titleColor', e.target.value)}
            className="w-full h-8 cursor-pointer rounded border-none bg-transparent" />
        </div>
        <div className="text-center">
          <p className="text-[7px] font-bold text-gray-400 uppercase mb-1">Texto</p>
          <input type="color" value={config.sections.servicios.descriptionColor || '#cccccc'} 
            onChange={e => updateSectionProp('servicios', 'descriptionColor', e.target.value)}
            className="w-full h-8 cursor-pointer rounded border-none bg-transparent" />
        </div>
      </div>
    </div>

    {/* LISTADO DE ITEMS */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-3 border border-gray-100 text-black">
       {/* ... Aquí va el mapeo de items que te pasé en el mensaje anterior ... */}
    </div>
  </div>
)}

{key === 'contactos' && (
  <div className="space-y-4 text-black">
    {/* IMAGEN V2 */}
    {config.sections.contactos.version === '2' && (
      <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100 space-y-2">
        <label className="text-[10px] font-black text-indigo-600 uppercase italic flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" /> Imagen Lateral V2
        </label>
        <label className="cursor-pointer bg-white border border-dashed rounded border-indigo-200 flex flex-col items-center p-4 hover:border-indigo-500 transition-colors text-center">
          <Upload size={16} className="text-indigo-400 mb-1 mx-auto"/>
          <span className="text-[9px] font-black uppercase text-indigo-600">Subir contactoFoto.png</span>
          <input 
            type="file" 
            accept="image/*"
            className="hidden" 
            onChange={(e) => handleFileUpload(e, 'contactos', 'contactoImg')} />
        </label>
      </div>
    )}

    {/* TEXTOS */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-3 border border-gray-100">
      <label className="text-[10px] font-black text-black uppercase italic tracking-widest">Textos</label>
      <div className="space-y-2">
        <input 
          type="text" 
          placeholder="Título del Formulario"
          value={config.sections.contactos.formTitle || ''} 
          onChange={e => updateText('formTitle', e.target.value)}
          className="w-full bg-white border p-2 text-xs font-bold rounded outline-none focus:ring-1 focus:ring-black" 
        />
        <input 
          type="text" 
          placeholder="Texto del Botón"
          value={config.sections.contactos.buttonLabel || ''} 
          onChange={e => updateText('buttonLabel', e.target.value)}
          className="w-full bg-white border p-2 text-xs font-bold rounded outline-none focus:ring-1 focus:ring-black" 
        />
      </div>
    </div>

    {/* SOCIAL LIST */}
    <div className="p-3 bg-gray-50 rounded-xl space-y-3 border border-gray-100">
      <div className="flex justify-between items-center">
        <label className="text-[10px] font-black text-black uppercase italic tracking-widest">Botones de Contacto</label>
        <button 
          onClick={addSocialLink}
          className="text-[9px] bg-black text-white px-2 py-1 rounded-full font-bold hover:bg-gray-800"
        >
          + AÑADIR
        </button>
      </div>

      <div className="space-y-3">
        {(socialList || []).map((red, index) => (
          <div key={red.id || index} className="p-2 bg-white border border-gray-200 rounded-lg space-y-2">
            <div className="flex justify-between items-center gap-2">
              <select 
                value={red.platform}
                onChange={e => updateSocialLink(index, 'platform', e.target.value)}
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
                  onChange={e => updateSocialLink(index, 'visible', e.target.checked)}
                  className="w-3 h-3 accent-black"
                />
                <button onClick={() => removeSocialLink(index)} className="text-red-500 text-xs font-bold"> × </button>
              </div>
            </div>

            <input 
              type="text" 
              placeholder={red.platform === 'location' ? "Ciudad, País" : "URL o Email"}
              value={red.url || ''} 
              onChange={e => updateSocialLink(index, 'url', e.target.value)}
              className="w-full bg-gray-50 border p-2 text-[10px] font-medium rounded outline-none" 
            />
          </div>
        ))}
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