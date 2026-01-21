import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface GenerateMetadataOptions {
  params: { locale: string };
  namespace: string;           // Namespace for translations on this page
  path: string;                // Relative path for canonical and alternates
}

/**
 * Generates SEO metadata (title, description, alternates) for a page.
 * Handles fetching translations and constructing alternate links for all locales.
 */
export async function generateMetadata(
  { params, namespace, path }: GenerateMetadataOptions
): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace });

  const baseUrl = 'https://www.teclis-scientific.com';
  const otherLocales = ['en', 'fr', 'es', 'de', 'it', 'pt', 'th', 'vi', 'ja', 'ko', 'zh'];

  // Nettoyer le path pour éviter les doubles slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  const pageKey = cleanPath.split("/").pop() || "home";

  const alternates = otherLocales.map(l => ({
    lang: l,
    href: `${baseUrl}/${l}${cleanPath}`,
  }));

  return {
    title: t(`${pageKey}.title`),
    description: t(`${pageKey}.description`),
    alternates: {
      canonical: `${baseUrl}/${locale}${cleanPath}`,
      languages: {
        'x-default': `${baseUrl}/en${cleanPath}`,  // Langue par défaut
        ...alternates.reduce((acc, cur) => {
          acc[cur.lang] = cur.href;
          return acc;
        }, {} as Record<string, string>),
      },
    },
  };
}