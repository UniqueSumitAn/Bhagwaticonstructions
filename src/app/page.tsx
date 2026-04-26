import Link from "next/link";
import MediaSlot from "@/components/MediaSlot";
import { Reveal, RevealWords } from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import PageTransition from "@/components/PageTransition";

const FEATURED = [
  { name: "Aravali Residence", year: "2025", status: "Under Construction", location: "Udaipur", img: "/placeholders/aravali-residence.svg" },
  { name: "Sky Tower", year: "2024", status: "Completed", location: "Indore", img: "/placeholders/sky-tower.svg" },
  { name: "Linen House", year: "2024", status: "Completed", location: "Bhopal", img: "/placeholders/linen-house.svg" },
  { name: "Marble Atelier", year: "2025", status: "In Design", location: "Jaipur", img: "/placeholders/marble-atelier.svg" },
  { name: "Courtyard Villa", year: "2023", status: "Completed", location: "Indore", img: "/placeholders/courtyard-villa.svg" },
  { name: "Riverstone Pavilion", year: "2025", status: "Under Construction", location: "Ujjain", img: "/placeholders/riverstone-pavilion.svg" },
];

const PROCESS = [
  { n: "01", t: "Discovery", d: "We listen first — your brief, site, budget, ambitions." },
  { n: "02", t: "Concept", d: "Sketches, references, mood. The shape of an idea." },
  { n: "03", t: "Design", d: "Plans, sections, materials and detailing." },
  { n: "04", t: "Approvals", d: "Compliance, permits, and pre-construction." },
  { n: "05", t: "Build", d: "Hands-on construction with a small set of trusted trades." },
  { n: "06", t: "Handover", d: "A space that feels considered, finished, lived-in." },
];

