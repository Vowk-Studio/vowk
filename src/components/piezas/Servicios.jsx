export const ServiciosV1 = (props) => {
  const bgColor = props.bgColor || '#050505';
  const titleColor = props.titleColor || '#ffffff';
  const descColor = props.descriptionColor || '#cccccc';

  // Datos de ejemplo por si el usuario no carga nada
  const serviciosDefault = [
    { n: "01", t: "Diseño UI/UX", d: "Interfaces intuitivas centradas en la experiencia del usuario final." },
    { n: "02", t: "Desarrollo Web", d: "Sistemas robustos y escalables utilizando las últimas tecnologías." },
    { n: "03", t: "Branding", d: "Identidad visual que comunica los valores core de tu marca." }
  ];

  return (
    <section 
      id="servicios"
      className={`w-full py-[10cqw] px-[5cqw] ${props.fontFamily || 'font-sans'}`} 
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* CABECERA DE SECCIÓN */}
        <div className="mb-[8cqw] border-b pb-4" style={{ borderColor: `${titleColor}30` }}>
          <h2 
            className={`${props.titleFont || 'font-sans'} uppercase tracking-widest opacity-50`}
            style={{ color: titleColor,
            fontSize: `${props.titleSize || 1.5}cqw`
            }}
          >
            {props.sectionTitle || "Nuestros Servicios"}
          </h2>
        </div>

        {/* LISTA DE SERVICIOS */}
        <div className="flex flex-col">
          {(props.items || serviciosDefault).map((item, index) => (
            <div 
              key={index}
              className="group flex flex-col lg:flex-row border-b py-[4cqw] items-start lg:items-center justify-between gap-6 transition-opacity hover:opacity-100 opacity-80"
              style={{ borderColor: `${titleColor}15` }}
            >
              {/* NÚMERO Y TÍTULO */}
              <div className="flex items-center gap-[4cqw] lg:w-1/2">
                <span 
                  className="text-[4cqw] font-light opacity-20"
                  style={{ color: titleColor }}
                >
                  {item.n || `0${index + 1}`}
                </span>
                <h3 
                  className={`${props.titleFont || 'font-sans'} text-[3.5cqw] uppercase font-bold tracking-tighter`}
                  style={{ color: titleColor }}
                >
                  {item.t || "Servicio"}
                </h3>
              </div>

              {/* DESCRIPCIÓN */}
              <div className="lg:w-1/3">
                <p 
                  className={`${props.descriptionFont || 'font-sans'} leading-tight`}
                  style={{ 
                    color: descColor, 
                    fontSize: `${props.descriptionSize || 1.2}cqw` 
                  }}
                >
                  {item.d || "Descripción detallada del servicio que ofreces a tus clientes."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ServiciosV2 = (props) => {
  const bgColor = props.bgColor || '#050505';
  const titleColor = props.titleColor || '#ffffff';
  const descColor = props.descriptionColor || '#cccccc';

  const serviciosDefault = [
    { t: "Estrategia", d: "Definimos el camino crítico para el éxito de tu modelo de negocio." },
    { t: "Creatividad", d: "Conceptos visuales que rompen el ruido del mercado actual." },
    { t: "Ejecución", d: "Transformamos ideas en productos digitales de alto rendimiento." }
  ];

  return (
    <section 
      id="servicios"
      className={`w-full py-[10cqw] px-[5cqw] ${props.fontFamily || 'font-sans'}`} 
      style={{ backgroundColor: bgColor }}>

        <div className="mb-[6cqw] flex items-center gap-4">
  <div className="w-8 h-[1px]" style={{ backgroundColor: titleColor }}></div>
  <h2 
    className={`${props.titleFont || 'font-sans'} uppercase tracking-[0.4em] text-[1cqw] font-bold`}
    style={{ color: titleColor }}
  >
    {props.sectionTitle || "Servicios"}
  </h2></div>
      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2cqw]">
          {(props.items || serviciosDefault).map((item, index) => (
            <div 
              key={index}
              className="p-[4cqw] border border-white/10 flex flex-col justify-between aspect-square lg:aspect-[4/5] hover:bg-white/[0.02] transition-colors"
              style={{ borderColor: `${titleColor}20` }}
            >
              <h3 
                className={`${props.titleFont || 'font-sans'} text-[2.5cqw] leading-[1] font-bold uppercase`}
                style={{ color: titleColor }}
              >
                {item.t}
              </h3>
              
              <div>
                <div className="w-12 h-[2px] mb-6" style={{ backgroundColor: titleColor }}></div>
                <p 
                  className={`${props.descriptionFont || 'font-sans'} leading-snug`}
                  style={{ 
                    color: descColor, 
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

export const ServiciosV3 = (props) => {
  const bgColor = props.bgColor || '#050505';
  const titleColor = props.titleColor || '#ffffff';
  const descColor = props.descriptionColor || '#cccccc';

  const serviciosDefault = [
    { t: "Branding", d: "Creamos marcas que no solo se ven bien, sino que cuentan historias profundas." },
    { t: "Product", d: "Desarrollamos herramientas digitales que resuelven problemas reales." },
    { t: "Motion", d: "Damos vida a las ideas a través del movimiento y la narrativa visual." }
  ];

  return (
    <section 
      id="servicios"
      className={`w-full py-[10cqw] px-[5cqw] ${props.fontFamily || 'font-sans'}`} 
      style={{ backgroundColor: bgColor }}
    >
      <div className="mb-[10cqw] text-center">
  <h2 
    className={`${props.titleFont || 'font-sans'} uppercase italic tracking-tighter opacity-30 text-[2cqw]`}
    style={{ color: titleColor }}
  >
    / {props.sectionTitle || "Expertise"}
  </h2>
</div>
      <div className="max-w-[1400px] mx-auto">
        {(props.items || serviciosDefault).map((item, index) => (
          <div 
            key={index}
            className="group border-b last:border-none py-[6cqw] flex flex-col lg:flex-row lg:items-end justify-between"
            style={{ borderColor: `${titleColor}20` }}
          >
            {/* Título Masivo */}
            <h3 
              className={`${props.titleFont || 'font-sans'} text-[8cqw] font-black uppercase tracking-tighter leading-[0.8] group-hover:italic transition-all duration-500`}
              style={{ color: titleColor }}
            >
              {item.t}
            </h3>
            
            {/* Descripción Lateral */}
            <div className="lg:w-1/4 mt-6 lg:mt-0">
              <p 
                className={`${props.descriptionFont || 'font-sans'} leading-tight text-right`}
                style={{ 
                  color: descColor, 
                  fontSize: `${(props.descriptionSize || 1.2) * 1.1}cqw` // Un toque más grande por el estilo
                }}
              >
                {item.d}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};