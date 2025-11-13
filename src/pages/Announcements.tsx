import { useState } from "react";
import { ArrowLeft, Filter, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { announcements } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";

const Announcements = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Seminar", "Course", "Exam", "Draft", "General"];

  const filteredAnnouncements = announcements.filter(
    (announcement) => activeCategory === "All" || announcement.category === activeCategory
  );

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Seminar: "bg-blue-500",
      Course: "bg-green-500",
      Exam: "bg-orange-500",
      Draft: "bg-purple-500",
      General: "bg-gray-500",
    };
    return colors[category] || "bg-primary";
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
            <h1 className="text-lg font-semibold">Announcements</h1>
            <p className="text-xs text-white/80">Latest Updates</p>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Filter className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="p-4 space-y-4">
        {/* Category Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`cursor-pointer whitespace-nowrap ${
                activeCategory === category ? "bg-primary text-white" : "hover:bg-muted"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Announcements Timeline */}
        <div className="space-y-3">
          {filteredAnnouncements.map((announcement) => (
            <Card key={announcement.id} className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={`${getCategoryColor(
                      announcement.category
                    )} w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {announcement.date.split(" ")[0]}
                  </div>
                  <div className="w-0.5 h-full bg-border mt-2"></div>
                </div>
                <div className="flex-1 min-w-0 pb-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-base line-clamp-2">{announcement.title}</h3>
                    <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  </div>
                  <Badge variant="secondary" className="mb-2">
                    {announcement.category}
                  </Badge>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {announcement.description}
                  </p>
                  <p className="text-xs text-muted-foreground">{announcement.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Announcements;
