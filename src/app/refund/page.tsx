import { BRAND } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Refund Policy", description: `Refund policy for ${BRAND.shortName} services.` };

export default function RefundPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-10">
        <div className="container-main"><Breadcrumbs items={[{ label: "Refund Policy" }]} /><h1 className="text-3xl font-extrabold text-white mt-4">Refund Policy</h1></div>
      </section>
      <section className="py-10 md:py-14"><div className="container-main max-w-3xl prose prose-slate">
        <p><em>Last updated: January 2025</em></p>
        <h2>1. Eligibility for Refunds</h2>
        <p>Refunds are available under the following conditions: service was not delivered, service was materially different from what was agreed upon, or a cancellation was made in accordance with our cancellation policy.</p>
        <h2>2. Refund Process</h2>
        <p>To request a refund, contact us at {BRAND.email} with your order number and reason for the refund request. We will review your request within 3 business days.</p>
        <h2>3. Refund Timeline</h2>
        <p>Approved refunds for online payments will be processed within 5-7 business days to the original payment method. Bank transfer refunds may take 7-10 business days.</p>
        <h2>4. Partial Refunds</h2>
        <p>In cases where a service was partially completed or where issues are resolvable, we may offer a partial refund or credit towards future services.</p>
        <h2>5. Non-Refundable Situations</h2>
        <p>Refunds may not be available if: the service was completed satisfactorily and no complaint was raised within 24 hours, the customer provided incorrect information leading to service issues, or the customer was not present at the scheduled time without prior notice.</p>
        <h2>6. Contact Us</h2>
        <p>For refund inquiries, contact {BRAND.email} or call {BRAND.phoneFormatted}.</p>
      </div></section>
    </>
  );
}
