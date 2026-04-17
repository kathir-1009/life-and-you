import { Outlet, useLocation, Navigate } from "react-router";
import { BottomNav } from "./BottomNav";
import { PortalHeader } from "./PortalHeader";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

export function AppLayout() {
  const location = useLocation();
  const { role } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  
  const isPortal = location.pathname.startsWith("/portal");
  const isCoach = location.pathname.startsWith("/coach");
  const isAdmin = location.pathname.startsWith("/admin");
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
  if (isPortal && role !== 'client') return <Navigate to="/coach" replace />;
  if (isCoach && role !== 'coach') return <Navigate to="/portal" replace />;
  if (isAdmin && role !== 'admin') return <Navigate to="/portal" replace />;

  return (
    <div className="min-h-screen bg-[#FCF8E8] flex flex-col portal-context">
      {/* Horizontal Nav - Desktop Only */}
      <PortalHeader />

      <div className={`flex-1 flex flex-col ${isChat ? 'h-[100dvh]' : 'min-h-[100dvh] relative overflow-x-hidden'}`}>
        <main className={`flex-1 relative z-10 w-full max-w-[1440px] mx-auto p-0 lg:p-10 ${!isChat && 'lg:pt-20'}`}>
          <Outlet />
        </main>
        
        {/* BottomNav - Mobile Only */}
        {!isChat && <BottomNav />}
      </div>
    </div>
  );
}
