import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const all = await db.select().from(testimonials).orderBy(desc(testimonials.createdAt)).limit(100);
    return NextResponse.json(all);
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}

export async function POST(request: NextRequest) {
  try {
    const { customerName, customerLocation, rating, content, serviceName } = await request.json();
    if (!customerName || !content || !rating) return NextResponse.json({ error: "Name, content, rating required" }, { status: 400 });
    const [t] = await db.insert(testimonials).values({ customerName, customerLocation, rating, content, serviceName, isApproved: true, isFeatured: false }).returning();
    return NextResponse.json(t, { status: 201 });
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    await db.delete(testimonials).where(eq(testimonials.id, id));
    return NextResponse.json({ success: true });
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}
