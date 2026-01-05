import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["::1","127.0.0.1"],
  }
};

export default nextConfig;
