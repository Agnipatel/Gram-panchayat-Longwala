import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.behance.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // if you use unsplash too
      },
    ],
  },
};

export default nextConfig;
