import { Home, BookOpen, Users, Megaphone, Calendar, MessageCircle, Link, MessageSquare, Settings, LogOut, Award } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";

interface SideMenuProps {
  onClose: () => void;
}

const SideMenu = ({ onClose }: SideMenuProps) => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: "Dashboard", route: "/dashboard" },
    { icon: Users, label: "DTC Directory", route: "/dtc-directory" },
    { icon: Users, label: "CITAX Directory", route: "/citax-directory" },
    { icon: BookOpen, label: "Publications", route: "/publications" },
    { icon: Megaphone, label: "Announcements", route: "/announcements" },
    { icon: Calendar, label: "Events & Webinars", route: "/events" },
    { icon: MessageCircle, label: "Discussion Forum", route: "/forum" },
    { icon: Link, label: "Important Links", route: "/links" },
    { icon: MessageSquare, label: "Suggestions & Feedback", route: "/feedback" },
    { icon: Award, label: "My Certificates", route: "/certificates" },
    { icon: Settings, label: "Settings", route: "/settings" },
  ];

  const handleNavigation = (route: string) => {
    navigate(route);
    onClose();
  };

  return (
    <div className="h-full bg-sidebar flex flex-col">
      {/* Profile Section */}
      <div className="p-6 bg-sidebar-primary">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-16 w-16 border-2 border-white">
            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${currentUser.name}&backgroundColor=f59e0b`} />
            <AvatarFallback className="bg-secondary text-white text-lg">
              {currentUser.name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 text-white">
            <h3 className="font-bold text-lg">{currentUser.name}</h3>
            <p className="text-sm opacity-90">{currentUser.membershipNo}</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20"
          onClick={() => handleNavigation("/profile")}
        >
          Edit Profile
        </Button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-start px-6 py-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            onClick={() => handleNavigation(item.route)}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Button>
        ))}
      </div>

      <Separator className="bg-sidebar-border" />

      {/* Logout */}
      <div className="p-4">
        <Button
          variant="ghost"
          className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={() => {
            navigate("/login");
            onClose();
          }}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>
        <p className="text-xs text-center text-muted-foreground mt-4">
          App Version 1.0.0
        </p>
      </div>
    </div>
  );
};

export default SideMenu;
