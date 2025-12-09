// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'fr', 'de', 'es', 'ko', 'ja', 'pt', 'th', 'vi', 'zh', 'it'] as const;
export type Locale = (typeof locales)[number];
const defaultLocale = 'en'; // Explicit definition of default locale

export default getRequestConfig(async ({ locale }) => {
  
  // 1. Strict verification of invalid locales (e.g., if URL is /xx/page).
  // We don't want just any URL prefix to work.
  if (locale && !locales.includes(locale as Locale)) {
    notFound(); 
  }
  
  // 2. Final locale definition:
  // If 'locale' is valid, use it. Otherwise (e.g., for root URL '/'), use 'en'.
  const finalLocale: string = locale && locales.includes(locale as Locale) ? locale : defaultLocale;

  return {
    locale: finalLocale,
    // Load messages for the guaranteed locale
    messages: (await import(`../messages/${finalLocale}.json`)).default,
  };
});