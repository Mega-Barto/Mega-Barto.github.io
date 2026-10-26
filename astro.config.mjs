import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  integrations: [sitemap()],
  site: 'https://megabarto.com',
  base: '/',
  outDir: './dist',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
      cssCodeSplit: true,
    },
  },
});
