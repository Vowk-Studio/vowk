import { useState } from 'react';
// 1. Cambiamos 'motion' por 'm' y traemos el cargador
import { m, LazyMotion, domAnimation } from 'framer-motion'; 
import ContactForm from './ContactForm.jsx';
import heroImage from '../assets/hero.webp';

const pageData = {
  heroImageUrl: heroImage,
};

function Hero() {
  const [submissionMessage, setSubmissionMessage] = useState(null);

  const onFormSubmit = async (data) => {
    setSubmissionMessage('¡Gracias! Tu consulta ha sido enviada con éxito.');
  };

  return (
    // 2. Envolvemos con LazyMotion usando las funciones básicas de DOM
    <LazyMotion features={domAnimation}>
      <section id="inicio" className="relative flex justify-center p-4">
        <div className="w-full flex flex-col md:flex-row relative z-10">

          {/* 3. Usamos <m.div> en lugar de <motion.div> */}
          <m.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            className="w-full max-w-sm mx-auto md:w-[30%] relative z-20 md:ml-10 md:mr-[-10%] order-2 md:order-1 mt-6 md:mt-0"
          >
            <ContactForm
              submissionMessage={submissionMessage}
              onSubmit={onFormSubmit}
            />
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-center items-center relative rounded-lg overflow-hidden w-full h-[400px] md:h-auto md:w-[70%] md:ml-6 order-1 md:order-2
                       before:absolute before:inset-0 before:z-0 
                       before:bg-gradient-to-t before:from-black/80 before:via-black/40 before:to-black/20"
            style={{
              backgroundImage: `url(${pageData.heroImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <m.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative z-10 w-full flex justify-center md:justify-end md:pr-[10%] pt-32 md:pt-[30%] px-4">
              <div className="max-w-2xl">
                <h1 className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-center leading-snug m-0 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                  Soluciones digitales innovadoras:<br /> 
                  <span className="text-indigo-400">diseño web</span>, 
                  <span className="text-indigo-400"> desarrollo</span> y 
                  <span className="text-indigo-400"> ciberseguridad </span><br />
                  para potenciar tu negocio
                </h1>
              </div>
            </m.div>
          </m.div>

        </div>
      </section>
    </LazyMotion>
  );
}

export default Hero;