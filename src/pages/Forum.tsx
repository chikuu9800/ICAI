import { useState } from "react";
import { ArrowLeft, Search, MessageCircle, Eye, Plus, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { forumQuestions } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";

const Forum = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Income Tax", "GST", "International Tax", "Corporate Tax", "TDS/TCS"];

  const filteredQuestions = forumQuestions.filter((q) => {
    const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || q.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
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
            <h1 className="text-lg font-semibold">Discussion Forum</h1>
            <p className="text-xs text-white/80">Ask & Answer</p>
          </div>
        </div>
      </header>

      <main className="p-4 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`cursor-pointer whitespace-nowrap ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "hover:bg-muted"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Questions List */}
        <div className="space-y-3">
          {filteredQuestions.map((question) => (
            <Card key={question.id} className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex gap-3">
                <Avatar className="h-10 w-10 flex-shrink-0">
                  <AvatarImage src={question.authorImage} />
                  <AvatarFallback>
                    {question.author.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-sm line-clamp-2">
                      {question.title}
                    </h3>
                    {question.expertAnswered && (
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    by {question.author} • {question.time}
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge variant="secondary" className="text-xs">
                      {question.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MessageCircle className="h-3 w-3" />
                      <span>{question.replies}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Eye className="h-3 w-3" />
                      <span>{question.views}</span>
                    </div>
                    {question.expertAnswered && (
                      <Badge className="bg-success text-xs">Expert Answered</Badge>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No questions found</p>
          </div>
        )}
      </main>

      {/* Floating Action Button */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-secondary hover:bg-secondary-light z-50"
        onClick={() => navigate("/post-question")}
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Forum;
