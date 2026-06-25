import { BRAND } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cancellation Policy", description: `Cancellation policy for ${BRAND.shortName} services.` };

export default function CancellationPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-10">
        <div className="container-main"><Breadcrumbs items={[{ label: "Cancellation Policy" }]} /><h1 className="text-3xl font-extrabold text-white mt-4">Cancellation Policy</h1></div>
      </section>
      <section className="py-10 md:py-14"><div className="container-main max-w-3xl prose prose-slate">
        <p><em>Last updated: January 2025</em></p>
        <h2>1. Free Cancellation Window</h2>
        <p>You may cancel or reschedule any booking free of charge up to <strong>12 hours</strong> before the scheduled service time. To cancel, contact us via phone at {BRAND.phoneFormatted}, WhatsApp, email at {BRAND.email}, or through your customer dashboard.</p>
        <h2>2. Late Cancellations</h2>
        <p>Cancellations made within 12 hours of the scheduled service time may be subject to a cancellation fee of up to 25% of the service value. This fee covers technician scheduling and preparation costs.</p>
        <h2>3. No-Show Policy</h2>
        <p>If a technician arrives at the scheduled location and the customer is not available and has not communicated any delay or cancellation, the booking may be marked as a no-show. No-shows for prepaid services may result in a charge of up to 50% of the service value.</p>
        <h2>4. Rescheduling</h2>
        <p>You can reschedule a booking at any time before the service begins at no additional charge, subject to technician availability. We recommend rescheduling at least 12 hours in advance for the best availability.</p>
        <h2>5. How to Cancel or Reschedule</h2>
        <ul>
          <li><strong>Phone:</strong> Call {BRAND.phoneFormatted}</li>
          <li><strong>WhatsApp:</strong> Message {BRAND.phoneFormatted}</li>
          <li><strong>Email:</strong> Send your order number and request to {BRAND.email}</li>
          <li><strong>Dashboard:</strong> Log in to your account and manage your bookings</li>
        </ul>
        <h2>6. Refund for Cancelled Bookings</h2>
        <p>For prepaid bookings cancelled within the free cancellation window, a full refund will be issued within 5-7 business days. For late cancellations, the refund amount will be adjusted according to the applicable cancellation fee.</p>
        <h2>7. Service Provider Cancellation</h2>
        <p>In the rare event that {BRAND.shortName} needs to cancel or reschedule a service due to unforeseen circumstances, you will be notified as soon as possible and offered a full refund or rescheduling at your convenience.</p>
        <h2>8. Contact Us</h2>
        <p>For cancellation requests or questions, contact us at {BRAND.email} or call {BRAND.phoneFormatted}.</p>
      </div></section>
    </>
  );
}
