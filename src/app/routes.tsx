import { createBrowserRouter, Navigate } from "react-router";
import { lazy, Suspense } from "react";
import { MainLayout } from "./components/MainLayout";
import { AppLayout } from "./components/AppLayout";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const ProgramsPage = lazy(() => import("./pages/ProgramsPage").then(m => ({ default: m.ProgramsPage })));
const BookSessionPage = lazy(() => import("./pages/BookSessionPage").then(m => ({ default: m.BookSessionPage })));
const ConfirmationPage = lazy(() => import("./pages/ConfirmationPage").then(m => ({ default: m.ConfirmationPage })));
const DashboardPage = lazy(() => import("./pages/DashboardPage").then(m => ({ default: m.DashboardPage })));
const ProgressPage = lazy(() => import("./pages/ProgressPage").then(m => ({ default: m.ProgressPage })));
const MessagingPage = lazy(() => import("./pages/MessagingPage").then(m => ({ default: m.MessagingPage })));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage").then(m => ({ default: m.ResourcesPage })));
const ProfilePage = lazy(() => import("./pages/ProfilePage").then(m => ({ default: m.ProfilePage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })));
const PricingPage = lazy(() => import("./pages/PricingPage").then(m => ({ default: m.PricingPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));
const OnboardingPage = lazy(() => import("./pages/OnboardingPage").then(m => ({ default: m.OnboardingPage })));
const SplashPage = lazy(() => import("./pages/SplashPage").then(m => ({ default: m.SplashPage })));
const AuthPage = lazy(() => import("./pages/AuthPage").then(m => ({ default: m.AuthPage })));
const OTPVerifyPage = lazy(() => import("./pages/OTPVerifyPage").then(m => ({ default: m.OTPVerifyPage })));
const ExploreCoachesPage = lazy(() => import("./pages/ExploreCoachesPage").then(m => ({ default: m.ExploreCoachesPage })));
const CoachDetailPage = lazy(() => import("./pages/CoachDetailPage").then(m => ({ default: m.CoachDetailPage })));
const NotificationsPage = lazy(() => import("./pages/NotificationsPage").then(m => ({ default: m.NotificationsPage })));
const CoachSchedulePage = lazy(() => import("./pages/CoachSchedulePage").then(m => ({ default: m.CoachSchedulePage })));
const CoachClientsPage = lazy(() => import("./pages/CoachClientsPage").then(m => ({ default: m.CoachClientsPage })));
const CoachEarningsPage = lazy(() => import("./pages/CoachEarningsPage").then(m => ({ default: m.CoachEarningsPage })));
const VideoSessionPage = lazy(() => import("./pages/VideoSessionPage").then(m => ({ default: m.VideoSessionPage })));
const AvailabilityPage = lazy(() => import("./pages/AvailabilityPage").then(m => ({ default: m.AvailabilityPage })));
const JournalPage = lazy(() => import("./pages/JournalPage").then(m => ({ default: m.JournalPage })));
const HelpSupportPage = lazy(() => import("./pages/HelpSupportPage").then(m => ({ default: m.HelpSupportPage })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8B9A71]"></div>
  </div>
);

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/splash",
    element: withSuspense(SplashPage),
  },
  {
    path: "/auth",
    element: withSuspense(AuthPage),
  },
  {
    path: "/otp",
    element: withSuspense(OTPVerifyPage),
  },
  {
    path: "/onboarding",
    element: withSuspense(OnboardingPage),
  },
  {
    path: "/session/:id",
    element: withSuspense(VideoSessionPage),
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      { path: "dashboard", element: withSuspense(DashboardPage) },
      { path: "explore", element: withSuspense(ExploreCoachesPage) },
      { path: "coach/:id", element: withSuspense(CoachDetailPage) },
      { path: "notifications", element: withSuspense(NotificationsPage) },
      { path: "schedule", element: withSuspense(CoachSchedulePage) },
      { path: "availability", element: withSuspense(AvailabilityPage) },
      { path: "clients", element: withSuspense(CoachClientsPage) },
      { path: "earnings", element: withSuspense(CoachEarningsPage) },
      { path: "progress", element: withSuspense(ProgressPage) },
      { path: "journal", element: withSuspense(JournalPage) },
      { path: "messages", element: withSuspense(MessagingPage) },
      { path: "profile", element: withSuspense(ProfilePage) },
      { path: "book", element: withSuspense(BookSessionPage) },
      { path: "resources", element: withSuspense(ResourcesPage) },
      { path: "help", element: withSuspense(HelpSupportPage) },
    ]
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: withSuspense(HomePage),
      },
      {
        path: "/programs",
        element: withSuspense(ProgramsPage),
      },
      {
        path: "/pricing",
        element: withSuspense(PricingPage),
      },
      {
        path: "/about",
        element: withSuspense(AboutPage),
      },
      {
        path: "/contact",
        element: withSuspense(ContactPage),
      },
    ],
  },
  {
    path: "/confirmation",
    element: withSuspense(ConfirmationPage),
  },
  // Redirects for convenience
  { path: "/dashboard", element: <Navigate to="/app/dashboard" replace /> },
  { path: "/messages", element: <Navigate to="/app/messages" replace /> },
  { path: "/progress", element: <Navigate to="/app/progress" replace /> },
  { path: "/profile", element: <Navigate to="/app/profile" replace /> },
  { path: "/book", element: <Navigate to="/app/book" replace /> },
  { path: "/resources", element: <Navigate to="/app/resources" replace /> },
]);
