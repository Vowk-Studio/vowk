import React from 'react';
import { Eye, EyeOff, RotateCcw } from 'lucide-react';

const SectionHeader = ({ sectionKey, config, updateSectionProp, restoreSection }) => {
  // 1. EXTRAER DATA CON SEGURIDAD
  const sectionData = config?.sections?.[sectionKey];

  // 2. CONTROL DE ERRORES VISUAL (Si no hay data, te avisa por qué)
  if (!sectionData) {
    return (
      <div className="p-3 bg-red-50 border border-red-200 rounded-lg mb-4">
        <p className="text-[10px] font-black text-red-600 uppercase">
          ⚠️ Error: No existe la sección "{sectionKey}" en la configuración.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 border-b pb-6 border-gray-100 mb-6 bg-white">
      
      {/* --- FILA 1: ACCIONES GLOBALES --- */}
      <div className="flex items-center gap-2">   
        <button 
          onClick={() => restoreSection && restoreSection(sectionKey)} 
          className="flex-1 py-2 bg-gray-50 hover:bg-red-50 hover:text-red-600 text-[9px] font-black uppercase transition-all rounded-lg border border-dashed border-gray-200 flex items-center justify-center gap-2"
        >
          <RotateCcw size={12} />
          Reestablecer valores predeterminados
        </button>
        
        <button 
          onClick={() => updateSectionProp(sectionKey, 'isVisible', sectionData.isVisible === false)}
          className={`px-4 py-2 rounded-lg border transition-all ${
            sectionData.isVisible === false 
              ? 'bg-red-50 text-red-500 border-red-200 shadow-inner' 
              : 'bg-gray-50 text-gray-400 border-gray-100 hover:text-black hover:border-black'
          }`}
          title={sectionData.isVisible === false ? "Mostrar sección" : "Ocultar sección"}
        >
          {sectionData.isVisible === false ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>

      {/* --- FILA 2: SELECTOR DE ARQUITECTURA (V1, V2, V3) --- */}
      <div className="space-y-1.5">
        <label className="text-[9px] font-black text-gray-400 uppercase italic tracking-widest">
          Arquitectura del Activo
        </label>
        <div className="flex bg-gray-100 p-1 rounded-xl border border-gray-200">
          {['1', '2', '3'].map((num) => (
            <button
              key={num}
              onClick={() => updateSectionProp(sectionKey, 'version', num)} 
              className={`flex-1 py-1.5 text-[10px] font-black rounded-lg transition-all uppercase ${
                String(sectionData.version) === num 
                  ? 'bg-white shadow-md text-indigo-600 scale-[1.02]' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Versión {num}
            </button>
          ))}
        </div>
      </div>

      {/* --- FILA 3: CONFIGURACIÓN DE ESPACIADO Y COLOR --- */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[9px] font-black text-gray-400 uppercase italic">Color de Fondo</label>
          <div className="flex items-center gap-2">
            <input 
              type="color" 
              value={sectionData.bgColor || '#ffffff'} 
              onChange={e => updateSectionProp(sectionKey, 'bgColor', e.target.value)}
              className="w-full h-9 cursor-pointer block rounded-lg border-2 border-gray-100 bg-white p-0.5" 
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <label className="text-[9px] font-black text-gray-400 uppercase italic">Padding (Aire)</label>
            <span className="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
              {sectionData.paddingY || 0}px
            </span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="200" 
            step="10"
            value={sectionData.paddingY || 0} 
            onChange={e => updateSectionProp(sectionKey, 'paddingY', parseInt(e.target.value, 10))}
            className="w-full h-6 mt-1 accent-black cursor-pointer" 
          />
        </div>
      </div>

    </div>
  );
};

export default SectionHeader;