import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://utopica.net',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    optimizeDeps: {
      exclude: ['@radix-ui/react-icons'],
    },
  },
  image: {
    domains: ['utopica.io', 'images.unsplash.com'],
  },
});
