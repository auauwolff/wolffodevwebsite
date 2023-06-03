import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://duit.solutions/",
  integrations: [tailwind(), react(), sitemap()],
  output: "static",
  experimental: {
    assets: true,
  },
});
