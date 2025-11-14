import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { committees } from "@/lib/mockData";

const Branch = () => {
  const navigate = useNavigate();

  const handleSelectCommittee = (committeeId: string) => {
    localStorage.setItem("selectedCommittee", committeeId);
    navigate(`/dashboard/`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0E4C92] via-[#1C6DD0] to-[#68A7FF] font-poppins flex flex-col">

      {/* Header */}
      <div className="p-8 text-center">
        <h1 className="text-3xl font-semibold text-white tracking-wide">
          Select Committee
        </h1>
        <p className="text-white/80 text-sm mt-1">
          Choose which committee you want to explore
        </p>
      </div>

      {/* Card Container */}
      <div className="flex-1 p-6 space-y-6 max-w-md mx-auto w-full">

        {/* ------- DTC CARD ------- */}
        <Card className="bg-white/95 shadow-xl border border-white/40 rounded-2xl overflow-hidden backdrop-blur-sm transition-all hover:shadow-2xl">
          <div className="p-6">
            <div className="flex items-center gap-4">

              {/* Chairman Image */}
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                <img
                  src={committees.DTC.chairmanImage}
                  alt={committees.DTC.chairmanName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-bold text-blue-700">
                  {committees.DTC.abbreviation}
                </h2>
                <p className="text-sm font-semibold text-gray-900">
                  {committees.DTC.name}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  {committees.DTC.description}
                </p>
                <p className="text-xs text-gray-700 mt-1">
                  <span className="font-medium">Chairman:</span>{" "}
                  {committees.DTC.chairmanName}
                </p>
              </div>
            </div>

            <Button
              onClick={() => handleSelectCommittee("DTC")}
              className="w-full mt-5 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
            >
              Explore DTC <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>

        {/* ------- CITAX CARD ------- */}
        <Card className="bg-white/95 shadow-xl border border-white/40 rounded-2xl overflow-hidden backdrop-blur-sm transition-all hover:shadow-2xl">
          <div className="p-6">
            <div className="flex items-center gap-4">

              {/* Chairman Image */}
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                <img
                  src={committees.CITAX.chairmanImage}
                  alt={committees.CITAX.chairmanName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-bold text-blue-800">
                  {committees.CITAX.abbreviation}
                </h2>
                <p className="text-sm font-semibold text-gray-900">
                  {committees.CITAX.name}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  {committees.CITAX.description}
                </p>
                <p className="text-xs text-gray-700 mt-1">
                  <span className="font-medium">Chairman:</span>{" "}
                  {committees.CITAX.chairmanName}
                </p>
              </div>
            </div>

            <Button
              onClick={() => handleSelectCommittee("CITAX")}
              className="w-full mt-5 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
            >
              Explore CITAX <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="px-6 pb-6">
        <Card className="bg-white/20 text-white/90 p-4 rounded-xl backdrop-blur-sm border border-white/30">
          <p className="text-xs text-center">
            You can switch committees anytime from the dashboard menu.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Branch;
