import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { admins } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("key");

  // Simple security — only works with correct key
  if (secret !== "setup2025cleantecpro") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Delete existing admin if any
    await db.delete(admins).where(eq(admins.email, "admin@cleantecpro.com"));

    // Create fresh admin with password hashed on THIS server
    const passwordHash = await bcrypt.hash("admin123", 12);

    const [admin] = await db
      .insert(admins)
      .values({
        name: "Admin",
        email: "admin@cleantecpro.com",
        passwordHash: passwordHash,
        role: "super_admin",
        isActive: true,
      })
      .returning();

    // Verify the hash works
    const testVerify = await bcrypt.compare("admin123", admin.passwordHash);

    return NextResponse.json({
      success: true,
      message: "Admin created successfully",
      email: admin.email,
      hashWorks: testVerify,
      id: admin.id,
    });
  } catch (error) {
    console.error("Admin setup error:", error);
    return NextResponse.json(
      { error: "Failed to create admin", details: String(error) },
      { status: 500 }
    );
  }
}
