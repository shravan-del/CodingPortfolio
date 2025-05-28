const { withContentlayer } = require('next-contentlayer');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['avatars.githubusercontent.com', 'raw.githubusercontent.com'],
    unoptimized: true
  },
  // Disable React StrictMode for d3 compatibility
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src'),
    };
    return config;
  },
  // Add any other configurations here
};

module.exports = withContentlayer(nextConfig); 