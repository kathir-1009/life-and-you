import { createBrowserRouter, Navigate } from "react-router";
import { lazy, Suspense } from "react";
import { MainLayout } from "./components/MainLayout";
import { AppLayout } from "./components/AppLayout";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const ProgramsPage = lazy(() => import("./pages/ProgramsPage").then(m => ({ default: m.ProgramsPage })));
const BookSessionPage = lazy(() => import("./pages/BookSessionPage").then(m => ({ default: m.BookSessionPage })));
const ConfirmationPage = lazy(() => import("./pages/ConfirmationPage").then(m => ({ default: m.ConfirmationPage })));
// Lazy load portal components
const DashboardPage = lazy(() => import("./pages/DashboardPage").then(m => ({ default: m.DashboardPage })));
const ProgressPage = lazy(() => import("./pages/ProgressPage").then(m => ({ default: m.ProgressPage })));
const MessagingPage = lazy(() => import("./pages/MessagingPage").then(m => ({ default: m.MessagingPage })));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage").then(m => ({ default: m.ResourcesPage })));
const ProfilePage = lazy(() => import("./pages/ProfilePage").then(m => ({ default: m.ProfilePage })));
const OnboardingPage = lazy(() => import("./pages/OnboardingPage").then(m => ({ default: m.OnboardingPage })));
const NotificationsPage = lazy(() => import("./pages/NotificationsPage").then(m => ({ default: m.NotificationsPage })));
const JournalPage = lazy(() => import("./pages/JournalPage").then(m => ({ default: m.JournalPage })));

