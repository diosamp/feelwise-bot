import React, { useState, useEffect, useRef } from "react";
import { ChatMessage } from "../components/ChatMessage";
import { ChatInput } from "../components/ChatInput";

interface Message {
  text: string;
  isUser: boolean;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const welcomeMessage = "Hello! I'm Dr. AI, your therapeutic companion. How are you feeling today?";

  useEffect(() => {
    // Add welcome message
    setMessages([{ text: welcomeMessage, isUser: false }]);
  }, []);

  useEffect(() => {
    // Scroll to bottom on new messages
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (text: string) => {
    // Add user message
    setMessages((prev) => [...prev, { text, isUser: true }]);

    // Simulate AI response
    setTimeout(() => {
      const response = "I understand how you're feeling. Would you like to tell me more about that?";
      setMessages((prev) => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-therapy-background">
      <div className="container max-w-2xl mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-lg p-4">
          {/* Chat header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold text-therapy-text">AI Therapy Session</h1>
            <p className="text-gray-500">A safe space to share your thoughts</p>
          </div>

          {/* Chat messages */}
          <div className="space-y-4 mb-4 max-h-[60vh] overflow-y-auto">
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