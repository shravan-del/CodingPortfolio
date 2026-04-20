import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description:
    "Selected projects — AI systems, ML infrastructure, and full-stack products I've shipped.",
};

type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  stack: string[];
  status: 'Live' | 'Shipping' | 'Research' | 'Archived';
  caseStudy: boolean;
  links?: { github?: string; demo?: string; paper?: string };
};

const FEATURED_PROJECTS: Project[] = [
  {
    slug: 'codecompass',
    title: 'CodeCompass',
    tagline:
      "AI codebase analyzer. Point it at a repo; it answers like a senior engineer who's been on the team for years.",
    year: '2025',
    stack: ['Next.js', 'Claude API', 'Vector embeddings', 'TypeScript'],
    status: 'Live',
    caseStudy: true,
    links: { github: '#', demo: '#' },
  },
  {
    slug: 'samaritan',
    title: 'Samaritan',
    tagline:
      'Autonomous legal AI agent on AWS Bedrock + Amazon Nova. Extracts obligations, flags risks, navigates complex filings.',
    year: '2025',
    stack: ['AWS Bedrock', 'Amazon Nova', 'Python', 'LangChain-style agent'],
    status: 'Live',
    caseStudy: true,
    links: { github: '#', demo: '#' },
  },
  {
    slug: 'creatormind',
    title: 'CreatorMind',
    tagline:
      'SaaS turning YouTube analytics into content strategy. Real Stripe billing, tiered Claude models, 200+ users.',
    year: '2025',
    stack: ['Next.js', 'Stripe', 'Claude Haiku/Sonnet', 'Postgres'],
    status: 'Shipping',
    caseStudy: true,
    links: { github: '#', demo: '#' },
  },
  {
    slug: 'sentivity-pipeline',
    title: 'Sentiment Shift Pipeline',
    tagline:
      'NLP pipeline tracking sentiment in political subreddits. 86.6% accuracy, 10K+ posts/day. Published at ACM CSCW 2024.',
    year: '2024',
    stack: ['Python', 'CardiffNLP', 'Reddit API', 'Time-series analysis'],
    status: 'Research',
    caseStudy: true,
    links: { paper: '/research' },
  },
];

const OTHER_PROJECTS: Project[] = [
  {
    slug: 'vt-map-gps',
    title: 'VT Map GPS',
    tagline:
      'AI-powered natural-language navigation for Virginia Tech campus, using Hugging Face transformers. Deployed on HuggingFace Spaces.',
    year: '2024',
    stack: ['Python', 'Transformers', 'PyTorch', 'FastAPI'],
    status: 'Live',
    caseStudy: false,
    links: {
      github: 'https://github.com/sathikinasetti/vt-gps',
      demo: 'https://huggingface.co/spaces/sanestspritz/VTMAPGPS',
    },
  },
  {
    slug: 'spritzai-college',
    title: 'SpritzAI College',
    tagline:
      'RAG-based college recommendation chatbot. Scrapes program data and answers questions about fit.',
    year: '2024',
    stack: ['Python', 'RAG', 'Supabase', 'Docker'],
    status: 'Shipping',
    caseStudy: false,
    links: { github: 'https://github.com/shravan-del/SpritzAI-College' },
  },
];

