"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, Send } from "lucide-react";
import type { Listing } from "@/data/listings";

type Sender = "me" | "owner" | "system";

interface ChatMessage {
  id: string;
  from: Sender;
  text: string;
}

interface ChatPanelProps {
  listing: Listing;
  onClose: () => void;
}

function ownerInitials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function ChatPanel({ listing, onClose }: ChatPanelProps) {
  const storageKey = `zelvo_chat_${listing.id}`;
  const introMessage = `Hi ${listing.ownerName}, I saw your listing for "${listing.title}" on Zelvo. Is it still available?`;

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState(introMessage);
  const endRef = useRef<HTMLDivElement>(null);

  // Load any existing conversation, otherwise seed with a welcome line.
  useEffect(() => {
    let initial: ChatMessage[] | null = null;
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) initial = JSON.parse(stored);
    } catch {}
    if (!initial || initial.length === 0) {
      initial = [
        {
          id: "sys-welcome",
          from: "system",
          text: `You're connected with ${listing.ownerName}, owner of "${listing.title}".`,
        },
      ];
    }
    setMessages(initial);
  }, [storageKey, listing.ownerName, listing.title]);

  // Persist conversation and keep the latest message in view.
  useEffect(() => {
    if (messages.length === 0) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(messages));
    } catch {}
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, storageKey]);

  // Close on Escape and lock background scroll while open.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const send = useCallback(() => {
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => {
      const isFirst = !prev.some((m) => m.from === "me");
      const next: ChatMessage[] = [
        ...prev,
        { id: `me-${Date.now()}`, from: "me", text },
      ];
      if (isFirst) {
        next.push({
          id: `sys-ack-${Date.now()}`,
          from: "system",
          text: `Message sent to ${listing.ownerName}. They typically reply within a few hours — their response will show up right here.`,
        });
      }
      return next;
    });
    setDraft("");
  }, [draft, listing.ownerName]);

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/40 flex items-end justify-center sm:items-end sm:justify-end sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-full sm:w-96 h-[80vh] sm:h-[560px] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden rounded-t-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground shrink-0">
          <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-semibold text-sm">
            {ownerInitials(listing.ownerName)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-sm leading-tight truncate">
              {listing.ownerName}
            </div>
            <div className="text-[11px] text-primary-foreground/80 truncate">
              Property Owner · Usually replies in a few hours
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 hover:bg-white/15 transition-colors"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Listing context strip */}
        <div className="px-4 py-2 bg-gray-50 border-b text-xs text-muted-foreground truncate shrink-0">
          About: <span className="font-medium text-foreground">{listing.title}</span> · ₹
          {listing.price.toLocaleString("en-IN")}/mo
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
          {messages.map((m) => {
            if (m.from === "system") {
              return (
                <div key={m.id} className="text-center">
                  <span className="inline-block bg-gray-200/80 text-gray-600 text-[11px] px-3 py-1.5 rounded-full max-w-[85%]">
                    {m.text}
                  </span>
                </div>
              );
            }
            const mine = m.from === "me";
            return (
              <div
                key={m.id}
                className={`flex ${mine ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words ${
                    mine
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-white border rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            );
          })}
          <div ref={endRef} />
        </div>

        {/* Composer */}
        <div className="border-t p-3 shrink-0 bg-white">
          <div className="flex items-end gap-2">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              placeholder="Type a message…"
              className="flex-1 resize-none max-h-28 border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              onClick={send}
              disabled={!draft.trim()}
              className="bg-primary text-primary-foreground rounded-full p-2.5 disabled:opacity-40 hover:bg-primary/90 transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="text-[10px] text-muted-foreground mt-1.5 text-center">
            Chat is in preview — replies aren&apos;t real-time yet.
          </p>
        </div>
      </div>
    </div>
  );
}
