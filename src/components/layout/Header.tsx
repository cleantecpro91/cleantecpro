"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SERVICE_CATEGORIES, BRAND } from "@/lib/data";

const CATEGORY_ICONS: Record<string, string> = {
  cleaning: "🧹",
  "ac-hvac": "❄️",
  plumbing: "🔧",
  electrical: "⚡",
  handyman: "🔨",
  renovation: "🏗️",
  "pest-control": "🛡️",
  "appliance-repair": "🔌",
  movers: "🚛",
  "garden-outdoor": "🌿",
  "building-maintenance": "🏢",
  "lifestyle-support": "🏠",
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    { type: string; name: string; href: string }[]
  >([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    const results: { type: string; name: string; href: string }[] = [];
    SERVICE_CATEGORIES.forEach((cat) => {
      if (cat.name.toLowerCase().includes(q)) {
        results.push({
          type: "Category",
          name: cat.name,
          href: `/services/${cat.slug}`,
        });
      }
      cat.subcategories.forEach((sub) => {
        if (sub.name.toLowerCase().includes(q)) {
          results.push({
            type: "Subcategory",
            name: `${cat.name} → ${sub.name}`,
            href: `/services/${cat.slug}/${sub.slug}`,
          });
        }
        sub.services.forEach((svc) => {
          if (svc.name.toLowerCase().includes(q)) {
            results.push({
              type: "Service",
              name: svc.name,
              href: `/services/${cat.slug}/${sub.slug}/${svc.slug}`,
            });
          }
        });
      });
    });
    setSearchResults(results.slice(0, 8));
  }, [searchQuery]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-950 text-white/90 text-xs hidden md:block">
        <div className="container-main flex items-center justify-between h-9">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BRAND.phone}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {BRAND.phoneFormatted}
            </a>
            <span className="text-white/30">|</span>
            <a
              href={`mailto:${BRAND.email}`}
              className="hover:text-white transition-colors"
            >
              {BRAND.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/60">Serving all UAE Emirates</span>
            <span className="text-white/30">|</span>
            <Link href="/auth/login" className="hover:text-white transition-colors">
              Sign In
            </Link>
            <Link href="/auth/register" className="hover:text-white transition-colors">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`mega-menu-wrapper sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="container-main flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="CleanTecPro Home">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/20">
              <svg viewBox="0 0 32 32" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 3c1.5 0 3 .5 4 1.5l-4 4-4-4C13 5.5 14.5 5 16 5zm-7 6.5L12.5 15 9 18.5c-1-1-1.5-2.5-1.5-4 0-1 .5-2 1.5-3zM16 27c-6.075 0-11-4.925-11-11 0-1.5.5-3 1.5-4.5L12 17l4-7 4 7 5.5-5.5c1 1.5 1.5 3 1.5 4.5 0 6.075-4.925 11-11 11z"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-extrabold tracking-tight text-brand-900">
                Clean<span className="text-brand-600">Tec</span>Pro
              </span>
              <p className="text-[10px] text-slate-400 font-medium -mt-0.5 leading-tight">
                Professional Services
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-colors"
            >
              Home
            </Link>
            <div className="mega-menu-trigger relative">
              <Link
                href="/services"
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-colors flex items-center gap-1"
              >
                Services
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="mega-menu">
                <div className="mega-menu-inner">
                  <div className="grid grid-cols-4 gap-5">
                    {SERVICE_CATEGORIES.map((cat) => (
                      <div key={cat.slug}>
                        <Link
                          href={`/services/${cat.slug}`}
                          className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-brand-600 mb-2 pb-2 border-b border-slate-100"
                        >
                          <span>{CATEGORY_ICONS[cat.slug] || "📋"}</span>
                          {cat.name}
                        </Link>
                        <ul className="space-y-1">
                          {cat.subcategories.slice(0, 3).map((sub) => (
                            <li key={sub.slug}>
                              <Link
                                href={`/services/${cat.slug}/${sub.slug}`}
                                className="text-xs text-slate-500 hover:text-brand-600 transition-colors block py-0.5"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/services"
                      className="text-sm font-semibold text-brand-600 hover:text-brand-700"
                    >
                      View All Services →
                    </Link>
                    <div className="flex items-center gap-3">
                      <Link
                        href="/quote"
                        className="btn-outline text-xs !py-2 !px-4"
                      >
                        Get a Free Quote
                      </Link>
                      <Link
                        href="/booking"
                        className="btn-primary text-xs !py-2 !px-4"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/locations"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-colors"
            >
              Locations
            </Link>
            <Link
              href="/amc"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-colors"
            >
              AMC Plans
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Call Button */}
            <a
              href={`tel:${BRAND.phone}`}
              className="hidden md:flex btn-outline !py-2 !px-3 text-xs"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call
            </a>

            {/* Book Now */}
            <Link
              href="/booking"
              className="btn-primary !py-2 !px-4 text-sm hidden md:inline-flex"
            >
              Book Now
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div ref={searchRef} className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg z-50">
            <div className="container-main py-4">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, categories, locations..."
                  className="form-input !pl-12 !text-base !py-3.5 !rounded-xl"
                  autoFocus
                />
                <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-slate-200 rounded-xl mt-2 shadow-xl overflow-hidden">
                    {searchResults.map((r, i) => (
                      <Link
                        key={i}
                        href={r.href}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-brand-50 transition-colors border-b border-slate-50 last:border-0"
                      >
                        <span className="text-xs font-medium text-brand-600 bg-brand-100 px-2 py-0.5 rounded-md">
                          {r.type}
                        </span>
                        <span className="text-sm text-slate-800">{r.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
                {searchQuery && searchResults.length === 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-slate-200 rounded-xl mt-2 shadow-xl p-4 text-center text-sm text-slate-500">
                    No results found. Try a different search term.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-white shadow-2xl overflow-y-auto">
            <div className="p-5">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-extrabold text-brand-900">
                  Clean<span className="text-brand-600">Tec</span>Pro
                </span>
                <button onClick={() => setMobileOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-1 mb-6">
                {[
                  { label: "Home", href: "/" },
                  { label: "All Services", href: "/services" },
                  { label: "Locations", href: "/locations" },
                  { label: "AMC Plans", href: "/amc" },
                  { label: "Blog", href: "/blog" },
                  { label: "FAQ", href: "/faq" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-4 mb-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
                  Service Categories
                </p>
                {SERVICE_CATEGORIES.slice(0, 8).map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/services/${cat.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-sm text-slate-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                  >
                    <span>{CATEGORY_ICONS[cat.slug] || "📋"}</span>
                    {cat.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <Link
                  href="/booking"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  Book a Service
                </Link>
                <Link
                  href="/quote"
                  onClick={() => setMobileOpen(false)}
                  className="btn-outline w-full text-center"
                >
                  Request a Quote
                </Link>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  className="btn-whatsapp w-full text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
