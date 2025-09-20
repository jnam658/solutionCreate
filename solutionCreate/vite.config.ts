import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/user": {
        target: "",
        changeOrigin: true,
        secure: false,
      },
      "/solution": {
        target: "",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  base: "/solutionCreate/",
});
