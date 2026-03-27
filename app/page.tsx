import Image from 'next/image'
import Link from 'next/link'

const industries = [
  {
    title: 'Public Works Asset Management',
    body: 'Map and maintain critical street furniture, roadways, assets in parks or along trails, and sidewalks.',
  },
  {
    title: 'Utilities — Electric, Fiber, Water, and Gas',
    body: 'Build Utility Network data from the ground up, faster and more accurately than converting old data.',
  },
  {
    title: 'Public Safety Pre Plans and Maps',
    body: 'Expand inspections creating Fire, Police, and Ambulance Services ready Pre Plan Maps.',
  },
  {
    title: 'Facilities and Property Assessments',
    body: 'No more paper reports and inventories without locations. Create PCA and FCA data using maps.',
  },
  {
    title: 'Construction As Built Models',
    body: 'Continually scan the build process enabling True As Builds, updating designs and creating a super vision.',
  },
]

const events = [
  {
    name: 'DistribuTECH 2026',
    date: 'February 2–5, 2026',
    location: 'San Diego, CA',
    body: 'As utilities face increasing pressure to maintain aging assets, respond to extreme weather, and document field conditions with greater accuracy and speed, GeoCam\'s reality capture and automated data management solutions help bridge the gap between field operations and enterprise decision-making.',
  },
  {
    name: 'Esri FedGIS 2026',
    date: 'February 10–11, 2026',
    location: 'Washington, D.C.',
    body: 'As federal agencies increasingly rely on geospatial intelligence to inform planning, compliance, and operational readiness, GeoCam\'s reality capture and automated imagery management solutions help transform field data into actionable insights.',
  },
  {
    name: 'GeoWeek 2026',
    date: 'February 16–18, 2026',
    location: 'Denver, CO',
    body: 'As organisations seek faster, more scalable ways to capture, manage, and operationalise visual data from the field, GeoCam brings a practical, mobile-first approach to reality capture that complements LiDAR, photogrammetry, and GIS workflows.',
  },
]

const workflow = [
  {
    step: '01',
    title: 'Capture',
    body: 'Deploy GeoCam 360 on vehicles, backpacks, drones, or monopoles to collect high-resolution 360° imagery with RTK GNSS positioning.',
  },
  {
    step: '02',
    title: 'Manage',
    body: 'Upload, organise, and monitor capture sessions in one centralised platform. Full project management from field to cloud.',
  },
  {
    step: '03',
    title: 'Process',
    body: 'AI-powered Visual Positioning Engine automatically aligns and processes imagery at scale. No LiDAR required.',
  },
  {
    step: '04',
    title: 'Create',
    body: 'Extract features and create accurate GIS, CAD, and BIM data compliant with Australian standards. Direct ArcGIS integration.',
  },
]

const deployMethods = [
  {
    label: 'Drive Streets',
    body: 'Mobile mapping for roads, utilities, and streetscapes with centimetre-level accuracy.',
    badge: 'Vehicle Mount',
    image: '/images/geocam-xyz/ProcessingStreets.jpg',
    imageAlt: 'GeoCam vehicle-mounted camera capturing street-level imagery',
  },
  {
    label: 'Walk Properties and Indoors',
    body: 'Portable capture for facilities, campuses, and areas inaccessible to vehicles.',
    badge: 'Backpack',
    image: '/images/geocam-xyz/photo_2022-04-11_14-30-47.jpg',
    imageAlt: 'GeoCam backpack unit capturing indoor and property imagery',
  },
  {
    label: 'Capture Aerial Imagery',
    body: 'Drone integration for large-scale projects, terrain mapping, and hard-to-reach areas.',
    badge: 'UAS / Drone',
    image: '/images/geocam-xyz/Untitled (4).jpg',
    imageAlt: 'Aerial imagery captured with GeoCam UAS integration',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-blue-100">
            AI-Native Reality Capture · Australian Distributor
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            The first AI-Native<br />
            <span className="text-blue-600">Reality Capture Platform</span>
          </h1>
          <p className="text-2xl lg:text-3xl text-slate-500 font-semibold mb-10">
            Aerial, Street, Indoors
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            GeoCam is the enterprise ready Reality Capture Platform. Our AI-powered Visual Positioning Engine enables rapid mapping at any scale, no LiDAR.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-20">
            <Link
              href="/product"
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 hover:shadow-xl transition-all"
            >
              Explore Platform
            </Link>
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest border border-slate-200 hover:border-blue-600 transition-all"
            >
              Request Demo
            </Link>
          </div>
          <div className="relative aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <Image
              src="/images/geocam-xyz/Design (2).png"
              alt="GeoCam AI-Native Reality Capture Platform"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── WORKFLOW ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-3">How it works</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">From field to GIS in four steps.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map(({ step, title, body }) => (
              <div key={step} className="relative p-8 border border-slate-200 rounded-3xl hover:border-blue-200 hover:shadow-sm transition-all">
                <div className="text-5xl font-black text-slate-100 mb-4 leading-none">{step}</div>
                <h3 className="text-xl font-black mb-3">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPLOY ── */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">Deploy on any platform, anywhere.</h2>
            <p className="text-xl text-slate-500">Easy to transition between them and fuse into a single scene.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {deployMethods.map(({ label, body, badge, image, imageAlt }) => (
              <div key={label} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="relative aspect-square rounded-2xl mb-6 overflow-hidden">
                  <Image src={image} alt={imageAlt} fill className="object-cover" />
                </div>
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-blue-100">
                  {badge}
                </div>
                <h3 className="text-xl font-black mb-3">{label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-3">Use Cases</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">Build map data in support of many industries.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(({ title, body }) => (
              <div
                key={title}
                className="p-8 border border-slate-200 rounded-2xl hover:border-blue-600 hover:shadow-md transition-all group"
              >
                <div className="w-8 h-0.5 bg-blue-600 mb-5 group-hover:w-12 transition-all" />
                <h4 className="text-lg font-black mb-3">{title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/product"
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 hover:shadow-xl transition-all"
            >
              Learn More About the GeoCam Platform
            </Link>
          </div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-3">On the Road</p>
            <h2 className="text-4xl font-black tracking-tight">Upcoming Events</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(({ name, date, location, body }) => (
              <div key={name} className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-md transition-all flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-black mb-1">{name}</h3>
                  <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4">
                    {date} · {location}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Link href="/contact" className="text-sm font-black text-blue-600 hover:underline uppercase tracking-widest">
                    Let&apos;s Connect →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Stay Updated</p>
          <h2 className="text-3xl font-black tracking-tight mb-4">
            Keep up with all the amazing developments we have coming up.
          </h2>
          <p className="text-slate-500 mb-8">Australian infrastructure moves fast. So do we.</p>
          {/* Newsletter form — wiring pending */}
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-6 py-4 rounded-xl border border-slate-200 outline-none focus:border-blue-600 transition-all text-sm font-medium"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 transition-all whitespace-nowrap"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
