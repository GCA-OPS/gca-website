import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Product' },
  { href: '/data', label: 'Data' },
  { href: '/use-cases/facilities-property-assessments', label: 'Use Cases' },
  { href: '/subscription', label: 'Subscription' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <Link href="/">
            <Image
              src="/geocam-logo.png"
              alt="GeoCam Australia"
              width={160}
              height={48}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
            {footerLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-slate-900 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-200">
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            © 2025 Geocam Australia Pty Ltd
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            <Link href="mailto:admin@geocam.com.au" className="hover:text-blue-600 transition-colors">
              admin@geocam.com.au
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
