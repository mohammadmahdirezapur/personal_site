import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'MMR',
  description: 'MMR',
  generator: 'MMR',
  icons: {
    icon: [
      {
        url: 'mmr_logo.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'mmr_logo.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'mmr_logo.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: 'mmr_logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
