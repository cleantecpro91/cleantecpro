import Link from "next/link";
import { BRAND } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Home Maintenance Tips, Cleaning Guides & UAE Property Care Advice",
  description: `Expert tips, step-by-step guides, and practical insights on home maintenance, cleaning, AC care, plumbing, pest control and property management in the UAE. By ${BRAND.shortName}.`,
  alternates: { canonical: `${BRAND.website}/blog` },
  openGraph: {
    title: `Blog & Resources | ${BRAND.shortName}`,
    description: "Expert home maintenance tips and service guides for UAE homeowners.",
    url: `${BRAND.website}/blog`,
  },
};

const SAMPLE_POSTS = [
  { title: "Home & Maintenance Services in Al Nakheel, RAK", slug: "cleaning-ac-plumbing-services-al-nakheel-rak", excerpt: "Cleaning, AC repair, plumbing, electrical, and handyman services in Al Nakheel, Ras Al Khaimah. Serving Al Nakheel, Al Seer, Al Dhahiri.", category: "Multi-Service", date: "2025-07-17", readTime: "8 min" },
  { title: "Home & Maintenance Services in Al Dhait, RAK", slug: "home-cleaning-ac-maintenance-al-dhait-rak", excerpt: "Home cleaning, AC repair, plumbing, and pest control in Al Dhait North & South, Ras Al Khaimah.", category: "Multi-Service", date: "2025-07-17", readTime: "7 min" },
  { title: "Home & Villa Services in Al Hamra, RAK", slug: "villa-cleaning-garden-maintenance-al-hamra-rak", excerpt: "Villa cleaning, AC repair, garden maintenance in Al Hamra Village, Ras Al Khaimah. Serving golf and expat community.", category: "Multi-Service", date: "2025-07-17", readTime: "7 min" },
  { title: "Home & Maintenance Services in Mina Al Arab, RAK", slug: "apartment-villa-cleaning-ac-services-mina-al-arab-rak", excerpt: "Apartment and villa cleaning, AC repair, plumbing in Mina Al Arab waterfront, Ras Al Khaimah.", category: "Multi-Service", date: "2025-07-17", readTime: "7 min" },
  { title: "Home & Commercial Services in Julfar, RAK", slug: "home-commercial-cleaning-services-julfar-rak", excerpt: "Home and commercial cleaning, AC repair, plumbing in Julfar and Al Jazirah Al Hamra, Ras Al Khaimah.", category: "Multi-Service", date: "2025-07-17", readTime: "7 min" },
  { title: "AC Maintenance in Al Nahda, Sharjah", slug: "ac-maintenance-al-nahda-sharjah", excerpt: "Fast AC maintenance and repair in Al Nahda, Sharjah starting AED 89. Gas refill, cleaning, and cooling issues fixed same-day near Sahara Centre.", category: "AC & HVAC", date: "2025-07-07", readTime: "5 min" },
  { title: "Sofa Cleaning in Al Qasimia, Sharjah", slug: "sofa-cleaning-al-qasimia-sharjah", excerpt: "Deep steam sofa and upholstery cleaning in Al Qasimia, Sharjah starting AED 80. Stain removal, deodorizing, same-day booking available.", category: "Cleaning", date: "2025-07-07", readTime: "4 min" },
  { title: "Villa Cleaning in Muwaileh, Sharjah", slug: "villa-cleaning-muwaileh-sharjah", excerpt: "Reliable villa cleaning in Muwaileh, Sharjah starting AED 250. Regular and deep cleaning packages for University City area residents.", category: "Cleaning", date: "2025-07-07", readTime: "5 min" },
  { title: "Apartment Deep Cleaning in Al Khan, Sharjah", slug: "apartment-deep-cleaning-al-khan-sharjah", excerpt: "Thorough apartment deep cleaning in Al Khan, Sharjah starting AED 200. Move-in, move-out, and one-time deep cleans near Al Khan Corniche.", category: "Cleaning", date: "2025-07-07", readTime: "5 min" },
  { title: "Home Cleaning in Business Bay, Dubai", slug: "home-cleaning-business-bay-dubai", excerpt: "Trusted home and apartment cleaning in Business Bay, Dubai starting AED 199. Vetted teams, flexible scheduling, same-week booking.", category: "Cleaning", date: "2025-07-07", readTime: "5 min" },
  { title: "Sofa & Carpet Cleaning in JLT, Dubai", slug: "sofa-carpet-cleaning-jlt-dubai", excerpt: "Deep steam sofa and carpet cleaning in JLT, Dubai starting AED 129. Stain removal, fast drying, same-week booking.", category: "Cleaning", date: "2025-07-07", readTime: "4 min" },
  { title: "Villa Deep Cleaning in Al Reem Island, Abu Dhabi", slug: "villa-deep-cleaning-al-reem-island-abu-dhabi", excerpt: "Professional villa and apartment deep cleaning in Al Reem Island, Abu Dhabi starting AED 250. Marble-safe products, flexible booking.", category: "Cleaning", date: "2025-07-07", readTime: "5 min" },
  { title: "AC Maintenance in Ajman", slug: "ac-maintenance-ajman", excerpt: "Fast AC maintenance and gas refill service in Ajman starting AED 89. Same-day cooling repairs across Al Rashidiya, Al Nuaimiya, Emirates City.", category: "AC & HVAC", date: "2025-07-07", readTime: "5 min" },
  { title: "Pest Control in Ras Al Khaimah", slug: "pest-control-ras-al-khaimah", excerpt: "Effective pest control in Ras Al Khaimah starting AED 150. Cockroach, termite, and general pest treatment with safe, licensed methods.", category: "Pest Control", date: "2025-07-07", readTime: "5 min" },
  { title: "Villa Deep Cleaning in Al Majaz, Sharjah", slug: "villa-deep-cleaning-al-majaz-sharjah", excerpt: "Professional villa deep cleaning in Al Majaz, Sharjah starting AED 250. Pricing table, what's included, FAQs, and same-day booking for Al Majaz Waterfront residents.", category: "Cleaning", date: "2025-07-07", readTime: "5 min" },
  { title: "Professional Deep Cleaning Services in Dubai: What's Included & Why You Need It", slug: "professional-deep-cleaning-services-dubai", excerpt: "Looking for professional deep cleaning services in Dubai? Discover what's included, pricing breakdown, benefits and why UAE residents trust expert deep cleaners. Complete guide with costs.", category: "Cleaning", date: "2025-06-25", readTime: "12 min" },
  { title: "10 Essential AC Maintenance Tips for UAE Summers", slug: "ac-maintenance-tips-uae-summers", excerpt: "Keep your AC running efficiently during the intense UAE summer with these practical maintenance tips from our HVAC experts.", category: "AC & HVAC", date: "2025-01-15", readTime: "5 min" },
  { title: "How Often Should You Deep Clean Your Home in the UAE?", slug: "how-often-deep-clean-home-uae", excerpt: "The UAE's desert climate means homes accumulate dust faster than in many other regions. Learn the optimal cleaning frequency for different areas of your home.", category: "Cleaning", date: "2025-01-10", readTime: "4 min" },
  { title: "Signs Your Water Heater Needs Repair or Replacement", slug: "signs-water-heater-needs-repair", excerpt: "A malfunctioning water heater can disrupt your daily routine. Here are the key warning signs that indicate it's time for a repair or replacement.", category: "Plumbing", date: "2025-01-05", readTime: "4 min" },
  { title: "Preparing Your Villa for Summer: A Complete Maintenance Checklist", slug: "villa-summer-maintenance-checklist-uae", excerpt: "Use this comprehensive checklist to prepare your villa for the UAE summer, covering AC, plumbing, electrical, and outdoor areas.", category: "Maintenance", date: "2024-12-28", readTime: "7 min" },
  { title: "Understanding Annual Maintenance Contracts (AMC) in the UAE", slug: "understanding-amc-contracts-uae", excerpt: "An AMC can save you money and hassle on property maintenance. Learn what's typically covered, pricing factors, and how to choose the right plan.", category: "AMC", date: "2024-12-20", readTime: "6 min" },
  { title: "Top Pest Control Methods for UAE Homes and Offices", slug: "pest-control-methods-uae", excerpt: "The warm UAE climate attracts various pests year-round. Learn about effective pest control methods and prevention strategies.", category: "Pest Control", date: "2024-12-15", readTime: "5 min" },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-12 md:py-16">
        <div className="container-main">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-3">Blog & Resources</h1>
          <p className="text-white/90 max-w-2xl">
            Expert tips, maintenance guides, and practical advice for UAE homeowners and businesses.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_POSTS.map((post) => (
              <article key={post.slug} className="premium-card p-6 flex flex-col">
                <span className="text-xs font-semibold text-brand-800 bg-brand-100 px-2 py-1 rounded-md self-start mb-3">
                  {post.category}
                </span>
                <h2 className="text-base font-bold text-slate-900 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-brand-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-slate-500 flex-1 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                  <span>{post.date}</span>
                  <span>{post.readTime} read</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
