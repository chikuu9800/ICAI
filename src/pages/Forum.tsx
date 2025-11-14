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

  // NEW: Post Question Modal
  const [showPostModal, setShowPostModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    description: "",
    category: "",
  });

  const categories = [
    "Return Forms",
    "Capital Gains",
    "Assessment Procedure",
    "International Taxation",
    "Transfer Pricing",
    "TDS / TCS",
    "GST",
    "Corporate Tax",
    "Miscellaneous",
  ];

  const filteredQuestions = forumQuestions.filter((q) => {
    const matchesSearch = q.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || q.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePost = () => {
    console.log("Posted Question:", newQuestion);

    // Clear the form & close modal
    setNewQuestion({ title: "", description: "", category: "" });
    setShowPostModal(false);
  };

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

          {/* ALL Category */}
          <button
            onClick={() => setActiveCategory("All")}
            className={`
      px-4 py-1.5 rounded-full text-sm whitespace-nowrap 
      transition-all duration-200 shadow-sm border
      ${activeCategory === "All"
                ? "bg-[#0E4C92] text-white border-transparent shadow-md scale-[1.03]"
                : "bg-white text-[#0E4C92] border-[#0E4C92]/30 hover:bg-[#0E4C92]/10 hover:scale-[1.05]"
              }
    `}
          >
            All
          </button>

          {/* Other Categories */}
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
        px-4 py-1.5 rounded-full text-sm whitespace-nowrap 
        transition-all duration-200 shadow-sm border
        ${activeCategory === category
                  ? "bg-[#0E4C92] text-white border-transparent shadow-md scale-[1.03]"
                  : "bg-white text-[#0E4C92] border-[#0E4C92]/30 hover:bg-[#0E4C92]/10 hover:scale-[1.05]"
                }
      `}
            >
              {category}
            </button>
          ))}

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

                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-sm line-clamp-2">
                      {question.title}
                    </h3>
                    {question.expertAnswered && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
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
      </main>

      {/* Floating Create Question Button */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-[#1C6DD0] hover:bg-[#175EB3] text-white z-50"
        onClick={() => setShowPostModal(true)}
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

      {/* ---------- Modal: Post New Question ---------- */}
      {showPostModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg relative border border-gray-200">

            {/* Close */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setShowPostModal(false)}
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-xl font-semibold text-[#0E4C92] mb-4">
              Ask a Question
            </h2>

            {/* Form */}
            <div className="space-y-4">

              <div>
                <label className="text-sm font-medium text-gray-600">Title</label>
                <Input
                  placeholder="Enter your question title..."
                  value={newQuestion.title}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, title: e.target.value })
                  }
                  className="mt-1 rounded-xl"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Description</label>
                <textarea
                  placeholder="Enter your detailed question..."
                  value={newQuestion.description}
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      description: e.target.value,
                    })
                  }
                  className="mt-1 w-full h-32 p-3 border border-gray-300 rounded-xl focus:ring-[#0E4C92]"
                ></textarea>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Category</label>
                <select
                  value={newQuestion.category}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, category: e.target.value })
                  }
                  className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:ring-[#0E4C92]"
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option value={cat} key={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <Button
                  className="flex-1 bg-[#0E4C92] text-white rounded-xl hover:bg-[#0C3F78]"
                  onClick={handlePost}
                >
                  Post Question
                </Button>

                <Button
                  className="flex-1 rounded-xl border-gray-300 text-gray-700"
                  variant="outline"
                  onClick={() => setShowPostModal(false)}
                >
                  Cancel
                </Button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Forum;
