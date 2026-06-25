import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { quotes } from "@/db/schema";

function generateQuoteNumber(): string {
  const prefix = "QT";
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}${random}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, emirate, city, area, propertyType, description, preferredDate, budget } = body;

    if (!name || !email || !phone || !service || !emirate || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const [quote] = await db
      .insert(quotes)
      .values({
        quoteNumber: generateQuoteNumber(),
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        serviceName: service,
        emirate,
        city: city || null,
        area: area || null,
        propertyType: propertyType || null,
        description,
        preferredDate: preferredDate || null,
        budget: budget || null,
        status: "pending",
      })
      .returning();

    return NextResponse.json({ success: true, quoteNumber: quote.quoteNumber }, { status: 201 });
  } catch (error) {
    console.error("Quote creation error:", error);
    return NextResponse.json({ error: "Failed to submit quote" }, { status: 500 });
  }
}
