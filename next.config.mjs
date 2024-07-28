import withPWA from "next-pwa";

const withPwaConfig = withPWA({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPwaConfig(nextConfig);
