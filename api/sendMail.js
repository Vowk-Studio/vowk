// src/api/sendMail.js
import { API_TIMEOUT } from '../config/constants';

// 💡 CONCEPTO: Esta función SIMULA lo que haría una llamada a tu servidor real.
export const sendMail = async (formData) => {
    console.log('--- SIMULACIÓN DE ENVÍO DE CORREO ---');
    console.log('Datos a enviar al servidor:', formData);
    
    // Simular la latencia de la red (300 a 800ms)
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 300));

    // 🚨 Aquí es donde tu código real haría la llamada a tu API /servidor:
    // try {
    //    const response = await fetch('/api/send-contact', { method: 'POST', body: JSON.stringify(formData) });
    //    if (!response.ok) throw new Error('Error al enviar el correo');
    //    return { success: true };
    // } catch (error) {
    //    throw new Error('Fallo la conexión con el servidor.');
    // }

    // Por ahora, solo simularemos un 90% de éxito.
    const isSuccess = Math.random() < 0.9; 

    if (isSuccess) {
        return { success: true, message: '¡Gracias! Tu consulta ha sido enviada con éxito y te contactaremos pronto.' };
    } else {
        // Simular un error del servidor (por ejemplo, si el servicio de correo falló)
        throw new Error('No pudimos enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
    }
};