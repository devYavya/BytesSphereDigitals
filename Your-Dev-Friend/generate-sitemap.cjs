const SitemapGenerator = require("sitemap-generator");

const generator = SitemapGenerator("https://bytespheredigital.com", {
  stripQuerystring: false,
});

generator.start();
