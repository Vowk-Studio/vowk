import { Helmet, HelmetProvider } from 'react-helmet-async';

// Importa todos los componentes de tu carpeta 'components'
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Promo from './components/Promo';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50 text-gray-800 antialiased font-sans overflow-x-hidden relative">
        <Helmet>
          <title>Diseño y Desarrollo Web Profesional en Argentina | Vowk Studio</title>
          <meta name="description" content="Vowk Studio: Expertos en diseño web, desarrollo de software y marketing digital a medida. Creamos sitios web, tiendas en línea y soluciones digitales para tu negocio en Argentina." />
          <meta name="keywords" content="diseño web, desarrollo web, desarrollo de software, landing page, páginas web, software a medida, tienda online, ecommerce, marketing digital, seo, programación, argentina" />
        </Helmet>

        <Header />
        <Hero />
        <Services />
        <Promo />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </HelmetProvider>
  );
}

export default App;