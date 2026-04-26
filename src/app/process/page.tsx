import { Reveal, RevealWords } from "@/components/Reveal";
import MediaSlot from "@/components/MediaSlot";
import PageTransition from "@/components/PageTransition";

const STEPS = [
  {
    n: "01",
    t: "Discovery",
    d: "We start over a long conversation. Who you are, what you live for, what your land has to say. No drawings yet.",
    img: "/placeholders/process-01.svg",
  },
  {
    n: "02",
    t: "Concept",
    d: "Loose sketches, references and material studies. We co-shape the rough idea before drawing tightens.",
    img: "/placeholders/process-02.svg",
  },
  {
    n: "03",
    t: "Design",
    d: "Plans, sections, elevations and detailing. Coordination with architects and consultants.",
    img: "/placeholders/process-03.svg",
  },
  {
    n: "04",
    t: "Approvals",
    d: "Local authority approvals, environmental compliance and pre-construction logistics handled in-house.",
    img: "/placeholders/process-04.svg",
  },
  {
    n: "05",
    t: "Build",
    d: "On site with a small set of trades we have worked with for years. Weekly walks, monthly reviews.",
    img: "/placeholders/process-05.svg",
  },
  {
    n: "06",
    t: "Handover",
    d: "We hand over a building that feels finished, lived-in, and made with care — and stay close for the first year.",
    img: "/placeholders/process-06.svg",
  },
];

export default function ProcessPage() {
  return (
    <PageTransition>
      <section className="px-6 pb-20 pt-44 md:px-10 md:pb-32 md:pt-56">
        <div className="mx-auto w-full max-w-[1600px]">
          <Reveal>
            <p className="mb-8 text-[10px] uppercase tracking-[0.28em] text-muted">Process</p>
          </Reveal>
          <h1 className="font-display text-display-xl tracking-tightest leading-[0.95]">
            <span className="block overflow-hidden">
              <RevealWords text="Six measured steps," />
            </span>
            <span className="block overflow-hidden italic">
              <RevealWords text="one careful build." delay={0.1} />
            </span>
          </h1>
          <Reveal delay={0.4} className="mt-10 max-w-xl text-base leading-relaxed text-muted">
            <p>
              We work in phases that build on each other. Each phase ends in a
              clear deliverable, and a moment to pause and decide together.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-[1600px]">
          {STEPS.map((s) => (
            <Reveal
              key={s.n}
              y={32}
              className="grid grid-cols-1 gap-10 border-b border-line py-16 last:border-b-0 md:grid-cols-12 md:py-24"
            >
              <div className="md:col-span-4">
                <span className="font-display text-sm text-muted">{s.n}</span>
                <h2 className="mt-3 font-display text-display-md tracking-tightest leading-[1.05]">
                  {s.t}
                </h2>
              </div>
              <div className="md:col-span-4 md:pt-8">
                <p className="text-base leading-relaxed text-muted">{s.d}</p>
              </div>
              <div className="md:col-span-4">
                <MediaSlot src={s.img} aspect="aspect-[4/5]" parallax label={`Step ${s.n}`} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
