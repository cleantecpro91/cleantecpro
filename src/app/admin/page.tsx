"use client";
import { useState } from "react";
import Link from "next/link";

const ADMIN_TABS = [
  { id: "dashboard", label: "Dashboard", icon: "📊" },
  { id: "orders", label: "Orders", icon: "📦" },
  { id: "quotes", label: "Quotes", icon: "📋" },
  { id: "customers", label: "Customers", icon: "👥" },
  { id: "services", label: "Services", icon: "🔧" },
  { id: "categories", label: "Categories", icon: "📂" },
  { id: "locations", label: "Locations", icon: "📍" },
  { id: "blog", label: "Blog", icon: "📝" },
  { id: "faq", label: "FAQs", icon: "❓" },
  { id: "testimonials", label: "Testimonials", icon: "⭐" },
  { id: "invoices", label: "Invoices", icon: "🧾" },
  { id: "pages", label: "CMS Pages", icon: "📄" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [logged, setLogged] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/auth/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      });
      if (res.ok) setLogged(true);
      else setError("Invalid credentials");
    } catch {
      setError("Connection error");
    }
  };

  if (!logged) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-extrabold text-slate-900">Admin Panel</h1>
            <p className="text-sm text-slate-500">Sign in to manage your platform</p>
          </div>
          <div className="premium-card p-6">
            <form onSubmit={handleLogin} className="space-y-4">
              {error && <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg">{error}</div>}
              <div>
                <label className="form-label">Email</label>
                <input type="email" required className="form-input" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} />
              </div>
              <div>
                <label className="form-label">Password</label>
                <input type="password" required className="form-input" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} />
              </div>
              <button type="submit" className="btn-primary w-full">Sign In</button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6 md:py-10 min-h-screen bg-slate-50">
      <div className="container-main">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-extrabold text-slate-900">Admin Dashboard</h1>
          <button onClick={() => setLogged(false)} className="text-sm text-slate-500 hover:text-red-600">
            Sign Out
          </button>
        </div>
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-1">
            <div className="premium-card p-3">
              <nav className="space-y-0.5">
                {ADMIN_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left ${
                      activeTab === tab.id ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="lg:col-span-4">
            {activeTab === "dashboard" && (
              <div className="space-y-5">
                <div className="grid sm:grid-cols-4 gap-4">
                  {[
                    { label: "Total Orders", value: "0", icon: "📦", color: "bg-blue-50 text-blue-600" },
                    { label: "Pending Quotes", value: "0", icon: "📋", color: "bg-amber-50 text-amber-600" },
                    { label: "Customers", value: "0", icon: "👥", color: "bg-green-50 text-green-600" },
                    { label: "Revenue", value: "AED 0", icon: "💰", color: "bg-purple-50 text-purple-600" },
                  ].map((stat) => (
                    <div key={stat.label} className="premium-card p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${stat.color}`}>{stat.icon}</span>
                      </div>
                      <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
                      <p className="text-xs text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="premium-card p-6">
                  <h2 className="text-base font-bold text-slate-900 mb-3">Admin Quick Actions</h2>
                  <div className="grid sm:grid-cols-4 gap-3">
                    {[
                      { label: "Manage Services", tab: "services" },
                      { label: "View Orders", tab: "orders" },
                      { label: "Review Quotes", tab: "quotes" },
                      { label: "Manage Blog", tab: "blog" },
                    ].map((action) => (
                      <button key={action.tab} onClick={() => setActiveTab(action.tab)} className="btn-outline text-sm text-center">
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="premium-card p-6">
                  <h2 className="text-base font-bold text-slate-900 mb-3">Platform Info</h2>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p><strong>Platform:</strong> CleanTecPro Marketplace</p>
                    <p><strong>Database:</strong> PostgreSQL (Drizzle ORM)</p>
                    <p><strong>Framework:</strong> Next.js App Router</p>
                    <p><strong>Admin Role:</strong> Super Admin</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab !== "dashboard" && (
              <div className="premium-card p-8 text-center">
                <span className="text-4xl mb-4 block">{ADMIN_TABS.find(t => t.id === activeTab)?.icon}</span>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {ADMIN_TABS.find(t => t.id === activeTab)?.label} Management
                </h2>
                <p className="text-sm text-slate-500 mb-4">
                  This section allows you to manage {activeTab} through full CRUD operations.
                  Data is stored in PostgreSQL and managed via Drizzle ORM.
                </p>
                <div className="text-xs text-slate-400 bg-slate-50 rounded-lg p-4">
                  <p>API endpoint: <code>/api/admin/{activeTab}</code></p>
                  <p>Database table: <code>{activeTab}</code></p>
                  <p className="mt-2 text-slate-500">Full admin CRUD operations are available via the API layer. Connect a frontend form to create, read, update, and delete records.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
