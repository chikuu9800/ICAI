import { useState } from "react";
import {
  Menu, Bell, BookOpen, Calendar, Megaphone,
  MessageCircle, Link as LinkIcon, HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideMenu from "@/components/SideMenu";
import { currentUser } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const quickLinks = [
    { icon: BookOpen, label: "Publications", color: "bg-primary", route: "/publications" },
    { icon: Calendar, label: "Events & Webinars", color: "bg-secondary", route: "/events" },
    { icon: Megaphone, label: "Announcements", color: "bg-primary-dark", route: "/announcements" },
    { icon: MessageCircle, label: "Discussion Forum", color: "bg-primary-light", route: "/forum" },
    { icon: LinkIcon, label: "Important Links", color: "bg-secondary-light", route: "/links" },
    { icon: HelpCircle, label: "Helpdesk", color: "bg-muted", route: "/helpdesk" },
  ];

  return (
    <div className="min-h-screen bg-muted/30 font-poppins">

      {/* Header */}
      <header className="bg-gradient-to-b from-[#0E4C92] to-[#1C6DD0] text-white px-4 py-4 shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between">
          
          {/* Side Menu */}
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80">
              <SideMenu onClose={() => setMenuOpen(false)} />
            </SheetContent>
          </Sheet>

          <h1 className="text-lg font-semibold tracking-wide">ICAI Mobile</h1>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 relative"
            onClick={() => navigate("/notifications")}
          >
            <Bell className="h-6 w-6" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-white text-primary text-xs">
              5
            </Badge>
          </Button>
        </div>
      </header>

      {/* Body */}
      <main className="p-4 space-y-6 pb-20">

        {/* Welcome */}
        <Card className="bg-gradient-to-br from-[#0E4C92] to-[#1C6DD0] p-6 text-white shadow-lg rounded-2xl">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-white shadow-md">
              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${currentUser.name}&backgroundColor=1C6DD0&textColor=ffffff`} />
              <AvatarFallback className="bg-primary text-white text-lg">
                {currentUser.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h2 className="text-xl font-semibold">Welcome,</h2>
              <p className="text-lg">{currentUser.name}</p>
              <Badge className="bg-white/20 text-white mt-1 border-0">
                {currentUser.membershipNo}
              </Badge>
            </div>
          </div>
        </Card>

        {/* Committees */}
        <div className="grid grid-cols-2 gap-4">
          <Card
            className="p-6 text-center cursor-pointer hover:shadow-xl bg-gradient-to-br from-[#0E4C92] to-[#1C6DD0] text-white rounded-xl"
            onClick={() => navigate("/dtc-directory")}
          >
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-sm">DTC</h3>
            <p className="text-xs opacity-90">Direct Taxes Committee</p>
          </Card>

          <Card
            className="p-6 text-center cursor-pointer hover:shadow-xl bg-gradient-to-br from-[#1C6DD0] to-[#68A7FF] text-white rounded-xl"
            onClick={() => navigate("/citax-directory")}
          >
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-sm">CITAX</h3>
            <p className="text-xs opacity-90">International Taxation</p>
          </Card>
        </div>

        {/* Quick Access — 3 Icons per Row */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-foreground">Quick Access</h3>
          
          <div className="grid grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <Card
                key={index}
                className="p-4 text-center cursor-pointer hover:shadow-md hover:scale-105 transition-all rounded-xl"
                onClick={() => navigate(link.route)}
              >
                <div
                  className={`${link.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm`}
                >
                  <link.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-xs font-medium text-foreground leading-tight break-words line-clamp-2 text-center">{link.label}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="p-4 rounded-xl">
          <h3 className="font-bold mb-3 text-foreground">Recent Activity</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <p className="text-muted-foreground">New guidance note published</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-warning rounded-full"></div>
              <p className="text-muted-foreground">Upcoming webinar on Tax Audit</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-muted-foreground">Your question was answered</p>
            </div>
          </div>
        </Card>

      </main>
    </div>
  );
};

export default Dashboard;
