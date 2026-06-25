import { cookies } from "next/headers";
import { db } from "@/db";
import { users, admins } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

const SESSION_COOKIE = "ctp_session";
const ADMIN_SESSION_COOKIE = "ctp_admin_session";

export async function createSession(userId: string, isAdmin = false) {
  const cookieStore = await cookies();
  const cookieName = isAdmin ? ADMIN_SESSION_COOKIE : SESSION_COOKIE;
  cookieStore.set(cookieName, userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
}

export async function getSession(isAdmin = false): Promise<string | null> {
  const cookieStore = await cookies();
  const cookieName = isAdmin ? ADMIN_SESSION_COOKIE : SESSION_COOKIE;
  return cookieStore.get(cookieName)?.value || null;
}

export async function destroySession(isAdmin = false) {
  const cookieStore = await cookies();
  const cookieName = isAdmin ? ADMIN_SESSION_COOKIE : SESSION_COOKIE;
  cookieStore.delete(cookieName);
}

export async function getCurrentUser() {
  const userId = await getSession();
  if (!userId) return null;
  try {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);
    return user || null;
  } catch {
    return null;
  }
}

export async function getCurrentAdmin() {
  const adminId = await getSession(true);
  if (!adminId) return null;
  try {
    const [admin] = await db
      .select()
      .from(admins)
      .where(eq(admins.id, adminId))
      .limit(1);
    return admin || null;
  } catch {
    return null;
  }
}

export function generateOrderNumber(): string {
  const prefix = "CTP";
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}${random}`;
}

export function generateInvoiceNumber(): string {
  const prefix = "INV";
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}${random}`;
}
