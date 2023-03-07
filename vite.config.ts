import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "app": path.resolve(__dirname, "./src/app"),
      "pages": path.resolve(__dirname, "./src/pages"),
      "features": path.resolve(__dirname, "./src/features"),
      "entities": path.resolve(__dirname, "./src/entities"),
      "shared": path.resolve(__dirname, "./src/shared"),
      "widgets": path.resolve(__dirname, "./src/widgets"),
    },
  },
});