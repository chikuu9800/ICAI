import { useState } from "react";
import { ArrowLeft, Search, Download, Eye, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { publications } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";

const Publications = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPub, setSelectedPub] = useState(null);

  const categories = [
    "All",
    "Guidance Note",
    "Technical Guide",
    "Background Material",
    "Acts & Rules",
    "Circular"
  ];

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || pub.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // === PDF DOWNLOAD FUNCTION ===
  const handleDownloadPDF = (publication) => {
    const doc = new jsPDF();

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text(publication.title, 10, 20);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Category: ${publication.category}`, 10, 35);
    doc.text(`Date: ${publication.date}`, 10, 45);
    doc.text(`Size: ${publication.size}`, 10, 55);

    doc.text("Description:", 10, 70);
    doc.text(publication.description || "No description available.", 10, 80, {
      maxWidth: 180,
    });

    doc.save(`${publication.title}.pdf`);
  };

  return (
    <div className="min-h-screen bg-background font-[Poppins]">

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
            <h1 className="text-lg font-semibold">Publications</h1>
            <p className="text-xs text-white/80">Knowledge Repository</p>
          </div>
        </div>
      </header>

      <main className="p-4 space-y-4">
        
        {/* Search Bar */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-5 w-5" />
          </Button>
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

        {/* Publications List */}
        <div className="space-y-3">
          {filteredPublications.map((pub) => (
            <Card key={pub.id} className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex gap-3">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2">{pub.title}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary" className="text-xs">{pub.category}</Badge>
                    <span className="text-xs text-muted-foreground">{pub.date}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{pub.size}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {pub.downloads.toLocaleString()} downloads
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  {/* === VIEW BUTTON (OPEN MODAL) === */}
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8"
                    onClick={() => setSelectedPub(pub)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>

                  {/* === DOWNLOAD PDF BUTTON === */}
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8"
                    onClick={() => handleDownloadPDF(pub)}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No publications found</p>
          </div>
        )}
      </main>

      {/* =============== MODAL (VIEW PUBLICATION) =============== */}
      {selectedPub && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setSelectedPub(null)}
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-lg font-semibold mb-2">{selectedPub.title}</h2>

            <div className="text-sm text-gray-600 space-y-1 mb-4">
              <p><strong>Category:</strong> {selectedPub.category}</p>
              <p><strong>Date:</strong> {selectedPub.date}</p>
              <p><strong>Size:</strong> {selectedPub.size}</p>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              {selectedPub.description || "No description available."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Publications;
