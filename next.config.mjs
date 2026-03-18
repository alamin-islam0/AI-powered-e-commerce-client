/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
