import { useState, useRef, useEffect } from 'react';
import useFocusTrap from '../../hooks/useFocusTrap';

/**
 * Tracks how many times the popup has been dismissed AND the last dismissal
 * time. Persisted in localStorage so the suppression survives navigation.
 *
 * Rules:
 *   - Less than 30 min since last dismissal → suppress
 *   - 2+ dismissals total this session → suppress for the rest of the session
 *   - Otherwise → show after the normal idle delay
 */
const POPUP_STORAGE_KEY = 'chatbot:popup-suppression';
const SUPPRESS_DURATION_MS = 30 * 60 * 1000; // 30 minutes

function readPopupSuppression() {
  if (typeof window === 'undefined') return { lastDismissedAt: 0, count: 0 };
  try {
    const raw = window.localStorage.getItem(POPUP_STORAGE_KEY);
    if (!raw) return { lastDismissedAt: 0, count: 0 };
    const parsed = JSON.parse(raw);
    return {
      lastDismissedAt: Number(parsed.lastDismissedAt) || 0,
      count: Number(parsed.count) || 0,
    };
  } catch {
    return { lastDismissedAt: 0, count: 0 };
  }
}

function writePopupSuppression(state) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(POPUP_STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* localStorage unavailable (private mode, quota) — silently ignore */
  }
}

/** True if the popup should be suppressed right now. */
function shouldSuppressPopup(sessionDismissCount) {
  // Per-session: 2 dismissals in this session → done for the session
  if (sessionDismissCount >= 2) return true;
  // Cross-navigation: within 30 minutes of last dismissal
  const { lastDismissedAt } = readPopupSuppression();
  if (!lastDismissedAt) return false;
  return Date.now() - lastDismissedAt < SUPPRESS_DURATION_MS;
}
import { Link } from 'react-router-dom';
import { MessageSquare, X, Send, Loader2, Bot, User, Sparkles, RotateCcw } from 'lucide-react';

