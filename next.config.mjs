/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "www.nydailynews.com",
      },
      {
        protocol: "https",
        hostname: "cdn.askapollo.com",
      },
    ],
  },
};

export default nextConfig;
