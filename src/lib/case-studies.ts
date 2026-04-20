// lib/case-studies.ts — case study copy uses only claims you can defend in an interview.

import type { ReactNode } from 'react';
import { createElement as e } from 'react';

export type CaseStudy = {
  title: string;
  tagline: string;
  year: string;
  role: string;
  status: 'Live' | 'Shipping' | 'Research' | 'Archived' | 'In progress';
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

const p = (text: string) => e('p', null, text);

export const CASE_STUDIES: Record<string, CaseStudy> = {
  codecompass: {
    title: 'CodeCompass',
    tagline:
      'An AI-powered codebase Q&A tool: multi-granularity retrieval over a repo, then Claude for answers with citations back to files and ranges.',
    year: '2025',
    role: 'Solo build',
    status: 'In progress',
    stack: [
      'Next.js',
      'TypeScript',
      'Claude API',
      'Vector embeddings',
      'Vercel',
      'Postgres',
    ],
    facts: [
      { value: 'RAG', label: 'Retrieval-first design' },
      { value: 'Multi', label: 'Granularity (file → symbol)' },
      { value: 'Claude', label: 'Reasoning layer' },
      { value: 'Dogfood', label: 'Used on my own repos first' },
    ],
    links: {},
    problem: p(
      "Onboarding onto a mature codebase is slow: 'where does auth actually run?' and 'where is the webhook validated?' rarely have a single obvious answer. Inline AI helps with lines of code, not with system-level questions that span modules."
    ),
    whatIBuilt: p(
      'A pipeline that indexes a repository into embeddings at multiple granularities, retrieves the slices that best match a natural-language question, and sends that context to Claude so answers can cite concrete locations in the tree. The focus is architectural questions and navigation, not replacing an IDE.'
    ),
    decisions: [
      {
        title: 'Chunk above the line level when needed',
        body: 'Whole-file embeddings blur structure in large modules. Finer chunks (roughly function- or region-sized) plus a way to pull parent context when a hit is shallow improved answer quality on my own tests — without promising a single headline accuracy number.',
      },
      {
        title: 'Cost-aware model choice',
        body: 'Heavier models are reserved for questions that need more reasoning; everyday navigation queries stay on a smaller model when context is good enough.',
      },
      {
        title: 'Re-index only what changed',
        body: 'File-level hashing so pushes re-embed deltas instead of the full repo every time keeps iteration cheap enough to use the tool day to day.',
      },
    ],
    outcome: p(
      'I use it on my own projects when I return to code after time away. A public repo and polished demo are not linked here yet; I am happy to walk through architecture, tradeoffs, and code in a conversation.'
    ),
    lessons: p(
      'Citation UX matters as much as retrieval quality. Next iteration: tighter integration with GitHub line anchors and AST-aware chunking for config and infra files that do not split cleanly at function boundaries.'
    ),
  },

  samaritan: {
    title: 'Samaritan',
    tagline:
      'An autonomous legal-document agent on AWS Bedrock (Amazon Nova): structured extraction of obligations and a second pass for risk patterns, with human-auditable output.',
    year: '2025',
    role: 'Solo build',
    status: 'In progress',
    stack: ['AWS Bedrock', 'Amazon Nova', 'Python', 'FastAPI', 'Agent framework', 'S3'],
    facts: [
      { value: '2-pass', label: 'Extract, then judge' },
      { value: 'Nova', label: 'Bedrock models' },
      { value: 'Capped', label: 'Agent loop depth' },
      { value: 'Private', label: 'Not public yet' },
    ],
    links: {},
    problem: p(
      "Contract review is full of mechanical extraction — obligations, dates, conditions — with high cost if something is missed. The goal here is not to replace counsel but to draft a structured first pass a human can verify."
    ),
    whatIBuilt: p(
      'An agent loop that plans over a document, extracts an obligation-style graph, then runs a separate pass against a small library of risk heuristics. Output is meant to read like a memo a junior might produce: citations to clauses, uncertainty flagged where the model is weak.'
    ),
    decisions: [
      {
        title: 'Nova on Bedrock for the core loop',
        body: 'Built to get fluent with the same stack I expect to use at Amazon: Bedrock APIs, guardrails, and cost controls. Trade-off work is mostly in prompt structure and evaluation harnesses, not in chasing leaderboard scores on a public benchmark.',
      },
      {
        title: 'Two-pass extraction vs one-shot',
        body: 'Single-pass answers mixed extraction quality with judgment quality. Splitting the problem made evaluation tractable: you can inspect the obligation list before looking at risk flags.',
      },
      {
        title: 'Hard cap on loop depth',
        body: 'Agents can burn tokens silently. A strict iteration ceiling with a forced best-effort answer (marked uncertain) keeps behavior predictable in demos and interviews.',
      },
    ],
    outcome: p(
      'Still private — no public benchmark claims on this page. The design target is credible extraction with a human in the loop; anything quantitative belongs in a controlled eval write-up, not in a portfolio strip.'
    ),
    lessons: p(
      'Lawyers care about presentation as much as model quality. Early JSON dumps landed flat; report-shaped output that mirrors review habits changed the conversation immediately.'
    ),
  },

  creatormind: {
    title: 'CreatorMind',
    tagline:
      'A creator-facing SaaS: connect a YouTube channel, get AI-generated strategy from channel analytics, with Stripe subscriptions and tiered model usage.',
    year: '2025',
    role: 'Solo founder + dev',
    status: 'Shipping',
    stack: [
      'Next.js',
      'TypeScript',
      'Stripe (subscriptions)',
      'Claude Haiku + Sonnet',
      'Postgres (Supabase)',
      'Tailwind',
    ],
    facts: [
      { value: 'Stripe', label: 'Real billing' },
      { value: 'Tiered', label: 'Model by plan' },
      { value: 'Quota', label: 'YouTube API aware' },
      { value: 'Private', label: 'Repo not public' },
    ],
    links: {},
    problem: p(
      'Mid-size creators sit on a lot of analytics and little interpretable guidance. The product hypothesis is simple: turn studio data into a weekly plan — topics, timing, and patterns — without pretending the model replaces taste.'
    ),
    whatIBuilt: p(
      'A web app with auth, Stripe webhooks, and tiered access so cheaper models cover high-volume summaries and stronger models cover paid deep dives. Caching and refresh flows are built around real YouTube API limits.'
    ),
    decisions: [
      {
        title: 'Billing on day one',
        body: 'Shipping Stripe early forced webhook correctness, entitlement bugs, and refund paths up front instead of deferring them behind a fake “Pro” toggle.',
      },
      {
        title: 'Model tiering tied to price',
        body: 'Economics follow from usage: bulk summarization stays on smaller models; paid tiers unlock heavier analysis where latency and cost are acceptable.',
      },
      {
        title: 'Retention vs “smarter AI”',
        body: 'Most drop-off I saw was habit, not model quality. Nudges and onboarding matter as much as the summarization pipeline.',
      },
    ],
    outcome: p(
      'I am not publishing user counts or lift percentages here without a methodology I can show in an interview. The shipped surface area is Stripe + auth + tiered analysis + quota-aware ingestion; happy to discuss metrics privately with context.'
    ),
    lessons: p(
      'Default engineering instinct is to improve the model; default product reality is often email, onboarding, and habit. Both have to be true for something people pay for.'
    ),
  },

  'sentivity-pipeline': {
    title: 'Sentiment Shift Pipeline',
    tagline:
      'An NLP pipeline that quantifies sentiment shifts in politically aligned Reddit communities during high-stakes events — published at ACM CSCW 2024.',
    year: '2024',
    role: 'Engineer + co-author',
    status: 'Research',
    stack: [
      'Python',
      'CardiffNLP (Twitter-RoBERTa)',
      'Reddit API (PRAW)',
      'pandas',
      'PostgreSQL',
      'Matplotlib',
    ],
    facts: [
      { value: '86.6%', label: 'Model accuracy (labeled eval set)' },
      { value: '10K+', label: 'Posts/day ingested (peak infra)' },
      { value: 'CSCW', label: 'Published at' },
      { value: 'Peer', label: 'Reviewed' },
    ],
    links: {
      paper: '/research',
    },
    problem: p(
      'Community sentiment is often studied with static snapshots. We needed time-aligned signal around real-world events: how affect moves before and after identifiable sociopolitical moments, at scale, in politically aligned subreddits.'
    ),
    whatIBuilt: p(
      "A pipeline that ingests posts from a fixed set of subreddits over multi-month windows, classifies sentiment with CardiffNLP's Twitter-RoBERTa model (evaluated at 86.6% accuracy on a 500-post hand-labeled subset from our data), aggregates into event-aligned series, and surfaces inflections tied to event timestamps. Ingestion was engineered for large daily volume (on the order of 10,000+ posts per day at peak)."
    ),
    decisions: [
      {
        title: 'Transformer sentiment over lexicon-only baselines',
        body: 'Lexicon methods missed in-group language and sarcasm common in political discussion. Moving to a transformer classifier matched how reviewers actually read posts in our validation set.',
      },
      {
        title: 'Event-aligned windows',
        body: 'Calendar buckets washed out signal. Aligning windows to events made the phenomenon we cared about visible in the data.',
      },
      {
        title: 'Fixed validation discipline',
        body: 'Re-running the same hand-labeled slice after model or preprocessing changes caught regressions that aggregate dashboards did not.',
      },
    ],
    outcome: p(
      'Accepted and published at ACM CSCW 2024 (Proc. ACM Hum.-Comput. Interact., CSCW). The pipeline informed production-scale research infrastructure at Sentivity AI.'
    ),
    lessons: p(
      'The research timeline and the paper timeline are different skills. Early alignment with co-authors on what reviewers will push on saved painful rewrite cycles later.'
    ),
  },
};
