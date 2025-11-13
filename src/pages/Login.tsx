import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    identifier: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0E4C92] via-[#1C6DD0] to-[#68A7FF] flex flex-col p-6 transition-all duration-300 font-poppins">
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">

        <div className="text-center mb-8 animate-slide-up">
          <div className="inline-flex items-center justify-center w-[90px] h-[90px] bg-white rounded-2xl shadow-lg mb-4">
            <img src="/Images/logo.png" className="w-16 h-16" />
          </div>
          <h1 className="text-3xl font-semibold text-white mb-1 tracking-wide">
            Welcome Back
          </h1>
          <p className="text-white/80 text-sm">Sign in to continue to ICAI Mobile</p>
        </div>

        <Card className="p-6 shadow-xl border border-gray-200 bg-white/95 backdrop-blur-sm rounded-2xl animate-slide-up">
          <form onSubmit={handleLogin} className="space-y-5">

            <div className="space-y-2">
              <Label htmlFor="identifier" className="text-gray-700 font-medium">
                Email / Mobile / Membership No.
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="identifier"
                  placeholder="Enter your credentials"
                  value={credentials.identifier}
                  onChange={(e) =>
                    setCredentials({ ...credentials, identifier: e.target.value })
                  }
                  className="pl-10 h-11 rounded-xl focus:ring-2 focus:ring-blue-400 transition font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  className="pl-10 pr-10 h-11 rounded-xl focus:ring-2 focus:ring-blue-400 transition font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Button variant="link" className="text-blue-600 p-0 h-auto text-sm hover:underline">
                Forgot Password?
              </Button>
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all text-base shadow-md font-medium"
            >
              Login
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
