import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Data Services — GeoCam Australia',
  description: 'Build your own map data with GeoCam. Reality capture, feature extraction, CAD and GIS data production for Australian infrastructure.',
}

const dataTypes = [
  {
    sector: 'Public Safety',
    title: 'Fire and Police Pre Plans',
    body: 'Floor plans, critical assets, access points, and hydrant locations for Fire, Police, and Ambulance Services.',
  },
  {
    sector: 'Telecommunications',
    title: 'Fiber Network Assets',
    body: 'Poles, attachments, connectivity, strand counts, and more. Complete OSP asset capture from vehicle or backpack.',
  },
  {
    sector: 'Electric Utilities',
    title: 'Distribution Network Assets',
    body: 'Structures, devices, structure junctions, electric line and sub-networks. Compliant with ArcGIS Utility Network.',
  },
  {
    sector: 'Facilities',
    title: 'Indoor Facilities Management',
    body: 'Architectural floor plans and asset locations captured via backpack. Ideal for campuses, hospitals, and government buildings.',
  },
  {
    sector: 'Public Works',
    title: 'Street and Road Assets',
    body: 'Signs by type, poles, signals, streetlights, storm water infrastructure. Condition assessment ready.',
  },
]

export default function DataPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="py-24 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Data Services</p>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight uppercase italic mb-6">
            Visual Intelligence.
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Build your own map data with GeoCam, or let us produce it for you. From raw imagery to finished GIS, CAD, and BIM data.
          </p>
        </div>
      </section>

      {/* ── TWO SERVICES ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Imagery as a Service */}
          <div className="bg-slate-50 p-12 rounded-3xl border border-slate-200">
            <span className="text-xs font-black text-blue-600 uppercase tracking-widest">3.1 Reality Capture</span>
            <h2 className="text-3xl font-black mt-2 mb-4 uppercase">Imagery as a Service</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Complete reality capture delivered as a managed service. Includes 3D Textured Meshes, Point Clouds, and Orthorenders — all optimised for Australian coordinate systems and standards.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
                GDA2020 Compliant
              </span>
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
                3D Mesh Export
              </span>
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
                Point Cloud
              </span>
            </div>
          </div>

          {/* CAD & GIS Data */}
          <div className="bg-slate-900 text-white p-12 rounded-3xl">
            <span className="text-xs font-black text-blue-400 uppercase tracking-widest">3.2 Map Production</span>
            <h2 className="text-3xl font-black mt-2 mb-4 uppercase">CAD &amp; GIS Data</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              We offer data services — custom Map and CAD data production at almost any Level of Detail (LOD). Turning raw imagery into precise vector data for Councils, Utilities, and Construction projects.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/10 text-white/70 rounded-full text-[10px] font-black uppercase tracking-widest">
                Feature Extraction Engine
              </span>
              <span className="px-4 py-2 bg-white/10 text-white/70 rounded-full text-[10px] font-black uppercase tracking-widest">
                Any LOD
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDITOR HIGHLIGHT ── */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Self-Service Option</p>
            <h2 className="text-4xl font-black tracking-tight mb-6">
              Build your own map data with the GeoCam Editor.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              GeoCam Editor enables the creation of map features directly from your orientated imagery. Connect with your Esri ArcGIS Feature Services and create features into almost any data model.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Create Map and CAD Data using 3D Reconstructions. Single-click feature creation from immersive 360° imagery.
            </p>
            <Link
              href="/product"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 hover:shadow-xl transition-all"
            >
              See the Editor
            </Link>
          </div>
          <div className="bg-white aspect-video rounded-3xl border border-slate-200 flex items-center justify-center text-slate-300 font-bold italic">
            [ GeoCam Editor screenshot ]
          </div>
        </div>
      </section>

      {/* ── DATA TYPES ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Industries Served</p>
            <h2 className="text-4xl font-black tracking-tight">What we map.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataTypes.map(({ sector, title, body }) => (
              <div key={title} className="p-8 border border-slate-200 rounded-2xl hover:border-blue-600 hover:shadow-md transition-all group">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3">{sector}</p>
                <h3 className="text-lg font-black mb-3">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3D EXPORTS ── */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white/5 aspect-video rounded-3xl border border-white/10 flex items-center justify-center text-white/20 font-bold italic">
            [ 3D Textured Mesh example ]
          </div>
          <div>
            <p className="text-xs font-black text-blue-400 uppercase tracking-[0.4em] mb-4">3D Outputs</p>
            <h2 className="text-3xl font-black tracking-tight mb-6 uppercase">
              Export 3D Textured Meshes and derivatives.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Export 3D Textured Meshes from the GeoCam platform and a package of derivatives, including Point Clouds and Orthorenders. Compatible with major GIS, CAD, and BIM platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              {['3D Textured Mesh', 'Point Cloud', 'Orthorender', 'BIM Ready', 'CAD Compatible'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white/10 text-white/70 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center border-t border-slate-200">
        <h2 className="text-3xl font-black tracking-tight mb-4">Talk to us about your data requirements.</h2>
        <p className="text-slate-500 mb-8 max-w-xl mx-auto">
          Whether you want to self-serve with the Editor or have us deliver finished GIS data, we can tailor a solution for your project.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-600 transition-all"
        >
          Contact Us
        </Link>
      </section>
    </>
  )
}
