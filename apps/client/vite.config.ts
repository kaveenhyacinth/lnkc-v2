import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/apx/v1": {
        target: "http://localhost:8080", // Local Nest Server
        changeOrigin: true,
      },
    },
  },
});