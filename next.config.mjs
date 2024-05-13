/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hd.wallpaperswide.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
