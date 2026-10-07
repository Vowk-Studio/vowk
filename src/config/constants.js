// src/config/constants.js

// Variables desde el .env
export const WS_PRE = import.meta.env.VITE_WS_PRE || '549'; 
export const WS_NUM = import.meta.env.VITE_WS_NUM || '1178290492';
export const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Vowk Studio';
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'vowktechstudio@gmail.com';

// NUEVAS: Redes y Ubicación
export const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/vowk.studio/';
export const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/vowk-studio';
export const LOCATION_TEXT = import.meta.env.VITE_LOCATION_TEXT || 'Buenos Aires, Argentina';

// Lógica de WhatsApp
export const WHATSAPP_MESSAGE = '¡Hola! He visto su sitio web y me gustaría hacer una consulta sobre diseño web.';
export const WHATSAPP_NUMBER = WS_PRE + WS_NUM;

// Rutas y API
export const LOGO_URL = '/logo.webp'; 
export const API_URL = '/api.php'; 
export const API_TIMEOUT = 10000;