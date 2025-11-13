import { useState } from "react";
import { ArrowLeft, Filter, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { announcements } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";

const Announcements = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);

  const categories = ["All", "Seminar", "Course", "Exam", "Draft", "General"];

  const filteredAnnouncements = announcements.filter(
    (a) => activeCategory === "All" || a.category === activeCategory
  );

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Seminar: "bg-blue-600",
      Course: "bg-green-600",
      Exam: "bg-orange-600",
      Draft: "bg-purple-600",
      General: "bg-gray-500",
    };
    return colors[category] || "bg-primary";
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
            <h1 className="text-xl font-semibold tracking-wide">Announcements</h1>
            <p className="text-xs text-white/80">Latest Updates</p>
          </div>

          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Filter className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="p-4 space-y-4">

        {/* Category Chips */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-1.5 rounded-full text-sm whitespace-nowrap 
                  transition-all duration-200 shadow-sm border
                  ${isActive
                    ? "bg-[#0E4C92] text-white border-transparent shadow-md scale-[1.03]"
                    : "bg-white text-[#0E4C92] border-[#0E4C92]/30 hover:bg-[#0E4C92]/10 hover:scale-[1.05]"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {filteredAnnouncements.map((announcement) => (
            <Card
              key={announcement.id}
              onClick={() => setSelectedAnnouncement(announcement)}
              className="p-4 rounded-2xl bg-white shadow-md hover:shadow-xl border border-gray-100 transition cursor-pointer"
            >
              <div className="flex gap-4">
                
                {/* Date Bubble */}
                <div className="flex flex-col items-center">
                  <div
                    className={`${getCategoryColor(
                      announcement.category
                    )} w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-md`}
                  >
                    {announcement.date.split(" ")[0]}
                  </div>
                  <div className="w-1 h-full bg-gray-200 my-2 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-base text-gray-800 leading-tight line-clamp-2">
                      {announcement.title}
                    </h3>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>

                  <Badge className="px-3 py-1 rounded-full bg-[#0E4C92]/10 text-[#0E4C92] mb-2">
                    {announcement.category}
                  </Badge>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                    {announcement.description}
                  </p>

                  <p className="text-xs text-gray-400 font-medium">
                    {announcement.date}
                  </p>
                </div>

              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Modal for Full Announcement Details */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg relative border border-gray-200">

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setSelectedAnnouncement(null)}
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-lg font-semibold text-[#0E4C92] mb-2">
              {selectedAnnouncement.title}
            </h2>

            <Badge className="bg-[#0E4C92]/10 text-[#0E4C92] px-3 py-1 rounded-full mb-3">
              {selectedAnnouncement.category}
            </Badge>

            <p className="text-gray-600 text-sm mb-4">
              <strong>Date:</strong> {selectedAnnouncement.date}
            </p>

            <p className="text-gray-700 text-sm leading-relaxed">
              {selectedAnnouncement.description}
            </p>

          </div>
        </div>
      )}
    </div>
  );
};

export default Announcements;
