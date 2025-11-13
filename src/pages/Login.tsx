import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Mail, Lock, Fingerprint, Eye, EyeOff } from "lucide-react";
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

  const handleBiometric = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-light to-secondary flex flex-col p-6">
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        <div className="text-center mb-8 animate-slide-up">
          <div className="inline-flex items-center justify-center w-[100px] h-[100px] bg-white rounded-2xl shadow-xl mb-4">
            <img src="/Images/logo.png" className="w-20 h-20 " />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-white/80">Sign in to continue to ICAI Mobile</p>
        </div>

        <Card className="p-6 shadow-2xl animate-slide-up">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="identifier">Email / Mobile / Membership No.</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="identifier"
                  placeholder="Enter your credentials"
                  value={credentials.identifier}
                  onChange={(e) =>
                    setCredentials({ ...credentials, identifier: e.target.value })
                  }
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Button variant="link" className="text-primary p-0 h-auto">
                Forgot Password?
              </Button>
            </div>

            <div className="space-y-3">
              <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary-light">
                Login
              </Button>
              
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
