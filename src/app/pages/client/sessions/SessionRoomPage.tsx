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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#99A88C]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8A7340]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Bar */}
      <div className="h-20 px-8 flex items-center justify-between relative z-20">
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
               <span className="text-white text-[10px] font-black uppercase tracking-widest">{formatTime(timer)}</span>
            </div>
            <div className="flex items-center gap-3 text-white/40">
               <ShieldLockFill size={14} className="text-[#8A7340]" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em]">Zero-Trace Protocol Active</span>
            </div>
         </div>

         <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-[#FCF8E8] px-4 py-2 rounded-2xl shadow-xl">
               <PatchCheckFill size={16} className="text-[#99A88C]" />
               <span className="text-[#5E6C54] text-[10px] font-black uppercase tracking-widest">Coach Sharma Connected</span>
            </div>
         </div>
      </div>

      {/* Main Video Stage */}
      <div className="flex-1 px-8 py-4 relative flex gap-6">
         {/* Mentor Video (Larger) */}
         <div className="flex-1 bg-white/5 rounded-[48px] border border-white/10 relative overflow-hidden flex items-center justify-center shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            
            {/* Mock Mentor Image/Avatar */}
            <div className="w-32 h-32 bg-[#99A88C] rounded-full flex items-center justify-center text-white text-4xl font-serif">
               KS
            </div>
            
            <div className="absolute bottom-10 left-10">
               <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                  <p className="text-white text-lg font-bold font-serif font-serif">Coach Sharma</p>
               </div>
            </div>
         </div>

         {/* Local Video/Controls Panel */}
         <div className="w-80 flex flex-col gap-6">
            <div className="h-56 bg-white/5 rounded-[40px] border border-white/10 relative overflow-hidden flex items-center justify-center">
               {isVideoOff ? (
                 <div className="text-white/20 flex flex-col items-center gap-4">
                    <CameraVideoOffFill size={40} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Camera Off</span>
                 </div>
               ) : (
                 <div className="w-full h-full bg-[#1C2320] flex items-center justify-center">
                    <span className="text-white/40 font-serif italic">Your Stream (Anonymous)</span>
                 </div>
               )}
               <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
                  <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-black/40 rounded-full">Me</span>
               </div>
            </div>

            {/* In-Session Chat (Simplified) */}
            <div className="flex-1 bg-white/5 rounded-[40px] border border-white/10 p-6 flex flex-col">
               <h4 className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-6 px-2">Reflection Thread</h4>
               <div className="flex-1 space-y-4">
                  <ChatBubble msg="Take a deep breath." sender="Coach" />
                  <ChatBubble msg="I'm here." sender="Me" isMe />
               </div>
               <div className="mt-4 relative">
                  <input 
                    type="text" 
                    placeholder="Reflect here..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-xs text-white outline-none focus:border-[#99A88C] transition-all"
                  />
                  <ChatDotsFill className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40" size={14} />
               </div>
            </div>
         </div>
      </div>

      {/* Control Bar */}
      <div className="h-32 flex items-center justify-center gap-6 relative z-30">
         <ControlCircle onClick={() => setIsMuted(!isMuted)} active={!isMuted} danger={isMuted} icon={isMuted ? MicMuteFill : MicFill} />
         <ControlCircle onClick={() => setIsVideoOff(!isVideoOff)} active={!isVideoOff} danger={isVideoOff} icon={isVideoOff ? CameraVideoOffFill : CameraVideoFill} />
         
         <Link 
           to="/portal/sessions/feedback"
           className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:scale-110 transition-all group"
         >
            <TelephoneXFill size={28} className="group-hover:rotate-12 transition-transform" />
         </Link>

         <div className="absolute right-12 flex gap-4">
            <button className="bg-white/5 p-4 rounded-2xl text-white/60 hover:text-white transition-all"><XLg size={18} /></button>
         </div>
      </div>
    </div>
  );
}

function ControlCircle({ icon: Icon, active, danger, onClick }: { icon: any, active?: boolean, danger?: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
        danger ? 'bg-red-500/10 text-red-500 border border-red-500/30' : 
        active ? 'bg-white/10 text-white border border-white/20' : 
        'bg-white/5 text-white/40'
      } hover:scale-110 active:scale-95`}
    >
       <Icon size={24} />
    </button>
  );
}

function ChatBubble({ msg, sender, isMe }: { msg: string, sender: string, isMe?: boolean }) {
  return (
    <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
       <div className={`px-4 py-2 rounded-2xl text-[11px] font-medium leading-relaxed max-w-[80%] ${isMe ? 'bg-[#99A88C] text-white rounded-tr-none' : 'bg-white/10 text-white rounded-tl-none'}`}>
          {msg}
       </div>
    </div>
  );
}
