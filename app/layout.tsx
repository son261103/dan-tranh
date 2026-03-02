import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-main',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Lớp Học Đàn Tranh – Giữ Hồn Âm Nhạc Dân Tộc',
  description:
    'Lớp học Đàn Tranh Việt Nam & Đàn Cổ Tranh Trung Quốc. Học từ cơ bản đến nâng cao – Phù hợp mọi lứa tuổi. Tại Hải Phòng.',
  generator: 'v0.app',
  keywords: ['đàn tranh', 'cổ tranh', 'nhạc dân tộc', 'học nhạc', 'Hải Phòng'],
}

export const viewport = {
  themeColor: '#64313E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
