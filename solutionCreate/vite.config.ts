import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/user": {
        target: "https://175.45.220.15.nip.io",
        changeOrigin: true,
        secure: false,
      },
      "/solution": {
        target: "https://175.45.220.15.nip.io",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  base: "/solutionCreate/",
});
