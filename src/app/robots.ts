import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/"],
      },
    ],
    sitemap: `${BRAND.website}/sitemap.xml`,
  };
}
