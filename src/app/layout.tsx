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
    "Trusted UAE marketplace for cleaning, AC repair, plumbing, electrical, handyman, renovation, pest control & maintenance services. Book online or request a quote. Serving Dubai, Sharjah, Abu Dhabi & all 7 emirates.",
  keywords: [
    "cleaning services UAE",
    "AC repair Dubai",
    "AC cleaning Sharjah",
    "plumbing services Sharjah",
    "deep cleaning Dubai",
    "maintenance services Abu Dhabi",
    "handyman Dubai",
    "pest control UAE",
    "move in move out cleaning",
    "annual maintenance contract UAE",
    "villa cleaning Dubai",
    "office cleaning Sharjah",
    "electrical services UAE",
    "home maintenance Dubai",
    "sofa cleaning",
    "carpet cleaning UAE",
    "water tank cleaning",
    "property snagging Dubai",
    "renovation services UAE",
    "technical services Dubai",
  ],
  metadataBase: new URL(BRAND.website),
  icons: {
    icon: [
      { url: "/favicon.webp", type: "image/webp" },
    ],
    apple: [
      { url: "/favicon.webp", type: "image/webp" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: BRAND.website,
    siteName: BRAND.fullName,
    title: "Cleaning, AC, Plumbing & Maintenance Services in UAE | CleanTecPro",
    description:
      "Book cleaning, AC repair, plumbing, electrical, and handyman services across Dubai, Sharjah, Abu Dhabi & all 7 UAE emirates. Same-day slots from AED 59.",
    images: [
      {
        url: `${BRAND.website}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "CleanTecPro — Cleaning, AC, Plumbing & Maintenance Services in UAE",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleaning, AC, Plumbing & Maintenance Services in UAE | CleanTecPro",
    description:
      "Book cleaning, AC repair, plumbing, electrical & maintenance services across Dubai, Sharjah & all UAE emirates. Same-day slots from AED 59.",
    images: [`${BRAND.website}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BRAND.website,
  },
  verification: {
    google: "Z5bp42bwL-QSrPacTiEhWxo133e4vZblKXcCPwdmq3E",
    other: {
      "msvalidate.01": "",
    },
  },
  category: "Home Services",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/favicon.webp" />
        <meta name="theme-color" content="#256ee9" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.1864;55.2649" />
        <meta name="ICBM" content="25.1864, 55.2649" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${BRAND.website}/#organization`,
              name: BRAND.fullName,
              alternateName: BRAND.shortName,
              url: BRAND.website,
              logo: `${BRAND.website}/favicon.webp`,
              image: `${BRAND.website}/favicon.webp`,
              telephone: BRAND.phoneFormatted,
              email: BRAND.email,
              description:
                "Professional cleaning, AC, plumbing, electrical, renovation, pest control and maintenance services across all UAE emirates. Vetted professionals, transparent pricing.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Cyan Centre 202, Business Bay",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                postalCode: "",
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
                { "@type": "City", name: "Ajman" },
                { "@type": "City", name: "Ras Al Khaimah" },
                { "@type": "City", name: "Fujairah" },
                { "@type": "City", name: "Umm Al Quwain" },
                { "@type": "City", name: "Al Ain" },
                { "@type": "Country", name: "United Arab Emirates" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Professional Services",
                itemListElement: [
                  { "@type": "OfferCatalog", name: "Cleaning Services" },
                  { "@type": "OfferCatalog", name: "AC & HVAC Services" },
                  { "@type": "OfferCatalog", name: "Plumbing Services" },
                  { "@type": "OfferCatalog", name: "Electrical Services" },
                  { "@type": "OfferCatalog", name: "Handyman Services" },
                  { "@type": "OfferCatalog", name: "Pest Control" },
                  { "@type": "OfferCatalog", name: "Renovation & Fit-Out" },
                  { "@type": "OfferCatalog", name: "Moving & Relocation" },
                  { "@type": "OfferCatalog", name: "Building Maintenance" },
                ],
              },
              priceRange: "AED 59 - AED 14999",
              currenciesAccepted: "AED",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday",
                  ],
                  opens: "08:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "14:00",
                  closes: "22:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "2450",
                bestRating: "5",
                worstRating: "1",
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: BRAND.shortName,
              url: BRAND.website,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${BRAND.website}/services?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="bg-[#fcfcfd] text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        {/* Google Analytics - loaded after page render */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZTKXVQYHEL" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-ZTKXVQYHEL');`,
          }}
        />
      </body>
    </html>
  );
}