export default function WorkPage() {
  return (
    <section className="container-prose py-20 md:py-24">
      <header className="mb-16">
        <p className="cmd-label mb-4">find . -type project -name featured</p>
        <h1 className="font-display mb-6">
          Things I&apos;ve <em>built</em>.
        </h1>
        <p className="text-lg text-[color:var(--color-fg-muted)] max-w-2xl leading-relaxed">
          Every project here is either deployed, in production with real users, or peer-reviewed. I keep
          this page ruthless — no vanity demos, no &quot;coming soon&quot; placeholders.
        </p>
      </header>

      <div className="mb-24">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl">Featured.</h2>
          <p className="cmd-label">/* deep-dive case studies */</p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {FEATURED_PROJECTS.map((p) => (
            <FeaturedCard key={p.slug} project={p} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl">Also shipped.</h2>
          <p className="cmd-label">/* smaller projects */</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {OTHER_PROJECTS.map((p) => (
            <SmallCard key={p.slug} project={p} />
          ))}
        </div>
      </div>

      <div className="mt-24 text-center border-t border-[color:var(--color-border)] pt-16">
        <p className="font-display text-2xl md:text-3xl mb-4">More code lives on GitHub.</p>
        <p className="text-[color:var(--color-fg-muted)] mb-6">
          Including coursework, hackathon projects, and experiments.
        </p>
        <a
          href="https://github.com/shravan-del"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Visit GitHub ↗
        </a>
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const main = (
    <>
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3 flex-wrap">
          <StatusPill status={project.status} />
          <span className="font-mono text-xs text-[color:var(--color-fg-subtle)]">{project.year}</span>
        </div>
        {project.caseStudy && (
          <span className="font-mono text-sm text-[color:var(--color-fg-subtle)] group-hover:text-[color:var(--color-signal)] group-hover:translate-x-1 transition-all">
            →
          </span>
        )}
      </div>

      <h3 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-[color:var(--color-signal)] transition-colors">
        {project.title}
      </h3>

      <p className="text-[color:var(--color-fg-muted)] leading-relaxed mb-6">{project.tagline}</p>

      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-[color:var(--color-fg-subtle)]">
        {project.stack.map((s) => (
          <span key={s}>· {s}</span>
        ))}
      </div>
    </>
  );

  return (
    <div className="group block border border-[color:var(--color-border)] bg-[color:var(--color-bg-elevated)] p-6 md:p-8 hover:border-[color:var(--color-signal)] transition-colors">
      {project.caseStudy ? (
        <Link href={`/work/${project.slug}`} className="block">
          {main}
        </Link>
      ) : (
        <div className="block">{main}</div>
      )}

      {project.links && (
        <div className="flex flex-wrap gap-2 text-xs font-mono mt-6 pt-6 border-t border-[color:var(--color-border)]">
          {project.links.github && (
            <ResourcePill href={project.links.github}>github</ResourcePill>
          )}
          {project.links.demo && <ResourcePill href={project.links.demo}>demo</ResourcePill>}
          {project.links.paper && <ResourcePill href={project.links.paper}>paper</ResourcePill>}
        </div>
      )}
    </div>
  );
}

function SmallCard({ project }: { project: Project }) {
  return (
    <div className="border border-[color:var(--color-border)] p-5 hover:border-[color:var(--color-signal)] transition-colors">
      <div className="flex items-center gap-2 mb-3">
        <StatusPill status={project.status} />
        <span className="font-mono text-xs text-[color:var(--color-fg-subtle)]">{project.year}</span>
      </div>
      <h3 className="font-display text-2xl mb-2">{project.title}</h3>
      <p className="text-[color:var(--color-fg-muted)] text-sm leading-relaxed mb-4">{project.tagline}</p>
      {project.links && (
        <div className="flex gap-2 text-xs font-mono">
          {project.links.github && (
            <ResourcePill href={project.links.github}>github</ResourcePill>
          )}
          {project.links.demo && <ResourcePill href={project.links.demo}>demo</ResourcePill>}
        </div>
      )}
    </div>
  );
}

function ResourcePill({ href, children }: { href: string; children: React.ReactNode }) {
  const internal = href.startsWith('/') && href !== '#';
  const className =
    'px-2 py-1 border border-[color:var(--color-border-strong)] hover:border-[color:var(--color-signal)] hover:text-[color:var(--color-signal)] transition-colors';
  if (internal) {
    return (
      <Link href={href} className={className}>
        {children} →
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children} ↗
    </a>
  );
}

function StatusPill({ status }: { status: Project['status'] }) {
  const variants: Record<Project['status'], string> = {
    Live: 'bg-[color:var(--color-signal)]/10 text-[color:var(--color-signal)] border-[color:var(--color-signal)]/30',
    Shipping:
      'bg-[color:var(--color-signal)]/10 text-[color:var(--color-signal)] border-[color:var(--color-signal)]/30',
    Research:
      'bg-transparent text-[color:var(--color-fg-muted)] border-[color:var(--color-border-strong)]',
    Archived:
      'bg-transparent text-[color:var(--color-fg-subtle)] border-[color:var(--color-border)]',
  };
  return (
    <span
      className={`font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 border ${variants[status]}`}
    >
      {status}
    </span>
  );
}
