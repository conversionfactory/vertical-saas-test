"use client";

/*
  STYLE GUIDE — LibraryOS Marketing Site
  ───────────────────────────────────────
  Parthenon-inspired palette · Golden ratio typography · Fibonacci spacing
*/

import { useState, useCallback } from "react";

const palette = {
  neutral: [
    { hex: "#ffffff", name: "Marble Highlight", use: "Pure white highlights" },
    { hex: "#f7f5f0", name: "Warm White", use: "Page background" },
    { hex: "#ede8dc", name: "Parchment", use: "Card backgrounds" },
    { hex: "#e0d9c8", name: "Light Stone", use: "Card borders" },
    { hex: "#d4ccb8", name: "Border Stone", use: "Default borders" },
    { hex: "#c4b89a", name: "Golden Taupe", use: "Muted accents" },
    { hex: "#a09279", name: "Mid Taupe", use: "Secondary text" },
    { hex: "#8a7e6b", name: "Column Shadow", use: "Tertiary text" },
    { hex: "#7a6f5e", name: "Deep Taupe", use: "Body text" },
    { hex: "#5c5240", name: "Dark Stone", use: "Primary text, buttons" },
    { hex: "#3d3626", name: "Deep Shadow", use: "Headings" },
    { hex: "#2a2419", name: "Near Black", use: "High contrast" },
    { hex: "#1a160f", name: "Ink", use: "Maximum contrast" },
  ],
  aegean: [
    { hex: "#c4d4e4", name: "Tint 2", use: "Badge backgrounds" },
    { hex: "#7eaac8", name: "Tint 1", use: "Focus borders" },
    { hex: "#4a8cc7", name: "Base", use: "Links, active states", isBase: true },
    { hex: "#2862a0", name: "Shade 1", use: "Badge text" },
    { hex: "#1a4570", name: "Shade 2", use: "Deep emphasis" },
  ],
  sage: [
    { hex: "#cdd0bc", name: "Tint 2", use: "Success backgrounds" },
    { hex: "#a6ab8e", name: "Tint 1", use: "Ornamental accents" },
    { hex: "#8a8f6a", name: "Base", use: "Success, growth", isBase: true },
    { hex: "#636843", name: "Shade 1", use: "Success text" },
    { hex: "#444830", name: "Shade 2", use: "Deep emphasis" },
  ],
  gold: [
    { hex: "#e0d4b5", name: "Tint 2", use: "Warning backgrounds" },
    { hex: "#d4c494", name: "Tint 1", use: "Dot separators" },
    { hex: "#c2ad6e", name: "Base", use: "Highlights, premium", isBase: true },
    { hex: "#a08840", name: "Shade 1", use: "Warning text" },
    { hex: "#7a682e", name: "Shade 2", use: "Deep emphasis" },
  ],
};

const typeScale = [
  { size: 76, name: "Display", use: "Hero headlines only", ratio: "φ⁶" },
  { size: 47, name: "H1", use: "Page titles", ratio: "φ⁵" },
  { size: 29, name: "H2", use: "Section headings", ratio: "φ⁴" },
  { size: 18, name: "H3 / Body Large", use: "Subheadings, lead paragraphs", ratio: "φ³" },
  { size: 14, name: "Body", use: "Default body text", ratio: "φ²" },
  { size: 13, name: "Body Small", use: "Buttons, captions", ratio: "φ¹" },
  { size: 11, name: "Caption", use: "Labels, overlines, fine print", ratio: "φ⁰" },
  { size: 8, name: "Micro", use: "Badges, swatch labels", ratio: "—" },
];

const spacing = [
  { px: 8, token: "xs", fib: "F₆" },
  { px: 13, token: "sm", fib: "F₇" },
  { px: 21, token: "md", fib: "F₈" },
  { px: 34, token: "lg", fib: "F₉" },
  { px: 55, token: "xl", fib: "F₁₀" },
  { px: 89, token: "2xl", fib: "F₁₁" },
];

const darkHexes = new Set(["#5c5240","#3d3626","#2a2419","#1a160f","#1a4570","#2862a0","#636843","#444830","#7a682e","#a08840","#7a6f5e","#8a7e6b"]);

