/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["bangdb.com", "www.gstatic.com"],
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
    ];
  },
};
