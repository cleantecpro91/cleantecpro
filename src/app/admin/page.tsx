"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const TABS = [
  { id: "dashboard", label: "Dashboard", icon: "📊" },
  { id: "orders", label: "Orders", icon: "📦" },
  { id: "quotes", label: "Quotes", icon: "📋" },
  { id: "customers", label: "Customers", icon: "👥" },
  { id: "services", label: "Services", icon: "🔧" },
  { id: "categories", label: "Categories", icon: "📂" },
  { id: "locations", label: "Locations", icon: "📍" },
  { id: "invoices", label: "Invoices", icon: "🧾" },
  { id: "blog", label: "Blog Posts", icon: "📝" },
  { id: "faq", label: "FAQs", icon: "❓" },
  { id: "testimonials", label: "Testimonials", icon: "⭐" },
  { id: "contacts", label: "Inbox Msgs", icon: "✉️" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

type AnyRecord = Record<string, unknown>;

export default function AdminPage() {
  const [tab, setTab] = useState("dashboard");
  const [logged, setLogged] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // DB Data stores
  const [orders, setOrders] = useState<AnyRecord[]>([]);
  const [quotes, setQuotes] = useState<AnyRecord[]>([]);
  const [customers, setCustomers] = useState<AnyRecord[]>([]);
  const [services, setServices] = useState<AnyRecord[]>([]);
  const [categories, setCategories] = useState<AnyRecord[]>([]);
  const [subcategories, setSubcategories] = useState<AnyRecord[]>([]);
  const [emirates, setEmirates] = useState<AnyRecord[]>([]);
  const [cities, setCities] = useState<AnyRecord[]>([]);
  const [invoices, setInvoices] = useState<AnyRecord[]>([]);
  const [blogs, setBlogs] = useState<AnyRecord[]>([]);
  const [faqs, setFaqs] = useState<AnyRecord[]>([]);
  const [testimonials, setTestimonials] = useState<AnyRecord[]>([]);
  const [contacts, setContacts] = useState<AnyRecord[]>([]);

  // Form & Editing state
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState<AnyRecord | null>(null);
  const [formData, setFormData] = useState<AnyRecord>({});
  
  const [pwForm, setPwForm] = useState({
    currentEmail: "",
    currentPassword: "",
    newEmail: "",
    newPassword: "",
  });

  // Handle Admin Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      });
      if (res.ok) {
        setLogged(true);
        fetchAllData();
      } else {
        const errorData = await res.json().catch(() => ({}));
        setError(errorData.error || "Invalid admin credentials");
      }
    } catch {
      setError("Connection error. Is the server running?");
    } finally {
      setLoading(false);
    }
  };

  // Fetch functions for tabs
  const fetchOrders = async () => { try { const r = await fetch("/api/admin/orders"); if (r.ok) setOrders(await r.json()); } catch {} };
  const fetchQuotes = async () => { try { const r = await fetch("/api/admin/quotes"); if (r.ok) setQuotes(await r.json()); } catch {} };
  const fetchCustomers = async () => { try { const r = await fetch("/api/admin/customers"); if (r.ok) setCustomers(await r.json()); } catch {} };
  const fetchServices = async () => { try { const r = await fetch("/api/admin/services"); if (r.ok) setServices(await r.json()); } catch {} };
  const fetchCategories = async () => { try { const r = await fetch("/api/admin/categories"); if (r.ok) { const d = await r.json(); setCategories(d.categories || []); setSubcategories(d.subcategories || []); }} catch {} };
  const fetchLocations = async () => { try { const r = await fetch("/api/admin/locations"); if (r.ok) { const d = await r.json(); setEmirates(d.emirates || []); setCities(d.cities || []); }} catch {} };
  const fetchInvoices = async () => { try { const r = await fetch("/api/admin/invoices"); if (r.ok) setInvoices(await r.json()); } catch {} };
  const fetchBlogs = async () => { try { const r = await fetch("/api/admin/blog"); if (r.ok) setBlogs(await r.json()); } catch {} };
  const fetchFaqs = async () => { try { const r = await fetch("/api/admin/faqs"); if (r.ok) setFaqs(await r.json()); } catch {} };
  const fetchTestimonials = async () => { try { const r = await fetch("/api/admin/testimonials"); if (r.ok) setTestimonials(await r.json()); } catch {} };
  const fetchContacts = async () => { try { const r = await fetch("/api/admin/contacts"); if (r.ok) setContacts(await r.json()); } catch {} };

  const fetchAllData = useCallback(async () => {
    setLoading(true);
    await Promise.all([fetchOrders(), fetchQuotes(), fetchCustomers(), fetchServices(), fetchCategories(), fetchLocations(), fetchInvoices(), fetchBlogs(), fetchFaqs(), fetchTestimonials(), fetchContacts()]);
    setLoading(false);
  }, []);

  useEffect(() => { if (logged) { fetchAllData(); } }, [logged, fetchAllData]);

  const handleSave = async (endpoint: string, method: "POST" | "PUT", body: AnyRecord, successMsg = "Saved!") => {
    setMsg("");
    try {
      const res = await fetch(`/api/admin/${endpoint}`, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (res.ok) {
        setMsg(`✅ ${successMsg}`);
        setShowForm(false); setEditItem(null); setFormData({});
        const refreshMap: Record<string, () => void> = { orders: fetchOrders, quotes: fetchQuotes, customers: fetchCustomers, services: fetchServices, categories: fetchCategories, locations: fetchLocations, invoices: fetchInvoices, blog: fetchBlogs, faqs: fetchFaqs, testimonials: fetchTestimonials, contacts: fetchContacts };
        if (refreshMap[endpoint]) refreshMap[endpoint]();
      } else { const err = await res.json().catch(() => ({})); setMsg(`❌ ${err.error}`); }
    } catch { setMsg("❌ Network error"); }
  };

  const handleDelete = async (endpoint: string, id: string, extraBody: AnyRecord = {}) => {
    if (!confirm("Are you sure?")) return;
    setMsg("");
    try {
      const res = await fetch(`/api/admin/${endpoint}`, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, ...extraBody }) });
      if (res.ok) { setMsg("✅ Deleted!"); const rm: Record<string,()=>void> = { services:fetchServices,categories:fetchCategories,locations:fetchLocations,blog:fetchBlogs,faqs:fetchFaqs,testimonials:fetchTestimonials,customers:fetchCustomers }; if(rm[endpoint])rm[endpoint](); }
      else setMsg("❌ Error");
    } catch { setMsg("❌ Error"); }
  };

  const stats = useMemo(() => {
    const rev = orders.filter(o => o.paymentStatus === "paid" || o.orderStatus === "completed").reduce((a:any, c:any) => a + parseFloat(c.total||"0"),0);
    return { oc:orders.length, qc:quotes.length, cc:customers.length, rev:rev.toLocaleString("en-AE",{style:"currency",currency:"AED"})};
  },[orders,quotes,customers]);

  const fmtDate = (d: any) => { try { return new Date(d).toLocaleDateString("en-AE",{day:"numeric",month:"short",year:"numeric"}); } catch{return "-";} };

  // ════════════ LOGIN SCREEN ════════════
  if (!logged) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center py-12 px-4 bg-slate-50">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <Link href="/" className="inline-block mb-3">
              <Image src="/logo.png" alt="CleanTecPro Logo" width={180} height={60} className="h-14 w-auto object-contain mx-auto"/>
            </Link>
            <h1 className="text-2xl font-extrabold text-slate-900">Admin Panel</h1>
            <p className="text-sm text-slate-500 mt-1">Sign in to manage your platform</p>
          </div>

          <div className="premium-card p-6 shadow-lg">
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (<div className="bg-red-50 text-red-700 text-sm p-3 rounded-xl border border-red-200">{error}</div>)}
              <div><label className="form-label font-semibold text-slate-700">Email Address</label><input type="email" required className="form-input" value={loginForm.email} onChange={e=>setLoginForm({...loginForm,email:e.target.value})} placeholder="admin@cleantecpro.com"/></div>
              <div><label className="form-label font-semibold text-slate-700">Password</label><input type="password" required className="form-input" value={loginForm.password} onChange={e=>setLoginForm({...loginForm,password:e.target.value})} placeholder="••••••••"/></div>
              
              {/* ✅ Forgot Password for Admin */}
              <div className="text-right"><Link href="/auth/forgot-password?mode=admin" className="text-sm text-brand-600 hover:text-brand-800 font-semibold hover:underline">Forgot Password?</Link></div>
              
              <button type="submit" disabled={loading} className="btn-primary w-full !py-3 disabled:opacity-60 text-base">{loading?"Signing in...":"Sign In"}</button>
            </form>
            <div className="mt-5 pt-4 border-t border-slate-100 text-center text-sm">
              <Link href="/" className="text-brand-600 font-bold hover:text-brand-800 hover:underline">← Return to Website</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ════════════ MAIN DASHBOARD ════════════
  return (
    <section className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      
      {/* SIDEBAR - Light Theme with Brand Colors */}
      <aside className="w-full lg:w-[260px] bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 shadow-sm min-h-screen">
        <div>
          <div className="p-4 border-b border-slate-100 flex items-center gap-2.5">
            <Image src="/logo.png" alt="CleanTecPro" width={120} height={40} className="h-9 w-auto object-contain"/>
          </div>
          <nav className="p-2 space-y-0.5">
            {TABS.map(t=>(
              <button key={t.id} onClick={()=>{setTab(t.id);setShowForm(false);setEditItem(null);setFormData({});setMsg("");}}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all ${tab===t.id?"bg-brand-50 text-brand-800 border border-brand-200 shadow-sm":"text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}>
                <span className="flex items-center gap-2"><span>{t.icon}</span>{t.label}</span>
                {(t.id==="orders"&&orders.filter((o:AnyRecord)=>o.orderStatus==="pending").length>0)&&(<span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">{orders.filter((o:AnyRecord)=>o.orderStatus==="pending").length}</span>)}
                {(t.id==="quotes"&&quotes.filter((q:AnyRecord)=>q.status==="pending").length>0)&&(<span className="bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">{quotes.filter((q:AnyRecord)=>q.status==="pending").length}</span>)}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-semibold">support@cleantecpro.com</span>
          <button onClick={()=>{setLogged(false);setMsg("");}} className="text-xs text-red-600 font-bold px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors">Logout</button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
        
        {/* Header Bar */}
        <header className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
          <div>
            <h1 className="text-2xl font-black text-slate-900 capitalize">{tab==="dashboard"?"Dashboard Overview":`${tab} Management`}</h1>
            <p className="text-xs text-slate-400 mt-0.5">CleanTecPro Admin Control Panel</p>
          </div>
          <div className="flex gap-2">
            <button onClick={fetchAllData} className="px-3 py-2 bg-white border border-slate-200 text-xs font-bold text-slate-700 rounded-xl hover:bg-slate-50 shadow-sm">🔄 Refresh</button>
            <a href="/update.zip" download className="px-3 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow inline-flex items-center gap-1.5">📥 Download ZIP</a>
          </div>
        </header>

        {msg&&(<div className="mb-5 p-3.5 rounded-xl bg-brand-50 border border-brand-200 text-brand-800 text-sm font-semibold flex items-center justify-between"><span>{msg}</span><button onClick={()=>setMsg("")} className="text-xs font-bold uppercase hover:text-brand-600 pl-3">Dismiss</button></div>)}

        {/* ====== DASHBOARD TAB ====== */}
        {tab==="dashboard"&&(
          <div className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[{l:"Total Orders",v:stats.oc,i:"📦",c:"border-l-4 border-l-blue-500 bg-blue-50/40"},{l:"Quote Requests",v:stats.qc,i:"📋",c:"border-l-4 border-l-amber-500 bg-amber-50/40"},{l:"Customers",v:stats.cc,i:"👥",c:"border-l-4 border-l-emerald-500 bg-emerald-50/40"},{l:"Revenue",v:stats.rev,i:"💰",c:"border-l-4 border-l-purple-500 bg-purple-50/40"}].map((s,idx)=>(
                <div key={idx} className={`premium-card p-5 ${s.c}`}><div className="flex justify-between mb-2"><span className="text-xs font-bold text-slate-500 uppercase">{s.l}</span><span className="text-lg">{s.i}</span></div><div className="text-2xl font-black text-slate-800">{s.v}</div></div>
              ))}
            </div>

            <div className="premium-card p-6">
              <h2 className="text-base font-bold text-slate-900 mb-4">⚡ Quick Actions</h2>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {[["📦","Orders","orders"],["📋","Quotes","quotes"],["👥","Customers","customers"],["🔧","Services","services"],["🧾","Invoices","invoices"],["⚙️","Settings","settings"]].map(([i,l,t]:any[])=>(
                  <button key={String(t)} onClick={()=>setTab(String(t))} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-left hover:border-brand-200 hover:bg-brand-50/30 transition-all group"><span className="text-lg block mb-1 group-hover:scale-110 transition-transform">{i}</span><span className="text-xs font-bold text-slate-600 group-hover:text-brand-700">{l}</span></button>
                ))}
              </div>
              {services.length===0&&(<button onClick={async()=>{setMsg("⏳ Seeding...");const r=await fetch("/api/admin/seed-data?key=setup2025cleantecpro");if(r.ok){setMsg("✅ Seeded! Refresh.");fetchAllData()}else setMsg("❌ Failed")}} className="mt-5 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md">🌱 Seed Sample Data</button>)}
            </div>
          </div>
        )}

        {/* ====== ORDERS TAB ====== */}
        {tab==="orders"&&(
          <div className="premium-card p-6 space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Orders ({orders.length})</h2>
            {loading?(<p className="text-sm text-slate-400 py-8 text-center">Loading...</p>):
            orders.length===0?(<p className="text-sm text-slate-400 py-8 text-center">No orders yet.</p>):(
              <div className="space-y-3">
                {orders.map((o:AnyRecord)=>(
                  <div key={o.id as string} className="p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div><span className="font-mono font-bold text-brand-700">{o.orderNumber as string}</span><span className="text-xs text-slate-500 ml-2">{o.customerName as string} · {o.customerPhone as string}</span></div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${(o.orderStatus==="completed")?"bg-green-100 text-green-700 border border-green-200":(o.orderStatus==="cancelled")?"bg-red-100 text-red-700 border border-red-200":"bg-amber-100 text-amber-700 border border-amber-200"}`}>{o.orderStatus as string}</span>
                    </div>
                    <p className="text-sm text-slate-600">Service: <strong>{o.serviceName as string}</strong> · Total: <strong className="text-brand-700">AED {o.total as string}</strong></p>
                    {editItem?.id===o.id?(
                      <div className="mt-2 p-4 bg-white border border-slate-200 rounded-xl space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div><label className="text-[11px] font-bold text-slate-500 uppercase block">Order Status</label><select className="form-select mt-1" value={(formData.orderStatus as string)||""} onChange={e=>setFormData({...formData,orderStatus:e.target.value})}><option>Pending</option><option>Confirmed</option><option>Assigned</option><option>In Progress</option><option>Completed</option><option>Cancelled</option></select></div>
                          <div><label className="text-[11px] font-bold text-slate-500 uppercase block">Payment Status</label><select className="form-select mt-1" value={(formData.paymentStatus as string)||""} onChange={e=>setFormData({...formData,paymentStatus:e.target.value})}><option>Pending</option><option>Paid</option><option>Awaiting Transfer</option><option>Refunded</option></select></div>
                          <div><label className="text-[11px] font-bold text-slate-500 uppercase block">Vendor Name</label><input className="form-input mt-1" value={(formData.vendorName as string)||""} onChange={e=>setFormData({...formData,vendorName:e.target.value})}/></div>
                          <div><label className="text-[11px] font-bold text-slate-500 uppercase block">Vendor Phone</label><input className="form-input mt-1" value={(formData.vendorPhone as string)||""} onChange={e=>setFormData({...formData,vendorPhone:e.target.value})}/></div>
                        </div>
                        <div><label className="text-[11px] font-bold text-slate-500 uppercase block">Admin Notes</label><textarea className="form-input mt-1" rows={2} value={(formData.adminNotes as string)||""} onChange={e=>setFormData({...formData,adminNotes:e.target.value})}/></div>
                        <div className="flex gap-2"><button onClick={()=>handleSave("orders","PUT",{id:o.id,...formData},"Updated!")} className="btn-primary !py-2 !text-xs !px-4">Save</button><button onClick={()=>{setEditItem(null);setFormData({});}} className="btn-outline !py-2 !text-xs !px-4">Cancel</button></div>
                      </div>
                    ):(
                      <button onClick={()=>{setEditItem(o);setFormData({});}} className="btn-outline !py-1.5 !text-xs !px-4 w-fit">✏️ Edit / Assign Vendor</button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ====== QUOTES TAB ====== */}
        {tab==="quotes"&&(
          <div className="premium-card p-6 space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Quote Requests ({quotes.length})</h2>
            <div className="space-y-3">
              {quotes.map((q:AnyRecord)=>(
                <div key={q.id as string} className="p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div><span className="font-mono font-bold text-indigo-700">{q.quoteNumber as string}</span><span className="text-xs text-slate-500 ml-2">{q.customerName as string} · {q.customerPhone as string}</span></div>
                    <span className={`self-start text-xs px-2.5 py-1 rounded-full font-bold ${(q.status==="responded")?"bg-green-100 text-green-700 border border-green-200":"bg-amber-100 text-amber-700 border border-amber-200"}`}>{q.status as string}</span>
                  </div>
                  <p className="text-sm text-slate-600">Service: <strong>{q.serviceName as string}</strong> | Area: {q.emirate as string}, {q.city as string}</p>
                  <p className="text-xs text-slate-500 italic bg-white p-2 rounded-lg border border-slate-100">{q.description as string}</p>
                  {editItem?.id===q.id?(
                    <div className="mt-2 p-4 bg-white border border-slate-200 rounded-xl space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div><label className="text-[11px] font-bold text-slate-500 uppercase block">Status</label><select className="form-select mt-1" value={(formData.status as string)||""} onChange={e=>setFormData({...formData,status:e.target.value})}><option>Pending</option><option>Reviewed</option><option>Responded</option><option>Accepted</option><option>Declined</option></select></div>
                        <div><label className="text-[11px] font-bold text-slate-500 uppercase block">Amount (AED)</label><input type="number" className="form-input mt-1" value={(formData.quotedAmount as string)||""} onChange={e=>setFormData({...formData,quotedAmount:e.target.value})}/></div>
                      </div>
                      <div><label className="text-[11px] font-bold text-slate-500 uppercase block">Response</label><textarea className="form-input mt-1" rows={2} value={(formData.adminResponse as string)||""} onChange={e=>setFormData({...formData,adminResponse:e.target.value})}/></div>
                      <div className="flex gap-2"><button onClick={()=>handleSave("quotes","PUT",{id:q.id,...formData},"Responded!")} className="btn-primary !py-2 !text-xs !px-4">Submit</button><button onClick={()=>{setEditItem(null);setFormData({});}} className="btn-outline !py-2 !text-xs !px-4">Cancel</button></div>
                    </div>
                  ):(
                    <button onClick={()=>{setEditItem(q);setFormData({});}} className="btn-outline !py-1.5 !text-xs !px-4 w-fit">✍️ Respond / Set Price</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ====== CUSTOMERS TAB ====== */}
        {tab==="customers"&&(
          <div className="premium-card p-6 space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Customers ({customers.length})</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm"><thead><tr className="border-b border-slate-200 text-left"><th className="py-3 px-3 text-xs font-bold text-slate-500 uppercase">Customer</th><th className="py-3 px-3 text-xs font-bold text-slate-500 uppercase">Email / Phone</th><th className="py-3 px-3 text-xs font-bold text-slate-500 uppercase">Status</th><th className="py-3 px-3 text-xs font-bold text-slate-500 uppercase">Joined</th><th className="py-3 px-3 text-right text-xs font-bold text-slate-500 uppercase">Actions</th></tr></thead>
                <tbody className="divide-y divide-slate-100">
                  {customers.map((c:AnyRecord)=>(
                    <tr key={c.id as string} className="hover:bg-slate-50/50">
                      <td className="py-3 px-3"><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xs">{(c.firstName as string)?.[0]}{(c.lastName as string)?.[0]}</div><span className="font-semibold text-slate-800">{c.firstName as string} {c.lastName as string}</span></div></td>
                      <td className="py-3 px-3 text-xs text-slate-500">{c.email as string}<br/>{(c.phone as string)||"-"}</td>
                      <td className="py-3 px-3"><span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-bold ${(c.isActive as boolean)?"bg-green-100 text-green-700 border border-green-200":"bg-slate-200 text-slate-600 border border-slate-300"}`}>{(c.isActive as boolean)?<><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Active</>:<><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>Paused</>}</span></td>
                      <td className="py-3 px-3 text-xs text-slate-400">{fmtDate(c.createdAt)}</td>
                      <td className="py-3 px-3 text-right gap-1.5 flex justify-end">
                        <button onClick={()=>handleSave("customers","PUT",{id:c.id,isActive:!(c.isActive as boolean)},(c.isActive as boolean)?"Paused!":"Activated!")} className="text-xs font-bold text-brand-700 hover:bg-brand-50 px-2 py-1 rounded-lg">{(c.isActive as boolean)?"Pause":"Activate"}</button>
                        <button onClick={()=>handleDelete("customers",c.id as string)} className="text-xs font-bold text-red-600 hover:bg-red-50 px-2 py-1 rounded-lg">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ====== SERVICES TAB ====== */}
        {tab==="services"&&(
          <div className="premium-card p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-slate-900">Services ({services.length})</h2>
              <button onClick={()=>{setShowForm(true);setEditItem(null);setFormData({name:"",slug:"",categoryId:(categories[0]?.id as string)||"",subcategoryId:"",startingPrice:"150",priceUnit:"per service",shortDescription:"",description:"",isActive:true,isFeatured:false});}} className="btn-primary !py-2 !text-xs !px-4">➕ Add New Service</button>
            </div>
            {showForm&&(
              <div className="p-5 bg-slate-50 border border-slate-150 rounded-xl space-y-3">
                <h3 className="text-sm font-bold text-slate-800">{editItem?"Edit Service":"New Service"}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><label className="form-label text-xs">Name *</label><input required className="form-input" value={(formData.name as string)||""} onChange={e=>{const s=e.target.value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");setFormData({...formData,name:e.target.value,slug:s});}}/></div>
                  <div><label className="form-label text-xs">Slug *</label><input required className="form-input" value={(formData.slug as string)||""} onChange={e=>setFormData({...formData,slug:e.target.value})}/></div>
                  <div><label className="form-label text-xs">Category *</label><select className="form-select" value={(formData.categoryId as string)||""} onChange={e=>setFormData({...formData,categoryId:e.target.value})}><option>-- Choose --</option>{categories.map((c:AnyRecord)=><option key={c.id as string} value={c.id as string}>{c.name as string}</option>)}</select></div>
                  <div><label className="form-label text-xs">Price (AED)</label><input type="number" className="form-input" value={(formData.startingPrice as string)||""} onChange={e=>setFormData({...formData,startingPrice:e.target.value})}/></div>
                </div>
                <div><label className="form-label text-xs">Short Description</label><input className="form-input" value={(formData.shortDescription as string)||""} onChange={e=>setFormData({...formData,shortDescription:e.target.value})}/></div>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold"><input type="checkbox" checked={String(formData.isActive)!="false"} onChange={e=>setFormData({...formData,isActive:e.target.checked})}/>Active</label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold"><input type="checkbox" checked={(formData.isFeatured as boolean)||false} onChange={e=>setFormData({...formData,isFeatured:e.target.checked})}/>Featured</label>
                </div>
                <div className="flex gap-2"><button onClick={()=>handleSave("services",editItem?"PUT":"POST",editItem?{id:editItem.id,...formData}:formData,"Service saved!")} className="btn-primary !py-2 !text-xs">Save Service</button><button onClick={()=>{setShowForm(false);setFormData({});}} className="btn-outline !py-2 !text-xs">Cancel</button></div>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((s:AnyRecord)=>(
                <div key={s.id as string} className="p-4 bg-slate-50 border border-slate-150 rounded-xl flex items-center justify-between gap-3">
                  <div><p className="font-bold text-sm text-slate-800">{s.name as string}<span className="text-[10px] text-slate-400 ml-1.5">/{s.slug as string}</span></p><p className="text-xs text-slate-500">AED <strong className="text-brand-700">{s.startingPrice as string}</strong> · {(s.priceUnit as string)||"service"} · {(s.isActive as boolean)?"✅ Active":"⛔ Inactive"}</p></div>
                  <div className="flex gap-1.5 shrink-0">
                    <button onClick={()=>{setEditItem(s);setFormData({...s});setShowForm(true);window.scrollTo({top:0,behavior:"smooth"});}} className="text-xs font-bold text-brand-700 hover:bg-brand-50 px-2 py-1 rounded-lg">Edit</button>
                    <button onClick={()=>handleDelete("services",s.id as string)} className="text-xs font-bold text-red-600 hover:bg-red-50 px-2 py-1 rounded-lg">Del</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ====== CATEGORIES TAB ====== */}
        {tab==="categories"&&(
          <div className="premium-card p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-slate-900">Categories ({categories.length}) & Subcategories ({subcategories.length})</h2>
              <div className="flex gap-2">
                <button onClick={()=>{setShowForm(true);setEditItem(null);setFormData({type:"category",name:"",slug:"",description:"",icon:"✨",isActive:true});}} className="btn-primary !py-2 !text-xs !px-3">+ Category</button>
                <button onClick={()=>{setShowForm(true);setEditItem(null);setFormData({type:"subcategory",categoryId:(categories[0]?.id as string)||"",name:"",slug:"",description:"",isActive:true});}} className="btn-outline !py-2 !text-xs !px-3">+ Subcategory</button>
              </div>
            </div>
            {showForm&&(
              <div className="p-5 bg-slate-50 border border-slate-150 rounded-xl space-y-3">
                <h3 className="text-sm font-bold text-slate-800">{editItem?"Edit "+((formData.type as string)==="subcategory"?"Subcategory":"Category"):"New "+((formData.type as string)==="subcategory"?"Subcategory":"Category")}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><label className="form-label text-xs">Name *</label><input required className="form-input" value={(formData.name as string)||""} onChange={e=>{const s=e.target.value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");setFormData({...formData,name:e.target.value,slug:s});}}/></div>
                  <div><label className="form-label text-xs">Slug *</label><input required className="form-input" value={(formData.slug as string)||""} onChange={e=>setFormData({...formData,slug:e.target.value})}/></div>
                  {(formData.type as string)==="subcategory"?(
                    <div><label className="form-label text-xs">Parent Category *</label><select className="form-select" value={(formData.categoryId as string)||""} onChange={e=>setFormData({...formData,categoryId:e.target.value})}>{categories.map((c:AnyRecord)=><option key={c.id as string} value={c.id as string}>{c.name as string}</option>)}</select></div>
                  ):(<div><label className="form-label text-xs">Icon</label><input className="form-input" value={(formData.icon as string)||""} onChange={e=>setFormData({...formData,icon:e.target.value})} placeholder="🧹"/></div>)}
                </div>
                <div><label className="form-label text-xs">Description</label><textarea className="form-input" rows={2} value={(formData.description as string)||""} onChange={e=>setFormData({...formData,description:e.target.value})}/></div>
                <div className="flex gap-2"><button onClick={()=>handleSave("categories",editItem?"PUT":"POST",editItem?{id:editItem.id,...formData}:formData,"Saved!")} className="btn-primary !py-2 !text-xs">Save</button><button onClick={()=>{setShowForm(false);setFormData({});}} className="btn-outline !py-2 !text-xs">Cancel</button></div>
              </div>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold text-slate-700 mb-2 pb-1 border-b border-slate-150">Categories</h4>
                <div className="space-y-1.5">{categories.map((c:AnyRecord)=>(
                  <div key={c.id as string} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg text-sm"><span><span className="mr-1.5 text-base">{(c.icon as string)||"📂"}</span><strong>{c.name as string}</strong> <span className="text-slate-400 text-xs">/{c.slug as string}</span></span>
                    <div className="flex gap-1.5">
                      <button onClick={()=>{setEditItem(c);setFormData({type:"category",...c});setShowForm(true);}} className="text-xs font-bold text-brand-700 hover:bg-brand-50 px-1.5 py-0.5 rounded">Edit</button>
                      <button onClick={()=>handleDelete("categories",c.id as string, {type:"category"})} className="text-xs font-bold text-red-600 hover:bg-red-50 px-1.5 py-0.5 rounded">Del</button>
                    </div>
                  </div>
                ))}{categories.length===0&&<p className="text-xs text-slate-400 p-2">No categories</p>}</div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-700 mb-2 pb-1 border-b border-slate-150">Subcategories</h4>
                <div className="space-y-1.5">{subcategories.map((s:AnyRecord)=>{
                  const parent=(categories.find((c:AnyRecord)=>c.id===s.categoryId)?.name as string)||"?";
                  return(<div key={s.id as string} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg text-sm"><span><strong>{s.name as string}</strong> <span className="text-[10px] bg-brand-50 text-brand-700 px-1.5 py-0.5 rounded font-bold">{parent}</span></span>
                    <div className="flex gap-1.5">
                      <button onClick={()=>{setEditItem(s);setFormData({type:"subcategory",...s});setShowForm(true);}} className="text-xs font-bold text-brand-700 hover:bg-brand-50 px-1.5 py-0.5 rounded">Edit</button>
                      <button onClick={()=>handleDelete("categories",s.id as string, {type:"subcategory"})} className="text-xs font-bold text-red-600 hover:bg-red-50 px-1.5 py-0.5 rounded">Del</button>
                    </div>
                  </div>);
                })}{subcategories.length===0&&<p className="text-xs text-slate-400 p-2">No subcategories</p>}</div>
              </div>
            </div>
          </div>
        )}

        {/* ====== LOCATIONS TAB ====== */}
        {tab==="locations"&&(
          <div className="premium-card p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-slate-900">Locations: Emirates ({emirates.length}) · Cities ({cities.length})</h2>
              <div className="flex gap-2">
                <button onClick={()=>{setShowForm(true);setEditItem(null);setFormData({type:"emirate",name:"",slug:"",isPrimary:false,isActive:true});}} className="btn-primary !py-2 !text-xs !px-3">+ Emirate</button>
                <button onClick={()=>{setShowForm(true);setEditItem(null);setFormData({type:"city",emirateId:(emirates[0]?.id as string)||"",name:"",slug:"",isActive:true});}} className="btn-outline !py-2 !text-xs !px-3">+ City</button>
              </div>
            </div>
            {showForm&&(
              <div className="p-5 bg-slate-50 border border-slate-150 rounded-xl space-y-3">
                <h3 className="text-sm font-bold text-slate-800">New Location Entry</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><label className="form-label text-xs">Name *</label><input required className="form-input" value={(formData.name as string)||""} onChange={e=>{const s=e.target.value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");setFormData({...formData,name:e.target.value,slug:s});}}/></div>
                  <div><label className="form-label text-xs">Slug *</label><input required className="form-input" value={(formData.slug as string)||""} onChange={e=>setFormData({...formData,slug:e.target.value})}/></div>
                  {(formData.type as string)==="city"?(
                    <div><label className="form-label text-xs">Parent Emirate *</label><select className="form-select" value={(formData.emirateId as string)||""} onChange={e=>setFormData({...formData,emirateId:e.target.value})}>{emirates.map((e:AnyRecord)=><option key={e.id as string} value={e.id as string}>{e.name as string}</option>)}</select></div>
                  ):null}
                </div>
                <div className="flex gap-2"><button onClick={()=>handleSave("locations",editItem?"PUT":"POST",editItem?{id:editItem.id,...formData}:formData,"Location saved!")} className="btn-primary !py-2 !text-xs">Save</button><button onClick={()=>{setShowForm(false);setFormData({});}} className="btn-outline !py-2 !text-xs">Cancel</button></div>
              </div>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold text-slate-700 mb-2 pb-1 border-b border-slate-150">Emirates</h4>
                <div className="space-y-1.5">{emirates.map((e:AnyRecord)=>(
                  <div key={e.id as string} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg text-sm"><span><strong>{e.name as string}</strong> {(e.isPrimary as boolean)&&<span className="text-[10px] bg-brand-100 text-brand-700 px-1.5 py-0.5 rounded font-bold ml-1.5">Primary</span>} <span className="text-slate-400 text-xs">/{e.slug as string}</span></span>
                    <div className="flex gap-1.5">
                      <button onClick={()=>{setEditItem(e);setFormData({type:"emirate",...e});setShowForm(true);}} className="text-xs font-bold text-brand-700 hover:bg-brand-50 px-1.5 py-0.5 rounded">Edit</button>
                      <button onClick={()=>handleDelete("locations",e.id as string, {type:"emirate"})} className="text-xs font-bold text-red-600 hover:bg-red-50 px-1.5 py-0.5 rounded">Del</button>
                    </div>
                  </div>
                ))}</div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-700 mb-2 pb-1 border-b border-slate-150">Cities</h4>
                <div className="space-y-1.5">{cities.map((ci:AnyRecord)=>{
                  const em=(emirates.find((e:AnyRecord)=>e.id===ci.emirateId)?.name as string)||"?";
                  return(<div key={ci.id as string} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg text-sm"><span><strong>{ci.name as string}</strong> <span className="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-bold ml-1.5">{em}</span> <span className="text-slate-400 text-xs">/{ci.slug as string}</span></span>
                    <div className="flex gap-1.5">
                      <button onClick={()=>{setEditItem(ci);setFormData({type:"city",...ci});setShowForm(true);}} className="text-xs font-bold text-brand-700 hover:bg-brand-50 px-1.5 py-0.5 rounded">Edit</button>
                      <button onClick={()=>handleDelete("locations",ci.id as string, {type:"city"})} className="text-xs font-bold text-red-600 hover:bg-red-50 px-1.5 py-0.5 rounded">Del</button>
                    </div>
                  </div>);
                })}</div>
              </div>
            </div>
          </div>
        )}

        {/* ====== INVOICES TAB ====== */}
        {tab==="invoices"&&(
          <div className="premium-card p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-slate-900">Invoices ({invoices.length})</h2>
              <button onClick={()=>{setShowForm(true);setEditItem(null);setFormData({invoiceNumber:`INV-${Date.now().toString().slice(-7)}`,orderId:(orders[0]?.id as string)||"",userId:(customers[0]?.id as string)||"",amount:"250",tax:"12.50",total:"262.50",status:"pending",notes:""});}} className="btn-primary !py-2 !text-xs !px-4">➕ Create Invoice</button>
            </div>
            {showForm&&(
              <div className="p-5 bg-slate-50 border border-slate-150 rounded-xl space-y-3">
                <h3 className="text-sm font-bold text-slate-800">Create Invoice Receipt</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><label className="form-label text-xs">Invoice # *</label><input className="form-input" value={(formData.invoiceNumber as string)||""} onChange={e=>setFormData({...formData,invoiceNumber:e.target.value})}/></div>
                  <div><label className="form-label text-xs">Status *</label><select className="form-select" value={(formData.status as string)||"pending"} onChange={e=>setFormData({...formData,status:e.target.value})}><option>Pending</option><option>Paid</option><option>Refunded</option></select></div>
                  <div><label className="form-label text-xs">Linked Order</label><select className="form-select" value={(formData.orderId as string)||""} onChange={e=>{const o=orders.find(x=>x.id===e.target.value);setFormData({...formData,orderId:e.target.value,userId:o?.userId||(formData.userId as string),total:o?.total||(formData.total as string),amount:o?.total||(formData.amount as string)});}}>
                    <option>-- Select Order --</option>{orders.map((o:AnyRecord)=><option key={o.id as string} value={o.id as string}>{o.orderNumber as string} (AED{o.total as string}) {o.customerName as string}</option>)}</select></div>
                  <div><label className="form-label textxs">Customer</label><select className="form-select" value={(formData.userId as string)||""} onChange={e=>setFormData({...formData,userId:e.target.value})}>
                    <option>-- Select --</option>{customers.map((c:AnyRecord)=><option key={c.id as string} value={c.id as string}>{c.firstName as string} {c.lastName as string}</option>)}</select></div>
                  <div><label className="form-label text-xs">Base Amount (AED) *</label><input type="number" className="form-input" value={(formData.amount as string)||""} onChange={e=>{const b=parseFloat(e.target.value)||0;setFormData({...formData,amount:e.target.value,tax:(b*0.05).toFixed(2),total:(b*1.05).toFixed(2)})}}/></div>
                  <div><label className="form-label text-xs">Total (AED) *</label><input type="number" className="form-input" value={(formData.total as string)||""} onChange={e=>setFormData({...formData,total:e.target.value})}/></div>
                </div>
                <div><label className="form-label text-xs">Notes</label><textarea className="form-input" rows={2} value={(formData.notes as string)||""} onChange={e=>setFormData({...formData,notes:e.target.value})}/></div>
                <div className="flex gap-2"><button onClick={()=>handleSave("invoices","POST",formData,"Invoice created!")} className="btn-primary !py-2 !text-xs">Generate Invoice</button><button onClick={()=>{setShowForm(false);setFormData({});}} className="btn-outline !py-2 !text-xs">Cancel</button></div>
              </div>
            )}
            <div className="overflow-x-auto">
              <table className="w-full text-sm"><thead><tr className="border-b border-slate-200 text-left"><th className="py-2.5 px-3 text-xs font-bold text-slate-500 uppercase">#</th><th className="py-2.5 px-3 text-xs font-bold text-slate-500 uppercase">Client</th><th className="py-2.5 px-3 text-xs font-bold text-slate-500 uppercase">Total</th><th className="py-2.5 px-3 text-xs font-bold text-slate-500 uppercase">Status</th><th className="py-2.5 px-3 text-right text-xs font-bold text-slate-500 uppercase">Action</th></tr></thead>
                <tbody className="divide-y divide-slate-100">
                  {invoices.map((inv:AnyRecord)=>{
                    const client=customers.find((c:AnyRecord)=>c.id===inv.userId);
                    return(<tr key={inv.id as string} className="hover:bg-slate-50/50">
                      <td className="py-2.5 px-3 font-mono text-brand-700 font-bold text-xs">{inv.invoiceNumber as string}</td>
                      <td className="py-2.5 px-3 text-xs">{client?`${client.firstName as string} ${client.lastName as string}`:"Deleted"}<span className="block text-[10px] text-slate-400">{(client?.email as string)||""}</span></td>
                      <td className="py-2.5 px-3 font-bold text-slate-800">AED {parseFloat(inv.total as string).toFixed(2)}</td>
                      <td className="py-2.5 px-3"><span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${(inv.status as string)==="paid"?"bg-green-100 text-green-700":"bg-amber-100 text-amber-700"}`}>{inv.status as string}</span></td>
                      <td className="py-2.5 px-3 text-right">{editItem?.id===inv.id?(<>
                        <select className="form-select !text-xs !py-1 inline mr-1" value={(formData.status as string)||(inv.status as string)} onChange={e=>setFormData({...formData,status:e.target.value})}><option>Pending</option><option>Paid</option><option>Refunded</option></select>
                        <button onClick={()=>handleSave("invoices","PUT",{id:inv.id,...formData},"Updated!")} className="btn-primary !py-1 !text-[10px] !px-2 inline">Save</button>
                      </>):(<button onClick={()=>{setEditItem(inv);setFormData({...inv});}} className="text-xs font-bold text-brand-700 hover:bg-brand-50 px-2 py-1 rounded-lg">Edit Status</button>)}</td>
                    </tr>);
                  })}
                  {invoices.length===0&&<tr><td colSpan={5} className="py-8 text-center text-slate-400 text-sm">No invoices</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ====== BLOG TAB ====== */}
        {tab==="blog"&&(
          <div className="premium-card p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-slate-900">Blog Posts ({blogs.length})</h2>
              <button onClick={()=>{setShowForm(true);setEditItem(null);setFormData({title:"",slug:"",excerpt:"",content:"",category:"General Tips",isPublished:true});}} className="btn-primary !py-2 !text-xs !px-4">+ New Post</button>
            </div>
            {showForm&&(
              <div className="p-5 bg-slate-50 border border-slate-150 rounded-xl space-y-3">
                <h3 className="text-sm font-bold text-slate-800">{editItem?"Edit Post":"New Blog Post"}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><label className="form-label text-xs">Title *</label><input className="form-input" value={(formData.title as string)||""} onChange={e=>{const s=e.target.value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");setFormData({...formData,title:e.target.value,slug:s});}}/></div>
                  <div><label className="form-label text-xs">Slug *</label><input className="form-input" value={(formData.slug as string)||""} onChange={e=>setFormData({...formData,slug:e.target.value})}/></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><label className="form-label text-xs">Category</label><input className="form-input" value={(formData.category as string)||""} onChange={e=>setFormData({...formData,category:e.target.value})}/></div>
                  <div className="flex items-end pb-1"><label className="flex items-center gap-2 cursor-pointer text-xs font-semibold"><input type="checkbox" defaultChecked={formData.isPublished ? true : false} onChange={e=>setFormData({ ...formData, isPublished: e.target.checked })} /><span>Published</span></label></div>
                </div>
                <div><label className="form-label text-xs">Excerpt</label><input className="form-input" value={(formData.excerpt as string)||""} onChange={e=>setFormData({...formData,excerpt:e.target.value})}/></div>
                <div><label className="form-label text-xs">Content (HTML supported) *</label><textarea className="form-input font-mono text-xs" rows={6} value={(formData.content as string)||""} onChange={e=>setFormData({...formData,content:e.target.value})}/></div>
                <div className="flex gap-2"><button onClick={()=>handleSave("blog",editItem?"PUT":"POST",editItem?{id:editItem.id,...formData}:formData,"Post saved!")} className="btn-primary !py-2 !text-xs">Save Post</button><button onClick={()=>{setShowForm(false);setFormData({});}} className="btn-outline !py-2 !text-xs">Cancel</button></div>
              </div>
            )}
            <div className="space-y-2">
              {blogs.map((p:AnyRecord)=>(
                <div key={p.id as string} className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-150 rounded-xl">
                  <div><p className="font-bold text-sm text-slate-800">{p.title as string}</p><p className="text-[11px] text-slate-500">{(p.category as string)||"General"} · {(p.isPublished as boolean)?"✅ Published":"📝 Draft"} · {fmtDate(p.createdAt)}</p></div>
                  <div className="flex gap-1.5 shrink-0">
                    <button onClick={()=>{setEditItem(p);setFormData({title:p.title,slug:p.slug,excerpt:p.excerpt,content:p.content,category:p.category||"",isPublished:p.isPublished});setShowForm(true)}} className="text-xs font-bold text-brand-700 hover:bg-brand-50 px-2 py-1 rounded-lg">Edit</button>
                    <button onClick={()=>handleDelete("blog",p.id as string)} className="text-xs font-bold text-red-600 hover:bg-red-50 px-2 py-1 rounded-lg">Delete</button>
                  </div>
                </div>
              ))}
              {blogs.length===0&&<p className="text-sm text-slate-400 py-4 text-center">No posts.</p>}
            </div>
          </div>
        )}

        {/* ====== FAQ TAB ====== */}
        {tab==="faq"&&(
          <div className="premium-card p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-slate-900">FAQs ({faqs.length})</h2>
              <button onClick={()=>{setShowForm(true);setEditItem(null);setFormData({question:"",answer:"",category:"general"});}} className="btn-primary !py-2 !text-xs !px-4">+ New FAQ</button>
            </div>
            {showForm&&(
              <div className="p-5 bg-slate-50 border border-slate-150 rounded-xl space-y-3">
                <div><label className="form-label text-xs">Question *</label><input className="form-input" value={(formData.question as string)||""} onChange={e=>setFormData({...formData,question:e.target.value})}/></div>
                <div><label className="form-label text-xs">Answer *</label><textarea className="form-input" rows={3} value={(formData.answer as string)||""} onChange={e=>setFormData({...formData,answer:e.target.value})}/></div>
                <div><label className="form-label text-xs">Category</label><input className="form-input" value={(formData.category as string)||""} onChange={e=>setFormData({...formData,category:e.target.value})} placeholder="booking/payment/quality"/></div>
                <div className="flex gap-2"><button onClick={()=>handleSave("faqs",editItem?"PUT":"POST",editItem?{id:editItem.id,...formData}:formData,"FAQ saved!")} className="btn-primary !py-2 !text-xs">Save FAQ</button><button onClick={()=>{setShowForm(false);setFormData({});}} className="btn-outline !py-2 !text-xs">Cancel</button></div>
              </div>
            )}
            <div className="space-y-2">
              {faqs.map((f:AnyRecord)=>(
                <div key={f.id as string} className="p-3.5 bg-slate-50 border border-slate-150 rounded-xl">
                  <p className="font-bold text-sm text-slate-800">{f.question as string}</p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{(f.answer as string).substring(0,150)}...</p>
                  <div className="flex gap-1.5 mt-2">
                    <button onClick={()=>{setEditItem(f);setFormData({question:f.question,answer:f.answer,category:f.category||""});setShowForm(true)}} className="text-xs font-bold text-brand-700 hover:bg-brand-50 px-2 py-1 rounded-lg">Edit</button>
                    <button onClick={()=>handleDelete("faqs",f.id as string)} className="text-xs font-bold text-red-600 hover:bg-red-50 px-2 py-1 rounded-lg">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ====== TESTIMONIALS TAB ====== */}
        {tab==="testimonials"&&(
          <div className="premium-card p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-slate-900">Testimonials ({testimonials.length})</h2>
              <button onClick={()=>{setShowForm(true);setEditItem(null);setFormData({customerName:"",customerLocation:"Dubai, UAE",rating:5,content:"",serviceName:""});}} className="btn-primary !py-2 !text-xs !px-4">+ Add Testimonial</button>
            </div>
            {showForm&&(
              <div className="p-5 bg-slate-50 border border-slate-150 rounded-xl space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><label className="form-label text-xs">Customer Name *</label><input className="form-input" value={(formData.customerName as string)||""} onChange={e=>setFormData({...formData,customerName:e.target.value})}/></div>
                  <div><label className="form-label text-xs">Location</label><input className="form-input" value={(formData.customerLocation as string)||""} onChange={e=>setFormData({...formData,customerLocation:e.target.value})} placeholder="Business Bay, Dubai"/></div>
                  <div><label className="form-label text-xs">Rating *</label><select className="form-select" value={String(formData.rating||5)} onChange={e=>setFormData({...formData,rating:Number(e.target.value)})}><option value="5">⭐⭐⭐⭐⭐ 5 Stars</option><option value="4">⭐⭐⭐⭐ 4 Stars</option><option value="3">⭐⭐⭐ 3 Stars</option></select></div>
                  <div><label className="form-label text-xs">Service Name</label><input className="form-input" value={(formData.serviceName as string)||""} onChange={e=>setFormData({...formData,serviceName:e.target.value})}/></div>
                </div>
                <div><label className="form-label text-xs">Review Content *</label><textarea className="form-input" rows={3} value={(formData.content as string)||""} onChange={e=>setFormData({...formData,content:e.target.value})}/></div>
                <div className="flex gap-2"><button onClick={()=>handleSave("testimonials","POST",formData,"Testimonial added!")} className="btn-primary !py-2 !text-xs">Save</button><button onClick={()=>{setShowForm(false);setFormData({});}} className="btn-outline !py-2 !text-xs">Cancel</button></div>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {testimonials.map((t:AnyRecord)=>(
                <div key={t.id as string} className="p-4 bg-slate-50 border border-slate-150 rounded-xl flex flex-col justify-between">
                  <div><p className="font-bold text-sm text-slate-800">{t.customerName as string} <span className="text-slate-400 font-normal text-xs">· {t.customerLocation as string}</span></p>
                    <p className="text-amber-500 text-xs font-bold mt-0.5">{"★".repeat((t.rating as number)||5)}</p>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{t.content as string}</p></div>
                  <div className="flex justify-end pt-2 mt-2 border-t border-slate-100">
                    <button onClick={()=>handleDelete("testimonials",t.id as string)} className="text-xs font-bold text-red-600 hover:bg-red-50 px-2 py-1 rounded-lg">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ====== CONTACTS (INBOX) TAB ====== */}
        {tab==="contacts"&&(
          <div className="premium-card p-6 space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Contact Inbox Messages ({contacts.length})</h2>
            <div className="space-y-3">
              {contacts.map((c:AnyRecord)=>(
                <div key={c.id as string} className="p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-2">
                  <div className="flex justify-between items-start gap-3"><div><p className="font-bold text-sm text-slate-800">{c.name as string}</p><p className="text-xs text-slate-500">{c.email as string} · {(c.phone as string)||"no phone"}</p></div><p className="text-[11px] text-slate-400 font-mono whitespace-nowrap">{fmtDate(c.createdAt)}</p></div>
                  {(c.subject as string)&&( <p className="text-xs font-bold text-slate-600">Subject: {c.subject as string}</p>)}
                  <p className="text-sm text-slate-600 bg-white p-2 rounded-lg border border-slate-100">{c.message as string}</p>
                </div>
              ))}
              {contacts.length===0&&<p className="text-sm text-slate-400 py-6 text-center">No messages yet.</p>}
            </div>
          </div>
        )}

        {/* ====== SETTINGS TAB ====== */}
        {tab==="settings"&&(
          <div className="premium-card p-6 space-y-5 max-w-xl">
            <h2 className="text-lg font-bold text-slate-900">Admin Settings</h2>
            <div className="p-5 bg-slate-50 border border-slate-150 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-slate-700">Change Email &amp; Password</h3>
              <div className="space-y-3 text-sm">
                <div><label className="form-label text-xs font-semibold text-slate-600">Current Email *</label><input type="email" className="form-input" value={pwForm.currentEmail} onChange={e=>setPwForm({...pwForm,currentEmail:e.target.value})} placeholder="admin@cleantecpro.com"/></div>
                <div><label className="form-label text-xs font-semibold text-slate-600">Current Password *</label><input type="password" className="form-input" value={pwForm.currentPassword} onChange={e=>setPwForm({...pwForm,currentPassword:e.target.value})}/></div>
                <hr className="border-slate-200"/>
                <div><label className="form-label text-xs font-semibold text-slate-500">New Email (optional)</label><input type="email" className="form-input" value={pwForm.newEmail} onChange={e=>setPwForm({...pwForm,newEmail:e.target.value})}/></div>
                <div><label className="form-label text-xs font-semibold text-slate-500">New Password (min 6 chars)</label><input type="password" className="form-input" value={pwForm.newPassword} onChange={e=>setPwForm({...pwForm,newPassword:e.target.value})}/></div>
                <button onClick={async()=>{
                  setMsg("");if(!pwForm.currentEmail||!pwForm.currentPassword){setMsg("❌ Current email & password required!");return;}
                  if(!pwForm.newEmail&&!pwForm.newPassword){setMsg("❌ Enter new email or password!");return;}
                  try{const r=await fetch("/api/admin/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(pwForm)});
                  const d=await r.json();if(r.ok){setMsg("✅ "+(d.message||"Credentials updated!"));setPwForm({currentEmail:"",currentPassword:"",newEmail:"",newPassword:""});}
                  else setMsg("❌ "+(d.error||"Failed"));}catch{setMsg("❌ Connection error");}
                }} className="btn-primary w-full !py-3 text-sm">Update Credentials</button>
              </div>
            </div>
          </div>
        )}

      </main>
    </section>
  );
}
