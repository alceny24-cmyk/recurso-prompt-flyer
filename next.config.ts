import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/005", destination: "/005.html" }];
  },
};

export default nextConfig;
