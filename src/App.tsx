import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Publications from "./pages/Publications";
import Events from "./pages/Events";
import DTCDirectory from "./pages/DTCDirectory";
import CITAXDirectory from "./pages/CITAXDirectory";
import Forum from "./pages/Forum";
import Announcements from "./pages/Announcements";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/splash" replace />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/events" element={<Events />} />
          <Route path="/dtc-directory" element={<DTCDirectory />} />
          <Route path="/citax-directory" element={<CITAXDirectory />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/links"
            element={<PlaceholderPage title="Important Links" description="Quick access to important tax resources and portals." />}
          />
          <Route
            path="/feedback"
            element={<PlaceholderPage title="Suggestions & Feedback" description="Share your valuable feedback and suggestions." />}
          />
          <Route
            path="/helpdesk"
            element={<PlaceholderPage title="Helpdesk" description="Get help and support for the app." />}
          />
          <Route
            path="/certificates"
            element={<PlaceholderPage title="My Certificates" description="View and download your event certificates." />}
          />
          <Route
            path="/settings"
            element={<PlaceholderPage title="Settings" description="Configure your app preferences." />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
