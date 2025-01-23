import React from "react";
import { TherapistAvatar } from "./TherapistAvatar";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
  return (
    <div
      className={`flex items-start gap-3 animate-message-fade-in ${
        isUser ? "flex-row-reverse" : ""
      }`}
    >
      {!isUser && <TherapistAvatar />}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          isUser
            ? "bg-therapy-primary text-white"
            : "bg-white border border-gray-200"
        }`}
      >
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};