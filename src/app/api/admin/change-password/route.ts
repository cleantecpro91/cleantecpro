import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { admins } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const { currentEmail, currentPassword, newEmail, newPassword } = await request.json();

    if (!currentEmail || !currentPassword) {
      return NextResponse.json({ error: "Current email and password required" }, { status: 400 });
    }

    const [admin] = await db.select().from(admins).where(eq(admins.email, currentEmail)).limit(1);
    if (!admin) return NextResponse.json({ error: "Admin not found" }, { status: 404 });

    const valid = await bcrypt.compare(currentPassword, admin.passwordHash);
    if (!valid) return NextResponse.json({ error: "Current password is wrong" }, { status: 401 });

    const updateData: Record<string, unknown> = {};
    if (newEmail && newEmail !== currentEmail) updateData.email = newEmail;
    if (newPassword && newPassword.length >= 6) updateData.passwordHash = await bcrypt.hash(newPassword, 12);

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: "No changes provided" }, { status: 400 });
    }

    await db.update(admins).set(updateData).where(eq(admins.id, admin.id));

    return NextResponse.json({ success: true, message: "Admin credentials updated. Use new credentials next login." });
  } catch (error) {
    console.error("Change password error:", error);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
