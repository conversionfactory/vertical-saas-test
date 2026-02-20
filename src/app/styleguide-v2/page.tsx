// CleanPetList — V2 Design System
// Theme: Cinematic Forest Night

export default function StyleGuideV2() {
  return (
    <div style={{ background: "#050F09" }} className="min-h-screen text-white">
      <div className="max-w-5xl mx-auto px-8 py-16 space-y-20">

        {/* ── HEADER ── */}
        <div
          className="pb-10"
          style={{ borderBottom: "1px solid rgba(168,230,163,0.1)" }}
        >
          <span
            className="text-xs font-semibold tracking-widest uppercase block mb-4"
            style={{ color: "rgba(168,230,163,0.6)" }}
          >
            Design System · V2
          </span>
          <h1
            className="font-display font-bold text-white mb-3"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            Clean<span style={{ color: "#A8E6A3" }}>Pet</span>List
          </h1>
          <p style={{ color: "rgba(255,255,255,0.42)" }} className="text-lg">
            Cinematic Forest Night — colors, glass components, typography, and patterns.
          </p>
        </div>

        {/* ── THEME OVERVIEW ── */}
        <section className="space-y-6">
          <SectionLabel>Theme Overview</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              className="rounded-2xl p-5 space-y-2"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(168,230,163,0.1)",
              }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(168,230,163,0.6)" }}>Mood</p>
              <p className="text-white font-medium">Cinematic · Forest Night · Premium</p>
            </div>
            <div
              className="rounded-2xl p-5 space-y-2"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(168,230,163,0.1)",
              }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(168,230,163,0.6)" }}>Accent</p>
              <p className="text-white font-medium">Mint #A8E6A3 · Amber #C4813A</p>
            </div>
            <div
              className="rounded-2xl p-5 space-y-2"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(168,230,163,0.1)",
              }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(168,230,163,0.6)" }}>Texture</p>
              <p className="text-white font-medium">Backdrop-blur · Gradient overlays</p>
            </div>
          </div>
        </section>

        {/* ── BACKGROUND DEPTH SCALE ── */}
        <section className="space-y-6">
          <SectionLabel>Background Depth Scale</SectionLabel>
          <TokenNote>Sections alternate through this scale to create depth without borders.</TokenNote>
          <div className="space-y-2">
            {[
              { name: "Forest / Darkest", hex: "#030A05", usage: "Footer" },
              { name: "Forest / Base", hex: "#050F09", usage: "Founder Note, page root" },
              { name: "Forest / 800", hex: "#071410", usage: "Who It's For" },
              { name: "Forest / 700", hex: "#081410", usage: "What You Get" },
              { name: "Forest / 600", hex: "#0A1810", usage: "FAQ, Mission Bar" },
              { name: "Forest / 500", hex: "#0B1C12", usage: "How It Works" },
              { name: "Forest / 400", hex: "#0D2018", usage: "Problem section" },
            ].map((bg) => (
              <div
                key={bg.hex}
                className="flex items-center gap-4 rounded-xl px-4 py-3"
                style={{ background: bg.hex, border: "1px solid rgba(168,230,163,0.06)" }}
              >
                <div
                  className="shrink-0 w-6 h-6 rounded-md"
                  style={{ background: bg.hex, border: "1px solid rgba(255,255,255,0.1)" }}
                />
                <span className="font-mono text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {bg.hex}
                </span>
                <span className="text-sm font-medium text-white">{bg.name}</span>
                <span className="ml-auto text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {bg.usage}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── COLOR PALETTE ── */}
        <section className="space-y-8">
          <SectionLabel>Color Palette</SectionLabel>

          {/* Mint */}
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-white">Mint Green — Primary Accent</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
                Used for labels, badges, borders, icon containers, step numbers, and highlights
              </p>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {[
                { label: "Solid", hex: "#A8E6A3", bg: "#A8E6A3", textDark: true },
                { label: "Dim (65%)", hex: "rgba(168,230,163,0.65)", bg: "rgba(168,230,163,0.65)", textDark: false },
                { label: "Ghost (15%)", hex: "rgba(168,230,163,0.15)", bg: "rgba(168,230,163,0.15)", textDark: false },
                { label: "Border (25%)", hex: "rgba(168,230,163,0.25)", bg: "rgba(168,230,163,0.25)", textDark: false },
                { label: "Tint (08%)", hex: "rgba(168,230,163,0.08)", bg: "rgba(168,230,163,0.08)", textDark: false },
              ].map((s) => (
                <div key={s.label} className="space-y-2">
                  <div
                    className="h-16 rounded-xl"
                    style={{
                      background: s.bg,
                      border: "1px solid rgba(168,230,163,0.15)",
                    }}
                  />
                  <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Amber */}
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-white">Warm Amber — Secondary Accent</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
                Used sparingly for warmth, emphasis, and contrast against mint
              </p>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "#C4813A", bg: "#C4813A" },
                { label: "#E0922F", bg: "#E0922F" },
                { label: "rgba 40%", bg: "rgba(196,129,58,0.4)" },
                { label: "rgba 12%", bg: "rgba(196,129,58,0.12)" },
              ].map((s) => (
                <div key={s.label} className="space-y-2">
                  <div
                    className="h-14 rounded-xl"
                    style={{
                      background: s.bg,
                      border: "1px solid rgba(196,129,58,0.2)",
                    }}
                  />
                  <p className="text-xs text-center font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text levels */}
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-white">Text Opacity Levels</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
                All text is white — opacity controls hierarchy
              </p>
            </div>
            <div
              className="rounded-2xl p-6 space-y-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(168,230,163,0.08)",
              }}
            >
              {[
                { label: "Primary / Headlines", color: "rgba(255,255,255,1.0)", desc: "100% — hero h1, section h2" },
                { label: "Secondary / Body", color: "rgba(255,255,255,0.62)", desc: "62% — body copy, card descriptions" },
                { label: "Tertiary / Supporting", color: "rgba(255,255,255,0.48)", desc: "48% — FAQ answers, step body" },
                { label: "Muted / Captions", color: "rgba(255,255,255,0.35)", desc: "35% — disclaimers, placeholders" },
                { label: "Ghost / Borders", color: "rgba(255,255,255,0.15)", desc: "15% — decorative, dividers" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-4">
                  <p className="text-base font-medium w-56 shrink-0" style={{ color: t.color }}>
                    {t.label}
                  </p>
                  <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.28)" }}>
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TYPOGRAPHY ── */}
        <section className="space-y-8">
          <SectionLabel>Typography</SectionLabel>

          <div className="space-y-3">
            <TokenNote>Display — Lora (serif) · Hero headlines, section h2, blockquotes</TokenNote>
            <div
              className="rounded-2xl p-8 space-y-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(168,230,163,0.08)",
              }}
            >
              <div>
                <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Hero / clamp(2.8rem → 4.4rem) · font-display bold · tracking -0.025em
                </p>
                <p
                  className="text-white leading-tight"
                  style={{
                    fontFamily: "var(--font-lora)",
                    fontWeight: 700,
                    fontSize: "clamp(2.8rem, 5vw, 4.4rem)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  Clean products.{" "}
                  <span style={{ color: "#A8E6A3" }}>Happy pets.</span>
                </p>
              </div>
              <div>
                <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                  H2 / clamp(1.9rem → 3rem) · font-display bold
                </p>
                <p
                  className="font-display font-bold text-white leading-tight"
                  style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
                >
                  Everything your pet needs.
                </p>
              </div>
              <div>
                <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Blockquote / text-3xl · font-display medium · used in FounderNote
                </p>
                <blockquote
                  className="font-display text-3xl font-medium text-white leading-relaxed"
                >
                  &ldquo;There&apos;s no shortage of pet products. There&apos;s a shortage of honest
                  information about them.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <TokenNote>Sans — Geist Sans · Body, labels, UI chrome</TokenNote>
            <div
              className="rounded-2xl p-8 space-y-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(168,230,163,0.08)",
              }}
            >
              {[
                { label: "Body Large / 18px", size: "text-lg", color: "rgba(255,255,255,0.62)", text: "Every week, we find and vet the best organic, natural, and toxin-free pet products." },
                { label: "Body / 16px", size: "text-base", color: "rgba(255,255,255,0.52)", text: "We don't just say a product is clean — we show you why. What's in it, what's not." },
                { label: "Small / 14px", size: "text-sm", color: "rgba(255,255,255,0.38)", text: "No spam. No greenwashing. Unsubscribe anytime." },
                { label: "Label / 12px · tracking-widest · uppercase", size: "text-xs", color: "#A8E6A3", text: "Free Weekly Newsletter" },
              ].map((t) => (
                <div key={t.label}>
                  <p className="text-xs mb-1.5" style={{ color: "rgba(255,255,255,0.28)" }}>
                    {t.label}
                  </p>
                  <p
                    className={`${t.size} font-medium tracking-widest uppercase`}
                    style={{ color: t.color, letterSpacing: t.size === "text-xs" ? "0.12em" : undefined, textTransform: t.size === "text-xs" ? "uppercase" : "none" }}
                  >
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GLASS COMPONENTS ── */}
        <section className="space-y-8">
          <SectionLabel>Glass Components</SectionLabel>
          <TokenNote>
            The signature v2 pattern — dark frosted glass with mint-tinted borders. Uses
            backdrop-blur + semi-transparent backgrounds.
          </TokenNote>

          {/* Glass card */}
          <div className="space-y-3">
            <TokenNote>Glass Card — benefit cards, checklist items</TokenNote>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "📬", title: "Clean picks, weekly", body: "One email. Real recommendations. No noise." },
                { icon: "🏷️", title: "Ingredient breakdowns", body: "We show you exactly what's in it and what's not." },
                { icon: "🗂️", title: "Directory early access", body: "Get in before the public launch." },
              ].map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 space-y-3"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(168,230,163,0.09)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{
                      background: "rgba(168,230,163,0.09)",
                      border: "1px solid rgba(168,230,163,0.18)",
                    }}
                  >
                    {c.icon}
                  </div>
                  <h3 className="font-semibold text-white text-base leading-snug">{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-xl p-4 font-mono text-xs" style={{ background: "rgba(0,0,0,0.4)", color: "#A8E6A3" }}>
              <span style={{ color: "rgba(255,255,255,0.3)" }}>// Glass Card token</span>
              <br />
              background: rgba(255,255,255,0.03)
              <br />
              border: 1px solid rgba(168,230,163,0.09)
            </div>
          </div>

          {/* Glass form */}
          <div className="space-y-3">
            <TokenNote>Glass Form — hero email capture, FinalCTA</TokenNote>
            <div className="max-w-md space-y-3">
              <div
                className="flex gap-2 p-1.5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-4 py-2.5 text-base bg-transparent focus:outline-none"
                  style={{ color: "#fff", caretColor: "#A8E6A3" }}
                />
                <button
                  type="button"
                  className="shrink-0 px-5 py-2.5 text-sm font-semibold rounded-lg"
                  style={{ background: "#3D6B4F", color: "#fff" }}
                >
                  Join Free
                </button>
              </div>
              <p className="text-xs pl-1" style={{ color: "rgba(255,255,255,0.32)" }}>
                No spam. No greenwashing. Unsubscribe anytime.
              </p>
            </div>
            <div className="rounded-xl p-4 font-mono text-xs" style={{ background: "rgba(0,0,0,0.4)", color: "#A8E6A3" }}>
              <span style={{ color: "rgba(255,255,255,0.3)" }}>// Glass Form token</span>
              <br />
              background: rgba(255,255,255,0.08)
              <br />
              border: 1px solid rgba(255,255,255,0.15)
              <br />
              backdrop-filter: blur(16px)
            </div>
          </div>

          {/* Nav glass */}
          <div className="space-y-3">
            <TokenNote>Glass Nav — fixed header</TokenNote>
            <div
              className="rounded-xl h-14 flex items-center px-5 justify-between"
              style={{
                background: "rgba(5,15,7,0.72)",
                border: "1px solid rgba(168,230,163,0.08)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            >
              <span className="font-display font-bold text-white text-base">
                Clean<span style={{ color: "#A8E6A3" }}>Pet</span>List
              </span>
              <div className="flex items-center gap-5 text-sm" style={{ color: "rgba(255,255,255,0.48)" }}>
                <span>How It Works</span>
                <span>FAQ</span>
              </div>
              <span
                className="px-3.5 py-1.5 text-sm font-medium rounded-lg"
                style={{
                  background: "rgba(168,230,163,0.1)",
                  border: "1px solid rgba(168,230,163,0.22)",
                  color: "#A8E6A3",
                }}
              >
                Join Free
              </span>
            </div>
            <div className="rounded-xl p-4 font-mono text-xs" style={{ background: "rgba(0,0,0,0.4)", color: "#A8E6A3" }}>
              <span style={{ color: "rgba(255,255,255,0.3)" }}>// Glass Nav token</span>
              <br />
              background: rgba(5,15,7,0.72)
              <br />
              border-bottom: 1px solid rgba(168,230,163,0.08)
              <br />
              backdrop-filter: blur(14px)
            </div>
          </div>
        </section>

        {/* ── BUTTONS ── */}
        <section className="space-y-8">
          <SectionLabel>Buttons</SectionLabel>

          <div
            className="rounded-2xl p-8 space-y-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(168,230,163,0.08)",
            }}
          >
            <div className="space-y-3">
              <TokenNote>Primary — Brand Forest Green · Main CTA</TokenNote>
              <div className="flex flex-wrap gap-3 items-center">
                <button
                  className="px-4 py-2 text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                  style={{ background: "#3D6B4F", color: "#fff" }}
                >
                  Join Free
                </button>
                <button
                  className="px-5 py-2.5 text-base font-medium rounded-lg hover:opacity-90 transition-opacity"
                  style={{ background: "#3D6B4F", color: "#fff" }}
                >
                  Join the List (It&apos;s Free)
                </button>
                <button
                  className="px-6 py-3 text-lg font-medium rounded-lg hover:opacity-90 transition-opacity"
                  style={{ background: "#3D6B4F", color: "#fff" }}
                >
                  Browse the Directory
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <TokenNote>Glass Mint — nav Join Free, secondary CTAs</TokenNote>
              <div className="flex flex-wrap gap-3 items-center">
                <button
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                  style={{
                    background: "rgba(168,230,163,0.1)",
                    border: "1px solid rgba(168,230,163,0.22)",
                    color: "#A8E6A3",
                  }}
                >
                  Join Free
                </button>
                <button
                  className="px-5 py-2.5 text-base font-medium rounded-lg"
                  style={{
                    background: "rgba(168,230,163,0.1)",
                    border: "1px solid rgba(168,230,163,0.22)",
                    color: "#A8E6A3",
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <TokenNote>Ghost White — minimal, low-priority actions</TokenNote>
              <div className="flex flex-wrap gap-3 items-center">
                <button
                  className="px-4 py-2 text-sm font-medium rounded-lg"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  Maybe Later
                </button>
                <button
                  className="px-5 py-2.5 text-base font-medium"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Read More →
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <TokenNote>Amber — Warm accent, used sparingly for contrast</TokenNote>
              <div className="flex flex-wrap gap-3 items-center">
                <button
                  className="px-5 py-2.5 text-base font-medium rounded-lg hover:opacity-90 transition-opacity"
                  style={{ background: "#C4813A", color: "#fff" }}
                >
                  Claim Early Access
                </button>
                <button
                  className="px-5 py-2.5 text-base font-medium rounded-lg"
                  style={{
                    border: "1px solid rgba(196,129,58,0.4)",
                    color: "#E0922F",
                  }}
                >
                  See This Week&apos;s Picks
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── BADGES & TAGS ── */}
        <section className="space-y-8">
          <SectionLabel>Badges & Tags</SectionLabel>

          <div
            className="rounded-2xl p-8 space-y-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(168,230,163,0.08)",
            }}
          >
            <div className="space-y-3">
              <TokenNote>Mint Glass — section labels, hero badge</TokenNote>
              <div className="flex flex-wrap gap-3">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(168,230,163,0.12)",
                    border: "1px solid rgba(168,230,163,0.28)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#A8E6A3" }} />
                  <span
                    className="text-xs font-medium tracking-widest uppercase"
                    style={{ color: "#A8E6A3" }}
                  >
                    Free Weekly Newsletter
                  </span>
                </div>
                <span
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    background: "rgba(168,230,163,0.1)",
                    border: "1px solid rgba(168,230,163,0.2)",
                    color: "#A8E6A3",
                  }}
                >
                  New Pick
                </span>
                <span
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    border: "1px solid rgba(168,230,163,0.25)",
                    color: "rgba(168,230,163,0.7)",
                  }}
                >
                  Vetted
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <TokenNote>Amber Glass — secondary tags, editor picks</TokenNote>
              <div className="flex flex-wrap gap-3">
                <span
                  className="px-3 py-1 text-xs font-semibold rounded-full"
                  style={{
                    background: "rgba(196,129,58,0.15)",
                    border: "1px solid rgba(196,129,58,0.3)",
                    color: "#E0922F",
                  }}
                >
                  Editor&apos;s Choice
                </span>
                <span
                  className="px-3 py-1 text-xs font-semibold rounded-full"
                  style={{ background: "#C4813A", color: "#fff" }}
                >
                  Staff Favorite
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <TokenNote>Product Attribute Tags — directory/product cards</TokenNote>
              <div className="flex flex-wrap gap-2">
                {["Organic", "USDA Certified", "Grain-Free", "USA-Made", "Non-GMO", "Single Ingredient", "Vet-Approved"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── CARDS ── */}
        <section className="space-y-8">
          <SectionLabel>Cards</SectionLabel>

          <div className="space-y-4">
            <TokenNote>Product Card — future directory listing (dark variant)</TokenNote>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {/* Product card 1 */}
              <div
                className="rounded-2xl overflow-hidden group"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(168,230,163,0.09)",
                }}
              >
                <div
                  className="aspect-square flex items-center justify-center"
                  style={{ background: "rgba(168,230,163,0.05)" }}
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(168,230,163,0.1)",
                      border: "1px solid rgba(168,230,163,0.2)",
                    }}
                  >
                    <span className="text-3xl">🐾</span>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p
                        className="text-xs font-medium tracking-widest uppercase mb-0.5"
                        style={{ color: "rgba(255,255,255,0.3)" }}
                      >
                        Treats · Dog
                      </p>
                      <h3
                        className="font-semibold text-white leading-snug text-sm"
                        style={{ transition: "color 0.2s" }}
                      >
                        Stella & Chewy&apos;s Freeze-Dried Raw Treats
                      </h3>
                    </div>
                    <span
                      className="shrink-0 px-2 py-0.5 text-xs font-semibold rounded-full"
                      style={{ background: "rgba(168,230,163,0.15)", color: "#A8E6A3" }}
                    >
                      New
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Single-ingredient, freeze-dried raw chicken. Nothing added, nothing removed.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span
                      className="px-2 py-0.5 text-xs font-medium rounded-full"
                      style={{
                        background: "rgba(168,230,163,0.08)",
                        border: "1px solid rgba(168,230,163,0.15)",
                        color: "rgba(168,230,163,0.7)",
                      }}
                    >
                      Organic
                    </span>
                    <span
                      className="px-2 py-0.5 text-xs font-medium rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      Single Ingredient
                    </span>
                  </div>
                  <button
                    className="w-full py-2 text-sm font-medium rounded-lg transition-colors"
                    style={{
                      background: "rgba(168,230,163,0.07)",
                      border: "1px solid rgba(168,230,163,0.15)",
                      color: "rgba(168,230,163,0.75)",
                    }}
                  >
                    View Product →
                  </button>
                </div>
              </div>

              {/* Product card 2 */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(168,230,163,0.09)",
                }}
              >
                <div
                  className="aspect-square flex items-center justify-center"
                  style={{ background: "rgba(196,129,58,0.05)" }}
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(196,129,58,0.12)",
                      border: "1px solid rgba(196,129,58,0.2)",
                    }}
                  >
                    <span className="text-3xl">🐱</span>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p
                        className="text-xs font-medium tracking-widest uppercase mb-0.5"
                        style={{ color: "rgba(255,255,255,0.3)" }}
                      >
                        Food · Cat
                      </p>
                      <h3 className="font-semibold text-white leading-snug text-sm">
                        Smalls Human-Grade Fresh Cat Food
                      </h3>
                    </div>
                    <span
                      className="shrink-0 px-2 py-0.5 text-xs font-semibold rounded-full"
                      style={{ background: "#C4813A", color: "#fff" }}
                    >
                      Editor&apos;s Pick
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Human-grade ingredients, no preservatives, gently cooked and delivered fresh.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span
                      className="px-2 py-0.5 text-xs font-medium rounded-full"
                      style={{
                        background: "rgba(168,230,163,0.08)",
                        border: "1px solid rgba(168,230,163,0.15)",
                        color: "rgba(168,230,163,0.7)",
                      }}
                    >
                      Grain-Free
                    </span>
                    <span
                      className="px-2 py-0.5 text-xs font-medium rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      USA-Made
                    </span>
                  </div>
                  <button
                    className="w-full py-2 text-sm font-medium rounded-lg"
                    style={{
                      background: "rgba(168,230,163,0.07)",
                      border: "1px solid rgba(168,230,163,0.15)",
                      color: "rgba(168,230,163,0.75)",
                    }}
                  >
                    View Product →
                  </button>
                </div>
              </div>

              {/* Newsletter CTA card */}
              <div
                className="rounded-2xl p-6 flex flex-col justify-between min-h-[360px]"
                style={{
                  background: "rgba(168,230,163,0.06)",
                  border: "1px solid rgba(168,230,163,0.15)",
                }}
              >
                <div className="space-y-3">
                  <span
                    className="px-2.5 py-1 text-xs font-semibold rounded-full inline-block"
                    style={{
                      background: "rgba(168,230,163,0.15)",
                      border: "1px solid rgba(168,230,163,0.25)",
                      color: "#A8E6A3",
                    }}
                  >
                    Free Newsletter
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white leading-snug">
                    Get clean picks sent to your inbox.
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
                    Weekly product recommendations, vetted for you. No spam. Ever.
                  </p>
                </div>
                <div className="space-y-2 mt-6">
                  <div
                    className="flex gap-2 p-1 rounded-lg"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 min-w-0 px-3 py-2 text-sm bg-transparent focus:outline-none text-white"
                      style={{ caretColor: "#A8E6A3" }}
                    />
                    <button
                      className="shrink-0 px-4 py-2 text-xs font-semibold rounded-md"
                      style={{ background: "#3D6B4F", color: "#fff" }}
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── GRADIENT PATTERNS ── */}
        <section className="space-y-6">
          <SectionLabel>Gradient Patterns</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="space-y-2">
              <TokenNote>Hero Overlay — left-to-right, content left / photo right</TokenNote>
              <div
                className="h-32 rounded-xl"
                style={{
                  background:
                    "linear-gradient(to right, rgba(5,15,7,0.93) 0%, rgba(5,15,7,0.80) 30%, rgba(5,15,7,0.35) 58%, transparent 80%)",
                  border: "1px solid rgba(168,230,163,0.08)",
                }}
              />
            </div>

            <div className="space-y-2">
              <TokenNote>Section Bottom Fade — strip images blending into section bg</TokenNote>
              <div
                className="h-32 rounded-xl"
                style={{
                  background:
                    "linear-gradient(to top, #0D2018 0%, transparent 50%, #0D2018 100%)",
                  border: "1px solid rgba(168,230,163,0.08)",
                }}
              />
            </div>

            <div className="space-y-2">
              <TokenNote>Radial Glow — FinalCTA center ambient light</TokenNote>
              <div
                className="h-32 rounded-xl"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(168,230,163,0.08) 0%, transparent 70%)",
                  border: "1px solid rgba(168,230,163,0.08)",
                }}
              />
            </div>

            <div className="space-y-2">
              <TokenNote>Top Nav Fade — nav legibility over hero photo</TokenNote>
              <div
                className="h-32 rounded-xl"
                style={{
                  background: "linear-gradient(to bottom, rgba(5,15,7,0.5) 0%, transparent 100%)",
                  border: "1px solid rgba(168,230,163,0.08)",
                }}
              />
            </div>
          </div>
        </section>

        {/* ── DECORATIVE ELEMENTS ── */}
        <section className="space-y-6">
          <SectionLabel>Decorative Elements</SectionLabel>
          <div
            className="rounded-2xl p-8 space-y-10"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(168,230,163,0.08)",
            }}
          >
            {/* Section divider */}
            <div className="space-y-3">
              <TokenNote>Section Rule — subtle horizontal divider</TokenNote>
              <div
                className="w-full h-px"
                style={{ background: "rgba(168,230,163,0.1)" }}
              />
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px" style={{ background: "rgba(168,230,163,0.08)" }} />
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "rgba(168,230,163,0.5)" }}
                >
                  Section Label
                </span>
                <div className="flex-1 h-px" style={{ background: "rgba(168,230,163,0.08)" }} />
              </div>
            </div>

            {/* Scroll hint */}
            <div className="space-y-3">
              <TokenNote>Scroll Hint — animated mouse icon</TokenNote>
              <div
                className="flex flex-col items-start gap-2"
                style={{ color: "rgba(255,255,255,0.22)" }}
              >
                <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
                  <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="7" cy="6" r="2" fill="currentColor">
                    <animate attributeName="cy" values="6;12;6" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>

            {/* Quote mark */}
            <div className="space-y-3">
              <TokenNote>Decorative Quote Mark — FounderNote section</TokenNote>
              <div
                className="font-display leading-none select-none"
                style={{ fontSize: "5rem", color: "rgba(168,230,163,0.1)" }}
              >
                &ldquo;
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div
          className="pt-8 text-center text-sm"
          style={{ borderTop: "1px solid rgba(168,230,163,0.08)", color: "rgba(255,255,255,0.25)" }}
        >
          CleanPetList Design System V2 · Cinematic Forest Night · Next.js + Tailwind CSS v4
        </div>

      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <h2
        className="text-xs font-semibold tracking-widest uppercase shrink-0"
        style={{ color: "rgba(168,230,163,0.5)" }}
      >
        {children}
      </h2>
      <div className="flex-1 h-px" style={{ background: "rgba(168,230,163,0.08)" }} />
    </div>
  );
}

function TokenNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
      {children}
    </p>
  );
}
