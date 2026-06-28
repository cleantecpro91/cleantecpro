import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { categories, subcategories, services, emirates, cities } from "@/db/schema";
import { SERVICE_CATEGORIES, UAE_EMIRATES } from "@/lib/data";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("key");
  if (secret !== "setup2025cleantecpro") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    let catCount = 0, subCount = 0, svcCount = 0, emirateCount = 0, cityCount = 0;

    // Seed categories, subcategories, services
    for (const cat of SERVICE_CATEGORIES) {
      const [dbCat] = await db.insert(categories).values({
        name: cat.name, slug: cat.slug, description: cat.description, icon: cat.icon, isActive: true,
      }).onConflictDoNothing().returning();

      if (!dbCat) continue;
      catCount++;

      for (const sub of cat.subcategories) {
        const [dbSub] = await db.insert(subcategories).values({
          categoryId: dbCat.id, name: sub.name, slug: sub.slug, isActive: true,
        }).onConflictDoNothing().returning();

        if (!dbSub) continue;
        subCount++;

        for (const svc of sub.services) {
          await db.insert(services).values({
            categoryId: dbCat.id, subcategoryId: dbSub.id,
            name: svc.name, slug: svc.slug,
            startingPrice: svc.price || null,
            shortDescription: `Professional ${svc.name.toLowerCase()} service across the UAE.`,
            isActive: true, isFeatured: false, isPopular: false,
          }).onConflictDoNothing();
          svcCount++;
        }
      }
    }

    // Seed emirates and cities
    for (const em of UAE_EMIRATES) {
      const [dbEmirate] = await db.insert(emirates).values({
        name: em.name, slug: em.slug, description: em.description,
        isPrimary: em.isPrimary || false, isActive: true,
      }).onConflictDoNothing().returning();

      if (!dbEmirate) continue;
      emirateCount++;

      for (const city of em.cities) {
        await db.insert(cities).values({
          emirateId: dbEmirate.id, name: city.name, slug: city.slug, isActive: true,
        }).onConflictDoNothing();
        cityCount++;
      }
    }

    return NextResponse.json({
      success: true,
      seeded: { categories: catCount, subcategories: subCount, services: svcCount, emirates: emirateCount, cities: cityCount },
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: "Seed failed", details: String(error) }, { status: 500 });
  }
}
