import { createBrowserRouter, Navigate } from "react-router";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/HomePage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { BookSessionPage } from "./pages/BookSessionPage";
import { ConfirmationPage } from "./pages/ConfirmationPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ProgressPage } from "./pages/ProgressPage";
import { MessagingPage } from "./pages/MessagingPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AboutPage } from "./pages/AboutPage";
import { PricingPage } from "./pages/PricingPage";
import { ContactPage } from "./pages/ContactPage";
import { OnboardingPage } from "./pages/OnboardingPage";
import { SplashPage } from "./pages/SplashPage";
import { AuthPage } from "./pages/AuthPage";
import { OTPVerifyPage } from "./pages/OTPVerifyPage";

import { AppLayout } from "./components/AppLayout";

import { ExploreCoachesPage } from "./pages/ExploreCoachesPage";
import { CoachDetailPage } from "./pages/CoachDetailPage";
import { NotificationsPage } from "./pages/NotificationsPage";
import { CoachSchedulePage } from "./pages/CoachSchedulePage";
import { CoachClientsPage } from "./pages/CoachClientsPage";
import { CoachEarningsPage } from "./pages/CoachEarningsPage";
import { VideoSessionPage } from "./pages/VideoSessionPage";
import { AvailabilityPage } from "./pages/AvailabilityPage";
import { JournalPage } from "./pages/JournalPage";
import { HelpSupportPage } from "./pages/HelpSupportPage";

export const router = createBrowserRouter([
  {
    path: "/splash",
    Component: SplashPage,
  },
  {
    path: "/auth",
    Component: AuthPage,
  },
  {
    path: "/otp",
    Component: OTPVerifyPage,
  },
  {
    path: "/onboarding",
    Component: OnboardingPage,
  },
  {
    path: "/session/:id",
    Component: VideoSessionPage, // Global video meeting route
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      { path: "dashboard", Component: DashboardPage },
      { path: "explore", Component: ExploreCoachesPage },
      { path: "coach/:id", Component: CoachDetailPage },
      { path: "notifications", Component: NotificationsPage },
      { path: "schedule", Component: CoachSchedulePage },
      { path: "availability", Component: AvailabilityPage },
      { path: "clients", Component: CoachClientsPage },
      { path: "earnings", Component: CoachEarningsPage },
      { path: "progress", Component: ProgressPage },
      { path: "journal", Component: JournalPage },
      { path: "messages", Component: MessagingPage },
      { path: "profile", Component: ProfilePage },
      { path: "book", Component: BookSessionPage },
      { path: "resources", Component: ResourcesPage },
      { path: "help", Component: HelpSupportPage },
    ]
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/programs",
        Component: ProgramsPage,
      },
      {
        path: "/pricing",
        Component: PricingPage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/contact",
        Component: ContactPage,
      },
    ],
  },
  {
    path: "/confirmation",
    Component: ConfirmationPage,
  },
  // Redirects for convenience
  { path: "/dashboard", element: <Navigate to="/app/dashboard" replace /> },
  { path: "/messages", element: <Navigate to="/app/messages" replace /> },
  { path: "/progress", element: <Navigate to="/app/progress" replace /> },
  { path: "/profile", element: <Navigate to="/app/profile" replace /> },
  { path: "/book", element: <Navigate to="/app/book" replace /> },
  { path: "/resources", element: <Navigate to="/app/resources" replace /> },
]);
