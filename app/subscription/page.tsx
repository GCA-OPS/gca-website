import type { Metadata } from 'next'
import Link from 'next/link'
import PricingCards from '@/components/PricingCards'

export const metadata: Metadata = {
  title: 'Pricing — GeoCam Australia',
  description: 'GeoCam Australia subscription pricing. Try free for 5 days. Starter from $10,000 AUD/year. Professional and Enterprise plans available.',
}

const faqs = [
  {
    q: 'What is included in the 5-day free trial?',
    a: 'Your trial includes full access to the GeoCam platform — Manager, Viewer, and Editor apps — with a limited VPS credit allocation. No credit card required. At the end of the trial, choose a plan to continue or speak with our Australian team.',
  },
  {
    q: 'How do VPS credits work?',
    a: 'VPS credits are consumed as your captured imagery is processed through the Visual Positioning Engine. Street capture is measured in kilometres driven; indoor capture is measured in square metres walked. Credits are included in your plan and additional top-ups can be purchased at volume rates.',
  },
  {
    q: 'What is a camera term?',
    a: 'A camera term is the access period for your GeoCam 360 hardware unit. The Starter plan includes a 1-month term — ideal for trialling the platform. The Professional plan includes a 1-year term for ongoing programs. Enterprise customers can deploy multiple units under a custom arrangement.',
  },
  {
    q: 'Can I add users or upgrade my plan at any time?',
    a: 'Yes. You can upgrade your plan, purchase additional VPS credits, or add individual user licences (Admin, Editor, QAQC, or Viewer packs) at any time. Contact the Australian team and we will adjust your subscription.',
  },
  {
    q: 'Is all pricing in Australian dollars?',
    a: 'Yes. All pricing shown is in Australian dollars (AUD) and is exclusive of GST. Enterprise pricing is scoped and quoted on a project-by-project basis by our local team.',
  },
]

export default function SubscriptionPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Pricing</p>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight uppercase mb-6">
            Try it free for 5 days.
          </h1>
          <p className="text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
            No credit card required. Full platform access from day one. Choose a plan when you're ready.
          </p>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <PricingCards />
          <p className="text-center text-xs text-slate-400 mt-8">
            All pricing in AUD, ex-GST. Volume VPS credit top-ups available at any time.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">FAQ</p>
            <h2 className="text-4xl font-black tracking-tight">Common questions.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl border border-slate-200 p-8">
                <h3 className="text-base font-black mb-3">{q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <p className="text-xs font-black text-blue-400 uppercase tracking-[0.4em] mb-4">Get Started</p>
        <h2 className="text-3xl font-black tracking-tight mb-4">Ready to discuss a subscription?</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          We'll put together a quote tailored to your capture volumes and team size.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-500 hover:shadow-xl transition-all"
        >
          Request Pricing
        </Link>
      </section>
    </>
  )
}
