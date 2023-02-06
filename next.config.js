/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/play',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
