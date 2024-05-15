/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "weasydoo.com",
      },
      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
    ],
  },
};

export default nextConfig;
