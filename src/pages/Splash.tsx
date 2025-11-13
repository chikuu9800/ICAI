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
    <div className="min-h-screen bg-gradient-to-b from-[#0E4C92] to-[#1C6DD0] flex flex-col items-center justify-center p-6 font-poppins">

      {/* Logo */}
      <div>
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
        <div className="inline-flex items-center justify-center w-[90px] h-[90px] bg-white rounded-2xl shadow-lg mb-4">
            <img src="/Images/logo.png" className="w-16 h-16" />
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-semibold text-white mt-8 tracking-wide">
        ICAI Mobile
      </h1>

      {/* Subtitle */}
      <p className="text-white/90 text-center mt-3 max-w-md">
        Direct Taxes Committee &<br />
        Committee on International Taxation
      </p>

      {/* 3 Static Dots */}
      <div className="mt-10 flex items-center space-x-3">
        <div className="w-3 h-3 bg-white/70 rounded-full"></div>
        <div className="w-3 h-3 bg-white/70 rounded-full"></div>
        <div className="w-3 h-3 bg-white/70 rounded-full"></div>
      </div>

    </div>
  );
};

export default Splash;
