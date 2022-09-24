import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

function getPublicPath(): string {
  switch (process.env.NODE_ENV) {
    case "gh-production":
      return "/jjocram.github.io/";
    case "glab-production":
      return "/";
    default:
      return "/";
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: getPublicPath(),
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
