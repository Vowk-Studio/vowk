// src/config/constants.js
import defaultLogo from '../components/piezas/assets/logo.webp';

// 1. Variables de Entorno (Branding y Contacto)
export const WS_PRE = import.meta.env.VITE_WS_PRE || '549'; 
export const WS_NUM = import.meta.env.VITE_WS_NUM || '1178290492';
export const WS_NUM2 = import.meta.env.VITE_WS_NUM2 || '1173740130';
export const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Vowk Studio';
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'contacto@vowk.com.ar';

// Redes y Ubicación
export const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/vowk.studio/';
export const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/vowk-studio';
export const LOCATION_TEXT = import.meta.env.VITE_LOCATION_TEXT || 'Buenos Aires, Argentina';

// Lógica de WhatsApp
export const WHATSAPP_MESSAGE = '¡Hola! He visto su sitio web y me gustaría hacer una consulta sobre diseño web.';
export const WHATSAPP_NUMBER = WS_PRE + WS_NUM;
export const WHATSAPP_NUMBER_2 = WS_PRE + WS_NUM2; 
export const WHATSAPP_LINK_1 = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`; 
export const WHATSAPP_LINK_2 = `https://wa.me/${WHATSAPP_NUMBER_2}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// 2. Recursos y Estilos Globales
export const LOGO_URL = defaultLogo; 
export const API_URL = '/api.php'; 
export const API_TIMEOUT = 10000;

export const FONT_OPTIONS = [
  'font-sans', 'font-serif', 'font-mono', 
  'font-playfair', 'font-montserrat', 'font-oswald'
];

// 3. CONFIGURACIONES POR DEFECTO (Estructura para el Editor y la Web)
export const DEFAULT_CONFIGS = {
  nav: {
    version: '1', 
    bgColor: '#ffffff', 
    navHeight: '15',
    navContainerBg: 'rgba(255, 255, 255, 0.7)', 
    showLogo: true, 
    showText: true,
    brandText: COMPANY_NAME, 
    brandFontSize: '40', 
    brandColor: '#1a1a1a', 
    brandFontFamily: 'font-sans',
    logoUrl: defaultLogo, 
    logoSize: '120', 
    logoPosX: 5, 
    logoPosY: 10,
    navPosX: 50, 
    navPosY: 70,
    fontSize: '20', 
    textColor: '#1a1a1a', 
    navFontFamily: 'font-sans',
    fontFamily: 'font-sans',
    paddingY: '10',
    buttonBg: '#000000', 
    buttonTextColor: '#ffffff',
    links: [
      { id: 1, label: 'Inicio', path: 'hero' }, 
      { id: 2, label: 'Servicios', path: 'servicios' },
      { id: 3, label: 'Nosotros', path: 'nosotros' }, 
      { id: 4, label: 'Contacto', path: 'contactos' }
    ]
  },
  hero: {
    version: '1',
    bgColor: '#ffffff',
    title: 'TRANSFORMA TU NEGOCIO',
    fontSize: '8',
    titleColor: '#1a1a1a',
    mainBoxBg: 'rgba(255, 255, 255, 0.6)',
    btnText: 'GET STARTED',
    btnBg: '#000000',
    btnTextColor: '#ffffff',
    secondaryText: 'Click Here',
    secondaryFontSize: '2.5',
    secondaryTextColor: '#ffffff',
    secondaryBoxBg: '#000000',
    fontFamily: 'font-sans',
    paddingY: '80'
  },
  nosotros: { 
    version: '1', 
    bgColor: '#050505', 
    title: 'NUESTRA ESENCIA', 
    secondaryText: 'DISEÑO ESTRATÉGICO',
    description: 'Creamos activos digitales blindados para negocios que buscan escalar con seguridad y elegancia.',
    titleFont: 'font-sans',
    secondaryFont: 'font-sans',
    descriptionFont: 'font-sans',
    titleSize: '6', 
    secondarySize: '2.5',
    descriptionSize: '1.4',
    titleColor: '#ffffff',
    secondaryColor: '#ffffff',
    descriptionColor: '#ffffff', // Corregido el error de escritura (era decriptionColor)
    isBold: true,
    isItalic: false,
    isUnderline: false
  },
  servicios: {
    version: '1',
    sectionTitle: "Nuestros Servicios",
    titleColor: "#000000",
    descriptionColor: "#cccccc",
    bgColor: "#ffffff",
    titleSize: 2.5,
    descriptionSize: 2,
    items: [
      { t: "Desarrollo Web", d: "Sitios optimizados para conversión y alto rendimiento." },
      { t: "Ciberseguridad", d: "Protección integral de tus activos digitales." },
      { t: "Branding", d: "Identidad visual que comunica autoridad y confianza." }
    ],
    itemTitleSize: 3.5
  },
  contactos: {
    version: '1',
    sectionTitle: "Contacto",
    titleColor: '#ffffff',
    glassColor: "rgba(255, 255, 255, 0.1)",
    blurAmount: 10,
    formTitle: "Comencemos tu proyecto",
    buttonLabel: "Enviar Mensaje",
    buttonBg: "#ffffff",
    buttonText: "#000000",
    paddingY: 0,
    socialList: [
      { id: 1, platform: 'instagram', url: INSTAGRAM_URL, visible: true },
      { id: 2, platform: 'linkedin', url: LINKEDIN_URL, visible: true },
      { id: 3, platform: 'mail', url: CONTACT_EMAIL, visible: true },
      { id: 4, platform: 'location', url: LOCATION_TEXT, visible: true }
    ]
  },
  footers: {
    version: '1',
    brandName: COMPANY_NAME,
    bgColor: '#0d0d0e',
    textColor: '#ffffff',
    socialList: [
      { id: 1, platform: 'instagram', url: INSTAGRAM_URL, visible: true },
      { id: 2, platform: 'linkedin', url: LINKEDIN_URL, visible: true }
    ]
  }
};