import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
          <Reveal><p className="eyebrow text-[11px] font-bold uppercase text-[#A191B2]">01 — About MNV</p></Reveal>
          <div>
            <Reveal delay={100}><h2 className="display max-w-4xl text-4xl font-black sm:text-6xl">More than numbers and spreadsheets. We help businesses move forward.</h2></Reveal>
            <Reveal delay={180}><p className="mt-7 max-w-3xl text-lg leading-8 text-[#706779]">MNV Associates brings together taxation specialists, auditors, Chartered Accountants, financial advisors and business process professionals to deliver practical solutions for businesses of different sizes and stages.</p></Reveal>
            <Reveal delay={240}><a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#533278] transition hover:gap-3">Discover who we are <ArrowUpRight size={16}/></a></Reveal>
          </div>
        </div>

        <div className="mt-20 grid items-stretch gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal direction="left">
            <div className="about-image relative h-full min-h-[360px] overflow-hidden rounded-[30px]">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85" alt="Modern professional office" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20172a]/70 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7"><p className="text-xs font-bold uppercase tracking-[.18em] text-white/60">Built for ambitious businesses</p><p className="mt-2 max-w-md text-2xl font-black text-white">Local knowledge, practical thinking, long-term perspective.</p></div>
            </div>
          </Reveal>
          <div className="grid border-y border-[#533278]/10 sm:grid-cols-3 lg:grid-cols-1 lg:border-y-0">
            {[['100+','Clients served'],['10+','Years experience'],['UAE','Local market focus']].map(([n,l],i)=>(
              <Reveal key={l} delay={i*100} direction="right">
                <div className="border-b border-[#533278]/10 px-5 py-9 last:border-b-0 lg:border-b">
                  <p className="text-4xl font-black tracking-tight text-[#533278]">{n}</p><p className="mt-2 text-sm text-[#706779]">{l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
