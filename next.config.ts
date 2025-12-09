import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';

// Wraps the Next.js configuration with next-intl to enable
// internationalized routing and locale handling.
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
    reactStrictMode: true,
  // tes autres options Next
};

export default withNextIntl(nextConfig);