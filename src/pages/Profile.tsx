import { ArrowLeft, Mail, Phone, Award, Calendar, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { currentUser } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F4F7FB] font-[Poppins]">
      
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0E4C92] to-[#1C6DD0] px-4 py-4 text-white shadow-xl sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-full"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          <div className="flex-1">
            <h1 className="text-xl font-semibold tracking-wide">My Profile</h1>
          </div>

          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
            <Edit className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="p-4 space-y-6">

        {/* Profile Card */}
        <Card className="p-6 rounded-2xl shadow-md border border-gray-100 bg-white">
          <div className="flex flex-col items-center text-center mb-6">
            <Avatar className="h-24 w-24 mb-4 border-4 border-[#1C6DD0] rounded-full shadow-md">
              <AvatarImage
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${currentUser.name}&backgroundColor=f59e0b`}
              />
              <AvatarFallback className="bg-[#0E4C92] text-white text-2xl">
                {currentUser.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>

            <h2 className="text-2xl font-semibold">{currentUser.name}</h2>

            <Badge className="mt-2 bg-[#0E4C92]/10 text-[#0E4C92] font-medium px-3 py-1 rounded-full">
              {currentUser.membershipNo}
            </Badge>

            <p className="text-sm text-gray-500 mt-1">
              Member Since <span className="font-medium">{currentUser.memberSince}</span>
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-xl">
              <Mail className="h-5 w-5 text-[#0E4C92]" />
              <div className="flex-1">
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium">{currentUser.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-xl">
              <Phone className="h-5 w-5 text-[#0E4C92]" />
              <div className="flex-1">
                <p className="text-xs text-gray-500">Mobile</p>
                <p className="text-sm font-medium">{currentUser.mobile}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Card */}
        <Card className="p-5 rounded-2xl shadow-md border border-gray-100 bg-white">
          <h3 className="font-semibold mb-4 text-gray-800">Activity Summary</h3>

          <div className="grid grid-cols-2 gap-4">
            {/* CPE Hours */}
            <div className="text-center p-4 bg-gray-100 rounded-xl">
              <Award className="h-7 w-7 mx-auto mb-2 text-[#0E4C92]" />
              <p className="text-2xl font-bold text-[#0E4C92]">{currentUser.cpeHours}</p>
              <p className="text-xs text-gray-500">CPE Hours (2024)</p>
            </div>

            {/* Events */}
            <div className="text-center p-4 bg-gray-100 rounded-xl">
              <Calendar className="h-7 w-7 mx-auto mb-2 text-[#1C6DD0]" />
              <p className="text-2xl font-bold text-[#1C6DD0]">12</p>
              <p className="text-xs text-gray-500">Events Registered</p>
            </div>
          </div>
        </Card>

        {/* Preferences Card */}
        <Card className="p-5 rounded-2xl shadow-md border border-gray-100 bg-white">
          <h3 className="font-semibold mb-4 text-gray-800">Preferences</h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Preferred Committee</span>
              <Badge variant="outline" className="border-[#0E4C92] text-[#0E4C92] px-3 py-1 rounded-full">
                {currentUser.preferredCommittee}
              </Badge>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Push Notifications</span>
              <Badge className="bg-green-600 text-white px-3 py-1 rounded-full">ON</Badge>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Email Updates</span>
              <Badge className="bg-green-600 text-white px-3 py-1 rounded-full">ON</Badge>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full rounded-xl border-gray-300 text-gray-700" variant="outline">
            Change Password
          </Button>
          
          <Button className="w-full rounded-xl border-gray-300 text-gray-700" variant="outline">
            Notification Settings
          </Button>

          <Button className="w-full rounded-xl border-gray-300 text-gray-700" variant="outline">
            Privacy Policy
          </Button>

          <Button
            className="w-full rounded-xl border-red-400 text-red-600 hover:bg-red-50"
            variant="outline"
            onClick={() => navigate("/login")}
          >
            Logout
          </Button>
        </div>

      </main>
    </div>
  );
};

export default Profile;
