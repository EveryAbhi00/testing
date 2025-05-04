import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from 'lovable-tagger';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Ensure the base is the root for production (or adjust if deploying to a subfolder)
  server: {
    host: "0.0.0.0", // Allow external access for testing
    port: 8080, // Customize as needed
  },
  build: {
    outDir: "dist", // Where the build files go
    emptyOutDir: true, // Ensure the dist folder is cleaned on each build
    sourcemap: true, // Enable sourcemaps for easier debugging in production
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split large dependencies into separate chunks
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0];
          }
        },
      },
    },
  },
  plugins: [
    react(), // React plugin
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for shorter imports
    },
  },
});
