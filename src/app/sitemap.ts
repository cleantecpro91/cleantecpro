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

  return [...staticPages, ...servicePages, ...locationPages];
}
