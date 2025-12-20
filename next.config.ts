import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';

// Wraps the Next.js configuration with next-intl to enable
// internationalized routing and locale handling.
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 640, 768, 1024, 1280, 1536],
    imageSizes: [64, 128, 256],
  },
};

export default withNextIntl(nextConfig);