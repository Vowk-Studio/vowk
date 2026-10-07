import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const pageData = {
  faqs: [
    {
      question: '¿Qué es una landing page y por qué la necesito?',
      answer: 'Es tu vendedor 24/7. A diferencia de una web clásica, está diseñada con un único objetivo: convertir visitantes en clientes reales eliminando distracciones.'
    },
    {
      question: '¿Cuánto tiempo tardan en crear un sitio web?',
      answer: 'La velocidad es nuestra aliada. Una Landing Express puede estar lista en 72hs, mientras que proyectos más complejos suelen llevar de 1 a 2 semanas.'
    },
    {
      question: '¿Qué tipo de software desarrollan?',
      answer: 'Creamos herramientas inteligentes: desde sistemas para automatizar tu administración hasta aplicaciones personalizadas que te ahorran horas de trabajo manual.'
    },
    {
      question: '¿Ofrecen servicios de SEO?',
      answer: 'Absolutamente. No solo diseñamos bonito, optimizamos el ADN de tu página para que Google te encuentre y tus clientes te elijan.'
    }
  ],
};

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Encabezado con Neuro-copy */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            <HelpCircle className="w-3 h-3" /> Soporte Vowk
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
            DESPEJA <span className="text-indigo-600">TUS DUDAS</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm font-medium uppercase tracking-widest italic">
            "La claridad es el primer paso hacia la conversión."
          </p>
        </div>

        {/* Acordeón Estilizado */}
        <div className="max-w-3xl mx-auto space-y-4">
          {pageData.faqs.map((faq, index) => {
            const isOpen = openFAQ === index;
            return (
              <div 
                key={index} 
                className={`transition-all duration-300 rounded-[2rem] border-2 ${
                  isOpen ? 'border-indigo-600 bg-white shadow-xl shadow-indigo-100' : 'border-gray-50 bg-gray-50/50'
                }`}
              >
                <button
                  onClick={() => setOpenFAQ(isOpen ? null : index)}
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center group"
                >
                  <span className={`text-lg md:text-xl font-black uppercase tracking-tighter transition-colors ${
                    isOpen ? 'text-indigo-600' : 'text-gray-900 group-hover:text-indigo-600'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-all duration-300 ${
                    isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-white text-gray-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-8 pt-0 text-gray-600 text-base leading-relaxed font-medium">
                    <div className="h-[1px] w-12 bg-indigo-200 mb-4"></div>
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cierre de sección sutil */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2">
            ¿Tenés otra consulta? <span className="text-indigo-600 cursor-pointer hover:underline flex items-center gap-1"> <MessageCircle className="w-3 h-3" /> Hablá con un experto</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;