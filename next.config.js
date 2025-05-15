/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3q7x2s6555pey.cloudfront.net',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'creator-hub-prod.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '**',
      }
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  // Enable static exports if needed
  // output: 'export',
};

module.exports = nextConfig;
