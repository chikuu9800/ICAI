import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const PDFViewer = ({ pdfUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex flex-col z-50">

      {/* Header */}
      <div className="p-4 bg-[#0E4C92] text-white flex justify-between items-center">
        <h2 className="text-lg font-semibold">PDF Viewer</h2>
        <button
          onClick={onClose}
          className="p-2 bg-white/20 rounded-full hover:bg-white/30"
        >
          <X className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 overflow-hidden">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfUrl} />
        </Worker>
      </div>

      {/* Bottom Close Button */}
      <div className="p-4 bg-white shadow-lg">
        <Button
          onClick={onClose}
          className="w-full bg-[#0E4C92] text-white rounded-xl"
        >
          Close Viewer
        </Button>
      </div>

    </div>
  );
};

export default PDFViewer;
