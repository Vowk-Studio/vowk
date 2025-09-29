import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

// Importamos la imagen y le damos un nombre
import LogoImg from '../assets/logo.png'; // Ajustá la ruta según donde esté tu logo

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); 
  
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  
  const [stickyOffset, setStickyOffset] = useState(0);

  useEffect(() => {
    if (menuRef.current) {
        const offset = menuRef.current.offsetTop;
        setStickyOffset(offset);
    }
  }, []);

  useEffect(() => {
    if (stickyOffset === 0) return; 

    const handleScroll = () => {
      if (window.scrollY > stickyOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stickyOffset]);

  const menuClasses = `hidden md:block w-full max-w-6xl 2xl:max-w-[1400px] bg-white rounded-full custom-shadow p-2 transition-all duration-300 ${isSticky ? 'menu-fixed' : 'menu-absolute'}`;
  
  const menuHeight = menuRef.current?.offsetHeight || 0; 

  return (
    <header ref={headerRef} className="bg-white p-4 z-50 shadow-md header-relative pt-10">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex flex-col items-center md:items-start md:mb-0 relative top-[-3rem]">
          {/* Usamos la importación */}
          <img
            src={LogoImg}
            alt="Logo de Vowk Studio"
            className="h-20 md:h-30 w-auto"
          />
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Abrir o cerrar el menú de navegación"
        >
          {isMenuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
        </button>
      </div>
      <nav ref={menuRef} className={menuClasses}>
        <ul className="flex justify-center items-center space-x-6 lg:space-x-8">
          <li><a href="#inicio" className="hover:text-blue-600 transition-colors font-medium">Inicio</a></li>
          <li><a href="#servicios" className="hover:text-blue-600 transition-colors font-medium">Servicios</a></li>
          <li><a href="#portafolio" className="hover:text-blue-600 transition-colors font-medium">Portafolio</a></li>
          <li><a href="#testimonios" className="hover:text-blue-600 transition-colors font-medium">Testimonios</a></li>
          <li><a href="#faq" className="hover:text-blue-600 transition-colors font-medium" translate="no">FAQ</a></li>
        </ul>
      </nav>
      
      {isSticky && <div style={{ height: menuHeight }} className="hidden md:block"></div>}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg py-4 transition-all duration-300">
          <ul className="flex flex-col space-y-4 px-6">
            <li><a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block text-gray-800 hover:text-blue-600 font-medium py-2">Inicio</a></li>
            <li><a href="#servicios" onClick={() => setIsMenuOpen(false)} className="block text-gray-800 hover:text-blue-600 font-medium py-2">Servicios</a></li>
            <li><a href="#portafolio" onClick={() => setIsMenuOpen(false)} className="block text-gray-800 hover:text-blue-600 font-medium py-2">Portafolio</a></li>
            <li><a href="#testimonios" onClick={() => setIsMenuOpen(false)} className="block text-gray-800 hover:text-blue-600 font-medium py-2">Testimonios</a></li>
            <li><a href="#faq" onClick={() => setIsMenuOpen(false)} className="block text-gray-800 hover:text-blue-600 font-medium py-2">FAQ</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
