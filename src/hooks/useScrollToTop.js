import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * RESETEADOR DE POSICIÓN GLOBAL
 * Asegura que el viewport vuelva al inicio (0,0) al detectar cambios de ruta.
 */
const useScrollToTop = () => {
  const { pathname } = useLocation(); // Escucha la URL actual del Router.

  useEffect(() => {
    // RESET: Fuerza al navegador a subir al tope cada vez que el 'path' cambia.
    window.scrollTo(0, 0);
  }, [pathname]); // Se dispara únicamente cuando la ruta en la barra de direcciones cambia.
};

export default useScrollToTop;