import { useState } from "react";
import { Book, PencilSquare, FileText, Search, Plus, Filter, ThreeDotsVertical, Eye } from "react-bootstrap-icons";

export function AdminContentPage() {
  const content = [
    { id: "B001", title: "The Art of Stoic Breathing", category: "Blog", status: "Published", views: "1.2k", date: "April 12, 2026" },
    { id: "R001", title: "Anxiety Toolkit v2.0", category: "Resource", status: "Active", views: "850", date: "March 28, 2026" },
    { id: "B002", title: "Navigating Career Transitions", category: "Blog", status: "Draft", views: "0", date: "April 20, 2026" },
    { id: "R002", title: "Sleep Hygiene Protocol", category: "Resource", status: "Active", views: "2.4k", date: "Feb 15, 2026" },
  ];

  return (
    <div className="animate-in fade-in duration-700 portal-context pb-20 space-y-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 px-2">
         <div>
            <h1 className="text-3xl lg:text-5xl font-black text-sage-dark font-serif uppercase tracking-tight">Curated Sanctuary</h1>
            <p className="text-sage-dark/40 text-[11px] font-black uppercase tracking-[0.4em] mt-2">Manage library & insights</p>
         </div>
         
         <div className="flex items-center gap-4">
            <button className="bg-sage text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 shadow-xl hover:bg-sage-dark transition-all">
               <Plus size={18} /> New Asset
            </button>
         </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white p-10 rounded-[48px] shadow-premium border border-sage/5 flex items-center justify-between group hover:border-sage transition-all">
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 bg-cream rounded-[24px] flex items-center justify-center text-sage">
                  <PencilSquare size={28} />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-sage-dark font-serif uppercase tracking-tight">Insights Blog</h3>
                  <p className="text-[10px] font-black text-sage-dark/30 uppercase tracking-widest mt-1">12 Articles Published</p>
               </div>
            </div>
            <button className="w-12 h-12 bg-cream text-sage rounded-2xl flex items-center justify-center group-hover:bg-sage group-hover:text-white transition-all"><Eye size={20} /></button>
         </div>

         <div className="bg-white p-10 rounded-[48px] shadow-premium border border-sage/5 flex items-center justify-between group hover:border-sage transition-all">
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 bg-cream rounded-[24px] flex items-center justify-center text-gold">
                  <Book size={28} />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-sage-dark font-serif uppercase tracking-tight">Resource Library</h3>
                  <p className="text-[10px] font-black text-sage-dark/30 uppercase tracking-widest mt-1">34 Tools & PDFs Available</p>
               </div>
            </div>
            <button className="w-12 h-12 bg-cream text-gold rounded-2xl flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all"><Eye size={20} /></button>
         </div>
      </div>

      {/* Content List */}
      <div className="bg-white rounded-[48px] overflow-hidden shadow-premium border border-sage/5">
         <div className="p-8 border-b border-sage/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h3 className="text-xl font-bold text-sage-dark font-serif uppercase tracking-tight">All Assets</h3>
            <div className="flex items-center gap-4">
               <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-dark/30" size={16} />
                  <input type="text" placeholder="Search assets..." className="bg-cream/50 border border-sage/5 rounded-2xl pl-12 pr-6 py-3 text-[10px] font-bold uppercase tracking-widest outline-none w-64" />
               </div>
               <button className="p-3 bg-white border border-sage/10 rounded-2xl text-sage-dark"><Filter size={16} /></button>
            </div>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-cream/20">
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Asset Title</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Classification</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Engagement</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Status</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Date</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-sage/5">
                  {content.map((item) => (
                     <tr key={item.id} className="hover:bg-cream/10 transition-colors">
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-cream rounded-xl flex items-center justify-center text-sage shadow-sm">
                                 <FileText size={18} />
                              </div>
                              <span className="text-sm font-bold text-sage-dark uppercase tracking-wide">{item.title}</span>
                           </div>
                        </td>
                        <td className="px-8 py-6">
                           <span className="text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">{item.category}</span>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2 text-sage">
                              <Eye size={12} />
                              <span className="text-xs font-black">{item.views}</span>
                           </div>
                        </td>
                        <td className="px-8 py-6">
                           <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${item.status === 'Published' || item.status === 'Active' ? 'bg-sage/10 text-sage' : 'bg-gold/10 text-gold-dark'}`}>
                              {item.status}
                           </span>
                        </td>
                        <td className="px-8 py-6 text-xs font-bold text-sage-dark/60">{item.date}</td>
                        <td className="px-8 py-6 text-right">
                           <button className="p-2.5 bg-cream rounded-xl text-sage-dark/40 hover:text-sage-dark transition-all"><ThreeDotsVertical size={16} /></button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}
