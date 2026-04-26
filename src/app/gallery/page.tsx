import MediaSlot from "@/components/MediaSlot";
import { Reveal, RevealWords } from "@/components/Reveal";
import PageTransition from "@/components/PageTransition";

const FRAMES = [
  { aspect: "aspect-[4/5]", img: "/placeholders/gallery-01.svg" },
  { aspect: "aspect-[3/4]", img: "/placeholders/gallery-02.svg" },
  { aspect: "aspect-[1/1]", img: "/placeholders/gallery-03.svg" },
  { aspect: "aspect-[4/5]", img: "/placeholders/gallery-04.svg" },
  { aspect: "aspect-[5/4]", img: "/placeholders/gallery-05.svg" },
  { aspect: "aspect-[3/4]", img: "/placeholders/gallery-06.svg" },
  { aspect: "aspect-[4/5]", img: "/placeholders/gallery-07.svg" },
  { aspect: "aspect-[3/4]", img: "/placeholders/gallery-08.svg" },
  { aspect: "aspect-[1/1]", img: "/placeholders/gallery-09.svg" },
  { aspect: "aspect-[4/5]", img: "/placeholders/gallery-10.svg" },
  { aspect: "aspect-[3/4]", img: "/placeholders/gallery-11.svg" },
  { aspect: "aspect-[5/4]", img: "/placeholders/gallery-12.svg" },
];

export default function GalleryPage() {
  return (
    <PageTransition>
      <section className="px-6 pb-20 pt-44 md:px-10 md:pb-32 md:pt-56">
        <div className="mx-auto w-full max-w-[1600px]">
          <Reveal>
            <p className="mb-8 text-[10px] uppercase tracking-[0.28em] text-muted">Gallery</p>
          </Reveal>
          <h1 className="font-display text-display-xl tracking-tightest leading-[0.95]">
            <span className="block overflow-hidden">
              <RevealWords text="Fragments from" />
            </span>
            <span className="block overflow-hidden italic">
              <RevealWords text="the field." delay={0.1} />
            </span>
          </h1>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-10 md:pb-48">
        <div className="mx-auto w-full max-w-[1600px] columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {FRAMES.map((f, i) => (
            <Reveal
              key={i}
              y={24}
              delay={(i % 3) * 0.06}
              className="mb-6 break-inside-avoid"
            >
              <MediaSlot src={f.img} aspect={f.aspect} parallax label={`Frame ${String(i + 1).padStart(2, "0")}`} />
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
