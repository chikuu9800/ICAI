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
    <div className="min-h-screen bg-background">
      {/* Header */}
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
          <div className="flex-1">
            <h1 className="text-lg font-semibold">My Profile</h1>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Edit className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="p-4 space-y-4">
        {/* Profile Card */}
        <Card className="p-6">
          <div className="flex flex-col items-center text-center mb-6">
            <Avatar className="h-24 w-24 mb-4 border-4 border-primary">
              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${currentUser.name}&backgroundColor=f59e0b`} />
              <AvatarFallback className="bg-secondary text-white text-2xl">
                {currentUser.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold mb-1">{currentUser.name}</h2>
            <Badge className="mb-2">{currentUser.membershipNo}</Badge>
            <p className="text-sm text-muted-foreground">
              Member Since {currentUser.memberSince}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">{currentUser.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Mobile</p>
                <p className="text-sm font-medium">{currentUser.mobile}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Card */}
        <Card className="p-4">
          <h3 className="font-bold mb-4">Activity Summary</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-muted rounded-lg">
              <Award className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-primary">{currentUser.cpeHours}</p>
              <p className="text-xs text-muted-foreground">CPE Hours (2024)</p>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <Calendar className="h-6 w-6 mx-auto mb-2 text-secondary" />
              <p className="text-2xl font-bold text-secondary">12</p>
              <p className="text-xs text-muted-foreground">Events Registered</p>
            </div>
          </div>
        </Card>

        {/* Preferences Card */}
        <Card className="p-4">
          <h3 className="font-bold mb-4">Preferences</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Preferred Committee</span>
              <Badge variant="outline">{currentUser.preferredCommittee}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Push Notifications</span>
              <Badge variant="outline" className="bg-success text-white">ON</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Email Updates</span>
              <Badge variant="outline" className="bg-success text-white">ON</Badge>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button className="w-full" variant="outline">
            Change Password
          </Button>
          <Button className="w-full" variant="outline">
            Notification Settings
          </Button>
          <Button className="w-full" variant="outline">
            Privacy Policy
          </Button>
          <Button
            className="w-full text-destructive hover:bg-destructive/10"
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
