import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NOVEN — Digital Creative Agency',
  description: 'We build digital experiences that drive growth. Strategy, design, and development.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
