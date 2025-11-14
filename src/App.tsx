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
import Helpdesk from "./pages/Feedback";
import CertificatesCourses from "./pages/Certification";
import Branch from "./pages/Branch";
// import Adduser from "./pages/Adduser";

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
          <Route path="/select-branch" element={<Branch />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/events" element={<Events />} />
          {/* <Route path="/adduser" element={<Adduser />} /> */}
          <Route path="/dtc-directory" element={<DTCDirectory />} />
          <Route path="/citax-directory" element={<CITAXDirectory />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/links"
            element={<PlaceholderPage />}
          />
          <Route
            path="/feedback"
            element={<Helpdesk />}
          />
          <Route
            path="/certificates"
            element={<CertificatesCourses />}
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
