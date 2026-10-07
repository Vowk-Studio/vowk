import React from 'react';

// VERSION 1: Minimalista / Lista
export const ServiciosV1 = (props) => {
  // Fallbacks quirúrgicos
  const items = props.items && props.items.length > 0 ? props.items : [
    { n: "01", t: "Diseño UI/UX", d: "Interfaces intuitivas..." },
    { n: "02", t: "Desarrollo Web", d: "Sistemas robustos..." }
  ];
  
  const titleColor = props.titleColor || '#ffffff';
  const paddingV = props.paddingV ?? 10;

  return (
    <section 
      id="servicios"
      className={`w-full px-[5cqw] ${props.fontFamily || 'font-sans'}`} 
      style={{ 
        backgroundColor: props.bgColor || '#050505',
        paddingTop: `${paddingV}cqw`,
        paddingBottom: `${paddingV}cqw`
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-[8cqw] border-b pb-4" style={{ borderColor: `${titleColor}30` }}>
          <h2 
            className={`${props.titleFont || 'font-sans'} uppercase tracking-widest opacity-50`}
            style={{ 
              color: titleColor,
              fontSize: `${props.titleSize || 1.5}cqw`
            }}
          >
            {props.sectionTitle || "Nuestros Servicios"}
          </h2>
        </header>

        <div className="flex flex-col">
          {items.map((item, index) => (
            <article 
              key={`s1-${index}`}
              className="group flex flex-col lg:flex-row border-b py-[4cqw] items-start lg:items-center justify-between gap-6 transition-opacity hover:opacity-100 opacity-80"
              style={{ borderColor: `${titleColor}15` }}
            >
              <div className="flex items-center gap-[4cqw] lg:w-1/2">
                <span className="text-[4cqw] font-light opacity-20" style={{ color: titleColor }}>
                  {item.n || `0${index + 1}`}
                </span>
                <h3 
                  className={`${props.titleFont || 'font-sans'} uppercase font-bold tracking-tighter`}
                  style={{ 
                    color: titleColor,
                    fontSize: `${props.itemTitleSize || 3.5}cqw` 
                  }}
                >
                  {item.t || "Servicio"}
                </h3>
              </div>
              <div className="lg:w-1/3">
                <p 
                  className={`${props.descriptionFont || 'font-sans'} leading-tight`}
                  style={{ 
                    color: props.descriptionColor || '#cccccc', 
                    fontSize: `${props.descriptionSize || 1.2}cqw` 
                  }}
                >
                  {item.d}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// VERSION 2: Grid / Cards
export const ServiciosV2 = (props) => {
  const items = props.items && props.items.length > 0 ? props.items : [
    { t: "Estrategia", d: "Camino crítico al éxito." },
    { t: "Ejecución", d: "Productos de alto rendimiento." }
  ];
  const titleColor = props.titleColor || '#ffffff';
  const paddingV = props.paddingV ?? 10;

  return (
    <section 
      id="servicios"
      className={`w-full px-[5cqw] ${props.fontFamily || 'font-sans'}`} 
      style={{ 
        backgroundColor: props.bgColor || '#050505',
        paddingTop: `${paddingV}cqw`,
        paddingBottom: `${paddingV}cqw`
      }}
    >
      <div className="mb-[6cqw] flex items-center gap-4">
        <div className="w-8 h-[1px]" style={{ backgroundColor: titleColor }}></div>
        <h2 
          className={`${props.titleFont || 'font-sans'} uppercase tracking-[0.4em] font-bold`}
          style={{ color: titleColor, fontSize: `${props.titleSize || 1}cqw` }}
        >
          {props.sectionTitle || "Servicios"}
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2cqw]">
          {items.map((item, index) => (
            <div 
              key={`s2-${index}`}
              className="p-[4cqw] border flex flex-col justify-between aspect-square lg:aspect-[4/5] hover:bg-white/[0.02] transition-colors"
              style={{ borderColor: `${titleColor}20` }}
            >
              <h3 
                className={`${props.titleFont || 'font-sans'} leading-[1] font-bold uppercase`}
                style={{ color: titleColor, fontSize: `${props.itemTitleSize || 2.5}cqw` }}
              >
                {item.t}
              </h3>
              
              <div className="space-y-6">
                <div className="w-12 h-[2px]" style={{ backgroundColor: titleColor }}></div>
                <p 
                  className={`${props.descriptionFont || 'font-sans'} leading-snug`}
                  style={{ 
                    color: props.descriptionColor || '#cccccc', 
                    fontSize: `${props.descriptionSize || 1.3}cqw` 
                  }}
                >
                  {item.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// VERSION 3: Bold / Typographic
export const ServiciosV3 = (props) => {
  const items = props.items && props.items.length > 0 ? props.items : [
    { t: "Branding", d: "Historias profundas." },
    { t: "Product", d: "Soluciones reales." }
  ];
  const titleColor = props.titleColor || '#ffffff';
  const paddingV = props.paddingV ?? 10;

  return (
    <section 
      id="servicios"
      className={`w-full px-[5cqw] ${props.fontFamily || 'font-sans'}`} 
      style={{ 
        backgroundColor: props.bgColor || '#050505',
        paddingTop: `${paddingV}cqw`,
        paddingBottom: `${paddingV}cqw`
      }}
    >
      <div className="mb-[10cqw] text-center">
        <h2 
          className={`${props.titleFont || 'font-sans'} uppercase italic tracking-tighter opacity-30`}
          style={{ color: titleColor, fontSize: `${props.titleSize || 2}cqw` }}
        >
          / {props.sectionTitle || "Expertise"}
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto">
        {items.map((item, index) => (
          <article 
            key={`s3-${index}`}
            className="group border-b last:border-none py-[6cqw] flex flex-col lg:flex-row lg:items-end justify-between transition-all"
            style={{ borderColor: `${titleColor}20` }}
          >
            <h3 
              className={`${props.titleFont || 'font-sans'} font-black uppercase tracking-tighter leading-[0.8] group-hover:italic transition-all duration-500`}
              style={{ 
                color: titleColor, 
                fontSize: `${props.itemTitleSize || 8}cqw` 
              }}
            >
              {item.t}
            </h3>
            
            <div className="lg:w-1/4 mt-6 lg:mt-0">
              <p 
                className={`${props.descriptionFont || 'font-sans'} leading-tight text-right`}
                style={{ 
                  color: props.descriptionColor || '#cccccc', 
                  fontSize: `${(props.descriptionSize || 1.2) * 1.1}cqw` 
                }}
              >
                {item.d}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};