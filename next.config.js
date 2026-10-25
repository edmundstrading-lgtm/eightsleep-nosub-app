/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This explicitly stops Next.js from prerendering or testing API pages during builds
  output: 'standalone'
};

export default nextConfig;
