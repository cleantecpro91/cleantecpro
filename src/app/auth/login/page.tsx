"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BRAND } from "@/lib/data";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        router.push("/dashboard");
      } else {
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-5">
            <Image src="/logo.webp" alt="CleanTecPro Logo" width={180} height={55} className="h-12 w-auto object-contain" priority />
          </Link>
          <h1 className="text-2xl font-extrabold text-slate-900 mb-1">Welcome Back</h1>
          <p className="text-sm text-slate-500">Sign in to your {BRAND.shortName} account</p>
        </div>

        <div className="premium-card p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg">{error}</div>
            )}
            <div>
              <label className="form-label">Email Address</label>
              <input type="email" required className="form-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="form-label !mb-0">Password</label>
                <Link href="/auth/forgot-password" className="text-xs text-brand-600 hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <input type="password" required className="form-input" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full !py-3 disabled:opacity-60">
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <div className="mt-4 text-center text-sm">
            <span className="text-slate-500">Don&apos;t have an account?</span>{" "}
            <Link href="/auth/register" className="text-brand-600 font-semibold hover:text-brand-700">
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
