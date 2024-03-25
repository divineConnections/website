import { devServer } from "@cypress/vite-dev-server";
import { defineConfig } from "cypress";
import viteConfig from "./vite.config";

export default defineConfig({
  component: {
    devServer(devServerConfig) {
      return devServer({
        ...devServerConfig,
        framework: "react",
        viteConfig,
      });
    },
  },
});
