import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  worker: { format: 'iife', rollupOptions: { output: { entryFileNames: 'assets/ar-v4-demo/recognition-worker.js' } } },
  build: { outDir: '.', emptyOutDir: false, cssCodeSplit: false, rollupOptions: {
    input: 'src/ar-v4-demo-entry.tsx',
    output: { entryFileNames: 'assets/ar-v4-demo/app.js', chunkFileNames: 'assets/ar-v4-demo/[name].js',
      assetFileNames: asset => asset.name?.endsWith('.css') ? 'assets/ar-v4-demo/app.css' : 'assets/ar-v4-demo/[name][extname]' },
  } },
});
