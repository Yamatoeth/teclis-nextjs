import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface GenerateMetadataOptions {
  params: { locale: string };
  namespace: string;           // Namespace for translations on this page
  path: string;                // Relative path for canonical and alternates
  image?: string;              // Optional custom OG image path (overrides default dynamic OG)
}

const SITE_NAME = "Teclis Scientific";
const BASE_URL = "https://www.teclis-scientific.com";

/**
 * Generates SEO metadata (title, description, alternates, OpenGraph, Twitter) for a page.
 * Handles fetching translations and constructing alternate links for all locales.
 * Uses dynamic OG image generation from /app/opengraph-image.tsx unless custom image provided.
 */
export async function generateMetadata(
  { params, namespace, path, image }: GenerateMetadataOptions
): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace });

  const otherLocales = ['en', 'fr', 'es', 'de', 'it', 'pt', 'th', 'vi', 'ja', 'ko', 'zh'];

  // Clean path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path : path ? `/${path}` : '';

  const pageKey = cleanPath.split("/").pop() || "home";
  const title = t(`${pageKey}.title`);
  const description = t(`${pageKey}.description`);
  const pageUrl = `${BASE_URL}/${locale}${cleanPath}`;

  const alternates = otherLocales.map(l => ({
    lang: l,
    href: `${BASE_URL}/${l}${cleanPath}`,
  }));

  // Base metadata without images (Next.js will use /app/opengraph-image.tsx)
  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: pageUrl,
      languages: {
        'x-default': `${BASE_URL}/en${cleanPath}`,
        ...alternates.reduce((acc, cur) => {
          acc[cur.lang] = cur.href;
          return acc;
        }, {} as Record<string, string>),
      },
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: SITE_NAME,
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  // Add custom images if provided (overrides dynamic OG image)
  if (image) {
    const imageUrl = `${BASE_URL}${image}`;
    metadata.openGraph = {
      ...metadata.openGraph,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    };
    metadata.twitter = {
      ...metadata.twitter,
      images: [imageUrl],
    };
  }

  return metadata;
}