import { 
  Home, BookOpen, Users, Megaphone, Calendar, 
  MessageCircle, Link, MessageSquare, Settings, 
  LogOut, Award ,User2Icon
} from "lucide-react";
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
    { icon: User2Icon, label: "Add user", route: "/adduser" },
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
    <div className="h-full bg-gradient-to-b from-[#0E4C92] to-[#1C6DD0] text-white flex flex-col font-poppins shadow-xl">

      {/* Profile Section */}
      <div className="p-6 bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-16 w-16 border-2 border-white shadow-md">
            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${currentUser.name}&backgroundColor=1C6DD0&textColor=ffffff`} />
            <AvatarFallback className="bg-blue-500 text-white text-lg">
              {currentUser.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h3 className="font-semibold text-lg">{currentUser.name}</h3>
            <p className="text-sm text-white/80">{currentUser.membershipNo}</p>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
          onClick={() => handleNavigation("/profile")}
        >
          Edit Profile
        </Button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto py-3">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-start px-6 py-3 text-white/90 hover:bg-white/10 hover:text-white transition rounded-none"
            onClick={() => handleNavigation(item.route)}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Button>
        ))}
      </div>

      <Separator className="bg-white/10" />

      {/* Logout */}
      <div className="p-4">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-300 hover:text-red-500 hover:bg-red-500/10 transition"
          onClick={() => {
            navigate("/login");
            onClose();
          }}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>

        <p className="text-xs text-center text-white/60 mt-4">
          App Version 1.0.0
        </p>
      </div>

    </div>
  );
};

export default SideMenu;
