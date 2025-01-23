import React, { useState, useEffect, useRef } from "react";
import { ChatMessage } from "../components/ChatMessage";
import { ChatInput } from "../components/ChatInput";
import { TherapistImage } from "../components/TherapistImage";

interface Message {
  text: string;
  isUser: boolean;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const welcomeMessage = "Hello! I'm Yui, your therapeutic companion. How are you feeling today?";

  useEffect(() => {
    setMessages([{ text: welcomeMessage, isUser: false }]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (text: string) => {
    setMessages((prev) => [...prev, { text, isUser: true }]);

    setTimeout(() => {
      const response = "I understand how you're feeling. Would you like to tell me more about that?";
      setMessages((prev) => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-therapy-background flex">
      {/* Left half - Therapist Image */}
      <div className="w-1/2 h-screen">
        <TherapistImage />
      </div>

      {/* Right half - Chat Interface */}
      <div className="w-1/2 h-screen p-4 flex items-center">
        <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-h-[90vh] flex flex-col">
          {/* Chat header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold text-therapy-text">Chat with Yui</h1>
            <p className="text-gray-500">Your AI Therapeutic Companion</p>
          </div>

          {/* Chat messages */}
          <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.text}
                isUser={message.isUser}
              />
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Chat input */}
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Index;