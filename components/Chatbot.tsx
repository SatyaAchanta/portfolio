"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState, useEffect, useRef } from "react";
import { Fab, Badge } from '@mui/material';
import { Chat } from '@mui/icons-material';

export default function ChatBot() {
  const { messages, sendMessage, status, stop } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat", // do not use lchat endpoint
    }),
    experimental_throttle: 50,
  });
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Temporarily set to true for debugging
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      {/* Collapsed State - Floating Button */}
      {!isOpen && (
        <Badge 
          badgeContent={messages.length} 
          color="error"
          invisible={messages.length === 0}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 50,
          }}
        >
          <Fab
            onClick={() => setIsOpen(true)}
            aria-label="Open chat"
            sx={{
              width: 64,
              height: 64,
              background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
              color: 'white',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #d97706 0%, #c2410c 100%)',
                transform: 'scale(1.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
              },
              '&:active': {
                transform: 'scale(0.95)',
              },
            }}
          >
            <Chat sx={{ fontSize: 32 }} />
          </Fab>
        </Badge>
      )}

      {/* Expanded State - Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] flex flex-col rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <span className="text-2xl">🤖</span>I am Satya&apos;s Assistant
              </h3>
              <p className="text-amber-100 text-xs mt-1">
                Ask me anything about his work and skills.
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="ml-2 text-white hover:bg-white/20 rounded-full p-2 transition-all"
              aria-label="Close chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {messages.length === 0 && (
              <div className="text-center text-slate-400 mt-8">
                <p className="text-4xl mb-3">👋</p>
                <p className="text-sm">Start a conversation!</p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-lg ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-sm"
                      : "bg-gradient-to-br from-slate-700 to-slate-800 text-slate-100 rounded-bl-sm border border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold opacity-80">
                      {message.role === "user" ? "👤 You" : "🤖 AI"}
                    </span>
                  </div>
                  <div className="text-sm leading-relaxed">
                    {message.parts.map((part, index) =>
                      part.type === "text" ? (
                        <span key={index}>{part.text}</span>
                      ) : null,
                    )}
                  </div>
                </div>
              </div>
            ))}

            {(status === "submitted" || status === "streaming") && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl rounded-bl-sm px-4 py-3 shadow-lg border border-slate-600">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></span>
                      <span
                        className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></span>
                      <span
                        className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></span>
                    </div>
                    {status === "streaming" && (
                      <button
                        type="button"
                        onClick={() => stop()}
                        className="ml-2 text-xs text-red-400 hover:text-red-300 underline"
                      >
                        Stop
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim()) {
                sendMessage({ text: input });
                setInput("");
              }
            }}
            className="border-t border-slate-700 bg-slate-800/80 p-4"
          >
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={status !== "ready"}
                placeholder="Ask me anything..."
                className="flex-1 bg-slate-700 text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />
              <button
                type="submit"
                disabled={status !== "ready" || !input.trim()}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
