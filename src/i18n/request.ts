// src/i18n/request.ts
export function getRequestConfig(req) {
  // retourne la config (locales supportées, locale par défaut, etc.)
  return {
    // tableau de locales supportées
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    // optionnel: routing config ou resolver
  };
}