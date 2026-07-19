import Link from "next/link";
import { notFound } from "next/navigation";
import { UAE_EMIRATES, BRAND, getEmirateBySlug, getCityBySlug, SERVICE_CATEGORIES } from "@/lib/data";

const CATEGORY_DESCS: Record<string, string> = {
  cleaning: "Deep clean, villa clean, move-out, sofa & carpet care",
  "ac-hvac": "AC repair, gas refill, duct cleaning & split installation",
  plumbing: "Leak fix, drain clearing, water heater & pipe repair",
  electrical: "Light fitting, DB panel, wiring & socket installation",
  handyman: "Furniture assembly, TV mount, door fix & curtain hanging",
  renovation: "Kitchen remodel, bathroom upgrade, tiling & fit-out",
  "pest-control": "Cockroach, termite, rodent & general pest treatment",
  "appliance-repair": "Washing machine, fridge, oven & dishwasher repair",
  movers: "Home moving, office relocation, packing & storage",
  "garden-outdoor": "Lawn mowing, tree trimming, irrigation & pool care",
  "building-maintenance": "Villa AMC, property snagging & annual inspection",
  "lifestyle-support": "Maid service, laundry, event & office support",
};
import { getCityContent } from "@/lib/locations-data";
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
  const content = getCityContent(emirateSlug, citySlug);
  if (!emirate || !city) return {};
  return {
    title: content?.metaTitle || `Professional Services in ${city.name}, ${emirate.name} — Book Online`,
    description: content?.metaDescription || `Book cleaning, AC repair, plumbing, electrical, handyman and maintenance services in ${city.name}, ${emirate.name}. ${BRAND.shortName} delivers vetted, professional services with transparent pricing. Same-day availability.`,
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

  const cityContent = getCityContent(emirateSlug, citySlug);
  const nearbyAreas = emirate.cities
    .filter((c) => c.slug !== city.slug)
    .slice(0, 6);

  // Fallback content for areas without unique data yet
  const introText = cityContent?.uniqueIntro ||
    `${city.name} is a key area within ${emirate.name} where our teams deliver cleaning, AC servicing, plumbing, electrical, and handyman services to apartments, villas, and commercial properties. With locally positioned technicians, we ensure fast response times and consistent quality across all service types in ${city.name}.`;

  const areaHighlights = cityContent?.highlights || [
    `Fast response from our ${emirate.name} service hub`,
    "Apartments, villas, and offices covered",
    "Same-day and next-day booking available",
    "All service categories offered",
    `Experienced with ${city.name} building types`,
  ];

  const localFAQs = cityContent?.localFAQs || [
    { q: `What services are available in ${city.name}?`, a: `We offer cleaning, AC maintenance, plumbing, electrical, handyman, pest control, and renovation services in ${city.name}, ${emirate.name}. All services are performed by trained technicians with full equipment.` },
    { q: `How quickly can you reach ${city.name}?`, a: `Our teams are positioned across ${emirate.name} for fast dispatch. Most service requests in ${city.name} are fulfilled same-day or next-day depending on availability.` },
    { q: `What is the starting price for services in ${city.name}?`, a: `Service prices in ${city.name} start from AED 59 for basic tasks like AC filter cleaning, AED 89 for home cleaning, and AED 129 for plumbing or electrical repairs. Final pricing depends on scope.` },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localFAQs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            {cityContent
              ? `Reliable cleaning, AC, plumbing, and maintenance services tailored to ${city.name} residents and businesses.`
              : `Professional home and commercial services in ${city.name}. Book online, get a quote, or contact us on WhatsApp.`
            }
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Unique Intro */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  {BRAND.shortName} in {city.name}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {introText}
                </p>
                <div className="space-y-2">
                  {areaHighlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-accent-600 mt-0.5">✓</span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Grid */}
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
                        {CATEGORY_DESCS[cat.slug] || `Available in ${city.name}`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local FAQs */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Common Questions — {city.name}
                </h2>
                <div className="space-y-3">
                  {localFAQs.map((faq, i) => (
                    <details key={i} className="premium-card p-5 group" open={i === 0}>
                      <summary className="font-semibold text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between">
                        {faq.q}
                        <svg className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="text-sm text-slate-600 mt-3 leading-relaxed">{faq.a}</p>
                    </details>
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
                        className="text-sm text-brand-800 bg-brand-100 px-3 py-2 rounded-lg hover:bg-brand-200 transition-colors font-medium"
                      >
                        {a.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
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
                      WhatsApp Us
                    </a>
                    <a href={`tel:${BRAND.phone}`} className="btn-outline w-full text-center">
                      Call {BRAND.phoneFormatted}
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
