import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: ".",
    emptyOutDir: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: "src/ar-v2-entry.tsx",
      output: {
        entryFileNames: "assets/ar-v2/ar-v2-app.js",
        chunkFileNames: "assets/ar-v2/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) return "assets/ar-v2/ar-v2-app.css";
          return "assets/ar-v2/[name][extname]";
        },
      },
    },
  },
});
