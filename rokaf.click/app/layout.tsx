import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'rokaf.click',
  description: '공군 부대 간 클릭 수로 경쟁합니다',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans-medium">{children}</body>
    </html>
  )
}
