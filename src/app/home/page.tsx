/*
  HOMEPAGE — LibraryOS Marketing Site
  ────────────────────────────────────
  Style guide applied: Parthenon palette, golden ratio typography,
  Fibonacci spacing, Georgia serif headings, warm shadows.
*/

const serif = "Georgia, 'Times New Roman', serif";

const paperTexture =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.25'/%3E%3C/svg%3E\")";

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="w-[34px] h-px bg-[#d4ccb8]" />
      <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e]" />
      <div className="w-1.5 h-1.5 rotate-45 border border-[#c2ad6e]" />
      <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e]" />
      <div className="w-[34px] h-px bg-[#d4ccb8]" />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] relative">
      {/* Global paper texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-80 z-0"
        style={{ backgroundImage: paperTexture, backgroundSize: "200px 200px" }}
      />

      {/* ─── NAV ─── */}
      <nav className="relative z-20 border-b border-[#e0d9c8]">
        <div className="max-w-5xl mx-auto px-6 py-[13px] flex items-center justify-between">
          <div className="flex items-center gap-[34px]">
            <div className="flex items-center gap-[8px]">
              <div className="w-[21px] h-[21px] rounded-sm border border-[#c4b89a]" />
              <span className="text-[13px] tracking-[0.15em] uppercase text-[#5c5240] font-medium">LibraryOS</span>
            </div>
            <div className="flex gap-[21px] text-[13px] text-[#8a7e6b]">
              {["Features", "Pricing", "About", "Resources", "Contact"].map((item) => (
                <span key={item} className="hover:text-[#3d3626] transition-colors cursor-pointer">{item}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-[8px]">
            <button className="px-[21px] py-[8px] text-[13px] tracking-[0.1em] uppercase text-[#7a6f5e] rounded-full hover:bg-[#ede8dc] transition-colors">
              Log in
            </button>
            <button className="px-[21px] py-[8px] text-[13px] tracking-[0.1em] uppercase text-[#f7f5f0] bg-[#5c5240] rounded-full hover:bg-[#3d3626] transition-colors font-medium">
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden z-10">
        {/* 5-column grid */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-full max-w-5xl mx-6 flex justify-between">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="w-px h-full bg-[#8a7e6b] opacity-[0.07]" />
            ))}
          </div>
        </div>

        {/* Golden rectangle + spiral */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <svg viewBox="0 0 1000 618" className="w-full max-w-5xl opacity-[0.06]" fill="none" stroke="#8a7e6b" strokeWidth="1">
            <rect x="0" y="0" width="1000" height="618" />
            <line x1="618" y1="0" x2="618" y2="618" />
            <line x1="618" y1="382" x2="1000" y2="382" />
            <line x1="854" y1="382" x2="854" y2="0" />
            <line x1="854" y1="146" x2="618" y2="146" />
            <line x1="708" y1="146" x2="708" y2="382" />
            <line x1="708" y1="292" x2="854" y2="292" />
            <path d="M 618 618 A 618 618 0 0 1 0 0" strokeWidth="1.5" />
            <path d="M 1000 382 A 382 382 0 0 1 618 0" strokeWidth="1.5" />
            <path d="M 854 382 A 236 236 0 0 0 618 146" strokeWidth="1.5" />
            <path d="M 854 146 A 146 146 0 0 0 708 292" strokeWidth="1.5" />
            <path d="M 708 292 A 90 90 0 0 1 798 382" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-[89px] pb-[55px] relative z-10">
          <div className="flex items-start gap-[55px]">
            {/* Left — 61.8% */}
            <div className="w-[61.8%]">
              <div className="flex items-center gap-3 mb-[34px]">
                <div className="w-[21px] h-px bg-[#d4ccb8]" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e]" />
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#a09279]">Est. for librarians</p>
                <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e]" />
                <div className="w-[21px] h-px bg-[#d4ccb8]" />
              </div>

              <h1 className="text-5xl leading-[1.15] text-[#3d3626]" style={{ fontFamily: serif }}>
                Every book has a story.<br />
                <span className="italic font-light text-[#8a7e6b]">So does every reader.</span>
              </h1>

              <p className="mt-[34px] text-[18px] leading-[1.618] text-[#7a6f5e] max-w-[490px] tracking-wide">
                A management platform that honors the tradition of libraries while embracing the tools of tomorrow. Patron care, catalog mastery, and effortless operations.
              </p>

              <div className="mt-[34px] flex gap-[13px]">
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#f7f5f0] bg-[#5c5240] rounded-full hover:bg-[#3d3626] active:scale-95 transition-all font-medium">
                  Open the Doors
                </button>
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#5c5240] border border-[#c4b89a] rounded-full hover:border-[#5c5240] hover:bg-[#5c5240]/5 active:scale-95 transition-all">
                  Take a Tour
                </button>
              </div>

              <div className="mt-[21px] flex gap-[13px] items-center text-[11px] text-[#a09279] tracking-wide">
                <span>No credit card</span>
                <div className="w-1 h-1 rounded-full bg-[#d4c494]" />
                <span>14 days free</span>
                <div className="w-1 h-1 rounded-full bg-[#d4c494]" />
                <span>Cancel anytime</span>
              </div>

              <div className="mt-[21px] flex items-center gap-[13px]">
                <div className="flex -space-x-1.5">
                  {["#ddd5c4","#c8d5df","#c9cdb8","#e5d5a8","#ddd5c4"].map((c, i) => (
                    <div key={i} className="w-[34px] h-[34px] rounded-full border-2 border-[#f7f5f0]" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <p className="text-[13px] text-[#8a7e6b]">
                  <span className="text-[#5c5240] font-medium">500+</span> libraries have turned the page
                </p>
              </div>
            </div>

            {/* Right — 38.2% product mock */}
            <div className="w-[38.2%] pt-[55px]">
              <div className="relative">
                <div className="absolute inset-x-3 top-[5px] bottom-0 bg-[#ede8dc] rounded-2xl border border-[#e0d9c8]" />
                <div className="absolute inset-x-1.5 top-[3px] bottom-0 bg-[#f0ebe0] rounded-2xl border border-[#e0d9c8]" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-[#e0d9c8] shadow-[0_8px_60px_rgba(90,80,60,0.06)] overflow-hidden">
                  <div className="px-[13px] py-[8px] border-b border-[#e8e2d4] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm border border-[#c4b89a]" />
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[#a09279]">LibraryOS</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#d4ccb8]" />
                      <div className="w-[5px] h-[5px] rounded-full bg-[#d4ccb8]" />
                      <div className="w-[5px] h-[5px] rounded-full bg-[#9bb0c4]" />
                    </div>
                  </div>
                  <div className="p-[13px] space-y-[8px]">
                    <div className="grid grid-cols-2 gap-[8px]">
                      {[
                        { label: "Active Patrons", val: "12,847", accent: "#6d8da8" },
                        { label: "Circulating", val: "4,291", accent: "#7d8768" },
                        { label: "Overdue", val: "87", accent: "#bfa664" },
                        { label: "Media Out", val: "1,340", accent: "#9bb0c4" },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-[#f7f5f0] border border-[#e8e2d4] rounded-lg p-[8px]">
                          <div className="flex items-center gap-[5px]">
                            <div className="w-[5px] h-[5px] rounded-full" style={{ backgroundColor: stat.accent }} />
                            <p className="text-[8px] uppercase tracking-wider text-[#a09279]">{stat.label}</p>
                          </div>
                          <p className="text-[18px] font-bold text-[#3d3626] mt-[3px] tracking-wide">{stat.val}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#f7f5f0] border border-[#e8e2d4] rounded-lg p-[8px] space-y-[5px]">
                      <p className="text-[8px] uppercase tracking-wider text-[#a09279]">Recent Activity</p>
                      {[{ color: "#9bb0c4" }, { color: "#a3aa8c" }, { color: "#d4c088" }].map((item, i) => (
                        <div key={i} className="flex items-center gap-[5px]">
                          <div className="w-[13px] h-[13px] rounded-full shrink-0" style={{ backgroundColor: item.color, opacity: 0.4 }} />
                          <div className="h-[3px] rounded bg-[#e8e2d4] flex-1" />
                          <div className="h-[3px] w-[21px] rounded bg-[#e8e2d4]" />
                        </div>
                      ))}
                    </div>
                    <div className="rounded-lg border border-[#e8e2d4] overflow-hidden" style={{ aspectRatio: "1.618 / 1" }}>
                      <div className="w-full h-full opacity-[0.15]" style={{ background: "linear-gradient(135deg, #c8d5df 0%, #f7f5f0 40%, #c9cdb8 70%, #e5d5a8 100%)" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF BAR ─── */}
      <section className="relative z-10 border-y border-[#e0d9c8]">
        <div className="max-w-5xl mx-auto px-6 py-[34px] text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#a09279] mb-[21px]">
            Trusted by libraries everywhere
          </p>
          <div className="flex justify-center gap-[55px]">
            {["Springfield PL", "Greenfield District", "Oakridge University", "Maplewood System", "Lakeview County"].map((name) => (
              <div key={name} className="flex items-center gap-[8px]">
                <div className="w-[21px] h-[21px] rounded bg-[#e0d9c8]" />
                <span className="text-[13px] text-[#c4b89a] tracking-wide">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES OVERVIEW ─── */}
      <section className="relative z-10">
        <div className="max-w-5xl mx-auto px-6 py-[89px]">
          <div className="text-center mb-[55px]">
            <h2 className="text-[29px] text-[#3d3626]" style={{ fontFamily: serif }}>
              Everything your library needs
            </h2>
            <p className="mt-[13px] text-[14px] text-[#8a7e6b] max-w-[420px] mx-auto leading-[1.618]">
              A complete toolkit designed specifically for modern librarians.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-[21px]">
            {[
              { title: "Patron Management", desc: "Track visitors, memberships, and check-ins with ease.", accent: "#4a8cc7" },
              { title: "Book Catalog", desc: "Search, organize, and manage your full inventory.", accent: "#8a8f6a" },
              { title: "Late Fees & Billing", desc: "Automate fee calculation and simplify payments.", accent: "#c2ad6e" },
              { title: "Media Rentals", desc: "Handle DVDs, Blu-rays, and digital media lending.", accent: "#4a8cc7" },
            ].map((f) => (
              <div key={f.title} className="p-[34px] bg-white/80 backdrop-blur-sm rounded-xl border border-[#e0d9c8] shadow-[0_2px_8px_rgba(90,80,60,0.04)] hover:-translate-y-[3px] hover:shadow-[0_8px_40px_rgba(90,80,60,0.08)] transition-all duration-300">
                <div className="w-[34px] h-[34px] rounded-lg bg-[#ede8dc] border border-[#e0d9c8] flex items-center justify-center mb-[21px]">
                  <div className="w-[8px] h-[8px] rounded-full" style={{ backgroundColor: f.accent }} />
                </div>
                <h3 className="text-[14px] font-medium text-[#3d3626] mb-[8px]">{f.title}</h3>
                <p className="text-[13px] text-[#8a7e6b] leading-[1.618]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURE DETAIL 1 — Patron Management ─── */}
      <section className="relative z-10 border-y border-[#e0d9c8]">
        <div className="max-w-5xl mx-auto px-6 py-[89px] flex items-center gap-[55px]">
          <div className="w-[61.8%]">
            <div className="flex items-center gap-[8px] mb-[13px]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#4a8cc7]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#a09279]">Patron Management</span>
            </div>
            <h2 className="text-[29px] text-[#3d3626] leading-[1.3]" style={{ fontFamily: serif }}>
              Know every patron by name
            </h2>
            <p className="mt-[13px] text-[14px] text-[#7a6f5e] leading-[1.618] max-w-[460px]">
              Keep a complete record of everyone who walks through your doors. Track visits, manage memberships, and build stronger community connections.
            </p>
            <ul className="mt-[21px] space-y-[13px]">
              {["Check-in tracking", "Membership tiers", "Visit history"].map((item) => (
                <li key={item} className="flex items-center gap-[13px] text-[14px] text-[#5c5240]">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#a6ab8e]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[38.2%]">
            <div className="relative">
              <div className="absolute inset-x-2 top-[3px] bottom-0 bg-[#ede8dc] rounded-xl border border-[#e0d9c8]" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border border-[#e0d9c8] shadow-[0_4px_24px_rgba(90,80,60,0.06)] overflow-hidden" style={{ aspectRatio: "1.618 / 1" }}>
                <div className="p-[21px] space-y-[13px]">
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[34px] h-[34px] rounded-full bg-[#c4d4e4]" />
                    <div>
                      <div className="h-[3px] w-[89px] rounded bg-[#e0d9c8]" />
                      <div className="h-[3px] w-[55px] rounded bg-[#ede8dc] mt-[5px]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[34px] h-[34px] rounded-full bg-[#cdd0bc]" />
                    <div>
                      <div className="h-[3px] w-[76px] rounded bg-[#e0d9c8]" />
                      <div className="h-[3px] w-[42px] rounded bg-[#ede8dc] mt-[5px]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[34px] h-[34px] rounded-full bg-[#e0d4b5]" />
                    <div>
                      <div className="h-[3px] w-[68px] rounded bg-[#e0d9c8]" />
                      <div className="h-[3px] w-[48px] rounded bg-[#ede8dc] mt-[5px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE DETAIL 2 — Book Catalog (reversed) ─── */}
      <section className="relative z-10">
        <div className="max-w-5xl mx-auto px-6 py-[89px] flex items-center gap-[55px]">
          <div className="w-[38.2%]">
            <div className="relative">
              <div className="absolute inset-x-2 top-[3px] bottom-0 bg-[#ede8dc] rounded-xl border border-[#e0d9c8]" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border border-[#e0d9c8] shadow-[0_4px_24px_rgba(90,80,60,0.06)] overflow-hidden" style={{ aspectRatio: "1.618 / 1" }}>
                <div className="p-[21px] space-y-[8px]">
                  <div className="h-[8px] w-full rounded bg-[#ede8dc]" />
                  <div className="grid grid-cols-3 gap-[8px]">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="rounded-lg bg-[#f7f5f0] border border-[#e8e2d4] p-[8px]" style={{ aspectRatio: "0.7 / 1" }}>
                        <div className="w-full h-[60%] rounded bg-[#e0d9c8] mb-[5px]" />
                        <div className="h-[3px] w-[80%] rounded bg-[#e0d9c8]" />
                        <div className="h-[3px] w-[50%] rounded bg-[#ede8dc] mt-[3px]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[61.8%]">
            <div className="flex items-center gap-[8px] mb-[13px]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#8a8f6a]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#a09279]">Book Catalog</span>
            </div>
            <h2 className="text-[29px] text-[#3d3626] leading-[1.3]" style={{ fontFamily: serif }}>
              Your entire catalog at a glance
            </h2>
            <p className="mt-[13px] text-[14px] text-[#7a6f5e] leading-[1.618] max-w-[460px]">
              Powerful search, real-time availability, and barcode scanning make it easy to find and manage every item in your collection.
            </p>
            <ul className="mt-[21px] space-y-[13px]">
              {["Search & filter", "Availability status", "Barcode scanning"].map((item) => (
                <li key={item} className="flex items-center gap-[13px] text-[14px] text-[#5c5240]">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#a6ab8e]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="relative z-10 border-y border-[#e0d9c8]">
        <div className="max-w-5xl mx-auto px-6 py-[89px]">
          <div className="text-center mb-[55px]">
            <h2 className="text-[29px] text-[#3d3626]" style={{ fontFamily: serif }}>
              Loved by librarians
            </h2>
            <p className="mt-[13px] text-[14px] text-[#8a7e6b]">
              Real stories from real library professionals.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[21px]">
            {[
              { name: "Sarah M.", role: "Head Librarian", quote: "Finally a system that understands how libraries actually work. Our checkout times dropped by half.", accent: "#4a8cc7" },
              { name: "James K.", role: "District Manager", quote: "We rolled this out across 12 branches in a week. The onboarding was incredibly smooth.", accent: "#8a8f6a" },
              { name: "Priya R.", role: "Library Director", quote: "The late fee automation alone saved us 10 hours a week. Our staff can focus on what matters.", accent: "#c2ad6e" },
            ].map((t) => (
              <div key={t.name} className="p-[34px] bg-white/80 backdrop-blur-sm rounded-xl border border-[#e0d9c8] shadow-[0_4px_24px_rgba(90,80,60,0.06)] hover:-translate-y-[3px] hover:shadow-[0_8px_40px_rgba(90,80,60,0.08)] transition-all duration-300">
                <div className="flex gap-[3px] mb-[21px]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-[13px] h-[13px] rounded-sm" style={{ backgroundColor: t.accent, opacity: 0.3 }} />
                  ))}
                </div>
                <p className="text-[14px] text-[#5c5240] leading-[1.618] italic" style={{ fontFamily: serif }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-[13px] mt-[21px]">
                  <div className="w-[34px] h-[34px] rounded-full border-2 border-[#f7f5f0]" style={{ backgroundColor: t.accent, opacity: 0.2 }} />
                  <div>
                    <p className="text-[13px] font-medium text-[#3d3626]">{t.name}</p>
                    <p className="text-[11px] text-[#a09279]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="relative z-10">
        <div className="max-w-5xl mx-auto px-6 py-[89px]">
          <div className="text-center mb-[55px]">
            <h2 className="text-[29px] text-[#3d3626]" style={{ fontFamily: serif }}>
              Simple, transparent pricing
            </h2>
            <p className="mt-[13px] text-[14px] text-[#8a7e6b]">
              Plans that scale with your library system.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[21px]">
            {[
              { tier: "Small Library", price: "$29", period: "/mo", cta: "Get Started", featured: false, features: ["Up to 500 patrons", "1 branch", "Email support", "Core features"] },
              { tier: "District", price: "$99", period: "/mo", cta: "Get Started", featured: true, features: ["Unlimited patrons", "Up to 10 branches", "Priority support", "Advanced analytics"] },
              { tier: "Enterprise", price: "Custom", period: "", cta: "Contact Sales", featured: false, features: ["Unlimited everything", "Unlimited branches", "Dedicated account manager", "Custom integrations"] },
            ].map((p) => (
              <div
                key={p.tier}
                className={`p-[34px] rounded-xl transition-all duration-300 hover:-translate-y-[3px] ${
                  p.featured
                    ? "bg-white/90 backdrop-blur-sm border-2 border-[#5c5240] shadow-[0_8px_60px_rgba(90,80,60,0.08)] hover:shadow-[0_16px_80px_rgba(90,80,60,0.12)]"
                    : "bg-white/50 border border-[#e0d9c8] shadow-[0_2px_8px_rgba(90,80,60,0.04)] hover:shadow-[0_8px_40px_rgba(90,80,60,0.08)]"
                }`}
              >
                {p.featured && (
                  <span className="inline-block px-[13px] py-[3px] text-[8px] uppercase tracking-[0.3em] rounded-full bg-[#cdd0bc] text-[#444830] font-medium mb-[13px]">
                    Most Popular
                  </span>
                )}
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279]">{p.tier}</p>
                <div className="mt-[8px] flex items-end gap-[3px]">
                  <span className="text-[47px] font-bold text-[#3d3626] leading-none" style={{ fontFamily: serif }}>{p.price}</span>
                  {p.period && <span className="text-[14px] text-[#a09279] mb-[8px]">{p.period}</span>}
                </div>
                <ul className="mt-[21px] space-y-[13px]">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-[13px] text-[13px] text-[#5c5240]">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#a6ab8e]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-[34px] w-full py-[13px] rounded-full text-[13px] tracking-[0.15em] uppercase transition-all active:scale-95 ${
                    p.featured
                      ? "bg-[#5c5240] text-[#f7f5f0] hover:bg-[#3d3626] font-medium"
                      : "border border-[#c4b89a] text-[#5c5240] hover:border-[#5c5240] hover:bg-[#5c5240]/5"
                  }`}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative z-10 bg-[#2a2419]">
        <div className="max-w-5xl mx-auto px-6 py-[89px] text-center relative">
          {/* Subtle golden rectangle overlay */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <svg viewBox="0 0 1000 618" className="w-full max-w-[400px] opacity-[0.04]" fill="none" stroke="#c4b89a" strokeWidth="1">
              <rect x="0" y="0" width="1000" height="618" />
              <line x1="618" y1="0" x2="618" y2="618" />
              <line x1="618" y1="382" x2="1000" y2="382" />
              <path d="M 618 618 A 618 618 0 0 1 0 0" strokeWidth="1.5" />
              <path d="M 1000 382 A 382 382 0 0 1 618 0" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="relative z-10">
            <Ornament />
            <h2 className="text-[29px] text-[#f7f5f0] mt-[34px]" style={{ fontFamily: serif }}>
              Ready to modernize your library?
            </h2>
            <p className="mt-[13px] text-[14px] text-[#8a7e6b] max-w-[400px] mx-auto leading-[1.618]">
              Join hundreds of libraries already saving time and delighting patrons.
            </p>
            <div className="mt-[34px] flex justify-center gap-[13px]">
              <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#2a2419] bg-[#f7f5f0] rounded-full hover:bg-white active:scale-95 transition-all font-medium">
                Start Free Trial
              </button>
              <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#c4b89a] border border-[#5c5240] rounded-full hover:border-[#c4b89a] active:scale-95 transition-all">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative z-10 border-t border-[#e0d9c8]">
        <div className="max-w-5xl mx-auto px-6 py-[55px] flex gap-[55px]">
          <div className="space-y-[13px] max-w-[180px]">
            <div className="flex items-center gap-[8px]">
              <div className="w-[21px] h-[21px] rounded-sm border border-[#c4b89a]" />
              <span className="text-[13px] tracking-[0.15em] uppercase text-[#5c5240] font-medium">LibraryOS</span>
            </div>
            <p className="text-[13px] text-[#a09279] leading-[1.618]">Modern library management for modern librarians.</p>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
            { title: "Resources", links: ["Help Center", "Case Studies", "API Docs", "Status"] },
            { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#a09279] mb-[13px]">
                {col.title}
              </p>
              <ul className="space-y-[8px]">
                {col.links.map((link) => (
                  <li key={link} className="text-[13px] text-[#8a7e6b] hover:text-[#3d3626] transition-colors cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-5xl mx-auto px-6 py-[21px] border-t border-[#e0d9c8] flex justify-between items-center">
          <p className="text-[11px] text-[#a09279]">&copy; 2026 LibraryOS. All rights reserved.</p>
          <div className="flex gap-[13px]">
            {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((s) => (
              <div key={s} className="w-[21px] h-[21px] rounded bg-[#ede8dc] hover:bg-[#e0d9c8] transition-colors cursor-pointer" />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
