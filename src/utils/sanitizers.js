/**
 * Limpia el texto para evitar inyecciones de HTML/Scripts básico
 * y recorta espacios innecesarios.
 */
export const sanitizeText = (text) => {
  if (typeof text !== 'string') return '';
  
  return text
    .replace(/<[^>]*>?/gm, '') // Elimina etiquetas HTML
    .trimStart(); // Permite espacios al final mientras escriben, pero limpia el inicio
};

/**
 * Valida que el color sea un Hexadecimal válido.
 * Si no lo es, devuelve un blanco por defecto o el último valor válido.
 */
export const sanitizeColor = (color) => {
  const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/i;
  return hexRegex.test(color) ? color : '#ffffff';
};

/**
 * Limpia links para evitar protocolos maliciosos como javascript:
 */
export const sanitizeLink = (link) => {
  const clean = link.replace(/\s/g, '');
  // Solo permitimos links que empiecen con http, https, # o /
  if (/^(https?:\/\/|#|\/)/i.test(clean)) {
    return clean;
  }
  return '';
};