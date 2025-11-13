import {
  ArrowLeft,
  Bell,
  Calendar,
  MessageCircle,
  Megaphone,
  Settings as SettingsIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { notifications } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();

  const getIcon = (type: string) => {
    const icons: Record<string, any> = {
      event: Calendar,
      forum: MessageCircle,
      announcement: Megaphone,
      system: SettingsIcon,
    };
    const Icon = icons[type] || Bell;
    return <Icon className="h-5 w-5" />;
  };

  const getIconColor = (type: string) => {
    const colors: Record<string, string> = {
      event: "bg-green-500",
      forum: "bg-purple-500",
      announcement: "bg-orange-500",
      system: "bg-blue-500",
    };
    return colors[type] || "bg-primary";
  };

  return (
    <div className="min-h-screen bg-background font-poppins">

      {/* Header */}
      <header className="bg-gradient-to-b from-[#0E4C92] to-[#1C6DD0] text-white px-4 py-4 shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-3">

          {/* Back button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          {/* Title */}
          <div className="flex-1">
            <h1 className="text-lg font-semibold tracking-wide">Notifications</h1>
            <p className="text-xs text-white/80">Stay Updated</p>
          </div>

          {/* Mark all read */}
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 font-poppins">
            Mark all read
          </Button>
        </div>
      </header>

      {/* Body */}
      <main className="p-4 font-poppins">

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-4 bg-muted/50 rounded-xl">
            <TabsTrigger value="all" className="font-poppins text-xs">All</TabsTrigger>
            <TabsTrigger value="events" className="font-poppins text-xs">Events</TabsTrigger>
            <TabsTrigger value="forum" className="font-poppins text-xs">Forum</TabsTrigger>
            <TabsTrigger value="announcements" className="font-poppins text-xs">News</TabsTrigger>
            <TabsTrigger value="system" className="font-poppins text-xs">System</TabsTrigger>
          </TabsList>

          {/* ALL Notifications */}
          <TabsContent value="all" className="space-y-3">
            {notifications.map((notification) => (
              <Card
                key={notification.id}
                className={`p-4 rounded-xl transition-shadow cursor-pointer font-poppins
                  ${notification.unread
                    ? "border-l-4 border-l-primary bg-primary/5 shadow-sm"
                    : "shadow-sm"
                  }`}
              >
                <div className="flex gap-3">

                  {/* Icon */}
                  <div
                    className={`${getIconColor(
                      notification.type
                    )} w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0`}
                  >
                    {getIcon(notification.type)}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-medium text-sm leading-tight text-foreground line-clamp-2">
                        {notification.title}
                      </p>
                      {notification.unread && (
                        <span className="w-2 h-2 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                      )}
                    </div>

                    <p className="text-xs text-muted-foreground mb-2 font-poppins">
                      {notification.time}
                    </p>

                    {notification.action && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 text-xs font-poppins"
                      >
                        {notification.action}
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Event Filter */}
          <TabsContent value="events" className="space-y-3">
            {notifications
              .filter((n) => n.type === "event")
              .map((notification) => (
                <Card
                  key={notification.id}
                  className="p-4 rounded-xl shadow-sm font-poppins cursor-pointer bg-primary/5"
                >
                  <div className="flex gap-3 items-start">

                    {/* FIXED ICON */}
                    <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Calendar className="h-5 w-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm leading-tight line-clamp-2">
                        {notification.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                </Card>
              ))}
          </TabsContent>

          {/* Other Tabs */}
          <TabsContent value="forum" className="text-center py-12 text-muted-foreground font-poppins">
            No forum notifications
          </TabsContent>

          <TabsContent value="announcements" className="text-center py-12 text-muted-foreground font-poppins">
            No announcements
          </TabsContent>

          <TabsContent value="system" className="text-center py-12 text-muted-foreground font-poppins">
            No system notifications
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Notifications;
