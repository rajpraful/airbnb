/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    MAPAPIKEY:
      "pk.eyJ1IjoicHJhZnVscmFqIiwiYSI6ImNsbnU5eWNqdTA4ajQyanFjYXVuc3pxdXUifQ.k9UXrU39Ywjgs2hlXZbrsw",
  },
};

module.exports = nextConfig;
