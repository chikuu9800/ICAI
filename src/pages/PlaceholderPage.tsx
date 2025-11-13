import { ArrowLeft, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
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
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
      </header>

      <main className="p-4 flex items-center justify-center min-h-[70vh]">
        <Card className="p-8 text-center max-w-md">
          <div className="bg-muted w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Construction className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
          <p className="text-muted-foreground mb-6">
            {description || `${title} feature is under development and will be available soon.`}
          </p>
          <Button onClick={() => navigate("/dashboard")}>Back to Dashboard</Button>
        </Card>
      </main>
    </div>
  );
};

export default PlaceholderPage;
