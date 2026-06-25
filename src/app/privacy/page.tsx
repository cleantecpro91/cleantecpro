import { BRAND } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: `Privacy policy for ${BRAND.shortName} services and website.` };

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-10">
        <div className="container-main"><Breadcrumbs items={[{ label: "Privacy Policy" }]} /><h1 className="text-3xl font-extrabold text-white mt-4">Privacy Policy</h1></div>
      </section>
      <section className="py-10 md:py-14"><div className="container-main max-w-3xl prose prose-slate">
        <p><em>Last updated: January 2025</em></p>
        <h2>1. Introduction</h2>
        <p>{BRAND.fullName} (&quot;{BRAND.shortName}&quot;, &quot;we&quot;, &quot;us&quot;) operates the website {BRAND.website} and provides technical, cleaning, and maintenance services across the United Arab Emirates. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
        <h2>2. Information We Collect</h2>
        <p>We collect information you provide directly, including your name, email address, phone number, address, payment information, and service preferences when you register, book a service, or contact us. We also collect usage data including browser type, IP address, pages visited, and interaction data.</p>
        <h2>3. How We Use Your Information</h2>
        <p>We use your information to provide and manage our services, process bookings and payments, communicate about your orders and account, improve our platform, send service-related notifications, and comply with legal obligations.</p>
        <h2>4. Information Sharing</h2>
        <p>We do not sell your personal information. We may share information with service technicians assigned to your job (limited to job-relevant details), payment processors for transaction processing, and legal authorities when required by law.</p>
        <h2>5. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal data, including encryption of sensitive data in transit and at rest, access controls, and regular security assessments.</p>
        <h2>6. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us at {BRAND.email}.</p>
        <h2>7. Cookies</h2>
        <p>Our website uses essential cookies to provide core functionality. We may also use analytics cookies to understand how visitors interact with our website. You can manage cookie preferences through your browser settings.</p>
        <h2>8. Contact Us</h2>
        <p>For questions about this Privacy Policy, contact us at {BRAND.email} or visit us at {BRAND.address}.</p>
      </div></section>
    </>
  );
}
