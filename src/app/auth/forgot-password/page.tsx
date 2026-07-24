"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1); // 1: Email, 2: Code & New Password, 3: Success
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [hint, setHint] = useState("");

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "check-email", email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStep(2);
        setMessage("A password reset verification code has been sent to your email.");
        setHint(`Demo Mode: Enter "${data.code}" to proceed with resetting.`);
      } else {
        setError(data.error || "Email address not found.");
      }
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset-password", email, code, newPassword }),
      });
      const data = await res.json();
      if (res.ok) {
        setStep(3);
        setMessage(data.message || "Your password was successfully reset.");
      } else {
        setError(data.error || "Invalid code or failed to reset password.");
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
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-extrabold text-brand-900">
              Clean<span className="text-brand-600">Tec</span>Pro
            </span>
          </Link>
          <h1 className="text-2xl font-extrabold text-slate-900 mb-1">Reset Password</h1>
          <p className="text-sm text-slate-500">Restore access to your CleanTecPro account</p>
        </div>

        <div className="premium-card p-6">
          {step === 1 && (
            <form onSubmit={handleSendCode} className="space-y-4">
              <p className="text-sm text-slate-600">
                Enter your email address and we will generate a secure code for you to reset your password.
              </p>
              {error && (
                <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg">{error}</div>
              )}
              <div>
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full !py-3 disabled:opacity-60"
              >
                {loading ? "Verifying..." : "Send Reset Code"}
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleResetPassword} className="space-y-4">
              {message && (
                <div className="bg-brand-50 text-brand-700 text-sm p-3 rounded-lg font-medium">
                  {message}
                </div>
              )}
              {hint && (
                <div className="bg-amber-50 text-amber-800 text-xs p-3 rounded-lg border border-amber-200">
                  💡 <strong>{hint}</strong>
                </div>
              )}
              {error && (
                <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg">{error}</div>
              )}
              <div>
                <label className="form-label">Verification Code</label>
                <input
                  type="text"
                  required
                  placeholder="Enter 6-digit code"
                  className="form-input text-center font-bold tracking-widest text-lg"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <div>
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  required
                  placeholder="At least 8 characters"
                  className="form-input"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full !py-3 disabled:opacity-60"
              >
                {loading ? "Resetting..." : "Update Password"}
              </button>
            </form>
          )}

          {step === 3 && (
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-900">Password Updated!</h3>
              <p className="text-sm text-slate-600">
                Your password has been successfully reset. You can now log in with your new credentials.
              </p>
              <Link href="/auth/login" className="btn-primary inline-block w-full !py-3">
                Go to Sign In
              </Link>
            </div>
          )}

          {step !== 3 && (
            <div className="mt-4 text-center text-sm border-t border-slate-100 pt-4">
              <Link href="/auth/login" className="text-brand-600 font-semibold hover:text-brand-700">
                Back to Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
