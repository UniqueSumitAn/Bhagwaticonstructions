import Link from "next/link";
import MediaSlot from "@/components/MediaSlot";
import { Reveal, RevealWords } from "@/components/Reveal";
import PageTransition from "@/components/PageTransition";

const PROJECTS = [
  { name: "Aravali Residence", year: "2025", status: "Under Construction", location: "Udaipur", img: "/placeholders/aravali-residence.svg" },
  { name: "Sky Tower", year: "2024", status: "Completed", location: "Indore", img: "/placeholders/sky-tower.svg" },
  { name: "Linen House", year: "2024", status: "Completed", location: "Bhopal", img: "/placeholders/linen-house.svg" },
  { name: "Marble Atelier", year: "2025", status: "In Design", location: "Jaipur", img: "/placeholders/marble-atelier.svg" },
  { name: "Courtyard Villa", year: "2023", status: "Completed", location: "Indore", img: "/placeholders/courtyard-villa.svg" },
  { name: "Riverstone Pavilion", year: "2025", status: "Under Construction", location: "Ujjain", img: "/placeholders/riverstone-pavilion.svg" },
  { name: "Chowk House", year: "2022", status: "Completed", location: "Indore", img: "/placeholders/chowk-house.svg" },
  { name: "Granite Studio", year: "2023", status: "Completed", location: "Bhopal", img: "/placeholders/granite-studio.svg" },
  { name: "Ridgeline Villa", year: "2024", status: "Completed", location: "Mussoorie", img: "/placeholders/ridgeline-villa.svg" },
];

export default function WorksPage() {
  return (
    <PageTransition>
      <section className="px-6 pb-20 pt-44 md:px-10 md:pb-32 md:pt-56">
        <div className="mx-auto w-full max-w-[1600px]">
          <Reveal>
            <p className="mb-8 text-[10px] uppercase tracking-[0.28em] text-muted">Works · 2018 — 2025</p>
          </Reveal>
          <h1 className="font-display text-display-xl tracking-tightest leading-[0.95]">
            <span className="block overflow-hidden">
              <RevealWords text="A quiet record of" />
            </span>
            <span className="block overflow-hidden italic">
              <RevealWords text="thoughtful builds." delay={0.1} />
            </span>
          </h1>
          <Reveal delay={0.4} className="mt-10 max-w-xl text-base leading-relaxed text-muted">
            <p>
              Each project below was a slow conversation — between site, owner,
              architect and trade. Here are some we are proud of.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-[1600px]">
          <ul className="divide-y divide-line">
            {PROJECTS.map((p, i) => (
              <Reveal
                as="li"
                key={p.name}
                delay={(i % 3) * 0.05}
                className="group relative grid grid-cols-12 items-center gap-6 py-8 md:py-10"
              >
                <Link
                  href={`/works/${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="contents"
                >
                  <span className="col-span-1 hidden font-display text-sm text-muted md:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="col-span-9 font-display text-3xl tracking-tightest md:col-span-5 md:text-5xl">
                    <span className="inline-block transition-transform duration-700 ease-out-expo group-hover:translate-x-2">
                      {p.name}
                    </span>
                  </h2>
                  <span className="col-span-3 text-right text-xs text-muted md:col-span-3 md:text-left md:text-sm">
                    {p.location}
                  </span>
                  <span className="col-span-6 text-xs text-muted md:col-span-2 md:text-sm">
                    {p.status}
                  </span>
                  <span className="col-span-6 text-right font-display text-sm md:col-span-1">
                    {p.year}
                  </span>
                </Link>

                {/* Hover preview thumbnail (desktop) */}
                <div className="pointer-events-none absolute right-0 top-1/2 hidden h-48 w-72 -translate-y-1/2 translate-x-8 opacity-0 transition-all duration-700 ease-out-expo group-hover:translate-x-0 group-hover:opacity-100 md:block">
                  <MediaSlot src={p.img} aspect="aspect-[3/2]" label={p.name} />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </PageTransition>
  );
}
