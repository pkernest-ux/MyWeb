import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  worker: {
    format: "iife",
    rollupOptions: {
      output: {
        entryFileNames: "assets/ar-v3/ar-v3-recognition-worker.js",
      },
    },
  },
  build: {
    outDir: ".",
    emptyOutDir: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: "src/ar-v3-entry.tsx",
      output: {
        entryFileNames: "assets/ar-v3/ar-v3-app.js",
        chunkFileNames: "assets/ar-v3/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) return "assets/ar-v3/ar-v3-app.css";
          return "assets/ar-v3/[name][extname]";
        },
      },
    },
  },
});
