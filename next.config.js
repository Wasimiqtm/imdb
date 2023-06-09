/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:['image.tmdb.org', 'tmdb.org', 'themoviedb.org']
  },
  env:{
    SPACE_ID: '7cp1wxlj60a7',
    ACCESS_TOKEN: 'sqb92wC0eyEjXav4yR67a3Hcvw1_I5petoEBxvIUpJY'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  }
}

module.exports = nextConfig
