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
