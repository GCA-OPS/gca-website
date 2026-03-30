import type { Metadata } from 'next'
import { Inter, DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-dm-serif-display',
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
      <body className={`${inter.variable} ${dmSans.variable} ${dmSerifDisplay.variable} font-sans bg-white text-slate-900 antialiased min-h-screen`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
