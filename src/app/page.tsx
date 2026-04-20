'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CurrentlySection />
      <FeaturedWork />
      <MetricsStrip />
      <ResearchCallout />
      <ContactCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="container-prose pt-16 md:pt-28 pb-24 md:pb-32">
      <p className="cmd-label mb-8">whoami</p>

      <h1 className="font-display mb-8 max-w-5xl">
        I build <em>AI systems</em> that ship —<br />
        from <em>research papers</em> to <em>production</em>.
      </h1>

      <p className="text-lg md:text-xl text-[color:var(--color-fg-muted)] max-w-2xl mb-12 leading-relaxed">
        Shravan Athikinasetti. CS + Quantum Computing at Virginia Tech. Published at{' '}
        <AccentLink href="/research">ACM CSCW 2024</AccentLink>, incoming{' '}
        <AccentLink href="/experience">Amazon SDE Co-op</AccentLink> Summer 2026. Previously built ML
        infrastructure at <AccentLink href="/experience">Sentivity AI</AccentLink>.
      </p>

      <div className="flex flex-wrap gap-3">
        <Link href="/work" className="btn btn-primary">
          See the work →
        </Link>
        <Link href="/chat" className="btn">
          <span className="text-[color:var(--color-signal)]">◉</span> Ask me anything
        </Link>
        <Link href="/resume.pdf" target="_blank" className="btn">
          Resume ↗
        </Link>
      </div>

      <div className="mt-20 md:mt-28 max-w-2xl">
        <Terminal />
      </div>
    </section>
  );
}

function AccentLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-[color:var(--color-fg)] underline underline-offset-4 decoration-[color:var(--color-border-strong)] hover:decoration-[color:var(--color-signal)] hover:text-[color:var(--color-signal)] transition-colors"
    >
      {children}
    </Link>
  );
}

