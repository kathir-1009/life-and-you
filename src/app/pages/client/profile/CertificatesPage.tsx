import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, Award, Download, Share, CheckCircleFill, Trophy, ShieldCheck } from "react-bootstrap-icons";

export function CertificatesPage() {
  const navigate = useNavigate();

  const certificates = [
    {
      id: "CERT-001",
      title: "Mindfulness Mastery Level 1",
      issuer: "Life & You Wellness Institute",
      date: "April 15, 2026",
      status: "Completed",
      grade: "Pass",
      skills: ["Breathwork", "Present Moment Awareness", "Stress Reduction"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: "CERT-002",
      title: "Emotional Intelligence Core",
      issuer: "Dr. Johnson, Certified Guide",
      date: "March 22, 2026",
      status: "Completed",
      grade: "Excellent",
      skills: ["Self-Regulation", "Empathy", "Cognitive Reframing"],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60"
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

         <div className="bg-[#A68A45] pt-24 pb-32 px-6 rounded-b-[80px] relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
            <div className="relative z-10">
               <h1 className="text-3xl font-black tracking-tight mb-2 !text-[#FFFFFF]" style={{ color: '#FFFFFF' }}>My Achievements</h1>
               <p className="text-[#5E6C54] text-[10px] font-black uppercase tracking-[0.3em] !text-[#5E6C54]">Certifications & Milestones</p>
            </div>
         </div>
      </div>

      {/* Header with Actions - Desktop */}
      <div className="hidden lg:flex bg-[#FFFFFF] p-6 rounded-[32px] md:p-0 md:bg-transparent shadow-sm md:shadow-none flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
           <div className="inline-flex items-center gap-2 bg-[#A68A45]/10 text-[#A68A45] px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-4 border border-[#A68A45]/20">
              <Trophy size={12} /> Milestone Vault
           </div>
           <h1 className="text-3xl lg:text-4xl font-bold text-[#5E6C54] font-serif mb-2 uppercase tracking-tight">Achievements</h1>
           <p className="text-[#5E6C54]/60 text-[11px] font-bold uppercase tracking-widest">Your certified wellness journey and acquired skills.</p>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
         <div className="bg-[#FFFFFF] p-6 rounded-[32px] border border-[#99A88C]/10 shadow-sm text-center">
            <Trophy className="text-[#A68A45] mx-auto mb-3" size={24} />
            <p className="text-2xl font-black text-[#5E6C54] font-serif mb-1">2</p>
            <p className="text-[9px] font-black uppercase tracking-widest text-[#5E6C54]/40">Certificates</p>
         </div>
         <div className="bg-[#FFFFFF] p-6 rounded-[32px] border border-[#99A88C]/10 shadow-sm text-center">
            <Award className="text-[#99A88C] mx-auto mb-3" size={24} />
            <p className="text-2xl font-black text-[#5E6C54] font-serif mb-1">6</p>
            <p className="text-[9px] font-black uppercase tracking-widest text-[#5E6C54]/40">Core Skills</p>
         </div>
         <div className="bg-[#FFFFFF] p-6 rounded-[32px] border border-[#99A88C]/10 shadow-sm text-center">
            <CheckCircleFill className="text-[#99A88C] mx-auto mb-3" size={24} />
            <p className="text-2xl font-black text-[#5E6C54] font-serif mb-1">100%</p>
            <p className="text-[9px] font-black uppercase tracking-widest text-[#5E6C54]/40">Completion</p>
         </div>
         <div className="bg-[#FFFFFF] p-6 rounded-[32px] border border-[#99A88C]/10 shadow-sm text-center">
            <ShieldCheck className="text-[#A68A45] mx-auto mb-3" size={24} />
            <p className="text-2xl font-black text-[#5E6C54] font-serif mb-1">Verified</p>
            <p className="text-[9px] font-black uppercase tracking-widest text-[#5E6C54]/40">Status</p>
         </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
         {certificates.map((cert) => (
           <div key={cert.id} className="bg-[#FFFFFF] rounded-[40px] border border-[#99A88C]/10 shadow-premium overflow-hidden group">
              {/* Top Graphic Area */}
              <div className="relative h-48 overflow-hidden bg-[#5E6C54]">
                 <img 
                   src={cert.image} 
                   alt={cert.title}
                   className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-110 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 to-transparent" />
                 
                 <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                       <Award size={16} className="text-[#A68A45]" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-[#FCF8E8]">{cert.id}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#FFFFFF] font-serif leading-tight">{cert.title}</h3>
                 </div>
              </div>

              {/* Details Area */}
              <div className="p-8">
                 <div className="mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#5E6C54]/40 mb-1">Issued By</p>
                    <p className="text-sm font-black text-[#5E6C54]">{cert.issuer}</p>
                 </div>

                 <div className="flex items-center justify-between mb-8 pb-8 border-b border-[#99A88C]/10">
                    <div>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-[#5E6C54]/40 mb-1">Date</p>
                       <p className="text-sm font-black text-[#5E6C54]">{cert.date}</p>
                    </div>
                    <div>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-[#5E6C54]/40 mb-1">Grade</p>
                       <p className="text-sm font-black text-[#A68A45]">{cert.grade}</p>
                    </div>
                    <div>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-[#5E6C54]/40 mb-1">Status</p>
                       <div className="flex items-center gap-1.5 text-sm font-black text-[#99A88C]">
                          <CheckCircleFill size={12} /> {cert.status}
                       </div>
                    </div>
                 </div>

                 <div className="mb-8">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#5E6C54]/40 mb-4">Acquired Skills</p>
                    <div className="flex flex-wrap gap-2">
                       {cert.skills.map((skill, idx) => (
                          <span key={idx} className="px-4 py-2 bg-[#FCF8E8] text-[#5E6C54] text-[10px] font-black uppercase tracking-widest rounded-xl border border-[#99A88C]/10">
                             {skill}
                          </span>
                       ))}
                    </div>
                 </div>

                 {/* Actions */}
                 <div className="flex items-center gap-4">
                    <button className="flex-1 py-4 bg-[#5E6C54] text-[#FFFFFF] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#99A88C] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#5E6C54]/10">
                       <Download size={14} /> Download PDF
                    </button>
                    <button className="w-14 h-14 bg-[#FCF8E8] text-[#A68A45] rounded-2xl flex items-center justify-center hover:bg-[#A68A45] hover:text-[#FFFFFF] transition-all border border-[#A68A45]/20">
                       <Share size={16} />
                    </button>
                 </div>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}
