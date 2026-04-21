import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-border)] mt-32">
      <div className="container-prose py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl mb-3">
            Let&apos;s build something <em>together</em>.
          </p>
          <p className="text-[color:var(--color-fg-muted)] text-sm max-w-sm">
            Open to summer & co-op roles, research collaborations, and genuinely
            hard problems.
          </p>
        </div>

        <div>
          <p className="cmd-label mb-3">elsewhere</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/shravan-del"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                GitHub ↗
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/sathikinasetti"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href="mailto:sathikinasetti@vt.edu" className="link">
                Email ↗
              </a>
            </li>
            <li>
              <Link href="/resume.pdf" target="_blank" className="link">
                Resume ↗
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="cmd-label mb-3">pages</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/work" className="link">
                Work
              </Link>
            </li>
            <li>
              <Link href="/story" className="link">
                Story
              </Link>
            </li>
            <li>
              <Link href="/research" className="link">
                Research
              </Link>
            </li>
            <li>
              <Link href="/chat" className="link">
                Ask me anything
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[color:var(--color-border)]">
        <div className="container-prose py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[color:var(--color-fg-muted)] font-mono">
          <span>© {year} Shravan Athikinasetti</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
