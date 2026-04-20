import { Outlet, ScrollRestoration } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function MainLayout() {
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
