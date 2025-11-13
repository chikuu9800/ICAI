import { useState } from "react";
import {
  ArrowLeft,
  Search,
  MessageCircle,
  Eye,
  Plus,
  CheckCircle,
  X,
} from "lucide-react";

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
  const [selectedQuestion, setSelectedQuestion] = useState<any>(null);

  const categories = [
    "All",
    "Income Tax",
    "GST",
    "International Tax",
    "Corporate Tax",
    "TDS/TCS",
  ];

  const filteredQuestions = forumQuestions.filter((q) => {
    const matchesSearch = q.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || q.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#F4F7FB] font-[Poppins] pb-20">
      
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
              Discussion Forum
            </h1>
            <p className="text-xs text-white/80">Ask & Answer</p>
          </div>
        </div>
      </header>

      <main className="p-4 space-y-4">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-xl bg-white shadow-sm border border-gray-200"
          />
        </div>

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
                  ${
                    isActive
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

        {/* Questions List */}
        <div className="space-y-3">
          {filteredQuestions.map((question) => (
            <Card
              key={question.id}
              className="p-4 hover:shadow-xl rounded-2xl transition cursor-pointer bg-white border border-gray-100"
              onClick={() => setSelectedQuestion(question)}
            >
              <div className="flex gap-3">
                <Avatar className="h-10 w-10 flex-shrink-0">
                  <AvatarImage src={question.authorImage} />
                  <AvatarFallback>
                    {question.author.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-sm line-clamp-2">
                      {question.title}
                    </h3>
                    {question.expertAnswered && (
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    )}
                  </div>

                  <p className="text-xs text-gray-500 mb-2">
                    by {question.author} • {question.time}
                  </p>

                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge className="bg-[#0E4C92]/10 text-[#0E4C92] px-2 py-0.5 text-[10px] rounded-full">
                      {question.category}
                    </Badge>

                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <MessageCircle className="h-3 w-3" />
                      <span>{question.replies}</span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Eye className="h-3 w-3" />
                      <span>{question.views}</span>
                    </div>

                    {question.expertAnswered && (
                      <Badge className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full">
                        Expert Answered
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No questions found</p>
          </div>
        )}
      </main>

      {/* Floating Create Question Button */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-[#1C6DD0] hover:bg-[#175EB3] text-white z-50"
        onClick={() => navigate("/post-question")}
      >
        <Plus className="h-6 w-6" />
      </Button>

      {/* ---------- Modal: Question Detail ---------- */}
      {selectedQuestion && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg relative border border-gray-200">

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setSelectedQuestion(null)}
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-lg font-semibold text-[#0E4C92] mb-1">
              {selectedQuestion.title}
            </h2>

            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
              <Avatar className="h-6 w-6">
                <AvatarImage src={selectedQuestion.authorImage} />
                <AvatarFallback>
                  {selectedQuestion.author[0]}
                </AvatarFallback>
              </Avatar>
              <span>by {selectedQuestion.author} • {selectedQuestion.time}</span>
            </div>

            <Badge className="bg-[#0E4C92]/10 text-[#0E4C92] px-3 py-1 rounded-full mb-4">
              {selectedQuestion.category}
            </Badge>

            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              {selectedQuestion.description || "No description available."}
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                <span>{selectedQuestion.replies} Replies</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{selectedQuestion.views} Views</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Forum;
