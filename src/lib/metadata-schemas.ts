/**
 * Schema.org structured data generators for SEO
 * Centralizes all JSON-LD schema generation
 */

import type { Metadata } from "next";

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

type CollectionPageSchemaOptions = SchemaOptions;

type ApplicationPageSchemaOptions = SchemaOptions;

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
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
 * Supports single schema or array of schemas
 */
export function attachSchemaToMetadata(
  baseMetadata: Metadata,
  schema: Record<string, unknown> | Record<string, unknown>[]
): Metadata {
  return {
    ...baseMetadata,
    other: {
      ...baseMetadata.other,
      "script:ld+json": JSON.stringify(schema)
    }
  };
}

/**
 * Generate BreadcrumbList Schema for navigation
 * @example
 * createBreadcrumbSchema([
 *   { name: "Home", url: "https://example.com" },
 *   { name: "Products", url: "https://example.com/products" },
 *   { name: "TRACKER™", url: "https://example.com/products/tracker" }
 * ])
 */
export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Generate FAQPage Schema for FAQ sections
 * @example
 * createFAQSchema([
 *   { question: "What is surface tension?", answer: "Surface tension is..." }
 * ])
 */
export function createFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}
