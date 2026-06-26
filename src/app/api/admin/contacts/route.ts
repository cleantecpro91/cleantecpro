import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const all = await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt)).limit(100);
    return NextResponse.json(all);
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}
