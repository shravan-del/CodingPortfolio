// app/contact/page.tsx
// Clean contact page. Skip the form — email + LinkedIn is what actually gets used.

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — I'm actively looking for Winter/Spring 2027 co-op roles.",
};

export default function ContactPage() {
  return (
    <section className="container-narrow py-20 md:py-24">
      <p className="cmd-label mb-4">./contact.sh</p>
      <h1 className="font-display mb-8">
        Let&apos;s <em>talk</em>.
      </h1>

      <p className="text-lg text-[color:var(--color-fg-muted)] leading-relaxed max-w-2xl mb-12">
        Currently open to <strong className="text-[color:var(--color-fg)]">Winter 2027 and Spring 2027 co-op roles</strong>. Also happy to chat about research, a startup idea, or just interesting problems.
      </p>

      <div className="space-y-6 mb-16">
        <ContactRow
          label="email"
          value="sathikinasetti@vt.edu"
          href="mailto:sathikinasetti@vt.edu"
          primary
        />
        <ContactRow
          label="linkedin"
          value="linkedin.com/in/shravan-athikinasetti"
          href="https://linkedin.com/in/shravan-athikinasetti"
        />
        <ContactRow
          label="github"
          value="github.com/shravan-del"
          href="https://github.com/shravan-del"
        />
        <ContactRow
          label="resume"
          value="resume.pdf"
          href="/resume.pdf"
        />
      </div>

      <div className="border-t border-[color:var(--color-border)] pt-10">
        <p className="font-display text-2xl md:text-3xl mb-4">
          Don&apos;t want to write the email yet?
        </p>
        <p className="text-[color:var(--color-fg-muted)] mb-6">
          Ask my AI twin first — it can answer most questions about my work.
        </p>
        <Link href="/chat" className="btn">
          <span className="text-[color:var(--color-signal)]">◉</span> Open AI
          chat →
        </Link>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  primary,
}: {
  label: string;
  value: string;
  href: string;
  primary?: boolean;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto");
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-4 border-b border-[color:var(--color-border)] hover:border-[color:var(--color-signal)] transition-colors"
    >
      <span className="cmd-label min-w-[80px]">{label}</span>
      <span
        className={`font-mono text-sm md:text-base ${
          primary
            ? "text-[color:var(--color-fg)]"
            : "text-[color:var(--color-fg-muted)] group-hover:text-[color:var(--color-fg)]"
        } transition-colors`}
      >
        {value}
      </span>
      <span className="text-[color:var(--color-fg-subtle)] group-hover:text-[color:var(--color-signal)] group-hover:translate-x-1 transition-all font-mono">
        ↗
      </span>
    </a>
  );
}
