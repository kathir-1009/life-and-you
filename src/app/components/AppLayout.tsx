import { Outlet, useLocation, Navigate, ScrollRestoration } from "react-router";
import { BottomNav } from "./BottomNav";
import { Sidebar } from "./Sidebar";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

export function AppLayout() {
  const location = useLocation();
  const { role } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  
  const isPortal = location.pathname.startsWith("/portal");
  const isCoach = location.pathname.startsWith("/coach");
  const isChat = location.pathname.includes("/messages");

  useEffect(() => {
    // Basic auth check
    const authStatus = sessionStorage.getItem("portal_access") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  if (isAuthenticated === null) return null;

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  // Simple Role Guard
  if (isPortal && role !== 'client') {
    return <Navigate to={role === 'admin' ? '/admin' : '/coach'} replace />;
  }
  if (isCoach && role !== 'coach') {
    return <Navigate to={role === 'admin' ? '/admin' : '/portal'} replace />;
  }

  return (
    <div className="min-h-screen bg-[#FCF8E8] flex portal-context overflow-hidden">
      <ScrollRestoration />
      
      {/* Sidebar - Desktop Only (hidden lg:flex inside Sidebar component) */}
      {!isChat && <Sidebar />}

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col ${isChat ? 'h-[100dvh]' : 'h-[100dvh]'} overflow-x-hidden relative`}>
        
        {/* Mobile Header */}
        {!isChat && (
          <div className="lg:hidden bg-sage text-white p-4 flex items-center gap-3 relative z-50 shadow-md">
            <div className="w-8 h-8">
               <img src="/img/Lifeandyou-logo-1.png" alt="Life & You" className="w-full h-full object-contain brightness-[10]" />
            </div>
            <div>
               <h1 className="text-sm font-bold tracking-tight leading-none font-serif">Life & You</h1>
               <span className="text-[8px] font-bold text-[#B5C4BA] uppercase tracking-[0.2em] mt-0.5 block">Portal Access</span>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          <main className={`relative z-10 w-full max-w-[1440px] mx-auto p-0 lg:p-10 ${!isChat && 'lg:pt-10'}`}>
            <Outlet />
          </main>
        </div>
        
        {/* BottomNav - Mobile Only */}
        {!isChat && (
          <div className="lg:hidden relative z-50">
            <BottomNav />
          </div>
        )}
      </div>
    </div>
  );
}
