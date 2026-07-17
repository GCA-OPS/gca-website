/** @type {import('next').NextConfig} */
const nextConfig = {
  // "For now" redirect: forward the .au domain to geocam.xyz.
  // Temporary (307) so it isn't cached permanently by browsers/search engines.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'geocam.com.au' }],
        destination: 'https://geocam.xyz/:path*',
        permanent: false,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.geocam.com.au' }],
        destination: 'https://geocam.xyz/:path*',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
