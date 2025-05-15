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
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  // Enable static exports if needed
  // output: 'export',
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      issuer: { and: [/\.[jt]sx?$/] },
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = nextConfig;
