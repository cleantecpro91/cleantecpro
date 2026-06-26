import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { services, categories, subcategories } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const all = await db.select().from(services).orderBy(desc(services.createdAt)).limit(200);
    return NextResponse.json(all);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, slug, categoryId, subcategoryId, shortDescription, description, startingPrice, priceUnit, durationEstimate, isFeatured, isPopular, metaTitle, metaDescription } = body;
    if (!name || !slug || !categoryId) return NextResponse.json({ error: "Name, slug, categoryId required" }, { status: 400 });
    const [item] = await db.insert(services).values({
      name, slug, categoryId, subcategoryId: subcategoryId || null,
      shortDescription: shortDescription || null, description: description || null,
      startingPrice: startingPrice || null, priceUnit: priceUnit || "per service",
      durationEstimate: durationEstimate || null,
      isFeatured: isFeatured || false, isPopular: isPopular || false,
      metaTitle: metaTitle || null, metaDescription: metaDescription || null,
    }).returning();
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...rest } = body;
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
    const d: Record<string, unknown> = { updatedAt: new Date() };
    for (const [k, v] of Object.entries(rest)) { if (v !== undefined) d[k] = v; }
    const [u] = await db.update(services).set(d).where(eq(services.id, id)).returning();
    return NextResponse.json(u);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    await db.delete(services).where(eq(services.id, id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
