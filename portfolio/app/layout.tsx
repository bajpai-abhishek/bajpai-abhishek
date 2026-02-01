import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space'
});

export const metadata: Metadata = {
  title: 'Abhishek Bajpai | Digital Marketing & Meta Ads Specialist',
  description: 'Performance-driven Social Media & Meta Ads Specialist with 2+ years of experience in data-backed digital marketing campaigns, audience segmentation, and conversion optimization.',
  keywords: ['Digital Marketing', 'Meta Ads', 'Performance Marketing', 'Social Media', 'Conversion Optimization', 'Abhishek Bajpai'],
  authors: [{ name: 'Abhishek Bajpai' }],
  openGraph: {
    title: 'Abhishek Bajpai | Digital Marketing & Meta Ads Specialist',
    description: 'Performance-driven Social Media & Meta Ads Specialist with expertise in Meta Ads, audience segmentation, and conversion optimization.',
    type: 'website',
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
