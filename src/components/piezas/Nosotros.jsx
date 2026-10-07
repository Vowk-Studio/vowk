import React from 'react';

export const NosotrosV1 = (props) => {
  return (
    <section 
    id='nosotros'
      className={`w-full py-[10cqw] px-[5cqw] ${props.fontFamily || 'font-sans'}`} 
      style={{ backgroundColor: props.bgColor || '#ffffff' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[5cqw]">
          
          {/* LADO IZQUIERDO: Título y Concepto Corto */}
          <div className="lg:col-span-4">
            <h2 
              className={`${props.titleFont || 'font-sans'} ${props.isBold ? 'font-black' : 'font-normal'} ${props.isItalic ? 'italic' : ''} ${props.isUnderline ? 'underline' : ''} uppercase tracking-tighter mb-[2cqw]`}
              style={{ color: props.titleColor || '#000000', fontSize: `${props.titleSize || 8}cqw`, lineHeight: '1' }}
            >
              {props.title || "Quienes Somos"}
            </h2>
            <div className="h-[4px] w-[50px] bg-current mb-[3cqw]" style={{ color: props.titleColor || '#000000' }}></div>
            <p 
              className={`${props.secondaryFont || 'font-sans'} font-bold uppercase tracking-widest opacity-50`}
              style={{ color: props.titleColor || '#000000', fontSize: `${props.secondarySize || 2.5}cqw` }}
            >
              {props.secondaryText || "Hambre, Visión y Compromiso"}
            </p>
          </div>

          {/* LADO DERECHO: El relato extenso */}
          <div className="lg:col-span-8 space-y-[3cqw]">
            <div 
              className={`${props.descriptionFont || 'font-sans'} leading-relaxed opacity-90`}
              style={{ color: props.titleColor || '#000000', fontSize: `${props.descriptionSize || 1.5}cqw` }}
            >
              <p className="mb-[2cqw]">
                {props.description || "Somos una empresa joven y dinámica que nace con el firme propósito de romper las estructuras tradicionales del mercado. Nos estamos abriendo camino a base de resultados, responsabilidad y una entrega que solo quienes aman lo que hacen pueden ofrecer."}
              </p>
              
              <p 
                className="opacity-70"
                style={{ fontSize: `calc(${props.descriptionSize || 1.5}cqw * 0.8)` }}
              >
                Nuestra filosofía se basa en la transparencia y el esfuerzo constante. Entendemos que el camino del crecimiento se construye con confianza, por eso nos tomamos cada desafío como propio.
              </p>

              <div className="pt-[4cqw] grid grid-cols-2 gap-[2cqw]">
                <div>
                  <h4 className="font-bold uppercase text-[1cqw] mb-2">Nuestro Equipo</h4>
                  <p className="text-[1cqw] opacity-60">Profesionales altamente capacitados y en constante formación.</p>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-[1cqw] mb-2">Responsabilidad</h4>
                  <p className="text-[1cqw] opacity-60">Compromiso total con los plazos y la calidad acordada.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
  
};
export const NosotrosV2 = (props) => {
  // Definimos los colores y tamaños base para evitar errores si las props vienen undefined
  const bgColor = props.bgColor || '#050505';
  const textColor = props.titleColor || '#ffffff';
  const descSize = props.descriptionSize || 1.5;
  const textoDefault = "Este bloque de texto que estás leyendo ahora mismo es el cuerpo principal de la Versión 3 del componente Nosotros. Su función principal es demostrar la capacidad de auto-distribución tipográfica que hemos programado: todo el contenido que ingreses en este campo del panel se organizará automáticamente en tres columnas verticales, emulando el estilo visual de un manifiesto impreso o de un periódico de diseño moderno. No importa qué tan largo sea el texto que decidas escribir; el sistema se encarga de balancear la carga de lectura para que el diseño mantenga siempre su elegancia y equilibrio visual sin que tengas que tocar una sola línea de código adicional. Además de la distribución en columnas, este componente está vinculado directamente con los controles de tu panel lateral. Esto significa que si decidís cambiar el tamaño de la fuente desde el slider de 'Tamaño Cuerpo', el texto se reajustará en tiempo real dentro de estas tres columnas.";

  return (
    <section 
      id='nosotros'
      className={`w-full py-[12cqw] px-[5cqw] ${props.fontFamily || 'font-sans'} relative overflow-hidden`} 
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-[1300px] mx-auto relative">
        
        {/* TEXTO DECORATIVO DE FONDO */}
        <span 
          className="absolute -top-[5cqw] -left-[2cqw] text-[15cqw] font-black opacity-5 pointer-events-none uppercase" 
          style={{ color: textColor }}
        >
          {props.title ? props.title.split(' ')[0] : 'About'}
        </span>

        <div className="flex flex-col space-y-[8cqw]">
          
          {/* TÍTULO DESCENTRADO */}
          <div className="flex justify-end">
            <div className="w-full lg:w-2/3 text-right">
              <h2 
                className={`${props.titleFont || 'font-sans'} ${props.isBold ? 'font-black' : 'font-normal'} ${props.isItalic ? 'italic' : ''} ${props.isUnderline ? 'underline' : ''} uppercase leading-[0.85] tracking-[-0.05em]`}
                style={{ color: textColor, fontSize: `${props.titleSize || 8}cqw` }}
              >
                {props.title || "Nuestra Esencia"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            
            {/* BLOQUE DE CITA (TEXTO RESALTADO) */}
            <div className="lg:col-span-5 aspect-video lg:aspect-square border border-white/20 rounded-sm flex flex-col justify-center p-[4cqw] relative">
               <div className="absolute top-4 left-4 text-[4cqw] opacity-20 font-serif" style={{ color: textColor }}>“</div>
               <p 
                 className="font-light italic leading-[1.1]" 
                 style={{ color: textColor, fontSize: `${props.secondarySize || 2.5}cqw` }}
               >
                 {props.secondaryText || "El diseño no es lo que ves, sino lo que haces sentir a los demás."}
               </p>
               <div className="h-[1px] w-12 bg-current mt-4 opacity-50" style={{ color: textColor }}></div>
            </div>

            {/* CUERPO DE TEXTO SUPERPUESTO (Multiplicador 1.3x) */}
            <div className="lg:col-span-7 lg:-ml-[10%] z-10 mt-10 lg:mt-0 p-[5cqw] bg-white/5 backdrop-blur-md border border-white/10 rounded-sm shadow-2xl">
              <div 
                className={`${props.descriptionFont || 'font-sans'} leading-relaxed text-justify opacity-90`}
                style={{ 
                  color: textColor, 
                  fontSize: `${descSize * 1.3}cqw` 
                }}
              >
                <p>
                  {props.description || "No buscamos encajar en lo preestablecido. Nuestra visión es forjar un camino donde la innovación y la ejecución impecable se encuentren."}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


export const NosotrosV3 = (props) => {
  // Variables de respaldo para evitar errores de renderizado
  const bgColor = props.bgColor || '#ffffff';
  const descSize = props.descriptionSize || 1.5;

  // Texto descriptivo largo para que el diseño de 3 columnas se luzca de entrada
  const textoDefault = "Este bloque de texto que estás leyendo ahora mismo es el cuerpo principal de la Versión 3 del componente Nosotros. Su función principal es demostrar la capacidad de auto-distribución tipográfica que hemos programado: todo el contenido que ingreses en este campo del panel se organizará automáticamente en tres columnas verticales, emulando el estilo visual de un manifiesto impreso o de un periódico de diseño moderno. No importa qué tan largo sea el texto que decidas escribir; el sistema se encarga de balancear la carga de lectura para que el diseño mantenga siempre su elegancia y equilibrio visual sin que tengas que tocar una sola línea de código adicional. Además de la distribución en columnas, este componente está vinculado directamente con los controles de tu panel lateral. Esto significa que si decidís cambiar el tamaño de la fuente desde el slider de 'Tamaño Cuerpo', el texto se reajustará en tiempo real dentro de estas tres columnas.";

  return (
    <section 
      id='nosotros'
      className={`w-full py-[12cqw] px-[5cqw] ${props.fontFamily || 'font-sans'}`} 
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* 1. TÍTULO MASIVO - Color independiente */}
        <div className="text-center mb-[6cqw]">
          <h2 
            className={`${props.titleFont || 'font-sans'} ${props.isBold ? 'font-black' : 'font-normal'} ${props.isItalic ? 'italic' : ''} ${props.isUnderline ? 'underline' : ''} uppercase tracking-[-0.07em] leading-none`}
            style={{ 
              color: props.titleColor || '#000000', 
              fontSize: `${props.titleSize || 10}cqw` 
            }}
          >
            {props.title || "Quienes Somos"}
          </h2>
        </div>

        {/* 2. SEPARADOR CON SUBTÍTULO - Color independiente */}
        <div className="flex items-center gap-4 mb-[8cqw]">
          <div className="flex-grow h-[1px] opacity-30" style={{ backgroundColor: props.secondaryColor || '#000000' }}></div>
          <p 
            className={`${props.secondaryFont || 'font-sans'} uppercase font-bold tracking-[0.3em] whitespace-nowrap`}
            style={{ 
              color: props.secondaryColor || '#000000', 
              fontSize: `${props.secondarySize || 2}cqw` 
            }}
          >
            {props.secondaryText || "MANIFIESTO DE DISEÑO"}
          </p>
          <div className="flex-grow h-[1px] opacity-30" style={{ backgroundColor: props.secondaryColor || '#000000' }}></div>
        </div>

        {/* 3. CUERPO EN 3 COLUMNAS - Color independiente + Multiplicador 1.2x */}
        <div 
          className={`${props.descriptionFont || 'font-sans'} leading-relaxed text-justify opacity-90`}
          style={{ 
            color: props.descriptionColor || '#ffffff', 
            fontSize: `${descSize * 1.2}cqw`, 
            columnCount: 3, 
            columnGap: '4cqw'
          }}
        >
          {/* Muestra la prop del panel o el texto largo descriptivo si está vacío */}
          {props.description || textoDefault}
        </div>

      </div>
    </section>
  );
};