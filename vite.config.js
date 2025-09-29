import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/vowk/',      // <- Muy importante para GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',    // Carpeta de build por defecto, usada por gh-pages
    sourcemap: false,  // Opcional: desactiva los sourcemaps para producción
  },
  server: {
    open: true,        // Abre el navegador al iniciar dev server
    port: 5173,        // Puerto por defecto de Vite
  }
})
