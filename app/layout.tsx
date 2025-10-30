import type { Metadata } from 'next'
import 'react-notion-x/src/styles.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Merci Docs',
  description: 'Documentation powered by Notion',
  metadataBase: new URL('https://docs.merci-web.com'),
  openGraph: {
    title: 'Merci Docs',
    description: 'Documentation powered by Notion',
    url: 'https://docs.merci-web.com',
    siteName: 'Merci Docs',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'merci使い方ガイド',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merci Docs',
    description: 'Documentation powered by Notion',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
