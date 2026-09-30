import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";

const points = ["Practical advice, not just reports", "Connected tax, finance and business expertise", "UAE-focused understanding of business realities", "Clear communication and responsive support"];

export default function WhyMNV() {
  return (
    <section className="py-28">
      <div className="wrap">
        <div className="grid overflow-hidden rounded-[36px] bg-[#533278] lg:grid-cols-[.9fr_1.1fr]">
          <Reveal direction="left" className="min-h-[520px]">
            <div className="relative h-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85" alt="Business advisory team collaborating" className="h-full w-full object-cover opacity-90 transition duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24122f]/90 via-[#533278]/20 to-transparent" />
              <div className="absolute bottom-8 left-8"><span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-white/75 backdrop-blur">Why MNV</span></div>
            </div>
          </Reveal>
          <div className="p-9 text-white sm:p-14">
            <Reveal delay={100}><p className="eyebrow text-[11px] font-bold uppercase text-white/50">03 — Why MNV</p></Reveal>
            <Reveal delay={180}><h2 className="display mt-5 text-4xl font-black sm:text-6xl">Expertise that stays close to the business.</h2></Reveal>
            <Reveal delay={260}><p className="mt-7 max-w-xl text-base leading-7 text-white/65">The goal is simple: give decision-makers clearer numbers, fewer blind spots and practical next steps.</p></Reveal>
            <div className="mt-9 grid gap-4">
              {points.map((point,i)=><Reveal key={point} delay={320+i*70}><div className="flex items-center gap-3 border-b border-white/10 pb-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10"><Check size={14}/></span><span className="text-sm text-white/85">{point}</span></div></Reveal>)}
            </div>
            <Reveal delay={620}><a href="#contact" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:gap-3">Talk with MNV <ArrowUpRight size={16}/></a></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
