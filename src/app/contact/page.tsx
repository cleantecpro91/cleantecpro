"use client";
import { useState } from "react";
import { BRAND } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-12 md:py-16">
        <div className="container-main">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Contact Us</h1>
          <p className="text-white/90">Get in touch with our team. We&apos;re here to help.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-5">
              <div className="premium-card p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Get in Touch</h2>
                <div className="space-y-4">
                  <a href={`tel:${BRAND.phone}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-brand-600">
                    <span className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-lg">📞</span>
                    <div>
                      <p className="font-semibold text-slate-900">Phone</p>
                      {BRAND.phoneFormatted}
                    </div>
                  </a>
                  <a href={`https://wa.me/${BRAND.whatsapp}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-brand-600" target="_blank" rel="noopener noreferrer">
                    <span className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-lg">💬</span>
                    <div>
                      <p className="font-semibold text-slate-900">WhatsApp</p>
                      {BRAND.phoneFormatted}
                    </div>
                  </a>
                  <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-brand-600">
                    <span className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-lg">✉️</span>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      {BRAND.email}
                    </div>
                  </a>
                  <div className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-lg shrink-0">📍</span>
                    <div>
                      <p className="font-semibold text-slate-900">Office</p>
                      {BRAND.address}
                    </div>
                  </div>
                </div>
              </div>
              <div className="premium-card p-6">
                <h3 className="text-sm font-bold text-slate-900 mb-2">Business Hours</h3>
                <div className="text-sm text-slate-600 space-y-1">
                  <p>Saturday – Thursday: 8:00 AM – 10:00 PM</p>
                  <p>Friday: 2:00 PM – 10:00 PM</p>
                  <p className="text-xs text-slate-500 mt-2">WhatsApp and phone available during business hours. Online bookings available 24/7.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="premium-card p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Send Us a Message</h2>
                {status === "success" ? (
                  <div className="text-center py-8">
                    <span className="text-4xl mb-4 block">✅</span>
                    <p className="text-lg font-bold text-slate-900 mb-2">Message Sent!</p>
                    <p className="text-sm text-slate-500">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Name *</label>
                        <input type="text" required className="form-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div>
                        <label className="form-label">Email *</label>
                        <input type="email" required className="form-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Phone</label>
                        <input type="tel" className="form-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                      </div>
                      <div>
                        <label className="form-label">Subject</label>
                        <input type="text" className="form-input" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Message *</label>
                      <textarea required rows={4} className="form-input" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    </div>
                    {status === "error" && <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg">Failed to send. Please try again.</div>}
                    <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-60">
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
