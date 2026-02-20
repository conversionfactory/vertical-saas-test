/*
  STYLE GUIDE — LibraryOS Marketing Site
  ───────────────────────────────────────
  Parthenon-inspired palette · Golden ratio typography · Fibonacci spacing
*/

const palette = {
  neutral: [
    { hex: "#ffffff", name: "Marble Highlight" },
    { hex: "#f7f5f0", name: "Warm White" },
    { hex: "#ede8dc", name: "Parchment" },
    { hex: "#e0d9c8", name: "Light Stone" },
    { hex: "#d4ccb8", name: "Border Stone" },
    { hex: "#c4b89a", name: "Golden Taupe" },
    { hex: "#a09279", name: "Mid Taupe" },
    { hex: "#8a7e6b", name: "Column Shadow" },
    { hex: "#7a6f5e", name: "Deep Taupe" },
    { hex: "#5c5240", name: "Dark Stone" },
    { hex: "#3d3626", name: "Deep Shadow" },
    { hex: "#2a2419", name: "Near Black" },
    { hex: "#1a160f", name: "Ink" },
  ],
  aegean: [
    { hex: "#c4d4e4", name: "Tint 2" },
    { hex: "#7eaac8", name: "Tint 1" },
    { hex: "#4a8cc7", name: "Base", isBase: true },
    { hex: "#2862a0", name: "Shade 1" },
    { hex: "#1a4570", name: "Shade 2" },
  ],
  sage: [
    { hex: "#cdd0bc", name: "Tint 2" },
    { hex: "#a6ab8e", name: "Tint 1" },
    { hex: "#8a8f6a", name: "Base", isBase: true },
    { hex: "#636843", name: "Shade 1" },
    { hex: "#444830", name: "Shade 2" },
  ],
  gold: [
    { hex: "#e0d4b5", name: "Tint 2" },
    { hex: "#d4c494", name: "Tint 1" },
    { hex: "#c2ad6e", name: "Base", isBase: true },
    { hex: "#a08840", name: "Shade 1" },
    { hex: "#7a682e", name: "Shade 2" },
  ],
};

// Golden ratio type scale: base 11px × φ^n
const typeScale = [
  { size: 76, name: "Display", use: "Hero headlines only" },
  { size: 47, name: "H1", use: "Page titles" },
  { size: 29, name: "H2", use: "Section headings" },
  { size: 18, name: "H3 / Body Large", use: "Subheadings, lead paragraphs" },
  { size: 14, name: "Body", use: "Default body text" },
  { size: 13, name: "Body Small", use: "Buttons, captions" },
  { size: 11, name: "Caption", use: "Labels, overlines, fine print" },
  { size: 8, name: "Micro", use: "Badges, swatch labels" },
];

// Fibonacci spacing
const spacing = [
  { px: 8, token: "xs" },
  { px: 13, token: "sm" },
  { px: 21, token: "md" },
  { px: 34, token: "lg" },
  { px: 55, token: "xl" },
  { px: 89, token: "2xl" },
];

function Swatch({ hex, name, isBase, labelColor }: { hex: string; name: string; isBase?: boolean; labelColor?: string }) {
  const isDark = ["#5c5240","#3d3626","#2a2419","#1a160f","#1a4570","#2862a0","#636843","#444830","#7a682e","#a08840","#7a6f5e","#8a7e6b"].includes(hex);
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`w-[60px] h-[60px] rounded-lg border ${isBase ? "ring-2 ring-offset-2 ring-offset-[#f7f5f0]" : ""}`}
        style={{
          backgroundColor: hex,
          borderColor: isDark ? "transparent" : "#d4ccb8",
          ...(isBase ? { ringColor: labelColor } : {}),
        }}
      />
      <span className="text-[10px] font-mono text-[#7a6f5e]">{hex}</span>
      <span className="text-[9px] text-[#a09279] text-center leading-tight max-w-[60px]">{name}</span>
    </div>
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

