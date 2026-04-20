import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  integrations: [sitemap()],
  site: 'https://mega-barto.github.io',
  base: '/Mega-Barto.github.io/',
  outDir: './dist',
  compressHTML: true,
});
