import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { emirates, cities } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const ems = await db.select().from(emirates).orderBy(desc(emirates.createdAt)).limit(50);
    const cts = await db.select().from(cities).orderBy(desc(cities.createdAt)).limit(500);
    return NextResponse.json({ emirates: ems, cities: cts });
  } catch (error) {
    console.error("Fetch locations error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, name, slug, description, emirateId, isPrimary, isActive } = body;

    if (!name || !slug) {
      return NextResponse.json({ error: "Name and slug are required" }, { status: 400 });
    }

    if (type === "city") {
      if (!emirateId) {
        return NextResponse.json({ error: "emirateId is required for city" }, { status: 400 });
      }
      const [newCity] = await db.insert(cities).values({
        emirateId,
        name,
        slug,
        description: description || "",
        isActive: isActive === undefined ? true : !!isActive,
      }).returning();
      return NextResponse.json(newCity, { status: 201 });
    } else {
      // Create emirate
      const [newEmirate] = await db.insert(emirates).values({
        name,
        slug,
        description: description || "",
        isPrimary: isPrimary === undefined ? false : !!isPrimary,
        isActive: isActive === undefined ? true : !!isActive,
      }).returning();
      return NextResponse.json(newEmirate, { status: 201 });
    }
  } catch (error) {
    console.error("Create location error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, id, name, slug, description, emirateId, isPrimary, isActive } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    if (type === "city") {
      const updateData: Record<string, unknown> = {};
      if (name !== undefined) updateData.name = name;
      if (slug !== undefined) updateData.slug = slug;
      if (description !== undefined) updateData.description = description;
      if (emirateId !== undefined) updateData.emirateId = emirateId;
      if (isActive !== undefined) updateData.isActive = !!isActive;

      const [updated] = await db
        .update(cities)
        .set(updateData)
        .where(eq(cities.id, id))
        .returning();
      return NextResponse.json(updated);
    } else {
      const updateData: Record<string, unknown> = {};
      if (name !== undefined) updateData.name = name;
      if (slug !== undefined) updateData.slug = slug;
      if (description !== undefined) updateData.description = description;
      if (isPrimary !== undefined) updateData.isPrimary = !!isPrimary;
      if (isActive !== undefined) updateData.isActive = !!isActive;

      const [updated] = await db
        .update(emirates)
        .set(updateData)
        .where(eq(emirates.id, id))
        .returning();
      return NextResponse.json(updated);
    }
  } catch (error) {
    console.error("Update location error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { type, id } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    if (type === "city") {
      await db.delete(cities).where(eq(cities.id, id));
      return NextResponse.json({ success: true, message: "City deleted successfully" });
    } else {
      await db.delete(emirates).where(eq(emirates.id, id));
      return NextResponse.json({ success: true, message: "Emirate deleted successfully" });
    }
  } catch (error) {
    console.error("Delete location error:", error);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
