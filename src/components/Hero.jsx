import { useState } from 'react';
import ContactForm from './ContactForm.jsx'; // Usamos la extensión explícita para resolver el error.

const pageData = {
  heroImageUrl: 'hero.png',
};

function Hero() {
  const [submissionMessage, setSubmissionMessage] = useState(null);

  const onFormSubmit = (data) => {
    console.log('Datos del formulario:', data);
    setSubmissionMessage('¡Gracias! Tu consulta ha sido enviada con éxito.');
  };

  return (
    <main id="inicio" className="relative flex justify-center p-4">
      
      {/* Contenedor principal: w-full y flex-row en desktop */}
      <div className="w-full flex flex-col md:flex-row relative z-10">

        {/* 1. Contenedor del Formulario (30% ancho en desktop, un poco separado y superpuesto) */}
        <div className="w-full max-w-sm mx-auto md:w-[30%] relative z-20 md:ml-10 md:mr-[-10%]">
          <ContactForm
            submissionMessage={submissionMessage}
            onSubmit={onFormSubmit}
          />
        </div>

        {/* 2. Contenedor de la Imagen (70% ancho en desktop) */}
        <div
          className="hidden md:flex justify-center items-center relative rounded-lg w-full md:w-[70%] md:ml-6"
          style={{
            backgroundImage: `url(${pageData.heroImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
          }}
        >
          
          {/* Texto */}
          <div className="relative z-10 md:pt-[35%]">
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold text-center leading-snug m-0 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)]">
              “Creamos soluciones digitales innovadoras:<br></br> <span className="text-indigo-400">diseño</span>, <span className="text-indigo-400">desarrollo</span> y <span className="text-indigo-400">tecnología</span><br></br> para tu negocio"
            </h3>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Hero;
