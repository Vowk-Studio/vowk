import { useState } from 'react';

const pageData = {
  faqs: [
    {
      question: '¿Qué es una landing page y por qué la necesito?',
      answer: 'Es una página web de una sola sección, diseñada para una campaña de marketing específica. Es ideal para negocios que quieren generar contactos y ventas de manera rápida y efectiva.'
    },
    {
      question: '¿Cuánto tiempo tardan en crear un sitio web?',
      answer: 'El tiempo varía según la complejidad del proyecto, pero una landing page profesional puede estar lista en 1 o 2 semanas.'
    },
    {
      question: '¿Qué tipo de software desarrollan?',
      answer: 'Desarrollamos software a medida para automatizar procesos, crear aplicaciones internas, sistemas de gestión y plataformas personalizadas que se adaptan a las necesidades de tu empresa.'
    },
    {
      question: '¿Ofrecen servicios de SEO?',
      answer: 'Sí, todas nuestras páginas y sitios web están optimizados para el posicionamiento en buscadores (SEO) desde el inicio, ayudando a tu negocio a ser más visible en Google.'
    }
  ],
};

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {pageData.faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 rounded-xl shadow-sm">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                {faq.question}
                <span>{openFAQ === index ? '-' : '+'}</span>
              </button>
              {openFAQ === index && (
                <div className="p-6 pt-0 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;