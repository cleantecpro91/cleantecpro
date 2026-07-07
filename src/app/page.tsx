import Link from "next/link";
import { SERVICE_CATEGORIES, BRAND, UAE_EMIRATES } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleaning, AC, Plumbing & Maintenance Services in UAE | CleanTecPro",
  description:
    "Book cleaning, AC repair, plumbing, electrical, and handyman services across Dubai, Sharjah, Abu Dhabi & all 7 UAE emirates. Same-day slots. 55+ areas covered. From AED 59.",
  alternates: {
    canonical: BRAND.website,
  },
  openGraph: {
    title: "Cleaning, AC, Plumbing & Maintenance Services in UAE | CleanTecPro",
    description:
      "Book cleaning, AC repair, plumbing, electrical, and handyman services across Dubai, Sharjah & all UAE emirates. Same-day slots from AED 59.",
    url: BRAND.website,
    type: "website",
  },
};

const CATEGORY_ICONS: Record<string, string> = {
  cleaning: "🧹", "ac-hvac": "❄️", plumbing: "🔧", electrical: "⚡",
  handyman: "🔨", renovation: "🏗️", "pest-control": "🛡️",
  "appliance-repair": "🔌", movers: "🚛", "garden-outdoor": "🌿",
  "building-maintenance": "🏢", "lifestyle-support": "🏠",
};

const CATEGORY_TAGLINES: Record<string, string> = {
  cleaning: "Deep clean, move-out clean, sofa, carpet & window washing",
  "ac-hvac": "AC repair, gas refill, duct cleaning & split installation",
  plumbing: "Leak repair, drain clearing, water heater fix & pipe work",
  electrical: "Light fitting, DB panel, wiring, fan & socket installation",
  handyman: "Furniture assembly, TV mount, door fix & curtain hanging",
  renovation: "Kitchen remodel, bathroom upgrade, tiling, gypsum & fit-out",
  "pest-control": "Cockroach, bed bug, termite, rodent & mosquito treatment",
  "appliance-repair": "Washing machine, fridge, oven, dishwasher & dryer repair",
  movers: "Home moving, office relocation, packing & storage solutions",
  "garden-outdoor": "Lawn mowing, tree trimming, irrigation & pool maintenance",
  "building-maintenance": "Villa AMC, property snagging, annual inspection & rope access",
  "lifestyle-support": "Maid service, laundry, event cleaning & office support",
};

const TRUST_ITEMS = [
  { icon: "✅", title: "ID-Verified Teams", desc: "Every technician carries company ID and is background-screened before deployment" },
  { icon: "💰", title: "Fixed-Quote Model", desc: "You get a written quote before work starts — the final bill matches, no surprises" },
  { icon: "⚡", title: "Same-Day Dispatch", desc: "Over 60% of bookings are served within 4 hours of confirmation" },
  { icon: "🛡️", title: "Re-Do Guarantee", desc: "Not satisfied? We send a team back within 48 hours at zero extra cost" },
  { icon: "🕐", title: "Open 7 Days", desc: "Booking slots from 8 AM to 10 PM including Fridays and public holidays" },
  { icon: "📍", title: "55+ Areas Covered", desc: "Active service teams in Dubai, Sharjah, Abu Dhabi, Ajman, RAK, Fujairah, UAQ, and Al Ain" },
];

const PROCESS_STEPS = [
  { step: "1", title: "Choose Your Service", desc: "Browse our wide range of professional services and select what you need." },
  { step: "2", title: "Book or Request a Quote", desc: "Schedule your preferred date and time, or request a custom quote." },
  { step: "3", title: "We Assign a Pro", desc: "Our team assigns a vetted professional for your specific service needs." },
  { step: "4", title: "Service Delivered", desc: "The job gets done. You inspect, confirm, and pay securely." },
];

