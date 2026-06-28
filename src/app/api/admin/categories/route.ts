import { NextResponse } from "next/server";
import { db } from "@/db";
import { categories, subcategories } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const cats = await db.select().from(categories).orderBy(desc(categories.createdAt)).limit(100);
    const subs = await db.select().from(subcategories).orderBy(desc(subcategories.createdAt)).limit(500);
    return NextResponse.json({ categories: cats, subcategories: subs });
  } catch (error) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}
