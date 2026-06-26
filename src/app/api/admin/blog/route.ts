import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { blogPosts } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const all = await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt)).limit(100);
    return NextResponse.json(all);
  } catch (error) {
    console.error("Blog fetch error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, excerpt, content, category, isPublished } = body;
    if (!title || !slug || !content) return NextResponse.json({ error: "Title, slug, content required" }, { status: 400 });
    const [post] = await db.insert(blogPosts).values({ title, slug, excerpt: excerpt || "", content, category: category || "General", isPublished: isPublished ?? false, publishedAt: isPublished ? new Date() : null, authorName: "CleanTecPro" }).returning();
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Blog create error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, slug, excerpt, content, category, isPublished } = body;
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
    const updateData: Record<string, unknown> = { updatedAt: new Date() };
    if (title) updateData.title = title;
    if (slug) updateData.slug = slug;
    if (excerpt !== undefined) updateData.excerpt = excerpt;
    if (content) updateData.content = content;
    if (category) updateData.category = category;
    if (isPublished !== undefined) { updateData.isPublished = isPublished; if (isPublished) updateData.publishedAt = new Date(); }
    const [updated] = await db.update(blogPosts).set(updateData).where(eq(blogPosts.id, id)).returning();
    return NextResponse.json(updated);
  } catch (error) {
    console.error("Blog update error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Blog delete error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
