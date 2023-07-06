/** @type {import('next').NextConfig} */
// next.config.js

// const withTM = require("next-transpile-modules")(["echarts", "zrender"]);
// module.exports = withTM({})
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

export default nextConfig
