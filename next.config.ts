import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 1. ตั้งค่าการ Export ไฟล์แบบ Static 
     เพื่อให้ GitHub Pages นำไฟล์ในโฟลเดอร์ /out ไปแสดงผลได้
  */
  output: "export",

  /* 2. ปิดการย่อรูปภาพของ Next.js 
     เพราะ GitHub Pages ไม่มี Server สำหรับประมวลผลรูปภาพ
  */
  images: {
    unoptimized: true,
  },

  /* หมายเหตุเรื่อง Security: 
     ฟังก์ชัน headers() ไม่สามารถใส่ในนี้ได้เมื่อใช้ output: 'export'
     เนื่องจาก GitHub Pages เป็น Static Hosting ที่ไม่มี Server-side Node.js 
     ในการส่ง Custom Headers ออกไปครับ
  */
};

export default nextConfig;
