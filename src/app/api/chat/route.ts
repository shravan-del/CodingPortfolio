// app/api/chat/route.ts
// Server-side route that proxies the chat to Anthropic's API.
// Keeps your API key secret (never exposed to the client).
//
// Setup:
// 1) npm install @anthropic-ai/sdk
// 2) In Vercel: add env var ANTHROPIC_API_KEY = your_real_key
// 3) Locally, add it to .env.local (which is gitignored!)

import Anthropic from '@anthropic-ai/sdk';
import type { MessageParam } from '@anthropic-ai/sdk/resources/messages';
import { SYSTEM_PROMPT } from '@/lib/chat-system-prompt';

// Basic in-memory rate limit per IP (resets on cold start).
// For production, use Upstash Redis or Vercel KV.
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 20;
const rateMap = new Map<string, { count: number; resetAt: number }>();

function checkRate(ip: string): boolean {
  const now = Date.now();
  const record = rateMap.get(ip);
  if (!record || record.resetAt < now) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (record.count >= MAX_REQUESTS_PER_WINDOW) return false;
  record.count += 1;
  return true;
}

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (!checkRate(ip)) {
      return new Response(
        "You've hit the hourly chat limit. Email sathikinasetti@vt.edu directly.",
        { status: 429 }
      );
    }

    const { messages } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response("Bad request", { status: 400 });
    }

    // Basic input sanity check
    const lastUserMsg = messages[messages.length - 1];
    if (
      !lastUserMsg ||
      lastUserMsg.role !== "user" ||
      typeof lastUserMsg.content !== "string" ||
      lastUserMsg.content.length > 2000
    ) {
      return new Response("Invalid message", { status: 400 });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return new Response('Chat is not configured.', { status: 503 });
    }

    const client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const trimmedMessages: MessageParam[] = messages.slice(-20).map(
      (m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })
    );

    const stream = await client.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: trimmedMessages,
      stream: true,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          controller.close();
        } catch (err) {
          console.error("Stream error:", err);
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (err) {
    console.error("Chat route error:", err);
    return new Response("Internal error", { status: 500 });
  }
}
