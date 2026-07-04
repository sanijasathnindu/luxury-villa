import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/luxury-villa",
  assetPrefix: "/luxury-villa",

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
