import Link from "next/link";
import { notFound } from "next/navigation";
import { UAE_EMIRATES, BRAND, getEmirateBySlug, SERVICE_CATEGORIES } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export function generateStaticParams() {
  return UAE_EMIRATES.map((e) => ({ emirate: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ emirate: string }>;
}): Promise<Metadata> {
  const { emirate: emirateSlug } = await params;
  const emirate = getEmirateBySlug(emirateSlug);
  if (!emirate) return {};
  return {
    title: `Services in ${emirate.name} — Cleaning, AC Repair, Plumbing, Electrical & More`,
    description: `Professional cleaning, AC repair, plumbing, electrical, handyman and maintenance services in ${emirate.name}. ${BRAND.shortName} provides vetted, reliable professionals with transparent pricing. Book online today.`,
    alternates: { canonical: `${BRAND.website}/locations/${emirate.slug}` },
    openGraph: {
      title: `Services in ${emirate.name} | ${BRAND.shortName}`,
      description: `Professional home and commercial services across ${emirate.name}.`,
      url: `${BRAND.website}/locations/${emirate.slug}`,
    },
  };
}

const EMIRATE_CONTENT: Record<string, { intro: string; highlights: string[] }> = {
  sharjah: {
    intro: "Sharjah is one of our most active service markets. We maintain dedicated teams across Al Nahda, Al Majaz, Al Khan, Muwaileh, Al Taawun, and surrounding neighborhoods to ensure fast response times and consistent service quality for both residential and commercial customers.",
    highlights: [
      "Dedicated Sharjah service teams for faster response",
      "Coverage across all major residential and commercial areas",
      "Same-day and next-day availability for most services",
      "Special rates for Sharjah-based AMC customers",
      "Experienced with Sharjah building types and regulations",
    ],
  },
  dubai: {
    intro: "Dubai is our headquarter city and one of our busiest service hubs. From Business Bay to Dubai Marina, JLT to Deira, our teams cover every major neighborhood with rapid response times.",
    highlights: [
      "Headquarters in Business Bay, Dubai",
      "Full coverage from Deira to Dubai Marina",
      "Premium and standard service tiers available",
      "Serving both residential towers and villa communities",
      "Same-day emergency service available",
    ],
  },
};

export default async function EmiratePage({
  params,
}: {
  params: Promise<{ emirate: string }>;
}) {
  const { emirate: emirateSlug } = await params;
  const emirate = getEmirateBySlug(emirateSlug);
  if (!emirate) notFound();

  const content = EMIRATE_CONTENT[emirateSlug] || {
    intro: `${emirate.name} is well-served by our network of professional technicians and service teams. We cover key residential and commercial areas with reliable, same-day service availability.`,
    highlights: [
      `Trusted service provider in ${emirate.name}`,
      "Vetted and trained professional teams",
      "Transparent pricing with no hidden charges",
      "Same-day and next-day availability",
      "Residential and commercial service coverage",
    ],
  };

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-12 md:py-16">
        <div className="container-main">
          <Breadcrumbs
            items={[
              { label: "Service Areas", href: "/locations" },
              { label: emirate.name },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-3">
            Services in {emirate.name}
          </h1>
          <p className="text-white/85 max-w-2xl text-base">
            {emirate.description}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Local Content */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  {BRAND.shortName} in {emirate.name}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {content.intro}
                </p>
                <div className="space-y-2">
                  {content.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-accent-600 mt-0.5">✓</span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cities/Areas */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Areas We Serve in {emirate.name}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {emirate.cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/locations/${emirate.slug}/${city.slug}`}
                      className="premium-card !p-4 text-center"
                    >
                      <h3 className="text-sm font-semibold text-slate-900">
                        {city.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Services in this Emirate */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Popular Services in {emirate.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {SERVICE_CATEGORIES.slice(0, 4).map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/services/${cat.slug}`}
                      className="premium-card p-4 flex items-center gap-3"
                    >
                      <span className="text-2xl">{cat.icon}</span>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                          {cat.name}
                        </h3>
                        <p className="text-xs text-slate-400">
                          Available in {emirate.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="premium-card p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-4">
                    Book a Service in {emirate.name}
                  </h3>
                  <div className="space-y-2.5">
                    <Link href="/booking" className="btn-primary w-full text-center">
                      Book Now
                    </Link>
                    <Link href="/quote" className="btn-outline w-full text-center">
                      Request a Quote
                    </Link>
                    <a
                      href={`https://wa.me/${BRAND.whatsapp}`}
                      className="btn-whatsapp w-full text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>

                <div className="premium-card p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-3">
                    All Emirates
                  </h3>
                  <ul className="space-y-1.5">
                    {UAE_EMIRATES.map((e) => (
                      <li key={e.slug}>
                        <Link
                          href={`/locations/${e.slug}`}
                          className={`text-sm block py-1 px-2 rounded transition-colors ${
                            e.slug === emirateSlug
                              ? "text-brand-600 font-semibold bg-brand-50"
                              : "text-slate-600 hover:text-brand-600"
                          }`}
                        >
                          {e.name} {e.isPrimary && "⭐"}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
