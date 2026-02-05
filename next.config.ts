import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Avoid monorepo root auto-detection warnings
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
