/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/europython',
        destination: 'https://youtu.be/7_FyRR3yN-k',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
