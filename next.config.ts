import type { NextConfig } from "next";

// When the site is served from a subfolder (GitHub Pages project page), the
// workflow sets NEXT_PUBLIC_BASE_PATH. On a real domain root it stays empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Produces a fully static out/ folder: drop it into any host, including
  // shared hosting such as Hostinger public_html.
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