export default function StyleGuide() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/* Paper texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

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
            description="Derived from the Parthenon — warm neutrals anchored by three accent families. Use accents sparingly to draw the eye."
          />

          {/* Neutrals */}
          <div className="mb-[55px]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px] font-medium">
              Neutral — Marble to Ink
            </p>
            <div className="flex gap-[8px] flex-wrap">
              {palette.neutral.map((c) => (
                <Swatch key={c.hex} hex={c.hex} name={c.name} />
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
                      <Swatch key={c.hex} hex={c.hex} name={c.name} isBase={c.isBase} labelColor={baseColor} />
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

          <div className="space-y-[21px]">
            {typeScale.map((t) => (
              <div key={t.size} className="flex items-baseline gap-[21px] border-b border-[#e0d9c8] pb-[13px]">
                <span className="text-[11px] font-mono text-[#a09279] w-[55px] shrink-0 text-right">{t.size}px</span>
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
                <span className="text-[13px] text-[#8a7e6b] ml-auto">{t.use}</span>
              </div>
            ))}
          </div>

          <div className="mt-[34px] grid grid-cols-2 gap-[34px]">
            {/* Serif specimen */}
            <div className="p-[34px] bg-white/50 rounded-lg border border-[#e0d9c8]">
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
            <div className="p-[34px] bg-white/50 rounded-lg border border-[#e0d9c8]">
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
            description="Fibonacci sequence (8, 13, 21, 34, 55, 89) for all padding, margins, and gaps. Creates natural, harmonious rhythm."
          />

          <div className="space-y-[13px]">
            {spacing.map((s) => (
              <div key={s.px} className="flex items-center gap-[21px]">
                <span className="text-[11px] font-mono text-[#a09279] w-[34px] text-right shrink-0">{s.px}px</span>
                <span className="text-[13px] text-[#5c5240] w-[34px] shrink-0">{s.token}</span>
                <div
                  className="h-[21px] rounded bg-[#c4d4e4] border border-[#7eaac8]/30"
                  style={{ width: s.px * 3 }}
                />
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
            description="Pill-shaped buttons with uppercase tracking. Three tiers: primary (filled), secondary (outlined), and ghost (text-only)."
          />

          <div className="space-y-[34px]">
            {/* Primary */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px]">Primary</p>
              <div className="flex gap-[13px] items-center flex-wrap">
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#f7f5f0] bg-[#5c5240] rounded-full font-medium">
                  Default
                </button>
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#f7f5f0] bg-[#3d3626] rounded-full font-medium">
                  Hover
                </button>
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#f7f5f0] bg-[#5c5240] rounded-full font-medium opacity-50">
                  Disabled
                </button>
                <span className="text-[11px] text-[#a09279] ml-[13px]">bg: Dark Stone #5c5240 → Deep Shadow #3d3626</span>
              </div>
            </div>

            {/* Secondary */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px]">Secondary</p>
              <div className="flex gap-[13px] items-center flex-wrap">
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#5c5240] border border-[#c4b89a] rounded-full">
                  Default
                </button>
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#5c5240] border border-[#5c5240] rounded-full">
                  Hover
                </button>
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-[#5c5240] border border-[#c4b89a] rounded-full opacity-50">
                  Disabled
                </button>
                <span className="text-[11px] text-[#a09279] ml-[13px]">border: Golden Taupe #c4b89a → Dark Stone #5c5240</span>
              </div>
            </div>

            {/* Ghost */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px]">Ghost</p>
              <div className="flex gap-[13px] items-center flex-wrap">
                <button className="px-[21px] py-[8px] text-[13px] tracking-[0.15em] uppercase text-[#7a6f5e] rounded-full">
                  Default
                </button>
                <button className="px-[21px] py-[8px] text-[13px] tracking-[0.15em] uppercase text-[#3d3626] bg-[#ede8dc] rounded-full">
                  Hover
                </button>
                <span className="text-[11px] text-[#a09279] ml-[13px]">No background, text only. Subtle bg on hover.</span>
              </div>
            </div>

            {/* Accent buttons */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px]">Accent Variants</p>
              <div className="flex gap-[13px] items-center flex-wrap">
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-white bg-[#4a8cc7] rounded-full font-medium">
                  Aegean
                </button>
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-white bg-[#8a8f6a] rounded-full font-medium">
                  Sage
                </button>
                <button className="px-[34px] py-[13px] text-[13px] tracking-[0.15em] uppercase text-white bg-[#a08840] rounded-full font-medium">
                  Gold
                </button>
                <span className="text-[11px] text-[#a09279] ml-[13px]">Use sparingly — accent base colors only.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. CARDS & CONTAINERS ─── */}
        <section className="mb-[89px]">
          <SectionHeader
            title="Cards &amp; Containers"
            description="Rounded containers with subtle borders and translucent backgrounds. Three elevation levels."
          />

          <div className="grid grid-cols-3 gap-[21px]">
            {/* Flat */}
            <div className="p-[34px] bg-white/50 rounded-xl border border-[#e0d9c8]">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">Flat</p>
              <p className="text-[14px] text-[#5c5240] leading-[1.618]">
                bg: white/50, border: Light Stone. For inline content sections.
              </p>
            </div>
            {/* Raised */}
            <div className="p-[34px] bg-white/80 backdrop-blur-sm rounded-xl border border-[#e0d9c8] shadow-[0_4px_24px_rgba(90,80,60,0.06)]">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">Raised</p>
              <p className="text-[14px] text-[#5c5240] leading-[1.618]">
                bg: white/80 + blur, soft shadow. For feature cards, testimonials.
              </p>
            </div>
            {/* Elevated */}
            <div className="p-[34px] bg-white/80 backdrop-blur-sm rounded-xl border border-[#e0d9c8] shadow-[0_8px_60px_rgba(90,80,60,0.08)]">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">Elevated</p>
              <p className="text-[14px] text-[#5c5240] leading-[1.618]">
                Deeper shadow. For modals, floating panels, product mocks.
              </p>
            </div>
          </div>

          {/* Stacked card effect */}
          <div className="mt-[34px]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px]">Stacked (Product Mock)</p>
            <div className="relative max-w-[340px]">
              <div className="absolute inset-x-3 top-[5px] bottom-0 bg-[#ede8dc] rounded-2xl border border-[#e0d9c8]" />
              <div className="absolute inset-x-1.5 top-[3px] bottom-0 bg-[#f0ebe0] rounded-2xl border border-[#e0d9c8]" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-[#e0d9c8] shadow-[0_8px_60px_rgba(90,80,60,0.06)] p-[34px]">
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
            <div className="flex items-center gap-[21px]">
              <span className="text-[11px] font-mono text-[#a09279] w-[120px] shrink-0">Border Stone</span>
              <div className="flex-1 h-px bg-[#d4ccb8]" />
              <span className="text-[11px] text-[#8a7e6b]">#d4ccb8 — Default borders</span>
            </div>
            <div className="flex items-center gap-[21px]">
              <span className="text-[11px] font-mono text-[#a09279] w-[120px] shrink-0">Light Stone</span>
              <div className="flex-1 h-px bg-[#e0d9c8]" />
              <span className="text-[11px] text-[#8a7e6b]">#e0d9c8 — Card borders, subtle dividers</span>
            </div>
            <div className="flex items-center gap-[21px]">
              <span className="text-[11px] font-mono text-[#a09279] w-[120px] shrink-0">Parchment</span>
              <div className="flex-1 h-px bg-[#ede8dc]" />
              <span className="text-[11px] text-[#8a7e6b]">#ede8dc — Lightest dividers</span>
            </div>

            {/* Ornamental divider */}
            <div className="pt-[13px]">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[13px]">Ornamental</p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-[55px] h-px bg-[#d4ccb8]" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e]" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#c2ad6e]" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e]" />
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
            description="Clean inputs with warm borders. Focus states use Aegean blue ring."
          />

          <div className="grid grid-cols-2 gap-[34px]">
            <div className="space-y-[21px]">
              {/* Text input */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">
                  Text Input
                </label>
                <input
                  type="text"
                  placeholder="Enter library name..."
                  className="w-full px-[21px] py-[13px] text-[14px] text-[#3d3626] bg-white/50 border border-[#d4ccb8] rounded-lg placeholder:text-[#c4b89a] focus:outline-none focus:ring-2 focus:ring-[#4a8cc7]/30 focus:border-[#7eaac8]"
                  readOnly
                />
              </div>
              {/* Focused state */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">
                  Focused State
                </label>
                <input
                  type="text"
                  defaultValue="Springfield Public Library"
                  className="w-full px-[21px] py-[13px] text-[14px] text-[#3d3626] bg-white/50 border border-[#7eaac8] rounded-lg ring-2 ring-[#4a8cc7]/30 focus:outline-none"
                  readOnly
                />
              </div>
              {/* Select */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">
                  Select
                </label>
                <select className="w-full px-[21px] py-[13px] text-[14px] text-[#3d3626] bg-white/50 border border-[#d4ccb8] rounded-lg focus:outline-none">
                  <option>Small Library</option>
                  <option>District</option>
                  <option>Enterprise</option>
                </select>
              </div>
            </div>

            <div className="space-y-[21px]">
              {/* Textarea */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">
                  Textarea
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your library..."
                  className="w-full px-[21px] py-[13px] text-[14px] text-[#3d3626] bg-white/50 border border-[#d4ccb8] rounded-lg placeholder:text-[#c4b89a] focus:outline-none focus:ring-2 focus:ring-[#4a8cc7]/30 focus:border-[#7eaac8] resize-none"
                  readOnly
                />
              </div>
              {/* Checkbox & Radio */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.3em] text-[#a09279] mb-[8px]">
                  Options
                </label>
                <div className="space-y-[8px]">
                  <label className="flex items-center gap-[13px] text-[14px] text-[#5c5240] cursor-pointer">
                    <div className="w-[18px] h-[18px] rounded border border-[#d4ccb8] bg-white/50 flex items-center justify-center">
                      <div className="w-[10px] h-[10px] rounded-sm bg-[#5c5240]" />
                    </div>
                    Patron management
                  </label>
                  <label className="flex items-center gap-[13px] text-[14px] text-[#5c5240] cursor-pointer">
                    <div className="w-[18px] h-[18px] rounded border border-[#d4ccb8] bg-white/50" />
                    Media rentals
                  </label>
                  <label className="flex items-center gap-[13px] text-[14px] text-[#5c5240] cursor-pointer">
                    <div className="w-[18px] h-[18px] rounded-full border border-[#d4ccb8] bg-white/50 flex items-center justify-center">
                      <div className="w-[8px] h-[8px] rounded-full bg-[#4a8cc7]" />
                    </div>
                    Annual billing
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
            <span className="px-[13px] py-[5px] text-[11px] uppercase tracking-[0.2em] rounded-full bg-[#c4d4e4] text-[#2862a0]">
              Active
            </span>
            <span className="px-[13px] py-[5px] text-[11px] uppercase tracking-[0.2em] rounded-full bg-[#cdd0bc] text-[#636843]">
              Returned
            </span>
            <span className="px-[13px] py-[5px] text-[11px] uppercase tracking-[0.2em] rounded-full bg-[#e0d4b5] text-[#7a682e]">
              Overdue
            </span>
            <span className="px-[13px] py-[5px] text-[11px] uppercase tracking-[0.2em] rounded-full bg-[#ede8dc] text-[#7a6f5e]">
              Archived
            </span>
            <span className="px-[13px] py-[5px] text-[11px] uppercase tracking-[0.2em] rounded-full border border-[#d4ccb8] text-[#8a7e6b]">
              Draft
            </span>
          </div>

          <div className="mt-[21px] flex gap-[8px] flex-wrap items-center">
            <span className="text-[11px] text-[#a09279] mr-[8px]">Dot indicators:</span>
            <span className="flex items-center gap-[5px] text-[13px] text-[#5c5240]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#4a8cc7]" /> Online
            </span>
            <span className="flex items-center gap-[5px] text-[13px] text-[#5c5240]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#8a8f6a]" /> Available
            </span>
            <span className="flex items-center gap-[5px] text-[13px] text-[#5c5240]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#c2ad6e]" /> Pending
            </span>
            <span className="flex items-center gap-[5px] text-[13px] text-[#5c5240]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#d4ccb8]" /> Inactive
            </span>
          </div>
        </section>

        {/* ─── 9. SHADOWS ─── */}
        <section className="mb-[89px]">
          <SectionHeader
            title="Shadows"
            description="Warm-toned shadows using rgba(90, 80, 60, α). Three levels of elevation."
          />

          <div className="grid grid-cols-3 gap-[21px]">
            <div className="p-[34px] bg-white rounded-xl shadow-[0_2px_8px_rgba(90,80,60,0.04)] text-center">
              <p className="text-[13px] text-[#5c5240] font-medium">Level 1</p>
              <p className="text-[11px] text-[#a09279] font-mono mt-[5px]">0 2px 8px</p>
              <p className="text-[11px] text-[#a09279] mt-[3px]">α = 0.04</p>
            </div>
            <div className="p-[34px] bg-white rounded-xl shadow-[0_4px_24px_rgba(90,80,60,0.06)] text-center">
              <p className="text-[13px] text-[#5c5240] font-medium">Level 2</p>
              <p className="text-[11px] text-[#a09279] font-mono mt-[5px]">0 4px 24px</p>
              <p className="text-[11px] text-[#a09279] mt-[3px]">α = 0.06</p>
            </div>
            <div className="p-[34px] bg-white rounded-xl shadow-[0_8px_60px_rgba(90,80,60,0.08)] text-center">
              <p className="text-[13px] text-[#5c5240] font-medium">Level 3</p>
              <p className="text-[11px] text-[#a09279] font-mono mt-[5px]">0 8px 60px</p>
              <p className="text-[11px] text-[#a09279] mt-[3px]">α = 0.08</p>
            </div>
          </div>
        </section>

        {/* ─── 10. BACKGROUND PATTERNS ─── */}
        <section className="mb-[89px]">
          <SectionHeader
            title="Background Patterns"
            description="Layered textures that add depth without competing with content."
          />

          <div className="grid grid-cols-2 gap-[21px]">
            {/* Paper texture */}
            <div className="relative h-[180px] rounded-xl border border-[#e0d9c8] overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
                  backgroundSize: "200px 200px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[13px] text-[#8a7e6b]">Paper noise texture — 0.4 opacity</p>
              </div>
            </div>

            {/* Column grid */}
            <div className="relative h-[180px] rounded-xl border border-[#e0d9c8] overflow-hidden bg-[#f7f5f0]">
              <div className="absolute inset-0 flex justify-center px-[21px]">
                <div className="w-full flex justify-between">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-px h-full bg-[#8a7e6b] opacity-[0.07]" />
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[13px] text-[#8a7e6b]">5-column grid — 0.07 opacity</p>
              </div>
            </div>

            {/* Golden rectangle */}
            <div className="relative h-[180px] rounded-xl border border-[#e0d9c8] overflow-hidden bg-[#f7f5f0] col-span-2">
              <div className="absolute inset-0 flex justify-center items-center">
                <svg
                  viewBox="0 0 1000 618"
                  className="w-full max-w-[500px] opacity-[0.08]"
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
                <p className="text-[13px] text-[#8a7e6b]">Golden rectangle subdivisions + Fibonacci spiral — 0.08 opacity</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 11. ICON & ACCENT USAGE ─── */}
        <section className="mb-[55px]">
          <SectionHeader
            title="Accent Usage Rules"
            description="Guidelines for applying accent colors to maintain the calm, scholarly aesthetic."
          />

          <div className="space-y-[13px]">
            {[
              { rule: "Accents are ornamental, never structural", detail: "Use for dots, small icons, borders, not backgrounds or large areas." },
              { rule: "One accent per visual group", detail: "Don't mix Aegean + Sage + Gold in the same card or component." },
              { rule: "Base colors for interactive elements", detail: "Tints for backgrounds (badges, hover states). Shades for text on tinted backgrounds." },
              { rule: "Neutrals carry the weight", detail: "90% of the page should be neutral palette. Accents are 10% or less." },
              { rule: "Georgia serif for headings only", detail: "Never use serif for body text, buttons, labels, or navigation." },
              { rule: "Fibonacci gaps, not arbitrary", detail: "Every gap, padding, and margin should be a Fibonacci value: 8, 13, 21, 34, 55, or 89px." },
            ].map((item, i) => (
              <div key={i} className="flex gap-[13px] items-start p-[13px] rounded-lg border border-[#e0d9c8] bg-white/30">
                <div className="w-[5px] h-[5px] rounded-full bg-[#a6ab8e] mt-[6px] shrink-0" />
                <div>
                  <p className="text-[14px] text-[#3d3626] font-medium">{item.rule}</p>
                  <p className="text-[13px] text-[#8a7e6b] mt-[3px]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer ornament */}
        <div className="flex items-center justify-center gap-3 pt-[34px] pb-[21px]">
          <div className="w-[34px] h-px bg-[#d4ccb8]" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e]" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#c2ad6e]" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#a6ab8e]" />
          <div className="w-[34px] h-px bg-[#d4ccb8]" />
        </div>
      </div>
    </div>
  );
}
