import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false, // We're using our own global.css
    }), 
    react(), 
    sitemap(), 
    icon()
  ],
  site: "https://wolffodev.netlify.app/",
  output: "static",
});
