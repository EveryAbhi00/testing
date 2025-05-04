import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// detect production by checking command being run
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProd ? "/testing/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    !isProd && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
