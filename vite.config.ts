import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-refresh";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      types: `${path.resolve(__dirname, "./src/@types")}`,
    },
  },
});
