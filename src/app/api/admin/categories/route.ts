import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { categories, subcategories } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const cats = await db.select().from(categories).orderBy(categories.sortOrder);
    const subs = await db.select().from(subcategories).orderBy(subcategories.sortOrder);
    return NextResponse.json({ categories: cats, subcategories: subs });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, name, slug, description, categoryId, metaTitle, metaDescription, icon } = body;
    if (!name || !slug) return NextResponse.json({ error: "Name and slug required" }, { status: 400 });
    if (type === "subcategory") {
      if (!categoryId) return NextResponse.json({ error: "categoryId required" }, { status: 400 });
      const [item] = await db.insert(subcategories).values({ name, slug, categoryId, description: description || null, metaTitle: metaTitle || null, metaDescription: metaDescription || null }).returning();
      return NextResponse.json(item, { status: 201 });
    } else {
      const [item] = await db.insert(categories).values({ name, slug, description: description || null, icon: icon || null, metaTitle: metaTitle || null, metaDescription: metaDescription || null }).returning();
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
    if (type === "subcategory") await db.delete(subcategories).where(eq(subcategories.id, id));
    else await db.delete(categories).where(eq(categories.id, id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
