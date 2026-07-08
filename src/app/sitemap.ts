import type { MetadataRoute } from "next";
import { SERVICE_CATEGORIES, UAE_EMIRATES, BRAND } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.website;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/amc`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/booking`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/quote`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/refund`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cancellation`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = [];
  SERVICE_CATEGORIES.forEach((cat) => {
    servicePages.push({
      url: `${base}/services/${cat.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
    cat.subcategories.forEach((sub) => {
      servicePages.push({
        url: `${base}/services/${cat.slug}/${sub.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
      sub.services.forEach((svc) => {
        servicePages.push({
          url: `${base}/services/${cat.slug}/${sub.slug}/${svc.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.7,
        });
      });
    });
  });

  const locationPages: MetadataRoute.Sitemap = [];
  UAE_EMIRATES.forEach((emirate) => {
    locationPages.push({
      url: `${base}/locations/${emirate.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: emirate.isPrimary ? 0.8 : 0.7,
    });
    emirate.cities.forEach((city) => {
      locationPages.push({
        url: `${base}/locations/${emirate.slug}/${city.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: emirate.isPrimary ? 0.7 : 0.6,
      });
    });
  });

  const blogPages: MetadataRoute.Sitemap = [
    { url: `${base}/blog/ac-maintenance-al-nahda-sharjah`, lastModified: new Date("2025-07-07"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/sofa-cleaning-al-qasimia-sharjah`, lastModified: new Date("2025-07-07"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/villa-cleaning-muwaileh-sharjah`, lastModified: new Date("2025-07-07"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/apartment-deep-cleaning-al-khan-sharjah`, lastModified: new Date("2025-07-07"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/home-cleaning-business-bay-dubai`, lastModified: new Date("2025-07-07"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/sofa-carpet-cleaning-jlt-dubai`, lastModified: new Date("2025-07-07"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/villa-deep-cleaning-al-reem-island-abu-dhabi`, lastModified: new Date("2025-07-07"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/ac-maintenance-ajman`, lastModified: new Date("2025-07-07"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/pest-control-ras-al-khaimah`, lastModified: new Date("2025-07-07"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/villa-deep-cleaning-al-majaz-sharjah`, lastModified: new Date("2025-07-07"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/professional-deep-cleaning-services-dubai`, lastModified: new Date("2025-06-25"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/ac-maintenance-tips-uae-summers`, lastModified: new Date("2025-01-15"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/how-often-deep-clean-home-uae`, lastModified: new Date("2025-01-10"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/signs-water-heater-needs-repair`, lastModified: new Date("2025-01-05"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/villa-summer-maintenance-checklist-uae`, lastModified: new Date("2024-12-28"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/understanding-amc-contracts-uae`, lastModified: new Date("2024-12-20"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/pest-control-methods-uae`, lastModified: new Date("2024-12-15"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/sitemap`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
