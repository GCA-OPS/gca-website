import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — GeoCam Australia',
  description: 'Official Australian distributor of GeoCam hardware and exclusive Data-as-a-Service provider for the region. Based in Melbourne, VIC.',
}

const standards = [
  {
    name: 'GDA2020',
    body: 'All positioning data compliant with Geocentric Datum of Australia 2020. The current national standard for spatial data.',
  },
  {
    name: 'ISO 9001 Ready',
    body: 'Quality management systems framework for enterprise deployments across Australian government and infrastructure sectors.',
  },
]

const offices = [
  {
    label: 'Australia HQ',
    location: 'Melbourne, VIC',
    detail: 'Official Australian distributor. Serving all states and territories.',
  },
  {
    label: 'Global HQ',
    location: 'Los Angeles, USA',
    detail: 'GeoCam technology development and global operations centre.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="py-24 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">About</p>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Geocam Australia
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Official Australian distributor of GeoCam hardware and exclusive Data-as-a-Service provider for the region.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Who We Are</p>
            <h2 className="text-3xl font-black tracking-tight mb-6">Built by geospatial people, for geospatial people.</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              GeoCam has been designed and built by a passionate founding team with a deep background in enterprise geospatial, asset management, and design workflows. We have blended this knowledge with a world-class technical team possessing deep expertise in 3D image processing and Machine Learning.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Geocam Australia brings this technology to the Australian market with deep local knowledge of Australian standards, regulations, and the unique operating conditions of our infrastructure environment.
            </p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <Image
              src="/images/geocam-xyz/image-asset.jpeg"
              alt="GeoCam team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-blue-400 uppercase tracking-[0.4em] mb-6">Mission</p>
          <blockquote className="text-2xl lg:text-3xl font-black leading-tight mb-8 tracking-tight">
            &ldquo;The world is changing rapidly — urban growth and environmental shifts are putting pressure on the organisations that manage critical infrastructure. Our mission is to help these organisations create accurate, current Geospatial Digital Twin data to support better decision-making, smarter designs, and predictive modelling.&rdquo;
          </blockquote>
          <p className="text-slate-400">
            We combine GeoCam&apos;s cutting-edge AI-powered platform with deep local knowledge of Australian standards to bring this mission to life across infrastructure, utilities, and government sectors.
          </p>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Vision</p>
          <h2 className="text-3xl font-black tracking-tight mb-6">Mapping becomes monitoring.</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-lg">
            Our vision is to democratise access to low-cost, high-accuracy cameras that create geospatial intelligence and maps at unprecedented temporal scales. Where mapping used to be a one-time project, GeoCam makes it a continuous process.
          </p>
          <p className="text-slate-600 leading-relaxed">
            For Australian Councils, utilities, and government agencies — this means always-current digital twins, faster decision-making, and predictive asset management built on real-world data.
          </p>
        </div>
      </section>

      {/* ── STANDARDS ── */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Compliance</p>
          <h2 className="text-3xl font-black tracking-tight mb-10">Australian Standards.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {standards.map(({ name, body }) => (
              <div key={name} className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-xl font-black mb-3">{name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Global Network</p>
          <h2 className="text-3xl font-black tracking-tight mb-10">Where we operate.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {offices.map(({ label, location, detail }) => (
              <div key={label} className="p-8 border border-slate-200 rounded-2xl">
                <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3">{label}</div>
                <div className="text-2xl font-black mb-2">{location}</div>
                <p className="text-sm text-slate-500">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-black tracking-tight mb-4">Ready to bring GeoCam to your project?</h2>
        <p className="text-blue-100 mb-8">Talk to the Australian team about hardware, data services, and deployment.</p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:shadow-xl transition-all"
        >
          Get in Touch
        </Link>
      </section>
    </>
  )
}
