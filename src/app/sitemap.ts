import type { MetadataRoute } from "next";

const SITE_URL = "https://teclis-scientific.com";

const LOCALES = ["en", "fr", "de", "es", "it", "pt", "ja", "ko", "zh"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/products",
    "/applications",
    "/services",
    "/about",
    "/news",
    "/contact",
  ];

  const productSlugs = [
    "bubbleanalyser",
    "foamscan",
    "foamscanhtmp",
    "jetscan",
    "trackerhtp",
    "trackertensiometer",
  ];

  const urls: MetadataRoute.Sitemap = [];

  // Pages statiques
  for (const locale of LOCALES) {
    for (const page of staticPages) {
      urls.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: new Date(),
        priority: page === "" ? 1.0 : 0.8,
      });
    }
  }

  // Pages produits
  for (const locale of LOCALES) {
    for (const slug of productSlugs) {
      urls.push({
        url: `${SITE_URL}/${locale}/products/${slug}`,
        lastModified: new Date(),
        priority: 0.7,
      });
    }
  }

  return urls;
}