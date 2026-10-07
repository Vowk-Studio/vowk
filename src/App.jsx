import { lazy, Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 1. IMPORTACIÓN DEL ASSET DE RUTAS
import useScrollToTop from './hooks/useScrollToTop';

// --- COMPONENTES CRÍTICOS ---
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// --- COMPONENTES LAZY (Code Splitting) ---
const VowkCyberDefense = lazy(() => import('./components/VowkCyberDefense'));
const Services = lazy(() => import('./components/Services'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Promo = lazy(() => import('./components/Promo'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Editor = lazy(() => import('./components/Editor'));

const SectionLoader = () => <div className="h-20 bg-gray-50/50 animate-pulse" />;

// 2. COMPONENTE WRAPPER PARA EL HOOK
// El hook useScrollToTop necesita estar DENTRO del contexto del Router
function ScrollManager() {
  useScrollToTop();
  return null;
}

function App() {
  // 3. LANDING ESTRUCTURAL
  const LandingPage = (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased font-sans overflow-x-hidden relative">
      <Helmet>
        <title>Diseño y Desarrollo Web Profesional | Vowk Studio</title>
        <meta name="description" content="Vowk Studio: Expertos en diseño web, desarrollo de software y ciberdefensa a medida." />
      </Helmet>

      <Header />
      <Hero />

      <Suspense fallback={<SectionLoader />}>
        <VowkCyberDefense />
        <Services />
        <Promo />
        <Testimonials />
        <AboutUs />
        <FAQ />
        <Contact />
        <Footer />
      </Suspense>

      <FloatingWhatsApp />
    </div>
  );

  return (
    <HelmetProvider>
      <Router>
        {/* 4. INYECCIÓN DE LA LÓGICA DE NAVEGACIÓN */}
        <ScrollManager /> 
        
        <Routes>
          <Route path="/" element={LandingPage} />
          
          <Route 
            path="/Editor" 
            element={
              <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Cargando Editor...</div>}>
                <Editor />
              </Suspense>
            } 
          />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;