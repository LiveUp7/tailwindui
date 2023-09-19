import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from "@astrojs/netlify/functions";
import preact from "@astrojs/preact";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  output: "server",
  adapter: cloudflare()
});