import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable webpack cache to avoid memory issues on Windows

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://www.youtube-nocookie.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: https://i.ytimg.com",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
              "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
              "child-src https://www.youtube.com https://www.youtube-nocookie.com",
              "media-src 'self' https:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'"
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
