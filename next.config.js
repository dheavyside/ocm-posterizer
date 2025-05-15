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
      },
      {
        protocol: 'https',
        hostname: 'ocm-karma-png.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '**',
      }
    ],
    unoptimized: process.env.NODE_ENV === 'development', // Disable optimization in development
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  // Enable static exports if needed
  // output: 'export',
  experimental: {
    outputFileTracingIncludes: {
      './pages/api/screenshot': ['./public/backdrops/**/*', './public/*.png'],
    },
  },
};

module.exports = nextConfig;
