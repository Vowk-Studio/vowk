import { 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
  Facebook, 
  X, 
  Link as LinkIcon 
} from 'lucide-react';

/**
 * Diccionario de componentes de iconos para redes sociales.
 * Se exporta para que los componentes puedan renderizar el icono correcto según la plataforma.
 */
export const ICON_COMPONENTS = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  x: X,
  mail: Mail,
  location: MapPin
};

/**
 * Formatea enlaces específicos para redes sociales y contacto.
 * Maneja protocolos especiales para email y mapas.
 */
export const getSocialHref = (platform, url) => {
  if (!url) return '#';
  const p = platform?.toLowerCase();
  
  // Caso 1: Email
  if (p === 'mail') {
    return url.startsWith('mailto:') ? url : `mailto:${url}`;
  }
  
  // Caso 2: Ubicación (Google Maps)
  if (p === 'location') {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(url)}`;
  }
  
  // Caso 3: Enlaces convencionales (aseguramos protocolo)
  const cleanLink = url.trim();
  return cleanLink.startsWith('http') ? cleanLink : `https://${cleanLink}`;
};

/**
 * Procesa y valida enlaces para botones y menús.
 * Prioriza WhatsApp si el campo está presente.
 */
export const getValidLink = (link, whatsapp) => {
  // 1. Prioridad: WhatsApp
  if (whatsapp && whatsapp.trim() !== '') {
    // Limpiamos el número de cualquier caracter que no sea número
    const cleanNumber = whatsapp.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNumber}`;
  }

  // 2. Fallback: Enlace convencional
  if (link && link.trim() !== '') {
    const cleanLink = link.trim();
    // Validamos que tenga el protocolo para evitar links relativos
    return cleanLink.startsWith('http') ? cleanLink : `https://${cleanLink}`;
  }

  // 3. Si no hay nada, devuelve null
  return null;
};