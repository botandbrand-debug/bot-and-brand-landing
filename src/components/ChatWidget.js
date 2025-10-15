import React, { useState, useRef, useEffect } from "react";

const ChatWidget = ({
  webhookUrl = "https://n8n-on-fly-morning-night-4549.fly.dev/webhook/c9f33b1f-9251-4632-b9ee-7b05bb681a93/chat",
  brandColor = "#00ffff",
  welcomeMessage = "👋 Hi! How can I help you?",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: welcomeMessage }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    const userInput = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      const botMsg = { from: "bot", text: data.reply || data.message || "No response from server" };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      
      // More detailed error message
      let errorMsg = "⚠️ Connection Error: ";
      if (err.message.includes("Failed to fetch")) {
        errorMsg += "Cannot reach server. Check CORS settings or network connection.";
      } else if (err.message.includes("HTTP")) {
        errorMsg += err.message;
      } else {
        errorMsg += err.message;
      }
      
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: errorMsg },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{ backgroundColor: brandColor }}
          className="p-3 rounded-full shadow-lg text-black font-bold hover:scale-110 transition-transform"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="w-80 h-96 bg-white dark:bg-gray-900 shadow-2xl rounded-2xl flex flex-col border border-gray-300 dark:border-gray-700">
          {/* Header */}
          <div
            style={{ backgroundColor: brandColor }}
            className="p-3 rounded-t-2xl flex justify-between items-center text-black font-bold"
          >
            <span>Baunc Chat</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:scale-110 transition-transform"
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50 dark:bg-gray-800">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[75%] break-words ${
                  msg.from === "user"
                    ? "ml-auto bg-blue-500 text-white"
                    : "mr-auto bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="mr-auto bg-gray-200 text-black dark:bg-gray-700 dark:text-white p-2 rounded-lg max-w-[75%]">
                <span className="inline-block animate-pulse">Typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-300 dark:border-gray-700 flex bg-white dark:bg-gray-900">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              disabled={loading}
              className="flex-1 p-2 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              style={{ backgroundColor: brandColor }}
              className="ml-2 px-4 py-2 rounded-lg text-black font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
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