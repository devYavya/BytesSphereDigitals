const SitemapGenerator = require("sitemap-generator");
const path = require("path");
const fs = require("fs");

const siteUrl = "https://bytespheredigital.com";

const outputFolder = path.resolve(__dirname, "public");

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

const generator = SitemapGenerator(siteUrl, {
  stripQuerystring: true,
  filepath: path.join(outputFolder, "sitemap.xml"),
  maxDepth: 0,
});

generator.on("add", (url) => {
  console.log(`Added: ${url}`);
});

generator.on("done", () => {
  console.log("Sitemap generation completed!");
});

generator.on("error", (error) => {
  console.error("Error:", error);
});

generator.start();
