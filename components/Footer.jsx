export default function Footer() {
  return (
    <footer className="bg-[#20172a] text-white">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="text-3xl font-black tracking-[-.06em]">MNV<span className="text-[#A191B2]">.</span></div>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
            Tax, Advisory and Business Process Solutions for businesses in the UAE.
          </p>
          <p className="mt-8 text-sm font-bold text-white/75">unlock your growth</p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-white/40">Explore</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#insights" className="hover:text-white">Insights</a>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-white/40">Contact</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
            <span>Dubai, UAE</span>
            <a href="mailto:connect@mnvassociates.com" className="hover:text-white">connect@mnvassociates.com</a>
            <span>+971 4 576 7094</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap py-6 text-xs text-white/35">© 2026 MNV Associates. All rights reserved.</div>
      </div>
    </footer>
  );
}
