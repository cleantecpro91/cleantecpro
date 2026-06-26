import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { quotes } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const all = await db.select().from(quotes).orderBy(desc(quotes.createdAt)).limit(100);
    return NextResponse.json(all);
  } catch (error) {
    console.error("Fetch quotes error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status, adminResponse, quotedAmount, adminNotes } = body;
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

    const updateData: Record<string, unknown> = { updatedAt: new Date() };
    if (status) updateData.status = status;
    if (adminResponse !== undefined) updateData.adminResponse = adminResponse;
    if (quotedAmount !== undefined) updateData.quotedAmount = quotedAmount;
    if (adminNotes !== undefined) updateData.adminNotes = adminNotes;

    const [updated] = await db.update(quotes).set(updateData).where(eq(quotes.id, id)).returning();
    return NextResponse.json(updated);
  } catch (error) {
    console.error("Update quote error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
