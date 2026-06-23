/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/frais",
  assetPrefix: "/frais/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
