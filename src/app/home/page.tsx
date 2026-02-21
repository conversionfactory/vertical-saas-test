/*
  HOMEPAGE — Libr.OS Marketing Site
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

/* ── Hand-drawn icons (wobbly SVG displacement) ── */
const wobbleFilter = (id: string, seed: number) => (
  <defs>
    <filter id={id}>
      <feTurbulence baseFrequency="0.04" numOctaves="3" seed={seed} result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="1.2" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
);

function IconPatron({ size = 28, color = "#4a8cc7" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      {wobbleFilter("wp", 1)}
      <circle cx="14" cy="9" r="5" stroke={color} strokeWidth="1.5" strokeLinecap="round" filter="url(#wp)"/>
      <path d="M5 25c0-5 4-9 9-9s9 4 9 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" filter="url(#wp)"/>
    </svg>
  );
}

function IconBook({ size = 28, color = "#8a8f6a" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      {wobbleFilter("wb", 3)}
      <path d="M5 4c0 0 3-1 9-1s9 1 9 1v20s-3-1-9-1-9 1-9 1V4Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#wb)"/>
      <path d="M14 3v21" stroke={color} strokeWidth="1.5" strokeLinecap="round" filter="url(#wb)"/>
    </svg>
  );
}

function IconBilling({ size = 28, color = "#c2ad6e" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      {wobbleFilter("wbi", 5)}
      <rect x="4" y="6" width="20" height="16" rx="2" stroke={color} strokeWidth="1.5" strokeLinecap="round" filter="url(#wbi)"/>
      <line x1="4" y1="12" x2="24" y2="12" stroke={color} strokeWidth="1.5" filter="url(#wbi)"/>
      <line x1="17" y1="18" x2="21" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" filter="url(#wbi)"/>
    </svg>
  );
}

function IconMedia({ size = 28, color = "#4a8cc7" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      {wobbleFilter("wm", 7)}
      <circle cx="14" cy="14" r="10" stroke={color} strokeWidth="1.5" filter="url(#wm)"/>
      <circle cx="14" cy="14" r="4" stroke={color} strokeWidth="1.5" filter="url(#wm)"/>
      <circle cx="14" cy="14" r="1.5" fill={color}/>
    </svg>
  );
}

const featureIcons: Record<string, React.FC<{ size?: number; color?: string }>> = {
  "Patron Management": IconPatron,
  "Book Catalog": IconBook,
  "Late Fees & Billing": IconBilling,
  "Media Rentals": IconMedia,
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] relative">
      {/* Animation keyframes for product mocks */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes countUp {
          0% { opacity: 0; transform: translateY(4px); }
          60% { opacity: 1; transform: translateY(0); }
          100% { opacity: 1; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes chartDraw {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(13px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes barExpand {
          from { width: 0; }
        }
        @keyframes patronCheckIn {
          0% { opacity: 0; transform: translateX(21px) scale(0.95); }
          70% { opacity: 1; transform: translateX(0) scale(1); }
          85% { transform: translateX(0) scale(1.02); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes statusDotPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        @keyframes bookReveal {
          from { opacity: 0; transform: translateY(13px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes searchType {
          0%, 15% { width: 0; }
          80%, 100% { width: 100%; }
        }
        @keyframes cursorBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes gradientSweep {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .anim-stat { animation: countUp 0.6s ease-out both; }
        .anim-activity { animation: fadeSlideUp 0.5s ease-out both; }
        .anim-dot { animation: pulseGlow 3s ease-in-out infinite; }
        .anim-patron { animation: patronCheckIn 0.7s ease-out both; }
        .anim-bar { animation: barExpand 0.8s ease-out both; }
        .anim-book { animation: bookReveal 0.5s ease-out both; }
        .anim-search { animation: searchType 3s ease-in-out infinite; }
        .anim-cursor { animation: cursorBlink 0.8s step-end infinite; }
        @keyframes orbit {
          0%   { transform: rotate(0deg) translateX(calc(var(--orbit-r))) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(calc(var(--orbit-r))) rotate(-360deg); }
        }
        @keyframes orbitBlip {
          0% { box-shadow: 0 0 0 0 var(--blip-color); }
          70% { box-shadow: 0 0 0 6px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .anim-sweep {
          background: linear-gradient(90deg, transparent 0%, rgba(74,140,199,0.06) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: gradientSweep 4s ease-in-out infinite;
        }
      `}} />

      {/* Global paper texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-80 z-0"
        style={{ backgroundImage: paperTexture, backgroundSize: "200px 200px" }}
      />

      {/* Global 5-column grid lines — runs through entire page */}
      <div className="fixed inset-0 hidden md:flex justify-center pointer-events-none z-[1]">
        <div className="w-full max-w-5xl mx-6 flex justify-between">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="w-px h-full bg-[#8a7e6b] opacity-[0.07]" />
          ))}
        </div>
      </div>

      {/* ─── NAV ─── */}
      <nav className="relative z-20 border-b border-[#e0d9c8]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-[13px] flex items-center justify-between">
          <div className="flex items-center gap-[34px]">
            <div className="flex items-center gap-[8px]">
              <div className="w-[21px] h-[21px] rounded-sm border border-[#c4b89a]" />
              <span className="text-[13px] tracking-[0.15em] uppercase text-[#5c5240] font-medium">Libr.OS</span>
            </div>
            <div className="hidden md:flex gap-[21px] text-[13px] text-[#8a7e6b]">
              {["Features", "Pricing", "About", "Resources", "Contact"].map((item) => (
                <span key={item} className="hover:text-[#3d3626] transition-colors cursor-pointer">{item}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-[8px]">
            <button className="relative px-[21px] py-[8px] text-[13px] tracking-[0.1em] uppercase text-[#7a6f5e] rounded-full overflow-hidden hover:shadow-[0_0_16px_rgba(58,109,148,0.25)] transition-all duration-300 group/login">
              <span className="absolute inset-0 rounded-full bg-black/0 group-hover/login:bg-black/[0.04] transition-all duration-300" />
              <span className="relative z-10">Log in</span>
            </button>
            <div className="rounded-full border border-[#b3cde0] p-[2px] hover:border-[#4a8cc7] hover:shadow-[0_0_16px_rgba(58,109,148,0.25)] transition-all duration-300 group/nav">
              <button className="relative px-[21px] py-[8px] text-[11px] tracking-[0.1em] uppercase text-white rounded-full font-medium active:scale-[0.97] transition-all duration-300 overflow-hidden"
                style={{ background: "linear-gradient(to bottom, #3a6d94, #2a5070)", boxShadow: "0 1px 0 0 rgba(255,255,255,0.12) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset, 0 3px 8px rgba(42,80,112,0.3), 0 1px 2px rgba(0,0,0,0.12)" }}>
                <span className="absolute inset-0 rounded-full bg-black/0 group-hover/nav:bg-black/15 transition-all duration-300" />
                <span className="relative z-10">Sign up</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative z-10">
        {/* Golden rectangle + spiral */}
        <div className="absolute inset-0 hidden md:flex justify-center items-center pointer-events-none">
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

        <div className="max-w-5xl mx-auto px-4 md:px-6 pt-[55px] md:pt-[89px] pb-[34px] md:pb-[55px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[34px] md:gap-[55px] items-center">
            {/* Left — text */}
            <div>
              <div className="flex items-center gap-3 mb-[34px]">
                <div className="w-[21px] h-px bg-[#d4ccb8]" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e]" />
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#a09279]">Est. for librarians</p>
                <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e]" />
                <div className="w-[21px] h-px bg-[#d4ccb8]" />
              </div>

              <h1 className="text-[28px] md:text-[36px] leading-[1.2] text-[#3d3626]" style={{ fontFamily: serif }}>
                Every book has a story.<br />
                <span className="italic font-light text-[#8a7e6b]">So does every reader.</span>
              </h1>

              <p className="mt-[21px] md:mt-[34px] text-[16px] md:text-[18px] leading-[1.618] text-[#7a6f5e] max-w-[490px] tracking-wide">
                A management platform that honors the tradition of libraries while embracing the tools of tomorrow. Patron care, catalog mastery, and effortless operations.
              </p>

              <div className="mt-[21px] md:mt-[34px] flex flex-col sm:flex-row gap-[13px] items-start sm:items-center">
                <div className="rounded-full border border-[#b3cde0] p-[3px] hover:border-[#4a8cc7] hover:shadow-[0_0_16px_rgba(58,109,148,0.25)] transition-all duration-300 group/hero">
                  <button className="relative px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-white rounded-full font-medium active:scale-[0.97] transition-all duration-300 overflow-hidden"
                    style={{ background: "linear-gradient(to bottom, #3a6d94, #2a5070)", boxShadow: "0 1px 0 0 rgba(255,255,255,0.12) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset, 0 4px 12px rgba(42,80,112,0.35), 0 1px 3px rgba(0,0,0,0.15)" }}>
                    <span className="absolute inset-0 rounded-full bg-black/0 group-hover/hero:bg-black/15 transition-all duration-300" />
                    <span className="relative z-10">Open the Doors</span>
                  </button>
                </div>
                <button className="relative px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#5c5240] border border-[#c4b89a] rounded-full overflow-hidden hover:border-[#5c5240] hover:bg-[#5c5240] hover:text-[#f7f5f0] hover:shadow-[0_0_16px_rgba(58,109,148,0.25)] transition-all duration-300 active:scale-95 group/tour">
                  <span className="absolute inset-0 rounded-full bg-black/0 group-hover/tour:bg-black/10 transition-all duration-300" />
                  <span className="relative z-10">Take a Tour</span>
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

            {/* Right — product mock */}
            <div>
              <div className="relative max-w-[320px] md:max-w-[380px] mx-auto">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-[#b3cde0] hidden md:block">
                  <div className="absolute left-1/2 top-1/2 w-[6px] h-[6px] rounded-full bg-[#b3cde0] -ml-[3px] -mt-[3px]" style={{ animation: "orbit 12s linear infinite, orbitBlip 2s ease-out infinite", ["--orbit-r" as string]: "220px", ["--blip-color" as string]: "rgba(179,205,224,0.5)" }} />
                </div>
                <div className="absolute inset-x-3 top-[5px] bottom-0 bg-[#ede8dc] rounded-2xl border border-[#e0d9c8]" />
                <div className="absolute inset-x-1.5 top-[3px] bottom-0 bg-[#f0ebe0] rounded-2xl border border-[#e0d9c8]" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-[#e0d9c8] shadow-[0_8px_60px_rgba(90,80,60,0.06)] overflow-hidden">
                  <div className="px-[13px] py-[8px] border-b border-[#e8e2d4] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm border border-[#c4b89a]" />
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[#a09279]">Libr.OS</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#d4ccb8]" />
                      <div className="w-[5px] h-[5px] rounded-full bg-[#d4ccb8]" />
                      <div className="w-[5px] h-[5px] rounded-full bg-[#9bb0c4]" />
                    </div>
                  </div>
                  <div className="p-[13px] space-y-[8px]">
                    {/* Stat cards — staggered count-up */}
                    <div className="grid grid-cols-2 gap-[8px]">
                      {[
                        { label: "Active Patrons", val: "12,847", accent: "#6d8da8" },
                        { label: "Circulating", val: "4,291", accent: "#7d8768" },
                        { label: "Overdue", val: "87", accent: "#bfa664" },
                        { label: "Media Out", val: "1,340", accent: "#9bb0c4" },
                      ].map((stat, i) => (
                        <div key={stat.label} className="anim-stat bg-[#f7f5f0] border border-[#e8e2d4] rounded-lg p-[8px]" style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
                          <div className="flex items-center gap-[5px]">
                            <div className="w-[5px] h-[5px] rounded-full anim-dot" style={{ backgroundColor: stat.accent, animationDelay: `${i * 0.7}s` }} />
                            <p className="text-[8px] uppercase tracking-wider text-[#a09279]">{stat.label}</p>
                          </div>
                          <p className="text-[18px] font-bold text-[#3d3626] mt-[3px] tracking-wide">{stat.val}</p>
                        </div>
                      ))}
                    </div>
                    {/* Activity list — staggered slide-in */}
                    <div className="bg-[#f7f5f0] border border-[#e8e2d4] rounded-lg p-[8px] space-y-[5px]">
                      <p className="text-[8px] uppercase tracking-wider text-[#a09279]">Recent Activity</p>
                      {[
                        { color: "#9bb0c4", name: "Maria checked in", time: "2m ago" },
                        { color: "#a3aa8c", name: "The Great Gatsby returned", time: "5m ago" },
                        { color: "#d4c088", name: "Late fee collected — $3.50", time: "12m ago" },
                      ].map((item, i) => (
                        <div key={i} className="anim-activity flex items-center gap-[5px]" style={{ animationDelay: `${0.8 + i * 0.2}s` }}>
                          <div className="w-[13px] h-[13px] rounded-full shrink-0 anim-dot" style={{ backgroundColor: item.color, animationDelay: `${1 + i * 1.5}s` }} />
                          <div className="h-[3px] rounded bg-[#e8e2d4] flex-1 overflow-hidden">
                            <div className="h-full rounded bg-[#d4ccb8] anim-bar" style={{ animationDelay: `${1.0 + i * 0.2}s` }} />
                          </div>
                          <div className="h-[3px] w-[21px] rounded bg-[#e8e2d4]" />
                        </div>
                      ))}
                    </div>
                    {/* Library image */}
                    <div className="rounded-lg border border-[#e8e2d4] overflow-hidden relative" style={{ aspectRatio: "1.618 / 1" }}>
                      <img
                        src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&q=80&auto=format&fit=crop"
                        alt="Public library interior"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#f7f5f0]/30 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF BAR ─── */}
      <section className="relative z-10 border-y border-[#8a7e6b]/[0.07]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-[21px] md:py-[34px] text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#a09279] mb-[13px] md:mb-[21px]">
            Trusted by libraries everywhere
          </p>
          <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}>
            <div className="flex w-max" style={{ animation: "marquee 25s linear infinite" }}>
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex shrink-0">
                  {["Springfield PL", "Greenfield District", "Oakridge University", "Maplewood System", "Lakeview County", "Brookhaven Library", "Riverside Public", "Cedar Falls District"].map((name) => (
                    <div key={`${setIndex}-${name}`} className="flex items-center gap-[8px] mx-[34px]">
                      <div className="w-[21px] h-[21px] rounded bg-[#e0d9c8]" />
                      <span className="text-[13px] text-[#c4b89a] tracking-wide whitespace-nowrap">{name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES OVERVIEW ─── */}
      <section className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 md:px-0 py-[55px] md:py-[89px]">
          <div className="text-center mb-[34px] md:mb-[55px]">
            <h2 className="text-[24px] md:text-[29px] text-[#3d3626]" style={{ fontFamily: serif }}>
              Everything your library needs
            </h2>
            <p className="mt-[13px] text-[14px] text-[#8a7e6b] max-w-[420px] mx-auto leading-[1.618]">
              A complete toolkit designed specifically for modern librarians.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[13px] sm:gap-0 justify-items-center">
            {[
              { title: "Patron Management", desc: "Track visitors, memberships, and check-ins with ease.", accent: "#4a8cc7" },
              { title: "Book Catalog", desc: "Search, organize, and manage your full inventory.", accent: "#8a8f6a" },
              { title: "Late Fees & Billing", desc: "Automate fee calculation and simplify payments.", accent: "#c2ad6e" },
              { title: "Media Rentals", desc: "Handle DVDs, Blu-rays, and digital media lending.", accent: "#4a8cc7" },
            ].map((f) => {
              const Icon = featureIcons[f.title];
              return (
              <div key={f.title} className="w-[calc(100%-24px)] p-[34px] bg-white/80 backdrop-blur-sm rounded-xl border border-[#e0d9c8] shadow-[0_2px_8px_rgba(90,80,60,0.04)] hover:-translate-y-[3px] hover:shadow-[0_8px_40px_rgba(90,80,60,0.08)] transition-all duration-300">
                <div className="w-[42px] h-[42px] rounded-lg bg-[#ede8dc] border border-[#e0d9c8] flex items-center justify-center mb-[21px]">
                  {Icon ? <Icon size={24} color={f.accent} /> : <div className="w-[8px] h-[8px] rounded-full" style={{ backgroundColor: f.accent }} />}
                </div>
                <h3 className="text-[14px] font-medium text-[#3d3626] mb-[8px]">{f.title}</h3>
                <p className="text-[13px] text-[#8a7e6b] leading-[1.618]">{f.desc}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FEATURE DETAIL 1 — Patron Management ─── */}
      <section className="relative z-10 border-y border-[#8a7e6b]/[0.07]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-[55px] md:py-[89px] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[34px] md:gap-[55px] items-center">
          <div>
            <div className="flex items-center gap-[8px] mb-[13px]">
              <IconPatron size={18} color="#4a8cc7" />
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
          <div>
            <div className="relative max-w-[320px] md:max-w-[380px] mx-auto">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#b3cde0] hidden md:block">
                <div className="absolute left-1/2 top-1/2 w-[6px] h-[6px] rounded-full bg-[#b3cde0] -ml-[3px] -mt-[3px]" style={{ animation: "orbit 10s linear infinite, orbitBlip 2s ease-out infinite", ["--orbit-r" as string]: "150px", ["--blip-color" as string]: "rgba(179,205,224,0.5)" }} />
              </div>
              <div className="absolute inset-x-2 top-[3px] bottom-0 bg-[#ede8dc] rounded-xl border border-[#e0d9c8]" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border border-[#e0d9c8] shadow-[0_4px_24px_rgba(90,80,60,0.06)] overflow-hidden" style={{ aspectRatio: "1.618 / 1" }}>
                {/* Patron check-in header */}
                <div className="px-[13px] py-[8px] border-b border-[#e8e2d4] flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-[#a09279]">Today&apos;s Check-ins</span>
                  <div className="flex items-center gap-[5px]">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#4a8cc7] anim-dot" />
                    <span className="text-[8px] text-[#a09279]">Live</span>
                  </div>
                </div>
                {/* Patron rows — staggered check-in animation */}
                <div className="p-[13px] space-y-[8px]">
                  {[
                    { name: "Elena Rodriguez", tier: "Gold", avatar: "#c4d4e4", tierColor: "#c2ad6e", barW: 89 },
                    { name: "James Whitfield", tier: "Standard", avatar: "#cdd0bc", tierColor: "#a6ab8e", barW: 76 },
                    { name: "Aisha Patel", tier: "Student", avatar: "#e0d4b5", tierColor: "#7eaac8", barW: 68 },
                    { name: "Marcus Chen", tier: "Gold", avatar: "#c4d4e4", tierColor: "#c2ad6e", barW: 82 },
                  ].map((patron, i) => (
                    <div key={i} className="anim-patron flex items-center gap-[8px]" style={{ animationDelay: `${0.3 + i * 0.25}s` }}>
                      <div className="w-[28px] h-[28px] rounded-full shrink-0 relative" style={{ backgroundColor: patron.avatar }}>
                        <div className="absolute -bottom-px -right-px w-[8px] h-[8px] rounded-full border-2 border-white bg-[#8a8f6a] anim-dot" style={{ animationDelay: `${i * 0.5}s` }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-[5px]">
                          <div className="h-[3px] rounded bg-[#d4ccb8] anim-bar" style={{ width: patron.barW, animationDelay: `${0.5 + i * 0.25}s` }} />
                          <span className="text-[7px] uppercase tracking-wider px-[5px] py-px rounded-full shrink-0" style={{ backgroundColor: patron.tierColor, opacity: 0.2, color: patron.tierColor }}>{patron.tier}</span>
                        </div>
                        <div className="h-[3px] w-[42px] rounded bg-[#ede8dc] mt-[3px]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE DETAIL 2 — Book Catalog (reversed) ─── */}
      <section className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-[55px] md:py-[89px] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[34px] md:gap-[55px] items-center">
          <div className="order-2 md:order-1">
            <div className="relative max-w-[320px] md:max-w-[380px] mx-auto">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#c2c5b2] hidden md:block">
                <div className="absolute left-1/2 top-1/2 w-[6px] h-[6px] rounded-full bg-[#c2c5b2] -ml-[3px] -mt-[3px]" style={{ animation: "orbit 10s linear infinite, orbitBlip 2s ease-out infinite", ["--orbit-r" as string]: "150px", ["--blip-color" as string]: "rgba(194,197,178,0.5)" }} />
              </div>
              <div className="absolute inset-x-2 top-[3px] bottom-0 bg-[#ede8dc] rounded-xl border border-[#e0d9c8]" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border border-[#e0d9c8] shadow-[0_4px_24px_rgba(90,80,60,0.06)] overflow-hidden" style={{ aspectRatio: "1.618 / 1" }}>
                {/* Search bar with typing animation */}
                <div className="px-[13px] py-[8px] border-b border-[#e8e2d4] flex items-center gap-[8px]">
                  <div className="w-[10px] h-[10px] rounded-full border border-[#d4ccb8]" />
                  <div className="flex-1 h-[8px] rounded bg-[#ede8dc] relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 rounded bg-[#d4ccb8] anim-search" />
                    <div className="absolute inset-y-0 right-0 w-px bg-[#8a7e6b] anim-cursor" />
                  </div>
                  <div className="flex gap-[3px]">
                    {["All", "Available", "Out"].map((f, i) => (
                      <span key={f} className="text-[6px] uppercase tracking-wider px-[5px] py-[2px] rounded-full border" style={{ borderColor: i === 1 ? "#8a8f6a" : "#e0d9c8", color: i === 1 ? "#636843" : "#c4b89a", backgroundColor: i === 1 ? "rgba(138,143,106,0.1)" : "transparent" }}>{f}</span>
                    ))}
                  </div>
                </div>
                {/* Book grid — staggered reveal */}
                <div className="p-[13px]">
                  <div className="grid grid-cols-3 gap-[8px]">
                    {[
                      { color: "#c4d4e4", status: "#8a8f6a" },
                      { color: "#cdd0bc", status: "#c2ad6e" },
                      { color: "#e0d4b5", status: "#8a8f6a" },
                      { color: "#d4ccb8", status: "#4a8cc7" },
                      { color: "#c4d4e4", status: "#8a8f6a" },
                      { color: "#e0d4b5", status: "#c2ad6e" },
                    ].map((book, i) => (
                      <div key={i} className="anim-book rounded-lg bg-[#f7f5f0] border border-[#e8e2d4] p-[5px]" style={{ animationDelay: `${0.4 + i * 0.12}s`, aspectRatio: "0.7 / 1" }}>
                        <div className="w-full h-[55%] rounded mb-[5px] relative overflow-hidden" style={{ backgroundColor: book.color, opacity: 0.5 }}>
                          <div className="absolute bottom-[3px] right-[3px] w-[5px] h-[5px] rounded-full" style={{ backgroundColor: book.status }} />
                        </div>
                        <div className="h-[3px] w-[80%] rounded bg-[#e0d9c8] anim-bar" style={{ animationDelay: `${0.6 + i * 0.12}s` }} />
                        <div className="h-[3px] w-[50%] rounded bg-[#ede8dc] mt-[3px]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-[8px] mb-[13px]">
              <IconBook size={18} color="#8a8f6a" />
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

      {/* ─── FEATURE DETAIL 3 — Late Fees & Billing ─── */}
      <section className="relative z-10 border-y border-[#8a7e6b]/[0.07]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-[55px] md:py-[89px] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[34px] md:gap-[55px] items-center">
          <div>
            <div className="flex items-center gap-[8px] mb-[13px]">
              <IconBilling size={18} color="#c2ad6e" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#a09279]">Late Fees &amp; Billing</span>
            </div>
            <h2 className="text-[29px] text-[#3d3626] leading-[1.3]" style={{ fontFamily: serif }}>
              Fees that collect themselves
            </h2>
            <p className="mt-[13px] text-[14px] text-[#7a6f5e] leading-[1.618] max-w-[460px]">
              Set your rules once and let the system handle the rest. Automatic calculations, gentle email reminders, and one-click payment collection.
            </p>
            <ul className="mt-[21px] space-y-[13px]">
              {["Auto-calculated overdue fees", "Email & SMS reminders", "Online payment portal"].map((item) => (
                <li key={item} className="flex items-center gap-[13px] text-[14px] text-[#5c5240]">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#a6ab8e]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="relative max-w-[320px] md:max-w-[380px] mx-auto">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#e6dbb0] hidden md:block">
                <div className="absolute left-1/2 top-1/2 w-[6px] h-[6px] rounded-full bg-[#e6dbb0] -ml-[3px] -mt-[3px]" style={{ animation: "orbit 10s linear infinite, orbitBlip 2s ease-out infinite", ["--orbit-r" as string]: "150px", ["--blip-color" as string]: "rgba(230,219,176,0.5)" }} />
              </div>
              <div className="absolute inset-x-2 top-[3px] bottom-0 bg-[#ede8dc] rounded-xl border border-[#e0d9c8]" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border border-[#e0d9c8] shadow-[0_4px_24px_rgba(90,80,60,0.06)] overflow-hidden" style={{ aspectRatio: "1.618 / 1" }}>
                {/* Billing header */}
                <div className="px-[13px] py-[8px] border-b border-[#e8e2d4] flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-[#a09279]">Outstanding Fees</span>
                  <span className="text-[8px] uppercase tracking-wider text-[#c2ad6e]">3 pending</span>
                </div>
                {/* Fee rows — animated */}
                <div className="p-[13px] space-y-[8px]">
                  {[
                    { amount: "$3.50", days: "7 days", status: "Reminder sent", statusColor: "#c2ad6e", barW: 70 },
                    { amount: "$1.25", days: "3 days", status: "Due soon", statusColor: "#a6ab8e", barW: 40 },
                    { amount: "$5.00", days: "14 days", status: "Overdue", statusColor: "#c2ad6e", barW: 100 },
                  ].map((fee, i) => (
                    <div key={i} className="anim-patron flex items-center gap-[8px] p-[5px] rounded-lg bg-[#f7f5f0] border border-[#e8e2d4]" style={{ animationDelay: `${0.3 + i * 0.2}s` }}>
                      <div className="w-[28px] h-[28px] rounded-lg bg-[#e0d4b5] flex items-center justify-center shrink-0">
                        <span className="text-[8px] font-bold text-[#7a682e]">$</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="h-[3px] rounded bg-[#d4ccb8] anim-bar" style={{ width: fee.barW, animationDelay: `${0.5 + i * 0.2}s` }} />
                          <span className="text-[8px] font-bold text-[#3d3626] ml-[5px]">{fee.amount}</span>
                        </div>
                        <div className="flex items-center gap-[5px] mt-[3px]">
                          <div className="h-[3px] w-[34px] rounded bg-[#ede8dc]" />
                          <div className="w-[4px] h-[4px] rounded-full anim-dot" style={{ backgroundColor: fee.statusColor, animationDelay: `${i * 0.8}s` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Total bar */}
                  <div className="flex items-center justify-between pt-[5px] border-t border-[#e8e2d4]">
                    <span className="text-[7px] uppercase tracking-wider text-[#a09279]">Total outstanding</span>
                    <span className="text-[11px] font-bold text-[#3d3626]">$9.75</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE DETAIL 4 — Media Rentals (reversed) ─── */}
      <section className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-[55px] md:py-[89px] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[34px] md:gap-[55px] items-center">
          <div className="order-2 md:order-1">
            <div className="relative max-w-[320px] md:max-w-[380px] mx-auto">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#b3cde0] hidden md:block">
                <div className="absolute left-1/2 top-1/2 w-[6px] h-[6px] rounded-full bg-[#b3cde0] -ml-[3px] -mt-[3px]" style={{ animation: "orbit 10s linear infinite, orbitBlip 2s ease-out infinite", ["--orbit-r" as string]: "150px", ["--blip-color" as string]: "rgba(179,205,224,0.5)" }} />
              </div>
              <div className="absolute inset-x-2 top-[3px] bottom-0 bg-[#ede8dc] rounded-xl border border-[#e0d9c8]" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border border-[#e0d9c8] shadow-[0_4px_24px_rgba(90,80,60,0.06)] overflow-hidden" style={{ aspectRatio: "1.618 / 1" }}>
                {/* Media header */}
                <div className="px-[13px] py-[8px] border-b border-[#e8e2d4] flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-[#a09279]">Media Collection</span>
                  <div className="flex gap-[5px]">
                    {["DVD", "Blu-ray", "Digital"].map((t, i) => (
                      <span key={t} className="text-[6px] uppercase tracking-wider px-[4px] py-[1px] rounded-full border" style={{ borderColor: i === 0 ? "#4a8cc7" : "#e0d9c8", color: i === 0 ? "#2862a0" : "#c4b89a", backgroundColor: i === 0 ? "rgba(74,140,199,0.1)" : "transparent" }}>{t}</span>
                    ))}
                  </div>
                </div>
                {/* Media items — staggered */}
                <div className="p-[13px] space-y-[5px]">
                  {[
                    { title: 95, color: "#c4d4e4", type: "DVD", due: "Due 3/2" },
                    { title: 78, color: "#cdd0bc", type: "Blu-ray", due: "Due 3/5" },
                    { title: 62, color: "#e0d4b5", type: "Digital", due: "Streaming" },
                    { title: 84, color: "#c4d4e4", type: "DVD", due: "Due 2/28" },
                    { title: 55, color: "#d4ccb8", type: "DVD", due: "Available" },
                  ].map((media, i) => (
                    <div key={i} className="anim-activity flex items-center gap-[8px]" style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
                      <div className="w-[34px] h-[21px] rounded shrink-0 relative overflow-hidden" style={{ backgroundColor: media.color, opacity: 0.6 }}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[8px] h-[8px] rounded-full border border-white/40" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="h-[3px] rounded bg-[#d4ccb8] anim-bar" style={{ width: media.title, animationDelay: `${0.4 + i * 0.15}s` }} />
                      </div>
                      <span className="text-[7px] text-[#a09279] shrink-0">{media.due}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-[8px] mb-[13px]">
              <IconMedia size={18} color="#4a8cc7" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#a09279]">Media Rentals</span>
            </div>
            <h2 className="text-[29px] text-[#3d3626] leading-[1.3]" style={{ fontFamily: serif }}>
              Beyond books — manage every format
            </h2>
            <p className="mt-[13px] text-[14px] text-[#7a6f5e] leading-[1.618] max-w-[460px]">
              DVDs, Blu-rays, audiobooks, and digital lending all managed from a single dashboard. Track availability, due dates, and holds across every format.
            </p>
            <ul className="mt-[21px] space-y-[13px]">
              {["Multi-format inventory", "Due date tracking", "Digital lending integration"].map((item) => (
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
      <section className="relative z-10 border-y border-[#8a7e6b]/[0.07]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-[55px] md:py-[89px]">
          <div className="text-center mb-[34px] md:mb-[55px]">
            <h2 className="text-[24px] md:text-[29px] text-[#3d3626]" style={{ fontFamily: serif }}>
              Loved by librarians
            </h2>
            <p className="mt-[13px] text-[14px] text-[#8a7e6b]">
              Real stories from real library professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[13px] md:gap-[21px]">
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
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-[55px] md:py-[89px]">
          <div className="text-center mb-[34px] md:mb-[55px]">
            <h2 className="text-[24px] md:text-[29px] text-[#3d3626]" style={{ fontFamily: serif }}>
              Simple, transparent pricing
            </h2>
            <p className="mt-[13px] text-[14px] text-[#8a7e6b]">
              Plans that scale with your library system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[13px] md:gap-[21px]">
            {[
              { tier: "Small Library", price: "$29", period: "/mo", cta: "Get Started", featured: false, features: ["Up to 500 patrons", "1 branch", "Email support", "Core features"] },
              { tier: "District", price: "$99", period: "/mo", cta: "Get Started", featured: true, features: ["Unlimited patrons", "Up to 10 branches", "Priority support", "Advanced analytics"] },
              { tier: "Enterprise", price: "Custom", period: "", cta: "Contact Sales", featured: false, features: ["Unlimited everything", "Unlimited branches", "Dedicated account manager", "Custom integrations"] },
            ].map((p) => (
              <div
                key={p.tier}
                className={`p-[21px] rounded-xl transition-all duration-300 hover:-translate-y-[3px] flex flex-col ${
                  p.featured
                    ? "bg-white/90 backdrop-blur-sm border border-[#5c5240] shadow-[0_4px_34px_rgba(90,80,60,0.08)] hover:shadow-[0_8px_40px_rgba(90,80,60,0.12)]"
                    : "bg-white/50 border border-[#e0d9c8] shadow-[0_2px_8px_rgba(90,80,60,0.04)] hover:shadow-[0_8px_40px_rgba(90,80,60,0.08)]"
                }`}
              >
                <div className="h-[22px] mb-[8px]">
                  {p.featured && (
                    <span className="inline-block px-[8px] py-[2px] text-[7px] uppercase tracking-[0.3em] rounded-full bg-[#cdd0bc] text-[#444830] font-medium">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279]">{p.tier}</p>
                <div className="mt-[5px] flex items-end gap-[3px]">
                  <span className="text-[29px] font-bold text-[#3d3626] leading-none" style={{ fontFamily: serif }}>{p.price}</span>
                  {p.period && <span className="text-[13px] text-[#a09279] mb-[3px]">{p.period}</span>}
                </div>
                <ul className="mt-[13px] space-y-[8px] flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-[8px] text-[13px] text-[#5c5240]">
                      <div className="w-[4px] h-[4px] rounded-full bg-[#a6ab8e] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                {p.featured ? (
                  <div className="mt-[21px] rounded-full border border-[#b3cde0] p-[2px] hover:border-[#4a8cc7] hover:shadow-[0_0_16px_rgba(58,109,148,0.25)] transition-all duration-300 group/btn">
                    <button className="relative w-full py-[8px] rounded-full text-[11px] tracking-[0.15em] uppercase text-white font-medium active:scale-[0.97] transition-all duration-300 overflow-hidden"
                      style={{ background: "linear-gradient(to bottom, #3a6d94, #2a5070)", boxShadow: "0 1px 0 0 rgba(255,255,255,0.12) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset, 0 3px 8px rgba(42,80,112,0.3), 0 1px 2px rgba(0,0,0,0.12)" }}>
                      <span className="absolute inset-0 rounded-full bg-black/0 group-hover/btn:bg-black/15 transition-all duration-300" />
                      <span className="relative z-10">{p.cta}</span>
                    </button>
                  </div>
                ) : (
                  <button className="relative mt-[21px] w-full py-[8px] rounded-full text-[11px] tracking-[0.15em] uppercase border border-[#c4b89a] text-[#5c5240] overflow-hidden hover:border-[#5c5240] hover:bg-[#5c5240] hover:text-[#f7f5f0] hover:shadow-[0_0_16px_rgba(58,109,148,0.25)] transition-all duration-300 active:scale-95 group/outline">
                    <span className="absolute inset-0 rounded-full bg-black/0 group-hover/outline:bg-black/10 transition-all duration-300" />
                    <span className="relative z-10">{p.cta}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative z-10 bg-[#2a2419]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-[55px] md:py-[89px] text-center relative">
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
            <div className="mt-[34px] flex flex-col sm:flex-row justify-center gap-[13px]">
              <button className="relative px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#2a2419] bg-[#f7f5f0] rounded-full overflow-hidden hover:shadow-[0_0_16px_rgba(58,109,148,0.25)] active:scale-95 transition-all duration-300 font-medium group/cta1">
                <span className="absolute inset-0 rounded-full bg-black/0 group-hover/cta1:bg-black/[0.06] transition-all duration-300" />
                <span className="relative z-10">Start Free Trial</span>
              </button>
              <button className="relative px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#c4b89a] border border-[#5c5240] rounded-full overflow-hidden hover:border-[#c4b89a] hover:bg-[#c4b89a] hover:text-[#2a2419] hover:shadow-[0_0_16px_rgba(58,109,148,0.25)] active:scale-95 transition-all duration-300 group/demo">
                <span className="absolute inset-0 rounded-full bg-black/0 group-hover/demo:bg-black/10 transition-all duration-300" />
                <span className="relative z-10">Book a Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative z-10 border-t border-[#e0d9c8]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-[34px] md:py-[55px] flex flex-wrap gap-[34px] md:gap-[55px]">
          <div className="space-y-[13px] w-full md:w-auto md:max-w-[180px]">
            <div className="flex items-center gap-[8px]">
              <div className="w-[21px] h-[21px] rounded-sm border border-[#c4b89a]" />
              <span className="text-[13px] tracking-[0.15em] uppercase text-[#5c5240] font-medium">Libr.OS</span>
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
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-[21px] border-t border-[#e0d9c8] flex flex-col sm:flex-row justify-between items-center gap-[13px]">
          <p className="text-[11px] text-[#a09279]">&copy; 2026 Libr.OS. All rights reserved.</p>
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
