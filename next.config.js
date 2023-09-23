/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    distDir: 'build',
    // basePath: '/projects/ecf',
    // async rewrites() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/accueil',
    //         },
    //     ]
    // },
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/accueil',
    //             // permanent: true,
    //         },
    //     ]
    // },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.tina.io',
            },
        ],
        // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
}

module.exports = nextConfig
