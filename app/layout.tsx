import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'GeoCam Australia | AI-Native Reality Capture Platform',
  description:
    'The first AI-Native Reality Capture Platform. Aerial, Street, Indoors. Enterprise ready mapping at any scale for Australian infrastructure.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <body className={`${inter.variable} font-sans bg-white text-slate-900 antialiased min-h-screen`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
