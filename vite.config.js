import { fileURLToPath, URL } from "url";

import vue from "@vitejs/plugin-vue";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./src/assets/scss/index";`,
      },
    },
  },
  resolve: {
    alias: {
      "@src": fileURLToPath(new URL("./src", import.meta.url)),
    }
  }
});
