import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, Plus, Search, Filter, FileText, Upload, Trash2, Edit2, PlayCircle, Link as LinkIcon, FileCheck } from "lucide-react";

export function CoachResourcesPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const resources = [
    {
      id: "1",
      title: "Mental Clarity Protocol",
      type: "PDF",
      icon: FileText,
      assigned: 12,
      lastUpdated: "Apr 20, 2026",
      size: "2.4 MB"
    },
    {
      id: "2",
      title: "Morning Routine Mastery",
      type: "Video",
      icon: PlayCircle,
      assigned: 45,
      lastUpdated: "Apr 15, 2026",
      size: "18.5 MB"
    },
    {
      id: "3",
      title: "Anxiety Trigger Assessment",
      type: "Form",
      icon: FileCheck,
      assigned: 8,
      lastUpdated: "Apr 10, 2026",
      size: "125 KB"
    },
    {
      id: "4",
      title: "Guided Meditation (10 min)",
      type: "Audio",
      icon: LinkIcon,
      assigned: 22,
      lastUpdated: "Mar 28, 2026",
      size: "External"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700 px-4 md:px-0 portal-context pb-20">
      {/* Cinematic Header - Mobile Only */}
      <div className="lg:hidden relative -mx-4 -mt-8">
         <button 
            onClick={() => navigate(-1)}
            className="absolute top-12 left-6 z-20 w-10 h-10 bg-[#FFFFFF]/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-[#FFFFFF]/10 active:scale-95 transition-all"
         >
            <ChevronLeft size={20} />
         </button>

         <div className="bg-[#5E6C54] pt-24 pb-32 px-6 rounded-b-[80px] relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
            <div className="relative z-10">
               <h1 className="text-3xl font-black tracking-tight mb-2 !text-[#FFFFFF]" style={{ color: '#FFFFFF' }}>Resource Library</h1>
               <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.3em] !text-[#99A88C]">Manage Client Materials</p>
            </div>
         </div>
      </div>

      {/* Header with Actions - Desktop */}
      <div className="hidden lg:flex bg-[#FFFFFF] p-6 rounded-[32px] md:p-0 md:bg-transparent shadow-sm md:shadow-none flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl lg:text-4xl font-bold text-[#5E6C54] font-serif mb-2 uppercase tracking-tight">Resource Library</h1>
           <p className="text-[#5E6C54]/60 text-[11px] font-bold uppercase tracking-widest">Upload and manage materials for your clients.</p>
        </div>

        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 bg-[#99A88C] text-white px-6 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-[#5E6C54] transition-all shadow-lg shadow-[#99A88C]/20">
              <Upload size={16} /> Upload New
           </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
         <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5E6C54]/30" size={18} />
            <input 
              type="text" 
              placeholder="Search resources..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#FFFFFF] border border-[#99A88C]/10 pl-12 pr-4 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest outline-none focus:border-[#99A88C] transition-all shadow-sm"
            />
         </div>
         <div className="flex gap-2">
            <button className="p-3 bg-[#FFFFFF] border border-[#99A88C]/10 rounded-2xl text-[#5E6C54] hover:bg-[#FCF8E8] transition-colors shadow-sm">
               <Filter size={18} />
            </button>
         </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {resources.map((resource) => (
           <div key={resource.id} className="bg-white rounded-[32px] p-6 border border-sage/5 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FCF8E8] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                 <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center text-[#5E6C54] shadow-sm">
                       <resource.icon size={20} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-cream rounded-full text-[#5E6C54]">{resource.type}</span>
                 </div>
                 
                 <h3 className="text-xl font-bold text-[#5E6C54] font-serif mb-2 leading-tight">{resource.title}</h3>
                 
                 <div className="flex items-center gap-4 text-[10px] font-black text-[#99A88C] uppercase tracking-widest mb-8">
                    <span>{resource.size}</span>
                    <span className="w-1 h-1 bg-[#A68A45] rounded-full" />
                    <span>{resource.lastUpdated}</span>
                 </div>

                 <div className="pt-6 border-t border-cream flex items-center justify-between">
                    <div className="text-[10px] font-bold text-[#5E6C54]/60 uppercase tracking-widest">
                       Assigned to <span className="text-[#A68A45] font-black">{resource.assigned} clients</span>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button className="p-2 text-[#99A88C] hover:text-[#5E6C54] transition-colors bg-cream rounded-lg"><Edit2 size={14} /></button>
                       <button className="p-2 text-red-400 hover:text-red-600 transition-colors bg-red-50 rounded-lg"><Trash2 size={14} /></button>
                    </div>
                 </div>
              </div>
           </div>
         ))}

         {/* Add New Card */}
         <button className="bg-transparent rounded-[32px] p-6 border-2 border-dashed border-[#99A88C]/30 hover:border-[#99A88C] hover:bg-[#FFFFFF]/50 transition-all flex flex-col items-center justify-center min-h-[220px] group">
            <div className="w-12 h-12 bg-[#99A88C]/10 rounded-2xl flex items-center justify-center text-[#99A88C] mb-4 group-hover:bg-[#99A88C] group-hover:text-white transition-all shadow-sm group-hover:scale-110">
               <Plus size={24} />
            </div>
            <h3 className="text-sm font-bold text-[#5E6C54] uppercase tracking-widest">Create Resource</h3>
            <p className="text-[10px] text-[#5E6C54]/40 mt-1 uppercase tracking-widest">Upload or link new material</p>
         </button>
      </div>
    </div>
  );
}
