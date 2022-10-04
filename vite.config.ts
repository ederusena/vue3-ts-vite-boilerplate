import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import eslintPlugin from "vite-plugin-eslint";

export const aliases = {
  "@": resolve(__dirname, "./src"),
  "@u": resolve(__dirname, "./src/utils"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), eslintPlugin()],
  resolve: {
    alias: aliases,
  },
});
