import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  integrations: [react(), sitemap()],
  site: 'https://mega-barto.github.io',
  base: '/Mega-Barto.github.io/',
  outDir: './dist',
  compressHTML: true,
});
