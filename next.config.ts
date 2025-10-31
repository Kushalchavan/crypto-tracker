import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: ["coin-images.coingecko.com"], // allow CoinGecko images
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
   typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
