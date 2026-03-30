import type { Metadata } from 'next'

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
  { num: '03', title: 'Sync', body: 'Return to connectivity and sync. All data uploads to the cloud platform with full audit trail and timestamp records.' },
  { num: '04', title: 'Deliver', body: 'Receive your geo-linked PCA or FCA report, map-ready GIS data, and condition dashboard ready for stakeholder review.' },
]


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
    <>
      {/* ── HERO ── */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Use Case</p>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Facilities &amp; Property Assessments
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl leading-relaxed mb-10">
            No more paper reports and inventories without locations. Create PCA and FCA data using maps, with precise geo-tagged asset condition capture, directly in the field.
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM / SOLUTION ── */}
      <section className="py-24 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* LEFT: Problem */}
          <div>
            <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">The Problem</p>
            <h2 className="text-3xl font-black tracking-tight mb-6">
              Paper-based PCA and FCA has a location blindspot
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Traditional property and facility condition assessments produce disconnected datasets. Asset registers live in spreadsheets, photos sit in folders, and condition scores exist in PDFs, none of them linked to a coordinate.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              When a report references "the eastern stairwell" or "building 3, level 2", finding that asset on site requires local knowledge. Without geospatial context, data loses its value the moment the inspector leaves.
            </p>
            <ul className="space-y-4">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <XIcon />
                  <span className="text-sm text-slate-600 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Solution */}
          <div>
            <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">The GeoCam Solution</p>
            <h2 className="text-3xl font-black tracking-tight mb-8">
              Every asset, every condition score, precisely placed
            </h2>
            <div className="space-y-4">
              {solutionCards.map((card) => (
                <div key={card.title} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all">
                  <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES GRID ── */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Capabilities</p>
          <h2 className="text-3xl font-black tracking-tight mb-14">
            Built for field-grade condition assessment.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap) => (
              <div key={cap.num} className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all">
                <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">{cap.num}</div>
                <h3 className="text-base font-black mb-3">{cap.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-slate-900 text-white py-20 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.stat}>
              <div className="text-5xl font-black text-blue-400 mb-2">{s.stat}</div>
              <div className="text-sm font-black mb-1">{s.label}</div>
              <div className="text-xs text-slate-400 leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORKFLOW ── */}
      <section className="py-24 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">How It Works</p>
          <h2 className="text-3xl font-black tracking-tight mb-16">
            From site to report in four steps.
          </h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-5 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-blue-100" />
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mb-6 relative z-10">
                  <span className="text-[10px] font-black text-white">{step.num}</span>
                </div>
                <h3 className="text-base font-black mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
