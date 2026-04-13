import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import {
  Calendar,
  MessageCircle,
  TrendingUp,
  BookOpen,
  Bell,
  ArrowUpRight,
  Shield,
  Star,
  Play,
  Compass,
  ArrowRight,
  EyeOff
} from "lucide-react";
import { useUser } from "../context/UserContext";

export function DashboardPage() {
  const { role, isAnonymous, user } = useUser();
  useEffect(() => {
    document.title = "My Dashboard | Life & You - Coaching & Consulting";
  }, []);

  if (role === "coach") {
    return <CoachDashboard />;
  }

  return <ClientDashboard isAnonymous={isAnonymous} user={user} />;
}

function ClientDashboard({ isAnonymous, user }: { isAnonymous: boolean, user: any }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-32 md:pb-8">
      {/* Dynamic Header */}
      <div className="bg-[#4E5540] pt-8 sm:pt-12 pb-20 sm:pb-24 px-6 md:px-12 rounded-b-[40px] sm:rounded-b-[48px] relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
        
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          <div>
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border transition-all ${isAnonymous ? 'bg-[#8B9A71] border-transparent text-[#2D3324]' : 'bg-white/10 border-white/10 text-white/80'}`}>
              {isAnonymous ? <EyeOff size={12} /> : <Star size={12} className="text-[#CED2BA] fill-[#CED2BA]" />}
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">{isAnonymous ? "Anonymous Mode Active" : "Premium Member"}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight">
               Hey, {isAnonymous ? "Valued User" : user.name.split(' ')[0]}!
            </h1>
            <p className="text-[#CED2BA] mt-3 sm:mt-4 text-base sm:text-lg font-medium opacity-80">Ready for your transformation today?</p>
          </div>
          <Link to="/app/notifications" className="w-14 h-14 sm:w-16 sm:h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] sm:rounded-[24px] flex items-center justify-center text-white shrink-0 shadow-2xl hover:bg-white/10 transition-all">
            <Bell size={24} className="sm:size-[28px]" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 relative z-20 space-y-8">
        
        {/* New Discovery CTA */}
        <div className="bg-[#8B9A71] rounded-[32px] sm:rounded-[48px] p-6 sm:p-10 shadow-premium flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 group cursor-pointer hover:scale-[1.01] transition-all" onClick={() => navigate('/app/explore')}>
           <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-[20px] sm:rounded-[28px] flex items-center justify-center text-white">
                 <Compass size={24} className="sm:size-[32px]" />
              </div>
              <div>
                 <h3 className="text-xl sm:text-2xl font-black text-[#2D3324]">Find your Guide.</h3>
                 <p className="text-[#2D3324]/60 font-bold text-xs sm:text-sm">Explore our 200+ certified coaches.</p>
              </div>
           </div>
           <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2D3324] rounded-full flex items-center justify-center text-white group-hover:translate-x-2 transition-transform">
              <ArrowRight size={20} className="sm:size-[24px]" />
           </div>
        </div>
        {/* Next Session Card */}
        <div className="bg-white rounded-[32px] p-6 shadow-premium border border-[rgba(139,154,113,0.1)] mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-[#F5EFE6] rounded-2xl flex items-center justify-center text-[#8B9A71]">
                <Calendar size={32} />
              </div>
              <div>
                <div className="text-[11px] font-extrabold text-[#8B9A71] uppercase tracking-[0.2em] mb-1">Upcoming Session</div>
                <h3 className="text-xl font-extrabold text-[#2D3324]">Tomorrow, 10:00 AM</h3>
                <p className="text-xs text-[#545454] mt-0.5">Mindfulness & Anxiety • Dr. Johnson</p>
              </div>
            </div>
            <button className="bg-[#2D3324] text-white py-4 px-8 rounded-pill text-sm font-extrabold flex items-center justify-center gap-2 hover:bg-[#1C1A1E] transition-all active:scale-[0.98]">
              Join Meeting <Play size={16} fill="white" />
            </button>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: MessageCircle, label: "Chat", color: "bg-[#8B9A71]", path: "/messages" },
            { icon: TrendingUp, label: "Progress", color: "bg-[#4E5540]", path: "/progress" },
            { icon: BookOpen, label: "Library", color: "bg-[#2D3324]", path: "/resources" },
            { icon: Shield, label: "Account", color: "bg-[#CED2BA]", path: "/app/profile" },
          ].map((item, i) => (
            <Link key={i} to={item.path} className="bg-white p-5 rounded-[28px] border border-[rgba(139,154,113,0.1)] flex flex-col items-center gap-3 hover:border-[#8B9A71] transition-all shadow-sm active:scale-[0.95]">
              <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                <item.icon size={24} />
              </div>
              <span className="text-[11px] font-extrabold text-[#2D3324] uppercase tracking-widest">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Main Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Recent Resources */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-[#2D3324]">Recommended for you</h2>
              <Link to="/resources" className="text-xs font-extrabold text-[#8B9A71] uppercase tracking-wider">See All</Link>
            </div>
            <div className="space-y-4">
              {[
                { title: "Managing Daily Stress", category: "Mental Health", duration: "12 mins", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=200" },
                { title: "Guided Meditation for Sleep", category: "Wellness", duration: "25 mins", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=200" }
              ].map((res, i) => (
                <div key={i} className="bg-white p-4 rounded-3xl border border-[rgba(139,154,113,0.08)] flex gap-4 group cursor-pointer hover:border-[#8B9A71] transition-all">
                  <img src={res.image} alt={res.title} className="w-20 h-20 rounded-2xl object-cover" />
                  <div className="flex-1 py-1">
                    <span className="text-[10px] font-extrabold text-[#8B9A71] uppercase tracking-widest">{res.category}</span>
                    <h4 className="text-sm font-extrabold text-[#2D3324] mt-1 group-hover:text-[#8B9A71] transition-all">{res.title}</h4>
                    <div className="text-[10px] text-[#545454] mt-2 flex items-center gap-2">
                       <Play size={10} fill="#545454" /> {res.duration}
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-[#CED2BA] mt-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Progress Chart Snapshot */}
          <div className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-premium border border-[rgba(139,154,113,0.1)] h-full">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-extrabold text-[#2D3324]">Mood Insights</h2>
              <div className="text-[10px] font-extrabold text-[#8B9A71] bg-[#8B9A71]/10 px-3 py-1 rounded-full uppercase tracking-widest">Last 7 Days</div>
            </div>
            
            {/* Visual Bars Placeholder */}
            <div className="flex items-end justify-between h-48 gap-3">
              {[60, 40, 80, 50, 90, 70, 85].map((h, i) => (
                <div key={i} className="flex-1 bg-[#F5EFE6] rounded-full relative group h-full flex flex-col justify-end">
                  <div 
                    className={`w-full rounded-full transition-all duration-1000 ${i === 4 ? 'bg-[#8B9A71]' : 'bg-[#CED2BA]'}`}
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <span key={i} className="text-[10px] font-extrabold text-[#545454] uppercase w-full text-center">{d}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoachDashboard() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24 md:pb-8">
      {/* Coach Header */}
      <div className="bg-[#2D3324] py-10 px-6 md:px-12 rounded-b-[40px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#8B9A71]/20 border border-[#8B9A71]/30 rounded-full px-3 py-1 mb-3 backdrop-blur-md">
              <Shield size={12} className="text-[#8B9A71]" />
              <span className="text-[10px] text-[#CED2BA] font-extrabold uppercase tracking-widest leading-none">Verified Coach</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Coach Sharma</h1>
            <p className="text-white/80 mt-1 text-sm font-medium">You have 4 sessions scheduled for today</p>
          </div>
          <div className="flex gap-4">
            <Link to="/app/notifications" className="w-12 h-12 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center text-white relative hover:bg-white/20 transition-all">
              <Bell size={22} />
              <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#8B9A71] rounded-full" />
            </Link>
            <div className="w-12 h-12 bg-[#8B9A71] rounded-2xl flex items-center justify-center text-[#2D3324] font-black text-xl shadow-lg shadow-[#8B9A71]/20">
               S
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10 relative z-20">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Earnings", value: "₹45,200", change: "+12%", pos: true },
            { label: "Clients", value: "28", change: "+3", pos: true },
            { label: "Avg Rating", value: "4.9", change: "✦", pos: true },
            { label: "Hours spent", value: "142", change: "this month", pos: false },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-[32px] border border-[rgba(139,154,113,0.1)] shadow-sm">
              <div className="text-[10px] font-extrabold text-[#8B9A71] uppercase tracking-widest mb-2">{stat.label}</div>
              <div className="text-2xl font-extrabold text-[#2D3324]">{stat.value}</div>
              <div className={`text-[10px] mt-1 font-bold ${stat.pos ? 'text-[#8B9A71]' : 'text-[#545454]'}`}>{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Today's Schedule */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-[#2D3324]">Today's Schedule</h2>
              <button className="text-xs font-extrabold text-[#8B9A71] uppercase tracking-wider">Expand</button>
            </div>
            <div className="space-y-4">
              {[
                { name: "Rahul Singh", time: "11:30 AM", type: "First Discovery", status: "In 45 mins", active: true },
                { name: "Ananya Mehra", time: "02:00 PM", type: "Follow-up", status: "Pending", active: false },
                { name: "Vikram Adit", time: "04:30 PM", type: "NLP Session", status: "Pending", active: false },
              ].map((sess, i) => (
                <div key={i} className={`p-6 rounded-[32px] border transition-all flex items-center justify-between ${sess.active ? 'bg-[#2D3324] border-transparent shadow-xl translate-x-1' : 'bg-white border-[rgba(139,154,113,0.1)]'}`}>
                   <div className="flex items-center gap-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-lg ${sess.active ? 'bg-[#8B9A71] text-white' : 'bg-[#F5EFE6] text-[#8B9A71]'}`}>
                        {sess.name[0]}
                      </div>
                      <div>
                        <h4 className={`text-base font-bold tracking-tight ${sess.active ? 'text-white' : 'text-[#2D3324]'}`} style={{ color: sess.active ? '#ffffff' : '#2D3324' }}>{sess.name}</h4>
                        <p className={`text-[11px] font-medium tracking-wide ${sess.active ? 'text-[#CED2BA]' : 'text-[#8B9A71]'}`} style={{ color: sess.active ? '#CED2BA' : '#8B9A71' }}>{sess.type} • {sess.time}</p>
                      </div>
                   </div>
                   <div className="flex flex-col items-end gap-2">
                      <span className={`text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${sess.active ? 'bg-white/10 text-[#CED2BA]' : 'bg-[#F5EFE6] text-[#545454]'}`}>{sess.status}</span>
                      {sess.active && (
                        <button className="bg-[#8B9A71] text-white px-4 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-widest hover:scale-105 transition-all">Start Now</button>
                      )}
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions & Notes */}
          <div className="space-y-6">
            <h2 className="text-xl font-extrabold text-[#2D3324]">Management</h2>
            <div className="bg-[#8B9A71] rounded-[32px] p-8 text-white shadow-lg shadow-[#8B9A71]/20">
              <h3 className="text-lg font-extrabold mb-4">Availability</h3>
              <p className="text-white/80 text-xs leading-relaxed mb-6">Your slots for next week are currently open. 12 clients have bookmarked your profile.</p>
              <button className="w-full bg-white text-[#2D3324] py-4 rounded-pill text-xs font-extrabold uppercase tracking-widest hover:bg-[#F8F9FA] transition-all">Daily Planner</button>
            </div>
            
            <div className="bg-white rounded-[32px] p-8 border border-[rgba(139,154,113,0.1)]">
              <h3 className="text-base font-extrabold text-[#2D3324] mb-4">Urgent Notes</h3>
              <div className="flex gap-4 items-start pb-4 border-b border-[rgba(139,154,113,0.06)] mb-4">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-1.5" />
                <div>
                   <p className="text-xs font-bold text-[#2D3324]">Review Ananya's assessment</p>
                   <p className="text-[10px] text-[#545454] mt-0.5">Added 2h ago</p>
                </div>
              </div>
              <button className="text-[11px] font-extrabold text-[#8B9A71] uppercase tracking-wider flex items-center gap-2">Add new note +</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