function Swatch({ hex, name, use, isBase, labelColor, onCopy }: {
  hex: string; name: string; use: string; isBase?: boolean; labelColor?: string;
  onCopy: (hex: string) => void;
}) {
  const isDark = darkHexes.has(hex);
  return (
    <button
      type="button"
      onClick={() => onCopy(hex)}
      className="group flex flex-col items-center gap-1 cursor-pointer"
    >
      <div className="relative">
        <div
          className={`w-[60px] h-[60px] rounded-lg border transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg group-active:scale-95 ${isBase ? "ring-2 ring-offset-2 ring-offset-[#f7f5f0]" : ""}`}
          style={{
            backgroundColor: hex,
            borderColor: isDark ? "transparent" : "#d4ccb8",
            ...(isBase ? { ringColor: labelColor } : {}),
          }}
        />
        {/* Hover tooltip */}
        <div className="absolute -top-[42px] left-1/2 -translate-x-1/2 px-[8px] py-[5px] bg-[#2a2419] text-[#f7f5f0] text-[9px] rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-10">
          {use}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-[#2a2419]" />
        </div>
      </div>
      <span className="text-[10px] font-mono text-[#7a6f5e] group-hover:text-[#3d3626] transition-colors">{hex}</span>
      <span className="text-[9px] text-[#a09279] text-center leading-tight max-w-[60px]">{name}</span>
    </button>
  );
}

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-[34px]">
      <div className="flex items-center gap-3 mb-[8px]">
        <div className="w-[21px] h-px bg-[#d4ccb8]" />
        <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e]" />
      </div>
      <h2 className="text-[29px] text-[#3d3626]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        {title}
      </h2>
      <p className="mt-[8px] text-[14px] text-[#8a7e6b] leading-[1.618]">{description}</p>
    </div>
  );
}

function CopyToast({ hex, visible }: { hex: string; visible: boolean }) {
  return (
    <div
      className={`fixed bottom-[34px] left-1/2 -translate-x-1/2 z-50 flex items-center gap-[8px] px-[21px] py-[13px] rounded-full bg-[#2a2419] shadow-[0_8px_60px_rgba(90,80,60,0.15)] transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[8px] pointer-events-none"}`}
    >
      <div className="w-[18px] h-[18px] rounded border border-white/20" style={{ backgroundColor: hex }} />
      <span className="text-[13px] font-mono text-[#f7f5f0]">{hex}</span>
      <span className="text-[11px] text-[#a09279]">copied</span>
    </div>
  );
}

