/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['atmae3hxlxg2drrv.public.blob.vercel-storage.com'],
  },
}

module.exports = nextConfig 