import Link from "next/link";
import { SERVICE_CATEGORIES, UAE_EMIRATES, BRAND } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap — All Pages",
  description: `Complete sitemap of ${BRAND.shortName} website. Find all services, locations, and information pages.`,
};

export default function SitemapPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-10">
        <div className="container-main">
          <Breadcrumbs items={[{ label: "Sitemap" }]} />
          <h1 className="text-3xl font-extrabold text-white mt-4 mb-2">Sitemap</h1>
          <p className="text-white/90">A complete overview of all pages on {BRAND.shortName}.</p>
        </div>
      </section>
      <section className="py-10 md:py-14">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-3">Main Pages</h2>
              <ul className="space-y-1.5">
                {[
                  { label: "Home", href: "/" },
                  { label: "All Services", href: "/services" },
                  { label: "Service Areas", href: "/locations" },
                  { label: "About Us", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "Blog", href: "/blog" },
                  { label: "FAQ", href: "/faq" },
                  { label: "AMC Plans", href: "/amc" },
                  { label: "Book a Service", href: "/booking" },
                  { label: "Request a Quote", href: "/quote" },
                ].map((p) => (
                  <li key={p.href}><Link href={p.href} className="text-sm text-brand-600 hover:underline">{p.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-3">Service Categories</h2>
              <ul className="space-y-1.5">
                {SERVICE_CATEGORIES.map((cat) => (
                  <li key={cat.slug}>
                    <Link href={`/services/${cat.slug}`} className="text-sm text-brand-600 hover:underline font-medium">{cat.name}</Link>
                    <ul className="ml-4 mt-1 space-y-1">
                      {cat.subcategories.map((sub) => (
                        <li key={sub.slug}>
                          <Link href={`/services/${cat.slug}/${sub.slug}`} className="text-xs text-slate-500 hover:text-brand-600">{sub.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-3">Locations</h2>
              <ul className="space-y-1.5">
                {UAE_EMIRATES.map((e) => (
                  <li key={e.slug}>
                    <Link href={`/locations/${e.slug}`} className="text-sm text-brand-600 hover:underline font-medium">{e.name}</Link>
                    <ul className="ml-4 mt-1 space-y-1">
                      {e.cities.map((c) => (
                        <li key={c.slug}>
                          <Link href={`/locations/${e.slug}/${c.slug}`} className="text-xs text-slate-500 hover:text-brand-600">{c.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
