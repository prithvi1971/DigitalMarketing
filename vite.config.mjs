import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

export default defineConfig(({ mode }) => {
  const isGh = mode === "gh"; // use `--mode gh` when building for GitHub Pages

  return {
    base: isGh ? "/DigitalMarketing/" : "/",   // local "/" | GH Pages "/DigitalMarketing/"
    build: {
      outDir: isGh ? "docs" : "build",         // GH Pages serves /docs on the main branch
      chunkSizeWarningLimit: 2000,
    },
    plugins: [tsconfigPaths(), react(), tagger()],
    server: {
      port: 4028,
      host: "0.0.0.0",
      strictPort: true,
    },
  };
});
