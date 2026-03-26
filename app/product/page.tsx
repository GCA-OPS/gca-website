import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Product — GeoCam Australia',
  description: 'GeoCam 360 hardware, Visual Positioning System, and the full suite of applications: Manager, Editor, QAQC, Viewer, and PII.',
}

const specs = [
  'Integrated GNSS for High Accuracy Positioning',
  'Global Shutter 36 MP 360° Imagery',
  'Integrated Solid State Storage',
  'Onboard NVIDIA GPU for ML Privacy Filters',
  'External TSA Approved Battery',
  'Operate @ 75 MPH on Highways + 5 FPS Indoors',
]

const mounts = ['Vehicle Mount', 'Backpack', 'Monopole', 'Indoor / Manhole']

const apps = [
  {
    id: '2.2',
    name: 'Manager',
    tagline: 'Create and Manage Reality Capture Projects',
    body: 'Organisational setup, project management, data management, processing capabilities, and workflow configuration — all in one cloud dashboard.',
    badge: null,
    image: '/images/geocam-xyz/Untitled (4).png',
    imageAlt: 'GeoCam Manager — project management dashboard',
  },
  {
    id: '2.3',
    name: 'Editor',
    tagline: 'Effortless Map Data Creation, Single Click in Images',
    body: 'Web streaming, direct ArcGIS Feature Service integration, rapid data creation, accuracy refinement, and smart symbol selection.',
    badge: 'ArcGIS Integration',
    image: '/images/geocam-xyz/Untitled (6).png',
    imageAlt: 'GeoCam Editor — feature creation from 360° imagery',
  },
  {
    id: '2.4',
    name: 'QAQC',
    tagline: 'Efficient Quality Assurance for Map Data',
    body: 'Rapid review, enhanced efficiency, accuracy checks, and quick correction tools. Automated validation against Australian standards.',
    badge: null,
    image: '/images/geocam-xyz/Untitled (12).png',
    imageAlt: 'GeoCam QAQC — quality assurance interface',
  },
  {
    id: '2.5',
    name: 'Viewer',
    tagline: 'Simplify Your Imagery and GIS Data Interaction',
    body: 'Precise navigation, feature search, Lock View tool, and collaboration features. Share immersive 360° views with clients and stakeholders.',
    badge: null,
    image: '/images/geocam-xyz/Picture6.png',
    imageAlt: 'GeoCam Viewer — imagery and GIS data exploration',
  },
  {
    id: '2.6',
    name: 'PII',
    tagline: 'Protect Privacy with Machine Learning',
    body: 'Automatically blur vehicles and people across all captured imagery. Comprehensive coverage, flexible deployment, and customisable solutions.',
    badge: 'ML Powered',
    image: '/images/geocam-xyz/Pii image.png',
    imageAlt: 'GeoCam PII — ML-powered privacy blurring of vehicles and people',
  },
]

export default function ProductPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">The Platform</p>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight uppercase italic mb-6">
            Hardware &amp; Software.
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            A single integrated platform from field capture to finished GIS data. Built for Australian conditions, compliant with Australian standards.
          </p>
        </div>
      </section>

      {/* ── HARDWARE ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] border border-slate-200 p-12 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/images/geocam-xyz/EdgarCamera.png"
                alt="GeoCam 360 camera unit"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <span className="text-xs font-black text-blue-600 uppercase tracking-widest">2.1 Hardware</span>
              <h2 className="text-4xl font-black mt-2 mb-2 uppercase tracking-tight">GeoCam 360</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                A single device for aerial, streets and indoors. Deploy under UAS, on vehicles, mounted on backpacks, and lower it down in manholes.
              </p>

              <ul className="space-y-3 mb-8">
                {specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0" />
                    <span className="font-medium text-slate-700">{spec}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-3">
                {mounts.map((mount) => (
                  <div
                    key={mount}
                    className="px-4 py-3 bg-slate-50 rounded-xl border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-600"
                  >
                    {mount}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VPS ── */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-black text-blue-400 uppercase tracking-[0.4em] mb-4">2.1.1 Core Technology</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6 uppercase">
              GeoCam Visual Positioning System
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Our innovative VPS is designed with advanced AI capabilities to deliver high-accuracy map data across aerial, urban, suburban, rural, indoor, or complex construction as-built scenarios.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Aerial', 'Urban', 'Suburban', 'Rural', 'Indoor', 'As-Built'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden">
            <Image
              src="/images/geocam-xyz/Untitled (5).png"
              alt="GeoCam Visual Positioning System in action"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Software Suite</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">GeoCam Applications</h2>
            <p className="text-xl text-slate-500 mt-4 max-w-2xl">
              Leverage our suite of apps to efficiently manage projects, create map data, and enable collaboration across your organisation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map(({ id, name, tagline, body, badge, image, imageAlt }) => (
              <div key={id} className="bg-white rounded-3xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all flex flex-col overflow-hidden">
                <div className="relative aspect-video w-full">
                  <Image src={image} alt={imageAlt} fill className="object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{id}</span>
                    {badge && (
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
                        {badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-2">{name}</h3>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-wide mb-4">{tagline}</p>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-600 py-20 px-6 text-white text-center">
        <h2 className="text-3xl font-black tracking-tight mb-4">Ready to see it in action?</h2>
        <p className="text-blue-100 mb-8">Contact us to arrange a demo or discuss your Australian deployment.</p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:shadow-xl transition-all"
        >
          Request a Demo
        </Link>
      </section>
    </>
  )
}
