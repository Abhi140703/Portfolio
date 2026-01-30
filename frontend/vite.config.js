import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
import tailwind from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwind(),  
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
