import Link from 'next/link';
import type { Metadata } from 'next';
import { CitationCopy } from '@/components/CitationCopy';

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Peer-reviewed research in NLP, social computing, and human-AI interaction. Published at ACM CSCW 2024.',
};

export default function ResearchPage() {
  return (
    <article className="container-narrow py-20 md:py-24">
      <header className="mb-16">
        <p className="cmd-label mb-4">ls publications/</p>
        <h1 className="font-display mb-6">
          Published <em>research</em>.
        </h1>
        <p className="text-lg text-[color:var(--color-fg-muted)] leading-relaxed">
          Peer-reviewed work at the intersection of NLP, social computing, and how communities form
          and shift online.
        </p>
      </header>

      <section className="mb-20">
        <div className="border border-[color:var(--color-border)] bg-[color:var(--color-bg-elevated)] p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 border border-[color:var(--color-signal)]/30 bg-[color:var(--color-signal)]/10 text-[color:var(--color-signal)]">
              ACM CSCW 2024
            </span>
            <span className="font-mono text-xs text-[color:var(--color-fg-muted)]">
              Peer-reviewed · Published
            </span>
          </div>

          <h2 className="font-display text-2xl md:text-3xl mb-5 leading-tight">
            Quantifying Sentiment Shifts in Political Reddit Communities During High-Stakes
            Sociopolitical Events
          </h2>

          <p className="font-mono text-xs text-[color:var(--color-fg-muted)] mb-8">
            Athikinasetti, S. et al. · Proc. ACM Hum.-Comput. Interact., Vol. CSCW, 2024
          </p>

          <div className="space-y-5 text-[color:var(--color-fg-muted)] leading-relaxed">
            <p>
              <span className="cmd-label">abstract</span>
            </p>
            <p>
              This work examines how sentiment within right-wing Reddit communities shifts in response
              to high-stakes sociopolitical events. We develop a pipeline that combines transformer-based
              sentiment classification (CardiffNLP) with event-aligned time- series analysis to quantify
              affective trajectories at the community level, processing large-scale Reddit data over
              multi- month windows. We show that specific event categories produce measurable and
              predictable sentiment inflections, and discuss implications for online community
              research, platform governance, and the study of polarization.
            </p>

            <p className="mt-8">
              <span className="cmd-label">my contribution</span>
            </p>
            <ul className="list-none pl-0 space-y-2">
              <BulletItem>
                Designed and implemented the NLP pipeline that powers the sentiment analysis at scale
              </BulletItem>
              <BulletItem>
                Tuned and evaluated the CardiffNLP model against hand-labeled data, achieving 86.6%
                accuracy
              </BulletItem>
              <BulletItem>
                Built the data ingestion infrastructure that processes 10,000+ posts per day
              </BulletItem>
              <BulletItem>
                Contributed to the event-alignment methodology and statistical analysis
              </BulletItem>
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Read the paper (PDF) ↗
            </a>
            <a href="#" className="btn" target="_blank" rel="noopener noreferrer">
              ACM DL ↗
            </a>
            <CitationCopy />
          </div>
        </div>
      </section>

      <section className="mb-20">
        <p className="cmd-label mb-4">in-progress</p>
        <h2 className="font-display mb-8">What I&apos;m working on now.</h2>
        <div className="space-y-6">
          <OngoingItem
            status="Exploration"
            title="Quantum-classical hybrid NLP"
            blurb="Can quantum kernels improve sentence embeddings for classification under constrained compute? Early experiments underway as part of my Quantum Computing minor."
          />
          <OngoingItem
            status="In drafting"
            title="Agent evaluation in production"
            blurb="Building on the Samaritan project — a methodology for evaluating autonomous agents against real-world legal documents vs. synthetic benchmarks."
          />
        </div>
      </section>

      <section>
        <p className="cmd-label mb-4">next</p>
        <h2 className="font-display mb-6">Where this goes.</h2>
        <p className="text-[color:var(--color-fg-muted)] leading-relaxed mb-4">
          I&apos;m applying for the{' '}
          <strong className="text-[color:var(--color-fg)]">OpenAI Research Fellowship</strong> (May
          2026) and <strong className="text-[color:var(--color-fg)]">graduate school</strong> (Sept
          2026). Letters of recommendation from Dr. Andrew Katz and Dr. Lisa McNair (Virginia Tech).
        </p>
        <p className="text-[color:var(--color-fg-muted)] leading-relaxed">
          If you work on social computing, applied NLP, or agentic AI and want to collaborate —{' '}
          <Link href="/contact" className="link">
            get in touch
          </Link>
          .
        </p>
      </section>
    </article>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="text-[color:var(--color-signal)] font-mono shrink-0">→</span>
      <span>{children}</span>
    </li>
  );
}

function OngoingItem({
  status,
  title,
  blurb,
}: {
  status: string;
  title: string;
  blurb: string;
}) {
  return (
    <div className="border-l-2 border-[color:var(--color-border-strong)] hover:border-[color:var(--color-signal)] transition-colors pl-6 py-2">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-[10px] tracking-wider uppercase text-[color:var(--color-fg-muted)]">
          {status}
        </span>
      </div>
      <h3 className="font-display text-2xl mb-2">{title}</h3>
      <p className="text-[color:var(--color-fg-muted)] leading-relaxed">{blurb}</p>
    </div>
  );
}
