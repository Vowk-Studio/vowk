/**
 * Convierte un valor de píxeles de diseño (base 1440) a unidades cqw.
 * Esto asegura que los tamaños se mantengan proporcionales al contenedor.
 */
export const toCQ = (size) => {
  if (!size) return '0cqw';
  return `${(size / 1440) * 100}cqw`;
};

/**
 * Realiza un scroll suave hacia una sección específica.
 * @param {string} id - El ID de la sección (ej: "servicios")
 */
export const scrollToSection = (id) => {
  if (!id) return;
  // Convertimos a minúsculas para evitar errores de tipeo en el editor
  const targetId = id.toLowerCase().trim();
  const element = document.getElementById(targetId);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Sección con id "${targetId}" no encontrada.`);
  }
};