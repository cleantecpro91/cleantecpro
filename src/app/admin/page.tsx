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
  { id: "invoices", label: "Invoices", icon: "🧾" },
  { id: "pages", label: "CMS Pages", icon: "📄" },
  { id: "contacts", label: "Messages", icon: "✉️" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

type R = Record<string, unknown>;

function Badge({ color, children }: { color: string; children: React.ReactNode }) {
  const c: Record<string, string> = { green: "bg-green-100 text-green-700", red: "bg-red-100 text-red-700", amber: "bg-amber-100 text-amber-700", blue: "bg-blue-100 text-blue-700", purple: "bg-purple-100 text-purple-700" };
  return <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${c[color] || c.amber}`}>{children}</span>;
}

export default function AdminPage() {
  const [tab, setTab] = useState("dashboard");
  const [logged, setLogged] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [data, setData] = useState<R[] | R>([]);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState<R | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [fd, setFd] = useState<R>({});
  const [msg, setMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); setError("");
    try {
      const res = await fetch("/api/auth/admin-login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(loginForm) });
      if (res.ok) setLogged(true); else setError("Invalid credentials");
    } catch { setError("Connection error"); }
  };

  const apiMap: Record<string, string> = { faq: "faqs", pages: "pages", contacts: "contacts" };
  const endpoint = (t: string) => apiMap[t] || t;

  const fetchData = useCallback(async (t: string) => {
    if (t === "dashboard" || t === "settings") return;
    setLoading(true); setMsg("");
    try {
      const res = await fetch(`/api/admin/${endpoint(t)}`);
      if (res.ok) setData(await res.json());
    } catch { setData([]); }
    setLoading(false);
  }, []);

  useEffect(() => { if (logged) fetchData(tab); }, [tab, logged, fetchData]);

  const save = async (ep: string, method: string, body: R) => {
    setMsg("");
    try {
      const res = await fetch(`/api/admin/${ep}`, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (res.ok) { setMsg("✅ Saved!"); setShowForm(false); setEditItem(null); setFd({}); fetchData(tab); }
      else { const d = await res.json(); setMsg(`❌ ${d.error || "Error"}`); }
    } catch { setMsg("❌ Connection error"); }
  };

  const del = async (ep: string, id: string, extra?: R) => {
    if (!confirm("Delete this item?")) return;
    try {
      await fetch(`/api/admin/${ep}`, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, ...extra }) });
      setMsg("✅ Deleted"); fetchData(tab);
    } catch { setMsg("❌ Error"); }
  };

  const fmtDate = (d: unknown) => { try { return new Date(d as string).toLocaleDateString("en-AE", { day: "numeric", month: "short", year: "numeric" }); } catch { return "-"; } };
  const arr = Array.isArray(data) ? data : [];
  const F = (key: string, placeholder?: string, type?: string) => (<div key={key}><label className="form-label">{key.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase())}</label>{type === "textarea" ? <textarea className="form-input" rows={3} value={String(fd[key] || "")} onChange={e => setFd({ ...fd, [key]: e.target.value })} placeholder={placeholder} /> : <input className="form-input" type={type || "text"} value={String(fd[key] || "")} onChange={e => setFd({ ...fd, [key]: e.target.value })} placeholder={placeholder} />}</div>);
  const Btn = ({ onClick, children, primary }: { onClick: () => void; children: React.ReactNode; primary?: boolean }) => <button onClick={onClick} className={primary ? "btn-primary !text-xs !py-2 !px-3" : "btn-outline !text-xs !py-2 !px-3"}>{children}</button>;

  if (!logged) return (
    <section className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-6"><h1 className="text-2xl font-extrabold text-slate-900">Admin Panel</h1><p className="text-sm text-slate-500">Sign in to manage CleanTecPro</p></div>
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

  const FormWrap = ({ title, onSave, children }: { title: string; onSave: () => void; children: React.ReactNode }) => (
    <div className="mb-5 p-4 bg-slate-50 rounded-xl space-y-3">
      <h3 className="font-bold text-sm">{title}</h3>
      {children}
      <div className="flex gap-2"><Btn onClick={onSave} primary>Save</Btn><Btn onClick={() => { setShowForm(false); setFd({}); setEditItem(null); }}>Cancel</Btn></div>
    </div>
  );

  const ItemRow = ({ title, sub, extra, onEdit, onDelete }: { title: string; sub?: string; extra?: React.ReactNode; onEdit?: () => void; onDelete?: () => void }) => (
    <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
      <div className="flex-1 min-w-0"><p className="text-sm font-semibold truncate">{title}</p>{sub && <p className="text-xs text-slate-400 truncate">{sub}</p>}{extra}</div>
      <div className="flex gap-2 shrink-0 ml-3">{onEdit && <button onClick={onEdit} className="text-xs text-brand-600 hover:underline">Edit</button>}{onDelete && <button onClick={onDelete} className="text-xs text-red-500 hover:underline">Delete</button>}</div>
    </div>
  );

  return (
    <section className="py-6 min-h-screen bg-slate-50">
      <div className="container-main">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-extrabold text-slate-900">Admin Dashboard</h1>
          <button onClick={() => setLogged(false)} className="text-sm text-slate-500 hover:text-red-600">Sign Out</button>
        </div>
        {msg && <div className="mb-4 p-3 rounded-lg bg-brand-50 text-brand-700 text-sm font-medium">{msg}</div>}
        <div className="grid lg:grid-cols-6 gap-5">
          <div className="lg:col-span-1">
            <div className="premium-card p-2"><nav className="space-y-0.5">
              {TABS.map(t => (<button key={t.id} onClick={() => { setTab(t.id); setShowForm(false); setEditItem(null); setMsg(""); }} className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-medium text-left ${tab === t.id ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-50"}`}><span>{t.icon}</span>{t.label}</button>))}
            </nav></div>
          </div>
          <div className="lg:col-span-5">
            {loading && <p className="text-sm text-slate-400 mb-3">Loading...</p>}

            {/* DASHBOARD */}
            {tab === "dashboard" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[{ l: "Orders", t: "orders", i: "📦" }, { l: "Quotes", t: "quotes", i: "📋" }, { l: "Customers", t: "customers", i: "👥" }, { l: "Blog", t: "blog", i: "📝" }, { l: "Services", t: "services", i: "🔧" }, { l: "FAQs", t: "faq", i: "❓" }, { l: "Testimonials", t: "testimonials", i: "⭐" }, { l: "Messages", t: "contacts", i: "✉️" }].map(s => (
                    <button key={s.t} onClick={() => setTab(s.t)} className="premium-card p-4 text-left hover:border-brand-300">
                      <span className="text-2xl">{s.i}</span><p className="text-xs text-slate-500 mt-2">{s.l}</p><p className="text-[10px] text-brand-600 mt-1">Manage →</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ORDERS */}
            {tab === "orders" && (
              <div className="premium-card p-5 space-y-3">
                <h2 className="text-lg font-bold">Orders ({arr.length})</h2>
                {arr.length === 0 ? <p className="text-sm text-slate-400">No orders yet.</p> : arr.map((o: R) => (
                  <div key={String(o.id)} className="border border-slate-200 rounded-xl p-4">
                    <div className="flex justify-between mb-2">
                      <div><p className="font-bold text-sm">{String(o.orderNumber)}</p><p className="text-xs text-slate-400">{String(o.customerName)} · {String(o.customerPhone)} · {String(o.customerEmail)}</p></div>
                      <div className="text-right"><Badge color={o.orderStatus === "completed" ? "green" : o.orderStatus === "cancelled" ? "red" : "amber"}>{String(o.orderStatus)}</Badge><p className="text-xs text-slate-400 mt-1">{fmtDate(o.createdAt)}</p></div>
                    </div>
                    <p className="text-sm">Service: <strong>{String(o.serviceName)}</strong> · Payment: <Badge color={o.paymentStatus === "paid" ? "green" : "amber"}>{String(o.paymentStatus)}</Badge></p>
                    {o.vendorName ? <p className="text-xs text-green-600 mt-1">Vendor: {String(o.vendorName)} ({String(o.vendorPhone)})</p> : null}
                    {editItem?.id === o.id ? (
                      <div className="mt-3 p-3 bg-slate-50 rounded-lg space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                          <div><label className="text-xs font-semibold">Order Status</label><select className="form-select !text-sm !py-1.5" value={String(fd.orderStatus || o.orderStatus)} onChange={e => setFd({ ...fd, orderStatus: e.target.value })}><option value="pending">Pending</option><option value="confirmed">Confirmed</option><option value="assigned">Assigned</option><option value="in_progress">In Progress</option><option value="completed">Completed</option><option value="cancelled">Cancelled</option></select></div>
                          <div><label className="text-xs font-semibold">Payment</label><select className="form-select !text-sm !py-1.5" value={String(fd.paymentStatus || o.paymentStatus)} onChange={e => setFd({ ...fd, paymentStatus: e.target.value })}><option value="pending">Pending</option><option value="paid">Paid</option><option value="awaiting_transfer">Awaiting Transfer</option><option value="refunded">Refunded</option></select></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {F("vendorName", "Vendor name")}{F("vendorPhone", "Vendor phone")}
                        </div>
                        {F("adminNotes", "Internal notes", "textarea")}
                        <div className="flex gap-2"><Btn onClick={() => save("orders", "PUT", { id: o.id, ...fd })} primary>Save</Btn><Btn onClick={() => { setEditItem(null); setFd({}); }}>Cancel</Btn></div>
                      </div>
                    ) : <button onClick={() => { setEditItem(o); setFd({}); }} className="text-xs text-brand-600 hover:underline mt-2">Edit / Assign Vendor ✏️</button>}
                  </div>
                ))}
              </div>
            )}

            {/* QUOTES */}
            {tab === "quotes" && (
              <div className="premium-card p-5 space-y-3">
                <h2 className="text-lg font-bold">Quotes ({arr.length})</h2>
                {arr.length === 0 ? <p className="text-sm text-slate-400">No quotes yet.</p> : arr.map((q: R) => (
                  <div key={String(q.id)} className="border border-slate-200 rounded-xl p-4">
                    <div className="flex justify-between mb-2">
                      <div><p className="font-bold text-sm">{String(q.quoteNumber)}</p><p className="text-xs text-slate-400">{String(q.customerName)} · {String(q.customerPhone)} · {String(q.customerEmail)}</p></div>
                      <Badge color={q.status === "responded" ? "green" : "amber"}>{String(q.status)}</Badge>
                    </div>
                    <p className="text-sm">Service: <strong>{String(q.serviceName)}</strong> · {String(q.emirate)} · {String(q.propertyType)}</p>
                    <p className="text-xs text-slate-400 mt-1">{String(q.description)}</p>
                    {editItem?.id === q.id ? (
                      <div className="mt-3 p-3 bg-slate-50 rounded-lg space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                          <div><label className="text-xs font-semibold">Status</label><select className="form-select !text-sm !py-1.5" value={String(fd.status || q.status)} onChange={e => setFd({ ...fd, status: e.target.value })}><option value="pending">Pending</option><option value="reviewed">Reviewed</option><option value="responded">Responded</option><option value="accepted">Accepted</option><option value="declined">Declined</option></select></div>
                          {F("quotedAmount", "AED")}
                        </div>
                        {F("adminResponse", "Response to customer", "textarea")}
                        {F("adminNotes", "Internal notes", "textarea")}
                        <div className="flex gap-2"><Btn onClick={() => save("quotes", "PUT", { id: q.id, ...fd })} primary>Save</Btn><Btn onClick={() => { setEditItem(null); setFd({}); }}>Cancel</Btn></div>
                      </div>
                    ) : <button onClick={() => { setEditItem(q); setFd({}); }} className="text-xs text-brand-600 hover:underline mt-2">Respond ✏️</button>}
                  </div>
                ))}
              </div>
            )}

            {/* CUSTOMERS */}
            {tab === "customers" && (
              <div className="premium-card p-5">
                <h2 className="text-lg font-bold mb-4">Customers ({arr.length})</h2>
                {arr.length === 0 ? <p className="text-sm text-slate-400">No customers yet.</p> : (
                  <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b text-left"><th className="py-2 px-3 text-xs text-slate-500">Name</th><th className="py-2 px-3 text-xs text-slate-500">Email</th><th className="py-2 px-3 text-xs text-slate-500">Phone</th><th className="py-2 px-3 text-xs text-slate-500">Joined</th></tr></thead>
                  <tbody>{arr.map((c: R) => (<tr key={String(c.id)} className="border-b border-slate-100"><td className="py-2 px-3 font-medium">{String(c.firstName)} {String(c.lastName)}</td><td className="py-2 px-3 text-slate-500">{String(c.email)}</td><td className="py-2 px-3 text-slate-500">{String(c.phone)}</td><td className="py-2 px-3 text-xs text-slate-400">{fmtDate(c.createdAt)}</td></tr>))}</tbody></table></div>
                )}
              </div>
            )}

            {/* SERVICES */}
            {tab === "services" && (
              <div className="premium-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">Services ({arr.length})</h2>
                  <Btn onClick={() => { setShowForm(true); setEditItem(null); setFd({ name: "", slug: "", categoryId: "", shortDescription: "", startingPrice: "", metaTitle: "", metaDescription: "" }); }} primary>+ New Service</Btn>
                </div>
                {showForm && <FormWrap title={editItem ? "Edit Service" : "New Service"} onSave={() => save("services", editItem ? "PUT" : "POST", editItem ? { id: editItem.id, ...fd } : fd)}>
                  <div className="grid sm:grid-cols-2 gap-3">{F("name", "Service name")}{F("slug", "url-slug")}</div>
                  <div className="grid sm:grid-cols-2 gap-3">{F("categoryId", "Category ID")}{F("startingPrice", "e.g. 199")}</div>
                  {F("shortDescription", "Brief description", "textarea")}
                  {F("description", "Full description (HTML)", "textarea")}
                  <div className="grid sm:grid-cols-2 gap-3">{F("metaTitle", "SEO Title")}{F("metaDescription", "SEO Description")}</div>
                </FormWrap>}
                <div className="space-y-2">{arr.map((s: R) => (
                  <ItemRow key={String(s.id)} title={String(s.name)} sub={`Slug: ${String(s.slug)} · Price: AED ${String(s.startingPrice || "N/A")} · ${s.isActive ? "Active" : "Inactive"}`}
                    onEdit={() => { setEditItem(s); setFd({ name: s.name, slug: s.slug, categoryId: s.categoryId, shortDescription: s.shortDescription || "", startingPrice: s.startingPrice || "", description: s.description || "", metaTitle: s.metaTitle || "", metaDescription: s.metaDescription || "" }); setShowForm(true); }}
                    onDelete={() => del("services", String(s.id))} />
                ))}</div>
              </div>
            )}

            {/* CATEGORIES */}
            {tab === "categories" && (() => { const d = data as R; const cats = (d.categories || []) as R[]; const subs = (d.subcategories || []) as R[]; return (
              <div className="premium-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">Categories ({cats.length}) & Subcategories ({subs.length})</h2>
                  <div className="flex gap-2">
                    <Btn onClick={() => { setShowForm(true); setFd({ type: "category", name: "", slug: "", description: "", icon: "" }); }} primary>+ Category</Btn>
                    <Btn onClick={() => { setShowForm(true); setFd({ type: "subcategory", name: "", slug: "", categoryId: "", description: "" }); }}>+ Subcategory</Btn>
                  </div>
                </div>
                {showForm && <FormWrap title={fd.type === "subcategory" ? "New Subcategory" : "New Category"} onSave={() => save("categories", "POST", fd)}>
                  <div className="grid sm:grid-cols-2 gap-3">{F("name", "Category name")}{F("slug", "url-slug")}</div>
                  {fd.type === "subcategory" && F("categoryId", "Parent Category ID")}
                  {F("description", "Description", "textarea")}
                  {fd.type !== "subcategory" && F("icon", "Emoji icon e.g. 🧹")}
                </FormWrap>}
                <h3 className="font-bold text-sm mb-2 mt-4">Categories</h3>
                <div className="space-y-2 mb-5">{cats.map((c: R) => <ItemRow key={String(c.id)} title={`${String(c.icon || "")} ${String(c.name)}`} sub={`Slug: ${String(c.slug)} · ID: ${String(c.id).substring(0, 8)}...`} onDelete={() => del("categories", String(c.id), { type: "category" })} />)}</div>
                <h3 className="font-bold text-sm mb-2">Subcategories</h3>
                <div className="space-y-2">{subs.map((s: R) => <ItemRow key={String(s.id)} title={String(s.name)} sub={`Slug: ${String(s.slug)} · Category: ${String(s.categoryId).substring(0, 8)}...`} onDelete={() => del("categories", String(s.id), { type: "subcategory" })} />)}</div>
              </div>
            ); })()}

            {/* LOCATIONS */}
            {tab === "locations" && (() => { const d = data as R; const ems = (d.emirates || []) as R[]; const cts = (d.cities || []) as R[]; const ars = (d.areas || []) as R[]; return (
              <div className="premium-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">Emirates ({ems.length}) · Cities ({cts.length}) · Areas ({ars.length})</h2>
                  <div className="flex gap-2">
                    <Btn onClick={() => { setShowForm(true); setFd({ type: "emirate", name: "", slug: "", description: "" }); }} primary>+ Emirate</Btn>
                    <Btn onClick={() => { setShowForm(true); setFd({ type: "city", name: "", slug: "", emirateId: "", description: "" }); }}>+ City</Btn>
                  </div>
                </div>
                {showForm && <FormWrap title={`New ${String(fd.type)}`} onSave={() => save("locations", "POST", fd)}>
                  <div className="grid sm:grid-cols-2 gap-3">{F("name")}{F("slug")}</div>
                  {fd.type === "city" && F("emirateId", "Emirate ID")}
                  {fd.type === "area" && F("cityId", "City ID")}
                  {F("description", "Description", "textarea")}
                </FormWrap>}
                <h3 className="font-bold text-sm mb-2">Emirates</h3>
                <div className="space-y-2 mb-5">{ems.map((e: R) => <ItemRow key={String(e.id)} title={String(e.name)} sub={`Slug: ${String(e.slug)} · ID: ${String(e.id).substring(0, 8)}...`} onDelete={() => del("locations", String(e.id), { type: "emirate" })} />)}</div>
                <h3 className="font-bold text-sm mb-2">Cities ({cts.length})</h3>
                <div className="space-y-2">{cts.slice(0, 20).map((c: R) => <ItemRow key={String(c.id)} title={String(c.name)} sub={`Slug: ${String(c.slug)}`} onDelete={() => del("locations", String(c.id), { type: "city" })} />)}{cts.length > 20 && <p className="text-xs text-slate-400">...and {cts.length - 20} more</p>}</div>
              </div>
            ); })()}

            {/* BLOG */}
            {tab === "blog" && (
              <div className="premium-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">Blog Posts ({arr.length})</h2>
                  <Btn onClick={() => { setShowForm(true); setEditItem(null); setFd({ title: "", slug: "", excerpt: "", content: "", category: "General", isPublished: false }); }} primary>+ New Post</Btn>
                </div>
                {showForm && <FormWrap title={editItem ? "Edit Post" : "New Post"} onSave={() => save("blog", editItem ? "PUT" : "POST", editItem ? { id: editItem.id, ...fd } : fd)}>
                  <div className="grid sm:grid-cols-2 gap-3">{F("title", "Post title")}{F("slug", "url-slug")}</div>
                  {F("excerpt", "Short excerpt")}
                  {F("content", "Content (HTML)", "textarea")}
                  <div className="grid sm:grid-cols-2 gap-3">{F("category", "Category")}
                  <div className="flex items-end pb-1"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={!!fd.isPublished} onChange={e => setFd({ ...fd, isPublished: e.target.checked })} /><span className="text-sm">Published</span></label></div></div>
                </FormWrap>}
                <div className="space-y-2">{arr.map((p: R) => <ItemRow key={String(p.id)} title={String(p.title)} sub={`${String(p.category)} · ${p.isPublished ? "✅ Published" : "📝 Draft"} · ${fmtDate(p.createdAt)}`}
                  onEdit={() => { setEditItem(p); setFd({ title: p.title, slug: p.slug, excerpt: p.excerpt || "", content: p.content, category: p.category || "", isPublished: p.isPublished }); setShowForm(true); }} onDelete={() => del("blog", String(p.id))} />)}</div>
              </div>
            )}

            {/* FAQs */}
            {tab === "faq" && (
              <div className="premium-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">FAQs ({arr.length})</h2>
                  <Btn onClick={() => { setShowForm(true); setEditItem(null); setFd({ question: "", answer: "", category: "general" }); }} primary>+ New FAQ</Btn>
                </div>
                {showForm && <FormWrap title={editItem ? "Edit FAQ" : "New FAQ"} onSave={() => save("faqs", editItem ? "PUT" : "POST", editItem ? { id: editItem.id, ...fd } : fd)}>
                  {F("question", "Question")}{F("answer", "Answer", "textarea")}{F("category", "Category (booking, payment, etc.)")}
                </FormWrap>}
                <div className="space-y-2">{arr.map((f: R) => <ItemRow key={String(f.id)} title={String(f.question)} sub={String(f.answer).substring(0, 80) + "..."}
                  onEdit={() => { setEditItem(f); setFd({ question: f.question, answer: f.answer, category: f.category || "" }); setShowForm(true); }} onDelete={() => del("faqs", String(f.id))} />)}</div>
              </div>
            )}

            {/* TESTIMONIALS */}
            {tab === "testimonials" && (
              <div className="premium-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">Testimonials ({arr.length})</h2>
                  <Btn onClick={() => { setShowForm(true); setFd({ customerName: "", customerLocation: "", rating: 5, content: "", serviceName: "" }); }} primary>+ New</Btn>
                </div>
                {showForm && <FormWrap title="New Testimonial" onSave={() => save("testimonials", "POST", fd)}>
                  <div className="grid sm:grid-cols-2 gap-3">{F("customerName", "Customer name")}{F("customerLocation", "Location")}</div>
                  <div className="grid sm:grid-cols-2 gap-3"><div><label className="form-label">Rating</label><select className="form-select" value={String(fd.rating || 5)} onChange={e => setFd({ ...fd, rating: Number(e.target.value) })}><option value={5}>5 Stars</option><option value={4}>4 Stars</option><option value={3}>3 Stars</option></select></div>{F("serviceName", "Service")}</div>
                  {F("content", "Review text", "textarea")}
                </FormWrap>}
                <div className="space-y-2">{arr.map((t: R) => <ItemRow key={String(t.id)} title={`${String(t.customerName)} ${"★".repeat(t.rating as number)}`} sub={String(t.content).substring(0, 80) + "..."} onDelete={() => del("testimonials", String(t.id))} />)}</div>
              </div>
            )}

            {/* INVOICES */}
            {tab === "invoices" && (
              <div className="premium-card p-5">
                <h2 className="text-lg font-bold mb-4">Invoices ({arr.length})</h2>
                {arr.length === 0 ? <p className="text-sm text-slate-400">No invoices yet. Invoices are created when orders are confirmed.</p> : arr.map((inv: R) => (
                  <div key={String(inv.id)} className="border border-slate-200 rounded-lg p-3 mb-2">
                    <div className="flex justify-between"><p className="text-sm font-semibold">{String(inv.invoiceNumber)}</p><Badge color={inv.status === "paid" ? "green" : "amber"}>{String(inv.status)}</Badge></div>
                    <p className="text-xs text-slate-400">Amount: AED {String(inv.total)} · {fmtDate(inv.createdAt)}</p>
                    {editItem?.id === inv.id ? (
                      <div className="mt-2 flex gap-2 items-center">
                        <select className="form-select !text-xs !py-1 !w-32" value={String(fd.status || inv.status)} onChange={e => setFd({ status: e.target.value })}><option value="pending">Pending</option><option value="paid">Paid</option><option value="cancelled">Cancelled</option></select>
                        <Btn onClick={() => save("invoices", "PUT", { id: inv.id, ...fd })} primary>Save</Btn><Btn onClick={() => setEditItem(null)}>Cancel</Btn>
                      </div>
                    ) : <button onClick={() => { setEditItem(inv); setFd({}); }} className="text-xs text-brand-600 hover:underline mt-1">Update Status</button>}
                  </div>
                ))}
              </div>
            )}

            {/* CMS PAGES */}
            {tab === "pages" && (
              <div className="premium-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">CMS Pages ({arr.length})</h2>
                  <Btn onClick={() => { setShowForm(true); setEditItem(null); setFd({ title: "", slug: "", content: "", metaTitle: "", metaDescription: "", isPublished: true }); }} primary>+ New Page</Btn>
                </div>
                {showForm && <FormWrap title={editItem ? "Edit Page" : "New Page"} onSave={() => save("pages", editItem ? "PUT" : "POST", editItem ? { id: editItem.id, ...fd } : fd)}>
                  <div className="grid sm:grid-cols-2 gap-3">{F("title", "Page title")}{F("slug", "url-slug")}</div>
                  {F("content", "Page content (HTML)", "textarea")}
                  <div className="grid sm:grid-cols-2 gap-3">{F("metaTitle", "SEO Title")}{F("metaDescription", "SEO Description")}</div>
                  <label className="flex items-center gap-2"><input type="checkbox" checked={!!fd.isPublished} onChange={e => setFd({ ...fd, isPublished: e.target.checked })} /><span className="text-sm">Published</span></label>
                </FormWrap>}
                <div className="space-y-2">{arr.map((p: R) => <ItemRow key={String(p.id)} title={String(p.title)} sub={`/${String(p.slug)} · ${p.isPublished ? "Published" : "Draft"}`}
                  onEdit={() => { setEditItem(p); setFd({ title: p.title, slug: p.slug, content: p.content || "", metaTitle: p.metaTitle || "", metaDescription: p.metaDescription || "", isPublished: p.isPublished }); setShowForm(true); }} onDelete={() => del("pages", String(p.id))} />)}</div>
              </div>
            )}

            {/* CONTACT MESSAGES */}
            {tab === "contacts" && (
              <div className="premium-card p-5">
                <h2 className="text-lg font-bold mb-4">Contact Messages ({arr.length})</h2>
                {arr.length === 0 ? <p className="text-sm text-slate-400">No messages yet.</p> : arr.map((c: R) => (
                  <div key={String(c.id)} className="border border-slate-200 rounded-lg p-4 mb-2">
                    <div className="flex justify-between mb-1"><p className="text-sm font-semibold">{String(c.name)}</p><p className="text-xs text-slate-400">{fmtDate(c.createdAt)}</p></div>
                    <p className="text-xs text-slate-400">{String(c.email)} · {String(c.phone || "")}</p>
                    {c.subject ? <p className="text-xs text-slate-500 mt-1 font-medium">Subject: {String(c.subject)}</p> : null}
                    <p className="text-sm text-slate-600 mt-2">{String(c.message)}</p>
                  </div>
                ))}
              </div>
            )}

            {/* SETTINGS */}
            {tab === "settings" && (
              <div className="premium-card p-6">
                <h2 className="text-lg font-bold mb-4">Settings</h2>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-2">Platform Info</h3>
                    <p>Brand: CleanTecPro</p><p>Full Name: CleanTech Professional Technical And Cleaning Services</p><p>Phone: 0544410488</p><p>Email: support@cleantecpro.com</p><p>Address: Cyan Centre 202, Business Bay, Dubai, UAE</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-2">Technical</h3>
                    <p>Framework: Next.js 16 (App Router)</p><p>Database: PostgreSQL (Neon)</p><p>ORM: Drizzle</p><p>Hosting: Vercel</p><p>Domain: www.cleantecpro.com</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-2">Admin Account</h3>
                    <p>Email: admin@cleantecpro.com</p>
                    <p className="text-xs text-slate-400 mt-2">To change password, contact developer.</p>
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
