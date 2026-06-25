import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: allItems.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.label,
              ...(item.href
                ? { item: `https://cleantecpro.com${item.href}` }
                : {}),
            })),
          }),
        }}
      />
      {allItems.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="breadcrumb-separator" />}
          {item.href && i < allItems.length - 1 ? (
            <Link href={item.href} className="hover:text-brand-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-500 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