// Marketing & Auth
const SplashPage = lazy(() => import("./pages/SplashPage").then(m => ({ default: m.SplashPage })));
const AuthPage = lazy(() => import("./pages/AuthPage").then(m => ({ default: m.AuthPage })));
const OTPVerifyPage = lazy(() => import("./pages/OTPVerifyPage").then(m => ({ default: m.OTPVerifyPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })));
const PricingPage = lazy(() => import("./pages/PricingPage").then(m => ({ default: m.PricingPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));

// Coach Pages
const CoachSchedulePage = lazy(() => import("./pages/CoachSchedulePage").then(m => ({ default: m.CoachSchedulePage })));
const CoachClientsPage = lazy(() => import("./pages/CoachClientsPage").then(m => ({ default: m.CoachClientsPage })));
const CoachEarningsPage = lazy(() => import("./pages/CoachEarningsPage").then(m => ({ default: m.CoachEarningsPage })));
const VideoSessionPage = lazy(() => import("./pages/VideoSessionPage").then(m => ({ default: m.VideoSessionPage })));
const AvailabilityPage = lazy(() => import("./pages/AvailabilityPage").then(m => ({ default: m.AvailabilityPage })));

const SessionsPage = lazy(() => import("./pages/SessionsPage").then(m => ({ default: m.SessionsPage })));

// Client Onboarding
const ClientWelcome = lazy(() => import("./pages/client/onboarding/WelcomePage").then(m => ({ default: m.ClientWelcomePage })));
const ClientGoals = lazy(() => import("./pages/client/onboarding/GoalsPage").then(m => ({ default: m.ClientGoalsPage })));
const ClientPrivacy = lazy(() => import("./pages/client/onboarding/PrivacySettingsPage").then(m => ({ default: m.ClientPrivacyModePage })));
const ClientNotifs = lazy(() => import("./pages/client/onboarding/NotificationPrefsPage").then(m => ({ default: m.ClientNotificationPrefsPage })));
const ClientComplete = lazy(() => import("./pages/client/onboarding/OnboardingCompletePage").then(m => ({ default: m.ClientOnboardingCompletePage })));

// Client Booking
const BookStep1 = lazy(() => import("./pages/client/booking/BookStep1Page").then(m => ({ default: m.BookSessionStep1Page })));
const BookStep2 = lazy(() => import("./pages/client/booking/BookStep2Page").then(m => ({ default: m.BookSessionStep2Page })));
const BookStep3 = lazy(() => import("./pages/client/booking/BookStep3Page").then(m => ({ default: m.BookSessionStep3Page })));

// Coach Onboarding
const CoachWelcome = lazy(() => import("./pages/coach/onboarding/CoachWelcomePage").then(m => ({ default: m.CoachWelcomePage })));
const CoachProfile = lazy(() => import("./pages/coach/onboarding/CoachProfileSetupPage").then(m => ({ default: m.CoachProfileSetupPage })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#F5EFE6]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3D5247]"></div>
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
    children: [
      { index: true, element: <Navigate to="/auth/login" replace /> },
      { path: "login", element: withSuspense(AuthPage) },
      { path: "register", element: withSuspense(AuthPage) }, // Reusing AuthPage for now
      { path: "verify", element: withSuspense(OTPVerifyPage) },
    ]
  },
  {
    path: "/onboarding",
    children: [
      { index: true, element: <Navigate to="/onboarding/welcome" replace /> },
      { path: "welcome", element: withSuspense(ClientWelcome) },
      { path: "goals", element: withSuspense(ClientGoals) },
      { path: "privacy", element: withSuspense(ClientPrivacy) },
      { path: "notifications", element: withSuspense(ClientNotifs) },
      { path: "complete", element: withSuspense(ClientComplete) },
    ]
  },
  // PUBLIC WEBSITE
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: withSuspense(HomePage) },
      { path: "about-us", element: withSuspense(AboutPage) },
      { path: "programs", element: withSuspense(ProgramsPage) },
      { path: "pricing", element: withSuspense(PricingPage) },
      { path: "contact", element: withSuspense(ContactPage) },
      { path: "resources", element: withSuspense(ResourcesPage) },
      { path: "book", element: withSuspense(BookSessionPage) },
    ],
  },
  // CLIENT PORTAL
  {
    path: "/portal",
    element: <AppLayout />,
    children: [
      { index: true, element: withSuspense(DashboardPage) },
      { path: "sessions", element: withSuspense(SessionsPage) },
      { 
        path: "book",
        children: [
          { index: true, element: withSuspense(BookStep1) },
          { path: "step-1", element: withSuspense(BookStep1) },
          { path: "step-2", element: withSuspense(BookStep2) },
          { path: "step-3", element: withSuspense(BookStep3) },
          { path: "confirm", element: <Navigate to="/portal/book/step-3" replace /> },
        ]
      },
      { path: "progress", element: withSuspense(ProgressPage) },
      { path: "library", element: withSuspense(ResourcesPage) },
      { path: "messages", element: withSuspense(MessagingPage) },
      { path: "profile", element: withSuspense(ProfilePage) },
      { path: "notifications", element: withSuspense(NotificationsPage) },
      { path: "journal", element: withSuspense(JournalPage) },
    ]
  },
  // COACH CONSOLE
  {
    path: "/coach",
    element: <AppLayout />,
    children: [
      { index: true, element: withSuspense(DashboardPage) },
      { 
        path: "onboarding",
        children: [
          { index: true, element: <Navigate to="/coach/onboarding/welcome" replace /> },
          { path: "welcome", element: withSuspense(CoachWelcome) },
          { path: "profile", element: withSuspense(CoachProfile) },
        ]
      },
      { path: "schedule", element: withSuspense(CoachSchedulePage) },
      { path: "clients", element: withSuspense(CoachClientsPage) },
      { path: "sessions", element: withSuspense(SessionsPage) },
      { path: "messages", element: withSuspense(MessagingPage) },
      { path: "earnings", element: withSuspense(CoachEarningsPage) },
      { path: "resources", element: withSuspense(ResourcesPage) },
    ]
  },
  // ADMIN PORTAL
  {
    path: "/admin",
    element: <AppLayout />,
    children: [
      { index: true, element: withSuspense(DashboardPage) },
      { path: "users", element: withSuspense(DashboardPage) }, // Placeholder
      { path: "coaches", element: withSuspense(DashboardPage) }, // Placeholder
      { path: "analytics", element: withSuspense(DashboardPage) }, // Placeholder
    ]
  },
  // SESSION
  {
    path: "/session/:id",
    element: withSuspense(VideoSessionPage),
  },
  {
    path: "/confirmation",
    element: withSuspense(ConfirmationPage),
  },
  // Legacy Redirects
  { path: "/app/*", element: <Navigate to="/portal" replace /> },
  { path: "/dashboard", element: <Navigate to="/portal" replace /> },
]);
