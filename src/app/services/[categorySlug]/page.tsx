import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_CATEGORIES, BRAND, getCategoryBySlug } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((c) => ({ categorySlug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug } = await params;
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return {};
  return {
    title: `${cat.name} Services in UAE — Book Online | ${BRAND.shortName}`,
    description: `Professional ${cat.name.toLowerCase()} services across Dubai, Sharjah, Abu Dhabi and all UAE emirates. Vetted professionals, transparent pricing. Book online or request a free quote from ${BRAND.shortName}.`,
    alternates: { canonical: `${BRAND.website}/services/${cat.slug}` },
    openGraph: {
      title: `${cat.name} | ${BRAND.shortName}`,
      description: `Professional ${cat.name.toLowerCase()} services across all UAE emirates.`,
      url: `${BRAND.website}/services/${cat.slug}`,
    },
  };
}

const CATEGORY_ICONS: Record<string, string> = {
  cleaning: "🧹", "ac-hvac": "❄️", plumbing: "🔧", electrical: "⚡",
  handyman: "🔨", renovation: "🏗️", "pest-control": "🛡️",
  "appliance-repair": "🔌", movers: "🚛", "garden-outdoor": "🌿",
  "building-maintenance": "🏢", "lifestyle-support": "🏠",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const totalServices = category.subcategories.reduce(
    (acc, sub) => acc + sub.services.length,
    0
  );

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-12 md:py-16">
        <div className="container-main">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: category.name },
            ]}
          />
          <div className="flex items-center gap-4 mt-4">
            <span className="text-4xl">
              {CATEGORY_ICONS[category.slug] || "📋"}
            </span>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                {category.name}
              </h1>
              <p className="text-white/70 text-base max-w-2xl">
                {category.description}
              </p>
              <div className="flex gap-3 mt-3">
                <span className="text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full">
                  {category.subcategories.length} categories
                </span>
                <span className="text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full">
                  {totalServices}+ services
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subcategories.map((sub) => (
              <div key={sub.slug} className="premium-card p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-1">
                  <Link
                    href={`/services/${category.slug}/${sub.slug}`}
                    className="hover:text-brand-600 transition-colors"
                  >
                    {sub.name}
                  </Link>
                </h2>
                <p className="text-xs text-slate-400 mb-4">
                  {sub.services.length} services available
                </p>
                <ul className="space-y-2">
                  {sub.services.map((svc) => (
                    <li key={svc.slug}>
                      <Link
                        href={`/services/${category.slug}/${sub.slug}/${svc.slug}`}
                        className="flex items-center justify-between py-2 px-3 -mx-3 rounded-lg hover:bg-brand-50 transition-colors group"
                      >
                        <span className="text-sm text-slate-700 font-medium group-hover:text-brand-600">
                          {svc.name}
                        </span>
                        <span className="text-sm font-semibold text-brand-600">
                          {svc.price ? `From AED ${svc.price}` : "Get Quote →"}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-slate-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Need a Custom {category.name.replace(" Services", "")} Solution?
            </h2>
            <p className="text-sm text-slate-500 mb-5 max-w-md mx-auto">
              Contact us for tailored service packages and bulk pricing for your property.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/quote" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/booking" className="btn-outline">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
