// app/chat/page.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTED_QUESTIONS = [
  "What did you work on at Sentivity AI?",
  "Tell me about your CSCW 2024 paper.",
  "Why are you a good fit for Amazon?",
  "What's CodeCompass?",
  "Walk me through CreatorMind's architecture.",
  "What are you looking for in your next role?",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function send(text: string) {
    if (!text.trim() || loading) return;
    setError(null);

    const userMessage: Message = { role: "user", content: text.trim() };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      // Streaming response
      const reader = res.body?.getReader();
      if (!reader) throw new Error("No response stream");

      const decoder = new TextDecoder();
      let assistantMessage = "";

      setMessages((m) => [...m, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantMessage += chunk;
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = {
            role: "assistant",
            content: assistantMessage,
          };
          return copy;
        });
      }
    } catch (err) {
      setError(
        "Something went wrong. Try again, or email me directly at sathikinasetti@vt.edu."
      );
      setMessages((m) => m.filter((_, i) => i !== m.length - 1));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container-narrow py-20 md:py-24 min-h-[85vh] flex flex-col">
      <header className="mb-10">
        <p className="cmd-label mb-4">./ask_shravan.sh</p>
        <h1 className="font-display mb-4 text-4xl md:text-6xl">
          Ask me <em>anything</em>.
        </h1>
        <p className="text-[color:var(--color-fg-muted)] leading-relaxed max-w-xl">
          This is an AI twin of me, running on Claude. It knows my projects,
          papers, experience, and the kind of work I like. It can&apos;t make
          promises on my behalf — for those, {" "}
          <a
            href="mailto:sathikinasetti@vt.edu"
            className="link"
          >
            email me directly
          </a>
          .
        </p>
      </header>

      {/* chat transcript */}
      <div
        ref={scrollRef}
        className="flex-1 border border-[color:var(--color-border)] bg-[color:var(--color-bg-sunken)] p-4 md:p-6 mb-4 overflow-y-auto min-h-[400px] max-h-[60vh]"
        aria-live="polite"
      >
        {messages.length === 0 && (
          <div className="flex flex-col h-full">
            <p className="font-mono text-xs text-[color:var(--color-fg-subtle)] mb-6">
              try asking —
            </p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  disabled={loading}
                  className="text-left px-3 py-2 text-sm border border-[color:var(--color-border)] hover:border-[color:var(--color-signal)] hover:text-[color:var(--color-signal)] transition-colors disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} content={m.content} />
        ))}

        {loading && messages[messages.length - 1]?.role === "user" && (
          <MessageBubble role="assistant" content="" loading />
        )}
      </div>

      {error && (
        <div className="border border-red-500/30 bg-red-500/5 text-red-300 text-sm p-3 mb-3 font-mono">
          {error}
        </div>
      )}

      {/* input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ask anything..."
          disabled={loading}
          className="flex-1 bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-border)] px-4 py-3 font-mono text-sm focus:outline-none focus:border-[color:var(--color-signal)] transition-colors disabled:opacity-50"
          aria-label="Your question"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "..." : "Send →"}
        </button>
      </form>

      <p className="mt-4 text-xs font-mono text-[color:var(--color-fg-subtle)]">
        Responses generated by Claude. Not a substitute for actually talking
        to me — <Link href="/contact" className="link">do that here</Link>.
      </p>
    </section>
  );
}

/* ========================================================================
   Message bubble
   ======================================================================== */
function MessageBubble({
  role,
  content,
  loading,
}: {
  role: "user" | "assistant";
  content: string;
  loading?: boolean;
}) {
  const isUser = role === "user";
  return (
    <div className={`mb-6 ${isUser ? "text-right" : "text-left"}`}>
      <div className="cmd-label mb-1">
        {isUser ? "you" : "shravan (ai twin)"}
      </div>
      <div
        className={`inline-block max-w-full text-left whitespace-pre-wrap leading-relaxed ${
          isUser
            ? "text-[color:var(--color-fg)]"
            : "text-[color:var(--color-fg-muted)] border-l-2 border-[color:var(--color-signal)] pl-4"
        }`}
      >
        {content || (loading && <TypingDots />)}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex gap-1" aria-label="thinking">
      <span className="w-1.5 h-1.5 bg-[color:var(--color-signal)] rounded-full animate-bounce [animation-delay:-0.3s]" />
      <span className="w-1.5 h-1.5 bg-[color:var(--color-signal)] rounded-full animate-bounce [animation-delay:-0.15s]" />
      <span className="w-1.5 h-1.5 bg-[color:var(--color-signal)] rounded-full animate-bounce" />
    </span>
  );
}
