/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    ignoreDuringBuilds: true,
    async headers() {
        return [
            {
                source: '*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-store, max-age=0',
                    },
                ],
            },
        ];
    },
};
export default nextConfig;
