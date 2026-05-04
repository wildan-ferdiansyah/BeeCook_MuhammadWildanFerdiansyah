import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "frontend-api.gbeeglow.id",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ]
  }
};

export default nextConfig;
