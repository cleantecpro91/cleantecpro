"use client";
import { useState } from "react";
import Link from "next/link";
import { BRAND } from "@/lib/data";

const TABS = [
  { id: "overview", label: "Overview", icon: "📊" },
  { id: "orders", label: "My Orders", icon: "📦" },
  { id: "quotes", label: "My Quotes", icon: "📋" },
  { id: "invoices", label: "Invoices", icon: "🧾" },
  { id: "favorites", label: "Favorites", icon: "❤️" },
  { id: "addresses", label: "Addresses", icon: "📍" },
  { id: "profile", label: "Profile", icon: "👤" },
  { id: "notifications", label: "Notifications", icon: "🔔" },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="py-8 md:py-12">
      <div className="container-main">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">My Dashboard</h1>
            <p className="text-sm text-slate-500">Manage your bookings, quotes, and account settings</p>
          </div>
          <Link href="/booking" className="btn-primary !py-2 !px-4 text-sm">
            Book a Service
          </Link>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="premium-card p-4">
              <div className="text-center pb-4 mb-4 border-b border-slate-100">
                <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-600 text-2xl font-bold flex items-center justify-center mx-auto mb-2">
                  U
                </div>
                <p className="font-bold text-slate-900">Customer</p>
                <p className="text-xs text-slate-500">Welcome back!</p>
              </div>
              <nav className="space-y-1">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                      activeTab === tab.id
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {activeTab === "overview" && (
              <div className="space-y-5">
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "Active Orders", value: "0", icon: "📦" },
                    { label: "Pending Quotes", value: "0", icon: "📋" },
                    { label: "Completed", value: "0", icon: "✅" },
                  ].map((stat) => (
                    <div key={stat.label} className="premium-card p-5 text-center">
                      <span className="text-2xl mb-2 block">{stat.icon}</span>
                      <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="premium-card p-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-3">Quick Actions</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Link href="/booking" className="btn-primary text-center">Book a Service</Link>
                    <Link href="/quote" className="btn-outline text-center">Request a Quote</Link>
                    <a href={`tel:${BRAND.phone}`} className="btn-outline text-center">📞 Call Us</a>
                    <a href={`https://wa.me/${BRAND.whatsapp}`} className="btn-whatsapp text-center" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
                  </div>
                </div>
                <div className="premium-card p-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-2">Recent Activity</h2>
                  <p className="text-sm text-slate-500">No recent orders or quotes yet. Book a service to get started!</p>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="premium-card p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">My Orders</h2>
                <p className="text-sm text-slate-500 mb-4">You haven&apos;t placed any orders yet.</p>
                <Link href="/booking" className="btn-primary">Book Your First Service</Link>
              </div>
            )}

            {activeTab === "quotes" && (
              <div className="premium-card p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">My Quotes</h2>
                <p className="text-sm text-slate-500 mb-4">No quote requests yet.</p>
                <Link href="/quote" className="btn-primary">Request a Quote</Link>
              </div>
            )}

            {activeTab === "invoices" && (
              <div className="premium-card p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Invoices</h2>
                <p className="text-sm text-slate-500">No invoices available yet.</p>
              </div>
            )}

            {activeTab === "favorites" && (
              <div className="premium-card p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Favorite Services</h2>
                <p className="text-sm text-slate-500 mb-4">Save your frequently used services for quick access.</p>
                <Link href="/services" className="btn-outline">Browse Services</Link>
              </div>
            )}

            {activeTab === "addresses" && (
              <div className="premium-card p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Saved Addresses</h2>
                <p className="text-sm text-slate-500 mb-4">No saved addresses yet. Addresses will be saved when you place an order.</p>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="premium-card p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Profile Settings</h2>
                <p className="text-sm text-slate-500 mb-4">Please sign in to view and edit your profile.</p>
                <Link href="/auth/login" className="btn-primary">Sign In</Link>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="premium-card p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Notifications</h2>
                <p className="text-sm text-slate-500">No notifications yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
