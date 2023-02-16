import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
    watch: false,
    environment: "jsdom",
    // coverage report shows only for files with tests
    coverage: {
      all: true,
      reportsDirectory: "../coverage",
      provider: "istanbul",
    },

    // // generates empty coverage report
    // coverage: {
    //   all: true,
    //   include: ["src/**/*.{ts,vue}"],
    //   // include: ["src/**/*"], // this doesnt work either
    //   reportsDirectory: "../coverage",
    //   provider: "istanbul",
    // },
  },
});
