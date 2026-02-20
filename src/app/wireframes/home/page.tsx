export default function HomeWireframe() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ---- NAV ---- */}
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-8">
          <div className="w-8 h-8 rounded bg-gray-300" />
          <div className="flex gap-6 text-sm text-gray-500">
            <span>Home</span>
            <span>Features</span>
            <span>Pricing</span>
            <span>About</span>
            <span>Resources</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md">
            Log in
          </button>
          <button className="px-4 py-2 text-sm text-white bg-gray-800 rounded-md">
            Sign up
          </button>
        </div>
      </nav>

      {/* ---- HERO ---- */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex gap-16 items-center">
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            The modern library<br />management platform
          </h1>
          <p className="mt-5 text-lg text-gray-500 max-w-lg">
            Track patrons, manage your catalog, automate late fees, and handle media rentals — all in one place.
          </p>
          <div className="mt-8 flex gap-3">
            <button className="px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-lg">
              Start Free Trial
            </button>
            <button className="px-6 py-3 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg">
              Book a Demo
            </button>
          </div>
          {/* Objection busters */}
          <div className="mt-6 flex gap-5 text-sm text-gray-400">
            <span>No credit card required</span>
            <span>&middot;</span>
            <span>Free 14-day trial</span>
            <span>&middot;</span>
            <span>Cancel anytime</span>
          </div>
          {/* Social proof */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">500+</span> libraries already onboard
            </p>
          </div>
        </div>
        {/* Product UI mock */}
        <div className="w-[480px] h-[320px] shrink-0 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {/* Title bar */}
          <div className="px-4 py-2.5 bg-white border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-gray-800" />
              <span className="text-[10px] text-gray-400">LibraryOS</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-gray-200" />
              <div className="w-2 h-2 rounded-full bg-gray-200" />
              <div className="w-2 h-2 rounded-full bg-gray-200" />
            </div>
          </div>
          <div className="p-4 flex gap-3">
            {/* Sidebar */}
            <div className="w-24 shrink-0 space-y-1.5">
              {["Dashboard", "Patrons", "Catalog", "Fees", "Media"].map((item, idx) => (
                <div key={item} className={`px-2 py-1.5 rounded text-[9px] ${idx === 0 ? "bg-gray-800 text-white" : "text-gray-400"}`}>
                  {item}
                </div>
              ))}
            </div>
            {/* Main content */}
            <div className="flex-1 space-y-3">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Patrons", val: "12,847" },
                  { label: "Checked Out", val: "4,291" },
                  { label: "Overdue", val: "87" },
                ].map((s) => (
                  <div key={s.label} className="bg-white border border-gray-100 rounded-lg p-2.5">
                    <p className="text-[8px] text-gray-400 uppercase">{s.label}</p>
                    <p className="text-sm font-bold text-gray-900 mt-0.5">{s.val}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white border border-gray-100 rounded-lg p-3 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-gray-400 uppercase">Recent Activity</span>
                  <div className="h-1.5 w-8 rounded bg-gray-100" />
                </div>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-gray-100 shrink-0" />
                    <div className="h-1.5 rounded bg-gray-100 flex-1" />
                    <div className="h-1.5 w-10 rounded bg-gray-100" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* VARIANT 1 — ZEN GARDEN                                    */}
      {/* Calm, serene, wise. Muted earth tones, generous whitespace */}
      {/* ========================================================== */}
      <div className="border-t-[6px] border-dashed border-gray-300 mt-0" />
      <div className="bg-[#f7f5f0] py-4 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8a7e6b]">Variant 1 — Zen Garden</span>
      </div>

      <section className="bg-[#f7f5f0] relative overflow-hidden">
        {/* Subtle circle texture */}
        <div className="absolute top-12 right-12 w-[500px] h-[500px] rounded-full border border-[#e0d9c8] opacity-40" />
        <div className="absolute bottom-0 left-[-80px] w-[300px] h-[300px] rounded-full border border-[#e0d9c8] opacity-30" />
        <div className="absolute top-1/2 left-1/3 w-[200px] h-[200px] rounded-full bg-[#e8e2d4] opacity-20" />

        <div className="max-w-5xl mx-auto px-6 py-32 relative z-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#a09279] mb-6">
              Quiet tools for thoughtful spaces
            </p>
            <h1 className="text-5xl font-light leading-[1.2] text-[#3d3626]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Where stillness meets<br />
              <em className="font-normal italic">organization</em>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-[#7a6f5e] max-w-lg font-light">
              A library management platform designed with the calm precision your space deserves. Every patron, every book, every moment — gently accounted for.
            </p>

            <div className="mt-10 flex gap-4 items-center">
              <button className="px-8 py-3.5 text-sm tracking-wide text-[#f7f5f0] bg-[#5c5240] rounded-full hover:bg-[#4a4234] transition-colors">
                Begin your journey
              </button>
              <button className="px-8 py-3.5 text-sm tracking-wide text-[#5c5240] border border-[#c4b89a] rounded-full hover:border-[#5c5240] transition-colors">
                Request a walkthrough
              </button>
            </div>

            <div className="mt-8 flex gap-6 text-xs text-[#a09279] tracking-wide">
              <span>No credit card</span>
              <span className="text-[#c4b89a]">/</span>
              <span>14 days free</span>
              <span className="text-[#c4b89a]">/</span>
              <span>Cancel anytime</span>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-7 h-7 rounded-full bg-[#ddd5c4] border-2 border-[#f7f5f0]" />
                ))}
              </div>
              <p className="text-sm text-[#8a7e6b]">
                Trusted by <span className="text-[#5c5240]">500+</span> libraries finding their calm
              </p>
            </div>
          </div>
        </div>

        {/* Product abstraction — floating card with soft shadow */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-[420px] h-[300px] z-10 hidden xl:block">
          <div className="w-full h-full bg-white/70 backdrop-blur-sm rounded-2xl shadow-[0_8px_60px_rgba(90,80,60,0.08)] border border-[#e8e2d4] p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <div className="w-6 h-0.5 bg-[#c4b89a] mb-3" />
                <p className="text-xs text-[#a09279] tracking-widest uppercase">Dashboard</p>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#d4ccb8]" />
                <div className="w-2 h-2 rounded-full bg-[#d4ccb8]" />
                <div className="w-2 h-2 rounded-full bg-[#d4ccb8]" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-3/4 rounded-full bg-[#e8e2d4]" />
              <div className="h-2 w-1/2 rounded-full bg-[#e8e2d4]" />
              <div className="h-2 w-5/6 rounded-full bg-[#ede8dc]" />
            </div>
            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex-1 h-16 rounded-lg bg-[#f2ede3]" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* VARIANT 2 — AUTHORITATIVE / GOVERNMENTAL                   */}
      {/* Navy, gold, structured, official, serif headings            */}
      {/* ========================================================== */}
      <div className="border-t-[6px] border-dashed border-gray-300 mt-0" />
      <div className="bg-[#0c1b33] py-4 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8a9ab5]">Variant 2 — Authoritative &amp; Governmental</span>
      </div>

      <section className="bg-[#0c1b33] relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

        <div className="max-w-6xl mx-auto px-6 py-28 relative z-10">
          <div className="flex gap-20 items-center">
            <div className="flex-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded mb-8">
                <div className="w-3 h-3 rounded-full border border-[#c9a84c]" />
                <span className="text-[11px] uppercase tracking-widest text-[#c9a84c] font-medium">
                  Trusted Public Infrastructure
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.15] text-white" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                The Standard in<br />Library Management
              </h1>
              <div className="mt-4 w-16 h-0.5 bg-[#c9a84c]" />
              <p className="mt-6 text-lg leading-relaxed text-[#8a9ab5] max-w-lg">
                A secure, compliant platform built to the highest standards. Trusted by public institutions, school districts, and university systems nationwide.
              </p>

              <div className="mt-10 flex gap-4">
                <button className="px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0c1b33] bg-[#c9a84c] hover:bg-[#d4b45a] transition-colors">
                  Request Access
                </button>
                <button className="px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#c9a84c] border-2 border-[#c9a84c]/40 hover:border-[#c9a84c] transition-colors">
                  View Credentials
                </button>
              </div>

              <div className="mt-8 flex gap-6 text-xs text-[#5a6e8a] uppercase tracking-wider">
                <span>SOC 2 Compliant</span>
                <span className="text-[#2a3f5f]">|</span>
                <span>FERPA Certified</span>
                <span className="text-[#2a3f5f]">|</span>
                <span>ADA Accessible</span>
              </div>

              <div className="mt-8 flex items-center gap-5">
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded bg-[#162a4a] border border-[#253d5e] flex items-center justify-center">
                      <div className="w-5 h-5 rounded-sm bg-[#253d5e]" />
                    </div>
                  ))}
                </div>
                <div className="h-8 w-px bg-[#253d5e]" />
                <p className="text-sm text-[#5a6e8a]">
                  <span className="text-white font-semibold">500+</span> institutions served
                </p>
              </div>
            </div>

            {/* Product abstraction — structured panel with seal */}
            <div className="w-[460px] shrink-0 hidden xl:block">
              <div className="bg-[#0f2240] border border-[#1d3558] rounded-sm overflow-hidden">
                {/* Title bar */}
                <div className="px-5 py-3 bg-[#162a4a] border-b border-[#1d3558] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm border border-[#c9a84c]/40" />
                    <span className="text-[10px] uppercase tracking-widest text-[#5a6e8a]">LibraryOS — Dashboard</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#253d5e]" />
                    <div className="w-2 h-2 rounded-full bg-[#253d5e]" />
                    <div className="w-2 h-2 rounded-full bg-[#253d5e]" />
                  </div>
                </div>
                {/* Content area */}
                <div className="p-6 space-y-4">
                  <div className="flex gap-4">
                    {["Patrons", "Catalog", "Fees", "Media"].map((label) => (
                      <div key={label} className="flex-1 bg-[#162a4a] border border-[#1d3558] rounded-sm p-3">
                        <p className="text-[9px] uppercase tracking-wider text-[#5a6e8a] mb-1">{label}</p>
                        <p className="text-lg font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
                          {label === "Patrons" ? "12,847" : label === "Catalog" ? "98,341" : label === "Fees" ? "$2,140" : "3,209"}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-sm bg-[#162a4a]" />
                    <div className="h-2 w-4/5 rounded-sm bg-[#162a4a]" />
                    <div className="h-2 w-3/5 rounded-sm bg-[#162a4a]" />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 h-24 rounded-sm bg-[#162a4a] border border-[#1d3558]" />
                    <div className="flex-1 h-24 rounded-sm bg-[#162a4a] border border-[#1d3558]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* VARIANT 3 — RETRO LIBRARY / LITERARY WARMTH                */}
      {/* Vintage book feel, warm amber, textured paper, typewriter  */}
      {/* ========================================================== */}
      <div className="border-t-[6px] border-dashed border-gray-300 mt-0" />
      <div className="bg-[#1a1410] py-4 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8b7355]">Variant 3 — Literary Warmth</span>
      </div>

      <section className="bg-[#1a1410] relative overflow-hidden">
        {/* Paper texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3h1v1H1V3zm2-2h1v1H3V1z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Warm glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c9884c] opacity-[0.04] rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto px-6 py-32 relative z-10">
          {/* Centered layout */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Decorative ornament */}
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-12 h-px bg-[#4a3828]" />
              <div className="w-1.5 h-1.5 rotate-45 border border-[#8b7355]" />
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#8b7355]">
                Est. for librarians
              </p>
              <div className="w-1.5 h-1.5 rotate-45 border border-[#8b7355]" />
              <div className="w-12 h-px bg-[#4a3828]" />
            </div>

            <h1 className="text-6xl leading-[1.1] text-[#e8d5b8]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Every book has a story.<br />
              <span className="italic font-light text-[#c9884c]">So does every reader.</span>
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-[#7a6650] max-w-xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
              A management platform that honors the tradition of libraries while embracing the tools of tomorrow. Patron care, catalog mastery, and effortless operations.
            </p>

            <div className="mt-10 flex gap-4 justify-center">
              <button className="px-8 py-3.5 text-sm tracking-[0.15em] uppercase text-[#1a1410] bg-[#c9884c] rounded-sm hover:bg-[#d49a5e] transition-colors font-medium">
                Open the Doors
              </button>
              <button className="px-8 py-3.5 text-sm tracking-[0.15em] uppercase text-[#c9884c] border border-[#4a3828] rounded-sm hover:border-[#c9884c] transition-colors">
                Take a Tour
              </button>
            </div>

            <div className="mt-8 flex justify-center gap-6 text-xs text-[#5c4a38] tracking-wider">
              <span>No credit card</span>
              <span className="text-[#3d2e20]">&bull;</span>
              <span>14-day free chapter</span>
              <span className="text-[#3d2e20]">&bull;</span>
              <span>Cancel anytime</span>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-[#2e2218] border-2 border-[#1a1410]" />
                ))}
              </div>
              <p className="text-sm text-[#7a6650]">
                <span className="text-[#c9884c] font-medium">500+</span> libraries have turned the page
              </p>
            </div>
          </div>

          {/* Product abstraction — book-like card stack */}
          <div className="mt-20 max-w-3xl mx-auto relative">
            {/* Background card (shadow) */}
            <div className="absolute inset-x-4 top-3 bottom-0 bg-[#231a12] rounded-lg border border-[#332618]" />
            <div className="absolute inset-x-2 top-1.5 bottom-0 bg-[#201810] rounded-lg border border-[#2e2218]" />
            {/* Main card */}
            <div className="relative bg-[#251c14] rounded-lg border border-[#3d2e20] overflow-hidden">
              {/* Top bar */}
              <div className="px-6 py-3 border-b border-[#3d2e20] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-sm border border-[#c9884c]/30" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#5c4a38]">LibraryOS — Collection Overview</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#3d2e20]" />
                  <div className="w-2 h-2 rounded-full bg-[#3d2e20]" />
                  <div className="w-2 h-2 rounded-full bg-[#c9884c]/30" />
                </div>
              </div>
              {/* Content */}
              <div className="p-6 flex gap-6">
                {/* Sidebar */}
                <div className="w-40 shrink-0 space-y-2">
                  {["Dashboard", "Patrons", "Catalog", "Fees", "Media"].map((item, idx) => (
                    <div
                      key={item}
                      className={`px-3 py-2 rounded text-xs ${
                        idx === 0
                          ? "bg-[#c9884c]/10 text-[#c9884c] border border-[#c9884c]/20"
                          : "text-[#5c4a38]"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                {/* Main area */}
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Active Patrons", val: "12,847" },
                      { label: "Books Circulating", val: "4,291" },
                      { label: "Overdue Items", val: "87" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-[#1a1410] border border-[#3d2e20] rounded p-3">
                        <p className="text-[9px] uppercase tracking-wider text-[#5c4a38]">{stat.label}</p>
                        <p className="text-xl font-bold text-[#e8d5b8] mt-1" style={{ fontFamily: "Georgia, serif" }}>{stat.val}</p>
                      </div>
                    ))}
                  </div>
                  <div className="h-24 bg-[#1a1410] border border-[#3d2e20] rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- SOCIAL PROOF BAR ---- */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
            Trusted by libraries everywhere
          </p>
          <div className="flex justify-center gap-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-28 h-8 rounded bg-gray-200" />
            ))}
          </div>
        </div>
      </section>

      {/* ---- FEATURES OVERVIEW ---- */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Everything your library needs
          </h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto">
            A complete toolkit designed specifically for modern librarians.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {[
            { title: "Patron Management", desc: "Track visitors, memberships, and check-ins with ease." },
            { title: "Book Catalog", desc: "Search, organize, and manage your full inventory." },
            { title: "Late Fees & Billing", desc: "Automate fee calculation and simplify payments." },
            { title: "Media Rentals", desc: "Handle DVDs, Blu-rays, and digital media lending." },
          ].map((f) => (
            <div key={f.title} className="border border-gray-200 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-gray-200 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- FEATURE DETAIL 1 ---- */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24 flex gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">
              Know every patron by name
            </h2>
            <p className="mt-3 text-gray-500">
              Keep a complete record of everyone who walks through your doors. Track visits, manage memberships, and build stronger community connections.
            </p>
            <ul className="mt-6 space-y-3">
              {["Check-in tracking", "Membership tiers", "Visit history"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded bg-gray-200 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[440px] h-[280px] shrink-0 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm">
            Feature Image
          </div>
        </div>
      </section>

      {/* ---- FEATURE DETAIL 2 ---- */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex gap-16 items-center">
        <div className="w-[440px] h-[280px] shrink-0 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm">
          Feature Image
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">
            Your entire catalog at a glance
          </h2>
          <p className="mt-3 text-gray-500">
            Powerful search, real-time availability, and barcode scanning make it easy to find and manage every item in your collection.
          </p>
          <ul className="mt-6 space-y-3">
            {["Search & filter", "Availability status", "Barcode scanning"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-5 h-5 rounded bg-gray-200 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- TESTIMONIALS ---- */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
            Loved by librarians
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", role: "Head Librarian", quote: "Finally a system that understands how libraries actually work. Our checkout times dropped by half." },
              { name: "James K.", role: "District Manager", quote: "We rolled this out across 12 branches in a week. The onboarding was incredibly smooth." },
              { name: "Priya R.", role: "Library Director", quote: "The late fee automation alone saved us 10 hours a week. Our staff can focus on what matters." },
            ].map((t) => (
              <div key={t.name} className="border border-gray-200 bg-white rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-4 h-4 rounded-sm bg-gray-300" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <div className="w-9 h-9 rounded-full bg-gray-200" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- PRICING PREVIEW ---- */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-gray-500">
            Plans that scale with your library system.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {[
            { tier: "Small Library", price: "$29", period: "/mo", cta: "Get Started", features: ["Up to 500 patrons", "1 branch", "Email support", "Core features"] },
            { tier: "District", price: "$99", period: "/mo", cta: "Get Started", featured: true, features: ["Unlimited patrons", "Up to 10 branches", "Priority support", "Advanced analytics"] },
            { tier: "Enterprise", price: "Custom", period: "", cta: "Contact Sales", features: ["Unlimited everything", "Unlimited branches", "Dedicated account manager", "Custom integrations"] },
          ].map((p) => (
            <div
              key={p.tier}
              className={`rounded-xl p-8 ${
                p.featured
                  ? "border-2 border-gray-900 bg-white shadow-sm"
                  : "border border-gray-200"
              }`}
            >
              <p className="text-sm font-medium text-gray-500">{p.tier}</p>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-bold text-gray-900">{p.price}</span>
                {p.period && <span className="text-gray-400 mb-1">{p.period}</span>}
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-4 h-4 rounded-sm bg-gray-200 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 rounded-lg text-sm font-medium ${
                  p.featured
                    ? "bg-gray-900 text-white"
                    : "border border-gray-300 text-gray-700"
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ---- FINAL CTA ---- */}
      <section className="bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to modernize your library?
          </h2>
          <p className="mt-3 text-gray-400 max-w-md mx-auto">
            Join hundreds of libraries already saving time and delighting patrons.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <button className="px-6 py-3 text-sm font-medium text-gray-900 bg-white rounded-lg">
              Start Free Trial
            </button>
            <button className="px-6 py-3 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* ---- FOOTER ---- */}
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 flex gap-16">
          <div className="space-y-3">
            <div className="w-8 h-8 rounded bg-gray-300" />
            <p className="text-sm text-gray-400">Modern library management<br />for modern librarians.</p>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
            { title: "Resources", links: ["Help Center", "Case Studies", "API Docs", "Status"] },
            { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400 mb-3">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link} className="text-sm text-gray-500">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto px-6 py-6 border-t border-gray-200 flex justify-between items-center">
          <p className="text-xs text-gray-400">&copy; 2026 LibraryOS. All rights reserved.</p>
          <div className="flex gap-3">
            {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((s) => (
              <div key={s} className="w-6 h-6 rounded bg-gray-200" />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
