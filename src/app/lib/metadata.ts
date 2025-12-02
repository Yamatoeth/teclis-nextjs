import { getTranslations } from "next-intl/server";

interface GenerateMetadataOptions {
  params: { locale: string };
  namespace: string;           // namespace pour les traductions de cette page
  path: string;                // chemin relatif de la page pour le canonical et alternates
}

export async function generateMetadata({ params, namespace, path }: GenerateMetadataOptions) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace });

  const baseUrl = 'https://www.teclis-scientific.com';
  const otherLocales = ['en', 'fr', 'es', 'de', 'it', 'pt', 'th', 'vi', 'ja', 'ko', 'zh'];

  const alternates = otherLocales.map(l => ({
    hrefLang: l,
    href: `${baseUrl}/${l}/${path}`,
  }));

  return {
    title: t(`title`),
    description: t(`description`),
    alternates: {
      canonical: `${baseUrl}/${locale}/${path}`,
      languages: alternates.reduce((acc, cur) => {
        acc[cur.hrefLang] = cur.href;
        return acc;
      }, {} as Record<string, string>),
    },
  };
}