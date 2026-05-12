import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, Download, Search, Filter, Calendar3, Clock, Person, StarFill } from "react-bootstrap-icons";

const mockSessions = [
  { id: "S101", date: "May 10, 2026", time: "09:00 AM", client: "Sarah M.", type: "Anxiety Control", status: "Completed", rating: 5, amount: "INR 350" },
  { id: "S102", date: "May 09, 2026", time: "11:30 AM", client: "Anonymous #421", type: "Grief Healing", status: "Completed", rating: 5, amount: "INR 400" },
  { id: "S103", date: "May 08, 2026", time: "02:00 PM", client: "Michael C.", type: "Peak Performance", status: "Completed", rating: 4, amount: "INR 350" },
  { id: "S104", date: "May 07, 2026", time: "04:30 PM", client: "Elena R.", type: "Self-Confidence", status: "Completed", rating: 5, amount: "INR 350" },
  { id: "S105", date: "May 06, 2026", time: "10:00 AM", client: "John D.", type: "Career Pivot", status: "Completed", rating: 5, amount: "INR 450" },
  { id: "S106", date: "May 05, 2026", time: "03:00 PM", client: "Priya K.", type: "Relationship Coaching", status: "Completed", rating: 3, amount: "INR 350" },
];

export function CoachSessionHistoryPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-[#FCF8E8] pb-24 lg:pb-10 animate-in fade-in duration-700">
      <div className="max-w-5xl mx-auto px-6 lg:px-16 pt-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <Link to="/coach" className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center text-sage-dark border border-sage/10 shadow-sm hover:bg-sage/5 transition-all">
              <ChevronLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl font-black text-sage-dark font-serif tracking-tight">Session History</h1>
              <p className="text-[10px] font-black text-sage-dark/30 uppercase tracking-[0.3em] mt-1">Full archive of your mentorship sessions</p>
            </div>
          </div>
          
          <button className="flex items-center gap-2.5 px-6 py-4 bg-sage-dark text-white rounded-[20px] text-[10px] font-black uppercase tracking-widest shadow-xl shadow-sage-dark/20 hover:scale-[1.02] transition-all">
            <Download size={16} /> Export Report
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-6 rounded-[32px] border border-sage/10 shadow-sm">
            <p className="text-2xl font-black text-sage-dark font-serif">142</p>
            <p className="text-[9px] font-black text-sage-dark/40 uppercase tracking-widest mt-1">Total Sessions</p>
          </div>
          <div className="bg-white p-6 rounded-[32px] border border-sage/10 shadow-sm">
            <p className="text-2xl font-black text-sage-dark font-serif">118.5h</p>
            <p className="text-[9px] font-black text-sage-dark/40 uppercase tracking-widest mt-1">Contact Hours</p>
          </div>
          <div className="bg-white p-6 rounded-[32px] border border-sage/10 shadow-sm">
             <div className="flex items-center gap-1.5">
               <p className="text-2xl font-black text-sage-dark font-serif">4.9</p>
               <StarFill className="text-gold" size={14} />
             </div>
            <p className="text-[9px] font-black text-sage-dark/40 uppercase tracking-widest mt-1">Avg. Rating</p>
          </div>
          <div className="bg-white p-6 rounded-[32px] border border-sage/10 shadow-sm">
            <p className="text-2xl font-black text-sage-dark font-serif">98%</p>
            <p className="text-[9px] font-black text-sage-dark/40 uppercase tracking-widest mt-1">Completion Rate</p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="bg-white p-4 rounded-[24px] border border-sage/10 shadow-sm mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-dark/30" size={16} />
            <input 
              type="text" 
              placeholder="Search by client or session type..."
              className="w-full bg-cream/50 border-none rounded-[16px] pl-12 pr-4 py-3 text-sm text-sage-dark outline-none focus:bg-cream transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-5 py-3 bg-cream/50 rounded-[16px] text-[10px] font-black text-sage-dark/60 uppercase tracking-widest border border-sage/5">
              <Filter size={16} /> Filter
            </button>
            <button className="flex items-center gap-2 px-5 py-3 bg-cream/50 rounded-[16px] text-[10px] font-black text-sage-dark/60 uppercase tracking-widest border border-sage/5">
              <Calendar3 size={16} /> This Month
            </button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white rounded-[40px] border border-sage/10 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-sage/5">
                <th className="px-8 py-5 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Session Details</th>
                <th className="px-8 py-5 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Client</th>
                <th className="px-8 py-5 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Duration</th>
                <th className="px-8 py-5 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Amount</th>
                <th className="px-8 py-5 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest text-right">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sage/5">
              {mockSessions.map((s) => (
                <tr key={s.id} className="hover:bg-sage/5 transition-colors cursor-pointer group">
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-sage-dark leading-tight">{s.type}</p>
                    <p className="text-[10px] font-bold text-sage-dark/40 mt-1">{s.date}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cream rounded-xl flex items-center justify-center text-sage-dark/40">
                        <Person size={16} />
                      </div>
                      <span className="text-xs font-bold text-sage-dark">{s.client}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-sage-dark/60">
                      <Clock size={14} />
                      <span className="text-xs font-bold">50 Min</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs font-black text-sage-dark">{s.amount}</span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarFill key={i} size={10} className={i < s.rating ? "text-gold" : "text-sage/20"} />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile List View */}
        <div className="md:hidden space-y-4">
          {mockSessions.map((s) => (
            <div key={s.id} className="bg-white p-6 rounded-[32px] border border-sage/10 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-black text-sage-dark leading-tight">{s.type}</h3>
                  <p className="text-[10px] font-bold text-sage-dark/40 mt-1">{s.date} · {s.time}</p>
                </div>
                <span className="px-3 py-1 bg-sage/10 text-sage-dark text-[9px] font-black rounded-full uppercase tracking-widest">{s.status}</span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-sage/5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-cream rounded-lg flex items-center justify-center text-sage-dark/30">
                    <Person size={14} />
                  </div>
                  <span className="text-xs font-bold text-sage-dark">{s.client}</span>
                </div>
                <span className="text-xs font-black text-sage-dark">{s.amount}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
