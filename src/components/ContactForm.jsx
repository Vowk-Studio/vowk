import React from 'react';
import { useForm } from 'react-hook-form';
import { MessageCircle } from 'lucide-react';
import { WS_PRE, WS_NUM, WHATSAPP_MESSAGE } from '../config/constants'; // Ruta asumida


const ContactForm = ({
  className = '',
  submissionMessage,
  onSubmit = async () => {},
  whatsappMessage = WHATSAPP_MESSAGE 
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onFormSubmit = async (data) => {
  if (data.full_name_php) return;

  // Limpiamos espacios en blanco accidentales antes de enviar
  const sanitizedData = {
    email: data.email.trim(),
    consulta: data.consulta.trim(),
    action: 'contact'
  };

  try {
    const response = await fetch('/api.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sanitizedData), // Mandamos los datos limpios
    });

    if (response.ok) {
      const result = await response.json(); // Leemos la respuesta del servidor
      if (result.status === "success") {
        await onSubmit(data);
        reset();
      } else {
        alert("El servidor rechazó el mensaje.");
      }
    } else {
      alert("Error de servidor. Intentá más tarde.");
    }
  } catch (error) {
    console.error("Error de red:", error);
    alert("No se pudo conectar con el servidor.");
  }
};

  const handleWhatsAppClick = () => {
    const fullNumber = WS_PRE + WS_NUM;
    const whatsappUrl = `https://wa.me/${fullNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`font-sans ${className} w-full bg-black/10 rounded-3xl p-6 shadow-xl border border-white/20 bg-white/12 backdrop-blur-md`}
      style={{ boxShadow: '0 12px 30px rgba(0,0,0,0.28)' }}
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Consultas</h2>
      <p className="text-black py-2 text-sm mb-4 leading-snug">
        Dejanos tu consulta aquí, te responderemos a la brevedad.
      </p>

      {submissionMessage && typeof submissionMessage === 'string' && (
        <div
          className="bg-green-100 border border-green-300 text-green-800 px-3 py-2 rounded-md mb-3 text-sm"
          role="alert"
        >
          {submissionMessage}
        </div>
      )}

      {/* BLOQUE UNIFICADO: email + consulta */}
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" {...register('full_name_php')} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
        <div
          className="rounded-3xl overflow-hidden bg-gray-100/30"
          style={{
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -6px 18px rgba(0,0,0,0.12)'
          }}
        >
          {/* Email (compact line con subrayado) */}
          <div className="px-4 pt-4 pb-2">
            <label htmlFor="email" className="text-xs text-gray-800 font-medium mb-1">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="tu@correo.com"
              {...register('email', {
                required: 'El email es obligatorio',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Ingresa un email válido'
                }
              })}
              className="w-full bg-transparent placeholder-gray-400 text-gray-900 py-1 h-8 focus:outline-none border-b border-gray-300/50 text-sm"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
          </div>

          {/* Consulta (integrada, sin borde superior) */}
          <div className="px-4 pb-4">
            <textarea
              id="consulta"
              rows="3"
              placeholder="Consulta:"
              {...register('consulta', {
                required: 'La consulta es obligatoria',
                minLength: { value: 10, message: 'Mínimo 10 caracteres' }
              })}
              className="w-full bg-transparent placeholder-gray-400 text-gray-900 py-2 resize-none focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* Errores debajo del bloque (pequeños y discretos) */}
        <div className="mt-2">
          {errors.email && (
            <p className="text-red-500 text-xs mb-1">{errors.email.message}</p>
          )}
          {errors.consulta && (
            <p className="text-red-500 text-xs">{errors.consulta.message}</p>
          )}
        </div>

        {/* Botones */}
        <div className="flex flex-col py-2 space-y-3 mt-5">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-800 py-3 hover:bg-blue-400 disabled:opacity-60 text-white text-sm font-semibold py-2 rounded-full transition-colors duration-150 shadow"
          >
            {isSubmitting ? 'Enviando...' : 'ENVIAR'}
          </button>

         <button
  type="button"
  onClick={handleWhatsAppClick}
  className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-black transition duration-300 flex items-center justify-center gap-2"
  aria-label="Contactar por WhatsApp"
>
  <MessageCircle className="w-5 h-5" />
  Contactar Por Whatsapp
</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;