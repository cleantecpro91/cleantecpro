import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { orders } from "@/db/schema";
import { generateOrderNumber } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, emirate, city, address, date, time, paymentMethod, notes } = body;

    if (!name || !email || !phone || !service || !emirate || !date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const orderNumber = generateOrderNumber();

    const [order] = await db
      .insert(orders)
      .values({
        orderNumber,
        userId: "00000000-0000-0000-0000-000000000000",
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        serviceName: service,
        serviceSlug: service,
        paymentMethod: paymentMethod || "online",
        paymentStatus: "pending",
        orderStatus: "pending",
        scheduledDate: new Date(date),
        scheduledTime: time || null,
        notes: notes || null,
        addressSnapshot: { address, city, emirate },
      })
      .returning();

    return NextResponse.json({ success: true, orderNumber: order.orderNumber }, { status: 201 });
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Orders API" });
}
