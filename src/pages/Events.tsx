import { useState } from "react";
import { ArrowLeft, Calendar, MapPin, Video, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { upcomingEvents } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();

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
            <h1 className="text-lg font-semibold">Events & Webinars</h1>
            <p className="text-xs text-white/80">Stay Updated</p>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Calendar className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="p-4">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="registered">Registered</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-primary to-primary-light p-4 text-white">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <p className="text-sm opacity-90 mt-1">{event.time}</p>
                    </div>
                    <Badge className="bg-white/20 text-white border-0">
                      {event.status === "open" ? "Open" : "Early Bird"}
                    </Badge>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={event.speakerImage} />
                      <AvatarFallback>SP</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{event.speaker}</p>
                      <p className="text-xs text-muted-foreground">Speaker</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {event.mode.includes("Online") ? (
                      <Video className="h-4 w-4" />
                    ) : (
                      <MapPin className="h-4 w-4" />
                    )}
                    <span>{event.mode}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Seats: {event.seats}</span>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary-light">
                    Register Now
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            <div className="text-center py-12">
              <p className="text-muted-foreground">No past events</p>
            </div>
          </TabsContent>

          <TabsContent value="registered" className="space-y-4">
            <div className="text-center py-12">
              <p className="text-muted-foreground">You haven't registered for any events yet</p>
              <Button className="mt-4" onClick={() => navigate("/events")}>
                Browse Events
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Events;
