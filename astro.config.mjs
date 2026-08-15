import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://biblenexus.site",
  base: "/",
  trailingSlash: "always",
  integrations: [sitemap()],
});
