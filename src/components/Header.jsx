import { Menu, X } from 'lucide-react';
import './Header.css';
import logoVowk from '../assets/logo.webp';
// 1. IMPORTAMOS EL HOOK (ARQUITECTURA MODULAR)
import useNavigation from '../hooks/useNavigation'; 

function Header() {
  // 2. CONECTAMOS LA LÓGICA: Extraemos lo que el Hook calcula por nosotros.
  // Usamos 100px de offset para el scroll y 80px para que el menú se vuelva "sticky".
  const { isMenuOpen, setIsMenuOpen, isSticky } = useNavigation(100, 80);

  // 3. CLASES DINÁMICAS: Se actualizan solas cuando el Hook detecta el scroll.
  const menuClasses = `hidden md:block transition-all duration-500 ${
    isSticky ? 'menu-fixed' : 'menu-inline'
  }`;

  return (
    <header className="relative z-[100] bg-white border-b border-gray-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LADO IZQUIERDO: Logo con efecto hover */}
        <div className="flex-1 flex justify-center md:justify-start z-10">
          <img
            src={logoVowk}
            alt="Logo de Vowk Studio"
            className="h-24 w-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* CENTRO: Menú de navegación Desktop */}
        <nav className={menuClasses}>
          <div className="bg-white/80 backdrop-blur-md rounded-full custom-shadow border border-gray-100 px-18 py-1">
            <ul className="flex justify-center items-center space-x-1">
              <li><a href="#inicio" className="nav-link">Inicio</a></li>
              <li><a href="#servicios" className="nav-link">Servicios</a></li>
              <li>
                <a href="#ciberdefensa" className="ml-2 px-5 py-2 rounded-full text-white text-[11px] font-black uppercase tracking-widest bg-gradient-to-r from-[#00f2ff] via-[#a855f7] to-[#ff00ff] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(0,242,255,0.6)] active:scale-95 flex items-center justify-center">
                  CiberDefensa
                </a>
              </li>
              <li><a href="#nosotros" className="nav-link">Nosotros</a></li>
              <li><a href="#testimonios" className="nav-link">Testimonios</a></li>
              <li><a href="#faq" className="nav-link" translate="no">FAQ</a></li>
            </ul>
          </div>
        </nav>

        {/* LADO DERECHO: Botón hamburguesa (Móvil) */}
        <div className="flex items-center">
          <button
            // Usamos la función prev => !prev para asegurar que el estado sea correcto
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors border border-gray-100"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </button>
          {/* Espaciador para mantener simetría en desktop */}
          <div className="hidden md:block w-16 lg:w-24"></div>
        </div>
      </div>

      {/* MENÚ MÓVIL: Animación basada en el estado isMenuOpen */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-[600px] border-t border-gray-100' : 'max-h-0'
      }`}>
        <ul className="flex flex-col p-6 space-y-4">
          <li><a href="#inicio" className="text-gray-800 font-bold uppercase tracking-widest text-sm">Inicio</a></li>
          <li><a href="#servicios" className="text-gray-800 font-bold uppercase tracking-widest text-sm">Servicios</a></li>
          <li><a href="#nosotros" className="text-gray-800 font-bold uppercase tracking-widest text-sm">Nosotros</a></li>
          <li><a href="#testimonios" className="text-gray-800 font-bold uppercase tracking-widest text-sm">Testimonios</a></li>
          <li><a href="#faq" className="text-gray-800 font-bold uppercase tracking-widest text-sm" translate="no">FAQ</a></li>
          <li>
            <a href="#ciberdefensa" className="w-full py-3 rounded-xl text-white text-[11px] font-black uppercase tracking-widest bg-gradient-to-r from-[#00f2ff] via-[#a855f7] to-[#ff00ff] flex items-center justify-center">
              CiberDefensa
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;