import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { orders } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const allOrders = await db.select().from(orders).orderBy(desc(orders.createdAt)).limit(100);
    return NextResponse.json(allOrders);
  } catch (error) {
    console.error("Fetch orders error:", error);
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, orderStatus, paymentStatus, adminNotes, vendorName, vendorPhone } = body;
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

    const updateData: Record<string, unknown> = { updatedAt: new Date() };
    if (orderStatus) updateData.orderStatus = orderStatus;
    if (paymentStatus) updateData.paymentStatus = paymentStatus;
    if (adminNotes !== undefined) updateData.adminNotes = adminNotes;
    if (vendorName !== undefined) updateData.vendorName = vendorName;
    if (vendorPhone !== undefined) updateData.vendorPhone = vendorPhone;
    if (orderStatus === "completed") updateData.completedAt = new Date();
    if (orderStatus === "cancelled") updateData.cancelledAt = new Date();
    if (vendorName) updateData.vendorAssignedAt = new Date();

    const [updated] = await db.update(orders).set(updateData).where(eq(orders.id, id)).returning();
    return NextResponse.json(updated);
  } catch (error) {
    console.error("Update order error:", error);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
