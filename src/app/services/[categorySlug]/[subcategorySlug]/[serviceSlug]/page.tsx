import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SERVICE_CATEGORIES,
  BRAND,
  getCategoryBySlug,
  getSubcategoryBySlug,
  getServiceBySlug,
  getAllServiceSlugs,
  UAE_EMIRATES,
} from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllServiceSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    categorySlug: string;
    subcategorySlug: string;
    serviceSlug: string;
  }>;
}): Promise<Metadata> {
  const { categorySlug, subcategorySlug, serviceSlug } = await params;
  const svc = getServiceBySlug(categorySlug, subcategorySlug, serviceSlug);
  if (!svc) return {};
  return {
    title: `${svc.name} in UAE — ${svc.price ? `From AED ${svc.price} | ` : ""}Book Online | ${BRAND.shortName}`,
    description: `Professional ${svc.name.toLowerCase()} service across Dubai, Sharjah, Abu Dhabi & all UAE emirates. ${svc.price ? `Starting from AED ${svc.price}. ` : ""}Vetted professionals, same-day availability. Book online or request a free quote from ${BRAND.shortName}.`,
    alternates: { canonical: `${BRAND.website}/services/${categorySlug}/${subcategorySlug}/${serviceSlug}` },
    openGraph: {
      title: `${svc.name} | ${BRAND.shortName}`,
      description: `Professional ${svc.name.toLowerCase()} service across all UAE emirates.${svc.price ? ` From AED ${svc.price}.` : ""}`,
      url: `${BRAND.website}/services/${categorySlug}/${subcategorySlug}/${serviceSlug}`,
    },
  };
}

