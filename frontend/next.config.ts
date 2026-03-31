import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { webpack }) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      "@react-native-async-storage/async-storage": false,
    };
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /thread-stream\/test/,
      })
    );
    return config;
  },
  serverExternalPackages: ["pino", "pino-pretty"],
  turbopack: {},
};



export default nextConfig;
