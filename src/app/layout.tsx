import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { BRAND } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${BRAND.shortName} — Professional Technical & Cleaning Services in UAE`,
    template: `%s | ${BRAND.shortName}`,
  },
  description:
    "Trusted UAE marketplace for cleaning, AC, plumbing, electrical, maintenance, renovation, and more. Book online or request a quote. Serving Dubai, Sharjah, Abu Dhabi & all emirates.",
  keywords: [
    "cleaning services UAE",
    "AC repair Dubai",
    "plumbing Sharjah",
    "maintenance services Abu Dhabi",
    "deep cleaning UAE",
    "technical services",
  ],
  metadataBase: new URL(BRAND.website),
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: BRAND.fullName,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: BRAND.fullName,
              alternateName: BRAND.shortName,
              url: BRAND.website,
              telephone: BRAND.phoneFormatted,
              email: BRAND.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Cyan Centre 202, Business Bay",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                addressCountry: "AE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.1864,
                longitude: 55.2649,
              },
              areaServed: [
                { "@type": "City", name: "Dubai" },
                { "@type": "City", name: "Sharjah" },
                { "@type": "City", name: "Abu Dhabi" },
                { "@type": "Country", name: "United Arab Emirates" },
              ],
              priceRange: "AED",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday", "Tuesday", "Wednesday", "Thursday",
                  "Friday", "Saturday", "Sunday",
                ],
                opens: "08:00",
                closes: "22:00",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="bg-[#fcfcfd] text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
