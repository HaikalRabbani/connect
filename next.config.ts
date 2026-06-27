// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Mencegah website kamu dibuka di dalam iframe orang lain (Clickjacking)
          { key: 'X-Frame-Options', value: 'DENY' },
          // Mencegah browser menebak-nebak tipe konten (MIME Sniffing)
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Memaksa browser pakai HTTPS (HSTS)
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Membatasi akses referrer antar website
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },

  // Izinkan domain Sanity untuk menampilkan gambar
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
