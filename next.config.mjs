/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.madeiramadeira.com.br',
        port: '',
      },
    ],
  }
};

export default nextConfig;
