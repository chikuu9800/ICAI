import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, CreditCard, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { mockLoginUsers } from "@/lib/mockData";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const [generatedOTP, setGeneratedOTP] = useState("");

  // ---------------- CLICK TO FILL CREDENTIAL ----------------
  const handleFillCredential = (value: string) => {
    setIdentifier(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ------------------ SEND OTP ------------------
  const handleSendOTP = () => {
    if (!identifier) {
      toast.error("Enter Mobile / Email / Membership No.");
      return;
    }

    const foundUser = mockLoginUsers.find(
      (user) =>
        user.mobile === identifier ||
        user.email === identifier ||
        user.membershipNo === identifier
    );

    if (!foundUser) {
      toast.error("No user found with these credentials!");
      return;
    }

    const otp = foundUser.otp || "123456";
    setGeneratedOTP(otp);
    setOtpSent(true);

    toast.success(`OTP Sent! (TEMP: ${otp})`);
  };

  // ------------------ VERIFY OTP ------------------
  const handleVerifyOTP = () => {
    if (!otp) {
      toast.error("Enter OTP");
      return;
    }

    if (otp !== generatedOTP) {
      toast.error("Invalid OTP");
      return;
    }

    // toast.success("Login Successful!");
    navigate("/select-branch");
  };

  // ------------------ BIOMETRIC LOGIN ------------------
  const handleBiometricLogin = () => {
    toast.success("Biometric Login Successful!");
    navigate("/select-branch");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0E4C92] via-[#1C6DD0] to-[#68A7FF] flex flex-col p-6 font-poppins">

      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-8 animate-slide-up">
          <div className="inline-flex items-center justify-center w-[90px] h-[90px] bg-white rounded-2xl shadow-lg mb-4">
            <img src="/Images/logo.png" className="w-16 h-16" />
          </div>
          <h1 className="text-3xl font-semibold text-white mb-1 tracking-wide">
            Secure Member Login
          </h1>
          <p className="text-white/80 text-sm">
            Login using OTP on Mobile / Email
          </p>
        </div>

        {/* CARD */}
        <Card className="p-6 shadow-xl border border-gray-200 bg-white/95 backdrop-blur-sm rounded-2xl animate-slide-up">

          {/* IDENTIFIER */}
          {!otpSent && (
            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">
                Mobile / Email / Membership No.
              </Label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Enter your registered login"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="pl-10 h-11 rounded-xl"
                />
              </div>
            </div>
          )}

          {/* OTP INPUT */}
          {otpSent && (
            <div className="space-y-2 mt-4">
              <Label className="text-gray-700 font-medium">Enter OTP</Label>
              <Input
                placeholder="Enter 6-digit OTP"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="h-11 rounded-xl"
              />
            </div>
          )}

          {/* BUTTONS */}
          {!otpSent ? (
            <Button
              onClick={handleSendOTP}
              className="w-full h-12 mt-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
            >
              Send OTP
            </Button>
          ) : (
            <Button
              onClick={handleVerifyOTP}
              className="w-full h-12 mt-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
            >
              Verify OTP & Login
            </Button>
          )}

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-xs">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* BIOMETRIC LOGIN */}
          <Button
            variant="outline"
            onClick={handleBiometricLogin}
            className="w-full h-11 rounded-xl flex items-center justify-center gap-2"
          >
            <Fingerprint className="h-5 w-5" />
            Login with Biometrics
          </Button>

          {/* TEMP MOCK LOGIN INFO */}
          <div className="mt-6 bg-gray-100 p-3 rounded-lg text-xs space-y-1">
            <p className="font-semibold text-gray-700">Test Login Credentials:</p>

            {mockLoginUsers.map((u, i) => (
              <div key={i} className="text-gray-600 space-y-1">

                <p
                  className="cursor-pointer hover:text-blue-600 transition"
                  onClick={() => handleFillCredential(u.email)}
                >
                  <strong>Email:</strong> {u.email}
                </p>

                <p
                  className="cursor-pointer hover:text-blue-600 transition"
                  onClick={() => handleFillCredential(u.mobile)}
                >
                  <strong>Mobile:</strong> {u.mobile}
                </p>

                <p
                  className="cursor-pointer hover:text-blue-600 transition"
                  onClick={() => handleFillCredential(u.membershipNo)}
                >
                  <strong>Membership No:</strong> {u.membershipNo}
                </p>

                <p><strong>OTP:</strong> {u.otp}</p>

                <hr className="my-2 border-gray-300" />
              </div>
            ))}
          </div>

        </Card>
      </div>
    </div>
  );
};

export default Login;