export default function Home() {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        <MediaSlot
          src="/placeholders/hero.svg"
          aspect="aspect-auto"
          className="absolute inset-0 h-full w-full"
          parallax
          priority
          label="Hero · 16:9"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bone/30" />

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-16 pt-40 md:px-10 md:pb-24">
          <div className="mx-auto w-full max-w-[1600px]">
            <div className="flex items-end justify-between gap-10">
              <div>
                <Reveal>
                  <p className="mb-6 text-[10px] uppercase tracking-[0.28em] text-bone/90 mix-blend-difference">
                    Featured Project · 2025
                  </p>
                </Reveal>
                <h1 className="font-display text-display-xl tracking-tightest text-ink">
                  <span className="block overflow-hidden">
                    <RevealWords text="Aravali" />
                  </span>
                  <span className="block overflow-hidden italic">
                    <RevealWords text="Residence" delay={0.15} />
                  </span>
                </h1>
              </div>
              <Reveal delay={0.4} className="hidden max-w-xs text-right text-sm text-muted md:block">
                <p>Udaipur, Rajasthan</p>
                <p className="mt-2">Under construction · Est. 2026</p>
                <Link
                  href="/works/aravali-residence"
                  className="mt-6 inline-flex items-center gap-2 text-ink hover:gap-3 transition-all"
                >
                  View project <span aria-hidden>→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <Reveal delay={0.8} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-ink/60">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-ink/40" />
            Scroll
          </span>
        </Reveal>
      </section>

      {/* BRAND STATEMENT */}
      <section className="px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="mb-10 text-[10px] uppercase tracking-[0.28em] text-muted">
              ✦ Bhagwati Constructions
            </p>
          </Reveal>
          <h2 className="font-display text-display-lg tracking-tightest leading-[1.02]">
            <span className="block overflow-hidden">
              <RevealWords text="We build homes guided" />
            </span>
            <span className="block overflow-hidden italic">
              <RevealWords text="by your vision," delay={0.1} />
            </span>
            <span className="block overflow-hidden">
              <RevealWords text="craft, and care." delay={0.2} />
            </span>
          </h2>
          <Reveal delay={0.4} className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-muted">
            <p>
              From the first sketch to the last finish, every project is a slow,
              deliberate conversation between site, material, and the people who
              will live there.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE — image + text split */}
      <section className="px-6 pb-32 md:px-10 md:pb-48">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <MediaSlot src="/placeholders/studio-portrait.svg" aspect="aspect-[5/6]" parallax label="Studio · Portrait" />
            </Reveal>
          </div>
          <div className="md:col-span-5 md:pt-24">
            <Reveal delay={0.1}>
              <p className="mb-6 text-[10px] uppercase tracking-[0.28em] text-muted">
                The Studio
              </p>
            </Reveal>
            <h3 className="font-display text-display-md tracking-tightest leading-[1.05]">
              <RevealWords text="Three decades of building" />
              <br />
              <RevealWords text="across India." delay={0.1} />
            </h3>
            <Reveal delay={0.3} className="mt-8 space-y-6 text-base leading-relaxed text-muted">
              <p>
                Bhagwati Constructions was founded on a simple idea: that good
                buildings come from patience, honest materials, and a small team
                that cares about every joint.
              </p>
              <p>
                We work closely with architects, owners and trades — leading
                projects from concept to handover with a quiet, considered hand.
              </p>
            </Reveal>
            <Reveal delay={0.4} className="mt-10">
              <Magnetic className="inline-block">
                <Link
                  href="/studio"
                  className="group inline-flex items-center gap-3 rounded-full border border-ink/80 px-6 py-3 text-xs uppercase tracking-[0.18em]"
                >
                  About the studio
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED WORKS GRID */}
      <section className="border-t border-line px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="mb-20 flex items-end justify-between gap-6">
            <Reveal>
              <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-muted">
                Selected Works
              </p>
              <h3 className="font-display text-display-md tracking-tightest">
                <span className="italic">Recent</span> projects
              </h3>
            </Reveal>
            <Reveal delay={0.2} className="hidden md:block">
              <Link
                href="/works"
                className="group inline-flex items-center gap-3 text-sm tracking-wide"
              >
                All works
                <span className="h-px w-10 bg-ink transition-all group-hover:w-16" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((p, i) => (
              <Reveal
                key={p.name}
                delay={(i % 3) * 0.08}
                y={40}
                className="group cursor-pointer"
              >
                <Link href={`/works/${p.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.04]">
                      <MediaSlot
                        src={p.img}
                        aspect={i % 4 === 0 ? "aspect-[4/5]" : "aspect-[3/4]"}
                        label={`Project · ${p.name}`}
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between">
                    <h4 className="font-display text-xl tracking-tight">
                      {p.name}
                    </h4>
                    <span className="text-xs text-muted">{p.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {p.location} · {p.status}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-line bg-sand px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="mb-6 text-[10px] uppercase tracking-[0.28em] text-muted">
                  Our Process
                </p>
              </Reveal>
              <h3 className="font-display text-display-md tracking-tightest leading-[1.05]">
                <RevealWords text="A measured" />
                <br />
                <RevealWords text="six-step path" delay={0.08} />
                <br />
                <span className="italic">
                  <RevealWords text="from idea to home." delay={0.16} />
                </span>
              </h3>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-line">
                {PROCESS.map((s, i) => (
                  <Reveal as="li" key={s.n} delay={i * 0.05} y={20} className="group flex items-start gap-8 py-8">
                    <span className="font-display text-xl text-muted">{s.n}</span>
                    <div className="flex-1">
                      <h4 className="font-display text-2xl tracking-tight md:text-3xl">{s.t}</h4>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{s.d}</p>
                    </div>
                    <span aria-hidden className="mt-2 text-muted transition-transform group-hover:translate-x-1">→</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="mb-10 text-[10px] uppercase tracking-[0.28em] text-muted">
                ✦ A note from a client
              </p>
            </Reveal>
            <blockquote className="font-display text-display-md leading-[1.1] tracking-tightest">
              <span className="italic block overflow-hidden">
                <RevealWords text={`"They listened more than they spoke,`} />
              </span>
              <span className="block overflow-hidden">
                <RevealWords text="and the house feels exactly" delay={0.08} />
              </span>
              <span className="block overflow-hidden">
                <RevealWords text={`like ours."`} delay={0.16} />
              </span>
            </blockquote>
            <Reveal delay={0.4} className="mt-8 text-sm text-muted">
              — Anika &amp; Rohan · Linen House, 2024
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.15}>
              <MediaSlot src="/placeholders/testimonial.svg" aspect="aspect-[4/5]" parallax label="Linen House · Interior" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line">
        <MediaSlot
          src="/placeholders/cta.svg"
          aspect="aspect-auto"
          className="absolute inset-0 h-full w-full"
          parallax
          label="CTA backdrop"
        />
        <div className="absolute inset-0 bg-bone/70" />
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-32 text-center md:px-10 md:py-48">
          <Reveal>
            <p className="mb-8 text-[10px] uppercase tracking-[0.28em] text-muted">
              ✦ Start a project
            </p>
          </Reveal>
          <h3 className="font-display text-display-lg tracking-tightest">
            <span className="block overflow-hidden">
              <RevealWords text="Ready to build" />
            </span>
            <span className="block overflow-hidden italic">
              <RevealWords text="something that lasts?" delay={0.1} />
            </span>
          </h3>
          <Reveal delay={0.5} className="mt-12">
            <Magnetic className="inline-block">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-xs uppercase tracking-[0.22em] text-bone hover:bg-ink/90"
              >
                Tell us about your project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
