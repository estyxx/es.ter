/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/europython",
        destination: "https://youtu.be/7_FyRR3yN-k",
        permanent: true,
      },
      {
        source: "/pyconitalia",
        destination: "https://youtu.be/YHEaPloOaSA",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
