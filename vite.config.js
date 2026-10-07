import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/', 
  plugins: [react()],
  
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        // --- ACÁ VA LA LÓGICA DE SEGMENTACIÓN ---
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Separamos Framer Motion (ya lo logramos bajar a 36kb)
            if (id.includes('framer-motion')) return 'vendor-framer';
            
            // Separamos los iconos
            if (id.includes('lucide-react')) return 'vendor-icons';
            
            // DESGLOSE DEL CORE (Para ver qué pesa tanto):
            if (id.includes('react-dom')) return 'vendor-react-dom';
            if (id.includes('react-router')) return 'vendor-router';
            if (id.includes('react-hook-form')) return 'vendor-hook-form';
            if (id.includes('react-helmet-async')) return 'vendor-helmet';
            
            // Todo lo que no entró en las categorías anteriores:
            return 'vendor-others'; 
          }
        },
      },
    },
  },
  
  server: {
    open: true,
    port: 5173,
  },

  test: {
    globals: true,           
    environment: 'jsdom',    
    setupFiles: './src/setupTests.js', 
  }
})