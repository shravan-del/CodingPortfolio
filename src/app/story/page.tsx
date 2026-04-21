// app/story/page.tsx
// Long-form narrative about who you are, how you got here, and where you're going.
// This is the page that makes someone genuinely care about hiring you.

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Story",
  description:
    "How a kid fascinated by how things work became a published AI researcher and full-stack engineer.",
};

export default function StoryPage() {
  return (
    <article className="container-narrow py-20 md:py-28">
      <header className="mb-16">
        <p className="cmd-label mb-4">cat story.md</p>
        <h1 className="font-display mb-6">
          How I got <em>here</em>.
        </h1>
        <p className="text-lg text-[color:var(--color-fg-muted)] leading-relaxed">
          The five-minute version of why I build what I build — and what
          I&apos;m trying to do next.
        </p>
      </header>

      <div className="prose-custom">
        <section className="mb-14">
          <h2 className="font-display text-3xl mb-5">
            The short version.
          </h2>
          <p>
            I&apos;m a junior at Virginia Tech studying Computer Science with a
            minor in Quantum Computing, graduating May 2027. I&apos;ve
            published peer-reviewed research at <Em>ACM CSCW 2024</Em>, built
            ML infrastructure that handles{" "}
            <Em>10,000+ requests a day</Em> at Sentivity AI, and I&apos;m
            incoming at <Em>Amazon</Em> for an SDE Co-op in Summer 2026.
          </p>
          <p>
            But that&apos;s the bullet-point version. Here&apos;s what actually
            happened.
          </p>
        </section>

        <Divider />

        <section className="mb-14">
          <p className="cmd-label mb-3">chapter 01</p>
          <h2 className="font-display text-3xl mb-5">Before the code.</h2>
          <p>
            I didn&apos;t grow up writing software. I grew up taking things
            apart. A remote that beeped wrong. A printer that wouldn&apos;t
            feed paper. The standing assumption in my house was that if I
            opened it, I had to put it back together — which meant I spent
            most of high school figuring out how things actually worked under
            the surface.
          </p>
          <p>
            That habit is the single most useful thing I have as an engineer.
            Most software problems aren&apos;t solved by knowing more — they&apos;re
            solved by refusing to accept a black box and insisting on looking
            inside.
          </p>
        </section>

        <Divider />

        <section className="mb-14">
          <p className="cmd-label mb-3">chapter 02</p>
          <h2 className="font-display text-3xl mb-5">
            Virginia Tech &amp; the first real project.
          </h2>
          <p>
            I started at Virginia Tech in 2023. First semester I joined{" "}
            <Em>RockSAT</Em>, a student team building satellite systems, and
            got pulled into a project on space tethers — a system that lets a
            small satellite stay mechanically and electrically connected to a
            host. I ended up contributing <Em>5,000+ lines of code</Em> to an
            existing codebase, wrote an 8-page paper on it, and gave multiple
            presentations on campus.
          </p>
          <p>
            It was the first time I experienced the real loop: read other
            people&apos;s code, understand why they made the choices they
            made, change it, break it, fix it, defend your reasoning to
            smarter people. I&apos;ve been chasing that loop since.
          </p>
        </section>

        <Divider />

        <section className="mb-14">
          <p className="cmd-label mb-3">chapter 03</p>
          <h2 className="font-display text-3xl mb-5">
            Research that made it into print.
          </h2>
          <p>
            In 2024, I worked on research examining sentiment shifts in
            political Reddit communities during high-stakes sociopolitical
            events. The system uses CardiffNLP transformer models to quantify
            affective tone across thousands of posts, then correlates sentiment
            trajectories with real-world events.
          </p>
          <p>
            That work was accepted and published at{" "}
            <Em>ACM CSCW 2024</Em> — the top venue for Computer-Supported
            Cooperative Work and Social Computing. It was also when I stopped
            thinking of myself as &quot;a student who codes&quot; and started
            thinking of myself as someone who could actually contribute
            something novel to a field.
          </p>
          <p>
            <Link href="/research" className="link">
              You can read the paper here →
            </Link>
          </p>
        </section>

        <Divider />

        <section className="mb-14">
          <p className="cmd-label mb-3">chapter 04</p>
          <h2 className="font-display text-3xl mb-5">
            Shipping to real users.
          </h2>
          <p>
            Research is necessary but not sufficient. I also wanted to know
            I could ship — that my code would survive contact with actual
            humans trying to use it in the real world.
          </p>
          <p>
            So I built three products outside of school:
          </p>
          <ul className="list-none pl-0 space-y-4 my-6">
            <ListItem title="CodeCompass">
              An AI-powered codebase analyzer using the Claude API. You point
              it at a repo and it can answer questions like a senior engineer
              who&apos;s been working on it for years.
            </ListItem>
            <ListItem title="Samaritan">
              An autonomous legal AI agent running on AWS Bedrock with Amazon
              Nova. It navigates legal documents, extracts obligations, and
              flags risks — the kind of work a first-year associate would
              traditionally do.
            </ListItem>
            <ListItem title="CreatorMind">
              A SaaS for YouTube creators — the most grown-up of the three.
              Real Stripe billing and tiered Claude Haiku / Sonnet models by plan.
              I do not put user counts or lift percentages on the public site
              without a methodology I can show in an interview; happy to discuss
              traction privately.
            </ListItem>
          </ul>
          <p>
            Each one taught me something I couldn&apos;t have learned in a
            class: API costs, caching strategy, handling a user who yells at
            you on day two, deciding what to cut.
          </p>
        </section>

        <Divider />

        <section className="mb-14">
          <p className="cmd-label mb-3">chapter 05</p>
          <h2 className="font-display text-3xl mb-5">
            Sentivity AI, CGI Federal, and the internships.
          </h2>
          <p>
            I&apos;ve been fortunate to work at companies across the spectrum:
          </p>
          <ul className="list-none pl-0 space-y-4 my-6">
            <ListItem title="Sentivity AI (current)">
              ML infrastructure and full-stack engineering. The work that
              became the CSCW paper lives here.
            </ListItem>
            <ListItem title="CGI Federal (Summer 2025)">
              Distributed systems work on federal contracts — Agile practice,
              secure coding, and learning what enterprise really looks like.
            </ListItem>
            <ListItem title="Amazon (Summer 2026)">
              Incoming SDE Co-op — focusing on scalable systems and shipping in a
              large engineering org.
            </ListItem>
          </ul>
        </section>

        <Divider />

        <section className="mb-14">
          <p className="cmd-label mb-3">chapter 06</p>
          <h2 className="font-display text-3xl mb-5">What I&apos;m chasing.</h2>
          <p>
            Short-term: make the most of Amazon this summer,
            finish strong at Virginia Tech, and apply for the{" "}
            <Em>OpenAI Research Fellowship</Em> and{" "}
            <Em>graduate school</Em> this cycle.
          </p>
          <p>
            Longer-term: I want to be the kind of engineer who can move
            between research and production — who can read a paper on Monday,
            turn it into a prototype on Wednesday, and ship it to a real user
            base on Friday. That&apos;s the job I&apos;m building myself for,
            and the kind of team I want to join.
          </p>
          <p>
            If that&apos;s you — whether you&apos;re a startup founder, a
            recruiter at a big company, a professor, or someone working on
            something genuinely hard — I&apos;d love to talk.
          </p>
        </section>

        <div className="mt-20 flex flex-wrap gap-3">
          <a
            href="mailto:sathikinasetti@vt.edu"
            className="btn btn-primary"
          >
            Email me →
          </a>
          <Link href="/chat" className="btn">
            Or ask my AI twin anything
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ========================================================================
   Small presentation helpers
   ======================================================================== */
function Em({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[color:var(--color-fg)] font-medium">
      {children}
    </span>
  );
}

function Divider() {
  return <hr className="divider" />;
}

function ListItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="border-l-2 border-[color:var(--color-border-strong)] hover:border-[color:var(--color-signal)] transition-colors pl-5 py-1">
      <div className="font-mono text-sm text-[color:var(--color-signal)] mb-1">
        {title}
      </div>
      <div className="text-[color:var(--color-fg-muted)] leading-relaxed">
        {children}
      </div>
    </li>
  );
}
