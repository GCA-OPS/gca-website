import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subscriptions — GeoCam Australia',
  description: 'Annual Hardware as a Service subscriptions for GeoCam Australia. Talk to us about camera terms, VPS credits, storage, and app users.',
}

const details = [
  {
    heading: 'Camera Term',
    body: '12 Months',
  },
  {
    heading: 'Storage',
    body: 'Included — you can collect more than you process.',
  },
  {
    heading: 'VPS Credits',
    body: 'Pick by linear km or square metre.',
  },
  {
    heading: 'App Users',
    body: 'Bundle of 5 Viewers & 1 Admin.',
  },
]

export default function SubscriptionPage() {
  return (
    <>
    {/* ── STATEMENT BANNER ── */}
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-black text-blue-400 uppercase tracking-[0.4em] mb-6">Managed Service</p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6 max-w-2xl">
          GeoCam capability.<br />GCA delivered.
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
          We're not handing you keys just yet — we're operating the platform on your behalf. Same data. Same intelligence. Zero internal overhead.
        </p>
        <p className="text-xs font-black text-blue-400 uppercase tracking-widest">
          Subscriptions coming soon.
        </p>
      </div>
    </section>

    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl lg:text-6xl font-black tracking-tight uppercase leading-tight mb-24 max-w-3xl">
          Talk to us, about annual Hardware as a Service Subscriptions
        </h1>

        {/* Detail rows */}
        <div className="divide-y divide-slate-200">
          {details.map(({ heading, body }) => (
            <div key={heading} className="grid grid-cols-2 gap-12 py-10">
              <p className="text-base font-black uppercase tracking-widest text-slate-900">{heading}</p>
              <p className="text-base text-slate-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  )
}
