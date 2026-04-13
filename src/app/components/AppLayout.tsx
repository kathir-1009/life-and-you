import { Outlet, useLocation, Navigate } from "react-router";
import { BottomNav } from "./BottomNav";
import { Sidebar } from "./Sidebar";
import { useEffect, useState } from "react";

export function AppLayout() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  
  const isChat = location.pathname === "/app/messages";

  useEffect(() => {
    // Mock Auth Check: Check if 'portal_access' exists in session
    // In a real app, this would verify a JWT or session cookie
    const authStatus = sessionStorage.getItem("portal_access") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  // Show nothing while checking (prevents flickering)
  if (isAuthenticated === null) return null;

  // Global Auth Guard: Redirect to splash if not logged in
  if (!isAuthenticated) {
    return <Navigate to="/splash" replace state={{ from: location }} />;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex lg:flex-row flex-col">
      {/* Sidebar - Desktop Only */}
      <Sidebar />

      <div className={`flex-1 flex flex-col ${isChat ? 'h-[100dvh]' : 'min-h-screen relative overflow-x-hidden'}`}>
        <main className="flex-1 relative z-10 w-full max-w-7xl mx-auto">
          <Outlet />
        </main>
        
        {/* BottomNav - Mobile Only Container */}
        <div className="lg:hidden">
           {!isChat && <BottomNav />}
        </div>

        {/* Desktop Decorative Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71]/5 rounded-full blur-[120px] -z-0 pointer-events-none hidden lg:block" />
      </div>
    </div>
  );
}
