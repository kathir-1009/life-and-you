import { Outlet, useLocation, Navigate, ScrollRestoration } from "react-router";
import { BottomNav } from "./BottomNav";
import { Sidebar } from "./Sidebar";
import { useEffect, useState, useRef } from "react";
import { useUser } from "../context/UserContext";

import { List as MenuIcon } from "react-bootstrap-icons";

export function AppLayout() {
  const location = useLocation();
  const { role } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const isOnboarding = location.pathname.includes("/onboarding");
  const isPortal = location.pathname.startsWith("/portal");
  const isCoach = location.pathname.startsWith("/coach");
  const isChat = location.pathname.includes("/messages");

  useEffect(() => {
    // Basic auth check
    const authStatus = sessionStorage.getItem("portal_access") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  useEffect(() => {
    // Reset scroll to top on route change
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
    setIsSidebarOpen(false); // Close sidebar on route change
  }, [location.pathname]);

  if (isAuthenticated === null) return null;

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  // Role Guards
  if (isPortal && role !== 'client') {
    return <Navigate to="/coach" replace />;
  }
  if (isCoach && role !== 'coach') {
    return <Navigate to="/portal" replace />;
  }

  return (
    <div className={`min-h-screen flex portal-context overflow-hidden font-sans transition-colors duration-700 bg-[#F4F7FA]`}>
      <ScrollRestoration />
      
      {/* Sidebar - Desktop Sticky / Mobile Drawer */}
      {!isChat && !isOnboarding && (
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />
      )}

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col h-[100dvh] overflow-x-hidden relative`}>
        
        {/* Mobile Header */}
        {!isChat && !isOnboarding && (
          <div className="lg:hidden bg-[#2D3324] text-white p-4 flex items-center justify-between relative z-50 shadow-xl border-b border-[#2D3324]">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl text-white border border-white/5"
              >
                <MenuIcon size={24} />
              </button>
              <div className="w-8 h-8">
                 <img src="/img/Lifeandyou-logo-1.png" alt="Life & You" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <div>
                 <h1 className="text-sm font-bold tracking-tight leading-none font-serif text-white">Life & You</h1>
                 <span className="text-[8px] font-bold text-[#8B9A71] uppercase tracking-[0.2em] mt-0.5 block">
                   {role === 'coach' ? 'Coach Console' : 'Portal Access'}
                 </span>
              </div>
            </div>
          </div>
        )}

        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          <main className={`relative z-10 w-full max-w-[1440px] mx-auto p-0 ${!isOnboarding && 'lg:p-10'} ${!isChat && !isOnboarding && 'lg:pt-10'}`}>
            <Outlet />
          </main>
        </div>
        
        {/* BottomNav - Mobile Only */}
        {!isChat && !isOnboarding && (
          <div className="lg:hidden relative z-50">
            <BottomNav />
          </div>
        )}
      </div>
    </div>
  );
}
