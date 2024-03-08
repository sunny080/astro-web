import { defineConfig } from "astro/config";
import sanity from "astro-sanity";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "53jf57n2",
      dataset: "production",
      apiVersion: "2023-08-01",
      useCdn: false,
    }),
    tailwind(),
  ],
});
