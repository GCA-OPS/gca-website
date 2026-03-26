import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Subscription — GeoCam Australia',
  description: 'GeoCam Australia subscription pricing. Base annual subscription starting at $10,000 AUD. Camera, VPS credits, user licenses, and storage.',
}

const cameraTerms = [
  { term: '1 Month', price: '$5,000', note: 'Month-to-month flexibility' },
  { term: '1 Year', price: '$15,000', note: 'Most popular commitment', featured: true },
  { term: '3 Years', price: '$30,000', note: 'Best value, locked rate' },
]

const streetCredits = [
  { volume: '< 250 miles', annual: '$50 / mile', threeYear: '—' },
  { volume: '250 – 999 miles', annual: '$40 / mile', threeYear: '$35 / mile' },
  { volume: '1,000 – 2,499 miles', annual: '$30 / mile', threeYear: '$25 / mile' },
  { volume: '2,500 – 4,999 miles', annual: '$25 / mile', threeYear: '$20 / mile' },
  { volume: '> 5,000 miles', annual: '$20 / mile', threeYear: '$18 / mile' },
]

const indoorCredits = [
  { volume: '< 250k sqft', annual: '$0.020 / sqft', threeYear: '—' },
  { volume: '250k – 999k sqft', annual: '$0.016 / sqft', threeYear: '$0.014 / sqft' },
  { volume: '1M – 2.49M sqft', annual: '$0.012 / sqft', threeYear: '$0.010 / sqft' },
  { volume: '> 2.5M sqft', annual: '$0.009 / sqft', threeYear: '$0.008 / sqft' },
]

const userAccounts = [
  { role: 'Admin', price: '$2,500', period: 'per year' },
  { role: 'Editor', price: '$1,500', period: 'per year' },
  { role: 'QAQC', price: '$3,500', period: 'per year' },
  { role: 'Viewer (10-pack)', price: '$1,200', period: 'per year' },
]

const bundles = [
  'Field Data Services',
  'GIS / CAD / BIM Data Production',
  'ML Training and Application',
  'Training — In-Person, Remote, Asynchronous',
]

export default function SubscriptionPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Commercials</p>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight uppercase italic mb-6">
            Subscription Hub.
          </h1>
          <p className="text-2xl font-black text-slate-900 mb-4">
            Base Annual Subscription starting at <span className="text-blue-600">$10,000 AUD</span>
          </p>
          <p className="text-slate-500 max-w-xl mx-auto">
            Includes 1 month camera term, 150 miles or 250,000 sqft indoors of VPS credits, and a bundle of 5 Viewers &amp; 1 Admin. All pricing ex-GST.
          </p>
        </div>
      </section>

      {/* ── CAMERA TERM ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-3">Deployment</p>
          <h2 className="text-3xl font-black tracking-tight mb-10">Camera Term</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cameraTerms.map(({ term, price, note, featured }) => (
              <div
                key={term}
                className={`p-8 rounded-2xl border-2 ${
                  featured
                    ? 'border-blue-600 bg-slate-900 text-white'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {featured && (
                  <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-4">
                    Most Popular
                  </div>
                )}
                <div className={`text-[10px] font-black uppercase tracking-widest mb-3 ${featured ? 'text-slate-500' : 'text-slate-400'}`}>
                  Commitment
                </div>
                <div className="text-2xl font-black mb-1">{term}</div>
                <div className={`text-3xl font-black text-blue-600 mb-2`}>{price}</div>
                <div className={`text-xs ${featured ? 'text-slate-400' : 'text-slate-500'}`}>{note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VPS CREDITS ── */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-3">Usage</p>
          <h2 className="text-3xl font-black tracking-tight mb-3">VPS Credits</h2>
          <p className="text-slate-500 mb-12">Pay per kilometre (or square foot) processed. Volume discounts available for annual and 3-year commitments.</p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Street */}
            <div>
              <h3 className="text-lg font-black uppercase mb-4">Street Imaging</h3>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="grid grid-cols-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-6 py-3">
                  <div>Volume</div>
                  <div>Annual</div>
                  <div>3-Year</div>
                </div>
                {streetCredits.map(({ volume, annual, threeYear }, i) => (
                  <div
                    key={volume}
                    className={`grid grid-cols-3 px-6 py-4 text-sm border-t border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
                  >
                    <div className="font-medium text-slate-700">{volume}</div>
                    <div className="font-black text-blue-600">{annual}</div>
                    <div className="text-slate-500">{threeYear}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indoor */}
            <div>
              <h3 className="text-lg font-black uppercase mb-4">Indoor Imaging</h3>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="grid grid-cols-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-6 py-3">
                  <div>Volume</div>
                  <div>Annual</div>
                  <div>3-Year</div>
                </div>
                {indoorCredits.map(({ volume, annual, threeYear }, i) => (
                  <div
                    key={volume}
                    className={`grid grid-cols-3 px-6 py-4 text-sm border-t border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
                  >
                    <div className="font-medium text-slate-700">{volume}</div>
                    <div className="font-black text-blue-600">{annual}</div>
                    <div className="text-slate-500">{threeYear}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400 mt-6">
            Approximately 200 miles of capture or 600,000 sqft per TB of storage consumed.
          </p>
        </div>
      </section>

      {/* ── USER ACCOUNTS ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-3">Access</p>
          <h2 className="text-3xl font-black tracking-tight mb-10">App User Accounts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {userAccounts.map(({ role, price, period }) => (
              <div key={role} className="p-6 border border-slate-200 rounded-2xl bg-white">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Role</div>
                <div className="text-xl font-black mb-1">{role}</div>
                <div className="text-2xl font-black text-blue-600">{price}</div>
                <div className="text-xs text-slate-500 mt-1">{period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORAGE ── */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-3xl border border-slate-200 p-10">
          <div>
            <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-2">Storage</p>
            <h2 className="text-2xl font-black tracking-tight">Beyond the base subscription</h2>
            <p className="text-slate-500 mt-2">Storage is included up to the base allocation. Additional capacity billed monthly.</p>
          </div>
          <div className="text-center shrink-0">
            <div className="text-4xl font-black text-blue-600">$20</div>
            <div className="text-sm font-black text-slate-500 uppercase tracking-widest">per TB / Month</div>
          </div>
        </div>
      </section>

      {/* ── SERVICE BUNDLES ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-3">Add-Ons</p>
          <h2 className="text-3xl font-black tracking-tight mb-10">Service Bundles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {bundles.map((bundle) => (
              <div key={bundle} className="flex items-center gap-4 p-6 border border-slate-200 rounded-2xl bg-white">
                <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                <span className="font-bold text-slate-700">{bundle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <p className="text-xs font-black text-blue-400 uppercase tracking-[0.4em] mb-4">All pricing in AUD (ex-GST)</p>
        <h2 className="text-3xl font-black tracking-tight mb-4">Ready to discuss a subscription?</h2>
        <p className="text-slate-400 mb-8">We&apos;ll put together a quote tailored to your capture volumes and team size.</p>
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
