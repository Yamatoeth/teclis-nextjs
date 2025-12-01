// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Utilisez le middleware directement sans logique de redirection manuelle
// next-intl gère automatiquement la détection de locale et le fallback vers defaultLocale/en
export default createMiddleware(routing);

export const config = {
  // Ce matcher est correct et essentiel pour intercepter le routage
  matcher: ['/', '/(fr|en|es|de|ko|ja|th|vi|it|pt|zh)/:path*'],
};