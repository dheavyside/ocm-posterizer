/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      'd3q7x2s6555pey.cloudfront.net',
      'karma-dessert.onchainmonkey.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3q7x2s6555pey.cloudfront.net',
        port: '',
        pathname: '*',
      },
      {
        protocol: 'https',
        hostname: 'karma-dessert.onchainmonkey.com',
        port: '',
        pathname: '*',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
