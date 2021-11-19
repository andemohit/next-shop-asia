/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'picsum.photos']
  },
  env: {
    baseURL: '/',
    placeholder: 'https://via.placeholder.com/'
  }
}
