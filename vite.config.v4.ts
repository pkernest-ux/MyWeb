import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const localApiProxy = {
  target: 'http://127.0.0.1:8080',
  changeOrigin: true,
  configure(proxy: any) {
    proxy.on('proxyReq', (proxyRequest: any, request: any) => {
      // Translate only this local dev origin; foreign origins stay rejected.
      if (request.headers.origin === 'http://127.0.0.1:5176') {
        proxyRequest.setHeader('origin', 'http://127.0.0.1:8080');
      }
    });
  },
};

export default defineConfig({
  plugins: [react()],
  server: { strictPort: true, proxy: { '/api': localApiProxy, '/.auth': localApiProxy } },
  worker: { format: 'iife', rollupOptions: { output: { entryFileNames: 'assets/ar-v4/recognition-worker.js' } } },
  build: {
    outDir: '.', emptyOutDir: false, cssCodeSplit: false,
    rollupOptions: {
      input: 'src/ar-v4-field-entry.tsx',
      output: {
        entryFileNames: 'assets/ar-v4/ar-v4-field.js',
        chunkFileNames: 'assets/ar-v4/[name].js',
        assetFileNames: (asset) => asset.name?.endsWith('.css') ? 'assets/ar-v4/ar-v4-field.css' : 'assets/ar-v4/[name][extname]',
      },
    },
  },
});
