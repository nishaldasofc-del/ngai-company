import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'NGAI - Next Generation Artificial Intelligence',
  description: 'Enterprise-grade AI infrastructure for the next generation of intelligent applications. Build, deploy, and scale AI with unprecedented performance.',
  keywords: ['AI', 'artificial intelligence', 'machine learning', 'enterprise AI', 'AI infrastructure', 'NGAI'],
  authors: [{ name: 'NGAI' }],
  openGraph: {
    title: 'NGAI - Next Generation Artificial Intelligence',
    description: 'Enterprise-grade AI infrastructure for the next generation of intelligent applications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NGAI - Next Generation Artificial Intelligence',
    description: 'Enterprise-grade AI infrastructure for the next generation of intelligent applications.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
