import { lazy, Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// 1. Cargamos el motor liviano
import { LazyMotion, domAnimation } from 'framer-motion';

// IMPORTACIÓN DE CONSTANTES Y HOOKS
import { DEFAULT_CONFIGS } from './config/constants';
import useScrollToTop from './hooks/useScrollToTop';

// COMPONENTES CRÍTICOS
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// COMPONENTES LAZY (Code Splitting)
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

function ScrollManager() {
  useScrollToTop();
  return null;
}

function App() {
  const config = DEFAULT_CONFIGS;

  const LandingPage = (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased font-sans overflow-x-hidden relative">
      <Helmet>
        <title>{config.nav.brandText} | Diseño y Desarrollo Web</title>
        <meta name="description" content="Vowk Studio: Expertos en activos digitales blindados y ciberdefensa." />
      </Helmet>

      <Header {...config.nav} />
      
      <main>
        <section id="hero">
          <Hero {...config.hero} />
        </section>

        <Suspense fallback={<SectionLoader />}>
          <VowkCyberDefense />
          
          <section id="servicios">
            <Services {...config.servicios} />
          </section>

          <Promo />
          <Testimonials />

          <section id="nosotros">
            <AboutUs {...config.nosotros} />
          </section>

          <FAQ />

          <section id="contactos">
            <Contact {...config.contactos} />
          </section>
          
          <Footer {...config.footers} />
        </Suspense>
      </main>

      <FloatingWhatsApp />
    </div>
  );

  return (
    <HelmetProvider>
      {/* 2. Envolvemos con LazyMotion para activar el modo liviano en toda la web */}
      <LazyMotion features={domAnimation} strict>
        <Router>
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
      </LazyMotion>
    </HelmetProvider>
  );
}

export default App;