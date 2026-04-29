import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/personalsite",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
