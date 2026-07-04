import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  outputFileTracingRoot: process.cwd(),

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  poweredByHeader: false,
};

export default nextConfig;