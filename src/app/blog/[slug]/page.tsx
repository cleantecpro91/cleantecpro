import Link from "next/link";
import { BRAND } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

const POSTS: Record<string, { title: string; category: string; date: string; readTime: string; content: string }> = {
  "ac-maintenance-tips-uae-summers": {
    title: "10 Essential AC Maintenance Tips for UAE Summers",
    category: "AC & HVAC",
    date: "2025-01-15",
    readTime: "5 min",
    content: `<h2>Why AC Maintenance Matters in the UAE</h2><p>With summer temperatures regularly exceeding 45°C in the UAE, your air conditioning system works harder here than almost anywhere else in the world. Regular maintenance isn't just about comfort — it's about efficiency, health, and avoiding costly emergency repairs during peak summer months.</p><h2>1. Clean or Replace Filters Monthly</h2><p>During peak summer, AC filters should be checked monthly and cleaned or replaced as needed. Dirty filters reduce airflow, force the system to work harder, and can circulate dust and allergens throughout your home. This is especially important in the UAE where desert dust is a constant factor.</p><h2>2. Check and Clean the Outdoor Unit</h2><p>The outdoor condenser unit needs adequate airflow to function efficiently. Remove any debris, leaves, or sand that may have accumulated around the unit. Ensure there's at least 60cm of clearance around all sides.</p><h2>3. Inspect the Thermostat</h2><p>Make sure your thermostat is reading the correct temperature and responding properly. Consider upgrading to a programmable thermostat to optimize cooling schedules and reduce energy consumption when you're away.</p><h2>4. Schedule Professional AC Cleaning</h2><p>A professional AC cleaning service should be done at least twice a year — ideally before and after peak summer. Professional cleaning includes deep cleaning of coils, blower components, and drain lines that are difficult to access on your own.</p><h2>5. Check Refrigerant Levels</h2><p>Low refrigerant means your AC can't cool effectively. If you notice warm air coming from vents or ice forming on the refrigerant lines, it's time to call a professional for a refrigerant check and potential gas refill.</p>`,
  },
};

const DEFAULT_CONTENT = `<h2>Article Coming Soon</h2><p>This article is being prepared by our content team. Check back soon for the full guide, or explore our other resources and services in the meantime.</p><p>In the meantime, if you need assistance with any home maintenance service, don't hesitate to book online or contact us on WhatsApp.</p>`;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug] || {
    title: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    category: "General",
    date: "2025-01-01",
    readTime: "5 min",
    content: DEFAULT_CONTENT,
  };

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-10 md:py-14">
        <div className="container-main max-w-3xl">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
          <span className="text-xs font-semibold text-brand-300 bg-white/10 px-2.5 py-1 rounded-md mt-4 inline-block mb-3">
            {post.category}
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-3">{post.title}</h1>
          <div className="flex items-center gap-3 text-sm text-white/80">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
            <span>·</span>
            <span>{BRAND.shortName}</span>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container-main max-w-3xl">
          <article className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mt-10 pt-8 border-t border-slate-200">
            <div className="flex flex-wrap gap-3">
              <Link href="/booking" className="btn-primary">Book a Service</Link>
              <Link href="/blog" className="btn-outline">← Back to Blog</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
