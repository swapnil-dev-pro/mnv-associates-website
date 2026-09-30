import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-28">
      <div className="wrap">
        <div className="grid gap-10 rounded-[38px] border border-[#533278]/10 bg-white p-8 shadow-[0_30px_80px_rgba(53,30,75,.08)] sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:p-16">
          <div>
            <p className="eyebrow text-[11px] font-bold uppercase text-[#A191B2]">05 — Contact</p>
            <h2 className="display mt-5 max-w-3xl text-5xl font-black sm:text-7xl">
              Let&apos;s make your next move count.
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-[#706779]">
              Tell us where your business is headed. We&apos;ll help you find a
              practical path forward.
            </p>
          </div>
          <a href="mailto:connect@mnvassociates.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#533278] px-7 py-4 text-sm font-bold text-white">
            Talk to MNV <ArrowRight size={17}/>
          </a>
        </div>
      </div>
    </section>
  );
}
