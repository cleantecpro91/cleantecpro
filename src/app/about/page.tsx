import Link from "next/link";
import { BRAND } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CleanTecPro — Trusted UAE Cleaning & Technical Services Platform",
  description: `Learn about ${BRAND.fullName} — a trusted multiservice marketplace headquartered in Business Bay, Dubai. We serve homes and businesses across all 7 UAE emirates with vetted professionals.`,
  alternates: { canonical: `${BRAND.website}/about` },
  openGraph: {
    title: `About Us | ${BRAND.shortName}`,
    description: `${BRAND.shortName} is a trusted UAE multiservice marketplace for cleaning, AC, plumbing, electrical & maintenance services.`,
    url: `${BRAND.website}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-12 md:py-16">
        <div className="container-main">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-3">About CleanTecPro</h1>
          <p className="text-white/85 max-w-2xl">
            Your trusted partner for professional technical, cleaning, and maintenance services across the UAE.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Who We Are</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {BRAND.fullName} is a UAE-based multiservice marketplace headquartered in Business Bay, Dubai. We connect residential and commercial customers with vetted, professional service teams across all seven emirates. Our platform covers cleaning, AC and HVAC, plumbing, electrical work, handyman services, renovation, pest control, appliance repair, moving, garden maintenance, building maintenance, and more.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              To make professional property services accessible, transparent, and reliable for every home and business in the UAE. We believe in fair pricing, quality workmanship, and exceptional customer experience.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mb-4">How We Work</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We operate as a managed marketplace. This means {BRAND.shortName} handles every aspect of your service experience:
            </p>
            <ul className="space-y-2 text-slate-600 text-sm mb-6">
              <li className="flex items-start gap-2"><span className="text-accent-600">✓</span> We vet, train, and quality-check every service professional</li>
              <li className="flex items-start gap-2"><span className="text-accent-600">✓</span> We set transparent pricing with no hidden charges</li>
              <li className="flex items-start gap-2"><span className="text-accent-600">✓</span> We handle booking, scheduling, and customer support</li>
              <li className="flex items-start gap-2"><span className="text-accent-600">✓</span> We guarantee service quality and handle any issues</li>
              <li className="flex items-start gap-2"><span className="text-accent-600">✓</span> We manage all payments securely</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { title: "All-in-One Platform", desc: "One place for every home and office service need" },
                { title: "Vetted Professionals", desc: "Background-checked and trained teams you can trust" },
                { title: "UAE-Wide Coverage", desc: "Serving Dubai, Sharjah, Abu Dhabi, and all emirates" },
                { title: "Transparent Pricing", desc: "Clear quotes with no surprise charges" },
                { title: "Satisfaction Guarantee", desc: "We stand behind every service we deliver" },
                { title: "Easy Booking", desc: "Book online, by phone, or via WhatsApp" },
              ].map((item) => (
                <div key={item.title} className="premium-card p-4">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-brand-50 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Ready to Experience the {BRAND.shortName} Difference?</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/booking" className="btn-primary">Book a Service</Link>
                <Link href="/contact" className="btn-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
