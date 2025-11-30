// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];
const defaultLocale = 'en'; // Définition explicite de la locale par défaut

export default getRequestConfig(async ({ locale }) => {
  
  // 1. Vérification stricte des locales invalides (si l'URL est /xx/page)
  // On ne veut pas que n'importe quelle URL fonctionne.
  if (locale && !locales.includes(locale as Locale)) {
    notFound(); 
  }
  
  // 2. Définition finale de la locale :
  // Si 'locale' est valide, on l'utilise. Sinon (cas de l'URL '/'), on utilise 'en'.
  const finalLocale: string = locale && locales.includes(locale as Locale) ? locale : defaultLocale;

  return {
    locale: finalLocale,
    // On utilise la locale garantie
    messages: (await import(`../messages/${finalLocale}.json`)).default,
  };
});