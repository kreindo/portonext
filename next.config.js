/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['picsum.photos', 'jsonplaceholder.typicode.com'],
  },
};

module.exports = nextConfig;
