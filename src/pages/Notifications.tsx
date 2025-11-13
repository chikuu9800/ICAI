import { ArrowLeft, Bell, Calendar, MessageCircle, Megaphone, Settings as SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-white px-4 py-4 shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Notifications</h1>
            <p className="text-xs text-white/80">Stay Updated</p>
          </div>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            Mark all read
          </Button>
        </div>
      </header>

      <main className="p-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="forum">Forum</TabsTrigger>
            <TabsTrigger value="announcements">News</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3">
            {notifications.map((notification) => (
              <Card
                key={notification.id}
                className={`p-4 hover:shadow-lg transition-shadow cursor-pointer ${
                  notification.unread ? "border-l-4 border-l-primary bg-primary/5" : ""
                }`}
              >
                <div className="flex gap-3">
                  <div
                    className={`${getIconColor(
                      notification.type
                    )} w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0`}
                  >
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-medium text-sm line-clamp-2">{notification.title}</p>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{notification.time}</p>
                    {notification.action && (
                      <Button size="sm" variant="outline" className="h-7 text-xs">
                        {notification.action}
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="events" className="space-y-3">
            {notifications
              .filter((n) => n.type === "event")
              .map((notification) => (
                <Card
                  key={notification.id}
                  className={`p-4 hover:shadow-lg transition-shadow cursor-pointer ${
                    notification.unread ? "border-l-4 border-l-primary bg-primary/5" : ""
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{notification.title}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="forum" className="text-center py-12">
            <p className="text-muted-foreground">No forum notifications</p>
          </TabsContent>

          <TabsContent value="announcements" className="text-center py-12">
            <p className="text-muted-foreground">No announcement notifications</p>
          </TabsContent>

          <TabsContent value="system" className="text-center py-12">
            <p className="text-muted-foreground">No system notifications</p>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Notifications;
