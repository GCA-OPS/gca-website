import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Facilities & Property Assessments, GeoCam Australia',
  description:
    'Create PCA and FCA data using maps with precise geo-tagged asset condition capture, directly in the field. No more paper reports without locations.',
}

const tags = [
  'Property Condition Assessment',
  'Facility Condition Assessment',
  'Asset Inventory',
  'GDA2020 Compliant',
  'Mobile Mapping',
]

const painPoints = [
  'Assets logged without coordinates, impossible to locate on a plan or map',
  "Photos filed by date, not by asset, can't link image to condition score",
  'Return visits required when location data is ambiguous or missing',
  'No portfolio-wide view of asset condition across a property estate',
]

const solutionCards = [
  {
    title: 'Map-Linked Data Capture',
    body: 'Every asset, condition score, and photo is captured with a precise GPS coordinate. Data is map-linked from the moment it is recorded, not retrofitted after the fact.',
  },
  {
    title: 'Portfolio Condition Dashboard',
    body: 'Aggregate condition scores across an entire property portfolio in a single map view. Filter by asset class, condition rating, or maintenance priority instantly.',
  },
  {
    title: 'Compliance-Ready Outputs',
    body: 'Export PCA and FCA reports compatible with Australian standards and your existing asset management system. GDA2020 compliant outputs as standard.',
  },
]

const capabilities = [
  { num: '01', title: 'Geo-Tagged Asset Inventory', body: 'Every asset captured with sub-metre GNSS coordinates. Search any record by location on a live map.' },
  { num: '02', title: 'Condition Scoring Framework', body: 'Standardised 1–5 condition scoring with photo evidence attached per asset, per visit.' },
  { num: '03', title: '360° Photo Documentation', body: 'Immersive 360° imagery captured alongside point data for unambiguous condition evidence.' },
  { num: '04', title: 'Offline Field Capture', body: 'Capture data in basements, carparks, and remote properties with no mobile coverage required.' },
  { num: '05', title: 'Portfolio Map View', body: 'Visualise condition scores across an entire estate on a single map. Filter and export by priority.' },
  { num: '06', title: 'GIS & AMS Integration', body: 'Push data directly to ArcGIS Feature Services or export to your Asset Management System.' },
]

const stats = [
  { stat: '60%', label: 'Reduction in return site visits', desc: 'Assets located first time, every time.' },
  { stat: '3×', label: 'Faster report production', desc: 'Automated geo-linked outputs replace manual compilation.' },
  { stat: '100%', label: 'Asset location capture rate', desc: 'No asset recorded without a coordinate.' },
  { stat: '1', label: 'Operator per survey crew needed', desc: 'Backpack capture enables single-operator surveys.' },
]

const steps = [
  { num: '01', title: 'Mobilise', body: 'GeoCam backpack unit configured for your assessment schema. Asset classes and condition fields set up ahead of arrival.' },
  { num: '02', title: 'Capture', body: 'Walk the property. Log each asset with GPS coordinate, condition score, and 360° photo evidence automatically attached.' },
  { num: '03', title: 'Sync', body: 'Return to connectivity and sync. All captured data uploads to the cloud platform with full audit trail and timestamp records.' },
  { num: '04', title: 'Deliver', body: 'Receive your geo-linked PCA or FCA report, map-ready GIS data, and condition dashboard ready for stakeholder review.' },
]

const caseStudies = [
  'Municipal Asset Portfolio, Victorian Local Government',
  'Commercial Estate FCA, Brisbane CBD',
]

const BLUE = '#4a9eff'
const BG = '#0d1117'
const NAVY = '#0f172a'
const DIVIDER = 'rgba(255,255,255,0.07)'
const BLUE_BORDER = 'rgba(74,158,255,0.2)'
const BLUE_BG = 'rgba(74,158,255,0.05)'
const BLUE_TAG_BG = 'rgba(74,158,255,0.08)'
const BLUE_TAG_BORDER = 'rgba(74,158,255,0.3)'
const CARD_BG = 'rgba(255,255,255,0.02)'
const CARD_BORDER = 'rgba(255,255,255,0.07)'

const serifStyle = { fontFamily: 'var(--font-dm-serif-display)' }
const sansStyle = { fontFamily: 'var(--font-dm-sans)' }

