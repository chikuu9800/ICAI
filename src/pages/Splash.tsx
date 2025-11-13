import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Building2 } from "lucide-react";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen gradient-hero flex flex-col items-center justify-center p-6">
      <div className="animate-pulse-slow">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
          <Building2 className="w-24 h-24 text-white" />
        </div>
      </div>
      
      <h1 className="text-4xl font-bold text-white mt-8 animate-slide-up">
        ICAI Mobile
      </h1>
      
      <p className="text-white/90 text-center mt-4 max-w-md animate-fade-in">
        Direct Taxes Committee &<br />
        Committee on International Taxation
      </p>

      <div className="mt-12 flex space-x-2 animate-fade-in">
        <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-100"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-200"></div>
      </div>
    </div>
  );
};

export default Splash;
