import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

// IMPORTANT for GitHub Pages: base must be your repo name with leading/trailing slashes
// If you later deploy to Vercel, remove the `base` line (or set it back to "/").
export default defineConfig({
  base: "/DigitalMarketing/",
  build: {
    // you already use "build" instead of "dist" — that's fine; just deploy that folder
    outDir: "build",
    chunkSizeWarningLimit: 2000,
  },
  plugins: [tsconfigPaths(), react(), tagger()],
  server: {
    port: 4028,
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: [".amazonaws.com"],
  },
});
