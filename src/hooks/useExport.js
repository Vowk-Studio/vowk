import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const useExport = () => {
  const exportarCodigoReact = async (configActual) => {
    const zip = new JSZip();

    // 1. CARPETA CONFIG: constants.js
    const constantsContent = `
import defaultLogo from '../assets/logo.webp';
export const DEFAULT_CONFIGS = ${JSON.stringify(configActual, null, 2)};
    `;
    zip.file("src/config/constants.js", constantsContent);

    // 2. CARPETA COMPONENTS: App.jsx (Estructura principal)
    const appContent = `
import React, { lazy, Suspense } from 'react';
import { DEFAULT_CONFIGS } from './config/constants';
import Header from './components/Header';
import Hero from './components/Hero';

// ... resto de imports

export default function App() {
  const config = DEFAULT_CONFIGS;
  return (
    <div className="antialiased">
      <Header {...config.nav} />
      <Hero {...config.hero} />
      {/* ... resto de secciones */}
    </div>
  );
}
    `;
    zip.file("src/App.jsx", appContent);

    // 3. ARCHIVOS DE ESTILO O CONFIG DE VITE (Opcional pero recomendado)
    zip.file("vite.config.js", `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Esto es CLAVE para hosting compartido
})
    `);

    // 4. GENERAR EL ZIP
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "vowk-source-code.zip");
  };

  return { exportarCodigoReact };
};