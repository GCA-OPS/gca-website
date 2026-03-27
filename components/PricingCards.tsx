'use client'
import { useState } from 'react'
import Link from 'next/link'

type Billing = 'annual' | 'monthly'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For councils and small teams getting started with reality capture.',
    price: { annual: '$833', monthly: '$1,000' },
    billingNote: { annual: 'Billed $10,000 / year', monthly: 'Billed monthly, no lock-in' },
    features: [
      '1-month camera term',
      '240 km street VPS credits',
      '23,000 m² indoor VPS credits',
      '5 Viewer accounts',
      '1 Admin account',
      'Manager & Viewer apps',
      'GDA2020 compliant outputs',
      'Email support',
    ],
    cta: 'Start Free Trial',
    ctaHref: '/contact',
    featured: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'For utilities and infrastructure teams running ongoing capture programs.',
    price: { annual: '$2,083', monthly: '$2,500' },
    billingNote: { annual: 'Billed $25,000 / year', monthly: 'Billed monthly, no lock-in' },
    features: [
      '1-year camera term',
      '1,600 km street VPS credits',
      '93,000 m² indoor VPS credits',
      '10 Viewer accounts',
      'Admin, Editor & QAQC accounts',
      'Full software suite',
      'ArcGIS Feature Service integration',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    ctaHref: '/contact',
    featured: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For large programs, government agencies, and multi-unit deployments.',
    price: null,
    billingNote: null,
    features: [
      'Multi-unit camera deployment',
      'Custom VPS credit volumes',
      'Unlimited user accounts',
      'GIS / CAD / BIM data production',
      'Field Data Services',
      'ML training & custom applications',
      'In-person & remote training',
      'Dedicated account manager & SLA',
    ],
    cta: 'Contact Sales',
    ctaHref: '/contact',
    featured: false,
  },
]

function CheckIcon({ featured }: { featured: boolean }) {
  return (
    <svg
      className={`w-4 h-4 mt-0.5 shrink-0 ${featured ? 'text-blue-400' : 'text-blue-600'}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function PricingCards() {
  const [billing, setBilling] = useState<Billing>('annual')

  return (
    <div>
      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-4 mb-14">
        <span
          className={`text-sm font-black uppercase tracking-widest transition-colors ${
            billing === 'monthly' ? 'text-slate-900' : 'text-slate-400'
          }`}
        >
          Monthly
        </span>
        <button
          onClick={() => setBilling((b) => (b === 'annual' ? 'monthly' : 'annual'))}
          aria-label="Toggle billing period"
          className={`relative w-14 h-7 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
            billing === 'annual' ? 'bg-blue-600' : 'bg-slate-300'
          }`}
        >
          <span
            className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-all ${
              billing === 'annual' ? 'left-8' : 'left-1'
            }`}
          />
        </button>
        <span
          className={`text-sm font-black uppercase tracking-widest transition-colors ${
            billing === 'annual' ? 'text-slate-900' : 'text-slate-400'
          }`}
        >
          Annual
        </span>
        <span
          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
            billing === 'annual'
              ? 'bg-green-50 text-green-700 border-green-200 opacity-100'
              : 'opacity-0 pointer-events-none bg-green-50 text-green-700 border-green-200'
          }`}
        >
          Save 17%
        </span>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 gap-6 items-center">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-3xl border-2 flex flex-col overflow-hidden transition-all ${
              plan.featured
                ? 'border-blue-600 bg-slate-900 text-white shadow-2xl lg:scale-105'
                : 'border-slate-200 bg-white text-slate-900'
            }`}
          >
            {plan.featured && (
              <div className="bg-blue-600 text-white text-center text-[10px] font-black uppercase tracking-widest py-2.5">
                Most Popular
              </div>
            )}

            <div className="p-8 flex flex-col flex-1">
              {/* Tier label */}
              <p
                className={`text-[10px] font-black uppercase tracking-widest mb-3 ${
                  plan.featured ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                {plan.name}
              </p>

              {/* Price */}
              {plan.price ? (
                <>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-4xl font-black leading-none">
                      {plan.price[billing]}
                    </span>
                    <span
                      className={`text-sm mb-0.5 ${
                        plan.featured ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      /mo
                    </span>
                  </div>
                  <p
                    className={`text-xs mb-5 ${
                      plan.featured ? 'text-slate-500' : 'text-slate-400'
                    }`}
                  >
                    {plan.billingNote![billing]}
                  </p>
                </>
              ) : (
                <>
                  <div className="text-4xl font-black leading-none mb-1">Custom</div>
                  <p
                    className={`text-xs mb-5 ${
                      plan.featured ? 'text-slate-500' : 'text-slate-400'
                    }`}
                  >
                    Tailored to your program
                  </p>
                </>
              )}

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  plan.featured ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {plan.tagline}
              </p>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckIcon featured={plan.featured} />
                    <span className={plan.featured ? 'text-slate-300' : 'text-slate-600'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.ctaHref}
                className={`block text-center px-6 py-3.5 rounded-xl font-black uppercase text-xs tracking-widest transition-all ${
                  plan.featured
                    ? 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg'
                    : plan.id === 'enterprise'
                    ? 'bg-slate-900 text-white hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
