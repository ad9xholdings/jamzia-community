import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  // RockNext branded base path
  basePath: '',
  assetPrefix: ''
};

export default nextConfig;