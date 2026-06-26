import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { emirates, cities, areas } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const em = await db.select().from(emirates);
    const ct = await db.select().from(cities);
    const ar = await db.select().from(areas);
    return NextResponse.json({ emirates: em, cities: ct, areas: ar });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, name, slug, description, emirateId, cityId, metaTitle, metaDescription } = body;
    if (!name || !slug) return NextResponse.json({ error: "Name and slug required" }, { status: 400 });
    if (type === "city") {
      if (!emirateId) return NextResponse.json({ error: "emirateId required" }, { status: 400 });
      const [item] = await db.insert(cities).values({ name, slug, emirateId, description: description || null, metaTitle: metaTitle || null, metaDescription: metaDescription || null }).returning();
      return NextResponse.json(item, { status: 201 });
    } else if (type === "area") {
      if (!cityId) return NextResponse.json({ error: "cityId required" }, { status: 400 });
      const [item] = await db.insert(areas).values({ name, slug, cityId, description: description || null, metaTitle: metaTitle || null, metaDescription: metaDescription || null }).returning();
      return NextResponse.json(item, { status: 201 });
    } else {
      const [item] = await db.insert(emirates).values({ name, slug, description: description || null, metaTitle: metaTitle || null, metaDescription: metaDescription || null }).returning();
      return NextResponse.json(item, { status: 201 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id, type } = await request.json();
    if (type === "city") await db.delete(cities).where(eq(cities.id, id));
    else if (type === "area") await db.delete(areas).where(eq(areas.id, id));
    else await db.delete(emirates).where(eq(emirates.id, id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
