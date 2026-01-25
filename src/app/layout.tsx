import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Heyjaws - Trade Safely. Connect Locally.',
  description: 'The ultimate neighborhood app for safe marketplaces and community connection. Join thousands of neighbors trading safely with Jaws Points verified meetup zones.',
  keywords: ['neighborhood app', 'local marketplace', 'safe trading', 'community', 'used items'],
  authors: [{ name: 'Heyjaws' }],
  openGraph: {
    title: 'Heyjaws - Trade Safely. Connect Locally.',
    description: 'The ultimate neighborhood app for safe marketplaces and community connection.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
