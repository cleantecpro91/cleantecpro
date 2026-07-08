import Link from "next/link";
import { BRAND, SERVICE_CATEGORIES, UAE_EMIRATES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-800">
        <div className="container-main py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                Ready to Book a Service?
              </h2>
              <p className="text-white/80 text-base">
                Get professional service at your doorstep. Fast booking, reliable teams, transparent pricing.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/booking" className="btn-outline !bg-white !text-brand-700 !border-white hover:!bg-brand-50">
                Book Now
              </Link>
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hi, I'd like to inquire about your services.")}`}
                className="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:pr-6">
            <div className="mb-4">
              <img
                src="/logo.webp"
                alt="CleanTecPro - Professional Technical And Cleaning Services"
                className="h-12 w-auto"
                width={160}
                height={48}
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Your trusted partner for professional technical, cleaning, and maintenance services across the United Arab Emirates.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BRAND.phoneFormatted}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {BRAND.email}
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <svg className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {BRAND.address}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICE_CATEGORIES.slice(0, 8).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/services/${cat.slug}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-brand-400 hover:text-brand-200 font-medium transition-colors">
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {UAE_EMIRATES.map((e) => (
                <li key={e.slug}>
                  <Link href={`/locations/${e.slug}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {e.name}
                    {e.isPrimary && (
                      <span className="ml-1.5 text-[10px] bg-brand-600 text-white px-1.5 py-0.5 rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Blog & Resources", href: "/blog" },
                { label: "FAQs", href: "/faq" },
                { label: "AMC Plans", href: "/amc" },
                { label: "Property Snagging", href: "/services/building-maintenance/inspections/property-snagging" },
                { label: "Customer Login", href: "/auth/login" },
                { label: "My Account", href: "/dashboard" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link href="/privacy" className="text-slate-400 hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/refund" className="text-slate-400 hover:text-slate-300 transition-colors">
              Refund Policy
            </Link>
            <Link href="/cancellation" className="text-slate-400 hover:text-slate-300 transition-colors">
              Cancellation Policy
            </Link>
            <Link href="/sitemap" className="text-slate-400 hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
