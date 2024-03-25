/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nikearprod.vtexassets.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "upload.snrcdn.net",
      },
    ],
  },
};

export default nextConfig;
