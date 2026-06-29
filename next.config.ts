import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  transpilePackages: ["@my-design-system/ui", "@my-design-system/tokens"],
  turbopack: {
    root: path.join(process.cwd(), ".."),
  },
};

export default nextConfig;
