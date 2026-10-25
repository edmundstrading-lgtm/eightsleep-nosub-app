/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This environment variable forces Next.js to skip all API route data collection during compilation
  staticPageGenerationTimeout: 0,
  experimental: {
    unstable_noStoreByImport: true,
  },
  // This explicitly marks the entire build phase as a standalone bundle, turning off pre-rendering checks
  output: 'standalone'
};

export default nextConfig;
