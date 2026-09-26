import { useState, useEffect, useRef, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';

const STORAGE_KEY = 'gemini_portfolio_chat_history';
const BACKEND_API_ENDPOINT = 'https://chatbot-len5.onrender.com/api/chat'; 
const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [isBotThinking, setIsBotThinking] = useState(false);
  const messagesEndRef = useRef(null);
    // const currentUser = 'User123'; 
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
      setMessages([{ 
        id: Date.now(), 
        sender: 'bot', 
        text: "Hi there! I'm your portfolio's AI assistant. Ask me about the projects shown here, or just say hello! (Backend connected)", 
        timestamp: new Date().toISOString() 
      }]);
    }
  }, []); // Run only once on mount

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  const sendToGemini = useCallback(async (fullHistory) => {
    setIsBotThinking(true);
        const lastMessage = fullHistory[fullHistory.length - 1];
    const newMessage = lastMessage.text;
    const historyForBackend = fullHistory.slice(0, fullHistory.length - 1);
        const requestBody = {
        history: historyForBackend, // Backend expects 'history'
        newMessage: newMessage      // Backend expects 'newMessage'
    };

    const maxRetries = 5;
    let lastError = null;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const response = await fetch(BACKEND_API_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody)
        });

        if (response.status === 429 && attempt < maxRetries - 1) {
          const delay = Math.pow(2, attempt) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
          continue; 
        }

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ message: `Backend error (Status: ${response.status})` }));
          throw new Error(errorData.message || `Backend request failed with status: ${response.status}`);
        }
        const result = await response.json();
        const botResponseText = result.text || "Sorry, I couldn't generate a response from the backend.";        
        setMessages(prev => [...prev, {
          id: Date.now() + 1, // Unique ID
          sender: 'bot',
          text: botResponseText,
          timestamp: new Date().toISOString(),
        }]);
        
        lastError = null; // Clear error on success
        break; // Exit loop on success

      } catch (error) {
        lastError = error;
        if (attempt < maxRetries - 1) {
          const delay = Math.pow(2, attempt) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    } // End of retry loop

    if (lastError) {
      console.error("Error calling Backend API after all retries:", lastError);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'bot',
        text: `Error: Could not connect to the assistant via the backend. (${lastError.message})`,
        timestamp: new Date().toISOString(),
      }]);
    }

    setIsBotThinking(false);
  }, []);
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageText.trim() || isBotThinking) return;

    const trimmedText = messageText.trim();
    setMessageText(''); // Clear input immediately
    
    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: trimmedText,
      timestamp: new Date().toISOString(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);    
    const recentMessages = updatedMessages.slice(-10);
    sendToGemini(recentMessages);
  };

  const Message = ({ message }) => {
    const isUser = message.sender === 'user';
    const senderName = isUser ? 'You' : 'Bot';
    const time = new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
      <div className={`flex mb-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-xs p-3 rounded-lg shadow-md relative ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-sm'
            : 'bg-gray-100 text-gray-800 rounded-tl-sm border border-gray-200'
        } prose prose-sm max-w-none`}>
          <p className={`text-[10px] mb-1 font-semibold ${isUser ? 'text-blue-200' : 'text-gray-500'}`}>
            {senderName}
          </p>
          <div className={`${isUser ? 'text-white' : 'text-gray-800'} text-sm`}>
            <ReactMarkdown>
              {message.text}
            </ReactMarkdown>
          </div>
          <span className={`text-[10px] mt-1 block opacity-70 ${isUser ? 'text-blue-300 text-right' : 'text-gray-400 text-left'}`}>
            {time}
          </span>
        </div>
      </div>
    );
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
        <div 
          className="w-80 h-[420px] mb-4 bg-white rounded-xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden 
                     transition-all duration-300 ease-in-out transform scale-100 opacity-100"
        >
          <header className="flex items-center justify-between p-3 bg-blue-600 text-white shadow-md">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.549A9.998 9.998 0 0112 2c4.97 0 9 3.582 9 8z"></path>
              </svg>
              <h2 className="text-base font-semibold">Portfolio Chat</h2>
            </div>
            <button onClick={onClose} className="p-1 rounded-full hover:bg-blue-700 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </header>

          <main className="flex-1 overflow-y-auto p-3 bg-gray-50">
            {messages.map((msg) => (
              <Message 
                key={msg.id} 
                message={msg} 
              />
            ))}

            {isBotThinking && (
              <div className="flex justify-start mb-3">
                <div className="max-w-xs p-3 rounded-lg shadow-md bg-gray-100 text-gray-800 rounded-tl-sm border border-gray-200">
                  <p className="text-[10px] mb-1 font-semibold text-gray-500">Bot</p>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </main>

          <footer className="p-3 bg-white border-t border-gray-100">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Ask a question..."
                disabled={isBotThinking}
                className="flex-1 p-2 text-sm border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100"
              />
              <button
                type="submit"
                disabled={!messageText.trim() || isBotThinking}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-blue-300 shadow-md flex items-center justify-center"
              >
                <svg className="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </form>
          </footer>
        </div>
      

      <button onClick={onClose} className="p-1 rounded-full hover:bg-blue-700 transition">
        
      </button>

    </div>
  );
};

export default Chatbot;
