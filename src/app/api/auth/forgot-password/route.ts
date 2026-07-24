import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { hashPassword } from "@/lib/auth";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const { action, email, code, newPassword } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Step 1: Check if email exists
    if (action === "check-email") {
      const existing = await db.select().from(users).where(eq(users.email, email)).limit(1);
      if (existing.length === 0) {
        return NextResponse.json({ error: "No account found with this email address." }, { status: 404 });
      }
      
      // Simulate sending a reset code (123456)
      return NextResponse.json({
        success: true,
        message: "Reset code generated.",
        code: "123456", // Mock code for easy local demo/testing
      });
    }

    // Step 2: Reset password
    if (action === "reset-password") {
      if (!code || !newPassword) {
        return NextResponse.json({ error: "Code and new password are required" }, { status: 400 });
      }

      if (code !== "123456") {
        return NextResponse.json({ error: "Invalid verification code. Use 123456 for testing." }, { status: 400 });
      }

      if (newPassword.length < 8) {
        return NextResponse.json({ error: "Password must be at least 8 characters long." }, { status: 400 });
      }

      const existing = await db.select().from(users).where(eq(users.email, email)).limit(1);
      if (existing.length === 0) {
        return NextResponse.json({ error: "No account found with this email." }, { status: 404 });
      }

      const passwordHash = await hashPassword(newPassword);

      await db
        .update(users)
        .set({ passwordHash, updatedAt: new Date() })
        .where(eq(users.email, email));

      return NextResponse.json({
        success: true,
        message: "Your password has been successfully reset! You can now log in.",
      });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Forgot password API error:", error);
    return NextResponse.json({ error: "Failed to process request." }, { status: 500 });
  }
}
