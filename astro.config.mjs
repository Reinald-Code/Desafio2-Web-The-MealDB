// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  // Dejamos solo react() por ahora
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});