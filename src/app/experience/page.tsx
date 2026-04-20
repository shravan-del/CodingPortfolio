// app/experience/page.tsx
// Up-to-date experience timeline.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Software engineering experience across AI startups, federal contractors, and research teams.",
};

type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  tense: "upcoming" | "current" | "past";
  highlight?: boolean;
  bullets: string[];
};

// Ordered newest first. Update as things change.
const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "SDE Co-op Intern",
    company: "Amazon",
    location: "United States (site TBD)",
    period: "Summer 2026",
    tense: "upcoming",
    highlight: true,
    bullets: [
      "Selected for Amazon's SDE Co-op program",
      "Will work on a production service in one of Amazon's engineering orgs",
      "Focus on scalable systems, code review rigor, and Leadership Principles in practice",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Sentivity AI",
    location: "Blacksburg, VA",
    period: "Dec 2024 – Present",
    tense: "current",
    highlight: true,
    bullets: [
      "Built ML infrastructure processing 10,000+ requests/day; 86.6% accuracy on our labeled sentiment evaluation set (not a generic leaderboard claim)",
      "Designed NLP pipeline for large-scale Reddit data — became basis for ACM CSCW 2024 paper",
      "Full-stack ownership: ingestion, inference, API, frontend",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "CGI Federal",
    location: "Fairfax, VA",
    period: "Summer 2025",
    tense: "past",
    bullets: [
      "Distributed systems work on enterprise federal contracts",
      "Secure coding practices and government compliance standards",
      "Agile/Scrum methodology in production engineering team",
    ],
  },
  {
    role: "Raytheon ITX Intern (DOD program)",
    company: "DOD / Raytheon",
    location: "Blacksburg, VA",
    period: "Aug 2024 – Apr 2025",
    tense: "past",
    bullets: [
      "Competitive DOD-affiliated program supporting national-security missions",
      "8–12 hrs/week alongside coursework; rotating focus across SWE, systems, and cybersecurity",
      "Worked primarily in C++, Python, Java across research-oriented projects",
    ],
  },
  {
    role: "AI/Software Engineering Intern",
    company: "Aventura Adamo",
    location: "Ashburn, VA",
    period: "Jun – Oct 2024",
    tense: "past",
    bullets: [
      "Built two deployed AI models: literature-theme analyzer and fake-stock-news detector",
      "Deployed into company WiFi mainframes for internal use",
      "Stack: React, Flask, Firebase, SQL",
    ],
  },
  {
    role: "Software Lead",
    company: "RockSAT Design Team",
    location: "Virginia Tech",
    period: "Jul 2023 – Present",
    tense: "current",
    bullets: [
      "Leading software for a space-tether system providing power + mechanical connection to small satellites",
      "Contributed 5,000+ lines to an established codebase via Git",
      "Authored an 8-page technical paper; gave multiple on-campus presentations",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Chainbridge Solutions",
    location: "Chantilly, VA",
    period: "Jun – Aug 2023",
    tense: "past",
    bullets: [
      "Built a voice assistant that surveys websites for potential cyber threats",
      "Full-stack web app using Flask + React for a contracting project",
      "Stack: Java, Python, Flask, ML, C++, SQL",
    ],
  },
];

const EDUCATION = {
  school: "Virginia Tech",
  degree: "B.S. Computer Science · Minor in Quantum Computing",
  period: "Aug 2023 – Dec 2026",
  gpa: "3.65",
  honors: [
    "Dean's List with Distinction (2023 – Current)",
    "1st place, Pitch Competition (2023)",
    "Startup Sprint — Runner-up",
    "Published at ACM CSCW 2024",
  ],
};

export default function ExperiencePage() {
  return (
    <section className="container-narrow py-20 md:py-24">
      <header className="mb-16">
        <p className="cmd-label mb-4">cat experience.log</p>
        <h1 className="font-display mb-6">
          Where I&apos;ve <em>worked</em>.
        </h1>
        <p className="text-lg text-[color:var(--color-fg-muted)] leading-relaxed max-w-2xl">
          A mix of AI startups, federal contractors, and research teams — with an Amazon SDE
          Co-op up next.
        </p>
      </header>

      {/* Experience timeline */}
      <div className="mb-24">
        <h2 className="font-display text-3xl md:text-4xl mb-10">Experience.</h2>

        <div className="space-y-0">
          {EXPERIENCE.map((entry, i) => (
            <ExperienceItem key={i} entry={entry} />
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-24 border-t border-[color:var(--color-border)] pt-16">
        <h2 className="font-display text-3xl md:text-4xl mb-10">Education.</h2>

        <div className="border-l-2 border-[color:var(--color-signal)] pl-6 md:pl-8 py-2">
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-3">
            <h3 className="font-display text-2xl md:text-3xl">
              {EDUCATION.school}
            </h3>
            <span className="font-mono text-xs text-[color:var(--color-fg-muted)]">
              {EDUCATION.period}
            </span>
          </div>
          <p className="text-[color:var(--color-fg-muted)] mb-4">
            {EDUCATION.degree}
          </p>
          <p className="font-mono text-xs text-[color:var(--color-fg-subtle)] mb-5">
            GPA {EDUCATION.gpa}
          </p>
          <ul className="space-y-1.5">
            {EDUCATION.honors.map((h) => (
              <li key={h} className="flex gap-3 text-sm">
                <span className="text-[color:var(--color-signal)] font-mono shrink-0">
                  →
                </span>
                <span className="text-[color:var(--color-fg-muted)]">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Selected coursework */}
      <div>
        <h2 className="font-display text-3xl md:text-4xl mb-6">
          Selected coursework.
        </h2>
        <p className="text-[color:var(--color-fg-muted)] text-sm leading-relaxed max-w-2xl mb-6">
          Anchored in systems, ML, and quantum — the combination I care about
          most.
        </p>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 font-mono text-sm text-[color:var(--color-fg-muted)]">
          <span>· Data Structures & Algorithms</span>
          <span>· Machine Learning</span>
          <span>· Intro to Quantum Computing</span>
          <span>· Software Engineering</span>
          <span>· Systems Programming</span>
          <span>· Natural Language Processing</span>
          <span>· Linear Algebra</span>
          <span>· Probability & Statistics</span>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   Timeline item
   ======================================================================== */
function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  const tenseLabels: Record<ExperienceEntry["tense"], string> = {
    upcoming: "Upcoming",
    current: "Current",
    past: "",
  };
  const tenseStyles: Record<ExperienceEntry["tense"], string> = {
    upcoming:
      "border-[color:var(--color-signal)]/50 bg-[color:var(--color-signal)]/10 text-[color:var(--color-signal)]",
    current:
      "border-[color:var(--color-signal)]/50 bg-[color:var(--color-signal)]/10 text-[color:var(--color-signal)]",
    past: "",
  };

  return (
    <div
      className={`border-l-2 ${
        entry.highlight
          ? "border-[color:var(--color-signal)]"
          : "border-[color:var(--color-border-strong)]"
      } hover:border-[color:var(--color-signal)] transition-colors pl-6 md:pl-8 py-6 md:py-8`}
    >
      <div className="flex items-baseline justify-between gap-4 flex-wrap mb-2">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-display text-2xl md:text-3xl">{entry.role}</h3>
          {entry.tense !== "past" && (
            <span
              className={`font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 border ${tenseStyles[entry.tense]}`}
            >
              {tenseLabels[entry.tense]}
            </span>
          )}
        </div>
        <span className="font-mono text-xs text-[color:var(--color-fg-muted)]">
          {entry.period}
        </span>
      </div>
      <p className="text-[color:var(--color-fg)] mb-1">
        {entry.company} <span className="text-[color:var(--color-fg-subtle)]">· {entry.location}</span>
      </p>
      <ul className="mt-4 space-y-2">
        {entry.bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed">
            <span className="text-[color:var(--color-signal)] font-mono shrink-0">
              →
            </span>
            <span className="text-[color:var(--color-fg-muted)]">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