const FAQ_DATA: Record<string, { q: string; a: string }[]> = {
  _default: [
    { q: "How do I book this service?", a: `You can book online through our booking page, request a free quote, or reach us on WhatsApp at ${BRAND.phoneFormatted}. We respond within minutes during business hours.` },
    { q: "What areas do you serve?", a: "We serve all seven UAE emirates including Dubai, Sharjah, Abu Dhabi, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain, and Al Ain. Our teams are locally positioned for fast response times." },
    { q: "Are your technicians vetted?", a: "Yes. All our technicians are background-checked, professionally trained, and carry company identification. We only deploy experienced professionals for every service." },
    { q: "What if I'm not satisfied with the service?", a: "We offer a satisfaction guarantee. If you're not happy with the quality of work, contact us within 24 hours and we will address the issue promptly at no additional cost." },
    { q: "How is pricing determined?", a: "We provide transparent pricing with no hidden charges. The price shown is a starting rate. Final pricing depends on the scope of work and property size. You'll receive a clear quote before we begin." },
  ],
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{
    categorySlug: string;
    subcategorySlug: string;
    serviceSlug: string;
  }>;
}) {
  const { categorySlug, subcategorySlug, serviceSlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const subcategory = getSubcategoryBySlug(categorySlug, subcategorySlug);
  const service = getServiceBySlug(categorySlug, subcategorySlug, serviceSlug);
  if (!category || !subcategory || !service) notFound();

  const svc = service as Record<string, string | undefined>;
  const faqs = FAQ_DATA[service.slug] || FAQ_DATA._default;

  // Related services from same subcategory
  const relatedServices = subcategory.services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4);

  // Service schema markup
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: `Professional ${service.name.toLowerCase()} service across the UAE by ${BRAND.shortName}.`,
    provider: {
      "@type": "LocalBusiness",
      name: BRAND.fullName,
      telephone: BRAND.phoneFormatted,
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    ...(service.price && {
      offers: {
        "@type": "Offer",
        priceCurrency: "AED",
        price: service.price,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: service.price,
          priceCurrency: "AED",
        },
      },
    }),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-10 md:py-14">
        <div className="container-main">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: category.name, href: `/services/${category.slug}` },
              {
                label: subcategory.name,
                href: `/services/${category.slug}/${subcategory.slug}`,
              },
              { label: service.name },
            ]}
          />
          <div className="grid lg:grid-cols-5 gap-8 mt-4">
            <div className="lg:col-span-3">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">
                {service.name}
              </h1>
              <p className="text-white/70 text-base leading-relaxed mb-6 max-w-xl">
                {svc.shortDescription ||
                  `Professional ${service.name.toLowerCase()} service by vetted, experienced technicians. Available across all UAE emirates with transparent pricing and satisfaction guarantee.`}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="trust-badge !bg-white/10 !text-white/90">✅ Vetted Professionals</span>
                <span className="trust-badge !bg-white/10 !text-white/90">💰 Transparent Pricing</span>
                <span className="trust-badge !bg-white/10 !text-white/90">🛡️ Satisfaction Guarantee</span>
                <span className="trust-badge !bg-white/10 !text-white/90">⚡ Same-Day Available</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={`/booking?service=${service.slug}`} className="btn-primary !py-3 !px-6">
                  Book This Service
                </Link>
                <Link href={`/quote?service=${service.slug}`} className="btn-outline !bg-white/10 !text-white !border-white/20 hover:!bg-white/20 !py-3 !px-6">
                  Request a Quote
                </Link>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hi, I'd like to book ${service.name}.`)}`}
                  className="btn-whatsapp !py-3 !px-6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="glass-card !bg-white rounded-2xl p-6">
                {service.price && (
                  <div className="mb-4">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                      Starting From
                    </p>
                    <p className="text-3xl font-extrabold text-brand-600">
                      AED {service.price}
                    </p>
                    <p className="text-xs text-slate-400">{svc.priceUnit || "per service"}</p>
                  </div>
                )}
                {svc.durationEstimate && (
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-3 pb-3 border-b border-slate-100">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Estimated duration: {svc.durationEstimate}
                  </div>
                )}
                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-accent-600">✓</span> Vetted & trained professionals
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-600">✓</span> All tools & equipment included
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-600">✓</span> Same-day availability
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-600">✓</span> Pay after service completion
                  </div>
                </div>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="btn-outline w-full text-center !text-sm"
                >
                  📞 Call {BRAND.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  About This Service
                </h2>
                <div className="prose prose-slate max-w-none text-sm leading-relaxed">
                  <p>
                    {svc.description ||
                      `${service.name} is one of our most requested services across the UAE. Our team of skilled and vetted professionals delivers this service with attention to detail, using quality materials and industry-standard techniques. Whether you are in Dubai, Sharjah, Abu Dhabi, or any other emirate, we ensure consistent quality and reliable service delivery.`}
                  </p>
                  <p>
                    At {BRAND.shortName}, we understand that every property has unique requirements. That is why our {service.name.toLowerCase()} service is tailored to meet your specific needs. We serve residential villas, apartments, offices, and commercial properties across the United Arab Emirates.
                  </p>
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  What&apos;s Included
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {(svc.whatsIncluded
                    ? svc.whatsIncluded.split("\n")
                    : [
                        "Professional assessment and consultation",
                        "All necessary tools and materials",
                        "Skilled and vetted technician",
                        "Service completion and quality check",
                        "Cleanup after work is done",
                        "Post-service support",
                      ]
                  ).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-accent-600 mt-0.5 shrink-0">✓</span>
                      {item.trim()}
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Our Process
                </h2>
                <div className="space-y-4">
                  {(
                    svc.processSteps
                      ? svc.processSteps.split("\n")
                      : [
                          "Book your service online, by phone, or via WhatsApp",
                          "We confirm your booking and assign a qualified technician",
                          "Our technician arrives at your location at the scheduled time",
                          "The service is completed with quality assurance checks",
                          "You inspect the work and confirm satisfaction",
                          "Payment is collected — online, cash, or bank transfer",
                        ]
                  ).map((step, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 font-bold text-sm flex items-center justify-center shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-sm text-slate-700 font-medium pt-1">
                          {step.trim()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Service Areas — Available Across the UAE
                </h2>
                <p className="text-sm text-slate-600 mb-4">
                  Our {service.name.toLowerCase()} service is available in all seven emirates. Select your location to check availability.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {UAE_EMIRATES.map((e) => (
                    <Link
                      key={e.slug}
                      href={`/locations/${e.slug}`}
                      className="text-sm text-slate-600 hover:text-brand-600 hover:bg-brand-50 px-3 py-2 rounded-lg border border-slate-200 transition-all text-center"
                    >
                      {e.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {faqs.map((f, i) => (
                    <details key={i} className="premium-card p-5 group" open={i === 0}>
                      <summary className="font-semibold text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between">
                        {f.q}
                        <svg className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                {/* Quick Booking Card */}
                <div className="premium-card p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-4">
                    Quick Booking
                  </h3>
                  <div className="space-y-2.5">
                    <Link href={`/booking?service=${service.slug}`} className="btn-primary w-full text-center">
                      Book Online
                    </Link>
                    <Link href={`/quote?service=${service.slug}`} className="btn-outline w-full text-center">
                      Request a Quote
                    </Link>
                    <a
                      href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hi, I'd like to book ${service.name}.`)}`}
                      className="btn-whatsapp w-full text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💬 WhatsApp Us
                    </a>
                    <a href={`tel:${BRAND.phone}`} className="btn-outline w-full text-center">
                      📞 Call Now
                    </a>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="premium-card p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-3">
                    Payment Options
                  </h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">💳 Online Payment</div>
                    <div className="flex items-center gap-2">🏦 Bank Transfer</div>
                    <div className="flex items-center gap-2">💵 Cash on Service</div>
                    <div className="flex items-center gap-2">📱 WhatsApp Booking</div>
                  </div>
                </div>

                {/* Related Services */}
                {relatedServices.length > 0 && (
                  <div className="premium-card p-6">
                    <h3 className="text-base font-bold text-slate-900 mb-3">
                      Related Services
                    </h3>
                    <ul className="space-y-2">
                      {relatedServices.map((svc) => (
                        <li key={svc.slug}>
                          <Link
                            href={`/services/${category.slug}/${subcategory.slug}/${svc.slug}`}
                            className="text-sm text-brand-600 hover:text-brand-700 hover:underline"
                          >
                            {svc.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
