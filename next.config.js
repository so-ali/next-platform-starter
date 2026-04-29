/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  
   rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/api/index',
      },
    ];
  }
}

module.exports = nextConfig
