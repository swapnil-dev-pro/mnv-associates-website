"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Building2,
  Landmark,
  ReceiptText,
  Scale,
  Calculator,
  BriefcaseBusiness,
  ShieldCheck,
  Users,
  LineChart
} from "lucide-react";

const services = [
  ["Business Setup", "Set up and structure your UAE business.", Building2],
  ["Corporate Tax", "Navigate UAE corporate tax requirements.", Landmark],
  ["VAT", "Practical VAT planning and compliance.", ReceiptText],
  ["Transfer Pricing", "Build clear and defensible frameworks.", Scale],
  ["Accounting", "Reliable reporting and accounting support.", Calculator],
  ["CFO Advisory", "Strategic financial insight for decisions.", BriefcaseBusiness],
  ["Compliance", "Stay organised and on top of obligations.", ShieldCheck],
  ["HR Advisory", "Practical people and employment guidance.", Users],
  ["Business Advisory", "Turn complexity into better decisions.", LineChart]
];

const links = [
  ["About", "#about"],
  ["Insights", "#insights"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/92 backdrop-blur-xl">
      <div className="wrap flex h-[78px] items-center justify-between">
        <a
          href="#"
          className="flex items-baseline gap-1 text-2xl font-black tracking-[-.06em] text-[#533278]"
        >
          MNV<span className="text-[#A191B2]">.</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="nav-link text-[13px] font-semibold text-[#625969] transition-colors duration-300 hover:text-[#533278]"
          >
            About
          </a>

          {/* Services mega menu */}
          <div className="group relative h-[78px] flex items-center">
            <button className="nav-link group/services flex items-center gap-1.5 text-[13px] font-semibold text-[#625969] transition-colors duration-300 hover:text-[#533278]">
              Services
              <ChevronDown
                size={14}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            <div className="pointer-events-none absolute left-1/2 top-[68px] w-[720px] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="overflow-hidden rounded-[24px] border border-[#533278]/10 bg-white p-4 shadow-[0_25px_70px_rgba(53,30,75,.16)]">
                <div className="mb-3 flex items-center justify-between border-b border-[#533278]/10 px-3 pb-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#A191B2]">
                      Our expertise
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#21182A]">
                      Solutions built around your business
                    </p>
                  </div>
                  <a
                    href="#services"
                    className="flex items-center gap-1 text-xs font-bold text-[#533278]"
                  >
                    View all <ArrowUpRight size={14} />
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-1">
                  {services.map(([title, desc, Icon], index) => (
                    <a
                      href="#services"
                      key={title}
                      className="group/item rounded-2xl p-4 transition-all duration-200 hover:bg-[#f8f6f9]"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#533278]/8 text-[#533278] transition-all duration-200 group-hover/item:bg-[#533278] group-hover/item:text-white group-hover/item:scale-105">
                          <Icon size={17} />
                        </div>
                        <span className="text-[9px] font-bold text-[#c2b7c9]">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="mt-4 text-[13px] font-bold text-[#21182A] transition-colors group-hover/item:text-[#533278]">
                        {title}
                      </p>
                      <p className="mt-1 text-[10px] leading-4 text-[#8a808e]">
                        {desc}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="nav-link text-[13px] font-semibold text-[#625969] transition-colors duration-300 hover:text-[#533278]"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-[#533278] px-5 py-3 text-[13px] font-bold text-white hover:bg-[#432761] md:flex"
        >
          Start a conversation <ArrowUpRight size={15} />
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-[#533278] md:hidden"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="border-t border-black/5 bg-white p-5 md:hidden">
          <div className="wrap flex flex-col gap-2">
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-semibold hover:bg-[#f8f6f9]"
            >
              About
            </a>

            <button
              onClick={() => setMobileServices(!mobileServices)}
              className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left font-semibold hover:bg-[#f8f6f9]"
            >
              Services
              <ChevronDown
                size={17}
                className={`transition-transform duration-300 ${
                  mobileServices ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                mobileServices
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden pl-3">
                {services.map(([title, , Icon]) => (
                  <a
                    href="#services"
                    key={title}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[#625969] hover:bg-[#f8f6f9] hover:text-[#533278]"
                  >
                    <Icon size={16} className="text-[#533278]" />
                    {title}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#insights"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-semibold hover:bg-[#f8f6f9]"
            >
              Insights
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-semibold hover:bg-[#f8f6f9]"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-[#533278] px-5 py-3 text-center font-bold text-white"
            >
              Start a conversation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
