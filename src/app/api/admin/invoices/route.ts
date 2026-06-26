import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { invoices } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const all = await db.select().from(invoices).orderBy(desc(invoices.createdAt)).limit(100);
    return NextResponse.json(all);
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}

export async function POST(request: NextRequest) {
  try {
    const { invoiceNumber, orderId, userId, amount, tax, total, status, notes } = await request.json();
    if (!invoiceNumber || !orderId || !userId || !total) return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    const [inv] = await db.insert(invoices).values({ invoiceNumber, orderId, userId, amount: amount || total, tax: tax || "0", total, status: status || "pending", notes: notes || null }).returning();
    return NextResponse.json(inv, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, status, notes } = await request.json();
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
    const d: Record<string, unknown> = {};
    if (status) { d.status = status; if (status === "paid") d.paidAt = new Date(); }
    if (notes !== undefined) d.notes = notes;
    const [u] = await db.update(invoices).set(d).where(eq(invoices.id, id)).returning();
    return NextResponse.json(u);
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}
