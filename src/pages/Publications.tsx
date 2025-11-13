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
    "Circular",
  ];

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch = pub.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || pub.category === activeCategory;
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
    <div className="min-h-screen bg-[#F4F7FB] font-[Poppins]">

      {/* Header */}
      <header className="bg-gradient-to-r from-[#0E4C92] to-[#1C6DD0] text-white px-4 py-4 shadow-xl sticky top-0 z-50">
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
            <h1 className="text-xl font-semibold tracking-wide">
              Publications
            </h1>
            <p className="text-xs text-white/80">Knowledge Repository</p>
          </div>
        </div>
      </header>

      <main className="p-4 space-y-4">

        {/* Search Bar */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-xl bg-white shadow-sm border border-gray-200"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-xl border-gray-300"
          >
            <Filter className="h-5 w-5 text-[#0E4C92]" />
          </Button>
        </div>

        {/* Category Tabs */}
        {/* Improved Filter Section */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
          px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap
          transition-all duration-200 
          shadow-sm border
          ${isActive
                    ? "bg-gradient-to-r from-[#0E4C92] to-[#1C6DD0] text-white border-transparent shadow-md scale-[1.03]"
                    : "bg-white text-[#0E4C92] border-[#0E4C92]/30 hover:bg-[#0E4C92]/10 hover:scale-[1.05]"
                  }
        `}
              >
                {category}
              </button>
            );
          })}
        </div>


        {/* Publications List */}
        <div className="space-y-4">
          {filteredPublications.map((pub) => (
            <Card
              key={pub.id}
              className="p-4 rounded-2xl bg-white shadow-md hover:shadow-lg border border-gray-100 transition"
            >
              <div className="flex gap-3">
                <div className="bg-[#0E4C92]/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Download className="h-6 w-6 text-[#0E4C92]" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-1 text-gray-800 line-clamp-2">
                    {pub.title}
                  </h3>

                  <div className="flex items-center gap-2 flex-wrap text-xs text-gray-500">
                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-[10px]">
                      {pub.category}
                    </span>
                    <span>{pub.date}</span>
                    <span>•</span>
                    <span>{pub.size}</span>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    {pub.downloads.toLocaleString()} downloads
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 rounded-lg border-blue-300"
                    onClick={() => setSelectedPub(pub)}
                  >
                    <Eye className="h-4 w-4 text-[#0E4C92]" />
                  </Button>

                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 rounded-lg border-blue-300"
                    onClick={() => handleDownloadPDF(pub)}
                  >
                    <Download className="h-4 w-4 text-[#0E4C92]" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No publications found</p>
          </div>
        )}
      </main>

      {/* Modal */}
      {selectedPub && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start justify-center z-50 px-4 overflow-y-auto py-6">
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full relative border border-gray-200">

      {/* Top Right Close Button */}
      <button
        className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition"
        onClick={() => setSelectedPub(null)}
      >
        <X className="h-4 w-4 text-gray-700" />
      </button>

      {/* Title */}
      <h2 className="text-xl font-semibold text-[#0E4C92] mb-4 mt-8">
        {selectedPub.title}
      </h2>

      {/* Basic Info */}
      <div className="space-y-2 text-sm text-gray-700 mb-4">
        <p><strong>Category:</strong> {selectedPub.category}</p>
        <p><strong>Date:</strong> {selectedPub.date}</p>
        <p><strong>Size:</strong> {selectedPub.size}</p>
        <p><strong>Downloads:</strong> {selectedPub.downloads}</p>
      </div>

      {/* Audit Trail */}
      <h3 className="text-md font-semibold text-[#0E4C92] mb-2">Audit Trail</h3>

      <div className="space-y-1 text-sm text-gray-600 mb-4">
        <p><strong>Created By:</strong> {selectedPub.createdBy || "—"}</p>
        <p><strong>Created At:</strong> {selectedPub.createdAt || "—"}</p>
        <p><strong>Last Edited By:</strong> {selectedPub.editedBy || "—"}</p>
        <p><strong>Last Edited At:</strong> {selectedPub.editedAt || "—"}</p>
        <p><strong>Approved/Published By:</strong> {selectedPub.approvedBy || "—"}</p>
        <p><strong>Published At:</strong> {selectedPub.publishedAt || "—"}</p>
        <p><strong>Unpublished At:</strong> {selectedPub.unpublishedAt || "—"}</p>
      </div>

      {/* Version History */}
      {selectedPub.versions?.length > 0 && (
        <div>
          <h3 className="text-md font-semibold text-[#0E4C92] mb-2">
            Version History
          </h3>

          <div className="space-y-2 text-sm text-gray-600">
            {selectedPub.versions.map((v, index) => (
              <div
                key={index}
                className="p-3 border rounded-xl bg-gray-50 shadow-sm"
              >
                <p><strong>Version:</strong> {v.version}</p>
                <p><strong>Edited By:</strong> {v.editedBy}</p>
                <p><strong>Date:</strong> {v.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <h3 className="text-md font-semibold text-[#0E4C92] mt-5 mb-1">
        Description
      </h3>

      <p className="text-sm text-gray-700 leading-relaxed pb-4">
        {selectedPub.description || "No description available."}
      </p>

      {/* Bottom Close Button */}
      <Button
        onClick={() => setSelectedPub(null)}
        className="w-full bg-[#0E4C92] text-white mt-3 rounded-xl hover:bg-[#0C3F78]"
      >
        Close
      </Button>

    </div>
  </div>
)}

    </div>
  );
};

export default Publications;
