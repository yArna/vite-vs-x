import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  source: { entry: { index: "./src/main.jsx" } },
  plugins: [pluginReact()],
  html: {
    template: "./index-rspack.html",
  },
});
