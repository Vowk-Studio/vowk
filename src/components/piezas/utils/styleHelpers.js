/**
 * ARCHIVO DE INTELIGENCIA ESTÉTICA (VOWK ASSET)
 * Centraliza la elasticidad y los estilos seguros para el visor.
 */

const VERSION_BASE = {
  v1: { bg: '#ffffff', title: '#000000', tSize: 8, sSize: 2.5, dSize: 1.5 },
  v2: { bg: '#050505', title: '#ffffff', tSize: 8, sSize: 2.5, dSize: 1.5 },
  v3: { bg: '#ffffff', title: '#000000', tSize: 10, sSize: 2, dSize: 1.5 }
};

/**
 * Normaliza valores numéricos a unidades de contenedor (cqw) 
 * basados en un canvas estándar de 1440px.
 */
export const toCQ = (size) => {
  if (!size) return '0cqw';
  if (typeof size === 'string') return size;
  return `${(size / 1440) * 100}cqw`;
};

/**
 * Retorna objeto de estilos basado en propiedades y versión para secciones generales.
 */
export const getSafeStyles = (props, version = 'v1') => {
  const base = VERSION_BASE[version] || VERSION_BASE.v1;
  return {
    section: {
      backgroundColor: props.bgColor || base.bg,
    },
    title: {
      color: props.titleColor || base.title,
      fontSize: `${props.titleSize || base.tSize}cqw`,
    },
    secondary: {
      color: props.secondaryColor || props.titleColor || base.title,
      fontSize: `${props.secondarySize || base.sSize}cqw`,
    },
    description: {
      color: props.descriptionColor || (version === 'v3' ? '#ffffff' : props.titleColor || base.title),
      fontSize: `${props.descriptionSize || base.dSize}cqw`,
    }
  };
};

/**
 * Procesa específicamente los estilos de los Footers.
 * Asegura que el padding sea elástico y los colores tengan fallback.
 */
export const getFooterStyles = (props) => {
  return {
    footer: {
      backgroundColor: props.bgColor || '#000000',
      color: props.textColor || '#ffffff',
      paddingTop: toCQ(props.paddingY || 60),
      paddingBottom: toCQ(props.paddingY || 60),
      paddingLeft: '5cqw',
      paddingRight: '5cqw',
    },
    brand: {
      fontSize: toCQ(props.brandSize || 60), // Valor por defecto para h2 del footer
    }
  };
};

/**
 * Maneja el desplazamiento del DOM hacia el elemento especificado.
 */
export const scrollToSection = (id) => {
  if (!id) return;
  const targetId = id.toLowerCase().trim();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};