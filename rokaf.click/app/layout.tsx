import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'rokaf.click',
  description: '공군 부대 간 클릭 수로 경쟁합니다.',
  applicationName: 'rokaf.click',
  authors: {
    url: 'https://github.com/ohdoyoel',
    name: 'ohdoyoel'
  },
  generator: 'Next.js',
  keywords: ['react', 'nextjs', 'rokaf.click', 'popcat.click', 'rokaf', '공군', '클리커', '로카프닷클릭'],
  creator: 'ohdoyoel',
  publisher: 'netlify',
  // robots:, 
  icons: {
    icon: '/icons/android-icon-192x192.png',
    shortcut: '/icons/android-icon-96x96.png',
    apple: '/icons/apple-icon-180x180.png',
    other: {
      rel: 'apple-icon-precomposed',
      url: '/icons/apple-icon-precomposed.png'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
