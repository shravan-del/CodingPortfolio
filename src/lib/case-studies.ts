// lib/case-studies.ts
// The content for each case study deep-dive page.
// Edit copy freely; the page component (app/work/[slug]/page.tsx) will pick it up.

import type { ReactNode } from "react";
import { createElement as e } from "react";

export type CaseStudy = {
  title: string;
  tagline: string;
  year: string;
  role: string;
  status: "Live" | "Shipping" | "Research" | "Archived";
  stack: string[];
  facts: { value: string; label: string }[];
  links: { github?: string; demo?: string; paper?: string };
  problem: ReactNode;
  whatIBuilt: ReactNode;
  architecture?: ReactNode;
  decisions: { title: string; body: string }[];
  outcome: ReactNode;
  lessons: ReactNode;
};

// Simple paragraph helper
const p = (text: string) => e("p", null, text);

export const CASE_STUDIES: Record<string, CaseStudy> = {
  codecompass: {
    title: "CodeCompass",
    tagline:
      "An AI-powered codebase analyzer. Point it at any repository and it answers questions like a senior engineer who's lived in the code for years.",
    year: "2025",
    role: "Solo build",
    status: "Live",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Claude API (Sonnet)",
      "Vector embeddings",
      "Vercel",
      "Postgres",
    ],
    facts: [
      { value: "< 2s", label: "Avg query latency" },
      { value: "50K+", label: "LOC indexed" },
      { value: "90%+", label: "Context hit rate" },
      { value: "MIT", label: "License" },
    ],
    links: {
      github: "#", // TODO: swap in real URL
      demo: "#",
    },
    problem: p(
      "New engineers onboarding onto a mature codebase spend weeks just figuring out where things live. AI coding assistants solve the micro-level — autocomplete, inline suggestions — but they're useless at the macro level: 'why does this system route auth through three services?' or 'where does the payment webhook actually get validated?' That gap is where most onboarding pain lives."
    ),
    whatIBuilt: p(
      "A tool that indexes a repository into vector embeddings at multiple granularities (file, function, module), then routes questions through Claude with a retrieval-augmented pipeline that pulls the right slices of code as context. The result: a chat interface you can ask high-level architectural questions, and it answers with citations back to the exact files and line ranges. Think of it as giving Claude a senior engineer's working memory of your codebase."
    ),
    decisions: [
      {
        title: "Multi-granularity embeddings over whole-file",
        body: "Most naive RAG systems embed whole files. That loses resolution — a 500-line file becomes one blob. I chunk at the function and class level, then build a parent-index so I can expand context upward when needed. It roughly doubled my context hit rate on architectural questions.",
      },
      {
        title: "Claude Sonnet over Opus for the main loop",
        body: "Opus is smarter but 5x the cost. For the bulk of queries, Sonnet's reasoning is more than sufficient when the context is well-chosen. I route only 'explain this entire subsystem'-tier queries to Opus, keeping 90%+ of traffic on Sonnet.",
      },
      {
        title: "Aggressive cache on repo indexing, lazy on re-index",
        body: "Re-indexing a 50K-LOC repo from scratch takes minutes and burns tokens. I hash at the file level and only re-embed changed files on push. Brought amortized indexing cost down by roughly 20x.",
      },
    ],
    outcome: p(
      "Used it on my own projects first — Samaritan and CreatorMind — where it cut my context-switching time noticeably when I returned to old code after weeks away. Now open-sourced under MIT. The clearest win: it turns a question like 'how do I add a new payment method' from a 30-minute file hunt into a 2-minute Q&A."
    ),
    lessons: p(
      "If I started again, I'd invest more in the chunking strategy upfront. Function-level is right for some questions but wrong for others — config files, migrations, infra code don't chunk well this way. I'd build in an AST-aware chunker from the start, and I'd design the citation UI to link out to GitHub line ranges from day one instead of bolting that on later."
    ),
  },

  samaritan: {
    title: "Samaritan",
    tagline:
      "An autonomous legal AI agent that navigates complex filings, extracts obligations, and flags risks — running on Amazon Nova via AWS Bedrock.",
    year: "2025",
    role: "Solo build",
    status: "Live",
    stack: [
      "AWS Bedrock",
      "Amazon Nova",
      "Python",
      "FastAPI",
      "Agent framework",
      "S3",
    ],
    facts: [
      { value: "100+", label: "Docs/hour throughput" },
      { value: "94%", label: "Obligation recall" },
      { value: "Nova", label: "Primary model" },
      { value: "Private", label: "Beta users" },
    ],
    links: {
      github: "#",
      demo: "#",
    },
    problem: p(
      "First-year associates at law firms spend enormous chunks of their day reading contracts and pulling out obligations — 'X must deliver Y by Z, or Y owes late fees.' It's mechanical but high-stakes: miss a clause and the firm eats liability. This is the archetypal 'expensive humans doing expert pattern-matching' problem, and it's exactly the kind of thing autonomous agents should be good at."
    ),
    whatIBuilt: p(
      "An agent loop on AWS Bedrock using Amazon Nova as the core reasoning model. Given a legal document, the agent plans an extraction strategy, iterates over sections, builds a structured obligation graph (who / what / when / conditions), then runs a second risk-flagging pass against a library of known problem patterns. The output is a human-auditable report with citations to specific clauses."
    ),
    decisions: [
      {
        title: "Amazon Nova over Claude for the core loop",
        body: "I built this during my prep for the Amazon internship — Nova is Amazon's in-house model family, and I wanted deep fluency with it. Nova Pro turned out to be strong on structured extraction tasks and significantly cheaper per-token than frontier competitors. The trade-off was a thinner ecosystem, which I solved by building the agent framework more explicitly.",
      },
      {
        title: "Two-pass: extract first, judge second",
        body: "My first version tried to do extraction and risk-flagging in a single pass. Accuracy was mediocre on both. Splitting into two passes — extract a neutral obligation list, then judge it against known risk patterns — improved both, because each pass has one job and can be evaluated independently.",
      },
      {
        title: "Hard limit on agent loop depth",
        body: "Agent frameworks love to run forever. I cap the loop at 6 iterations and force the agent to emit its best-effort answer if it hits the ceiling, flagged as uncertain. This kept costs predictable and failures graceful — I'd rather output 'I'm not sure, here's my best guess' than silently burn $50 of tokens in a hallucination spiral.",
      },
    ],
    outcome: p(
      "Currently in private beta with a small group of legal testers. On a hand-labeled set of 50 contracts, the agent hits 94% recall on obligations and flags roughly 80% of the risks that human reviewers flagged. The biggest value has been speed: what took a junior associate two hours takes the agent about four minutes, with the human now doing verification instead of extraction."
    ),
    lessons: p(
      "I underestimated how much the agent's output format matters to actual lawyers. My first version dumped raw JSON and got polite confusion. V2 renders a clean PDF report that mirrors the reviewing workflow they already use, and adoption jumped. The model was always good enough — the shell around it was the real bottleneck."
    ),
  },

  creatormind: {
    title: "CreatorMind",
    tagline:
      "A SaaS that turns raw YouTube analytics into content strategy. Real Stripe billing, tiered Claude models, and measurable engagement lift for users.",
    year: "2025",
    role: "Solo founder + dev",
    status: "Shipping",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Stripe (subscriptions)",
      "Claude Haiku + Sonnet",
      "Postgres (Supabase)",
      "Tailwind",
    ],
    facts: [
      { value: "200+", label: "Active users" },
      { value: "+45%", label: "Avg engagement lift" },
      { value: "3 tiers", label: "Pricing" },
      { value: "99.9%", label: "Uptime (30d)" },
    ],
    links: {
      github: "#",
      demo: "#",
    },
    problem: p(
      "Mid-tier YouTube creators — the 10K-to-500K subscriber bracket — have more data than they know what to do with and less time than ever. YouTube Studio shows them everything and explains nothing. They need a strategist, not a dashboard."
    ),
    whatIBuilt: p(
      "A web app where creators connect their channel and receive AI-generated content strategy: which of their topics are underperforming relative to similar channels, which thumbnail patterns correlate with their own best videos, what to make next and when to post. Free tier gets weekly high-level reports via Claude Haiku; Pro tier gets on-demand deep analysis via Sonnet; Studio tier layers in competitor benchmarking. All backed by real Stripe subscriptions."
    ),
    decisions: [
      {
        title: "Model tiering tied to pricing tier",
        body: "Haiku for free users, Sonnet for paid. This is the single biggest cost decision in the product. Haiku is roughly 1/10th the cost per token and still strong on summarization — it carries free-tier economics. Sonnet's reasoning is what unlocks the paid-tier feature value. Users don't care which model is under the hood; they care about what the output gets them.",
      },
      {
        title: "Stripe-first, day one",
        body: "Real billing from the start. It forced me to build user auth, account state, webhook handling, and refund flows all on day one — which is painful but meant my first real user could convert to paid immediately. If I had faked billing and added it later, I'd still be adding it later.",
      },
      {
        title: "Aggressive caching on channel data",
        body: "YouTube's API has strict quotas. I cache channel-level analytics for 6 hours and video-level for 24, with a manual 'refresh' button that respects the quota. This keeps me well under the cap even as the user base grows, and users don't notice the staleness because YouTube data doesn't actually change minute-to-minute at their scale.",
      },
    ],
    outcome: p(
      "200+ active users, with roughly 15% on paid plans. Users who follow the AI's weekly strategy for 30+ days show an average 45% engagement lift versus their prior 30 days. The clearest leading indicator of churn was users who connected a channel but never returned for the weekly report — I added an email nudge and drop-off improved noticeably."
    ),
    lessons: p(
      "I spent weeks making the AI smarter before realizing most of my retention problem was that users forgot the app existed. The AI was already good enough for the first 10x of retention; the second 10x was going to come from email nudges, onboarding flow, and habit formation. Engineers default to solving the technical problem. Most products aren't bottlenecked on the technical problem."
    ),
  },

  "sentivity-pipeline": {
    title: "Sentiment Shift Pipeline",
    tagline:
      "An NLP pipeline that quantifies sentiment shifts in political subreddits during high-stakes events — published at ACM CSCW 2024.",
    year: "2024",
    role: "Engineer + co-author",
    status: "Research",
    stack: [
      "Python",
      "CardiffNLP (Twitter-RoBERTa)",
      "Reddit API (PRAW)",
      "pandas",
      "PostgreSQL",
      "Matplotlib",
    ],
    facts: [
      { value: "86.6%", label: "Model accuracy" },
      { value: "10K+", label: "Posts/day ingested" },
      { value: "CSCW", label: "Published at" },
      { value: "Peer", label: "Reviewed" },
    ],
    links: {
      github: "#",
      paper: "/research",
    },
    problem: p(
      "Online community sentiment is usually studied with lagging, hand-coded snapshots — a researcher picks a time window, labels posts, writes a paper. But sentiment is a time-series phenomenon: it shifts around specific events, in specific directions, with specific half-lives. We wanted to study that at scale, specifically within right-wing Reddit communities, to see how collective affect reacts to sociopolitical events and whether those reactions are predictable."
    ),
    whatIBuilt: p(
      "A pipeline that ingests posts from a fixed set of subreddits over multi-month windows, classifies each post using CardiffNLP's Twitter-RoBERTa sentiment model (which we evaluated at 86.6% accuracy on a hand-labeled 500-post subset of our data), aggregates into event-aligned time series, and surfaces statistically meaningful inflections. Under the hood: a Reddit-API ingester handling 10,000+ posts/day, a batched inference stage, and a time-series analysis module that aligns sentiment to real-world event timestamps."
    ),
    decisions: [
      {
        title: "Transformer sentiment over lexicon-based (VADER)",
        body: "VADER is fast and free but it's a bag-of-words method built on general English — it misses political sarcasm and in-group vocabulary that actively flips sentiment. CardiffNLP is trained on Twitter and handles that language variety far better. The accuracy gap on our hand-labeled set was large enough (roughly 15 points) that the compute cost was worth it.",
      },
      {
        title: "Event-aligned windows, not calendar-aligned",
        body: "Early iterations bucketed sentiment by week. That washed out the signal: most of the variance came from specific events, not from the calendar. Switching to event-aligned windows (e.g., 'the 7 days before and 14 days after event X') surfaced much cleaner patterns and became the core methodological move of the paper.",
      },
      {
        title: "Hand-labeled validation set, always",
        body: "Anytime we changed the model or the prompt, we re-evaluated against the same 500-post hand-labeled subset. This sounds obvious but it's the discipline that catches silent regressions early. Twice it caught a model swap that looked fine in the aggregate but had regressed on a specific community.",
      },
    ],
    outcome: p(
      "Accepted and published at ACM CSCW 2024 (Computer-Supported Cooperative Work and Social Computing) — one of the top venues for social-computing research. The pipeline itself continues to run at Sentivity AI as production infrastructure for ongoing research."
    ),
    lessons: p(
      "The research finished faster than the paper did. Writing for peer review is its own skill, and it's worth sitting with senior co-authors and understanding what reviewers will push back on before you submit, not after. The methodology section was rewritten three times before it passed internal review — which was frustrating but made the paper land."
    ),
  },
};
