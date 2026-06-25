import { BRAND } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions", description: `Terms and conditions for using ${BRAND.shortName} services and website.` };

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-10">
        <div className="container-main"><Breadcrumbs items={[{ label: "Terms & Conditions" }]} /><h1 className="text-3xl font-extrabold text-white mt-4">Terms & Conditions</h1></div>
      </section>
      <section className="py-10 md:py-14"><div className="container-main max-w-3xl prose prose-slate">
        <p><em>Last updated: January 2025</em></p>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the {BRAND.shortName} website ({BRAND.website}) and booking our services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
        <h2>2. Services</h2>
        <p>{BRAND.shortName} provides a marketplace platform connecting customers with professional service providers in the UAE. We offer cleaning, AC, plumbing, electrical, maintenance, renovation, pest control, and other technical services.</p>
        <h2>3. Booking and Payment</h2>
        <p>All bookings are subject to availability and confirmation. Prices are quoted in AED and include applicable taxes unless stated otherwise. Payment methods accepted include online payment, bank transfer, and cash on service.</p>
        <h2>4. Cancellation and Rescheduling</h2>
        <p>Customers may cancel or reschedule a booking free of charge up to 12 hours before the scheduled service time. Late cancellations may incur a fee. See our Cancellation Policy for details.</p>
        <h2>5. Service Guarantee</h2>
        <p>We strive to deliver high-quality services. If you are not satisfied with a completed service, contact us within 24 hours and we will work to resolve the issue.</p>
        <h2>6. Limitation of Liability</h2>
        <p>{BRAND.shortName} acts as an intermediary platform. While we carefully vet all service providers, our liability is limited to the amount paid for the specific service in question.</p>
        <h2>7. User Conduct</h2>
        <p>Users agree to provide accurate information, treat service professionals with respect, and not misuse the platform. We reserve the right to refuse service to anyone who violates these terms.</p>
        <h2>8. Contact</h2>
        <p>For questions about these terms, contact us at {BRAND.email}.</p>
      </div></section>
    </>
  );
}
