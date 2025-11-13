import { ArrowLeft, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { citaxDirectory } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";

const CITAXDirectory = () => {
  const navigate = useNavigate();

  const ContactCard = ({ member }: { member: any }) => (
    <Card className="p-5 rounded-2xl bg-white shadow-md hover:shadow-lg border border-gray-100 transition cursor-pointer">
      <div className="flex gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={member.image} />
          <AvatarFallback className="bg-[#0E4C92]/20 text-[#0E4C92] font-semibold">
            {member.name.split(" ").map((n: string) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[17px] text-gray-900">
            {member.name}
          </h3>
          <p className="text-sm text-gray-500 mb-3">{member.position}</p>

          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#0E4C92]" />
              <span className="truncate">{member.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#0E4C92]" />
              <span>{member.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      {/* Action Buttons */}
      <div className="flex gap-2 mt-4">

        {/* Call */}
        <Button
          size="sm"
          className="flex-1 rounded-xl bg-[#0E4C92] text-white hover:bg-[#0C3F78]"
          onClick={() => window.location.href = `tel:${member.phone}`}
        >
          <Phone className="h-4 w-4 mr-1" />
          Call
        </Button>

        {/* Email */}
        <Button
          size="sm"
          className="flex-1 rounded-xl bg-[#1C6DD0] text-white hover:bg-[#175EB3]"
          onClick={() => window.location.href = `mailto:${member.email}`}
        >
          <Mail className="h-4 w-4 mr-1" />
          Email
        </Button>

        {/* WhatsApp Chat */}
        <Button
          size="sm"
          variant="outline"
          className="flex-1 rounded-xl border-[#0E4C92] text-[#0E4C92] hover:bg-[#0E4C92]/10"
          onClick={() =>
            window.open(`https://wa.me/${member.phone.replace(/\D/g, "")}`, "_blank")
          }
        >
          <MessageCircle className="h-4 w-4 mr-1" />
          Chat
        </Button>

      </div>

    </Card>
  );

  return (
    <div className="min-h-screen bg-[#F4F7FB] font-[Poppins]">

      {/* Header */}
      <header className="bg-gradient-to-r from-[#0E4C92] to-[#1C6DD0] text-white px-4 py-4 shadow-xl sticky top-0 z-50">
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
            <h1 className="text-xl font-semibold tracking-wide">
              CITAX Directory
            </h1>
            <p className="text-xs text-white/80">
              International Taxation Committee
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="p-4">

        {/* Tabs */}
        <Tabs defaultValue="chairman" className="w-full">
          <TabsList className="grid grid-cols-2 bg-white p-1 rounded-xl shadow-sm mb-5">
            <TabsTrigger
              value="chairman"
              className="rounded-lg data-[state=active]:bg-[#0E4C92] data-[state=active]:text-white text-[#0E4C92] font-medium"
            >
              Chairman
            </TabsTrigger>

            <TabsTrigger
              value="members"
              className="rounded-lg data-[state=active]:bg-[#0E4C92] data-[state=active]:text-white text-[#0E4C92] font-medium"
            >
              Members
            </TabsTrigger>
          </TabsList>

          {/* Chairman Section */}
          <TabsContent value="chairman" className="space-y-4">
            <ContactCard member={citaxDirectory.chairman} />
          </TabsContent>

          {/* Members Section */}
          <TabsContent value="members" className="space-y-4">
            {citaxDirectory.members.map((member, index) => (
              <ContactCard key={index} member={member} />
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default CITAXDirectory;
