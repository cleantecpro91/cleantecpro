import "dotenv/config";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import bcrypt from "bcryptjs";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool, { schema });

async function seed() {
  console.log("🌱 Seeding database...");

  // Create admin
  const adminHash = await bcrypt.hash("admin123", 12);
  try {
    await db.insert(schema.admins).values({
      name: "Admin",
      email: "admin@cleantecpro.com",
      passwordHash: adminHash,
      role: "super_admin",
    }).onConflictDoNothing();
    console.log("✅ Admin user created (admin@cleantecpro.com / admin123)");
  } catch (e) {
    console.log("ℹ️ Admin user already exists or error:", (e as Error).message);
  }

  // Create testimonials
  const testimonialsData = [
    { customerName: "Ahmed M.", customerLocation: "Business Bay, Dubai", rating: 5, content: "Booked a deep cleaning for my apartment. The team arrived on time and did an excellent job. Very professional and the pricing was fair.", serviceName: "Deep Cleaning", isApproved: true, isFeatured: true },
    { customerName: "Sarah K.", customerLocation: "Al Majaz, Sharjah", rating: 5, content: "Had an AC emergency in summer. CleanTecPro sent a technician within 2 hours. Fixed quickly and price was exactly as quoted.", serviceName: "AC Repair", isApproved: true, isFeatured: true },
    { customerName: "Raj P.", customerLocation: "Al Reem Island, Abu Dhabi", rating: 5, content: "Used their move-in cleaning for our new villa. Everything was spotless. The team was thorough and paid attention to every detail.", serviceName: "Move-In Cleaning", isApproved: true, isFeatured: true },
    { customerName: "Fatima A.", customerLocation: "JLT, Dubai", rating: 5, content: "Regular office cleaning service every week. Consistent quality, reliable scheduling, and responsive customer support.", serviceName: "Office Cleaning", isApproved: true, isFeatured: true },
    { customerName: "Omar H.", customerLocation: "Al Nahda, Sharjah", rating: 5, content: "Excellent plumbing service. They fixed our kitchen leak in under an hour. Very knowledgeable and professional technician.", serviceName: "Plumbing Repair", isApproved: true, isFeatured: false },
    { customerName: "Maria L.", customerLocation: "Palm Jumeirah, Dubai", rating: 5, content: "Used their property snagging service for our new villa. Very detailed report and professional approach. Highly recommended.", serviceName: "Property Snagging", isApproved: true, isFeatured: false },
  ];

  try {
    for (const t of testimonialsData) {
      await db.insert(schema.testimonials).values(t).onConflictDoNothing();
    }
    console.log("✅ Testimonials seeded");
  } catch (e) {
    console.log("ℹ️ Testimonials seed error:", (e as Error).message);
  }

  // Create FAQs
  const faqData = [
    { question: "How do I book a service?", answer: "Book through our website, call us, or message on WhatsApp. Online booking is available 24/7.", category: "booking", sortOrder: 1 },
    { question: "What payment methods do you accept?", answer: "We accept online payment (credit/debit card), bank transfer, and cash on service.", category: "payment", sortOrder: 2 },
    { question: "Are your technicians qualified?", answer: "Yes. All technicians are vetted, background-checked, and professionally trained.", category: "quality", sortOrder: 3 },
    { question: "What areas do you serve?", answer: "We serve all seven UAE emirates: Dubai, Sharjah, Abu Dhabi, Ajman, RAK, Fujairah, UAQ, and Al Ain.", category: "coverage", sortOrder: 4 },
    { question: "Can I cancel or reschedule?", answer: "Yes, free cancellation up to 12 hours before the scheduled service time.", category: "booking", sortOrder: 5 },
    { question: "What if I'm not satisfied?", answer: "Contact us within 24 hours and we will address the issue at no additional cost.", category: "quality", sortOrder: 6 },
  ];

  try {
    for (const f of faqData) {
      await db.insert(schema.faqs).values(f).onConflictDoNothing();
    }
    console.log("✅ FAQs seeded");
  } catch (e) {
    console.log("ℹ️ FAQ seed error:", (e as Error).message);
  }

  // Create blog posts
  const blogData = [
    { title: "10 Essential AC Maintenance Tips for UAE Summers", slug: "ac-maintenance-tips-uae-summers", excerpt: "Keep your AC running efficiently during the intense UAE summer with these practical maintenance tips.", content: "<h2>Why AC Maintenance Matters in the UAE</h2><p>With summer temperatures regularly exceeding 45°C, your AC works harder here than almost anywhere else in the world.</p><h2>1. Clean or Replace Filters Monthly</h2><p>During peak summer, AC filters should be checked monthly. Dirty filters reduce airflow and can circulate dust and allergens.</p><h2>2. Schedule Professional Cleaning</h2><p>A professional AC cleaning service should be done at least twice a year — ideally before and after peak summer.</p><h2>3. Check Refrigerant Levels</h2><p>Low refrigerant means your AC can't cool effectively. If you notice warm air from vents, call a professional.</p>", authorName: "CleanTecPro", category: "AC & HVAC", isPublished: true, publishedAt: new Date("2025-01-15") },
    { title: "How Often Should You Deep Clean Your Home in the UAE?", slug: "how-often-deep-clean-home-uae", excerpt: "The UAE's desert climate means homes accumulate dust faster. Learn the optimal cleaning frequency.", content: "<h2>The UAE Climate Factor</h2><p>The desert climate, sandstorms, and high humidity levels mean UAE homes need more frequent deep cleaning than properties in temperate climates.</p><h2>Recommended Cleaning Schedule</h2><p>Deep clean your home every 3-4 months, with regular weekly maintenance cleaning in between. Kitchens and bathrooms benefit from monthly deep cleans.</p>", authorName: "CleanTecPro", category: "Cleaning", isPublished: true, publishedAt: new Date("2025-01-10") },
    { title: "Understanding Annual Maintenance Contracts in the UAE", slug: "understanding-amc-contracts-uae", excerpt: "An AMC can save you money and hassle on property maintenance. Learn what's covered and how to choose.", content: "<h2>What is an AMC?</h2><p>An Annual Maintenance Contract is a comprehensive service agreement that covers regular maintenance of your property's systems including AC, plumbing, and electrical.</p><h2>Benefits of an AMC</h2><p>Cost savings, priority scheduling, preventive maintenance, and peace of mind knowing your property is professionally maintained year-round.</p>", authorName: "CleanTecPro", category: "AMC", isPublished: true, publishedAt: new Date("2025-01-05") },
  ];

  try {
    for (const b of blogData) {
      await db.insert(schema.blogPosts).values(b).onConflictDoNothing();
    }
    console.log("✅ Blog posts seeded");
  } catch (e) {
    console.log("ℹ️ Blog seed error:", (e as Error).message);
  }

  // Create AMC Plans
  const amcData = [
    { name: "Basic AMC", slug: "basic-amc", description: "Essential maintenance coverage for apartments and small properties.", features: ["2x AC servicing/year", "Plumbing check", "Electrical check", "1 emergency callout/month", "Priority scheduling"], price: "1999", durationMonths: 12, propertyType: "apartment", sortOrder: 1 },
    { name: "Standard AMC", slug: "standard-amc", description: "Comprehensive coverage for villas and large apartments.", features: ["4x AC servicing/year", "Full plumbing & electrical", "3 emergency callouts/month", "Painting touch-up", "Garden maintenance quarterly"], price: "3499", durationMonths: 12, propertyType: "villa", isPopular: true, sortOrder: 2 },
    { name: "Premium AMC", slug: "premium-amc", description: "Complete property care for villas and commercial properties.", features: ["Unlimited AC servicing", "Full property maintenance", "Unlimited emergency callouts", "Annual pest control & deep cleaning", "Pool & garden maintenance"], price: "4999", durationMonths: 12, propertyType: "commercial", sortOrder: 3 },
  ];

  try {
    for (const a of amcData) {
      await db.insert(schema.amcPlans).values(a).onConflictDoNothing();
    }
    console.log("✅ AMC Plans seeded");
  } catch (e) {
    console.log("ℹ️ AMC seed error:", (e as Error).message);
  }

  console.log("\n🎉 Seeding complete!");
  console.log("📧 Admin login: admin@cleantecpro.com / admin123");
  await pool.end();
}

seed().catch((e) => {
  console.error("Seed error:", e);
  process.exit(1);
});