// Parse message content and convert markdown links to clickable elements
function parseMessageWithLinks(content, onLinkClick) {
  // Match markdown links: [text](url)
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = markdownLinkRegex.exec(content)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }

    const linkText = match[1];
    const linkUrl = match[2];

    // Check if it's an internal link (starts with /)
    if (linkUrl.startsWith('/')) {
      parts.push(
        <Link
          key={match.index}
          to={linkUrl}
          onClick={onLinkClick}
          className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 font-medium transition-colors"
        >
          {linkText}
        </Link>
      );
    } else {
      // External link
      parts.push(
        <a
          key={match.index}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 font-medium transition-colors"
        >
          {linkText}
        </a>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after last link
  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts.length > 0 ? parts : content;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showPromptBubble, setShowPromptBubble] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  // Session dismissal count — resets on full page reload (intentional).
  // localStorage holds the time-based suppression that survives navigation.
  const sessionDismissCountRef = useRef(0);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Herman's AI assistant. I can help you explore his [work](/work), learn about his [background](/about), or find ways to [get in touch](/contact). What would you like to know?",
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const toggleButtonRef = useRef(null);
  // Focus trap on the chat dialog. The hook also returns focus to the
  // previously-focused element on close; we additionally pin the
  // chatbot toggle button as the restore target via an effect below,
  // because the toggle is unmounted while the dialog is open and the
  // hook's automatic restore would miss it.
  const dialogRef = useFocusTrap(isOpen, {
    onEscape: () => setIsOpen(false),
    initialFocusSelector: 'input[type="text"]',
  });

  // Restore focus to the toggle button when the dialog closes.
  const wasOpenRef = useRef(false);
  useEffect(() => {
    if (wasOpenRef.current && !isOpen) {
      // Defer so the toggle is mounted again before we focus it.
      const id = window.setTimeout(() => {
        toggleButtonRef.current?.focus();
      }, 0);
      wasOpenRef.current = false;
      return () => window.clearTimeout(id);
    }
    if (isOpen) wasOpenRef.current = true;
  }, [isOpen]);

  // Animate button entrance after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Show prompt bubble after 30 seconds — but only if not currently
  // suppressed by a recent dismissal (cross-navigation via localStorage)
  // or by 2+ dismissals in this session.
  useEffect(() => {
    if (hasInteracted) return;
    if (shouldSuppressPopup(sessionDismissCountRef.current)) return;

    const promptTimer = setTimeout(() => {
      if (!isOpen && !hasInteracted && !shouldSuppressPopup(sessionDismissCountRef.current)) {
        setShowPromptBubble(true);
      }
    }, 30000); // 30 seconds

    return () => clearTimeout(promptTimer);
  }, [isOpen, hasInteracted]);

  // Hide prompt bubble when chat is opened
  const handleOpenChat = () => {
    setIsOpen(true);
    setShowPromptBubble(false);
    setHasInteracted(true);
  };

  // Dismiss prompt bubble. Persist the dismissal: 30-min cooldown
  // (cross-navigation via localStorage) and a per-session counter so 2+
  // dismissals in one session suppress for the whole session.
  const dismissPromptBubble = (e) => {
    e.stopPropagation();
    setShowPromptBubble(false);
    setHasInteracted(true);

    sessionDismissCountRef.current += 1;
    const prev = readPopupSuppression();
    writePopupSuppression({
      lastDismissedAt: Date.now(),
      count: prev.count + 1,
    });
  };

  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens (with delay for mobile keyboards)
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  // Quick action buttons - more useful navigation-focused questions
  const quickActions = [
    "Where can I see Herman's work?",
    "Tell me about his background",
    "How can I contact Herman?",
  ];

  // Close chat when user clicks a link (optional: navigate away)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

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
        content: "Hi! I'm Herman's AI assistant. I can help you explore his [work](/work), learn about his [background](/about), or find ways to [get in touch](/contact). What would you like to know?",
      }
    ]);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && isVisible && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
          {/* Speech Bubble Prompt */}
          {showPromptBubble && (
            <div className="absolute bottom-full right-0 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Floating animation wrapper */}
              <div className="animate-float">
                <div className="relative bg-ink-elevated border border-border-strong rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-2xl min-w-[140px] sm:min-w-[280px] md:min-w-[320px]">
                  {/* Close button */}
                  <button
                    onClick={dismissPromptBubble}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-ink-elevated-2 hover:bg-border-strong border border-border-strong text-bone-muted hover:text-bone rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg cursor-pointer"
                    aria-label="Dismiss prompt"
                  >
                    <X className="w-3 h-3" />
                  </button>

                  {/* Message - different text for mobile vs desktop */}
                  <div className="flex items-start gap-3">
                    <div className="hidden sm:flex shrink-0 w-8 h-8 bg-accent rounded-full items-center justify-center">
                      <Sparkles className="w-4 h-4 text-accent-ink" />
                    </div>
                    <div>
                      {/* Mobile: Short text */}
                      <p className="sm:hidden text-bone text-sm font-medium">
                        Ask AI! 💬
                      </p>
                      {/* Desktop: Full text */}
                      <p className="hidden sm:block text-bone text-sm md:text-base font-medium leading-relaxed">
                        Hey there! 👋 Got questions about Herman's work or skills?
                      </p>
                      <p className="hidden sm:block text-bone-muted text-xs md:text-sm mt-1">
                        I'm here to help - ask me anything!
                      </p>
                    </div>
                  </div>

                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-ink-elevated border-r border-b border-border-strong transform rotate-45"></div>
                </div>
              </div>
            </div>
          )}

          {/* Chat Button — solid tangerine, speech bubble with typing dots,
              small bone ✦ AI mark, gentle 3s breathing scale. */}
          <button
            ref={toggleButtonRef}
            onClick={handleOpenChat}
            className="relative h-12 w-12 sm:h-14 sm:w-14 bg-accent text-accent-ink rounded-full shadow-2xl shadow-accent/20 transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink group animate-in fade-in slide-in-from-bottom-8 duration-700 chatbot-breathing cursor-pointer flex items-center justify-center"
            aria-label="Open AI chat assistant"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            style={{ animationDelay: '200ms' }}
          >
            {/* Speech bubble + animated typing dots inside */}
            <div className="relative">
              <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.25} />
              {/* Three dots inside the bubble (positioned absolutely over icon) */}
              <span className="absolute inset-0 flex items-center justify-center gap-[3px] -mt-[2px]" aria-hidden="true">
                <span className="block h-[3px] w-[3px] rounded-full bg-accent-ink chatbot-dot" />
                <span className="block h-[3px] w-[3px] rounded-full bg-accent-ink chatbot-dot" style={{ animationDelay: '0.18s' }} />
                <span className="block h-[3px] w-[3px] rounded-full bg-accent-ink chatbot-dot" style={{ animationDelay: '0.36s' }} />
              </span>
            </div>

            {/* Bone ✦ AI mark, top-right */}
            <span
              aria-hidden="true"
              className="absolute -top-1 -right-1 flex items-center justify-center h-4 w-4 sm:h-5 sm:w-5 bg-ink-elevated border border-bone/30 rounded-full text-bone font-display italic text-[10px] sm:text-xs leading-none"
            >
              ✦
            </span>

            {/* Tooltip - hidden on mobile and when prompt bubble is shown */}
            {!showPromptBubble && (
              <span className="hidden sm:block absolute bottom-full right-0 mb-2 px-3 py-1 bg-ink-elevated border border-border-strong text-bone text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Ask AI about Herman
              </span>
            )}
          </button>
        </div>
      )}

      {/* Chat Window - Full screen on mobile (below navbar), floating on desktop */}
      {isOpen && (
        <div
          ref={dialogRef}
          className="fixed top-16 left-0 right-0 bottom-0 sm:inset-auto sm:top-auto sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-40
                     w-full h-auto sm:w-[360px] sm:h-[500px] md:w-[380px] md:h-[550px] lg:h-[600px]
                     sm:max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-3rem)]
                     bg-gray-900 sm:border sm:border-white/10 sm:rounded-2xl shadow-2xl
                     flex flex-col animate-in fade-in sm:slide-in-from-right-8 sm:zoom-in-95 duration-300 focus:outline-none"
          style={{ animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          role="dialog"
          aria-modal="true"
          aria-label="AI Chat Assistant"
          tabIndex={-1}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 shrink-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-400 rounded-full border-2 border-gray-900"></div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Herman's AI Assistant</h3>
                <p className="text-xs text-gray-400 hidden sm:block">Powered by GPT-4o-mini</p>
              </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Clear chat button */}
              {messages.length > 1 && (
                <button
                  onClick={clearChat}
                  className="p-2 text-gray-400 hover:text-emerald-400 hover:bg-white/10 rounded-lg transition-all cursor-pointer"
                  aria-label="Clear conversation"
                  title="Clear conversation"
                >
                  <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 overscroll-contain">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-2 sm:gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Avatar */}
                <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-gradient-to-r from-emerald-500 to-cyan-500'
                }`}>
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div className={`flex-1 max-w-[85%] sm:max-w-[80%] ${
                  message.role === 'user' ? 'text-right' : 'text-left'
                }`}>
                  <div className={`inline-block p-2.5 sm:p-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-accent-ink rounded-br-md'
                      : 'bg-white/5 text-gray-200 border border-white/10 rounded-bl-md'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                      {message.role === 'assistant'
                        ? parseMessageWithLinks(message.content, handleLinkClick)
                        : message.content
                      }
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="bg-white/5 border border-white/10 p-2.5 sm:p-3 rounded-2xl rounded-bl-md">
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
                <p className="text-xs text-gray-400 text-center mb-2 sm:mb-3">Quick questions:</p>
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    className="w-full text-left p-2.5 sm:p-3 bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 rounded-xl text-sm text-gray-300 transition-all duration-300 hover:border-emerald-500/50 cursor-pointer"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 sm:p-4 border-t border-white/10 bg-gray-900/80 backdrop-blur-sm shrink-0 safe-area-inset-bottom">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="flex-1 min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                aria-label="Chat message input"
                enterKeyHint="send"
                autoComplete="off"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isLoading}
                className="px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 active:from-emerald-700 active:to-cyan-700 text-accent-ink rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-emerald-500 shrink-0 cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for mobile - starts below navbar */}
      {isOpen && (
        <div
          className="fixed top-16 left-0 right-0 bottom-0 bg-black/50 z-30 sm:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
