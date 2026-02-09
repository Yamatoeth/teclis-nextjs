import type { MetadataRoute } from "next";

const SITE_URL = "https://www.teclis-scientific.com";

// All supported locales - must match routing.ts
const LOCALES = ["en", "fr", "de", "es", "it", "pt", "ja", "ko", "zh", "th", "vi"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/products",
    "/applications",
    "/services",
    "/about",
    "/news",
    "/contact",
    "/careers",
  ];

  const productSlugs = [
    "bubbleanalyser",
    "foamscan",
    "foamscanhtmp",
    "jetscan",
    "trackerhtp",
    "trackertensiometer",
  ];

  const applicationSlugs = [
    "dailychemicals",
    "foodbeverages",
    "lifesciences",
    "oilgas",
  ];

  const legalPages = [
    "/legal/cookies",
    "/legal/privacy-policy",
    "/legal/terms",
  ];

  const urls: MetadataRoute.Sitemap = [];

  // Static pages
  for (const locale of LOCALES) {
    for (const page of staticPages) {
      urls.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: new Date(),
        priority: page === "" ? 1.0 : 0.8,
      });
    }
  }

  // Product pages
  for (const locale of LOCALES) {
    for (const slug of productSlugs) {
      urls.push({
        url: `${SITE_URL}/${locale}/products/${slug}`,
        lastModified: new Date(),
        priority: 0.7,
      });
    }
  }

  // Application pages
  for (const locale of LOCALES) {
    for (const slug of applicationSlugs) {
      urls.push({
        url: `${SITE_URL}/${locale}/applications/${slug}`,
        lastModified: new Date(),
        priority: 0.7,
      });
    }
  }

  // Legal pages (lower priority)
  for (const locale of LOCALES) {
    for (const page of legalPages) {
      urls.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: new Date(),
        priority: 0.3,
      });
    }
  }

  return urls;
}