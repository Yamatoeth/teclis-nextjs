// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Use the middleware directly without manual redirection logic.
// next-intl automatically handles locale detection and falls back to defaultLocale/en.
export default createMiddleware(routing);

export const config = {
  // This matcher is critical for intercepting routing.
  // It ensures the middleware runs for the root and localized paths.
  matcher: ['/', '/(fr|en|es|de|ko|ja|th|vi|it|pt|zh)/:path*'],
};