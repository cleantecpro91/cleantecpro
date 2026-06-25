import Link from "next/link";
import { BRAND } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl font-extrabold text-brand-200 mb-4">404</div>
        <h1 className="text-2xl font-extrabold text-slate-900 mb-3">Page Not Found</h1>
        <p className="text-slate-500 mb-8">
          The page you are looking for does not exist or has been moved. Please check the URL or navigate using the links below.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Link href="/" className="btn-primary">Go to Homepage</Link>
          <Link href="/services" className="btn-outline">Browse Services</Link>
        </div>
        <div className="text-sm text-slate-400">
          <p>Need help? Contact us:</p>
          <p className="mt-1">
            <a href={`tel:${BRAND.phone}`} className="text-brand-600 hover:underline">{BRAND.phoneFormatted}</a>
            {" · "}
            <a href={`https://wa.me/${BRAND.whatsapp}`} className="text-brand-600 hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </p>
        </div>
      </div>
    </section>
  );
}
