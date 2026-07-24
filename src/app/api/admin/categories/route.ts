import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { categories, subcategories } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const cats = await db.select().from(categories).orderBy(desc(categories.createdAt)).limit(100);
    const subs = await db.select().from(subcategories).orderBy(desc(subcategories.createdAt)).limit(500);
    return NextResponse.json({ categories: cats, subcategories: subs });
  } catch (error) {
    console.error("Fetch categories error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, name, slug, description, categoryId, icon, isActive, sortOrder } = body;

    if (!name || !slug) {
      return NextResponse.json({ error: "Name and slug are required" }, { status: 400 });
    }

    if (type === "subcategory") {
      if (!categoryId) {
        return NextResponse.json({ error: "categoryId is required for subcategory" }, { status: 400 });
      }
      const [newSub] = await db.insert(subcategories).values({
        categoryId,
        name,
        slug,
        description: description || "",
        isActive: isActive === undefined ? true : !!isActive,
        sortOrder: sortOrder ? Number(sortOrder) : 0,
      }).returning();
      return NextResponse.json(newSub, { status: 201 });
    } else {
      // Create category
      const [newCat] = await db.insert(categories).values({
        name,
        slug,
        description: description || "",
        icon: icon || "",
        isActive: isActive === undefined ? true : !!isActive,
        sortOrder: sortOrder ? Number(sortOrder) : 0,
      }).returning();
      return NextResponse.json(newCat, { status: 201 });
    }
  } catch (error) {
    console.error("Create category/subcategory error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, id, name, slug, description, categoryId, icon, isActive, sortOrder } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    if (type === "subcategory") {
      const updateData: Record<string, unknown> = {};
      if (name !== undefined) updateData.name = name;
      if (slug !== undefined) updateData.slug = slug;
      if (description !== undefined) updateData.description = description;
      if (categoryId !== undefined) updateData.categoryId = categoryId;
      if (isActive !== undefined) updateData.isActive = !!isActive;
      if (sortOrder !== undefined) updateData.sortOrder = Number(sortOrder);

      const [updated] = await db
        .update(subcategories)
        .set(updateData)
        .where(eq(subcategories.id, id))
        .returning();
      return NextResponse.json(updated);
    } else {
      const updateData: Record<string, unknown> = {};
      if (name !== undefined) updateData.name = name;
      if (slug !== undefined) updateData.slug = slug;
      if (description !== undefined) updateData.description = description;
      if (icon !== undefined) updateData.icon = icon;
      if (isActive !== undefined) updateData.isActive = !!isActive;
      if (sortOrder !== undefined) updateData.sortOrder = Number(sortOrder);

      const [updated] = await db
        .update(categories)
        .set(updateData)
        .where(eq(categories.id, id))
        .returning();
      return NextResponse.json(updated);
    }
  } catch (error) {
    console.error("Update category/subcategory error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { type, id } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    if (type === "subcategory") {
      await db.delete(subcategories).where(eq(subcategories.id, id));
      return NextResponse.json({ success: true, message: "Subcategory deleted successfully" });
    } else {
      await db.delete(categories).where(eq(categories.id, id));
      return NextResponse.json({ success: true, message: "Category deleted successfully" });
    }
  } catch (error) {
    console.error("Delete category/subcategory error:", error);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
