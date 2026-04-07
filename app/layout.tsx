// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Theme } from './theme'

const inter = Inter({ subsets: ['latin'] })

// ✅ Les metadata RESTENT ici (pas de 'use client')
export const metadata: Metadata = {
  title: {
    default: 'Kenny Johary | Développeur Fullstack',
    template: '%s | Kenny Johary'
  },
  description: 'Portfolio de Kenny Johary - Développeur Python, Odoo, Next.js et Data Engineering',
  keywords: ['Développeur', 'Python', 'Odoo', 'Next.js', 'Portfolio', 'Madagascar'],
  authors: [{ name: 'Kenny Johary Randria Harison' }],
  openGraph: {
    title: 'Kenny Johary - Développeur Fullstack',
    description: 'Développeur backend Python/Odoo spécialisé Next.js',
    url: 'https://ton-site.com',
    siteName: 'Kenny Johary Portfolio',
    images: [{ url: 'https://ton-site.com/og-image.jpg', width: 1200, height: 630 }],
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  )
}