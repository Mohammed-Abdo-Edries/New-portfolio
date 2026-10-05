import { useState, useEffect, useRef, useCallback } from "react";
import ReactMarkdown from "react-markdown";

const STORAGE_KEY = "gemini_portfolio_chat_history";
const BACKEND_API_ENDPOINT =
  "https://chatbot-len5.onrender.com/api/chat";

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [isBotThinking, setIsBotThinking] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const storedHistory = localStorage.getItem(STORAGE_KEY);

    if (storedHistory) {
      setMessages(JSON.parse(storedHistory));
    } else {
      setMessages([
        {
          id: Date.now(),
          sender: "bot",
          text: "Hi there! I'm your portfolio's AI assistant. Ask me about Mohamed's skills, projects, and experience.",
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  const sendToGemini = useCallback(async (fullHistory) => {
    setIsBotThinking(true);

    const lastMessage = fullHistory[fullHistory.length - 1];
    const newMessage = lastMessage.text;
    const historyForBackend = fullHistory.slice(0, -1);

    const requestBody = {
      history: historyForBackend,
      newMessage,
    };

    const maxRetries = 5;
    let lastError = null;

    for (let attempt = 0; attempt < maxRetries; attempt += 1) {
      try {
        const response = await fetch(BACKEND_API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (response.status === 429 && attempt < maxRetries - 1) {
          const delay = 2 ** attempt * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        if (!response.ok) {
          const errorData = await response
            .json()
            .catch(() => ({}));

          throw new Error(
            errorData.message ||
              `Backend request failed with status: ${response.status}`
          );
        }

        const result = await response.json();

        setMessages((previousMessages) => [
          ...previousMessages,
          {
            id: Date.now() + 1,
            sender: "bot",
            text:
              result.text ||
              "Sorry, I couldn't generate a response.",
            timestamp: new Date().toISOString(),
          },
        ]);

        lastError = null;
        break;
      } catch (error) {
        lastError = error;

        if (attempt < maxRetries - 1) {
          const delay = 2 ** attempt * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }

    if (lastError) {
      console.error(
        "Error calling Backend API after all retries:",
        lastError
      );

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: `Error: Could not connect to the assistant via the backend. (${lastError.message})`,
          timestamp: new Date().toISOString(),
        },
      ]);
    }

    setIsBotThinking(false);
  }, []);

  const handleSendMessage = (event) => {
    event.preventDefault();

    if (!messageText.trim() || isBotThinking) return;

    const trimmedText = messageText.trim();
    setMessageText("");

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedText,
      timestamp: new Date().toISOString(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    sendToGemini(updatedMessages.slice(-10));
  };

  const Message = ({ message }) => {
    const isUser = message.sender === "user";
    const senderName = isUser ? "You" : "Bot";

    const time = new Date(
      message.timestamp
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return (
      <div
        className={`mb-3 flex ${
          isUser ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`relative max-w-xs rounded-lg p-3 shadow-md ${
            isUser
              ? "rounded-br-sm bg-blue-600 text-white"
              : "rounded-tl-sm border border-gray-200 bg-gray-100 text-gray-800"
          }`}
        >
          <p
            className={`mb-1 text-[10px] font-semibold ${
              isUser ? "text-blue-200" : "text-gray-500"
            }`}
          >
            {senderName}
          </p>

          <div
            className={`text-sm ${
              isUser ? "text-white" : "text-gray-800"
            }`}
          >
            <ReactMarkdown>{message.text}</ReactMarkdown>
          </div>

          <span
            className={`mt-1 block text-[10px] opacity-70 ${
              isUser
                ? "text-right text-blue-300"
                : "text-left text-gray-400"
            }`}
          >
            {time}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-[150]"
      onPointerDown={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Portfolio Chat"
        className="absolute bottom-24 right-6 flex flex-col items-end font-sans sm:right-20"
        onPointerDown={(event) => event.stopPropagation()}
      >
        <div className="flex h-[420px] w-[calc(100vw-2rem)] max-w-80 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
          <header className="flex items-center justify-between bg-blue-600 p-3 text-white shadow-md">
            <div className="flex items-center">
              <svg
                className="mr-1 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.549A9.998 9.998 0 0112 2c4.97 0 9 3.582 9 8z"
                />
              </svg>

              <h2 className="text-base font-semibold">
                Portfolio Chat
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close chat"
              className="rounded-full p-1 transition hover:bg-blue-700"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </header>

          <main className="flex-1 overflow-y-auto bg-gray-50 p-3">
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}

            {isBotThinking && (
              <div className="mb-3 flex justify-start">
                <div className="rounded-lg rounded-tl-sm border border-gray-200 bg-gray-100 p-3 shadow-md">
                  <p className="mb-1 text-[10px] font-semibold text-gray-500">
                    Bot
                  </p>

                  <div className="flex items-center space-x-1">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400" />
                    <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400 delay-100" />
                    <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400 delay-200" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </main>

          <footer className="border-t border-gray-100 bg-white p-3">
            <form
              onSubmit={handleSendMessage}
              className="flex gap-2"
            >
              <input
                type="text"
                value={messageText}
                onChange={(event) =>
                  setMessageText(event.target.value)
                }
                placeholder="Ask a question..."
                disabled={isBotThinking}
                className="flex-1 rounded-lg border border-gray-300 p-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100"
              />

              <button
                type="submit"
                disabled={!messageText.trim() || isBotThinking}
                aria-label="Send message"
                className="flex items-center justify-center rounded-lg bg-blue-600 p-2 text-white shadow-md transition duration-300 hover:bg-blue-700 disabled:bg-blue-300"
              >
                <svg
                  className="h-4 w-4 rotate-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;