export default function StyleGuide() {
  const [copiedHex, setCopiedHex] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [hoveredSpacing, setHoveredSpacing] = useState<number | null>(null);

  const handleCopy = useCallback((hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 1500);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/* Paper texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-80"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.25'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      <CopyToast hex={copiedHex} visible={toastVisible} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-[89px] pb-[89px]">
        {/* Page header */}
        <div className="mb-[89px]">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#a09279] mb-[13px]">
            LibraryOS — Marketing Site
          </p>
          <h1
            className="text-[47px] leading-[1.15] text-[#3d3626]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Style Guide
          </h1>
          <p className="mt-[13px] text-[18px] leading-[1.618] text-[#7a6f5e] max-w-[600px]">
            Parthenon-inspired color palette, golden ratio typography,
            Fibonacci spacing, and component patterns for the marketing site.
          </p>
        </div>

        {/* ─── 1. COLOR PALETTE ─── */}
        <section className="mb-[89px]">
          <SectionHeader
            title="Color Palette"
            description="Derived from the Parthenon — warm neutrals anchored by three accent families. Click any swatch to copy its hex code."
          />

          {/* Neutrals */}
          <div className="mb-[55px]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px] font-medium">
              Neutral — Marble to Ink
            </p>
            <div className="flex gap-[8px] flex-wrap">
              {palette.neutral.map((c) => (
                <Swatch key={c.hex} hex={c.hex} name={c.name} use={c.use} onCopy={handleCopy} />
              ))}
            </div>
            <div className="mt-[21px] p-[21px] bg-white/50 rounded-lg border border-[#e0d9c8]">
              <p className="text-[13px] text-[#5c5240] leading-[1.618]">
                <strong className="text-[#3d3626]">Usage:</strong> Warm White (#f7f5f0) is the page background. Parchment (#ede8dc) for card backgrounds and secondary surfaces. Border Stone (#d4ccb8) for borders and dividers. Dark Stone through Ink (#5c5240–#1a160f) for text hierarchy.
              </p>
            </div>
          </div>

          {/* Accents */}
          <div className="grid grid-cols-3 gap-[34px]">
            {(["aegean", "sage", "gold"] as const).map((family) => {
              const colors = palette[family];
              const baseColor = colors.find((c) => c.isBase)!.hex;
              const labels: Record<string, string> = {
                aegean: "Aegean Blue",
                sage: "Sage Green",
                gold: "Gold",
              };
              const uses: Record<string, string> = {
                aegean: "Links, active states, trust indicators",
                sage: "Success, growth, nature-related accents",
                gold: "Warnings, highlights, premium indicators",
              };
              return (
                <div key={family}>
                  <p className="text-[11px] uppercase tracking-[0.3em] mb-[13px] font-medium" style={{ color: baseColor }}>
                    {labels[family]}
                  </p>
                  <div className="flex gap-[5px]">
                    {colors.map((c) => (
                      <Swatch key={c.hex} hex={c.hex} name={c.name} use={c.use} isBase={c.isBase} labelColor={baseColor} onCopy={handleCopy} />
                    ))}
                  </div>
                  <p className="mt-[13px] text-[11px] text-[#8a7e6b] leading-[1.618]">{uses[family]}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── 2. TYPOGRAPHY ─── */}
        <section className="mb-[89px]">
          <SectionHeader
            title="Typography"
            description="A golden ratio scale (φ = 1.618) from 8px micro to 76px display. Georgia serif for headings, system sans-serif for everything else."
          />

          <div className="space-y-0">
            {typeScale.map((t) => (
              <div
                key={t.size}
                className="group flex items-baseline gap-[21px] border-b border-[#e0d9c8] py-[13px] px-[13px] -mx-[13px] rounded-lg hover:bg-white/40 transition-colors duration-200 cursor-default"
              >
                <span className="text-[11px] font-mono text-[#a09279] w-[55px] shrink-0 text-right group-hover:text-[#5c5240] transition-colors">
                  {t.size}px
                </span>
                <span className="text-[9px] font-mono text-[#c4b89a] w-[28px] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {t.ratio}
                </span>
                <span
                  className="text-[#3d3626] shrink-0"
                  style={{
                    fontSize: Math.min(t.size, 47),
                    lineHeight: 1.2,
                    fontFamily: t.size >= 29 ? "Georgia, 'Times New Roman', serif" : "inherit",
                  }}
                >
                  {t.name}
                </span>
                <span className="text-[13px] text-[#8a7e6b] ml-auto opacity-60 group-hover:opacity-100 transition-opacity">{t.use}</span>
              </div>
            ))}
          </div>

          <div className="mt-[34px] grid grid-cols-2 gap-[34px]">
            {/* Serif specimen */}
            <div className="p-[34px] bg-white/50 rounded-lg border border-[#e0d9c8] hover:bg-white/70 transition-colors duration-300">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px]">Heading Font</p>
              <p className="text-[29px] text-[#3d3626] leading-[1.3]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                Georgia Serif
              </p>
              <p className="text-[18px] text-[#7a6f5e] mt-[8px] italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="mt-[13px] text-[11px] text-[#a09279]">
                Used for: Display, H1, H2 headings. Conveys tradition, wisdom, literary character.
              </p>
            </div>
            {/* Sans specimen */}
            <div className="p-[34px] bg-white/50 rounded-lg border border-[#e0d9c8] hover:bg-white/70 transition-colors duration-300">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px]">Body Font</p>
              <p className="text-[29px] text-[#3d3626] leading-[1.3]">
                System Sans
              </p>
              <p className="text-[18px] text-[#7a6f5e] mt-[8px]">
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="mt-[13px] text-[11px] text-[#a09279]">
                Used for: Body text, buttons, labels, captions. Clean and legible at all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. SPACING ─── */}
        <section className="mb-[89px]">
          <SectionHeader
            title="Spacing"
            description="Fibonacci sequence (8, 13, 21, 34, 55, 89) for all padding, margins, and gaps. Hover to inspect."
          />

          <div className="space-y-[13px]">
            {spacing.map((s) => (
              <div
                key={s.px}
                className="group flex items-center gap-[21px] cursor-default"
                onMouseEnter={() => setHoveredSpacing(s.px)}
                onMouseLeave={() => setHoveredSpacing(null)}
              >
                <span className={`text-[11px] font-mono w-[34px] text-right shrink-0 transition-colors duration-200 ${hoveredSpacing === s.px ? "text-[#3d3626]" : "text-[#a09279]"}`}>
                  {s.px}px
                </span>
                <span className={`text-[13px] w-[34px] shrink-0 transition-colors duration-200 ${hoveredSpacing === s.px ? "text-[#3d3626] font-medium" : "text-[#5c5240]"}`}>
                  {s.token}
                </span>
                <div className="relative flex-1">
                  <div
                    className="h-[21px] rounded border transition-all duration-300 ease-out"
                    style={{
                      width: hoveredSpacing === s.px ? "100%" : s.px * 3,
                      backgroundColor: hoveredSpacing === s.px ? "#7eaac8" : "#c4d4e4",
                      borderColor: hoveredSpacing === s.px ? "#4a8cc7" : "rgba(126,170,200,0.3)",
                    }}
                  />
                </div>
                <span className={`text-[10px] font-mono text-[#c4b89a] transition-opacity duration-200 ${hoveredSpacing === s.px ? "opacity-100" : "opacity-0"}`}>
                  {s.fib}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-[34px] p-[21px] bg-white/50 rounded-lg border border-[#e0d9c8]">
            <p className="text-[13px] text-[#5c5240] leading-[1.618]">
              <strong className="text-[#3d3626]">Golden Ratio Layout:</strong> Primary content columns split 61.8% / 38.2%. The golden rectangle (aspect ratio 1.618:1) is used for image containers and chart areas. Background elements use golden rectangle subdivisions and the Fibonacci spiral.
            </p>
          </div>
        </section>

        {/* ─── 4. BUTTONS ─── */}
        <section className="mb-[89px]">
          <SectionHeader
            title="Buttons"
            description="Pill-shaped buttons with uppercase tracking. Hover them — they're live."
          />

          <div className="space-y-[34px]">
            {/* Primary */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px]">Primary</p>
              <div className="flex gap-[13px] items-center flex-wrap">
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#f7f5f0] bg-[#5c5240] rounded-full font-medium hover:bg-[#3d3626] active:scale-95 transition-all duration-200 cursor-pointer">
                  Default
                </button>
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#f7f5f0] bg-[#5c5240] rounded-full font-medium opacity-40 cursor-not-allowed">
                  Disabled
                </button>
                <span className="text-[11px] text-[#a09279] ml-[8px]">bg: #5c5240 → #3d3626</span>
              </div>
            </div>

            {/* Secondary */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px]">Secondary</p>
              <div className="flex gap-[13px] items-center flex-wrap">
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#5c5240] border border-[#c4b89a] rounded-full hover:border-[#5c5240] hover:bg-[#5c5240]/5 active:scale-95 transition-all duration-200 cursor-pointer">
                  Default
                </button>
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#5c5240] border border-[#c4b89a] rounded-full opacity-40 cursor-not-allowed">
                  Disabled
                </button>
                <span className="text-[11px] text-[#a09279] ml-[8px]">border: #c4b89a → #5c5240</span>
              </div>
            </div>

            {/* Ghost */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px]">Ghost</p>
              <div className="flex gap-[13px] items-center flex-wrap">
                <button className="px-[21px] py-[8px] text-[13px] tracking-[0.15em] uppercase text-[#7a6f5e] rounded-full hover:bg-[#ede8dc] hover:text-[#3d3626] active:scale-95 transition-all duration-200 cursor-pointer">
                  Default
                </button>
                <span className="text-[11px] text-[#a09279] ml-[8px]">No bg → Parchment on hover</span>
              </div>
            </div>

            {/* Accent buttons */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px]">Accent Variants</p>
              <div className="flex gap-[13px] items-center flex-wrap">
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-white bg-[#4a8cc7] rounded-full font-medium hover:bg-[#2862a0] active:scale-95 transition-all duration-200 cursor-pointer">
                  Aegean
                </button>
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-white bg-[#8a8f6a] rounded-full font-medium hover:bg-[#636843] active:scale-95 transition-all duration-200 cursor-pointer">
                  Sage
                </button>
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-white bg-[#a08840] rounded-full font-medium hover:bg-[#7a682e] active:scale-95 transition-all duration-200 cursor-pointer">
                  Gold
                </button>
                <span className="text-[11px] text-[#a09279] ml-[8px]">Base → Shade 1 on hover</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. CARDS & CONTAINERS ─── */}
        <section className="mb-[89px]">
          <SectionHeader
            title="Cards &amp; Containers"
            description="Rounded containers with subtle borders and translucent backgrounds. Hover to see elevation shift."
          />

          <div className="grid grid-cols-3 gap-[21px]">
            <div className="p-[34px] bg-white/50 rounded-xl border border-[#e0d9c8] transition-all duration-300 hover:bg-white/70 hover:shadow-[0_2px_8px_rgba(90,80,60,0.04)]">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">Flat</p>
              <p className="text-[14px] text-[#5c5240] leading-[1.618]">
                bg: white/50, border: Light Stone. For inline content sections.
              </p>
            </div>
            <div className="p-[34px] bg-white/80 backdrop-blur-sm rounded-xl border border-[#e0d9c8] shadow-[0_4px_24px_rgba(90,80,60,0.06)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_40px_rgba(90,80,60,0.08)]">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">Raised</p>
              <p className="text-[14px] text-[#5c5240] leading-[1.618]">
                bg: white/80 + blur, soft shadow. For feature cards, testimonials.
              </p>
            </div>
            <div className="p-[34px] bg-white/80 backdrop-blur-sm rounded-xl border border-[#e0d9c8] shadow-[0_8px_60px_rgba(90,80,60,0.08)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_16px_80px_rgba(90,80,60,0.12)]">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">Elevated</p>
              <p className="text-[14px] text-[#5c5240] leading-[1.618]">
                Deeper shadow. For modals, floating panels, product mocks.
              </p>
            </div>
          </div>

          {/* Stacked card effect */}
          <div className="mt-[34px]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px]">Stacked (Product Mock)</p>
            <div className="group relative max-w-[340px] cursor-default">
              <div className="absolute inset-x-3 top-[5px] bottom-0 bg-[#ede8dc] rounded-2xl border border-[#e0d9c8] transition-all duration-300 group-hover:inset-x-4 group-hover:top-[7px]" />
              <div className="absolute inset-x-1.5 top-[3px] bottom-0 bg-[#f0ebe0] rounded-2xl border border-[#e0d9c8] transition-all duration-300 group-hover:inset-x-2.5 group-hover:top-[4px]" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-[#e0d9c8] shadow-[0_8px_60px_rgba(90,80,60,0.06)] p-[34px] transition-all duration-300 group-hover:-translate-y-[3px] group-hover:shadow-[0_12px_70px_rgba(90,80,60,0.1)]">
                <p className="text-[14px] text-[#5c5240]">
                  Two offset cards behind the primary create depth. Used for product screenshots and dashboard mocks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6. BORDERS & DIVIDERS ─── */}
        <section className="mb-[89px]">
          <SectionHeader
            title="Borders &amp; Dividers"
            description="Subtle, warm-toned borders that feel organic rather than clinical."
          />

          <div className="space-y-[21px]">
            {[
              { name: "Border Stone", hex: "#d4ccb8", use: "Default borders" },
              { name: "Light Stone", hex: "#e0d9c8", use: "Card borders, subtle dividers" },
              { name: "Parchment", hex: "#ede8dc", use: "Lightest dividers" },
            ].map((b) => (
              <button
                key={b.hex}
                type="button"
                onClick={() => handleCopy(b.hex)}
                className="group flex items-center gap-[21px] w-full text-left cursor-pointer"
              >
                <span className="text-[11px] font-mono text-[#a09279] w-[120px] shrink-0 group-hover:text-[#5c5240] transition-colors">{b.name}</span>
                <div className="flex-1 h-px transition-all duration-300 group-hover:h-[3px] rounded" style={{ backgroundColor: b.hex }} />
                <span className="text-[11px] text-[#8a7e6b] group-hover:text-[#5c5240] transition-colors">{b.hex} — {b.use}</span>
              </button>
            ))}

            {/* Ornamental divider */}
            <div className="pt-[13px]">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px]">Ornamental</p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-[55px] h-px bg-[#d4ccb8]" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e] hover:scale-150 transition-transform duration-200" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#c2ad6e] hover:scale-150 transition-transform duration-200" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e] hover:scale-150 transition-transform duration-200" />
                <div className="w-[55px] h-px bg-[#d4ccb8]" />
              </div>
              <p className="text-center text-[11px] text-[#a09279] mt-[8px]">Sage and gold diamond accents for section breaks</p>
            </div>
          </div>
        </section>

        {/* ─── 7. FORM ELEMENTS ─── */}
        <section className="mb-[89px]">
          <SectionHeader
            title="Form Elements"
            description="Clean inputs with warm borders. Focus states use Aegean blue ring. These are live — click into them."
          />

          <div className="grid grid-cols-2 gap-[34px]">
            <div className="space-y-[21px]">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">
                  Text Input
                </label>
                <input
                  type="text"
                  placeholder="Enter library name..."
                  className="w-full px-[21px] py-[13px] text-[14px] text-[#3d3626] bg-white/50 border border-[#d4ccb8] rounded-lg placeholder:text-[#c4b89a] focus:outline-none focus:ring-2 focus:ring-[#4a8cc7]/30 focus:border-[#7eaac8] transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">
                  Focused State
                </label>
                <input
                  type="text"
                  defaultValue="Springfield Public Library"
                  className="w-full px-[21px] py-[13px] text-[14px] text-[#3d3626] bg-white/50 border border-[#7eaac8] rounded-lg ring-2 ring-[#4a8cc7]/30 focus:outline-none transition-all duration-200"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">
                  Select
                </label>
                <select className="w-full px-[21px] pr-[42px] py-[13px] text-[14px] text-[#3d3626] bg-white/50 border border-[#d4ccb8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a8cc7]/30 focus:border-[#7eaac8] transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%238a7e6b%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat">
                  <option>Small Library</option>
                  <option>District</option>
                  <option>Enterprise</option>
                </select>
              </div>
            </div>

            <div className="space-y-[21px]">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">
                  Textarea
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your library..."
                  className="w-full px-[21px] py-[13px] text-[14px] text-[#3d3626] bg-white/50 border border-[#d4ccb8] rounded-lg placeholder:text-[#c4b89a] focus:outline-none focus:ring-2 focus:ring-[#4a8cc7]/30 focus:border-[#7eaac8] resize-none transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">
                  Options
                </label>
                <div className="space-y-[8px]">
                  <label className="flex items-center gap-[13px] text-[14px] text-[#5c5240] cursor-pointer group">
                    <div className="w-[18px] h-[18px] rounded border border-[#d4ccb8] bg-white/50 flex items-center justify-center group-hover:border-[#8a7e6b] transition-colors">
                      <div className="w-[10px] h-[10px] rounded-sm bg-[#5c5240]" />
                    </div>
                    <span className="group-hover:text-[#3d3626] transition-colors">Patron management</span>
                  </label>
                  <label className="flex items-center gap-[13px] text-[14px] text-[#5c5240] cursor-pointer group">
                    <div className="w-[18px] h-[18px] rounded border border-[#d4ccb8] bg-white/50 group-hover:border-[#8a7e6b] transition-colors" />
                    <span className="group-hover:text-[#3d3626] transition-colors">Media rentals</span>
                  </label>
                  <label className="flex items-center gap-[13px] text-[14px] text-[#5c5240] cursor-pointer group">
                    <div className="w-[18px] h-[18px] rounded-full border border-[#d4ccb8] bg-white/50 flex items-center justify-center group-hover:border-[#7eaac8] transition-colors">
                      <div className="w-[8px] h-[8px] rounded-full bg-[#4a8cc7]" />
                    </div>
                    <span className="group-hover:text-[#3d3626] transition-colors">Annual billing</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8. BADGES & TAGS ─── */}
        <section className="mb-[89px]">
          <SectionHeader
            title="Badges &amp; Tags"
            description="Small status indicators and category labels using accent tint backgrounds."
          />

          <div className="flex gap-[13px] flex-wrap items-center">
            {[
              { label: "Active", bg: "#c4d4e4", text: "#2862a0" },
              { label: "Returned", bg: "#cdd0bc", text: "#636843" },
              { label: "Overdue", bg: "#e0d4b5", text: "#7a682e" },
              { label: "Archived", bg: "#ede8dc", text: "#7a6f5e" },
            ].map((badge) => (
              <span
                key={badge.label}
                className="px-[13px] py-[5px] text-[11px] uppercase tracking-[0.2em] rounded-full cursor-default hover:scale-105 active:scale-95 transition-transform duration-150"
                style={{ backgroundColor: badge.bg, color: badge.text }}
              >
                {badge.label}
              </span>
            ))}
            <span className="px-[13px] py-[5px] text-[11px] uppercase tracking-[0.2em] rounded-full border border-[#d4ccb8] text-[#8a7e6b] cursor-default hover:scale-105 hover:border-[#8a7e6b] active:scale-95 transition-all duration-150">
              Draft
            </span>
          </div>

          <div className="mt-[21px] flex gap-[13px] flex-wrap items-center">
            <span className="text-[11px] text-[#a09279] mr-[3px]">Dot indicators:</span>
            {[
              { label: "Online", color: "#4a8cc7" },
              { label: "Available", color: "#8a8f6a" },
              { label: "Pending", color: "#c2ad6e" },
              { label: "Inactive", color: "#d4ccb8" },
            ].map((dot) => (
              <span key={dot.label} className="group flex items-center gap-[5px] text-[13px] text-[#5c5240] cursor-default">
                <div
                  className="w-[8px] h-[8px] rounded-full group-hover:scale-150 transition-transform duration-200"
                  style={{ backgroundColor: dot.color }}
                />
                {dot.label}
              </span>
            ))}
          </div>
        </section>

        {/* ─── 9. SHADOWS ─── */}
        <section className="mb-[89px]">
          <SectionHeader
            title="Shadows"
            description="Warm-toned shadows using rgba(90, 80, 60, α). Hover to intensify."
          />

          <div className="grid grid-cols-3 gap-[21px]">
            {[
              { level: 1, shadow: "0_2px_8px", alpha: "0.04", hover: "0_4px_16px_rgba(90,80,60,0.08)" },
              { level: 2, shadow: "0_4px_24px", alpha: "0.06", hover: "0_8px_40px_rgba(90,80,60,0.1)" },
              { level: 3, shadow: "0_8px_60px", alpha: "0.08", hover: "0_16px_80px_rgba(90,80,60,0.14)" },
            ].map((s) => (
              <div
                key={s.level}
                className={`p-[34px] bg-white rounded-xl text-center transition-all duration-300 cursor-default hover:-translate-y-[3px] shadow-[${s.shadow}_rgba(90,80,60,${s.alpha})] hover:shadow-[${s.hover}]`}
                style={{
                  boxShadow: `${s.shadow.replace(/_/g, " ").replace("_", " ")} rgba(90,80,60,${s.alpha})`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = s.hover.replace(/_/g, " ");
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `${s.shadow.replace(/_/g, " ")} rgba(90,80,60,${s.alpha})`;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <p className="text-[13px] text-[#5c5240] font-medium">Level {s.level}</p>
                <p className="text-[11px] text-[#a09279] font-mono mt-[5px]">{s.shadow.replace(/_/g, " ")}</p>
                <p className="text-[11px] text-[#a09279] mt-[3px]">α = {s.alpha}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 10. BACKGROUND PATTERNS ─── */}
        <section className="mb-[89px]">
          <SectionHeader
            title="Background Patterns"
            description="Layered textures that add depth without competing with content. Hover to boost visibility."
          />

          <div className="grid grid-cols-2 gap-[21px]">
            {/* Paper texture */}
            <div className="group relative h-[180px] rounded-xl border border-[#e0d9c8] overflow-hidden cursor-default">
              <div
                className="absolute inset-0 opacity-[0.4] transition-opacity duration-500 group-hover:opacity-[0.8]"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.25'/%3E%3C/svg%3E\")",
                  backgroundSize: "200px 200px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[13px] text-[#8a7e6b]">
                  Paper noise — <span className="font-mono group-hover:text-[#5c5240] transition-colors">0.4 → 0.8</span>
                </p>
              </div>
            </div>

            {/* Column grid */}
            <div className="group relative h-[180px] rounded-xl border border-[#e0d9c8] overflow-hidden bg-[#f7f5f0] cursor-default">
              <div className="absolute inset-0 flex justify-center px-[21px]">
                <div className="w-full flex justify-between">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-px h-full bg-[#8a7e6b] opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.25]" />
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[13px] text-[#8a7e6b]">
                  5-column grid — <span className="font-mono group-hover:text-[#5c5240] transition-colors">0.07 → 0.25</span>
                </p>
              </div>
            </div>

            {/* Golden rectangle */}
            <div className="group relative h-[180px] rounded-xl border border-[#e0d9c8] overflow-hidden bg-[#f7f5f0] col-span-2 cursor-default">
              <div className="absolute inset-0 flex justify-center items-center">
                <svg
                  viewBox="0 0 1000 618"
                  className="w-full max-w-[500px] opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.25]"
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
              <div className="absolute bottom-[13px] left-0 right-0 text-center">
                <p className="text-[13px] text-[#8a7e6b]">
                  Golden rectangle + spiral — <span className="font-mono group-hover:text-[#5c5240] transition-colors">0.08 → 0.25</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 11. ACCENT USAGE RULES ─── */}
        <section className="mb-[55px]">
          <SectionHeader
            title="Accent Usage Rules"
            description="Guidelines for applying accent colors to maintain the calm, scholarly aesthetic."
          />

          <div className="space-y-[13px]">
            {[
              { rule: "Accents are ornamental, never structural", detail: "Use for dots, small icons, borders, not backgrounds or large areas.", dot: "#4a8cc7" },
              { rule: "One accent per visual group", detail: "Don't mix Aegean + Sage + Gold in the same card or component.", dot: "#8a8f6a" },
              { rule: "Base colors for interactive elements", detail: "Tints for backgrounds (badges, hover states). Shades for text on tinted backgrounds.", dot: "#c2ad6e" },
              { rule: "Neutrals carry the weight", detail: "90% of the page should be neutral palette. Accents are 10% or less.", dot: "#a09279" },
              { rule: "Georgia serif for headings only", detail: "Never use serif for body text, buttons, labels, or navigation.", dot: "#4a8cc7" },
              { rule: "Fibonacci gaps, not arbitrary", detail: "Every gap, padding, and margin should be a Fibonacci value: 8, 13, 21, 34, 55, or 89px.", dot: "#8a8f6a" },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex gap-[13px] items-start p-[13px] rounded-lg border border-[#e0d9c8] bg-white/30 hover:bg-white/60 hover:border-[#d4ccb8] transition-all duration-200 cursor-default"
              >
                <div
                  className="w-[5px] h-[5px] rounded-full mt-[6px] shrink-0 transition-transform duration-200 group-hover:scale-[2]"
                  style={{ backgroundColor: item.dot }}
                />
                <div>
                  <p className="text-[14px] text-[#3d3626] font-medium">{item.rule}</p>
                  <p className="text-[13px] text-[#8a7e6b] mt-[3px] group-hover:text-[#5c5240] transition-colors">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer ornament */}
        <div className="flex items-center justify-center gap-3 pt-[34px] pb-[21px]">
          <div className="w-[34px] h-px bg-[#d4ccb8]" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e] hover:scale-150 transition-transform duration-200" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#c2ad6e] hover:scale-150 transition-transform duration-200" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e] hover:scale-150 transition-transform duration-200" />
          <div className="w-[34px] h-px bg-[#d4ccb8]" />
        </div>
      </div>
    </div>
  );
}
