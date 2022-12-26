/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["bangdb.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/swagger-api",
        destination: "https://bangdb.com/swagger-api",
        permanent: false,
      },
      {
        source: "/search/",
        destination: "/404",
        permanent: false,
      },
    ];
  },
};
