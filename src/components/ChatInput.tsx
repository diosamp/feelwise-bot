import React, { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Share your thoughts..."
        className="flex-1 rounded-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-therapy-primary"
      />
      <button
        type="submit"
        className="bg-therapy-primary text-white rounded-full px-6 py-2 hover:bg-therapy-primary/90 transition-colors"
      >
        Send
      </button>
    </form>
  );
};