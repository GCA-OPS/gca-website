import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — GeoCam Australia',
  description: 'News, insights, and updates from GeoCam Australia. Reality capture, GIS, Australian infrastructure.',
}

export default function BlogPage() {
  return (
    <>
      <section className="py-24 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Insights</p>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight uppercase italic mb-6">
            Blog.
          </h1>
          <p className="text-xl text-slate-500">News and insights from the GeoCam Australia team.</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-blue-100">
            Coming Soon
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-4">Content coming soon.</h2>
          <p className="text-slate-500 mb-10 max-w-lg mx-auto">
            We&apos;re working on articles covering reality capture workflows, Australian GIS standards, and GeoCam platform updates. Check back soon.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 hover:shadow-xl transition-all"
          >
            Sign Up for Newsletter
          </Link>
        </div>
      </section>
    </>
  )
}
