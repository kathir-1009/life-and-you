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
const ProfilePage = lazy(() => import("./pages/ProfilePage").then(m => ({ default: m.ProfilePage })));
const NotificationsPage = lazy(() => import("./pages/NotificationsPage").then(m => ({ default: m.NotificationsPage })));
const JournalPage = lazy(() => import("./pages/JournalPage").then(m => ({ default: m.JournalPage })));

// Marketing & Auth
const SplashPage = lazy(() => import("./pages/SplashPage").then(m => ({ default: m.SplashPage })));
const AuthPage = lazy(() => import("./pages/AuthPage").then(m => ({ default: m.AuthPage })));
const OTPVerifyPage = lazy(() => import("./pages/OTPVerifyPage").then(m => ({ default: m.OTPVerifyPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })));
const PricingPage = lazy(() => import("./pages/PricingPage").then(m => ({ default: m.PricingPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));

// Client Sessions
const AllSessions = lazy(() => import("./pages/client/sessions/AllSessionsPage").then(m => ({ default: m.AllSessionsPage })));
const SessionDetail = lazy(() => import("./pages/client/sessions/SessionDetailPage").then(m => ({ default: m.ClientSessionDetailPage })));
const SessionRoom = lazy(() => import("./pages/client/sessions/SessionRoomPage").then(m => ({ default: m.ClientSessionRoomPage })));
const FeedbackPage = lazy(() => import("./pages/client/sessions/FeedbackPage").then(m => ({ default: m.ClientFeedbackPage })));

// Client Library
const AllResources = lazy(() => import("./pages/client/library/AllResourcesPage").then(m => ({ default: m.AllResourcesPage })));
const ResourceDetail = lazy(() => import("./pages/client/library/ResourceDetailPage").then(m => ({ default: m.ClientResourceDetailPage })));

// Coach Discovery
const ExploreCoaches = lazy(() => import("./pages/ExploreCoachesPage").then(m => ({ default: m.ExploreCoachesPage })));
const CoachDetail = lazy(() => import("./pages/client/coach/CoachDetailPage").then(m => ({ default: m.ClientCoachDetailPage })));

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

// Client Profile Subpages
const PersonalInfo = lazy(() => import("./pages/client/profile/PersonalInfoPage").then(m => ({ default: m.PersonalInfoPage })));
const BillingHistory = lazy(() => import("./pages/client/profile/BillingHistoryPage").then(m => ({ default: m.BillingHistoryPage })));
const SecurityVault = lazy(() => import("./pages/client/profile/SecurityVaultPage").then(m => ({ default: m.SecurityVaultPage })));
const UpdatePayment = lazy(() => import("./pages/client/profile/UpdatePaymentPage").then(m => ({ default: m.UpdatePaymentPage })));
const SupportPage = lazy(() => import("./pages/HelpSupportPage").then(m => ({ default: m.HelpSupportPage })));

// Coach Onboarding
const CoachWelcome = lazy(() => import("./pages/coach/onboarding/CoachWelcomePage").then(m => ({ default: m.CoachWelcomePage })));
const CoachProfile = lazy(() => import("./pages/coach/onboarding/CoachProfileSetupPage").then(m => ({ default: m.CoachProfileSetupPage })));

// Coach Pages
const CoachSchedulePage = lazy(() => import("./pages/CoachSchedulePage").then(m => ({ default: m.CoachSchedulePage })));
const CoachClientsPage = lazy(() => import("./pages/coach/clients/CoachClientListPage").then(m => ({ default: m.CoachClientListPage })));
const CoachEarningsPage = lazy(() => import("./pages/CoachEarningsPage").then(m => ({ default: m.CoachEarningsPage })));
const CoachMonthView = lazy(() => import("./pages/coach/schedule/CoachMonthViewPage").then(m => ({ default: m.CoachMonthViewPage })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#FCF8E8]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#99A88C]"></div>
  </div>
);

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(SplashPage),
  },
  {
    path: "/splash",
    element: withSuspense(SplashPage),
  },
  {
    path: "/auth",
    children: [
      { index: true, element: <Navigate to="/auth/login" replace /> },
      { path: "login", element: withSuspense(AuthPage) },
      { path: "register", element: withSuspense(AuthPage) }, 
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
  {
    path: "/home",
    element: <MainLayout />,
    children: [
      { index: true, element: withSuspense(HomePage) },
      { path: "about-us", element: withSuspense(AboutPage) },
      { path: "programs", element: withSuspense(ProgramsPage) },
      { path: "pricing", element: withSuspense(PricingPage) },
      { path: "contact", element: withSuspense(ContactPage) },
      { path: "book", element: withSuspense(BookSessionPage) },
    ],
  },
  // CLIENT PORTAL
  {
    path: "/portal",
    element: <AppLayout />,
    children: [
      { index: true, element: withSuspense(DashboardPage) },
      { 
        path: "sessions",
        children: [
          { index: true, element: withSuspense(AllSessions) },
          { path: ":id", element: withSuspense(SessionDetail) },
          { path: "feedback", element: withSuspense(FeedbackPage) },
        ]
      },
      { 
        path: "book",
        children: [
          { index: true, element: withSuspense(BookStep1) },
          { path: "step-1", element: withSuspense(BookStep1) },
          { path: "step-2", element: withSuspense(BookStep2) },
          { path: "step-3", element: withSuspense(BookStep3) },
          { path: "confirm", element: withSuspense(BookStep3) },
        ]
      },
      { path: "progress", element: withSuspense(ProgressPage) },
      { 
        path: "explore",
        children: [
          { index: true, element: withSuspense(ExploreCoaches) },
          { path: ":id", element: withSuspense(CoachDetail) },
        ]
      },
      { 
        path: "library",
        children: [
          { index: true, element: withSuspense(AllResources) },
          { path: ":id", element: withSuspense(ResourceDetail) },
        ]
      },
      { path: "messages", element: withSuspense(MessagingPage) },
      { 
        path: "profile", 
        children: [
          { index: true, element: withSuspense(ProfilePage) },
          { path: "personal", element: withSuspense(PersonalInfo) },
          { path: "billing", element: withSuspense(BillingHistory) },
          { path: "payment", element: withSuspense(UpdatePayment) },
          { path: "security", element: withSuspense(SecurityVault) },
          { path: "support", element: withSuspense(SupportPage) },
        ] 
      },
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
      { 
        path: "schedule",
        children: [
          { index: true, element: withSuspense(CoachMonthView) },
          { path: "month", element: withSuspense(CoachMonthView) },
        ]
      },
      { path: "clients", element: withSuspense(CoachClientsPage) },
      { path: "messages", element: withSuspense(MessagingPage) },
      { path: "earnings", element: withSuspense(CoachEarningsPage) },
    ]
  },
  // SESSION
  {
    path: "/session/:id",
    element: withSuspense(SessionRoom),
  },
  {
    path: "/confirmation",
    element: withSuspense(ConfirmationPage),
  },
]);
