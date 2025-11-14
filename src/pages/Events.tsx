import { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Video,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { upcomingEvents } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();

  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [openVideo, setOpenVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleRegister = (event) => {
    const alreadyRegistered = registeredEvents.some((e) => e.id === event.id);

    if (!alreadyRegistered) {
      setRegisteredEvents([...registeredEvents, event]);
      alert("Successfully Registered!");
    }
  };

  const handleWatch = (url) => {
    setVideoUrl(url);
    setOpenVideo(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] font-[Poppins]">

      {/* Header */}
      <header className="bg-gradient-to-r from-[#0E4C92] to-[#1C6DD0] text-white px-4 py-4 shadow-xl sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-full"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          <div className="flex-1">
            <h1 className="text-xl font-semibold tracking-wide">
              Events & Webinars
            </h1>
            <p className="text-xs text-white/80">Stay Updated</p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-full"
          >
            <Calendar className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="p-4">
        <Tabs defaultValue="upcoming" className="w-full">

          {/* Tabs */}
          <TabsList className="grid grid-cols-3 bg-white p-1 rounded-xl shadow-sm mb-4">
            <TabsTrigger
              value="upcoming"
              className="rounded-lg data-[state=active]:bg-[#0E4C92] data-[state=active]:text-white font-medium text-[#0E4C92]"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="rounded-lg data-[state=active]:bg-[#0E4C92] data-[state=active]:text-white font-medium text-[#0E4C92]"
            >
              Past
            </TabsTrigger>
            <TabsTrigger
              value="registered"
              className="rounded-lg data-[state=active]:bg-[#0E4C92] data-[state=active]:text-white font-medium text-[#0E4C92]"
            >
              Registered
            </TabsTrigger>
          </TabsList>

          {/* Upcoming */}
          <TabsContent value="upcoming" className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg border border-gray-100 transition"
              >
                {/* Top Section */}
                <div className="bg-gradient-to-r from-[#0E4C92] to-[#1C6DD0] p-4 text-white">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        {event.title}
                      </h3>

                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>

                      <p className="text-sm opacity-90 mt-1">{event.time}</p>
                    </div>

                    <Badge className="bg-white/25 text-white border-none px-3 py-1 rounded-full">
                      {event.status === "open"
                        ? "Open"
                        : event.status === "closed"
                        ? "Closed"
                        : "Early Bird"}
                    </Badge>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 space-y-4">

                  {/* Speaker */}
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={event.speakerImage} />
                      <AvatarFallback className="bg-[#0E4C92]/20 text-[#0E4C92]">
                        SP
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="text-sm font-medium">{event.speaker}</p>
                      <p className="text-xs text-gray-500">Speaker</p>
                    </div>
                  </div>

                  {/* Mode */}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    {event.mode.includes("Online") ? (
                      <Video className="h-4 w-4" />
                    ) : (
                      <MapPin className="h-4 w-4" />
                    )}
                    <span>{event.mode}</span>
                  </div>

                  {/* Seats */}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>Seats: {event.seats}</span>
                  </div>

                  {/* Register / Watch Now */}
                  {event.status === "closed" ? (
                    <Button disabled className="w-full bg-gray-400 rounded-xl">
                      Registration Closed
                    </Button>
                  ) : registeredEvents.some((e) => e.id === event.id) ? (
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl"
                      onClick={() => handleWatch(event.videoUrl)}
                    >
                      Watch Now
                    </Button>
                  ) : (
                    <Button
                      className="w-full bg-[#0E4C92] hover:bg-[#0C3F78] text-white rounded-xl"
                      onClick={() => handleRegister(event)}
                    >
                      Register Now
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Past Events */}
          <TabsContent value="past">
            <div className="text-center py-12 text-gray-600">
              No past events
            </div>
          </TabsContent>

          {/* Registered Events */}
          <TabsContent value="registered">
            {registeredEvents.length === 0 ? (
              <div className="text-center py-12 text-gray-600">
                You haven't registered for any events yet
              </div>
            ) : (
              <div className="space-y-4">
                {registeredEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="p-4 rounded-2xl bg-white shadow-md border"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-sm text-gray-600">{event.date}</p>
                      </div>

                      <Button
                        className="bg-green-600 text-white hover:bg-green-700 rounded-xl"
                        onClick={() => handleWatch(event.videoUrl)}
                      >
                        Watch Now
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      {/* Video Modal */}
      {/* VIDEO MODAL */}
{openVideo && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md">

    {/* Close Button */}
    <button
      className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-3 rounded-full transition"
      onClick={() => setOpenVideo(false)}
    >
      <X className="h-6 w-6 text-white" />
    </button>

    {/* Modal Content */}
    <div className="w-full max-w-4xl px-4 flex flex-col items-center">

      {/* Video Player */}
      <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          src={`${videoUrl}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* Open on YouTube Button */}
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5"
      >
        <Button className="bg-[#FF0000] hover:bg-[#cc0000] text-white px-6 py-3 rounded-xl flex items-center gap-2">
          Open on YouTube
          <Video className="h-5 w-5" />
        </Button>
      </a>
    </div>

  </div>
)}

    </div>
  );
};

export default Events;
