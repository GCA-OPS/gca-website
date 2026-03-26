import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — GeoCam Australia',
  description: 'Get in touch with the GeoCam Australia team. Enquire about hardware, data services, subscriptions, or demos.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Get in Touch</p>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight uppercase italic mb-4">
            Connect.
          </h1>
          <p className="text-xl text-slate-500">
            Our enquiry portal is integrated with GCA-CRM for immediate technical review.
          </p>
        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Left: contact info */}
          <div>
            <div className="space-y-8">
              <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Australia HQ</div>
                <div className="text-lg font-black">Melbourne, VIC</div>
                <div className="text-sm text-slate-500 mt-1">Serving all states and territories</div>
              </div>
              <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Global HQ</div>
                <div className="text-lg font-black">Los Angeles, USA</div>
                <div className="text-sm text-slate-500 mt-1">GeoCam technology development centre</div>
              </div>
              <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Email</div>
                <a
                  href="mailto:admin@geocam.com.au"
                  className="text-blue-600 font-black hover:underline"
                >
                  admin@geocam.com.au
                </a>
              </div>
            </div>

            <div className="mt-16 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">What to include</div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-black">—</span> Your organisation and role</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-black">—</span> Capture environment (street, indoor, aerial)</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-black">—</span> Approximate capture volume (km or sqft)</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-black">—</span> Target GIS platform (Esri, QGIS, etc.)</li>
              </ul>
            </div>
          </div>

          {/* Right: form — wiring pending */}
          <form className="space-y-4">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-4 rounded-xl border border-slate-200 outline-none focus:border-blue-600 transition-all text-sm font-medium"
              />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@organisation.com.au"
                className="w-full px-4 py-4 rounded-xl border border-slate-200 outline-none focus:border-blue-600 transition-all text-sm font-medium"
              />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Organisation</label>
              <input
                type="text"
                name="organization"
                placeholder="Council, utility, contractor..."
                className="w-full px-4 py-4 rounded-xl border border-slate-200 outline-none focus:border-blue-600 transition-all text-sm font-medium"
              />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Enquiry Type</label>
              <select
                name="type"
                className="w-full px-4 py-4 rounded-xl border border-slate-200 outline-none focus:border-blue-600 transition-all text-sm font-medium bg-white"
              >
                <option value="">Select...</option>
                <option value="hardware">Hardware / Camera</option>
                <option value="data">Data Services</option>
                <option value="subscription">Subscription &amp; Pricing</option>
                <option value="demo">Demo Request</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Message *</label>
              <textarea
                name="message"
                required
                placeholder="Brief requirement..."
                rows={5}
                className="w-full px-4 py-4 rounded-xl border border-slate-200 outline-none focus:border-blue-600 transition-all text-sm font-medium resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 text-white font-black py-4 rounded-xl uppercase tracking-widest text-xs hover:bg-blue-600 transition-all"
            >
              Initialize Entry
            </button>
            <p className="text-xs text-slate-400 text-center">
              Form integration pending. In the meantime, email us directly at{' '}
              <a href="mailto:admin@geocam.com.au" className="text-blue-600 hover:underline">
                admin@geocam.com.au
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
