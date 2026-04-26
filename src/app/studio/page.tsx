import MediaSlot from "@/components/MediaSlot";
import { Reveal, RevealWords } from "@/components/Reveal";
import PageTransition from "@/components/PageTransition";

const VALUES = [
  {
    n: "01",
    t: "Quiet craft",
    d: "We work slowly. Joints, junctions and finishes get the time they need.",
  },
  {
    n: "02",
    t: "Honest material",
    d: "Stone, timber, brick, lime and steel — used for what they really are.",
  },
  {
    n: "03",
    t: "Considered scale",
    d: "We take on a small number of projects each year so each gets attention.",
  },
  {
    n: "04",
    t: "Long horizons",
    d: "Buildings should age well — we build for the second decade, not the first.",
  },
];

export default function StudioPage() {
  return (
    <PageTransition>
      <section className="px-6 pb-20 pt-44 md:px-10 md:pb-32 md:pt-56">
        <div className="mx-auto w-full max-w-[1600px]">
          <Reveal>
            <p className="mb-8 text-[10px] uppercase tracking-[0.28em] text-muted">The Studio</p>
          </Reveal>
          <h1 className="font-display text-display-xl tracking-tightest leading-[0.95]">
            <span className="block overflow-hidden">
              <RevealWords text="A small team," />
            </span>
            <span className="block overflow-hidden italic">
              <RevealWords text="a long view." delay={0.1} />
            </span>
          </h1>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-10 md:pb-48">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <MediaSlot src="/placeholders/studio-group.svg" aspect="aspect-[5/6]" parallax label="Studio · Group" />
            </Reveal>
          </div>
          <div className="md:col-span-5 md:pt-16">
            <Reveal delay={0.1} className="space-y-6 text-base leading-relaxed text-muted">
              <p>
                Bhagwati Constructions began in Indore in 1995 with a single
                mason and a single house. Three decades on, we are still small —
                a tight team of project leads, supervisors and trusted trades
                that we have grown alongside.
              </p>
              <p>
                We collaborate with architects across India to bring careful
                buildings into the world: residential homes, modest commercial
                buildings, and the occasional public commission.
              </p>
              <p>
                We don&apos;t chase scale. We chase the project that pulls us
                forward.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-sand px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto w-full max-w-[1600px]">
          <Reveal>
            <p className="mb-8 text-[10px] uppercase tracking-[0.28em] text-muted">What we believe</p>
          </Reveal>
          <h2 className="mb-20 font-display text-display-md tracking-tightest leading-[1.05]">
            <span className="block overflow-hidden">
              <RevealWords text="Four ideas that quietly" />
            </span>
            <span className="block overflow-hidden italic">
              <RevealWords text="shape every project." delay={0.1} />
            </span>
          </h2>

          <ul className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal as="li" key={v.n} delay={i * 0.1} y={30}>
                <span className="font-display text-sm text-muted">{v.n}</span>
                <h3 className="mt-3 font-display text-3xl tracking-tightest md:text-4xl">{v.t}</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{v.d}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </PageTransition>
  );
}
