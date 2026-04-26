import Link from "next/link";
import { Reveal } from "./Reveal";

const FOOTER_NAV = [
  { href: "/works", label: "Works" },
  { href: "/studio", label: "Studio" },
  { href: "/process", label: "Process" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const SECONDARY = [
  { href: "/in-progress", label: "In progress" },
  { href: "/archive", label: "Archive" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-bone">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <Reveal y={20}>
          <p className="max-w-3xl font-display text-display-md tracking-tightest text-ink">
            Building thoughtful, enduring spaces across India.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal as="div" delay={0.05} className="md:col-span-4 space-y-3 text-sm leading-relaxed text-muted">
            <p className="text-[10px] uppercase tracking-[0.22em] text-ink">Studio</p>
            <p>Bhagwati Constructions Pvt. Ltd.</p>
            <p>Indore, Madhya Pradesh — India</p>
            <p>Mon – Sat · 10:00 – 18:00</p>
          </Reveal>

          <Reveal as="div" delay={0.1} className="md:col-span-4 space-y-3 text-sm leading-relaxed text-muted">
            <p className="text-[10px] uppercase tracking-[0.22em] text-ink">Contact</p>
            <p>
              <a href="mailto:hello@bhagwaticonstructions.in" className="hover:text-ink">
                hello@bhagwaticonstructions.in
              </a>
            </p>
            <p>
              <a href="tel:+919999999999" className="hover:text-ink">
                +91 99999 99999
              </a>
            </p>
            <p>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-ink">
                Instagram ↗
              </a>
            </p>
          </Reveal>

          <Reveal as="div" delay={0.15} className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.22em] text-ink">Sitemap</p>
            <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
              {FOOTER_NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted hover:text-ink transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {year} Bhagwati Constructions. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {SECONDARY.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="overflow-hidden border-t border-line">
        <div className="flex w-max animate-marquee whitespace-nowrap py-10 font-display text-[14vw] leading-none tracking-tightest text-ink/90">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="px-8">
              Bhagwati Constructions ✦ Build with intent ✦
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
