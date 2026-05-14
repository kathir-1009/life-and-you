import { useState, useEffect } from "react";
import { MicFill, MicMuteFill, CameraVideoFill, CameraVideoOffFill, TelephoneXFill, ChatDotsFill, PatchCheckFill, ShieldLockFill, XLg } from "react-bootstrap-icons";
import { Link, useParams } from "react-router";

export function ClientSessionRoomPage() {
  const { id } = useParams();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTimer(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen bg-[#1C2320] flex flex-col relative overflow-hidden">
      {/* Dynamic Background Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8B9A71]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#A68A45]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Bar */}
      <div className="h-20 px-4 md:px-8 flex flex-wrap items-center justify-between gap-3 relative z-20 mt-4 md:mt-0">
         <div className="flex items-center gap-3 md:gap-6 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-[14px] border border-white/10 shrink-0">
               <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
               <span className="text-white text-[10px] font-black uppercase tracking-widest">{formatTime(timer)}</span>
            </div>
            <div className="flex items-center gap-2 text-white/40 shrink-0">
               <ShieldLockFill size={12} className="text-[#A68A45]" />
               <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">Zero-Trace Protocol Active</span>
            </div>
         </div>

         <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-[14px] shadow-xl">
               <PatchCheckFill size={14} className="text-[#8B9A71]" />
               <span className="text-[#2D3324] text-[10px] font-black uppercase tracking-widest">Coach Sharma Connected</span>
            </div>
         </div>
      </div>

      {/* Main Video Stage */}
      <div className="flex-1 px-4 md:px-8 py-4 relative flex flex-col lg:flex-row gap-4 md:gap-6">
         
         {/* Mentor Video (Larger) */}
         <div className="flex-1 bg-white/5 rounded-[32px] md:rounded-[48px] border border-white/10 relative overflow-hidden flex flex-col items-center justify-center shadow-2xl min-h-[300px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Mobile Connection Badge (moves inside video on mobile) */}
            <div className="md:hidden absolute top-4 right-4 flex items-center gap-2 bg-white px-3 py-1.5 rounded-[10px] shadow-xl z-10">
               <PatchCheckFill size={12} className="text-[#8B9A71]" />
               <span className="text-[#2D3324] text-[8px] font-black uppercase tracking-widest leading-none">Coach<br/>Sharma<br/>Connected</span>
            </div>

            {/* Mock Mentor Image/Avatar */}
            <div className="w-24 h-24 md:w-32 md:h-32 bg-[#8B9A71] rounded-full flex items-center justify-center text-white text-3xl md:text-4xl font-serif shadow-lg relative z-10">
               KS
            </div>
            
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 z-10">
               <div className="bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-[14px] border border-white/10">
                  <p className="text-white text-base md:text-lg font-bold font-serif italic">Coach Sharma</p>
               </div>
            </div>
         </div>

         {/* Local Video/Controls Panel */}
         <div className="w-full lg:w-80 flex flex-col gap-4 md:gap-6 shrink-0">
            {/* Local Video */}
            <div className="h-40 md:h-56 bg-white/5 rounded-[24px] md:rounded-[40px] border border-white/10 relative overflow-hidden flex items-center justify-center shrink-0">
               {isVideoOff ? (
                 <div className="text-white/20 flex flex-col items-center gap-3">
                    <CameraVideoOffFill size={32} />
                    <span className="text-[9px] font-black uppercase tracking-widest">Camera Off</span>
                 </div>
               ) : (
                 <div className="w-full h-full bg-[#1C2320] flex items-center justify-center">
                    <span className="text-[#8B9A71] text-xs font-serif italic">Your Stream (Anonymous)</span>
                 </div>
               )}
               <div className="absolute bottom-3 left-3 flex justify-between items-center text-white">
                  <span className="text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-black/60 rounded-[8px]">Me</span>
               </div>
            </div>

            {/* In-Session Chat */}
            <div className="flex-1 bg-white/5 rounded-[24px] md:rounded-[40px] border border-white/10 p-5 md:p-6 flex flex-col min-h-[200px]">
               <h4 className="text-white/60 text-[9px] font-black uppercase tracking-[0.25em] mb-4 md:mb-6 px-1">Reflection Thread</h4>
               <div className="flex-1 space-y-3 overflow-y-auto pr-2 custom-scrollbar">
                  <ChatBubble msg="Take a deep breath." sender="Coach" />
                  <ChatBubble msg="I'm here." sender="Me" isMe />
               </div>
               <div className="mt-4 relative shrink-0">
                  <input 
                    type="text" 
                    placeholder="Reflect here..."
                    className="w-full bg-white/10 border border-white/10 rounded-[14px] px-4 py-3 text-xs text-white outline-none focus:border-[#8B9A71] transition-all placeholder:text-white/30"
                  />
                  <ChatDotsFill className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40" size={14} />
               </div>
            </div>
         </div>
      </div>

      {/* Control Bar */}
      <div className="h-24 md:h-32 flex items-center justify-center gap-4 md:gap-6 relative z-30 pb-4 md:pb-0 px-4">
         <ControlCircle onClick={() => setIsMuted(!isMuted)} active={!isMuted} danger={isMuted} icon={isMuted ? MicMuteFill : MicFill} />
         <ControlCircle onClick={() => setIsVideoOff(!isVideoOff)} active={!isVideoOff} danger={isVideoOff} icon={isVideoOff ? CameraVideoOffFill : CameraVideoFill} />
         
         <Link 
           to="/portal/sessions/feedback"
           className="w-16 h-16 md:w-20 md:h-20 bg-red-500 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:scale-110 transition-all group shrink-0"
         >
            <TelephoneXFill size={24} className="group-hover:rotate-12 transition-transform" />
         </Link>

         <div className="absolute right-4 md:right-12 flex gap-4">
            <button className="bg-white/5 p-3 md:p-4 rounded-[14px] text-white/60 hover:text-white hover:bg-white/10 transition-all"><XLg size={16} /></button>
         </div>
      </div>
    </div>
  );
}

function ControlCircle({ icon: Icon, active, danger, onClick }: { icon: any, active?: boolean, danger?: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all shrink-0 ${
        danger ? 'bg-red-500/10 text-red-500 border border-red-500/30' : 
        active ? 'bg-white/10 text-white border border-white/20' : 
        'bg-white/5 text-white/40 border border-white/5'
      } hover:scale-110 active:scale-95`}
    >
       <Icon size={20} className="md:w-6 md:h-6" />
    </button>
  );
}

function ChatBubble({ msg, sender, isMe }: { msg: string, sender: string, isMe?: boolean }) {
  return (
    <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
       <div className={`px-4 py-2.5 rounded-[14px] text-[11px] font-medium leading-relaxed max-w-[85%] ${isMe ? 'bg-[#8B9A71] text-white rounded-tr-sm' : 'bg-white/10 text-white rounded-tl-sm border border-white/5'}`}>
          {msg}
       </div>
    </div>
  );
}
