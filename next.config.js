/** @type {import('next').NextConfig} */


module.exports = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.showmetours.biz',
        port: "",
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
      },
      {
        protocol: 'https',
        hostname: "pub-178d5782ea9d451f8d4fcdff109708f2.r2.dev",
        port: "",
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'payload-cms-production-6f3d.up.railway.app',
        port: '',
      }
    ],
    unoptimized: true,
  },
}
