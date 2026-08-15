import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.GITHUB_ACTIONS
    ? "https://hermano-padawan.github.io"
    : "https://biblenexus.site",
  base: process.env.GITHUB_ACTIONS ? "/bible-nexus" : "/",
  trailingSlash: "always",
  integrations: [sitemap()],
});
