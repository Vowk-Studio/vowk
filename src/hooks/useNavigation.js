import { useState, useEffect } from 'react';

/**
 * ARCHIVO DE INTELIGENCIA DE NAVEGACIÓN (VOWK ASSET)
 * Centraliza la lógica de UI y el comportamiento del scroll suave.
 * * @param {number} offsetValue - Espacio (px) para que el Header no tape el contenido.
 * @param {number} stickyThreshold - Punto de scroll donde el Header cambia su estética.
 */
const useNavigation = (offsetValue = 100, stickyThreshold = 80) => {
  // ESTADOS DE INTERFAZ: Memoria para el menú móvil y el estado visual del Header.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // VIGILANTE DE SCROLL: Actualiza el estado sticky según la posición vertical.
    const handleScroll = () => {
      setIsSticky(window.scrollY > stickyThreshold);
    };

    // INTERCEPTOR ESTRATÉGICO: Captura clics en anclas (#) para aplicar scroll suave.
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a'); // Asegura capturar el link aunque se toque un icono interno.
      
      // VALIDACIÓN DE SEGURIDAD: Solo intercepta si el destino es interno y del mismo dominio.
      if (target && target.hash && target.origin === window.location.origin) {
        e.preventDefault();
        const id = target.hash.slice(1);
        const element = document.getElementById(id);

        if (element) {
          // CÁLCULO DE COORDENADAS: Medición precisa del elemento respecto al cuerpo del documento.
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          
          // COMPENSACIÓN: Restamos el offset para un aterrizaje visual perfecto.
          const offsetPosition = elementPosition - offsetValue;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // UX: Cierre automático del menú colapsable tras la navegación.
          setIsMenuOpen(false);
        }
      }
    };

    // REGISTRO DE EVENTOS: Suscripción a las acciones del navegador.
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleAnchorClick);

    // LIMPIEZA (CLEANUP): Vital para prevenir fugas de memoria (Memory Leaks).
    // Esto elimina los 'listeners' cuando el componente se destruye.
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [offsetValue, stickyThreshold]); // Se re-ejecuta solo si cambian los parámetros de configuración.

  return { isMenuOpen, setIsMenuOpen, isSticky };
};

export default useNavigation;