import React, { useState, useRef, useEffect } from "react";

const ChatWidget = ({
  clientId = "68934fbac5e17e036e890892", // Default client ID - your user
  baseUrl = "https://api.botandbrand.app", // Your production API
  welcomeMessage = "👋 Hi! I'm Robby, your digital assistant from Bot & Brand. How can I help you today?",
  widgetTitle = "Bot & Brand Chat",
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
      console.log('🟡 Sending message to:', `${baseUrl}/api/widget/chat`);
      
      const res = await fetch(`${baseUrl}/api/widget/chat`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          message: userInput,
          clientId: clientId 
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`HTTP ${res.status}: ${errorText}`);
      }

      const data = await res.json();
      console.log('🟢 Received response:', data);
      
      const botMsg = { 
        from: "bot", 
        text: data.reply || data.message || "No response from server" 
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      const errorMsg = err.message.includes("Failed to fetch") 
        ? "⚠️ Connection error. Please check your internet." 
        : err.message.includes("CORS") 
        ? "⚠️ Network error. Please try again."
        : `⚠️ Error: ${err.message}`;
      setMessages((prev) => [...prev, { from: "bot", text: errorMsg }]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{ from: "bot", text: welcomeMessage }]);
  };

  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 rounded-full shadow-xl text-black font-bold hover:scale-110 transition-transform bg-[#0369a1] dark:bg-[#39ff14]"
          aria-label="Open chat"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="w-80 h-96 bg-white dark:bg-gray-900 shadow-2xl rounded-2xl flex flex-col border border-gray-300 dark:border-gray-700">
          {/* Header */}
          <div className="p-3 rounded-t-2xl flex justify-between items-center font-bold text-black bg-[#0369a1] dark:bg-[#39ff14]">
            <div className="flex items-center space-x-2">
              <span>{widgetTitle}</span>
              <button 
                onClick={clearChat}
                className="text-sm hover:scale-110 transition-transform"
                title="Clear chat"
              >
                🔄
              </button>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:scale-110 transition-transform"
              aria-label="Close chat"
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-gray-50 dark:bg-gray-800">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl max-w-[75%] break-words shadow-md ${
                  msg.from === "user"
                    ? "ml-auto bg-white text-black dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600"
                    : "mr-auto bg-[#0369a1] text-white dark:bg-[#39ff14] dark:text-black border border-[#0284c7] dark:border-[#aaff00] shadow-lg"
                }`}
              >
                {msg.text.split('\n').map((line, idx) => (
                  <div key={idx}>
                    {line}
                    {idx < msg.text.split('\n').length - 1 && <br />}
                  </div>
                ))}
              </div>
            ))}
            {loading && (
              <div className="mr-auto p-3 rounded-xl max-w-[75%] break-words shadow-lg bg-[#0369a1] text-white dark:bg-[#39ff14] dark:text-black border border-[#0284c7] dark:border-[#aaff00]">
                <span className="inline-flex items-center">
                  <span className="animate-pulse">Robby is typing</span>
                  <span className="ml-1 animate-bounce">...</span>
                </span>
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
              placeholder="Type your message..."
              disabled={loading}
              className="flex-1 p-2 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0369a1] disabled:opacity-50"
              aria-label="Type your message"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="ml-2 px-4 py-2 rounded-lg text-black font-bold hover:opacity-90 transition-opacity disabled:opacity-50 bg-[#0369a1] dark:bg-[#39ff14]"
              aria-label="Send message"
            >
              {loading ? "⏳" : "➤"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;