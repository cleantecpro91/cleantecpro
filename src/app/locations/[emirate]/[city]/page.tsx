import Link from "next/link";
import { notFound } from "next/navigation";
import { UAE_EMIRATES, BRAND, getEmirateBySlug, getCityBySlug, SERVICE_CATEGORIES } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { emirate: string; city: string }[] = [];
  UAE_EMIRATES.forEach((e) =>
    e.cities.forEach((c) =>
      params.push({ emirate: e.slug, city: c.slug })
    )
  );
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ emirate: string; city: string }>;
}): Promise<Metadata> {
  const { emirate: emirateSlug, city: citySlug } = await params;
  const emirate = getEmirateBySlug(emirateSlug);
  const city = getCityBySlug(emirateSlug, citySlug);
  if (!emirate || !city) return {};
  return {
    title: `Professional Services in ${city.name}, ${emirate.name} — Book Online`,
    description: `Book cleaning, AC repair, plumbing, electrical, handyman and maintenance services in ${city.name}, ${emirate.name}. ${BRAND.shortName} delivers vetted, professional services with transparent pricing. Same-day availability.`,
    alternates: { canonical: `${BRAND.website}/locations/${emirateSlug}/${citySlug}` },
    openGraph: {
      title: `Services in ${city.name}, ${emirate.name} | ${BRAND.shortName}`,
      description: `Professional home and commercial services in ${city.name}, ${emirate.name}.`,
      url: `${BRAND.website}/locations/${emirateSlug}/${citySlug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ emirate: string; city: string }>;
}) {
  const { emirate: emirateSlug, city: citySlug } = await params;
  const emirate = getEmirateBySlug(emirateSlug);
  const city = getCityBySlug(emirateSlug, citySlug);
  if (!emirate || !city) notFound();

  const nearbyAreas = emirate.cities
    .filter((c) => c.slug !== city.slug)
    .slice(0, 6);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-12 md:py-16">
        <div className="container-main">
          <Breadcrumbs
            items={[
              { label: "Service Areas", href: "/locations" },
              { label: emirate.name, href: `/locations/${emirate.slug}` },
              { label: city.name },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-3">
            Services in {city.name}, {emirate.name}
          </h1>
          <p className="text-white/90 max-w-2xl text-base">
            Professional home and commercial services in {city.name}. Book online, get a quote, or contact us on WhatsApp for immediate assistance.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  {BRAND.shortName} Serving {city.name}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {city.name} is one of the active service areas within {emirate.name}. Our teams regularly serve customers in {city.name} and surrounding neighborhoods, delivering reliable cleaning, maintenance, and technical services to both residential and commercial properties.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Whether you need a one-time deep clean, regular maintenance, emergency repair, or a comprehensive annual maintenance contract, our vetted professionals in {city.name} are ready to help. We maintain high service standards with transparent pricing and no hidden charges.
                </p>
                <div className="grid sm:grid-cols-2 gap-2 mt-5">
                  {[
                    "Same-day availability",
                    "Vetted local teams",
                    "Transparent pricing",
                    "All service types covered",
                    "Residential & commercial",
                    "Satisfaction guaranteed",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-accent-600">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Services Available in {city.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <div key={cat.slug} className="premium-card p-5">
                      <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                        <span>{cat.icon}</span>
                        <Link href={`/services/${cat.slug}`} className="hover:text-brand-600 transition-colors">
                          {cat.name}
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-500">
                        Available in {city.name}, {emirate.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby Areas */}
              {nearbyAreas.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">
                    We Also Serve Nearby Areas
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {nearbyAreas.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/locations/${emirate.slug}/${a.slug}`}
                        className="text-sm text-brand-800 bg-brand-100 px-3 py-2 rounded-lg hover:bg-brand-100 transition-colors"
                      >
                        {a.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="premium-card p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-4">
                    Book in {city.name}
                  </h3>
                  <div className="space-y-2.5">
                    <Link href="/booking" className="btn-primary w-full text-center">
                      Book a Service
                    </Link>
                    <Link href="/quote" className="btn-outline w-full text-center">
                      Request a Quote
                    </Link>
                    <a
                      href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hi, I need a service in ${city.name}, ${emirate.name}.`)}`}
                      className="btn-whatsapp w-full text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💬 WhatsApp Us
                    </a>
                    <a href={`tel:${BRAND.phone}`} className="btn-outline w-full text-center">
                      📞 {BRAND.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
