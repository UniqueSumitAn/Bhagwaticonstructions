"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "/works", label: "Works" },
  { href: "/studio", label: "Studio" },
  { href: "/process", label: "Process" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[padding,background-color,border-color] duration-500 ease-out-expo",
          scrolled
            ? "border-b border-line/60 bg-bone/85 py-3 backdrop-blur-md"
            : "border-b border-transparent py-6",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="text-[13px] uppercase tracking-[0.22em] text-ink hover:opacity-70 transition-opacity"
          >
            Bhagwati
            <span className="mx-1 opacity-40">/</span>
            Constructions
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative text-sm tracking-wide text-ink/80 hover:text-ink transition-colors"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-500 ease-out-expo group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-ink/80 px-5 py-2 text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-bone"
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="relative h-10 w-10 md:hidden"
          >
            <span
              className={cn(
                "absolute left-1/2 top-1/2 block h-px w-6 -translate-x-1/2 bg-ink transition-transform duration-500 ease-out-expo",
                open ? "rotate-45" : "-translate-y-1.5",
              )}
            />
            <span
              className={cn(
                "absolute left-1/2 top-1/2 block h-px w-6 -translate-x-1/2 bg-ink transition-transform duration-500 ease-out-expo",
                open ? "-rotate-45" : "translate-y-1.5",
              )}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-bone md:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
              }}
              className="flex h-full flex-col items-start justify-center gap-6 px-8"
            >
              {NAV_LINKS.map((l) => (
                <motion.div
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-display-md font-display tracking-tightest"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2 text-xs uppercase tracking-[0.18em]"
                >
                  Get in touch <span aria-hidden>→</span>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
