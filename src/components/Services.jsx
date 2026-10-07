import { Rocket, Code, Layout, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion'; // Importamos motion

function Services() {
  const services = [
    {
      icon: <Layout className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Diseño y Blindaje Digital",
      description: "No es solo una web, es tu activo más valioso. Fusionamos diseño de élite en Figma con arquitectura de seguridad. Mientras otros dejan puertas traseras abiertas, nosotros blindamos tu reputación con código limpio y protección contra ataques.",
      benefit: "Autoridad y Seguridad Total."
    },
    {
      icon: <Code className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Ingeniería de Operaciones",
      description: "Software diseñado para eliminar el error humano. Automatizamos tus procesos críticos para que recuperes el control de tu tiempo. Si tu sistema no escala, tu negocio tampoco.",
      benefit: "Eficiencia sin fricción."
    },
    {
      icon: <Rocket className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Dominio de Mercado (SEO)",
      description: "Hackeamos la visibilidad de tu marca. Aplicamos estrategias de comunicación y SEO técnico para que quienes buscan tu solución, te encuentren primero a vos y no a tu competencia.",
      benefit: "Liderazgo en tu sector."
    }
  ];
  return (
    <section id="servicios" className="py-20 md:py-28 bg-[#fafafa]">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Encabezado Estratégico - Animación de bloque */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
            Soluciones que impulsan tu <span className="text-indigo-600">éxito</span>
          </h2>
          <p className="text-lg text-black leading-relaxed italic">
            "Véndele a la mente, no a la gente." Elevamos tu modelo de negocio con tecnología inteligente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              // Animación escalonada: cada tarjeta espera 0.2s más que la anterior
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2, // El efecto "cascada"
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              className="group bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out flex flex-col h-full"
            >
              {/* Icono Estilizado */}
              <div className="w-16 h-16 bg-indigo-50 text-indigo-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-indigo-100 shadow-lg">
                {service.icon}
              </div>

              {/* Contenido Principal */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-black mb-8 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>

              {/* Botón de Acción */}
              <a 
                href="#inicio" 
                className="group/btn relative inline-flex items-center justify-between bg-gray-50 hover:bg-indigo-600 px-6 py-4 rounded-2xl transition-all duration-300 overflow-hidden"
              aria-label={`Saber más sobre ${service.title}`}
              >
                <span className="text-sm font-bold text-indigo-700 group-hover/btn:text-white transition-colors duration-300 uppercase tracking-widest">
                  {service.benefit}
                </span>
                <ArrowRight className="w-5 h-5 text-indigo-700 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" />
                
                <div className="absolute inset-0 w-full h-full bg-white/10 -translateX-full group-hover/btn:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;