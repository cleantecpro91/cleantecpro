import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  try {
    const all = await db
      .select({
        id: users.id,
        firstName: users.firstName,
        lastName: users.lastName,
        email: users.email,
        phone: users.phone,
        createdAt: users.createdAt,
        isActive: users.isActive,
      })
      .from(users)
      .orderBy(desc(users.createdAt))
      .limit(200);
    return NextResponse.json(all);
  } catch (error) {
    console.error("Fetch customers error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, isActive } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }
    const [updated] = await db
      .update(users)
      .set({ isActive: isActive === undefined ? true : !!isActive, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    return NextResponse.json(updated);
  } catch (error) {
    console.error("Update customer error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }
    await db.delete(users).where(eq(users.id, id));
    return NextResponse.json({ success: true, message: "Customer deleted successfully" });
  } catch (error) {
    console.error("Delete customer error:", error);
    return NextResponse.json({ error: "Failed to delete customer" }, { status: 500 });
  }
}
