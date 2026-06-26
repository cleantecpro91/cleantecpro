import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const all = await db.select({ id: users.id, firstName: users.firstName, lastName: users.lastName, email: users.email, phone: users.phone, createdAt: users.createdAt, isActive: users.isActive }).from(users).orderBy(desc(users.createdAt)).limit(200);
    return NextResponse.json(all);
  } catch (error) {
    console.error("Fetch customers error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
