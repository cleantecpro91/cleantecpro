import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { services } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const all = await db.select().from(services).orderBy(desc(services.createdAt)).limit(500);
    return NextResponse.json(all);
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...rest } = body;
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
    const d: Record<string, unknown> = { updatedAt: new Date() };
    if (rest.name) d.name = rest.name;
    if (rest.slug) d.slug = rest.slug;
    if (rest.startingPrice !== undefined) d.startingPrice = rest.startingPrice;
    if (rest.shortDescription !== undefined) d.shortDescription = rest.shortDescription;
    if (rest.isActive !== undefined) d.isActive = rest.isActive;
    if (rest.isFeatured !== undefined) d.isFeatured = rest.isFeatured;
    const [u] = await db.update(services).set(d).where(eq(services.id, id)).returning();
    return NextResponse.json(u);
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}
