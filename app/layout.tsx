import type { Metadata } from 'next'
import { Oleo_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const oleoScript = Oleo_Script({
  subsets: ['latin'],
  variable: '--font-main',
  display: 'swap',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Lớp Học Đàn Tranh – Giữ Hồn Âm Nhạc Dân Tộc',
  description:
    'Lớp học Đàn Tranh Việt Nam & Đàn Cổ Tranh Trung Quốc. Học từ cơ bản đến nâng cao – Phù hợp mọi lứa tuổi. Tại Hải Phòng.',
  generator: 'v0.app',
  keywords: ['đàn tranh', 'cổ tranh', 'nhạc dân tộc', 'học nhạc', 'Hải Phòng'],
}

export const viewport = {
  themeColor: '#354024',
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
      <body className={`${oleoScript.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
