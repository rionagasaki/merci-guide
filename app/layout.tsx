import type { Metadata } from 'next'
import 'react-notion-x/src/styles.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Merci Docs',
  description: 'Documentation powered by Notion',
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
