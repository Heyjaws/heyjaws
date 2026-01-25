/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/heyjaws',
  assetPrefix: '/heyjaws/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
