"use client";
import { useState } from "react";
import Link from "next/link";
import { BRAND, SERVICE_CATEGORIES, UAE_EMIRATES } from "@/lib/data";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", emirate: "",
    city: "", address: "", date: "", time: "", paymentMethod: "online",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="py-20">
        <div className="container-main max-w-lg text-center">
          <div className="text-5xl mb-6">✅</div>
          <h1 className="text-2xl font-extrabold text-slate-900 mb-3">
            Booking Submitted Successfully
          </h1>
          <p className="text-slate-500 mb-6">
            Thank you for booking with {BRAND.shortName}. Our team will contact you shortly to confirm your appointment. You can also reach us on WhatsApp for immediate assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-10 md:py-14">
        <div className="container-main">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Book a Service
          </h1>
          <p className="text-white/90">
            Select your service, choose a date, and we&apos;ll handle the rest.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container-main max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Full Name *</label>
                <input type="text" required className="form-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
              </div>
              <div>
                <label className="form-label">Phone Number *</label>
                <input type="tel" required className="form-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="054 441 0488" />
              </div>
            </div>
            <div>
              <label className="form-label">Email Address *</label>
              <input type="email" required className="form-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
            </div>
            <div>
              <label className="form-label">Service *</label>
              <select required className="form-select" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                <option value="">Select a service</option>
                {SERVICE_CATEGORIES.map((cat) => (
                  <optgroup key={cat.slug} label={cat.name}>
                    {cat.subcategories.map((sub) =>
                      sub.services.map((svc) => (
                        <option key={svc.slug} value={svc.slug}>
                          {svc.name}
                        </option>
                      ))
                    )}
                  </optgroup>
                ))}
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Emirate *</label>
                <select required className="form-select" value={form.emirate} onChange={(e) => setForm({ ...form, emirate: e.target.value })}>
                  <option value="">Select emirate</option>
                  {UAE_EMIRATES.map((e) => (
                    <option key={e.slug} value={e.slug}>{e.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="form-label">Area / City</label>
                <input type="text" className="form-input" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="e.g. Business Bay" />
              </div>
            </div>
            <div>
              <label className="form-label">Address</label>
              <input type="text" className="form-input" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Building name, apartment number, etc." />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Preferred Date *</label>
                <input type="date" required className="form-input" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              </div>
              <div>
                <label className="form-label">Preferred Time</label>
                <select className="form-select" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}>
                  <option value="">Select time</option>
                  <option value="morning">Morning (8 AM – 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM – 4 PM)</option>
                  <option value="evening">Evening (4 PM – 8 PM)</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
            <div>
              <label className="form-label">Payment Method</label>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { value: "online", label: "💳 Online Payment" },
                  { value: "bank_transfer", label: "🏦 Bank Transfer" },
                  { value: "cash", label: "💵 Cash on Service" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-2 p-3 border-2 rounded-xl cursor-pointer transition-all ${
                      form.paymentMethod === opt.value
                        ? "border-brand-500 bg-brand-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={opt.value}
                      checked={form.paymentMethod === opt.value}
                      onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="form-label">Additional Notes</label>
              <textarea className="form-input" rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Any special requirements or instructions..." />
            </div>

            {status === "error" && (
              <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg">
                Something went wrong. Please try again or contact us on WhatsApp.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary w-full !py-3.5 text-base disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting..." : "Confirm Booking"}
            </button>

            <p className="text-xs text-slate-500 text-center">
              By booking, you agree to our{" "}
              <Link href="/terms" className="text-brand-600 underline">Terms & Conditions</Link>.
              We&apos;ll confirm your booking via WhatsApp or phone call.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
