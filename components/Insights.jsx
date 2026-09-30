import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const posts = [
  ["18 Jan 2026","BUSINESS","Dubai business setup: building a financial foundation that scales","https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"],
  ["08 Jan 2026","ADVISORY","Why outsourced CFO services are gaining traction among startups & SMEs","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"],
  ["25 Dec 2025","TAX","Financial compliance roadmap: your first 90 days after Dubai business setup","https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"]
];

export default function Insights() {
  return (
    <section id="insights" className="bg-[#f8f6f9] py-28">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><Reveal><p className="eyebrow text-[11px] font-bold uppercase text-[#A191B2]">04 — Insights</p></Reveal><Reveal delay={100}><h2 className="display mt-5 text-5xl font-black sm:text-6xl">Ideas for what&apos;s next.</h2></Reveal></div>
          <Reveal direction="right"><a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#533278] transition hover:gap-3">View all insights <ArrowUpRight size={16}/></a></Reveal>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.3fr_1fr_1fr]">
          {posts.map(([date,cat,title,image],i)=>(
            <Reveal key={title} delay={i*100} className="h-full">
              <article className={`${i===0 ? "text-white" : "text-[#20172a]"} group relative flex h-full min-h-[470px] flex-col justify-between overflow-hidden rounded-3xl p-7 sm:p-8`}>
                <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className={`absolute inset-0 ${i===0 ? "bg-gradient-to-t from-[#251231]/95 via-[#533278]/65 to-[#533278]/30" : "bg-gradient-to-t from-[#20172a]/90 via-[#20172a]/30 to-transparent"}`} />
                <div className="relative z-10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[.15em] text-white/65"><span>{cat}</span><span>{date}</span></div>
                <div className="relative z-10"><h3 className="text-2xl font-black leading-tight sm:text-3xl text-white">{title}</h3><a href="#" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:gap-3">Read insight <ArrowUpRight size={16}/></a></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
