/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This prevents Next.js from trying to statically optimize API and trpc routes during the build phase
  experimental: {
    unstable_noStoreByImport: true,
  }
};

export default nextConfig;
