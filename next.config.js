/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    PUBLIC_URL: '/',
  }
};

module.exports = nextConfig;
