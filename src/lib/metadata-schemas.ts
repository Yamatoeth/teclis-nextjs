/**
 * Schema.org structured data generators for SEO
 * Centralizes all JSON-LD schema generation
 */

interface SchemaOptions {
  name: string;
  description: string | null | undefined;
  url: string;
  siteUrl: string;
  siteName: string;
}

interface ProductSchemaOptions extends SchemaOptions {
  productType?: string;
  category?: string;
}

interface CollectionPageSchemaOptions extends SchemaOptions {
  // Collection pages (products list, applications list, etc.)
}

interface ApplicationPageSchemaOptions extends SchemaOptions {
  // Application pages
}

/**
 * Generate Product Schema (for individual product pages)
 * @example
 * createProductSchema({
 *   name: "TRACKER™ Tensiometer",
 *   description: "The Most Powerful...",
 *   url: "https://example.com/products/tracker",
 *   siteUrl: "https://example.com",
 *   siteName: "Teclis"
 * })
 */
export function createProductSchema(options: ProductSchemaOptions) {
  const {
    name,
    description,
    url,
    siteUrl,
    siteName,
    productType = "Scientific Instrument",
    category = "Interfacial Tension Measurement"
  } = options;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description || name, // Fallback to name if description missing
    "url": url,
    "category": category,
    "brand": {
      "@type": "Brand",
      "name": siteName
    },
    "manufacturer": {
      "@type": "Organization",
      "name": siteName,
      "url": siteUrl
    },
    "offers": {
      "@type": "Offer",
      "url": "/contact",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  };
}

/**
 * Generate Collection Page Schema (for listing pages)
 * @example
 * createCollectionPageSchema({
 *   name: "Products",
 *   description: "All Teclis products...",
 *   url: "https://example.com/products",
 *   siteUrl: "https://example.com",
 *   siteName: "Teclis"
 * })
 */
export function createCollectionPageSchema(options: CollectionPageSchemaOptions) {
  const { name, description, url, siteUrl, siteName } = options;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": name,
    "description": description || name, // Fallback to name if description missing
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": siteName,
      "url": siteUrl
    }
  };
}

/**
 * Generate Application/Article Page Schema
 * @example
 * createApplicationPageSchema({
 *   name: "Oil & Gas Applications",
 *   description: "Surface tension...",
 *   url: "https://example.com/applications/oilgas",
 *   siteUrl: "https://example.com",
 *   siteName: "Teclis"
 * })
 */
export function createApplicationPageSchema(options: ApplicationPageSchemaOptions) {
  const { name, description, url, siteUrl, siteName } = options;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description || name, // Fallback to name if description missing
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": siteName,
      "url": siteUrl
    }
  };
}

/**
 * Merge schema with base metadata
 * Helper function to attach schema to metadata response
 */
export function attachSchemaToMetadata(
  baseMetadata: Record<string, any>,
  schema: Record<string, any>
) {
  return {
    ...baseMetadata,
    other: {
      ...baseMetadata.other,
      "script:ld+json": JSON.stringify(schema)
    }
  };
}
