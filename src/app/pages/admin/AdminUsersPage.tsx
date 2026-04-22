import { useState } from "react";
import { Search, Filter, ThreeDotsVertical, PersonFill, ShieldLockFill, EnvelopeFill, ArrowDownRight, PersonPlusFill } from "react-bootstrap-icons";

export function AdminUsersPage() {
  const [roleFilter, setRoleFilter] = useState<"all" | "client" | "coach" | "admin">("all");

  const users = [
    { id: "U001", name: "Sarah Mitchell", email: "sarah.m@example.com", role: "client", status: "Active", joined: "Jan 2026" },
    { id: "U002", name: "Coach Sharma", email: "sharma@lifeandyou.com", role: "coach", status: "Verified", joined: "Dec 2025" },
    { id: "U003", name: "John Doe", email: "john@example.com", role: "client", status: "Active", joined: "Feb 2026" },
    { id: "U004", name: "Admin Alex", email: "alex@admin.com", role: "admin", status: "Active", joined: "Jan 2025" },
    { id: "U005", name: "Elena Rodriguez", email: "elena@coach.com", role: "coach", status: "Pending", joined: "Mar 2026" },
  ];

  const filteredUsers = roleFilter === 'all' ? users : users.filter(u => u.role === roleFilter);

  return (
    <div className="animate-in fade-in duration-700 portal-context pb-20 space-y-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 px-2">
         <div>
            <h1 className="text-3xl lg:text-5xl font-black text-sage-dark font-serif uppercase tracking-tight">User Protocol</h1>
            <p className="text-sage-dark/40 text-[11px] font-black uppercase tracking-[0.4em] mt-2">Manage the sanctuary's inhabitants</p>
         </div>
         
         <div className="flex items-center gap-4">
            <button className="bg-sage text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 shadow-xl hover:bg-sage-dark transition-all">
               <PersonPlusFill size={18} /> Provision User
            </button>
         </div>
      </div>

      {/* Control Bar */}
      <div className="bg-white rounded-[32px] p-4 lg:p-6 shadow-premium border border-sage/5 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
         <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            {["all", "client", "coach", "admin"].map((role) => (
               <button 
                  key={role}
                  onClick={() => setRoleFilter(role as any)}
                  className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${roleFilter === role ? 'bg-sage-dark text-white shadow-lg' : 'bg-cream text-sage-dark/40 hover:bg-sage/10 hover:text-sage-dark'}`}
               >
                  {role}s
               </button>
            ))}
         </div>

         <div className="flex items-center gap-4">
            <div className="relative flex-1 lg:w-72">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-dark/30" size={18} />
               <input 
                 type="text" 
                 placeholder="Search identities..." 
                 className="w-full bg-cream/30 border border-sage/5 pl-12 pr-4 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest outline-none focus:bg-white focus:border-sage transition-all"
               />
            </div>
            <button className="p-4 bg-white border border-sage/10 rounded-2xl text-sage-dark hover:bg-cream transition-colors">
               <Filter size={18} />
            </button>
         </div>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-[48px] overflow-hidden shadow-premium border border-sage/5">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-cream/50 border-b border-sage/5">
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-[0.2em]">Identity</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-[0.2em]">Contact Protocol</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-[0.2em]">Clearance</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-[0.2em]">Status</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-[0.2em]">Joined</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-[0.2em]">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-sage/5">
                  {filteredUsers.map((user) => (
                     <tr key={user.id} className="hover:bg-cream/20 transition-colors group">
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center text-sage font-serif text-lg font-black shadow-sm">
                                 {user.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                 <p className="text-sm font-bold text-sage-dark uppercase tracking-wide">{user.name}</p>
                                 <p className="text-[9px] font-black text-sage-dark/30 uppercase tracking-widest mt-0.5">UID: {user.id}</p>
                              </div>
                           </div>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2 text-sage-dark/60">
                              <EnvelopeFill size={14} />
                              <span className="text-xs font-medium">{user.email}</span>
                           </div>
                        </td>
                        <td className="px-8 py-6">
                           <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${user.role === 'admin' ? 'bg-sage-dark text-white' : user.role === 'coach' ? 'bg-gold text-sage-dark' : 'bg-sage/10 text-sage'}`}>
                              {user.role}
                           </span>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${user.status === 'Verified' || user.status === 'Active' ? 'bg-sage' : 'bg-gold animate-pulse'}`} />
                              <span className="text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">{user.status}</span>
                           </div>
                        </td>
                        <td className="px-8 py-6">
                           <span className="text-xs font-bold text-sage-dark/60">{user.joined}</span>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2">
                              <button className="p-2.5 bg-cream rounded-xl text-sage-dark/40 hover:text-sage-dark hover:bg-sage/10 transition-all">
                                 <ShieldLockFill size={14} />
                              </button>
                              <button className="p-2.5 bg-cream rounded-xl text-sage-dark/40 hover:text-sage-dark hover:bg-sage/10 transition-all">
                                 <ArrowDownRight size={14} />
                              </button>
                              <button className="p-2.5 bg-cream rounded-xl text-sage-dark/40 hover:text-sage-dark hover:bg-sage/10 transition-all">
                                 <ThreeDotsVertical size={14} />
                              </button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         
         <div className="bg-cream/50 px-8 py-6 flex items-center justify-between border-t border-sage/5">
            <p className="text-[10px] font-black text-sage-dark/30 uppercase tracking-widest">Showing {filteredUsers.length} of {users.length} entities</p>
            <div className="flex gap-2">
               <button className="px-4 py-2 bg-white border border-sage/10 rounded-xl text-[10px] font-black text-sage-dark/40 hover:text-sage-dark transition-all">Previous</button>
               <button className="px-4 py-2 bg-white border border-sage/10 rounded-xl text-[10px] font-black text-sage-dark/40 hover:text-sage-dark transition-all">Next</button>
            </div>
         </div>
      </div>
    </div>
  );
}
