import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_CATEGORIES, BRAND, getCategoryBySlug, getSubcategoryBySlug } from "@/lib/data";
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
  return {
    title: `${sub.name} Services in UAE | ${BRAND.shortName}`,
    description: `Professional ${sub.name.toLowerCase()} across Dubai, Sharjah, Abu Dhabi and all UAE. Book online with ${BRAND.shortName} — transparent pricing, vetted teams.`,
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
            {subcategory.name}
          </h1>
          <p className="text-white/70 text-base max-w-2xl">
            Browse and book professional {subcategory.name.toLowerCase()} services across the UAE.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subcategory.services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${category.slug}/${subcategory.slug}/${svc.slug}`}
                className="premium-card p-6 flex flex-col"
              >
                <h2 className="text-base font-bold text-slate-900 mb-2">
                  {svc.name}
                </h2>
                <p className="text-sm text-slate-500 flex-1 mb-4">
                  Professional {svc.name.toLowerCase()} service by vetted technicians. Book online or request a quote.
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
