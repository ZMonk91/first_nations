/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
  reactStrictMode: true,
};
nextConfig.webpack = (config, context) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: "@svgr/webpack",
  });
  return config;
};
export default nextConfig;
