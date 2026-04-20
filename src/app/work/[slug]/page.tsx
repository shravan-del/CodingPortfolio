import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CASE_STUDIES } from '@/lib/case-studies';

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cs = CASE_STUDIES[params.slug];
  if (!cs) return { title: 'Not found' };
  return {
    title: cs.title,
    description: cs.tagline,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = CASE_STUDIES[params.slug];
  if (!cs) notFound();

  return (
    <article className="container-narrow py-20 md:py-24">
      <nav className="mb-12">
        <Link
          href="/work"
          className="font-mono text-xs text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-signal)] transition-colors"
        >
          ← back to work
        </Link>
      </nav>

      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 border border-[color:var(--color-signal)]/30 bg-[color:var(--color-signal)]/10 text-[color:var(--color-signal)]">
            {cs.status}
          </span>
          <span className="font-mono text-xs text-[color:var(--color-fg-muted)]">
            {cs.year} · {cs.role}
          </span>
        </div>

        <h1 className="font-display mb-6">{cs.title}</h1>

        <p className="text-xl md:text-2xl text-[color:var(--color-fg-muted)] leading-relaxed max-w-2xl">
          {cs.tagline}
        </p>

        {(cs.links.github || cs.links.demo) && (
          <div className="mt-10 flex flex-wrap gap-3">
            {cs.links.demo && cs.links.demo !== '#' && (
              <a
                href={cs.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live demo ↗
              </a>
            )}
            {cs.links.github && cs.links.github !== '#' && (
              <a
                href={cs.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[color:var(--color-border)] border-y border-[color:var(--color-border)] mb-16">
        {cs.facts.map((f, i) => (
          <div
            key={i}
            className={`py-6 px-4 md:px-6 ${i === 0 ? 'border-l-0' : ''}`}
          >
            <div className="font-display text-3xl text-[color:var(--color-signal)] mb-1">
              {f.value}
            </div>
            <div className="text-[10px] font-mono text-[color:var(--color-fg-muted)] tracking-wider uppercase">
              {f.label}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-16">
        <Section label="01" title="The problem">
          {cs.problem}
        </Section>

        <Section label="02" title="What I built">
          {cs.whatIBuilt}
        </Section>

        {cs.architecture && (
          <Section label="03" title="Architecture">
            <div className="not-prose">{cs.architecture}</div>
          </Section>
        )}

        <Section label={cs.architecture ? '04' : '03'} title="Key decisions">
          <ul className="list-none pl-0 space-y-5">
            {cs.decisions.map((d, i) => (
              <li
                key={i}
                className="border-l-2 border-[color:var(--color-border-strong)] hover:border-[color:var(--color-signal)] transition-colors pl-5 py-1"
              >
                <div className="font-mono text-sm text-[color:var(--color-signal)] mb-1">
                  {d.title}
                </div>
                <div className="text-[color:var(--color-fg-muted)] leading-relaxed">{d.body}</div>
              </li>
            ))}
          </ul>
        </Section>

        <Section label={cs.architecture ? '05' : '04'} title="Outcome">
          {cs.outcome}
        </Section>

        <Section label={cs.architecture ? '06' : '05'} title={"What I'd do differently"}>
          {cs.lessons}
        </Section>
      </div>

      <div className="mt-20 border-t border-[color:var(--color-border)] pt-10">
        <p className="cmd-label mb-4">stack</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-[color:var(--color-fg-muted)]">
          {cs.stack.map((s) => (
            <span key={s}>· {s}</span>
          ))}
        </div>
      </div>

      <div className="mt-20 border-t border-[color:var(--color-border)] pt-10 flex items-center justify-between">
        <Link href="/work" className="link text-sm font-mono">
          ← all work
        </Link>
        <Link href="/contact" className="link text-sm font-mono">
          want to talk? →
        </Link>
      </div>
    </article>
  );
}

function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-mono text-xs text-[color:var(--color-fg-subtle)]">{label}</span>
        <h2 className="font-display text-3xl md:text-4xl">{title}.</h2>
      </div>
      <div className="text-[color:var(--color-fg-muted)] leading-relaxed space-y-4 text-lg max-w-prose">
        {children}
      </div>
    </section>
  );
}
