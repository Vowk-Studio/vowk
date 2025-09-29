import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../config/constants'; // Ruta asumida

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Abrir chat de WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}

export default FloatingWhatsApp;