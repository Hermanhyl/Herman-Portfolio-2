import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot, User, Sparkles } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Herman's AI assistant. I can help you learn about his skills, projects, and experience. What would you like to know?",
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Animate button entrance after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Delay entrance by 1 second
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Quick action buttons
  const quickActions = [
    "Tell me about Herman's skills",
    "Show me his projects",
    "What technologies does he use?",
  ];

  const handleQuickAction = (action) => {
    setInputValue(action);
    handleSendMessage(action);
  };

  const handleSendMessage = async (messageText = inputValue) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = { role: 'user', content: messageText.trim() };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      // Call your Netlify function
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages.map(msg => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      setMessages([...newMessages, {
        role: 'assistant',
        content: data.message,
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([...newMessages, {
        role: 'assistant',
        content: "I'm sorry, I encountered an error. Please try again or contact Herman directly through the contact page.",
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Hi! I'm Herman's AI assistant. I can help you learn about his skills, projects, and experience. What would you like to know?",
      }
    ]);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && isVisible && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 group animate-in fade-in slide-in-from-bottom-8 duration-700"
          aria-label="Open AI chat assistant"
          style={{ animationDelay: '200ms' }}
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
          </div>
          <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Ask AI about Herman
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] bg-gray-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col animate-in fade-in slide-in-from-right-8 zoom-in-95 duration-500" style={{ animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-gray-900"></div>
              </div>
              <div>
                <h3 className="text-white font-semibold">Herman's AI Assistant</h3>
                <p className="text-xs text-gray-400">Powered by GPT-4o-mini</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Avatar */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-gradient-to-r from-emerald-500 to-cyan-500'
                }`}>
                  {message.role === 'user' ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div className={`flex-1 ${
                  message.role === 'user' ? 'text-right' : 'text-left'
                }`}>
                  <div className={`inline-block p-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-white/5 text-gray-200 border border-white/10'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                    <span className="text-sm text-gray-400">Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions (show only at start) */}
            {messages.length === 1 && !isLoading && (
              <div className="space-y-2 pt-2">
                <p className="text-xs text-gray-400 text-center mb-3">Quick questions:</p>
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    className="w-full text-left p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm text-gray-300 transition-all duration-300 hover:border-emerald-500/50"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-gray-900/50 backdrop-blur-sm">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                aria-label="Chat message input"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isLoading}
                className="px-4 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            {messages.length > 1 && (
              <button
                onClick={clearChat}
                className="mt-2 text-xs text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Clear conversation
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
