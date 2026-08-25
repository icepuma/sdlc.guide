import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://sdlc.guide",
  output: "static",
  trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !new URL(page).pathname.includes("/404"),
    }),
  ],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Funnel Sans",
      cssVariable: "--font-readable",
      weights: ["300 800"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
      display: "swap",
    },
  ],
});