function XIcon() {
  return (
    <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="#ef4444" strokeWidth="1.5" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function FacilitiesPropertyAssessmentsPage() {
  return (
    <div style={{ background: BG, color: '#e2e8f0', ...sansStyle }}>

      {/* ── 1. HERO ── */}
      <section style={{ borderBottom: `1px solid ${DIVIDER}` }} className="px-6 py-24 lg:py-36">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: 32, height: 2, background: BLUE }} />
            <span style={{ color: BLUE }} className="text-xs font-black uppercase tracking-[0.3em]">Use Case</span>
          </div>

          {/* H1 */}
          <h1 style={{ ...serifStyle, lineHeight: 1.1 }} className="text-5xl lg:text-7xl font-normal mb-8 text-white">
            Facilities &amp; Property<br />
            <em style={{ color: BLUE, fontStyle: 'italic' }}>Assessments</em>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mb-10" style={{ color: '#94a3b8' }}>
            No more paper reports and inventories without locations. Create PCA and FCA data using maps, with precise geo-tagged asset condition capture, directly in the field.
          </p>

          {/* Taxonomy tags */}
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                style={{ border: `1px solid ${BLUE_TAG_BORDER}`, color: BLUE, background: BLUE_TAG_BG }}
                className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM / SOLUTION ── */}
      <section style={{ borderBottom: `1px solid ${DIVIDER}` }} className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* LEFT: Problem */}
          <div>
            <p style={{ color: BLUE }} className="text-xs font-black uppercase tracking-[0.3em] mb-5">The Problem</p>
            <h2 style={{ ...serifStyle, lineHeight: 1.2 }} className="text-3xl lg:text-4xl font-normal text-white mb-6">
              Paper-based PCA and FCA has a location blindspot
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#94a3b8' }}>
              Traditional property and facility condition assessments produce disconnected datasets. Asset registers live in spreadsheets, photos sit in folders, and condition scores exist in PDFs, none of them linked to a coordinate.
            </p>
            <p className="text-sm leading-relaxed mb-10" style={{ color: '#94a3b8' }}>
              When a report references "the eastern stairwell" or "building 3, level 2", finding that asset on site requires local knowledge. Without geospatial context, data loses its value the moment the inspector leaves.
            </p>
            <ul className="space-y-4">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <XIcon />
                  <span className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Solution */}
          <div>
            <p style={{ color: BLUE }} className="text-xs font-black uppercase tracking-[0.3em] mb-5">The GeoCam Solution</p>
            <h2 style={{ ...serifStyle, lineHeight: 1.2 }} className="text-3xl lg:text-4xl font-normal text-white mb-8">
              Every asset, every condition score, precisely placed
            </h2>
            <div className="space-y-4">
              {solutionCards.map((card) => (
                <div
                  key={card.title}
                  style={{ border: `1px solid ${BLUE_BORDER}`, background: BLUE_BG }}
                  className="p-6 rounded-2xl"
                >
                  <h3 style={{ color: BLUE }} className="text-xs font-black uppercase tracking-widest mb-3">{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CAPABILITIES GRID ── */}
      <section style={{ borderBottom: `1px solid ${DIVIDER}` }} className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p style={{ color: BLUE }} className="text-xs font-black uppercase tracking-[0.3em] mb-4">Capabilities</p>
          <h2 style={serifStyle} className="text-3xl lg:text-4xl font-normal text-white mb-14">
            Built for field-grade condition assessment.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.num}
                style={{ border: `1px solid ${CARD_BORDER}`, background: CARD_BG }}
                className="p-8 rounded-2xl"
              >
                <div style={{ color: BLUE }} className="text-xs font-black uppercase tracking-widest mb-5">{cap.num}</div>
                <h3 className="text-sm font-black text-white mb-3">{cap.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. STATS BAR ── */}
      <section style={{ background: '#0a0f1a', borderBottom: `1px solid ${DIVIDER}` }} className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.stat}>
              <div style={{ color: BLUE, ...serifStyle }} className="text-5xl lg:text-6xl font-normal mb-2">{s.stat}</div>
              <div className="text-sm font-black text-white mb-1">{s.label}</div>
              <div className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. WORKFLOW ── */}
      <section style={{ borderBottom: `1px solid ${DIVIDER}` }} className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p style={{ color: BLUE }} className="text-xs font-black uppercase tracking-[0.3em] mb-4">How It Works</p>
          <h2 style={serifStyle} className="text-3xl lg:text-4xl font-normal text-white mb-16">
            From site to report in four steps.
          </h2>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector line — desktop only */}
            <div
              className="hidden md:block absolute top-5 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px"
              style={{ background: `rgba(74,158,255,0.15)` }}
            />
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div
                  style={{ background: BLUE }}
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-6 relative z-10"
                >
                  <span className="text-[10px] font-black text-white">{step.num}</span>
                </div>
                <h3 className="text-sm font-black text-white mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CASE STUDIES CTA ── */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div
            style={{ background: NAVY, border: `1px solid ${DIVIDER}` }}
            className="rounded-3xl p-10 lg:p-16"
          >
            <div className="max-w-2xl mb-12">
              <p style={{ color: BLUE }} className="text-xs font-black uppercase tracking-[0.3em] mb-4">Case Studies</p>
              <h2 style={serifStyle} className="text-3xl lg:text-4xl font-normal text-white mb-4">
                See it working in the real world
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                Read how Australian property managers and facility operators have cut assessment costs and eliminated return visits using GeoCam.
              </p>
            </div>

            {/* Case study rows */}
            <div style={{ borderTop: `1px solid ${DIVIDER}` }} className="mb-10">
              {caseStudies.map((study) => (
                <a
                  key={study}
                  href="#"
                  style={{ borderBottom: `1px solid ${DIVIDER}` }}
                  className="flex items-center justify-between py-5 group"
                >
                  <span className="text-sm font-black text-white group-hover:text-blue-400 transition-colors">{study}</span>
                  <span
                    style={{ color: BLUE, border: `1px solid ${BLUE_TAG_BORDER}` }}
                    className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shrink-0 ml-4"
                  >
                    Case Study
                  </span>
                </a>
              ))}
              <a
                href="#"
                style={{ borderBottom: `1px solid ${DIVIDER}` }}
                className="flex items-center justify-between py-5 group"
              >
                <span className="text-sm font-black group-hover:text-white transition-colors" style={{ color: '#94a3b8' }}>All Case Studies</span>
                <span style={{ color: BLUE }} className="text-[10px] font-black uppercase tracking-widest">View All →</span>
              </a>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              style={{ background: BLUE }}
              className="inline-block text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:opacity-90 transition-opacity"
            >
              Talk to us about your project
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
