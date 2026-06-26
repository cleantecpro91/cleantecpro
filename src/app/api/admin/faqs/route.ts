import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { faqs } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const all = await db.select().from(faqs).orderBy(desc(faqs.createdAt)).limit(100);
    return NextResponse.json(all);
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}

export async function POST(request: NextRequest) {
  try {
    const { question, answer, category } = await request.json();
    if (!question || !answer) return NextResponse.json({ error: "Question and answer required" }, { status: 400 });
    const [faq] = await db.insert(faqs).values({ question, answer, category: category || "general" }).returning();
    return NextResponse.json(faq, { status: 201 });
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, question, answer, category, isActive } = await request.json();
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
    const d: Record<string, unknown> = {};
    if (question) d.question = question; if (answer) d.answer = answer; if (category) d.category = category; if (isActive !== undefined) d.isActive = isActive;
    const [u] = await db.update(faqs).set(d).where(eq(faqs.id, id)).returning();
    return NextResponse.json(u);
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    await db.delete(faqs).where(eq(faqs.id, id));
    return NextResponse.json({ success: true });
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}
