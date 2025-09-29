import { UserCheck } from 'lucide-react';

const pageData = {
  testimonials: [
    {
      text: '"El equipo de Vowk Studio superó nuestras expectativas. El diseño web es moderno y la funcionalidad es impecable. ¡Totalmente recomendados!"',
      name: 'Juan Pérez',
      title: 'Director de Marketing',
    },
    {
      text: '"Nuestra nueva página web captó un 30% más de leads en el primer mes. Un trabajo excelente y muy profesional desde el inicio."',
      name: 'María López',
      title: 'Emprendedora',
    },
    {
      text: '"Necesitábamos una solución a medida para nuestra empresa y el equipo de Vowk Studio la desarrolló de forma rápida y eficiente. Son verdaderos expertos."',
      name: 'Carlos Giménez',
      title: 'Gerente de Operaciones',
    },
  ],
};

function Testimonials() {
  return (
    <section id="testimonios" className="py-12 md:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Lo que Dicen Nuestros Clientes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pageData.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="italic text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex items-center justify-center">
                <UserCheck className="w-8 h-8 text-blue-600 mr-2" />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;