// astro.config.mjs
// Archivo de configuración principal de Astro
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';        // Integración para usar React
import tailwindcss from '@tailwindcss/vite'; // Plugin de Tailwind CSS

// Documentación oficial: https://astro.build/config
export default defineConfig({
  output: 'server',              // Configuración para SSR (Server-Side Rendering)
  
  // Integraciones habilitadas
  integrations: [
    react()                      // Habilita componentes React (.jsx)
  ],

  // Configuración de Vite (bundler subyacente)
  vite: {
    plugins: [
      tailwindcss()              // Plugin para procesar Tailwind CSS
    ]
  }
});