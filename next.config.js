/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/europython',
        destination: 'https://www.youtube.com/watch?v=7_FyRR3yN-k&t=22s',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
