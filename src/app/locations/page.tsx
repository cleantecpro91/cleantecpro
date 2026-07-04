import Link from "next/link";
import { UAE_EMIRATES, BRAND, SERVICE_CATEGORIES } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas — Dubai, Sharjah, Abu Dhabi & All UAE Emirates",
  description: `Professional cleaning, AC, plumbing & maintenance services across all 7 UAE emirates. ${BRAND.shortName} covers Dubai, Sharjah, Abu Dhabi, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain and Al Ain with dedicated local teams.`,
  alternates: { canonical: `${BRAND.website}/locations` },
  openGraph: {
    title: `Service Areas | ${BRAND.shortName}`,
    description: "We serve all 7 UAE emirates with dedicated local service teams.",
    url: `${BRAND.website}/locations`,
  },
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-12 md:py-16">
        <div className="container-main">
          <Breadcrumbs items={[{ label: "Service Areas" }]} />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-3">
            Our Service Areas
          </h1>
          <p className="text-white/90 max-w-2xl text-base">
            {BRAND.shortName} provides professional services across all seven emirates of the UAE. Select your emirate to view available services in your area.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-6">
            {UAE_EMIRATES.map((emirate) => (
              <Link
                key={emirate.slug}
                href={`/locations/${emirate.slug}`}
                className="premium-card p-6 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {emirate.name}
                    {emirate.isPrimary && (
                      <span className="ml-2 text-[10px] bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-semibold align-middle">
                        Primary Market
                      </span>
                    )}
                  </h2>
                  <span className="text-sm text-brand-600 font-medium">
                    {emirate.cities.length} areas →
                  </span>
                </div>
                <p className="text-sm text-slate-500 mb-4">{emirate.description}</p>
                <div className="flex flex-wrap gap-2">
                  {emirate.cities.slice(0, 6).map((city) => (
                    <span
                      key={city.slug}
                      className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md"
                    >
                      {city.name}
                    </span>
                  ))}
                  {emirate.cities.length > 6 && (
                    <span className="text-xs bg-brand-100 text-brand-800 px-2.5 py-1 rounded-md font-medium">
                      +{emirate.cities.length - 6} more
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 mb-4">
              Don&apos;t see your area? We may still cover it. Contact us to check availability.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                className="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
