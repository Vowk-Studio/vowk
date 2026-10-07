import React from 'react';

const AboutUs = () => {
  return (
    /* Sección con fondo negro profundo para transmitir lujo y autoridad */
    <section id="nosotros" className="bg-[#050505] text-white py-24 md:py-32 relative overflow-hidden">
      
      {/* Luces de fondo (Glow Effects) para estética de software de élite */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Badge Neuro-Marketing */}
          <div className="inline-block px-4 py-1.5 mb-10 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-blue-400">
              Vowk: Desarrollo de Alta Calidad & Seguridad Experta
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Columna Izquierda: El Manifiesto Klaric */}
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-8 tracking-tighter text-white">
                No solo entregamos tecnología. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                  Construimos la confianza de tu marca.
                </span>
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Un buen desarrollo debe ser invisible: <strong className="text-white">si es fluido y seguro, el usuario confía</strong>. En Vowk, combinamos un diseño de alto nivel con una arquitectura protegida por expertos, logrando que tu plataforma sea tu activo más sólido.
              </p>
            </div>

            {/* Columna Derecha: El Factor Humano (La mentalidad de Vowk) */}
            <div className="space-y-10">
              <div className="border-l-2 border-blue-500 pl-6">
                <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-widest">Agilidad y Respaldo.</h4>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
Somos un equipo enfocado en resultados. Entendemos que la tecnología es el motor de tu empresa y nuestra obsesión es asegurar que funcione sin fallas y con seguridad extra en un mercado exigente.
                </p>
              </div>

              <div className="border-l-2 border-purple-500 pl-6">
                <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-widest">Confianza de Acero</h4>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  Nuestro equipo no solo es confiable, es incansable. Nos apasiona el desarrollo porque entendemos que cada línea de código es una oportunidad para elevar el estatus de tu empresa. Somos trabajadores, somos Vowk.
                </p>
              </div>
            </div>
          </div>

          {/* Métricas de Valor con descripciones (Neuro-Stats) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-24 pt-12 border-t border-white/5">
            
            <div className="group">
              <div className="text-4xl font-light text-white mb-2 tracking-tighter group-hover:text-blue-400 transition-colors duration-300">01</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-3">Diseño con propósito</div>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
Creamos experiencias claras que eliminan el ruido. Si el usuario encuentra lo que busca rápido y sin dudas, tu negocio gana.
              </p>
            </div>

            <div className="group">
              <div className="text-4xl font-light text-white mb-2 tracking-tighter group-hover:text-indigo-400 transition-colors duration-300">02</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-3">Autoridad visual</div>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                Estética que posiciona tu marca como líder. Si tu plataforma transmite profesionalismo, el mercado te tratará como una referencia.
              </p>
            </div>

            <div className="group">
              <div className="text-4xl font-light text-white mb-2 tracking-tighter group-hover:text-purple-400 transition-colors duration-300">03</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-3">Infraestructura segura</div>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
Desarrollo de alta calidad con un plus de seguridad experta. Protegemos tu información con estándares profesionales desde la primera línea.
              </p>
            </div>

            <div className="group">
              <div className="text-4xl font-light text-white mb-2 tracking-tighter group-hover:text-pink-400 transition-colors duration-300">04</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-3">ejecucioin de alto nivel</div>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
Sin excusas ni demoras innecesarias. Somos un equipo de ejecución directa enfocado en entregar soluciones que funcionan desde el primer día.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;