import { ArrowLeft, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dtcDirectory } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";

const DTCDirectory = () => {
  const navigate = useNavigate();

  const ContactCard = ({ member }: { member: any }) => (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex gap-4">
        <Avatar className="h-16 w-16 flex-shrink-0">
          <AvatarImage src={member.image} />
          <AvatarFallback>{member.name.split(" ").map((n: string) => n[0]).join("")}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base mb-1">{member.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{member.position}</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="truncate">{member.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{member.phone}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <Button size="sm" variant="outline" className="flex-1">
          <Phone className="h-4 w-4 mr-1" />
          Call
        </Button>
        <Button size="sm" variant="outline" className="flex-1">
          <Mail className="h-4 w-4 mr-1" />
          Email
        </Button>
        <Button size="sm" variant="outline" className="flex-1">
          <MessageCircle className="h-4 w-4 mr-1" />
          Chat
        </Button>
      </div>
    </Card>
  );

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
            <h1 className="text-lg font-semibold">DTC Directory</h1>
            <p className="text-xs text-white/80">Direct Taxes Committee</p>
          </div>
        </div>
      </header>

      <main className="p-4">
        <Tabs defaultValue="chairman" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="chairman">Chairman</TabsTrigger>
            <TabsTrigger value="vice-chairman">Vice-Chairman</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
          </TabsList>

          <TabsContent value="chairman" className="space-y-4">
            <ContactCard member={dtcDirectory.chairman} />
          </TabsContent>

          <TabsContent value="vice-chairman" className="space-y-4">
            <ContactCard member={dtcDirectory.viceChairman} />
          </TabsContent>

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
