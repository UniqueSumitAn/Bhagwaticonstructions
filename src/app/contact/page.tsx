import { Reveal, RevealWords } from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import PageTransition from "@/components/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="px-6 pb-20 pt-44 md:px-10 md:pb-32 md:pt-56">
        <div className="mx-auto w-full max-w-[1600px]">
          <Reveal>
            <p className="mb-8 text-[10px] uppercase tracking-[0.28em] text-muted">Get in touch</p>
          </Reveal>
          <h1 className="font-display text-display-xl tracking-tightest leading-[0.95]">
            <span className="block overflow-hidden">
              <RevealWords text="Tell us about" />
            </span>
            <span className="block overflow-hidden italic">
              <RevealWords text="your project." delay={0.1} />
            </span>
          </h1>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-10 md:pb-48">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-4 space-y-8 text-sm leading-relaxed text-muted">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.22em] text-ink">Studio</p>
              <p className="mt-3">Bhagwati Constructions Pvt. Ltd.</p>
              <p>Indore, Madhya Pradesh — India</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-[10px] uppercase tracking-[0.22em] text-ink">Direct</p>
              <p className="mt-3">
                <a className="hover:text-ink" href="mailto:hello@bhagwaticonstructions.in">
                  hello@bhagwaticonstructions.in
                </a>
              </p>
              <p>
                <a className="hover:text-ink" href="tel:+919999999999">
                  +91 99999 99999
                </a>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[10px] uppercase tracking-[0.22em] text-ink">Hours</p>
              <p className="mt-3">Mon — Sat · 10:00 — 18:00</p>
            </Reveal>
          </div>

          <form className="md:col-span-8 space-y-10">
            <Reveal>
              <Field label="Your name" name="name" placeholder="Anika Sharma" />
            </Reveal>
            <Reveal delay={0.05}>
              <Field label="Email" name="email" type="email" placeholder="anika@studio.com" />
            </Reveal>
            <Reveal delay={0.1}>
              <Field label="Project location" name="location" placeholder="Indore, MP" />
            </Reveal>
            <Reveal delay={0.15}>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.22em] text-ink">
                  Project brief
                </label>
                <textarea
                  rows={5}
                  name="brief"
                  placeholder="A short note on what you have in mind…"
                  className="mt-3 w-full resize-none border-b border-line bg-transparent py-3 text-base outline-none focus:border-ink"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Magnetic className="inline-block">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-xs uppercase tracking-[0.22em] text-bone hover:bg-ink/90"
                >
                  Send enquiry
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </Magnetic>
            </Reveal>
          </form>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.22em] text-ink">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-line bg-transparent py-3 text-base outline-none focus:border-ink"
      />
    </div>
  );
}
