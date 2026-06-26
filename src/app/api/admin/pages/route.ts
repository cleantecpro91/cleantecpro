import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { pages } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const all = await db.select().from(pages).orderBy(desc(pages.createdAt)).limit(100);
    return NextResponse.json(all);
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}

export async function POST(request: NextRequest) {
  try {
    const { title, slug, content, metaTitle, metaDescription, isPublished } = await request.json();
    if (!title || !slug) return NextResponse.json({ error: "Title and slug required" }, { status: 400 });
    const [p] = await db.insert(pages).values({ title, slug, content: content || "", metaTitle: metaTitle || null, metaDescription: metaDescription || null, isPublished: isPublished ?? true }).returning();
    return NextResponse.json(p, { status: 201 });
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, title, slug, content, metaTitle, metaDescription, isPublished } = await request.json();
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
    const d: Record<string, unknown> = { updatedAt: new Date() };
    if (title) d.title = title; if (slug) d.slug = slug; if (content !== undefined) d.content = content;
    if (metaTitle !== undefined) d.metaTitle = metaTitle; if (metaDescription !== undefined) d.metaDescription = metaDescription;
    if (isPublished !== undefined) d.isPublished = isPublished;
    const [u] = await db.update(pages).set(d).where(eq(pages.id, id)).returning();
    return NextResponse.json(u);
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    await db.delete(pages).where(eq(pages.id, id));
    return NextResponse.json({ success: true });
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}
