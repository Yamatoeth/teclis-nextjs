import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  i18n: {
    locales: ['en', 'de', 'es', 'it', 'pt', 'fr', 'zh', 'ja', 'ko', 'th', 'vi'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
