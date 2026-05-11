import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useEffect } from "react";

export function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollRestoration />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
}