const TESTIMONIALS = [
  { name: "Ahmed M.", location: "Business Bay, Dubai", locationHref: "/locations/dubai/business-bay", rating: 5, text: "Booked a deep cleaning for my apartment. The team arrived on time and did an excellent job. Very professional and the pricing was fair. Will definitely use CleanTecPro again.", service: "Deep Cleaning" },
  { name: "Sarah K.", location: "Al Majaz, Sharjah", locationHref: "/locations/sharjah/al-majaz", rating: 5, text: "Had an AC emergency in the middle of summer. CleanTecPro sent a technician within 2 hours. The issue was fixed quickly and the price was exactly as quoted. Highly recommend their AC services.", service: "AC Repair" },
  { name: "Raj P.", location: "Al Reem Island, Abu Dhabi", locationHref: "/locations/abu-dhabi/al-reem-island", rating: 5, text: "Used their move-in cleaning service for our new villa. Everything was spotless. The team was thorough and paid attention to every detail. Great experience overall.", service: "Move-In Cleaning" },
  { name: "Fatima A.", location: "JLT, Dubai", locationHref: "/locations/dubai/jlt", rating: 5, text: "Regular office cleaning service that we rely on every week. Consistent quality, reliable scheduling, and responsive customer support. CleanTecPro has been a great partner.", service: "Office Cleaning" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero Section ─────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent-500 rounded-full blur-[140px]" />
        </div>
        <div className="container-main relative py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/40 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                Trusted by 10,000+ UAE Customers
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] mb-5">
                Cleaning, AC & Maintenance
                <br />
                <span className="text-brand-200">Services Across Dubai, Sharjah & UAE</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-lg">
                Book cleaning, AC repair, plumbing, electrical, handyman, and renovation services in Dubai, Sharjah, Abu Dhabi, and all 7 UAE emirates. Same-day slots available from AED 59.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/booking" className="btn-primary !py-3 !px-6 text-base">
                  Book a Service
                </Link>
                <Link href="/quote" className="btn-outline !bg-white/10 !text-white !border-white/40 hover:!bg-white/20 !py-3 !px-6 text-base">
                  Request a Quote
                </Link>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a service.")}`}
                  className="btn-whatsapp !py-3 !px-6 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                {TRUST_ITEMS.slice(0, 4).map((item) => (
                  <span key={item.title} className="trust-badge !bg-white/10 !text-white/90 backdrop-blur-sm">
                    {item.icon} {item.title}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {SERVICE_CATEGORIES.slice(0, 6).map((cat, i) => (
                    <Link
                      key={cat.slug}
                      href={`/services/${cat.slug}`}
                      className={`glass-card !bg-white/10 !border-white/40 backdrop-blur-xl rounded-2xl p-5 hover:!bg-white/15 transition-all group ${
                        i === 0 ? "col-span-2" : ""
                      }`}
                    >
                      <span className="text-2xl mb-2 block">
                        {CATEGORY_ICONS[cat.slug] || "📋"}
                      </span>
                      <p className="text-sm font-bold text-white mb-1">
                        {cat.name}
                      </p>
                      <p className="text-xs text-white/80">
                        {{
                          cleaning: "Deep clean, move-out, sofa, carpet & window care",
                          "ac-hvac": "AC repair, gas refill, duct cleaning & installation",
                          plumbing: "Leak fix, drain clear, water heater & pipe repair",
                          electrical: "Light fitting, DB box, wiring & fault finding",
                          handyman: "Furniture build, TV mount, carpentry & painting",
                          renovation: "Kitchen, bathroom, tiling, gypsum & fit-out",
                        }[cat.slug] || `${cat.subcategories.length} service types`}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Service Categories Grid ──────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">Our Service Categories</h2>
            <p className="section-subheading mx-auto">
              From deep cleaning to electrical repairs, AC maintenance to full renovations — we cover every service your property needs.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICE_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/services/${cat.slug}`}
                className="premium-card p-5 text-center group"
              >
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">
                  {CATEGORY_ICONS[cat.slug] || "📋"}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500">
                  {CATEGORY_TAGLINES[cat.slug] || `${cat.subcategories.reduce((acc, s) => acc + s.services.length, 0)}+ services`}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="btn-outline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Popular Services ─────────────────────────────── */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">Most Popular Services</h2>
            <p className="section-subheading mx-auto">
              Our most-booked services by UAE homeowners and businesses.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Deep Home Cleaning", slug: "/services/cleaning/deep-cleaning/deep-home-cleaning", price: "From AED 199", cat: "Cleaning", desc: "Complete top-to-bottom home cleaning that removes embedded dust, grease, and allergens from every room." },
              { name: "AC Cleaning & Service", slug: "/services/ac-hvac/ac-maintenance/ac-cleaning", price: "From AED 89", cat: "AC & HVAC", desc: "Restore your AC cooling efficiency with coil cleaning, filter wash, and gas pressure check included." },
              { name: "Plumbing Leak Repair", slug: "/services/plumbing/plumbing-repair/leak-repair", price: "From AED 129", cat: "Plumbing", desc: "Quick leak detection and pipe repair for kitchens, bathrooms, and water heater connections." },
              { name: "Move-In Move-Out Cleaning", slug: "/services/cleaning/deep-cleaning/move-in-move-out-cleaning", price: "From AED 299", cat: "Cleaning", desc: "Handover-ready cleaning for tenants and landlords — walls, cabinets, bathrooms, and balconies covered." },
              { name: "Electrical Light Installation", slug: "/services/electrical/electrical-installation/light-installation", price: "From AED 79", cat: "Electrical", desc: "Safe fitting of ceiling lights, chandeliers, spotlights, and outdoor fixtures with wiring check." },
              { name: "Sofa Cleaning", slug: "/services/cleaning/specialized-cleaning/sofa-cleaning", price: "From AED 129", cat: "Cleaning", desc: "Steam-based fabric and leather sofa cleaning that lifts stains, odors, and dust mites effectively." },
            ].map((svc) => (
              <Link
                key={svc.slug}
                href={svc.slug}
                className="premium-card p-6 flex flex-col"
              >
                <span className="text-xs font-semibold text-brand-800 bg-brand-100 px-2 py-1 rounded-md self-start mb-3">
                  {svc.cat}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {svc.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4 flex-1">
                  {svc.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-brand-600">
                    {svc.price}
                  </span>
                  <span className="text-sm font-medium text-brand-600">
                    Book Now →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">How It Works</h2>
            <p className="section-subheading mx-auto">
              Book any service in four simple steps. Fast, transparent, and hassle-free.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white text-xl font-extrabold flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-500/20">
                  {s.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us / Trust Section ────────────────── */}
      <section className="py-16 md:py-20 bg-brand-950 text-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
              Why Choose CleanTecPro
            </h2>
            <p className="text-white/80 text-base max-w-lg mx-auto">
              Serving 55+ neighborhoods across 7 emirates with local teams, fixed quotes, and a re-do guarantee if you are not satisfied.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Service Areas ────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">We Serve All UAE Emirates</h2>
            <p className="section-subheading mx-auto">
              Professional services available across every emirate with dedicated local teams.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {UAE_EMIRATES.map((emirate) => (
              <div
                key={emirate.slug}
                className="premium-card p-5"
              >
                <Link href={`/locations/${emirate.slug}`} className="text-base font-bold text-slate-900 hover:text-brand-600 transition-colors">
                  {emirate.name}
                </Link>
                {emirate.isPrimary && (
                  <span className="text-[10px] bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-semibold ml-2">
                    Primary
                  </span>
                )}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {emirate.cities.slice(0, 5).map((city) => (
                    <Link
                      key={city.slug}
                      href={`/locations/${emirate.slug}/${city.slug}`}
                      className="text-[11px] text-brand-800 bg-brand-100 px-2 py-0.5 rounded-md hover:bg-brand-200 transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                  {emirate.cities.length > 5 && (
                    <Link
                      href={`/locations/${emirate.slug}`}
                      className="text-[11px] text-brand-600 font-semibold px-2 py-0.5"
                    >
                      +{emirate.cities.length - 5} more
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">What Our Customers Say</h2>
            <p className="section-subheading mx-auto">
              Real feedback from real customers across the UAE.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="premium-card p-6 flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} className="w-4 h-4" viewBox="0 0 20 20" fill="#eab308">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-slate-100 pt-3">
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <Link href={t.locationHref} className="text-xs text-brand-600 hover:underline">{t.location}</Link>
                  <span className="text-xs text-slate-500 mt-1 block">{t.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AMC Section ──────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-main">
          <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              Annual Maintenance Contracts
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8">
              Keep your property in top condition year-round with our comprehensive AMC plans. Cover AC, plumbing, electrical, and general maintenance with one annual contract.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/amc" className="btn-outline !bg-white !text-brand-700 !border-white hover:!bg-brand-50">
                View AMC Plans
              </Link>
              <Link href="/quote" className="btn-outline !bg-white/20 !border-2 !border-white !text-white hover:!bg-white/30 font-bold">
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-main text-center">
          <h2 className="section-heading mb-4">
            Ready to Get Started?
          </h2>
          <p className="section-subheading mx-auto mb-8">
            Book a service, request a quote, or reach out on WhatsApp. Our team is ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/booking" className="btn-primary !py-3 !px-6 text-base">
              Book a Service
            </Link>
            <Link href="/quote" className="btn-outline !py-3 !px-6 text-base">
              Request a Quote
            </Link>
            <a
              href={`tel:${BRAND.phone}`}
              className="btn-outline !py-3 !px-6 text-base"
            >
              📞 {BRAND.phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
