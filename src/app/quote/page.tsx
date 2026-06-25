"use client";
import { useState } from "react";
import Link from "next/link";
import { BRAND, SERVICE_CATEGORIES, UAE_EMIRATES } from "@/lib/data";

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", emirate: "",
    city: "", area: "", propertyType: "apartment", description: "",
    preferredDate: "", budget: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="py-20">
        <div className="container-main max-w-lg text-center">
          <div className="text-5xl mb-6">📋</div>
          <h1 className="text-2xl font-extrabold text-slate-900 mb-3">Quote Request Submitted</h1>
          <p className="text-slate-500 mb-6">
            Thank you! Our team will review your request and get back to you with a detailed quote within 24 hours. For urgent inquiries, reach us on WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">Back to Home</Link>
            <a href={`https://wa.me/${BRAND.whatsapp}`} className="btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-10 md:py-14">
        <div className="container-main">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Request a Free Quote</h1>
          <p className="text-white/70">Tell us what you need and we&apos;ll provide a detailed, no-obligation quote.</p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container-main max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Full Name *</label>
                <input type="text" required className="form-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="form-label">Phone *</label>
                <input type="tel" required className="form-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
            </div>
            <div>
              <label className="form-label">Email *</label>
              <input type="email" required className="form-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label className="form-label">Service Required *</label>
              <select required className="form-select" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                <option value="">Select a service</option>
                {SERVICE_CATEGORIES.map((cat) => (
                  <optgroup key={cat.slug} label={cat.name}>
                    {cat.subcategories.flatMap((sub) =>
                      sub.services.map((svc) => (
                        <option key={svc.slug} value={svc.slug}>{svc.name}</option>
                      ))
                    )}
                  </optgroup>
                ))}
                <option value="custom">Custom / Not Listed</option>
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Emirate *</label>
                <select required className="form-select" value={form.emirate} onChange={(e) => setForm({ ...form, emirate: e.target.value })}>
                  <option value="">Select emirate</option>
                  {UAE_EMIRATES.map((e) => <option key={e.slug} value={e.slug}>{e.name}</option>)}
                </select>
              </div>
              <div>
                <label className="form-label">Area / City</label>
                <input type="text" className="form-input" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Property Type</label>
                <select className="form-select" value={form.propertyType} onChange={(e) => setForm({ ...form, propertyType: e.target.value })}>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="office">Office</option>
                  <option value="commercial">Commercial</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="form-label">Budget Range</label>
                <select className="form-select" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                  <option value="">Select budget</option>
                  <option value="under-500">Under AED 500</option>
                  <option value="500-1000">AED 500 – 1,000</option>
                  <option value="1000-3000">AED 1,000 – 3,000</option>
                  <option value="3000-5000">AED 3,000 – 5,000</option>
                  <option value="5000-plus">AED 5,000+</option>
                  <option value="not-sure">Not sure</option>
                </select>
              </div>
            </div>
            <div>
              <label className="form-label">Describe Your Requirements *</label>
              <textarea required className="form-input" rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Please describe what you need in detail. Include property size, specific requirements, any issues, etc." />
            </div>
            <div>
              <label className="form-label">Preferred Date</label>
              <input type="date" className="form-input" value={form.preferredDate} onChange={(e) => setForm({ ...form, preferredDate: e.target.value })} />
            </div>

            {status === "error" && (
              <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <button type="submit" disabled={status === "submitting"} className="btn-primary w-full !py-3.5 text-base disabled:opacity-60">
              {status === "submitting" ? "Submitting..." : "Submit Quote Request"}
            </button>

            <p className="text-xs text-slate-400 text-center">
              No obligation. We&apos;ll respond within 24 hours. For urgent needs, call or WhatsApp us.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
