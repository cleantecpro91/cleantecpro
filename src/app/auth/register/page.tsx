"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BRAND } from "@/lib/data";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) router.push("/dashboard");
      else setError(data.error || "Registration failed");
    } catch {
      setError("Connection error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-extrabold text-brand-900">Clean<span className="text-brand-600">Tec</span>Pro</span>
          </Link>
          <h1 className="text-2xl font-extrabold text-slate-900 mb-1">Create Your Account</h1>
          <p className="text-sm text-slate-500">Join {BRAND.shortName} for easy service booking</p>
        </div>
        <div className="premium-card p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg">{error}</div>}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="form-label">First Name *</label>
                <input type="text" required className="form-input" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
              </div>
              <div>
                <label className="form-label">Last Name *</label>
                <input type="text" required className="form-input" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
              </div>
            </div>
            <div>
              <label className="form-label">Email *</label>
              <input type="email" required className="form-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label className="form-label">Phone *</label>
              <input type="tel" required className="form-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <label className="form-label">Password *</label>
              <input type="password" required minLength={8} className="form-input" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </div>
            <div>
              <label className="form-label">Confirm Password *</label>
              <input type="password" required className="form-input" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full !py-3 disabled:opacity-60">
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
          <div className="mt-4 text-center text-sm">
            <span className="text-slate-500">Already have an account?</span>{" "}
            <Link href="/auth/login" className="text-brand-600 font-semibold hover:text-brand-700">Sign In</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
