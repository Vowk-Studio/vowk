import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // Mantenemos base relativa para que funcione perfecto en Hostinger
  base: '/', 
  
  plugins: [react()],
  
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  
  server: {
    open: true,
    port: 5173,
  },

  // --- CONFIGURACIÓN DE TESTING (REQUISITO GLOBANT) ---
  test: {
    // Permite usar funciones como 'describe' y 'expect' globalmente (estilo Java/JUnit)
    globals: true,           
    
    // Simula el DOM de un navegador en la terminal para poder testear scroll y clics
    environment: 'jsdom',    
    
    // Archivo de arranque para cargar los matchers de Testing Library
    setupFiles: './src/setupTests.js', 
  }
})