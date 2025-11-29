import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    reactStrictMode: true,
  // tes autres options Next
};

export default withNextIntl(nextConfig);