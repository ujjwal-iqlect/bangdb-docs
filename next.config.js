/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ['bangdb.com'],
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
        source: '/rest-api/swagger-api',
        destination: 'https://bangdb.com/swagger-api',
        permanent: true,
      },
      {
        source: '/bangdb-ml-examples',
        destination: '/use-cases/ml-usecases',
        permanent: true,
      },
      {
        source: '/rest-api/postman-api',
        destination:
          'https://elements.getpostman.com/view/fork?collection=22899570-0b6d5c05-d2ab-4c0d-9ea3-3313bc32c302&referrer=https%3A%2F%2F34.234.70.163%2Fpostman-api%2F',
        permanent: true,
      },
      {
        source: '/search/',
        destination: '/',
        permanent: false,
      },
      {
        source: '/db-param',
        destination: '/dbparam-type',
        permanent: true,
      },
      {
        source: '/rest-api/get-the-list-of-tables',
        destination: '/get-the-tables-count',
        permanent: true,
      },
    ];
  },
};
