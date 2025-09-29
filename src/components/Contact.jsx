import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../config/constants'; // Ruta asumida

function Contact() {
  return (
    <section id="contacto" className="py-12 md:py-16 lg:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para potenciar tu negocio?
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              Trabajemos juntos para llevar tu marca al siguiente nivel digital.
            </p>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 mt-6">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200 shadow-lg"
                aria-label="Contactar por WhatsApp"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Empecemos a conversar
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="./llamadaaccion3.png"
              alt="Imagen de llamado a la acción"
              className="w-full max-w-md rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;