import { useState } from "react";
import { useNavigate } from "react-router";
import { Plus, Search, Filter, ThreeDotsVertical, JournalBookmarkFill, Quote, TypeBold, TypeItalic, TypeStrikethrough, ListUl, ListOl, Save2Fill, Trash3Fill, Calendar3, ChevronLeft, Shield } from "react-bootstrap-icons";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

function ToolbarButton({ icon: Icon, onClick, isActive = false }: { icon: any, onClick?: () => void, isActive?: boolean }) {
  return (
    <button 
      onClick={onClick}
      className={`p-2 rounded-lg transition-all ${isActive ? 'bg-[#5E6C54] text-white shadow-md' : 'text-[#5E6C54]/40 hover:text-[#5E6C54] hover:bg-white'}`}
    >
       <Icon size={16} />
    </button>
  );
}

export function JournalPage() {
  const navigate = useNavigate();

  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Begin your reflection sanctuary here...</p>',
    editorProps: {
      attributes: {
        class: 'prose prose-sage prose-lg max-w-none w-full bg-transparent min-h-[400px] text-lg font-medium text-sage-dark/70 leading-relaxed outline-none border-none custom-scrollbar focus:outline-none',
      },
    },
  });

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-32 portal-context">
      {/* Cinematic Header - Mobile Only */}
      <div className="lg:hidden relative">
         <button 
            onClick={() => navigate(-1)}
            className="absolute top-12 left-6 z-20 w-10 h-10 bg-[#FFFFFF]/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-[#FFFFFF]/10 active:scale-95 transition-all"
         >
            <ChevronLeft size={20} />
         </button>

         <div className="bg-[#5E6C54] pt-24 pb-32 px-6 rounded-b-[80px] relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
            <div className="relative z-10">
               <h1 className="text-3xl font-black tracking-tight mb-2 !text-[#FFFFFF]" style={{ color: '#FFFFFF' }}>My Sanctuary</h1>
               <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.3em] !text-[#99A88C]">A private space for your inner dialogue</p>
            </div>
         </div>
      </div>

      {/* Original Header - Desktop Only */}
      <div className="hidden lg:block bg-[#4E5540] py-16 px-12 rounded-b-[40px] relative overflow-hidden">
         <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
         <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
               <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 mb-4 border border-white/10">
                  <Shield size={12} className="text-[#CED2BA]" />
                  <span className="text-[10px] text-white/80 font-black uppercase tracking-widest">End-to-End Encrypted</span>
               </div>
               <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">My Sanctuary</h1>
               <p className="text-[#CED2BA] mt-2 text-sm font-medium opacity-80">A private space for your inner dialogue</p>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Editor Section */}
         <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[48px] p-8 lg:p-12 border border-sage/5 shadow-premium">
               {/* Toolbar */}
               <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-sage/5">
                  {editor && (
                    <>
                      <div className="flex bg-cream rounded-xl p-1 gap-1 shadow-inner">
                         <ToolbarButton 
                            icon={TypeBold} 
                            onClick={() => editor.chain().focus().toggleBold().run()} 
                            isActive={editor.isActive('bold')} 
                         />
                         <ToolbarButton 
                            icon={TypeItalic} 
                            onClick={() => editor.chain().focus().toggleItalic().run()} 
                            isActive={editor.isActive('italic')} 
                         />
                         <ToolbarButton 
                            icon={TypeStrikethrough} 
                            onClick={() => editor.chain().focus().toggleStrike().run()} 
                            isActive={editor.isActive('strike')} 
                         />
                      </div>
                      <div className="flex bg-cream rounded-xl p-1 gap-1 shadow-inner">
                         <ToolbarButton 
                            icon={ListUl} 
                            onClick={() => editor.chain().focus().toggleBulletList().run()} 
                            isActive={editor.isActive('bulletList')} 
                         />
                         <ToolbarButton 
                            icon={ListOl} 
                            onClick={() => editor.chain().focus().toggleOrderedList().run()} 
                            isActive={editor.isActive('orderedList')} 
                         />
                      </div>
                      <div className="flex bg-cream rounded-xl p-1 gap-1 shadow-inner">
                         <ToolbarButton 
                            icon={Quote} 
                            onClick={() => editor.chain().focus().toggleBlockquote().run()} 
                            isActive={editor.isActive('blockquote')} 
                         />
                      </div>
                    </>
                  )}
                  <div className="ml-auto">
                     <button className="flex items-center gap-2 px-6 py-2.5 bg-sage text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-sage-dark transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5">
                        <Save2Fill size={14} /> Commit Entry
                     </button>
                  </div>
               </div>

               <div className="space-y-6">
                  <input 
                     type="text" 
                     placeholder="Entry Protocol Title..." 
                     className="w-full bg-transparent text-3xl lg:text-4xl font-bold text-sage-dark font-serif outline-none border-none placeholder:text-sage-dark/10"
                  />
                  <div className="min-h-[400px]">
                    <EditorContent editor={editor} />
                  </div>
               </div>
            </div>
         </div>

         {/* Entry History */}
         <div className="space-y-8">
            <div className="flex items-center justify-between px-2">
               <h3 className="text-[11px] font-black text-sage-dark uppercase tracking-[0.4em]">Previous Records</h3>
               <button className="text-[10px] font-black text-sage uppercase tracking-widest hover:bg-sage/10 p-2 rounded-full transition-colors"><Search size={14} /></button>
            </div>
            
            <div className="space-y-4">
               {[
                  { date: "April 20, 2026", title: "Stoic Breathing Insights", preview: "The morning protocol is showing significant results in focus..." },
                  { date: "April 18, 2026", title: "Workplace Triggers", preview: "Identified the core trigger for Tuesday's anxiety surge..." },
                  { date: "April 15, 2026", title: "Weekly Synthesis", preview: "Growth score is up 12%. Energy levels are stabilizing..." }
               ].map((entry, i) => (
                  <div key={i} className="bg-white p-6 rounded-[32px] border border-sage/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
                     <div className="flex items-center justify-between mb-4">
                        <span className="text-[9px] font-black text-sage-dark/30 uppercase tracking-widest flex items-center gap-2">
                           <Calendar3 size={10} /> {entry.date}
                        </span>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                           <button className="text-sage-dark/20 hover:text-sage"><Save2Fill size={14} /></button>
                           <button className="text-sage-dark/20 hover:text-red-400"><Trash3Fill size={14} /></button>
                        </div>
                     </div>
                     <h4 className="text-base font-bold text-sage-dark font-serif mb-2 group-hover:text-sage transition-colors">{entry.title}</h4>
                     <p className="text-xs text-sage-dark/50 line-clamp-2 leading-relaxed italic">"{entry.preview}"</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
