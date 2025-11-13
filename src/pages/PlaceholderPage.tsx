import { useState } from "react";
import { ArrowLeft, ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const importantLinks = [
  {
    id: 1,
    title: "Income-tax Act, 1961",
    category: "Acts",
    url: "https://incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    id: 2,
    title: "Income-tax Rules, 1962",
    category: "Rules",
    url: "https://incometaxindia.gov.in/pages/rules/income-tax-rules.aspx",
  },
  {
    id: 3,
    title: "Finance Act (Latest)",
    category: "Finance Act",
    url: "https://www.indiabudget.gov.in/",
  },
  {
    id: 4,
    title: "CBDT Notifications",
    category: "Notifications",
    url: "https://incometaxindia.gov.in/pages/communications/notifications.aspx",
  },
  {
    id: 5,
    title: "Press Releases",
    category: "Press Release",
    url: "https://incometaxindia.gov.in/pages/communications/press-release.aspx",
  },
  {
    id: 6,
    title: "Income-tax FAQs",
    category: "FAQs",
    url: "https://incometax.gov.in/iec/foportal/faqs",
  },
  {
    id: 7,
    title: "Tutorials & Help",
    category: "Tutorials",
    url: "https://incometax.gov.in/iec/foportal/help",
  },
  {
    id: 8,
    title: "OECD Tax Portal",
    category: "International",
    url: "https://oecd.org/tax/",
  },
];

const categories = [
  "All",
  "Acts",
  "Rules",
  "Finance Act",
  "Notifications",
  "Press Release",
  "FAQs",
  "Tutorials",
  "International",
];

export default function PlaceholderPage () {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredLinks = importantLinks.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      activeCategory === "All" || item.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-[#F4F7FB] font-[Poppins] pb-10">

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
            <h1 className="text-xl font-semibold tracking-wide">Important Links</h1>
            <p className="text-xs text-white/80">Official & Verified Resources</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-4">

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search links..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 rounded-xl bg-white shadow-sm border border-gray-200"
          />
        </div>

        {/* Categories */}
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

        {/* Links List */}
        <div className="space-y-3">
          {filteredLinks.map((link) => (
            <Card
              key={link.id}
              className="p-4 rounded-2xl bg-white shadow-md hover:shadow-xl transition border border-gray-100"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-800">{link.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{link.category}</p>
                </div>

                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-xl border-[#0E4C92] hover:bg-[#0E4C92]/10"
                  onClick={() => window.open(link.url, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 text-[#0E4C92]" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredLinks.length === 0 && (
          <p className="text-center text-gray-500 py-12">No links found</p>
        )}
      </main>
    </div>
  );
}
