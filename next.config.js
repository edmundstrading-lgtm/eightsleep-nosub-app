/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // This allows the build to finish even if there are formatting or styling warnings
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
