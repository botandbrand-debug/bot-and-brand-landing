import React, { useState } from "react";

const ChatWidget = ({
  webhookUrl,
  brandColor = "#00ffff",
  welcomeMessage = "👋 Hi! How can I help you?",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: welcomeMessage },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages([...messages, userMsg]);

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botMsg = { from: "bot", text: data.reply || "..." };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Error connecting to chat server" },
      ]);
    }

    setInput("");
  };

  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{ backgroundColor: brandColor }}
          className="p-3 rounded-full shadow-lg text-black font-bold"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-background text-foreground shadow-lg rounded-2xl flex flex-col border border-gray-300 dark:border-gray-700">
          {/* Header */}
          <div
            style={{ backgroundColor: brandColor }}
            className="p-3 rounded-t-2xl flex justify-between items-center text-black font-bold"
          >
            <span>Baunc Chat</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[75%] break-words ${
                  msg.from === "user"
                    ? "ml-auto bg-blue-500 text-white"
                    : "mr-auto bg-gray-300 text-black dark:bg-gray-700 dark:text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-300 dark:border-gray-700 flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 p-2 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white"
            />
            <button
              onClick={sendMessage}
              style={{ backgroundColor: brandColor }}
              className="ml-2 px-4 py-2 rounded-lg text-black font-bold"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
