import { useState } from "react";
import {
    ArrowLeft,
    HelpCircle,
    MessageCircle,
    Bug,
    Send,
    Phone,
    Mail,
    X,
    Bot
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

// ---------------- MOCK DATA ----------------
const mockFAQs = [
    { q: "How do I register for events?", a: "Go to Events > Select Event > Register Now." },
    { q: "How do I download publications?", a: "Open Publications > Select Item > Download." },
    { q: "How do I reset my password?", a: "Use the Forgot Password option on the Login page." },
];

const mockAIResponses: any = {
    "hello": "Hello! How can I help you today?",
    "events": "You can explore upcoming events in the Events section.",
    "publication": "All publications are available under the Publications tab.",
    "error": "If you're facing an error, please report it using the Bug Report form.",
    "contact": "You can contact us via Email or Call using the buttons below."
};

const Helpdesk = () => {
    const navigate = useNavigate();

    const [chatInput, setChatInput] = useState("");
    const [chatMessages, setChatMessages] = useState<any[]>([]);
    const [showBugModal, setShowBugModal] = useState(false);

    const [bugData, setBugData] = useState({
        type: "",
        description: "",
        screenshot: null as File | null,
    });

    // AI CHATBOT LOGIC
    const handleSendMessage = () => {
        if (!chatInput.trim()) return;

        const userMsg = { from: "user", text: chatInput };
        setChatMessages((prev) => [...prev, userMsg]);

        // BOT RESPONSE
        const key = chatInput.toLowerCase();
        const botReply = mockAIResponses[key] || "Sorry, I don't have info on that. Try asking about **events**, **publications**, **errors**, or **contact**.";

        setTimeout(() => {
            setChatMessages((prev) => [...prev, { from: "bot", text: botReply }]);
        }, 600);

        setChatInput("");
    };

    // BUG REPORT HANDLING
    const handleBugSubmit = () => {
        console.log("Bug Submitted:", bugData);
        alert("Bug report submitted successfully!");
        setShowBugModal(false);
        setBugData({ type: "", description: "", screenshot: null });
    };

    return (
        <div className="min-h-screen bg-[#F4F7FB] font-[Poppins]">

            {/* HEADER */}
            <header className="bg-gradient-to-r from-[#0E4C92] to-[#1C6DD0] px-4 py-4 text-white shadow-lg sticky top-0 z-50">
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
                        <h1 className="text-xl font-semibold tracking-wide">Helpdesk & Support</h1>
                        <p className="text-xs text-white/80">Get help, report issues or chat with AI</p>
                    </div>
                </div>
            </header>

            {/* BODY */}
            <main className="p-4 space-y-6">

                {/* QUICK ACTIONS */}
                <h2 className="font-semibold text-lg text-[#0E4C92]">Quick Actions</h2>

                <div className="grid grid-cols-3 gap-4">

                    {/* FAQ */}
                    <div
                        className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition cursor-pointer border border-gray-200"
                    >
                        <div className="bg-[#0E4C92]/10 p-3 rounded-full mb-2">
                            <HelpCircle className="h-6 w-6 text-[#0E4C92]" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">FAQs</p>
                    </div>

                    {/* BUG REPORT */}
                    <div
                        onClick={() => setShowBugModal(true)}
                        className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition cursor-pointer border border-gray-200"
                    >
                        <div className="bg-[#1C6DD0]/10 p-3 rounded-full mb-2">
                            <Bug className="h-6 w-6 text-[#1C6DD0]" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">Report Bug</p>
                    </div>

                    {/* AI CHAT */}
                    <div
                        className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition cursor-pointer border border-gray-200"
                    >
                        <div className="bg-green-600/10 p-3 rounded-full mb-2">
                            <Bot className="h-6 w-6 text-green-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">Chat AI</p>
                    </div>

                </div>


                {/* FAQ SECTION */}
                <h2 className="font-semibold text-lg text-[#0E4C92]">Frequently Asked Questions</h2>
                <div className="space-y-3">
                    {mockFAQs.map((faq, i) => (
                        <Card key={i} className="p-4 rounded-xl shadow-sm">
                            <p className="font-medium">{faq.q}</p>
                            <p className="text-sm text-gray-600 mt-1">{faq.a}</p>
                        </Card>
                    ))}
                </div>

                {/* CHATBOT */}
                <h2 className="font-semibold text-lg text-[#0E4C92] mt-6">Chat with AI Assistant</h2>
                <Card className="p-4 rounded-xl shadow-sm bg-white">
                    <div className="h-64 overflow-y-auto pr-2 space-y-3">
                        {chatMessages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-3 rounded-xl max-w-[80%] ${msg.from === "user"
                                        ? "ml-auto bg-[#1C6DD0] text-white"
                                        : "bg-gray-100 text-gray-800"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2 mt-4">
                        <Input
                            placeholder="Ask something..."
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            className="rounded-xl"
                        />
                        <Button className="rounded-xl bg-[#0E4C92]" onClick={handleSendMessage}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </Card>

                {/* CONTACT */}
                <h2 className="font-semibold text-lg text-[#0E4C92] mt-6">Contact Support</h2>
                <div className="flex gap-3">
                    <Button
                        className="flex-1 bg-[#0E4C92] text-white rounded-xl"
                        onClick={() => (window.location.href = "tel:1800123456")}
                    >
                        <Phone className="h-4 w-4 mr-1" /> Call
                    </Button>

                    <Button
                        className="flex-1 bg-[#1C6DD0] text-white rounded-xl"
                        onClick={() => (window.location.href = "mailto:support@icai.in")}
                    >
                        <Mail className="h-4 w-4 mr-1" /> Email
                    </Button>
                </div>
            </main>

            {/* BUG REPORT MODAL */}
            {showBugModal && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md relative">

                        <button
                            className="absolute top-3 right-3 text-gray-700"
                            onClick={() => setShowBugModal(false)}
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <h2 className="text-xl font-semibold text-[#0E4C92] mb-4">Report an Issue</h2>

                        {/* Type */}
                        <select
                            className="w-full p-3 border rounded-xl"
                            value={bugData.type}
                            onChange={(e) => setBugData({ ...bugData, type: e.target.value })}
                        >
                            <option value="">Select Issue Type</option>
                            <option>UI Bug</option>
                            <option>Technical Error</option>
                            <option>Content Error</option>
                            <option>Login Issue</option>
                            <option>Other</option>
                        </select>

                        {/* Description */}
                        <Textarea
                            placeholder="Describe the issue..."
                            className="mt-3 rounded-xl"
                            value={bugData.description}
                            onChange={(e) => setBugData({ ...bugData, description: e.target.value })}
                        />

                        {/* Screenshot */}
                        <Input
                            type="file"
                            className="mt-3 rounded-xl"
                            onChange={(e) =>
                                setBugData({ ...bugData, screenshot: e.target.files?.[0] || null })
                            }
                        />

                        <Button
                            className="w-full mt-4 bg-[#0E4C92] text-white rounded-xl"
                            onClick={handleBugSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Helpdesk;
