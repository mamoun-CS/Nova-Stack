import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X } from "lucide-react";

type Message = {
  text: string;
  isUser: boolean;
};

type Option = {
  label: string;
  icon: string;
  value: string;
};

const webhookUrl = "https://n8n.srv936449.hstgr.cloud/webhook-test/283e5278-03c6-46fa-869d-74aeab710766";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "👋 Welcome to Nova Stack! How can we help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");

  const options: Option[] = [
    { label: "Hosting plans", icon: "📦", value: "hosting" },
    { label: "Domain pricing", icon: "🌐", value: "domain" },
    { label: "AI agent features", icon: "🤖", value: "ai" },
    { label: "Contact support", icon: "📞", value: "contact" }
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    alert(userText);
    setMessages(prev => [...prev, { text: userText, isUser: true }]);
    setInputValue("");

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText })
      });

      const data = await res.json();
      alert(data);
      setMessages(prev => [...prev, { text: String(data.output || "No response"), isUser: false }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { text: "⚠️ Error contacting server.", isUser: false }]);
    }
  };

  const handleOptionClick = async (option: Option) => {
    setMessages(prev => [...prev, { text: `${option.icon} ${option.label}`, isUser: true }]);

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: option.label })
      });

      const data = await res.json();
      alert(data);
      setMessages(prev => [...prev, { text: String(data.output || "No response"), isUser: false }]);
    } catch (err) {
      console.error(err);
      
      setMessages(prev => [...prev, { text: "⚠️ Error contacting server.", isUser: false }]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button 
          className="h-14 w-14 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      ) : (
        <Card className="w-80 md:w-96 shadow-lg border-blue-200">
          <CardHeader className="bg-blue-600 text-white p-4 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-medium">Nova Stack Support</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:text-white hover:bg-blue-700">
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isUser 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {messages.length === 1 && (
              <div className="p-3 grid grid-cols-2 gap-2">
                {options.map((option, index) => (
                  <Button 
                    key={index} 
                    variant="outline"
                    className="justify-start text-left h-auto py-2"
                    onClick={() => handleOptionClick(option)}
                  >
                    <span className="mr-2">{option.icon}</span> {option.label}
                  </Button>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="p-3 border-t">
            <div className="flex w-full gap-2">
              <Input 
                placeholder="Type a message..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
                className="flex-1"
              />
              <Button size="icon" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
