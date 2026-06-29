import { BRAND } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Booking, Pricing, Payments & Coverage",
  description: `Get answers to common questions about ${BRAND.shortName} services, booking process, pricing, payment methods, service areas, cancellations and coverage across the UAE.`,
  alternates: { canonical: `${BRAND.website}/faq` },
  openGraph: {
    title: `FAQ | ${BRAND.shortName}`,
    description: "Answers to common questions about our services, booking, and pricing.",
    url: `${BRAND.website}/faq`,
  },
};

const FAQ_ITEMS = [
  { cat: "Booking", items: [
    { q: "How do I book a service?", a: "You can book through our website by visiting the booking page, call us at " + BRAND.phoneFormatted + ", or send us a message on WhatsApp. Online booking is available 24/7, and our team will confirm your appointment." },
    { q: "Can I schedule a service for a specific date and time?", a: "Yes. During booking, you can select your preferred date and a time window (morning, afternoon, or evening). We do our best to accommodate specific time requests and will confirm the exact schedule when we assign your technician." },
    { q: "How far in advance should I book?", a: "For regular services, we recommend booking at least 24 hours in advance. However, same-day service is often available depending on technician availability in your area. For urgent needs, call us or reach out on WhatsApp." },
  ]},
  { cat: "Pricing & Payment", items: [
    { q: "How is pricing determined?", a: "We provide transparent pricing with no hidden charges. Each service has a starting price listed on our website. The final price depends on the scope of work, property size, and specific requirements. You'll receive a clear quote before any work begins." },
    { q: "What payment methods do you accept?", a: "We accept online payment (credit/debit card), bank transfer, and cash on service. You can choose your preferred payment method during booking." },
    { q: "When do I pay?", a: "For online payments, payment is collected upon booking confirmation. For cash on service, payment is collected after the service is completed and you're satisfied with the results. Bank transfer customers will receive payment instructions via email." },
  ]},
  { cat: "Service & Quality", items: [
    { q: "Are your technicians qualified?", a: "Yes. All our technicians are vetted, background-checked, and professionally trained. They carry company identification and are experienced in their respective service areas." },
    { q: "What if I'm not satisfied with the service?", a: "We offer a satisfaction guarantee. If you're not happy with the quality of work, contact us within 24 hours and we will address the issue at no additional cost. Your satisfaction is our priority." },
    { q: "Do I need to provide any equipment or materials?", a: "No. Our technicians bring all necessary tools, equipment, and standard materials needed for the service. If specialized materials are required, this will be discussed and agreed upon during the quote stage." },
  ]},
  { cat: "Coverage & Availability", items: [
    { q: "Which areas do you serve?", a: "We serve all seven UAE emirates: Dubai, Sharjah, Abu Dhabi, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain, and Al Ain. We have dedicated teams in major cities for faster response times." },
    { q: "What are your operating hours?", a: "Our booking and customer service is available Saturday through Thursday, 8:00 AM to 10:00 PM, and Friday 2:00 PM to 10:00 PM. Online bookings are accepted 24/7." },
    { q: "Do you offer emergency services?", a: "Yes, for urgent situations such as plumbing emergencies, electrical faults, and AC breakdowns. Call us directly or send an urgent WhatsApp message, and we'll prioritize your request." },
  ]},
  { cat: "Cancellation & Refunds", items: [
    { q: "Can I cancel or reschedule my booking?", a: "Yes. You can cancel or reschedule free of charge up to 12 hours before the scheduled service time. Cancellations within 12 hours may be subject to a nominal fee." },
    { q: "What is your refund policy?", a: "If a service is cancelled before work begins, a full refund is issued for online payments within 5-7 business days. If you're dissatisfied with a completed service, contact us within 24 hours for resolution." },
  ]},
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-12 md:py-16">
        <div className="container-main">
          <Breadcrumbs items={[{ label: "FAQ" }]} />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-3">Frequently Asked Questions</h1>
          <p className="text-white/85 max-w-2xl">
            Find answers to common questions about our services, booking process, pricing, and coverage.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main max-w-3xl">
          {FAQ_ITEMS.map((section) => (
            <div key={section.cat} className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">{section.cat}</h2>
              <div className="space-y-3">
                {section.items.map((faq, i) => (
                  <details key={i} className="premium-card p-5 group" open={i === 0}>
                    <summary className="font-semibold text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between">
                      {faq.q}
                      <svg className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
