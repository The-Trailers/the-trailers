/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'storage.googleapis.com',
            'm.media-amazon.com',
            'flxt.tmsimg.com',
            'hips.hearstapps.com'
        ]
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `${process.env.SERVICE_URL}/:path*`
            }
        ]
    }
}

module.exports = nextConfig
