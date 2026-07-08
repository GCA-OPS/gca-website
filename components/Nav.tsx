'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Product' },
  { href: '/data', label: 'Data' },
  { href: '/use-cases/facilities-property-assessments', label: 'Use Cases' },
  { href: '/subscription', label: 'Subscription' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Announcement / compliance bar */}
      <div className="bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.3em] py-2.5 px-6 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            GCA-SYSTEMS-V1
          </span>
          <span className="hidden md:block">ISO 9001 FRAMEWORK READY</span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/geocam-logo.png"
              alt="GeoCam Australia"
              width={160}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.15em] text-slate-400">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`py-2 transition-colors hover:text-slate-900 border-b-2 ${
                  pathname === href
                    ? 'text-blue-600 border-blue-600'
                    : 'border-transparent'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all ${
                pathname === '/contact' ? 'bg-blue-600' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 flex flex-col gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-slate-900 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-900 transition-all ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-900 transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-6 flex flex-col gap-5 text-[11px] font-black uppercase tracking-[0.15em]">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={pathname === href ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-slate-900 text-white px-6 py-3 rounded-full text-center hover:bg-blue-600 transition-all"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}
