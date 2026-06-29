import Link from "next/link";
import { BRAND } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annual Maintenance Contracts (AMC) — Plans & Pricing for Villas, Apartments & Offices",
  description: `Comprehensive annual maintenance contracts starting from AED 1,999/year for villas, apartments & commercial properties in UAE. ${BRAND.shortName} AMC plans cover AC servicing, plumbing, electrical, pest control & more.`,
  alternates: { canonical: `${BRAND.website}/amc` },
  openGraph: {
    title: `AMC Plans & Pricing | ${BRAND.shortName}`,
    description: "Annual maintenance contracts for villas, apartments & commercial properties in UAE.",
    url: `${BRAND.website}/amc`,
  },
};

const PLANS = [
  {
    name: "Basic AMC",
    price: "1,999",
    type: "Apartments",
    popular: false,
    features: ["2x AC servicing visits/year", "Plumbing check & minor repairs", "Electrical check & minor repairs", "1 emergency callout/month", "Water heater inspection", "Priority scheduling", "Phone & WhatsApp support"],
  },
  {
    name: "Standard AMC",
    price: "3,499",
    type: "Villas & Large Apartments",
    popular: true,
    features: ["4x AC servicing visits/year", "Full plumbing maintenance", "Full electrical maintenance", "3 emergency callouts/month", "Water heater servicing", "Painting touch-up (annual)", "Garden maintenance (quarterly)", "Priority scheduling", "Dedicated account manager"],
  },
  {
    name: "Premium AMC",
    price: "4,999",
    type: "Villas & Commercial",
    popular: false,
    features: ["Unlimited AC servicing", "Full property maintenance", "Unlimited emergency callouts", "Annual pest control", "Annual deep cleaning", "Painting touch-up (bi-annual)", "Pool maintenance (monthly)", "Garden maintenance (monthly)", "Priority 4-hour response", "Dedicated account manager", "Annual property inspection"],
  },
];

export default function AMCPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-12 md:py-16">
        <div className="container-main">
          <Breadcrumbs items={[{ label: "AMC Plans" }]} />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-3">
            Annual Maintenance Contracts
          </h1>
          <p className="text-white/85 max-w-2xl">
            Keep your property in top condition year-round with our comprehensive AMC plans. One contract, complete peace of mind.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`premium-card p-6 relative ${plan.popular ? "!border-brand-500 shadow-lg shadow-brand-500/10" : ""}`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-white bg-brand-600 px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-1">{plan.name}</h2>
                  <p className="text-xs text-slate-400 mb-3">{plan.type}</p>
                  <div className="text-3xl font-extrabold text-brand-600">
                    AED {plan.price}
                  </div>
                  <p className="text-xs text-slate-400">per year</p>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-accent-600 mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/quote?service=amc-${plan.name.toLowerCase().replace(" ", "-")}`}
                  className={`w-full text-center ${plan.popular ? "btn-primary" : "btn-outline"}`}
                >
                  Get This Plan
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Need a Custom AMC Plan?</h2>
            <p className="text-sm text-slate-500 mb-5 max-w-md mx-auto">
              We can tailor an annual maintenance contract to your specific property needs and budget. Contact us for a custom proposal.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/quote" className="btn-primary">Request Custom Quote</Link>
              <a href={`https://wa.me/${BRAND.whatsapp}`} className="btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
