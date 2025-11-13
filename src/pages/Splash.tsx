import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E4C92] to-[#1C6DD0] flex flex-col items-center justify-center p-6 font-[Poppins] animate-fadeIn">

      {/* Logo Glass Card */}
      <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-xl border border-white/20 transform animate-scaleUp">
        <div className="flex items-center justify-center w-[100px] h-[100px] bg-white rounded-2xl shadow-lg">
          <img src="/Images/logo.png" className="w-20 h-20" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-semibold text-white mt-8 tracking-wide drop-shadow-md">
        ICAI Mobile
      </h1>

      {/* Subtitle */}
      <p className="text-white/90 text-center mt-3 max-w-md text-[17px] leading-relaxed drop-shadow">
        Direct Taxes Committee & <br />
        Committee on International Taxation
      </p>

      {/* Dots Loader (Static but animated opacity) */}
      <div className="mt-10 flex items-center space-x-3">
        <div className="w-3 h-3 bg-white/80 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-white/80 rounded-full animate-pulse delay-150"></div>
        <div className="w-3 h-3 bg-white/80 rounded-full animate-pulse delay-300"></div>
      </div>

    </div>
  );
};

export default Splash;
