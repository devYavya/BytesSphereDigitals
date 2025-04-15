import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import  VitePluginSitemap  from 'vite-plugin-sitemap';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePluginSitemap({
      hostname: 'https://bytespheredigital.com', 
    }),
  ],
  server: {
    strictPort: true,
    proxy: {
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
