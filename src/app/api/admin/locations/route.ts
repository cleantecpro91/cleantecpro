import { NextResponse } from "next/server";
import { db } from "@/db";
import { emirates, cities } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const ems = await db.select().from(emirates).orderBy(desc(emirates.createdAt)).limit(50);
    const cts = await db.select().from(cities).orderBy(desc(cities.createdAt)).limit(500);
    return NextResponse.json({ emirates: ems, cities: cts });
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}
