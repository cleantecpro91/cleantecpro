import Link from "next/link";
import { SERVICE_CATEGORIES, BRAND } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Services — Cleaning, AC, Plumbing, Electrical & More",
  description: `Browse all professional services offered by ${BRAND.shortName} across the UAE. Cleaning, AC repair, plumbing, electrical, renovation, pest control, and more.`,
};

const CATEGORY_ICONS: Record<string, string> = {
  cleaning: "🧹", "ac-hvac": "❄️", plumbing: "🔧", electrical: "⚡",
  handyman: "🔨", renovation: "🏗️", "pest-control": "🛡️",
  "appliance-repair": "🔌", movers: "🚛", "garden-outdoor": "🌿",
  "building-maintenance": "🏢", "lifestyle-support": "🏠",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-12 md:py-16">
        <div className="container-main">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-3">
            Our Services
          </h1>
          <p className="text-white/70 text-base max-w-2xl">
            Comprehensive professional services for residential and commercial properties across all UAE emirates. Select a category to explore.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="space-y-12">
            {SERVICE_CATEGORIES.map((cat) => (
              <div key={cat.slug} id={cat.slug}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">
                    {CATEGORY_ICONS[cat.slug] || "📋"}
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      <Link href={`/services/${cat.slug}`} className="hover:text-brand-600 transition-colors">
                        {cat.name}
                      </Link>
                    </h2>
                    <p className="text-sm text-slate-500">{cat.description}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.subcategories.map((sub) => (
                    <div key={sub.slug} className="premium-card p-5">
                      <h3 className="text-sm font-bold text-slate-900 mb-3">
                        <Link
                          href={`/services/${cat.slug}/${sub.slug}`}
                          className="hover:text-brand-600 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      </h3>
                      <ul className="space-y-1.5">
                        {sub.services.map((svc) => (
                          <li key={svc.slug}>
                            <Link
                              href={`/services/${cat.slug}/${sub.slug}/${svc.slug}`}
                              className="flex items-center justify-between text-sm text-slate-600 hover:text-brand-600 transition-colors group"
                            >
                              <span>{svc.name}</span>
                              {svc.price && (
                                <span className="text-xs text-slate-400 group-hover:text-brand-500">
                                  From AED {svc.price}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${cat.slug}/${sub.slug}`}
                        className="text-xs font-semibold text-brand-600 mt-3 inline-block hover:text-brand-700"
                      >
                        View all {sub.name} →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
