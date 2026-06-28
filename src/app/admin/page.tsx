"use client";
import { useState, useEffect, useCallback } from "react";

const TABS = [
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
  { id: "contacts", label: "Contact Msgs", icon: "✉️" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

type AnyRecord = Record<string, unknown>;

export default function AdminPage() {
  const [tab, setTab] = useState("dashboard");
  const [logged, setLogged] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [data, setData] = useState<AnyRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState<AnyRecord | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<AnyRecord>({});
  const [msg, setMsg] = useState("");
  const [extraData, setExtraData] = useState<AnyRecord>({});
  const [pwForm, setPwForm] = useState({ currentEmail: "", currentPassword: "", newEmail: "", newPassword: "" });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); setError("");
    try {
      const res = await fetch("/api/auth/admin-login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(loginForm) });
      if (res.ok) setLogged(true); else setError("Invalid credentials");
    } catch { setError("Connection error"); }
  };

  const fetchData = useCallback(async (endpoint: string) => {
    setLoading(true); setMsg("");
    try {
      const res = await fetch(`/api/admin/${endpoint}`);
      if (res.ok) {
        const d = await res.json();
        if (Array.isArray(d)) { setData(d); setExtraData({}); }
        else { setData(d.categories || d.emirates || []); setExtraData(d); }
      }
    } catch { setData([]); }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!logged) return;
    if (tab === "dashboard" || tab === "settings") return;
    fetchData(tab === "faq" ? "faqs" : tab === "contacts" ? "contacts" : tab);
  }, [tab, logged, fetchData]);

  const saveItem = async (endpoint: string, method: string, body: AnyRecord) => {
    setMsg("");
    try {
      const res = await fetch(`/api/admin/${endpoint}`, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (res.ok) { setMsg("✅ Saved!"); setShowForm(false); setEditItem(null); setFormData({}); fetchData(endpoint); }
      else setMsg("❌ Error saving");
    } catch { setMsg("❌ Connection error"); }
  };

  const deleteItem = async (endpoint: string, id: string) => {
    if (!confirm("Are you sure you want to delete this?")) return;
    try {
      const res = await fetch(`/api/admin/${endpoint}`, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
      if (res.ok) { setMsg("✅ Deleted!"); fetchData(endpoint); } else setMsg("❌ Error");
    } catch { setMsg("❌ Error"); }
  };

  const fmtDate = (d: unknown) => { try { return new Date(d as string).toLocaleDateString("en-AE", { day: "numeric", month: "short", year: "numeric" }); } catch { return "-"; } };

  if (!logged) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-6"><h1 className="text-2xl font-extrabold text-slate-900">Admin Panel</h1><p className="text-sm text-slate-500">Sign in to manage your platform</p></div>
          <div className="premium-card p-6">
            <form onSubmit={handleLogin} className="space-y-4">
              {error && <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg">{error}</div>}
              <div><label className="form-label">Email</label><input type="email" required className="form-input" value={loginForm.email} onChange={e => setLoginForm({ ...loginForm, email: e.target.value })} /></div>
              <div><label className="form-label">Password</label><input type="password" required className="form-input" value={loginForm.password} onChange={e => setLoginForm({ ...loginForm, password: e.target.value })} /></div>
              <button type="submit" className="btn-primary w-full">Sign In</button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6 min-h-screen bg-slate-50">
      <div className="container-main">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-extrabold text-slate-900">Admin Dashboard</h1>
          <button onClick={() => setLogged(false)} className="text-sm text-slate-500 hover:text-red-600">Sign Out</button>
        </div>
        {msg && <div className="mb-4 p-3 rounded-lg bg-brand-50 text-brand-700 text-sm font-medium">{msg}</div>}
        <div className="grid lg:grid-cols-5 gap-5">
          <div className="lg:col-span-1">
            <div className="premium-card p-3"><nav className="space-y-0.5">
              {TABS.map(t => (<button key={t.id} onClick={() => { setTab(t.id); setShowForm(false); setEditItem(null); }} className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-left transition-colors ${tab === t.id ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-50"}`}><span>{t.icon}</span>{t.label}</button>))}
            </nav></div>
          </div>
          <div className="lg:col-span-4">

            {/* DASHBOARD */}
            {tab === "dashboard" && (
              <div className="space-y-5">
                <div className="grid sm:grid-cols-4 gap-4">
                  {[{ l: "Orders", i: "📦", c: "bg-blue-50 text-blue-600" }, { l: "Quotes", i: "📋", c: "bg-amber-50 text-amber-600" }, { l: "Customers", i: "👥", c: "bg-green-50 text-green-600" }, { l: "Blog Posts", i: "📝", c: "bg-purple-50 text-purple-600" }].map(s => (
                    <div key={s.l} className="premium-card p-5"><div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-2 ${s.c}`}>{s.i}</div><p className="text-xs text-slate-400">{s.l}</p><button onClick={() => setTab(s.l.toLowerCase().replace(" ", ""))} className="text-xs text-brand-600 mt-1 hover:underline">Manage →</button></div>
                  ))}
                </div>
                <div className="premium-card p-6"><h2 className="text-base font-bold text-slate-900 mb-2">Welcome, Admin!</h2><p className="text-sm text-slate-500">Use the sidebar to manage orders, quotes, customers, blog posts, FAQs, testimonials, and contact messages.</p></div>
              </div>
            )}

            {/* ORDERS */}
            {tab === "orders" && (
              <div className="premium-card p-5">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Orders ({data.length})</h2>
                {loading ? <p className="text-sm text-slate-400">Loading...</p> : data.length === 0 ? <p className="text-sm text-slate-400">No orders yet.</p> : (
                  <div className="space-y-3">{data.map((o: AnyRecord) => (
                    <div key={o.id as string} className="border border-slate-200 rounded-xl p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div><p className="font-bold text-sm text-slate-900">{o.orderNumber as string}</p><p className="text-xs text-slate-400">{o.customerName as string} · {o.customerPhone as string}</p><p className="text-xs text-slate-400">{o.customerEmail as string}</p></div>
                        <div className="text-right"><span className={`text-xs px-2 py-1 rounded-full font-semibold ${o.orderStatus === "completed" ? "bg-green-100 text-green-700" : o.orderStatus === "cancelled" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}>{o.orderStatus as string}</span><p className="text-xs text-slate-400 mt-1">{fmtDate(o.createdAt)}</p></div>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">Service: <strong>{o.serviceName as string}</strong></p>
                      {o.notes ? <p className="text-xs text-slate-400 mb-2">Notes: {String(o.notes)}</p> : null}
                      {editItem?.id === o.id ? (
                        <div className="mt-3 p-3 bg-slate-50 rounded-lg space-y-2">
                          <div className="grid grid-cols-2 gap-2">
                            <div><label className="text-xs font-semibold text-slate-500">Order Status</label><select className="form-select !text-sm !py-1.5" value={formData.orderStatus as string || o.orderStatus as string} onChange={e => setFormData({ ...formData, orderStatus: e.target.value })}><option value="pending">Pending</option><option value="confirmed">Confirmed</option><option value="assigned">Assigned</option><option value="in_progress">In Progress</option><option value="completed">Completed</option><option value="cancelled">Cancelled</option></select></div>
                            <div><label className="text-xs font-semibold text-slate-500">Payment Status</label><select className="form-select !text-sm !py-1.5" value={formData.paymentStatus as string || o.paymentStatus as string} onChange={e => setFormData({ ...formData, paymentStatus: e.target.value })}><option value="pending">Pending</option><option value="paid">Paid</option><option value="awaiting_transfer">Awaiting Transfer</option><option value="refunded">Refunded</option></select></div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div><label className="text-xs font-semibold text-slate-500">Vendor Name</label><input className="form-input !text-sm !py-1.5" value={formData.vendorName as string || ""} onChange={e => setFormData({ ...formData, vendorName: e.target.value })} placeholder="Assign vendor" /></div>
                            <div><label className="text-xs font-semibold text-slate-500">Vendor Phone</label><input className="form-input !text-sm !py-1.5" value={formData.vendorPhone as string || ""} onChange={e => setFormData({ ...formData, vendorPhone: e.target.value })} /></div>
                          </div>
                          <div><label className="text-xs font-semibold text-slate-500">Admin Notes</label><textarea className="form-input !text-sm !py-1.5" rows={2} value={formData.adminNotes as string || ""} onChange={e => setFormData({ ...formData, adminNotes: e.target.value })} /></div>
                          <div className="flex gap-2"><button onClick={() => saveItem("orders", "PUT", { id: o.id, ...formData })} className="btn-primary !text-xs !py-1.5 !px-3">Save</button><button onClick={() => { setEditItem(null); setFormData({}); }} className="btn-outline !text-xs !py-1.5 !px-3">Cancel</button></div>
                        </div>
                      ) : (<button onClick={() => { setEditItem(o); setFormData({}); }} className="text-xs text-brand-600 hover:underline mt-2">Edit / Assign Vendor ✏️</button>)}
                    </div>
                  ))}</div>
                )}
              </div>
            )}

            {/* QUOTES */}
            {tab === "quotes" && (
              <div className="premium-card p-5">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Quote Requests ({data.length})</h2>
                {loading ? <p className="text-sm text-slate-400">Loading...</p> : data.length === 0 ? <p className="text-sm text-slate-400">No quote requests yet.</p> : (
                  <div className="space-y-3">{data.map((q: AnyRecord) => (
                    <div key={q.id as string} className="border border-slate-200 rounded-xl p-4">
                      <div className="flex justify-between mb-2">
                        <div><p className="font-bold text-sm">{q.quoteNumber as string}</p><p className="text-xs text-slate-400">{q.customerName as string} · {q.customerPhone as string} · {q.customerEmail as string}</p></div>
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold h-fit ${q.status === "responded" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>{q.status as string}</span>
                      </div>
                      <p className="text-sm text-slate-600">Service: <strong>{q.serviceName as string}</strong> · {q.emirate as string} · {q.propertyType as string}</p>
                      <p className="text-xs text-slate-400 mt-1">{q.description as string}</p>
                      {editItem?.id === q.id ? (
                        <div className="mt-3 p-3 bg-slate-50 rounded-lg space-y-2">
                          <div className="grid grid-cols-2 gap-2">
                            <div><label className="text-xs font-semibold">Status</label><select className="form-select !text-sm !py-1.5" value={formData.status as string || q.status as string} onChange={e => setFormData({ ...formData, status: e.target.value })}><option value="pending">Pending</option><option value="reviewed">Reviewed</option><option value="responded">Responded</option><option value="accepted">Accepted</option><option value="declined">Declined</option></select></div>
                            <div><label className="text-xs font-semibold">Quoted Amount (AED)</label><input className="form-input !text-sm !py-1.5" value={formData.quotedAmount as string || ""} onChange={e => setFormData({ ...formData, quotedAmount: e.target.value })} /></div>
                          </div>
                          <div><label className="text-xs font-semibold">Response to Customer</label><textarea className="form-input !text-sm !py-1.5" rows={2} value={formData.adminResponse as string || ""} onChange={e => setFormData({ ...formData, adminResponse: e.target.value })} /></div>
                          <div><label className="text-xs font-semibold">Internal Notes</label><textarea className="form-input !text-sm !py-1.5" rows={2} value={formData.adminNotes as string || ""} onChange={e => setFormData({ ...formData, adminNotes: e.target.value })} /></div>
                          <div className="flex gap-2"><button onClick={() => saveItem("quotes", "PUT", { id: q.id, ...formData })} className="btn-primary !text-xs !py-1.5 !px-3">Save</button><button onClick={() => { setEditItem(null); setFormData({}); }} className="btn-outline !text-xs !py-1.5 !px-3">Cancel</button></div>
                        </div>
                      ) : (<button onClick={() => { setEditItem(q); setFormData({}); }} className="text-xs text-brand-600 hover:underline mt-2">Respond / Edit ✏️</button>)}
                    </div>
                  ))}</div>
                )}
              </div>
            )}

            {/* CUSTOMERS */}
            {tab === "customers" && (
              <div className="premium-card p-5">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Customers ({data.length})</h2>
                {loading ? <p className="text-sm text-slate-400">Loading...</p> : data.length === 0 ? <p className="text-sm text-slate-400">No customers yet.</p> : (
                  <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-200 text-left"><th className="py-2 px-3 text-xs text-slate-500 font-semibold">Name</th><th className="py-2 px-3 text-xs text-slate-500 font-semibold">Email</th><th className="py-2 px-3 text-xs text-slate-500 font-semibold">Phone</th><th className="py-2 px-3 text-xs text-slate-500 font-semibold">Joined</th></tr></thead>
                  <tbody>{data.map((c: AnyRecord) => (<tr key={c.id as string} className="border-b border-slate-100"><td className="py-2 px-3 font-medium">{c.firstName as string} {c.lastName as string}</td><td className="py-2 px-3 text-slate-500">{c.email as string}</td><td className="py-2 px-3 text-slate-500">{c.phone as string}</td><td className="py-2 px-3 text-slate-400 text-xs">{fmtDate(c.createdAt)}</td></tr>))}</tbody></table></div>
                )}
              </div>
            )}

            {/* BLOG */}
            {tab === "blog" && (
              <div className="premium-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-900">Blog Posts ({data.length})</h2>
                  <button onClick={() => { setShowForm(true); setEditItem(null); setFormData({ title: "", slug: "", excerpt: "", content: "", category: "General", isPublished: false }); }} className="btn-primary !text-xs !py-2 !px-3">+ New Post</button>
                </div>
                {showForm && (
                  <div className="mb-5 p-4 bg-slate-50 rounded-xl space-y-3">
                    <h3 className="font-bold text-sm">{editItem ? "Edit Post" : "New Post"}</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div><label className="form-label">Title *</label><input className="form-input" value={formData.title as string || ""} onChange={e => setFormData({ ...formData, title: e.target.value })} /></div>
                      <div><label className="form-label">Slug *</label><input className="form-input" value={formData.slug as string || ""} onChange={e => setFormData({ ...formData, slug: e.target.value })} placeholder="url-friendly-slug" /></div>
                    </div>
                    <div><label className="form-label">Excerpt</label><input className="form-input" value={formData.excerpt as string || ""} onChange={e => setFormData({ ...formData, excerpt: e.target.value })} /></div>
                    <div><label className="form-label">Content * (HTML)</label><textarea className="form-input" rows={6} value={formData.content as string || ""} onChange={e => setFormData({ ...formData, content: e.target.value })} /></div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div><label className="form-label">Category</label><input className="form-input" value={formData.category as string || ""} onChange={e => setFormData({ ...formData, category: e.target.value })} /></div>
                      <div className="flex items-end gap-2 pb-1"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={formData.isPublished as boolean || false} onChange={e => setFormData({ ...formData, isPublished: e.target.checked })} /><span className="text-sm font-medium">Published</span></label></div>
                    </div>
                    <div className="flex gap-2"><button onClick={() => saveItem("blog", editItem ? "PUT" : "POST", editItem ? { id: editItem.id, ...formData } : formData)} className="btn-primary !text-sm">Save Post</button><button onClick={() => { setShowForm(false); setFormData({}); }} className="btn-outline !text-sm">Cancel</button></div>
                  </div>
                )}
                {data.length === 0 ? <p className="text-sm text-slate-400">No blog posts.</p> : (
                  <div className="space-y-2">{data.map((p: AnyRecord) => (
                    <div key={p.id as string} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                      <div><p className="text-sm font-semibold">{p.title as string}</p><p className="text-xs text-slate-400">{p.category as string} · {p.isPublished ? "✅ Published" : "📝 Draft"} · {fmtDate(p.createdAt)}</p></div>
                      <div className="flex gap-2"><button onClick={() => { setEditItem(p); setFormData({ title: p.title, slug: p.slug, excerpt: p.excerpt || "", content: p.content, category: p.category || "", isPublished: p.isPublished }); setShowForm(true); }} className="text-xs text-brand-600 hover:underline">Edit</button><button onClick={() => deleteItem("blog", p.id as string)} className="text-xs text-red-500 hover:underline">Delete</button></div>
                    </div>
                  ))}</div>
                )}
              </div>
            )}

            {/* FAQs */}
            {tab === "faq" && (
              <div className="premium-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-900">FAQs ({data.length})</h2>
                  <button onClick={() => { setShowForm(true); setEditItem(null); setFormData({ question: "", answer: "", category: "general" }); }} className="btn-primary !text-xs !py-2 !px-3">+ New FAQ</button>
                </div>
                {showForm && (
                  <div className="mb-5 p-4 bg-slate-50 rounded-xl space-y-3">
                    <div><label className="form-label">Question *</label><input className="form-input" value={formData.question as string || ""} onChange={e => setFormData({ ...formData, question: e.target.value })} /></div>
                    <div><label className="form-label">Answer *</label><textarea className="form-input" rows={3} value={formData.answer as string || ""} onChange={e => setFormData({ ...formData, answer: e.target.value })} /></div>
                    <div><label className="form-label">Category</label><input className="form-input" value={formData.category as string || ""} onChange={e => setFormData({ ...formData, category: e.target.value })} placeholder="booking, payment, quality..." /></div>
                    <div className="flex gap-2"><button onClick={() => saveItem("faqs", editItem ? "PUT" : "POST", editItem ? { id: editItem.id, ...formData } : formData)} className="btn-primary !text-sm">Save FAQ</button><button onClick={() => { setShowForm(false); setFormData({}); }} className="btn-outline !text-sm">Cancel</button></div>
                  </div>
                )}
                {data.length === 0 ? <p className="text-sm text-slate-400">No FAQs.</p> : (
                  <div className="space-y-2">{data.map((f: AnyRecord) => (
                    <div key={f.id as string} className="p-3 border border-slate-200 rounded-lg">
                      <p className="text-sm font-semibold mb-1">{f.question as string}</p><p className="text-xs text-slate-500">{(f.answer as string).substring(0, 120)}...</p>
                      <div className="flex gap-2 mt-2"><button onClick={() => { setEditItem(f); setFormData({ question: f.question, answer: f.answer, category: f.category || "" }); setShowForm(true); }} className="text-xs text-brand-600 hover:underline">Edit</button><button onClick={() => deleteItem("faqs", f.id as string)} className="text-xs text-red-500 hover:underline">Delete</button></div>
                    </div>
                  ))}</div>
                )}
              </div>
            )}

            {/* TESTIMONIALS */}
            {tab === "testimonials" && (
              <div className="premium-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-900">Testimonials ({data.length})</h2>
                  <button onClick={() => { setShowForm(true); setEditItem(null); setFormData({ customerName: "", customerLocation: "", rating: 5, content: "", serviceName: "" }); }} className="btn-primary !text-xs !py-2 !px-3">+ New</button>
                </div>
                {showForm && (
                  <div className="mb-5 p-4 bg-slate-50 rounded-xl space-y-3">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div><label className="form-label">Customer Name *</label><input className="form-input" value={formData.customerName as string || ""} onChange={e => setFormData({ ...formData, customerName: e.target.value })} /></div>
                      <div><label className="form-label">Location</label><input className="form-input" value={formData.customerLocation as string || ""} onChange={e => setFormData({ ...formData, customerLocation: e.target.value })} placeholder="Business Bay, Dubai" /></div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div><label className="form-label">Rating (1-5) *</label><select className="form-select" value={formData.rating as number || 5} onChange={e => setFormData({ ...formData, rating: Number(e.target.value) })}><option value={5}>5 Stars</option><option value={4}>4 Stars</option><option value={3}>3 Stars</option></select></div>
                      <div><label className="form-label">Service Name</label><input className="form-input" value={formData.serviceName as string || ""} onChange={e => setFormData({ ...formData, serviceName: e.target.value })} /></div>
                    </div>
                    <div><label className="form-label">Review Content *</label><textarea className="form-input" rows={3} value={formData.content as string || ""} onChange={e => setFormData({ ...formData, content: e.target.value })} /></div>
                    <div className="flex gap-2"><button onClick={() => saveItem("testimonials", "POST", formData)} className="btn-primary !text-sm">Save</button><button onClick={() => { setShowForm(false); setFormData({}); }} className="btn-outline !text-sm">Cancel</button></div>
                  </div>
                )}
                {data.length === 0 ? <p className="text-sm text-slate-400">No testimonials.</p> : (
                  <div className="space-y-2">{data.map((t: AnyRecord) => (
                    <div key={t.id as string} className="flex items-start justify-between p-3 border border-slate-200 rounded-lg">
                      <div><p className="text-sm font-semibold">{t.customerName as string} <span className="text-slate-400 font-normal">· {t.customerLocation as string}</span></p><p className="text-xs text-amber-500">{"★".repeat(t.rating as number)}</p><p className="text-xs text-slate-500 mt-1">{(t.content as string).substring(0, 100)}...</p></div>
                      <button onClick={() => deleteItem("testimonials", t.id as string)} className="text-xs text-red-500 hover:underline shrink-0">Delete</button>
                    </div>
                  ))}</div>
                )}
              </div>
            )}

            {/* CONTACT MESSAGES */}
            {tab === "contacts" && (
              <div className="premium-card p-5">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Contact Messages ({data.length})</h2>
                {loading ? <p className="text-sm text-slate-400">Loading...</p> : data.length === 0 ? <p className="text-sm text-slate-400">No messages yet.</p> : (
                  <div className="space-y-3">{data.map((c: AnyRecord) => (
                    <div key={c.id as string} className="p-4 border border-slate-200 rounded-lg">
                      <div className="flex justify-between mb-1"><p className="text-sm font-semibold">{c.name as string}</p><p className="text-xs text-slate-400">{fmtDate(c.createdAt)}</p></div>
                      <p className="text-xs text-slate-400">{c.email as string} · {c.phone as string || "No phone"}</p>
                      {c.subject ? <p className="text-xs text-slate-500 mt-1 font-medium">Subject: {String(c.subject)}</p> : null}
                      <p className="text-sm text-slate-600 mt-2">{c.message as string}</p>
                    </div>
                  ))}</div>
                )}
              </div>
            )}

            {/* SERVICES */}
            {tab === "services" && (
              <div className="premium-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-900">Services ({data.length})</h2>
                  {data.length === 0 && <button onClick={async () => { setMsg("⏳ Seeding data..."); const r = await fetch("/api/admin/seed-data?key=setup2025cleantecpro"); const d = await r.json(); if(r.ok){setMsg("✅ Data seeded! Refresh the tab."); fetchData("services");} else setMsg("❌ "+String(d.error)); }} className="btn-primary !text-xs !py-2 !px-3">🌱 Load All Services from Template</button>}
                </div>
                {loading ? <p className="text-sm text-slate-400">Loading...</p> : data.length === 0 ? <p className="text-sm text-slate-400">No services in database. Click the button above to load all template services.</p> : (
                  <div className="space-y-2">{data.map((s: AnyRecord) => (
                    <div key={s.id as string} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                      <div><p className="text-sm font-semibold">{s.name as string}</p><p className="text-xs text-slate-400">/{s.slug as string} {s.startingPrice ? `· AED ${s.startingPrice}` : ""} · {s.isActive ? "✅ Active" : "❌ Inactive"}</p></div>
                      {editItem?.id === s.id ? (
                        <div className="flex gap-2 items-center">
                          <input className="form-input !text-xs !py-1 !w-20" placeholder="Price" value={formData.startingPrice as string || ""} onChange={e=>setFormData({...formData,startingPrice:e.target.value})} />
                          <button onClick={()=>saveItem("services","PUT",{id:s.id,...formData})} className="text-xs text-green-600 hover:underline">Save</button>
                          <button onClick={()=>{setEditItem(null);setFormData({});}} className="text-xs text-slate-400">Cancel</button>
                        </div>
                      ) : (<button onClick={()=>{setEditItem(s);setFormData({});}} className="text-xs text-brand-600 hover:underline">Edit ✏️</button>)}
                    </div>
                  ))}</div>
                )}
              </div>
            )}

            {/* CATEGORIES */}
            {tab === "categories" && (
              <div className="premium-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-900">Categories ({data.length}) & Subcategories ({((extraData.subcategories as AnyRecord[]) || []).length})</h2>
                  {data.length === 0 && <button onClick={async () => { setMsg("⏳ Seeding..."); const r = await fetch("/api/admin/seed-data?key=setup2025cleantecpro"); if(r.ok){setMsg("✅ Seeded!"); fetchData("categories");} else setMsg("❌ Error"); }} className="btn-primary !text-xs !py-2 !px-3">🌱 Load Categories</button>}
                </div>
                {loading ? <p className="text-sm text-slate-400">Loading...</p> : (
                  <div>
                    <h3 className="font-bold text-sm mb-2">Categories</h3>
                    {data.length === 0 ? <p className="text-sm text-slate-400 mb-4">No categories. Click button above.</p> : (
                      <div className="space-y-1 mb-4">{data.map((c: AnyRecord) => (
                        <div key={c.id as string} className="flex items-center justify-between p-2 border border-slate-100 rounded-lg">
                          <p className="text-sm"><span className="mr-2">{c.icon as string}</span><strong>{c.name as string}</strong> <span className="text-slate-400">/{c.slug as string}</span></p>
                          <span className="text-xs text-slate-400">{c.isActive ? "Active" : "Inactive"}</span>
                        </div>
                      ))}</div>
                    )}
                    <h3 className="font-bold text-sm mb-2">Subcategories</h3>
                    {((extraData.subcategories as AnyRecord[]) || []).length === 0 ? <p className="text-sm text-slate-400">No subcategories.</p> : (
                      <div className="space-y-1">{((extraData.subcategories as AnyRecord[]) || []).map((s: AnyRecord) => (
                        <div key={s.id as string} className="flex items-center justify-between p-2 border border-slate-100 rounded-lg">
                          <p className="text-sm"><strong>{s.name as string}</strong> <span className="text-slate-400">/{s.slug as string}</span></p>
                          <span className="text-xs text-slate-400">{s.isActive ? "Active" : "Inactive"}</span>
                        </div>
                      ))}</div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* LOCATIONS */}
            {tab === "locations" && (
              <div className="premium-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-900">Emirates ({data.length}) · Cities ({((extraData.cities as AnyRecord[]) || []).length})</h2>
                  {data.length === 0 && <button onClick={async () => { setMsg("⏳ Seeding..."); const r = await fetch("/api/admin/seed-data?key=setup2025cleantecpro"); if(r.ok){setMsg("✅ Seeded!"); fetchData("locations");} else setMsg("❌ Error"); }} className="btn-primary !text-xs !py-2 !px-3">🌱 Load Locations</button>}
                </div>
                {loading ? <p className="text-sm text-slate-400">Loading...</p> : (
                  <div>
                    <h3 className="font-bold text-sm mb-2">Emirates</h3>
                    {data.length === 0 ? <p className="text-sm text-slate-400 mb-4">No emirates. Click button above.</p> : (
                      <div className="space-y-1 mb-4">{data.map((e: AnyRecord) => (
                        <div key={e.id as string} className="flex items-center justify-between p-2 border border-slate-100 rounded-lg">
                          <p className="text-sm"><strong>{e.name as string}</strong> <span className="text-slate-400">/{e.slug as string}</span> {e.isPrimary ? <span className="text-xs bg-brand-100 text-brand-600 px-1.5 py-0.5 rounded-full ml-1">Primary</span> : ""}</p>
                          <span className="text-xs text-slate-400">{e.isActive ? "Active" : "Inactive"}</span>
                        </div>
                      ))}</div>
                    )}
                    <h3 className="font-bold text-sm mb-2">Cities ({((extraData.cities as AnyRecord[]) || []).length})</h3>
                    {((extraData.cities as AnyRecord[]) || []).length === 0 ? <p className="text-sm text-slate-400">No cities.</p> : (
                      <div className="grid sm:grid-cols-2 gap-1">{((extraData.cities as AnyRecord[]) || []).map((c: AnyRecord) => (
                        <div key={c.id as string} className="p-2 border border-slate-100 rounded-lg text-sm">
                          <strong>{c.name as string}</strong> <span className="text-slate-400">/{c.slug as string}</span>
                        </div>
                      ))}</div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* SETTINGS - Password Change */}
            {tab === "settings" && (
              <div className="premium-card p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-5">Admin Settings</h2>
                <div className="max-w-md">
                  <h3 className="font-bold text-sm text-slate-700 mb-3">Change Admin Email & Password</h3>
                  <div className="space-y-3">
                    <div><label className="form-label">Current Email *</label><input className="form-input" type="email" value={pwForm.currentEmail} onChange={e=>setPwForm({...pwForm,currentEmail:e.target.value})} placeholder="admin@cleantecpro.com" /></div>
                    <div><label className="form-label">Current Password *</label><input className="form-input" type="password" value={pwForm.currentPassword} onChange={e=>setPwForm({...pwForm,currentPassword:e.target.value})} /></div>
                    <hr className="border-slate-200" />
                    <div><label className="form-label">New Email (leave empty to keep same)</label><input className="form-input" type="email" value={pwForm.newEmail} onChange={e=>setPwForm({...pwForm,newEmail:e.target.value})} /></div>
                    <div><label className="form-label">New Password (min 6 chars, leave empty to keep same)</label><input className="form-input" type="password" value={pwForm.newPassword} onChange={e=>setPwForm({...pwForm,newPassword:e.target.value})} /></div>
                    <button onClick={async()=>{
                      setMsg("");
                      if(!pwForm.currentEmail||!pwForm.currentPassword){setMsg("❌ Current email and password required");return;}
                      if(!pwForm.newEmail&&!pwForm.newPassword){setMsg("❌ Enter new email or new password");return;}
                      try{
                        const r=await fetch("/api/admin/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(pwForm)});
                        const d=await r.json();
                        if(r.ok){setMsg("✅ "+String(d.message));setPwForm({currentEmail:"",currentPassword:"",newEmail:"",newPassword:""});}
                        else setMsg("❌ "+String(d.error));
                      }catch{setMsg("❌ Connection error");}
                    }} className="btn-primary w-full">Update Credentials</button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
