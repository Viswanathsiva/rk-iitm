import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function fixAssetPaths(base) {
  return {
    name: "fix-asset-paths",
    enforce: "post",
    generateBundle(_, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type === "asset" && typeof file.source === "string") {
          file.source = file.source.replace(
            /(["'(])\/assets\//g,
            `$1${base}assets/`,
          );
        }
        if (file.type === "chunk") {
          file.code = file.code.replace(
            /(["'(])\/assets\//g,
            `$1${base}assets/`,
          );
        }
      }
    },
  };
}

export default defineConfig({
  base: "/rameshkk/",
  plugins: [react(), fixAssetPaths("/rameshkk/")],
});
