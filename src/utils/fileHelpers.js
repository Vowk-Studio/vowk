/**
 * Comprime una imagen en el lado del cliente.
 * @param {File} file - El archivo original del input.
 * @param {number} maxWidth - Ancho máximo (por defecto 1200px para web).
 * @param {number} quality - Calidad de 0 a 1 (0.7 es el punto dulce entre peso y calidad).
 * @returns {Promise<string>} - Base64 de la imagen comprimida.
 */
export const compressImage = (file, maxWidth = 1200, quality = 0.7) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        //  proporción
        if (width > maxWidth) {
          height = (maxWidth / width) * height;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        //imagen nuevo tamaño
        ctx.drawImage(img, 0, 0, width, height);

        // Exportamos
        const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedBase64);
      };

      img.onerror = (err) => reject(err);
    };

    reader.onerror = (err) => reject(err);
  });
};