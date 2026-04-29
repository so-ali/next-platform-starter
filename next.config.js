/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/api/index',
      },
    ];
  },
  
  // For Netlify deployment
  output: 'standalone',
}

module.exports = nextConfig
