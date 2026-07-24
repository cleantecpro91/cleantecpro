import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { services } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const all = await db.select().from(services).orderBy(desc(services.createdAt)).limit(500);
    return NextResponse.json(all);
  } catch (error) {
    console.error("Fetch services error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, slug, categoryId, subcategoryId, startingPrice, priceUnit, shortDescription, description, isActive, isFeatured } = body;
    
    if (!name || !slug || !categoryId) {
      return NextResponse.json({ error: "Name, Slug and Category are required" }, { status: 400 });
    }

    const [created] = await db.insert(services).values({
      name,
      slug,
      categoryId,
      subcategoryId: subcategoryId || null,
      startingPrice: startingPrice || "0",
      priceUnit: priceUnit || "per service",
      shortDescription: shortDescription || "",
      description: description || "",
      isActive: isActive === undefined ? true : !!isActive,
      isFeatured: isFeatured === undefined ? false : !!isFeatured,
    }).returning();

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("Create service error:", error);
    return NextResponse.json({ error: "Failed to create service" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...rest } = body;
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
    
    const d: Record<string, unknown> = { updatedAt: new Date() };
    if (rest.name !== undefined) d.name = rest.name;
    if (rest.slug !== undefined) d.slug = rest.slug;
    if (rest.categoryId !== undefined) d.categoryId = rest.categoryId;
    if (rest.subcategoryId !== undefined) d.subcategoryId = rest.subcategoryId || null;
    if (rest.startingPrice !== undefined) d.startingPrice = rest.startingPrice;
    if (rest.priceUnit !== undefined) d.priceUnit = rest.priceUnit;
    if (rest.shortDescription !== undefined) d.shortDescription = rest.shortDescription;
    if (rest.description !== undefined) d.description = rest.description;
    if (rest.isActive !== undefined) d.isActive = !!rest.isActive;
    if (rest.isFeatured !== undefined) d.isFeatured = !!rest.isFeatured;
    if (rest.isPopular !== undefined) d.isPopular = !!rest.isPopular;

    const [u] = await db.update(services).set(d).where(eq(services.id, id)).returning();
    return NextResponse.json(u);
  } catch (error) {
    console.error("Update service error:", error);
    return NextResponse.json({ error: "Failed to update service" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }
    await db.delete(services).where(eq(services.id, id));
    return NextResponse.json({ success: true, message: "Service deleted successfully" });
  } catch (error) {
    console.error("Delete service error:", error);
    return NextResponse.json({ error: "Failed to delete service" }, { status: 500 });
  }
}
