import { ArrowDown, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="grid-fade relative overflow-hidden pt-[78px]">
      <div className="wrap grid min-h-[760px] items-center gap-16 py-20 lg:grid-cols-[1.08fr_.92fr]">
        <div className="relative z-10">
          <Reveal>
            <p className="eyebrow text-[11px] font-bold uppercase text-[#8d7a99]">TAX / ADVISORY / BUSINESS PROCESS SOLUTIONS</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="display mt-7 max-w-4xl text-[54px] font-black sm:text-[72px] lg:text-[88px]">
              Your business has a future.
              <span className="text-gradient block">Let&apos;s unlock it.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#706779]">
              MNV Associates helps businesses navigate tax, finance and operational complexity with practical advice built around real growth.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#services" className="magnetic-hover inline-flex items-center justify-center gap-2 rounded-full bg-[#533278] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#533278]/20">
                Explore our solutions <ArrowRight size={17}/>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-[#533278]/20 bg-white px-7 py-4 text-sm font-bold text-[#533278] transition hover:-translate-y-1 hover:border-[#533278]/40 hover:shadow-lg hover:shadow-[#533278]/10">
                Talk to an expert
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <a href="#about" className="mt-16 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.15em] text-[#8d7a99] transition hover:gap-5 hover:text-[#533278]">
              Scroll to explore <ArrowDown size={14}/>
            </a>
          </Reveal>
        </div>

        <Reveal direction="scale" delay={180} className="relative mx-auto w-full max-w-[500px]">
          <div className="hero-media relative aspect-[.84] overflow-hidden rounded-[38px]">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1100&q=85"
              alt="Dubai skyline representing MNV Associates' UAE business focus"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#24122f]/95 via-[#533278]/35 to-transparent"/>
            <div className="absolute right-7 top-7 rounded-full border border-white/20 bg-black/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-white/80 backdrop-blur-md">Dubai · UAE</div>
            <div className="absolute bottom-9 left-8 right-8">
              <p className="text-xs uppercase tracking-[.2em] text-white/55">MNV ASSOCIATES</p>
              <p className="mt-4 max-w-sm text-4xl font-black leading-[1.02] tracking-[-.04em] text-white">Clarity for today. Confidence for what&apos;s next.</p>
              <div className="mt-8 h-px bg-white/20"/>
              <p className="mt-4 text-xs leading-5 text-white/60">Financial expertise • Strategic advisory • Operational support</p>
            </div>
          </div>
          <div className="absolute -bottom-7 -left-6 hidden w-48 rounded-2xl bg-white p-5 shadow-2xl shadow-[#533278]/15 sm:block floating-card">
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#A191B2]">Focus</p>
            <p className="mt-2 text-sm font-bold text-[#533278]">Business growth, simplified.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
