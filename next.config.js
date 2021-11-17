/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com']
  },
  env: {
    baseURL: '/',
    placeholder: 'https://via.placeholder.com/'
  }
}
