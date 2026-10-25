/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    POSTGRES_URL: process.env.DRIZZLE_DATABASE_URL,
    POSTGRES_URL_NON_POOLING: process.env.DRIZZLE_DATABASE_URL,
  },
};

module.exports = nextConfig;

