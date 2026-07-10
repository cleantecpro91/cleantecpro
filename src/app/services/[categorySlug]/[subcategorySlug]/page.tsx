import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_CATEGORIES, BRAND, getCategoryBySlug, getSubcategoryBySlug, UAE_EMIRATES } from "@/lib/data";
import { getServiceDescription } from "@/lib/subcategory-descriptions";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { categorySlug: string; subcategorySlug: string }[] = [];
  SERVICE_CATEGORIES.forEach((cat) =>
    cat.subcategories.forEach((sub) =>
      params.push({ categorySlug: cat.slug, subcategorySlug: sub.slug })
    )
  );
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string; subcategorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug, subcategorySlug } = await params;
  const sub = getSubcategoryBySlug(categorySlug, subcategorySlug);
  const cat = getCategoryBySlug(categorySlug);
  if (!sub || !cat) return {};

  const serviceNames = sub.services.slice(0, 3).map(s => s.name).join(", ");
  const priceRange = sub.services.filter(s => s.price).map(s => s.price);
  const minPrice = priceRange.length > 0 ? Math.min(...priceRange.map(Number)) : null;

  return {
    title: `${sub.name} in UAE — ${minPrice ? `From AED ${minPrice} | ` : ""}Book Online | ${BRAND.shortName}`,
    description: `${sub.name} services in Dubai, Sharjah & all UAE emirates: ${serviceNames}. ${minPrice ? `Starting AED ${minPrice}. ` : ""}Same-day booking available. Book online or get a free quote.`,
    alternates: { canonical: `${BRAND.website}/services/${cat.slug}/${sub.slug}` },
    openGraph: {
      title: `${sub.name} | ${BRAND.shortName}`,
      description: `${sub.name} services across UAE: ${serviceNames}. Book online today.`,
      url: `${BRAND.website}/services/${cat.slug}/${sub.slug}`,
    },
  };
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string; subcategorySlug: string }>;
}) {
  const { categorySlug, subcategorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const subcategory = getSubcategoryBySlug(categorySlug, subcategorySlug);
  if (!category || !subcategory) notFound();

  const serviceNames = subcategory.services.map(s => s.name).join(", ");

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-12 md:py-16">
        <div className="container-main">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: category.name, href: `/services/${category.slug}` },
              { label: subcategory.name },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-2">
            {subcategory.name} in UAE
          </h1>
          <p className="text-white/90 text-base max-w-2xl">
            {subcategory.services.length} services available: {serviceNames}. Serving Dubai, Sharjah, Abu Dhabi, and all 7 UAE emirates with same-day booking.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subcategory.services.map((svc) => {
              const desc = getServiceDescription(svc.slug);
              return (
                <Link
                  key={svc.slug}
                  href={`/services/${category.slug}/${subcategory.slug}/${svc.slug}`}
                  className="premium-card p-6 flex flex-col"
                >
                  <h2 className="text-base font-bold text-slate-900 mb-2">
                    {svc.name}
                  </h2>
                  <p className="text-sm text-slate-500 flex-1 mb-4">
                    {desc || `${svc.name} service available across all UAE emirates. Book online or request a custom quote.`}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-lg font-bold text-brand-600">
                      {svc.price ? `From AED ${svc.price}` : "Get Quote"}
                    </span>
                    <span className="text-sm font-medium text-brand-600">
                      View Details →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Service areas section for crawlability */}
          <div className="mt-12 bg-slate-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              {subcategory.name} Available Across UAE
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Our {subcategory.name.toLowerCase()} services cover all 7 emirates. Select your area for local pricing and availability.
            </p>
            <div className="flex flex-wrap gap-2">
              {UAE_EMIRATES.slice(0, 4).flatMap(e =>
                e.cities.slice(0, 3).map(c => (
                  <Link key={`${e.slug}-${c.slug}`} href={`/locations/${e.slug}/${c.slug}`} className="text-xs text-brand-800 bg-brand-100 px-2.5 py-1 rounded-md hover:bg-brand-200 transition-colors">
                    {c.name}
                  </Link>
                ))
              )}
              <Link href="/locations" className="text-xs text-white bg-brand-600 px-2.5 py-1 rounded-md hover:bg-brand-700 transition-colors font-medium">
                All Areas →
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Need a Custom {subcategory.name} Solution?
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
