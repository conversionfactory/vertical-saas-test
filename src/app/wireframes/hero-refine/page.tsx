export default function HeroRefine() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/*
        PALETTE — Parthenon-inspired
        ────────────────────────────
        NEUTRAL (wide range, marble white → deep shadow):
          #ffffff  — marble highlight
          #f7f5f0  — warm white
          #ede8dc  — parchment
          #e0d9c8  — light stone
          #d4ccb8  — border stone
          #c4b89a  — golden taupe
          #a09279  — mid taupe
          #8a7e6b  — column shadow
          #7a6f5e  — deep taupe
          #5c5240  — dark stone
          #3d3626  — deep shadow
          #2a2419  — near-black
          #1a160f  — ink

        ACCENT — Aegean Blue (base + 2 tints, 2 shades):
          #c4d4e4  — tint 2
          #7eaac8  — tint 1
          #4a8cc7  — BASE
          #2862a0  — shade 1
          #1a4570  — shade 2

        ACCENT — Sage (base + 2 tints, 2 shades):
          #cdd0bc  — tint 2
          #a6ab8e  — tint 1
          #8a8f6a  — BASE
          #636843  — shade 1
          #444830  — shade 2

        ACCENT — Gold (base + 2 tints, 2 shades):
          #e0d4b5  — tint 2
          #d4c494  — tint 1
          #c2ad6e  — BASE
          #a08840  — shade 1
          #7a682e  — shade 2
      */}

      {/* ── Color Palette Reference ── */}
      <div className="max-w-5xl mx-auto px-6 pt-[34px] pb-[21px]">
        <p className="text-[11px] uppercase tracking-[0.4em] text-[#a09279] mb-[13px]">Palette — Parthenon</p>
        <div className="flex gap-[8px] flex-wrap items-end">
          {/* Neutral — wide range */}
          <div className="flex flex-col gap-1">
            <span className="text-[8px] text-[#a09279] font-mono uppercase tracking-wider mb-1">Neutral</span>
            <div className="flex gap-[3px]">
              {["#ffffff","#f7f5f0","#ede8dc","#e0d9c8","#d4ccb8","#c4b89a","#a09279","#8a7e6b","#7a6f5e","#5c5240","#3d3626","#2a2419","#1a160f"].map((c) => (
                <div key={c} className="flex flex-col items-center gap-0.5">
                  <div className="w-[34px] h-[34px] rounded border border-[#e0d9c8]" style={{ backgroundColor: c }} />
                  <span className="text-[7px] text-[#a09279] font-mono">{c.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-[21px] mt-[13px]">
          {/* Aegean Blue — base + 2 tints + 2 shades */}
          <div className="flex flex-col gap-1">
            <span className="text-[8px] text-[#4a8cc7] font-mono uppercase tracking-wider mb-1">Aegean</span>
            <div className="flex gap-[3px]">
              {["#c4d4e4","#7eaac8","#4a8cc7","#2862a0","#1a4570"].map((c, i) => (
                <div key={c} className="flex flex-col items-center gap-0.5">
                  <div className={`w-[34px] h-[34px] rounded border ${i === 2 ? "border-[#4a8cc7] ring-1 ring-[#4a8cc7]" : "border-[#e0d9c8]"}`} style={{ backgroundColor: c }} />
                  <span className="text-[7px] text-[#4a8cc7] font-mono">{c.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Sage — base + 2 tints + 2 shades */}
          <div className="flex flex-col gap-1">
            <span className="text-[8px] text-[#8a8f6a] font-mono uppercase tracking-wider mb-1">Sage</span>
            <div className="flex gap-[3px]">
              {["#cdd0bc","#a6ab8e","#8a8f6a","#636843","#444830"].map((c, i) => (
                <div key={c} className="flex flex-col items-center gap-0.5">
                  <div className={`w-[34px] h-[34px] rounded border ${i === 2 ? "border-[#8a8f6a] ring-1 ring-[#8a8f6a]" : "border-[#e0d9c8]"}`} style={{ backgroundColor: c }} />
                  <span className="text-[7px] text-[#8a8f6a] font-mono">{c.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Gold — base + 2 tints + 2 shades */}
          <div className="flex flex-col gap-1">
            <span className="text-[8px] text-[#c2ad6e] font-mono uppercase tracking-wider mb-1">Gold</span>
            <div className="flex gap-[3px]">
              {["#e0d4b5","#d4c494","#c2ad6e","#a08840","#7a682e"].map((c, i) => (
                <div key={c} className="flex flex-col items-center gap-0.5">
                  <div className={`w-[34px] h-[34px] rounded border ${i === 2 ? "border-[#c2ad6e] ring-1 ring-[#c2ad6e]" : "border-[#e0d9c8]"}`} style={{ backgroundColor: c }} />
                  <span className="text-[7px] text-[#c2ad6e] font-mono">{c.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="bg-[#f7f5f0] relative overflow-hidden min-h-screen">
        {/* Paper texture noise */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        {/* 5-column vertical grid lines with margin */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-full max-w-5xl mx-6 flex justify-between">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="w-px h-full bg-[#8a7e6b] opacity-[0.07]" />
            ))}
          </div>
        </div>

        {/* Golden rectangle subdivisions + spiral */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <svg
            viewBox="0 0 1000 618"
            className="w-full max-w-5xl opacity-[0.06]"
            fill="none"
            stroke="#8a7e6b"
            strokeWidth="1"
          >
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

            {/* Left column — 61.8% */}
            <div className="w-[61.8%]">
              {/* Ornament — sage accent on diamonds */}
              <div className="flex items-center gap-3 mb-[34px]">
                <div className="w-[21px] h-px bg-[#d4ccb8]" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e]" />
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#a09279]">
                  Est. for librarians
                </p>
                <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e]" />
                <div className="w-[21px] h-px bg-[#d4ccb8]" />
              </div>

              <h1 className="text-5xl leading-[1.15] text-[#3d3626]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                Every book has a story.<br />
                <span className="italic font-light text-[#8a7e6b]">So does every reader.</span>
              </h1>

              <p className="mt-[34px] text-[18px] leading-[1.618] text-[#7a6f5e] max-w-[490px] tracking-wide">
                A management platform that honors the tradition of libraries while embracing the tools of tomorrow. Patron care, catalog mastery, and effortless operations.
              </p>

              {/* Buttons — primary uses deep olive, secondary keeps taupe */}
              <div className="mt-[34px] flex gap-[13px]">
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#f7f5f0] bg-[#5c5240] rounded-full hover:bg-[#4a4234] transition-colors font-medium">
                  Open the Doors
                </button>
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#5c5240] border border-[#c4b89a] rounded-full hover:border-[#5c5240] transition-colors">
                  Take a Tour
                </button>
              </div>

              {/* Objection busters — golden stone dot separators */}
              <div className="mt-[21px] flex gap-[13px] items-center text-[11px] text-[#a09279] tracking-wide">
                <span>No credit card</span>
                <div className="w-1 h-1 rounded-full bg-[#d4c494]" />
                <span>14 days free</span>
                <div className="w-1 h-1 rounded-full bg-[#d4c494]" />
                <span>Cancel anytime</span>
              </div>

              {/* Social proof — Aegean blue ring accent on avatars */}
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

            {/* Right column — 38.2% — product mock */}
            <div className="w-[38.2%] pt-[55px]">
              <div className="relative">
                <div className="absolute inset-x-3 top-[5px] bottom-0 bg-[#ede8dc] rounded-2xl border border-[#e0d9c8]" />
                <div className="absolute inset-x-1.5 top-[3px] bottom-0 bg-[#f0ebe0] rounded-2xl border border-[#e0d9c8]" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-[#e0d9c8] shadow-[0_8px_60px_rgba(90,80,60,0.06)] overflow-hidden">
                  {/* Top bar — Aegean blue active dot */}
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
                  {/* Dashboard content */}
                  <div className="p-[13px] space-y-[8px]">
                    {/* Stat cards — accent color coding */}
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
                    {/* Activity list — color-coded status dots */}
                    <div className="bg-[#f7f5f0] border border-[#e8e2d4] rounded-lg p-[8px] space-y-[5px]">
                      <p className="text-[8px] uppercase tracking-wider text-[#a09279]">Recent Activity</p>
                      {[
                        { color: "#9bb0c4" },
                        { color: "#a3aa8c" },
                        { color: "#d4c088" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-[5px]">
                          <div className="w-[13px] h-[13px] rounded-full shrink-0" style={{ backgroundColor: item.color, opacity: 0.4 }} />
                          <div className="h-[3px] rounded bg-[#e8e2d4] flex-1" />
                          <div className="h-[3px] w-[21px] rounded bg-[#e8e2d4]" />
                        </div>
                      ))}
                    </div>
                    {/* Chart placeholder — golden rectangle with Aegean gradient hint */}
                    <div
                      className="rounded-lg border border-[#e8e2d4] overflow-hidden"
                      style={{ aspectRatio: "1.618 / 1" }}
                    >
                      <div
                        className="w-full h-full opacity-[0.15]"
                        style={{
                          background: "linear-gradient(135deg, #c8d5df 0%, #f7f5f0 40%, #c9cdb8 70%, #e5d5a8 100%)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
