import {
  Building2, Landmark, ReceiptText, Scale, Calculator,
  BriefcaseBusiness, ShieldCheck, Users, LineChart, ArrowUpRight
} from "lucide-react";

const services = [
  ["Business Setup","Build the right foundation for your UAE business.",Building2],
  ["Corporate Tax","Navigate UAE corporate tax with clarity and confidence.",Landmark],
  ["VAT","Stay compliant while making smarter tax decisions.",ReceiptText],
  ["Transfer Pricing","Build defensible, practical transfer pricing frameworks.",Scale],
  ["Accounting","Reliable financial reporting and accounting support.",Calculator],
  ["CFO Advisory","CFO-level insight for strategic financial decisions.",BriefcaseBusiness],
  ["Compliance","Keep your obligations organised, timely and controlled.",ShieldCheck],
  ["HR Advisory","Practical people and employment support for your organisation.",Users],
  ["Business Advisory","Turn complexity into decisions that move the business forward.",LineChart]
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f8f6f9] py-28">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-[11px] font-bold uppercase text-[#A191B2]">02 — What we do</p>
            <h2 className="display mt-5 text-5xl font-black sm:text-6xl">
              Solutions built around your business.
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="max-w-2xl text-lg leading-8 text-[#706779]">
              From business setup and tax compliance to CFO advisory and
              operational support, MNV brings connected expertise under one roof.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[#533278]/10 bg-[#533278]/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, desc, Icon], i) => (
            <article key={title} className="card-line group bg-white p-7 transition hover:bg-[#fcfbfd]">
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold text-[#A191B2]">0{i+1}</span>
                <Icon size={22} className="text-[#533278]"/>
              </div>
              <h3 className="mt-12 text-xl font-black">{title}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-[#706779]">{desc}</p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-[#533278]">
                Explore <ArrowUpRight size={14}/>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
