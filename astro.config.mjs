import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://XinyangWuEthz.github.io",
  integrations: [mdx()],
  output: "static",
});