function Terminal() {
  const lines = [
    { prompt: '$', text: 'cat ~/now.md', delay: 0 },
    { prompt: '', text: '', delay: 400, heading: true },
    {
      prompt: '',
      text: '→ ramping up for Amazon SDE Co-op, Summer 2026',
      delay: 500,
    },
    {
      prompt: '',
      text: '→ shipping CreatorMind (Stripe + tiered models)',
      delay: 600,
    },
    {
      prompt: '',
      text: '→ prepping for OpenAI Research Fellowship (May 2026)',
      delay: 700,
    },
    { prompt: '', text: '→ reading: Deep Learning, Goodfellow et al.', delay: 800 },
    { prompt: '', text: '', delay: 400 },
    { prompt: '$', text: '_', delay: 400, cursor: true },
  ];

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= lines.length) return;
    const t = setTimeout(
      () => setVisibleCount((v) => v + 1),
      lines[visibleCount]?.delay ?? 500
    );
    return () => clearTimeout(t);
  }, [visibleCount]);

  return (
    <div
      className="border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-sunken)] font-mono text-sm"
      role="region"
      aria-label="Current status"
    >
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[color:var(--color-border)] text-xs text-[color:var(--color-fg-subtle)]">
        <span className="w-3 h-3 rounded-full bg-[color:var(--color-border-strong)]" />
        <span className="w-3 h-3 rounded-full bg-[color:var(--color-border-strong)]" />
        <span className="w-3 h-3 rounded-full bg-[color:var(--color-border-strong)]" />
        <span className="ml-3">~/shravan — zsh</span>
      </div>

      <div className="p-5 min-h-[260px]">
        {lines.slice(0, visibleCount).map((line, i) => (
          <div
            key={i}
            className={`flex gap-2 ${line.heading ? 'mt-2' : ''} ${line.text === '' ? 'h-4' : ''}`}
          >
            {line.prompt && (
              <span className="text-[color:var(--color-signal)] shrink-0">{line.prompt}</span>
            )}
            <span className={line.cursor ? 'animate-pulse' : ''}>{line.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CurrentlySection() {
  return (
    <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-bg-elevated)]">
      <div className="container-prose py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-signal)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[color:var(--color-signal)]" />
          </span>
          <span className="cmd-label">status</span>
        </div>
        <p className="text-[color:var(--color-fg)] font-mono text-sm">
          Open to{' '}
          <strong className="text-[color:var(--color-signal)]">
            Winter 2027 & Spring 2027 co-ops
          </strong>
          . Graduating <span className="text-[color:var(--color-fg-muted)]">December 2026</span>.
          Based in <span className="text-[color:var(--color-fg-muted)]">Blacksburg, VA</span> (open to
          relocation).
        </p>
      </div>
    </section>
  );
}

function FeaturedWork() {
  const projects = [
    {
      slug: 'codecompass',
      index: '01',
      title: 'CodeCompass',
      tagline:
        "RAG-style codebase Q&A with Claude — multi-granularity retrieval and citations. In active development.",
      stack: ['Next.js', 'Claude API', 'Vector embeddings', 'TypeScript'],
      status: 'In progress',
    },
    {
      slug: 'samaritan',
      index: '02',
      title: 'Samaritan',
      tagline:
        'Legal-document agent on AWS Bedrock + Amazon Nova — extraction and risk passes. Private build.',
      stack: ['AWS Bedrock', 'Amazon Nova', 'Python', 'Agent loops'],
      status: 'In progress',
    },
    {
      slug: 'creatormind',
      index: '03',
      title: 'CreatorMind',
      tagline:
        'YouTube creator SaaS: Stripe billing, tiered models, analytics-driven strategy. Traction discussed privately.',
      stack: ['Next.js', 'Stripe', 'Claude Haiku/Sonnet', 'Postgres'],
      status: 'Shipping',
    },
    {
      slug: 'sentivity-pipeline',
      index: '04',
      title: 'Sentiment Shift Pipeline',
      tagline:
        'NLP pipeline for sentiment over time on Reddit — model evaluated on our labeled set; production-scale ingestion. ACM CSCW 2024.',
      stack: ['Python', 'CardiffNLP', 'Reddit API', 'Published'],
      status: 'Research',
    },
  ];

  return (
    <section className="container-prose py-24 md:py-32">
      <div className="flex items-end justify-between mb-14 md:mb-20">
        <div>
          <p className="cmd-label mb-4">ls featured/</p>
          <h2 className="font-display">Selected work.</h2>
        </div>
        <Link
          href="/work"
          className="hidden md:inline-block link text-sm font-mono text-[color:var(--color-fg-muted)]"
        >
          all work →
        </Link>
      </div>

      <div className="grid gap-0 divide-y divide-[color:var(--color-border)] border-y border-[color:var(--color-border)]">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start py-8 md:py-10 hover:bg-[color:var(--color-bg-elevated)] transition-colors px-4 md:px-6 -mx-4 md:-mx-6"
          >
            <span className="font-mono text-sm text-[color:var(--color-fg-subtle)] pt-2">{p.index}</span>

            <div>
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <h3 className="font-display text-3xl md:text-4xl text-[color:var(--color-fg)] group-hover:text-[color:var(--color-signal)] transition-colors">
                  {p.title}
                </h3>
                <StatusPill status={p.status} />
              </div>
              <p className="text-[color:var(--color-fg-muted)] text-lg max-w-2xl mb-4 leading-relaxed">
                {p.tagline}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-[color:var(--color-fg-subtle)]">
                {p.stack.map((s) => (
                  <span key={s}>· {s}</span>
                ))}
              </div>
            </div>

            <span className="font-mono text-xl text-[color:var(--color-fg-subtle)] group-hover:text-[color:var(--color-signal)] group-hover:translate-x-1 transition-all pt-2 hidden md:block">
              →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 md:hidden">
        <Link href="/work" className="btn">
          all work →
        </Link>
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: string }) {
  const variants: Record<string, string> = {
    Live: 'bg-[color:var(--color-signal)]/10 text-[color:var(--color-signal)] border-[color:var(--color-signal)]/30',
    Shipping:
      'bg-[color:var(--color-signal)]/10 text-[color:var(--color-signal)] border-[color:var(--color-signal)]/30',
    Research:
      'bg-transparent text-[color:var(--color-fg-muted)] border-[color:var(--color-border-strong)]',
    'In progress':
      'bg-transparent text-[color:var(--color-fg-muted)] border-[color:var(--color-signal)]/40',
  };
  return (
    <span
      className={`font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 border ${variants[status]}`}
    >
      {status}
    </span>
  );
}

function MetricsStrip() {
  const metrics = [
    { value: '86.6%', label: 'Classifier accuracy\n(on our labeled eval set)' },
    { value: '10K+', label: 'Posts/day peak\n(Sentivity pipeline)' },
    { value: 'CSCW', label: 'Peer-reviewed\npublication' },
    { value: '3.65', label: "GPA, Dean's List\nDistinction '23–'26" },
  ];

  return (
    <section className="border-y border-[color:var(--color-border)]">
      <div className="container-prose grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[color:var(--color-border)]">
        {metrics.map((m, i) => (
          <div key={i} className={`py-10 px-4 md:px-8 ${i === 0 ? 'border-l-0' : ''}`}>
            <div className="font-display text-5xl md:text-6xl text-[color:var(--color-signal)] mb-2">
              {m.value}
            </div>
            <div className="text-xs font-mono text-[color:var(--color-fg-muted)] whitespace-pre-line leading-relaxed">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResearchCallout() {
  return (
    <section className="container-prose py-24 md:py-32">
      <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end border-t border-[color:var(--color-border)] pt-16">
        <div>
          <p className="cmd-label mb-4">publication</p>
          <h2 className="font-display mb-6">
            Published at <em>ACM CSCW 2024</em>.
          </h2>
          <p className="text-lg text-[color:var(--color-fg-muted)] max-w-2xl leading-relaxed mb-6">
            Peer-reviewed research on sentiment analysis of political discourse on Reddit, using
            CardiffNLP transformer models to quantify affective shifts during key sociopolitical events
            at scale.
          </p>
          <p className="font-mono text-xs text-[color:var(--color-fg-subtle)]">
            Computer-Supported Cooperative Work & Social Computing · 2024
          </p>
        </div>
        <Link href="/research" className="btn btn-primary shrink-0">
          Read the paper →
        </Link>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="container-prose py-24 md:py-32">
      <div className="text-center max-w-3xl mx-auto">
        <p className="cmd-label mb-6">./contact.sh</p>
        <h2 className="font-display mb-6 text-4xl md:text-6xl">
          Currently looking for <em>Winter 2027</em> &<br />
          <em>Spring 2027</em> co-op roles.
        </h2>
        <p className="text-lg text-[color:var(--color-fg-muted)] mb-10">
          If you&apos;re hiring, building something ambitious, or just want to chat about research —
          I&apos;d love to hear from you.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="mailto:sathikinasetti@vt.edu" className="btn btn-primary">
            Email me →
          </a>
          <Link href="/chat" className="btn">
            <span className="text-[color:var(--color-signal)]">◉</span> Or ask my AI twin
          </Link>
        </div>
      </div>
    </section>
  );
}
