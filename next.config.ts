import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  eslint: {
    // This disables ESLint during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
