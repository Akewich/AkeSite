import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // ป้องกัน Clickjacking (ห้ามคนอื่นเอาเว็บเราไปใส่ใน iframe)
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // ป้องกันการเดาไฟล์ประเภทอื่น (MIME sniffing)
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin", // ป้องกันการส่งข้อมูล URL เต็มๆ ไปเว็บอื่น
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://github.com; connect-src 'self' https://api.github.com;",
            // CSP: กำหนดว่าอนุญาตให้โหลดข้อมูลจากไหนบ้าง (ในที่นี้อนุญาตตัวเองและ GitHub API)
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;