import { Rocket, Code, Layout } from 'lucide-react';

function Services() {
  return (
    <section id="servicios" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-10">
          Creamos soluciones digitales a medida para llevar tu negocio al siguiente nivel.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <Layout className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Diseño Web Profesional</h3>
            <p className="text-gray-600">
              Creamos experiencias visuales únicas y optimizadas para cualquier dispositivo. Tu página será atractiva y funcional.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Desarrollo de Software</h3>
            <p className="text-gray-600">
              Automatizamos tus procesos y optimizamos tu operación con software y aplicaciones hechas a medida para tu empresa.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <Rocket className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Posicionamiento SEO</h3>
            <p className="text-gray-600">
              Posicionamos tu marca con estrategias SEO y publicidad online para que seas visible donde tus clientes te buscan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;