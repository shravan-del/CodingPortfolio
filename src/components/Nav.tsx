'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/story', label: 'Story' },
  { href: '/experience', label: 'Experience' },
  { href: '/research', label: 'Research' },
  { href: '/chat', label: 'Ask me' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-lg bg-[color:var(--color-bg)]/75 border-b border-[color:var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-prose flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight hover:text-[color:var(--color-signal)] transition-colors"
          aria-label="Home"
        >
          <span className="text-[color:var(--color-signal)]">~/</span>
          shravan
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-xs tracking-wide transition-colors ${
                  active
                    ? 'text-[color:var(--color-signal)]'
                    : 'text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-fg)]'
                }`}
              >
                {active && <span className="mr-1">→</span>}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="hidden md:inline-flex btn">
          Contact →
        </Link>

        <MobileMenu pathname={pathname} />
      </div>
    </header>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden font-mono text-sm"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? 'close ×' : 'menu'}
      </button>

      {open && (
        <div
          className="md:hidden fixed inset-0 top-[57px] bg-[color:var(--color-bg)] z-40 opacity-100 transition-opacity duration-200"
          role="dialog"
        >
          <div className="container-prose py-12 flex flex-col gap-6">
            {[...links, { href: '/contact', label: 'Contact' }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-4xl text-[color:var(--color-fg)] hover:text-[color:var(--color-signal)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
