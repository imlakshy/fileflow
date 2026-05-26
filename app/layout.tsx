import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: 'FileFlow - AI-Powered File Processing PWA',
  description: 'Process files directly on your device with FileFlow. Fast, private, and secure offline-first file conversion, compression, and AI-powered tools.',
  generator: 'v0.app',
  keywords: ['file converter', 'pdf tools', 'image compression', 'video tools', 'audio converter', 'offline PWA', 'AI tools'],
  authors: [{ name: 'FileFlow' }],
  creator: 'FileFlow',
  publisher: 'FileFlow',
  manifest: '/manifest.json',
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
  themeColor: '#0a0a12',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          card:
            "bg-zinc-950 border border-zinc-800 rounded-3xl",
        },
      }}
    >
      <html lang="en" className="dark bg-background">
        <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </body>
      </html>
    </ClerkProvider>
  )
}
