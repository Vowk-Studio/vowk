// api/getContactUrl.js

module.exports = async (req, res) => {
    // Este endpoint de lectura de datos debe aceptar solo solicitudes GET.
    if (req.method !== 'GET') {
        return res.status(405).send('Method Not Allowed');
    }

    // El número se extrae de la variable de entorno, que es la única fuente.
    // 🔑 Dato a Cambiar: process.env.CONTACT_PHONE_API
    // 💡 Dato a Poner: El número de WhatsApp completo (ej., '5491112345678').
    const phoneNumber = process.env.CONTACT_PHONE_API || '5491112345678';
    
    // Se construye la URL de WhatsApp para ser usada directamente por el frontend.
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Respuesta de la URL al frontend.
    res.status(200).json({ success: true, url: whatsappUrl });
};