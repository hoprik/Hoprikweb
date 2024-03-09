/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ]
};
export default nextConfig;
