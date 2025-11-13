import {
  ArrowLeft,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dtcDirectory } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";

const DTCDirectory = () => {
  const navigate = useNavigate();

  // CONTACT CARD
  const ContactCard = ({ member }: { member: any }) => (
    <Card className="p-4 rounded-xl shadow-sm bg-card text-card-foreground hover:shadow-lg transition-shadow font-poppins">
      <div className="flex gap-4">

        {/* Avatar */}
        <Avatar className="h-16 w-16 flex-shrink-0 border border-muted">
          <AvatarImage src={member.image} />
          <AvatarFallback className="bg-primary text-white font-semibold">
            {member.name.split(" ").map((n: string) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base leading-tight">{member.name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{member.position}</p>

          {/* Email */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm truncate">
              <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="truncate">{member.email}</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span>{member.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-4">

        {/* Call Working */}
        <a href={`tel:${member.phone}`} className="flex-1">
          <Button size="sm" variant="outline" className="w-full font-poppins">
            <Phone className="h-4 w-4 mr-1" />
            Call
          </Button>
        </a>

        {/* Email Working */}
        <a href={`mailto:${member.email}`} className="flex-1">
          <Button size="sm" variant="outline" className="w-full font-poppins">
            <Mail className="h-4 w-4 mr-1" />
            Email
          </Button>
        </a>

        {/* Chat (No action added) */}
        <Button size="sm" variant="outline" className="flex-1 font-poppins">
          <MessageCircle className="h-4 w-4 mr-1" />
          Chat
        </Button>

      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-muted/20 font-poppins">

      {/* Header */}
      <header className="bg-gradient-to-b from-[#0E4C92] to-[#1C6DD0] text-white px-4 py-4 shadow-lg sticky top-0 z-50 font-poppins">
        <div className="flex items-center gap-3">

          {/* Back */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          {/* Title */}
          <div className="flex-1">
            <h1 className="text-lg font-semibold tracking-wide">
              DTC Directory
            </h1>
            <p className="text-xs text-white/80">Direct Taxes Committee</p>
          </div>

        </div>
      </header>

      {/* Body */}
      <main className="p-4 font-poppins">

        {/* Tabs */}
        <Tabs defaultValue="chairman" className="w-full">

          <TabsList className="grid w-full grid-cols-3 mb-4 bg-muted/50 rounded-xl">
            <TabsTrigger value="chairman" className="font-poppins text-xs">
              Chairman
            </TabsTrigger>
            <TabsTrigger value="vice-chairman" className="font-poppins text-xs">
              Vice-Chairman
            </TabsTrigger>
            <TabsTrigger value="members" className="font-poppins text-xs">
              Members
            </TabsTrigger>
          </TabsList>

          {/* Chairman */}
          <TabsContent value="chairman" className="space-y-4">
            <ContactCard member={dtcDirectory.chairman} />
          </TabsContent>

          {/* Vice-Chairman */}
          <TabsContent value="vice-chairman" className="space-y-4">
            <ContactCard member={dtcDirectory.viceChairman} />
          </TabsContent>

          {/* Members */}
          <TabsContent value="members" className="space-y-4">
            {dtcDirectory.members.map((member, index) => (
              <ContactCard key={index} member={member} />
            ))}
          </TabsContent>

        </Tabs>

      </main>
    </div>
  );
};

export default DTCDirectory;
