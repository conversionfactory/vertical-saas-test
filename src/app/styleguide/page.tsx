export default function StyleGuide() {
  return (
    <div className="min-h-screen bg-warm-50 text-warm-900">
      <div className="max-w-5xl mx-auto px-8 py-16 space-y-20">

        {/* Header */}
        <div className="border-b border-warm-200 pb-10">
          <p className="text-sm font-medium tracking-widest uppercase text-brand-500 mb-3">Design System</p>
          <h1 className="font-display text-6xl font-bold text-warm-900 mb-3">CleanPetList</h1>
          <p className="text-warm-500 text-lg">Visual style guide — colors, typography, components, and patterns.</p>
        </div>

        {/* ── COLORS ── */}
        <section className="space-y-8">
          <SectionLabel>Colors</SectionLabel>

          <div className="space-y-6">
            <ColorRow
              label="Brand Green"
              note="Primary — used for CTAs, links, and brand moments"
              swatches={[
                { shade: "50", hex: "#EDF4F0", cls: "bg-brand-50", dark: false },
                { shade: "100", hex: "#D5E8DC", cls: "bg-brand-100", dark: false },
                { shade: "200", hex: "#AECFBC", cls: "bg-brand-200", dark: false },
                { shade: "300", hex: "#7DB49A", cls: "bg-brand-300", dark: false },
                { shade: "400", hex: "#569176", cls: "bg-brand-400", dark: true },
                { shade: "500", hex: "#3D6B4F", cls: "bg-brand-500", dark: true },
                { shade: "600", hex: "#315741", cls: "bg-brand-600", dark: true },
                { shade: "700", hex: "#254333", cls: "bg-brand-700", dark: true },
                { shade: "800", hex: "#192E24", cls: "bg-brand-800", dark: true },
                { shade: "900", hex: "#0E1A15", cls: "bg-brand-900", dark: true },
              ]}
            />

            <ColorRow
              label="Accent Amber"
              note="Accent — used for highlights, badges, and warmth"
              swatches={[
                { shade: "50", hex: "#FDF4E8", cls: "bg-accent-50", dark: false },
                { shade: "100", hex: "#FAE4C5", cls: "bg-accent-100", dark: false },
                { shade: "200", hex: "#F5CA90", cls: "bg-accent-200", dark: false },
                { shade: "300", hex: "#EEAB56", cls: "bg-accent-300", dark: false },
                { shade: "400", hex: "#E0922F", cls: "bg-accent-400", dark: true },
                { shade: "500", hex: "#C4813A", cls: "bg-accent-500", dark: true },
                { shade: "600", hex: "#9E6830", cls: "bg-accent-600", dark: true },
                { shade: "700", hex: "#784F25", cls: "bg-accent-700", dark: true },
                { shade: "800", hex: "#52361A", cls: "bg-accent-800", dark: true },
                { shade: "900", hex: "#2C1D0D", cls: "bg-accent-900", dark: true },
              ]}
            />

            <ColorRow
              label="Warm Neutrals"
              note="UI chrome — backgrounds, borders, text, and dividers"
              swatches={[
                { shade: "50", hex: "#FAFAF8", cls: "bg-warm-50", dark: false },
                { shade: "100", hex: "#F5F4F1", cls: "bg-warm-100", dark: false },
                { shade: "200", hex: "#E8E6E1", cls: "bg-warm-200", dark: false },
                { shade: "300", hex: "#D4D1CB", cls: "bg-warm-300", dark: false },
                { shade: "400", hex: "#B0ACA4", cls: "bg-warm-400", dark: false },
                { shade: "500", hex: "#8C8880", cls: "bg-warm-500", dark: true },
                { shade: "600", hex: "#6B6760", cls: "bg-warm-600", dark: true },
                { shade: "700", hex: "#4A4843", cls: "bg-warm-700", dark: true },
                { shade: "800", hex: "#302E2A", cls: "bg-warm-800", dark: true },
                { shade: "900", hex: "#1A1917", cls: "bg-warm-900", dark: true },
              ]}
            />
          </div>
        </section>

        {/* ── TYPOGRAPHY ── */}
        <section className="space-y-8">
          <SectionLabel>Typography</SectionLabel>

          <div className="space-y-2">
            <TokenNote>Display — Lora (serif) · Used for hero headlines</TokenNote>
            <div className="bg-white rounded-2xl border border-warm-200 p-8 space-y-6">
              <div>
                <p className="text-xs text-warm-400 mb-1">Display / 60px · font-display font-bold</p>
                <p className="font-display text-6xl font-bold text-warm-900 leading-tight">Clean products.<br />Happy pets.</p>
              </div>
              <div>
                <p className="text-xs text-warm-400 mb-1">H1 / 48px · font-display font-bold</p>
                <p className="font-display text-5xl font-bold text-warm-900 leading-tight">Everything your pet needs.</p>
              </div>
              <div>
                <p className="text-xs text-warm-400 mb-1">H2 / 36px · font-display font-semibold</p>
                <p className="font-display text-4xl font-semibold text-warm-900">Nothing they shouldn&apos;t have.</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <TokenNote>Sans — Geist Sans · Used for headings, body, UI</TokenNote>
            <div className="bg-white rounded-2xl border border-warm-200 p-8 space-y-5">
              <div>
                <p className="text-xs text-warm-400 mb-1">H3 / 30px · font-sans font-semibold</p>
                <p className="text-3xl font-semibold text-warm-900">We read the labels so you don&apos;t have to.</p>
              </div>
              <div>
                <p className="text-xs text-warm-400 mb-1">H4 / 24px · font-sans font-semibold</p>
                <p className="text-2xl font-semibold text-warm-900">Clean product picks, every week.</p>
              </div>
              <div>
                <p className="text-xs text-warm-400 mb-1">H5 / 20px · font-sans font-medium</p>
                <p className="text-xl font-medium text-warm-800">No artificial preservatives. No mystery fillers.</p>
              </div>
              <div>
                <p className="text-xs text-warm-400 mb-1">Body Large / 18px · font-sans</p>
                <p className="text-lg text-warm-700 leading-relaxed max-w-2xl">Every week, we find and vet the best organic, natural, and toxin-free pet products — food, treats, toys, supplements, and more — and send them straight to your inbox.</p>
              </div>
              <div>
                <p className="text-xs text-warm-400 mb-1">Body / 16px · font-sans</p>
                <p className="text-base text-warm-700 leading-relaxed max-w-2xl">The pet industry is full of &quot;natural&quot; labels that mean nothing. Greenwashed marketing. Vague ingredient lists. We screen everything so you don&apos;t have to.</p>
              </div>
              <div>
                <p className="text-xs text-warm-400 mb-1">Small / 14px · font-sans</p>
                <p className="text-sm text-warm-500">No spam. No greenwashing. Unsubscribe anytime.</p>
              </div>
              <div>
                <p className="text-xs text-warm-400 mb-1">Label / 12px · font-sans font-medium tracking-widest uppercase</p>
                <p className="text-xs font-medium tracking-widest uppercase text-brand-500">Featured this week</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BUTTONS ── */}
        <section className="space-y-8">
          <SectionLabel>Buttons</SectionLabel>

          <div className="bg-white rounded-2xl border border-warm-200 p-8 space-y-8">

            {/* Primary */}
            <div className="space-y-3">
              <TokenNote>Primary — Brand Green · Main CTA</TokenNote>
              <div className="flex flex-wrap gap-3 items-center">
                <button className="px-4 py-2 text-sm font-medium bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
                  Join Free
                </button>
                <button className="px-5 py-2.5 text-base font-medium bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
                  Join the List (It&apos;s Free)
                </button>
                <button className="px-6 py-3 text-lg font-medium bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
                  Browse the Directory
                </button>
              </div>
              <p className="text-xs text-warm-400">sm · md · lg</p>
            </div>

            {/* Secondary */}
            <div className="space-y-3">
              <TokenNote>Secondary — Outlined · Supporting actions</TokenNote>
              <div className="flex flex-wrap gap-3 items-center">
                <button className="px-4 py-2 text-sm font-medium border border-brand-500 text-brand-500 rounded-lg hover:bg-brand-50 transition-colors">
                  Learn More
                </button>
                <button className="px-5 py-2.5 text-base font-medium border border-brand-500 text-brand-500 rounded-lg hover:bg-brand-50 transition-colors">
                  See How It Works
                </button>
                <button className="px-6 py-3 text-lg font-medium border border-brand-500 text-brand-500 rounded-lg hover:bg-brand-50 transition-colors">
                  View All Products
                </button>
              </div>
              <p className="text-xs text-warm-400">sm · md · lg</p>
            </div>

            {/* Ghost */}
            <div className="space-y-3">
              <TokenNote>Ghost — Minimal · Tertiary actions</TokenNote>
              <div className="flex flex-wrap gap-3 items-center">
                <button className="px-4 py-2 text-sm font-medium text-warm-600 rounded-lg hover:bg-warm-100 transition-colors">
                  Cancel
                </button>
                <button className="px-5 py-2.5 text-base font-medium text-warm-600 rounded-lg hover:bg-warm-100 transition-colors">
                  Maybe Later
                </button>
                <button className="px-5 py-2.5 text-base font-medium text-brand-500 rounded-lg hover:bg-brand-50 transition-colors">
                  Read More →
                </button>
              </div>
              <p className="text-xs text-warm-400">sm · md · with arrow</p>
            </div>

            {/* Accent */}
            <div className="space-y-3">
              <TokenNote>Accent — Amber · Highlight moments</TokenNote>
              <div className="flex flex-wrap gap-3 items-center">
                <button className="px-5 py-2.5 text-base font-medium bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors">
                  Claim Early Access
                </button>
                <button className="px-5 py-2.5 text-base font-medium border border-accent-500 text-accent-600 rounded-lg hover:bg-accent-50 transition-colors">
                  See This Week&apos;s Picks
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── FORM ELEMENTS ── */}
        <section className="space-y-8">
          <SectionLabel>Form Elements</SectionLabel>

          <div className="bg-white rounded-2xl border border-warm-200 p-8 space-y-8">

            {/* Email capture — the core form */}
            <div className="space-y-3">
              <TokenNote>Email Capture — Primary newsletter signup</TokenNote>
              <div className="max-w-md space-y-2">
                <label className="block text-sm font-medium text-warm-700">Email address</label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="flex-1 px-4 py-2.5 text-base border border-warm-300 rounded-lg bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                  />
                  <button className="px-5 py-2.5 text-base font-medium bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors whitespace-nowrap">
                    Join Free
                  </button>
                </div>
                <p className="text-xs text-warm-400">No spam. Unsubscribe anytime.</p>
              </div>
            </div>

            {/* Inline / full-width */}
            <div className="space-y-3">
              <TokenNote>Full-width Email Capture — Hero usage</TokenNote>
              <div className="max-w-lg space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-5 py-3 text-base border border-warm-300 rounded-lg bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                />
                <button className="w-full py-3 text-base font-medium bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
                  Join the List (It&apos;s Free)
                </button>
                <p className="text-xs text-center text-warm-400">No spam. No greenwashing. Just clean picks, weekly.</p>
              </div>
            </div>

            {/* States */}
            <div className="space-y-3">
              <TokenNote>Input States</TokenNote>
              <div className="space-y-3 max-w-sm">
                <div>
                  <p className="text-xs text-warm-400 mb-1.5">Default</p>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 text-base border border-warm-300 rounded-lg bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <p className="text-xs text-warm-400 mb-1.5">Filled</p>
                  <input
                    type="email"
                    defaultValue="nick@conversionfactory.co"
                    className="w-full px-4 py-2.5 text-base border border-warm-300 rounded-lg bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <p className="text-xs text-warm-400 mb-1.5">Error</p>
                  <input
                    type="email"
                    defaultValue="not-an-email"
                    className="w-full px-4 py-2.5 text-base border border-red-400 rounded-lg bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
                  />
                  <p className="text-xs text-red-500 mt-1">Please enter a valid email address.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BADGES / TAGS ── */}
        <section className="space-y-8">
          <SectionLabel>Badges & Tags</SectionLabel>

          <div className="bg-white rounded-2xl border border-warm-200 p-8 space-y-8">

            <div className="space-y-3">
              <TokenNote>Product Attribute Tags — Used on product cards</TokenNote>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs font-medium bg-brand-50 text-brand-600 rounded-full border border-brand-200">Organic</span>
                <span className="px-2.5 py-1 text-xs font-medium bg-brand-50 text-brand-600 rounded-full border border-brand-200">USDA Certified</span>
                <span className="px-2.5 py-1 text-xs font-medium bg-accent-50 text-accent-600 rounded-full border border-accent-200">Natural</span>
                <span className="px-2.5 py-1 text-xs font-medium bg-accent-50 text-accent-600 rounded-full border border-accent-200">Grain-Free</span>
                <span className="px-2.5 py-1 text-xs font-medium bg-warm-100 text-warm-600 rounded-full border border-warm-300">USA-Made</span>
                <span className="px-2.5 py-1 text-xs font-medium bg-warm-100 text-warm-600 rounded-full border border-warm-300">Non-GMO</span>
                <span className="px-2.5 py-1 text-xs font-medium bg-warm-100 text-warm-600 rounded-full border border-warm-300">Single Ingredient</span>
                <span className="px-2.5 py-1 text-xs font-medium bg-warm-100 text-warm-600 rounded-full border border-warm-300">Vet-Approved</span>
              </div>
            </div>

            <div className="space-y-3">
              <TokenNote>Category Labels — Used for navigation and section headers</TokenNote>
              <div className="flex flex-wrap gap-2">
                {["Food", "Treats", "Supplements", "Toys", "Accessories", "Medications"].map((cat) => (
                  <span key={cat} className="px-4 py-1.5 text-sm font-medium bg-warm-100 text-warm-700 rounded-full hover:bg-brand-50 hover:text-brand-600 transition-colors cursor-pointer">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <TokenNote>Status Badges — Editorial signals</TokenNote>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs font-semibold bg-brand-500 text-white rounded-full">New Pick</span>
                <span className="px-2.5 py-1 text-xs font-semibold bg-accent-500 text-white rounded-full">Editor&apos;s Choice</span>
                <span className="px-2.5 py-1 text-xs font-semibold bg-warm-700 text-white rounded-full">Staff Favorite</span>
                <span className="px-2.5 py-1 text-xs font-semibold border border-brand-400 text-brand-500 rounded-full">Vetted</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CARDS ── */}
        <section className="space-y-8">
          <SectionLabel>Cards</SectionLabel>

          <div className="space-y-4">
            <TokenNote>Product Card — Directory listing</TokenNote>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {/* Card 1 */}
              <div className="bg-white rounded-2xl border border-warm-200 overflow-hidden hover:shadow-md hover:border-warm-300 transition-all group">
                <div className="aspect-square bg-brand-50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-brand-100 flex items-center justify-center">
                    <span className="text-3xl">🐾</span>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-medium tracking-widest uppercase text-warm-400 mb-0.5">Treats · Dog</p>
                      <h3 className="font-semibold text-warm-900 leading-snug group-hover:text-brand-600 transition-colors">Stella & Chewy&apos;s Freeze-Dried Raw Treats</h3>
                    </div>
                    <span className="shrink-0 px-2 py-0.5 text-xs font-semibold bg-brand-500 text-white rounded-full">New</span>
                  </div>
                  <p className="text-sm text-warm-600 leading-relaxed">Single-ingredient, freeze-dried raw chicken. Nothing added, nothing removed.</p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 text-xs font-medium bg-brand-50 text-brand-600 rounded-full border border-brand-200">Organic</span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-warm-100 text-warm-600 rounded-full border border-warm-200">Single Ingredient</span>
                  </div>
                  <button className="w-full py-2 text-sm font-medium text-brand-500 border border-brand-200 rounded-lg hover:bg-brand-50 transition-colors">
                    View Product →
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl border border-warm-200 overflow-hidden hover:shadow-md hover:border-warm-300 transition-all group">
                <div className="aspect-square bg-accent-50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-accent-100 flex items-center justify-center">
                    <span className="text-3xl">🐱</span>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-medium tracking-widest uppercase text-warm-400 mb-0.5">Food · Cat</p>
                      <h3 className="font-semibold text-warm-900 leading-snug group-hover:text-brand-600 transition-colors">Smalls Human-Grade Fresh Cat Food</h3>
                    </div>
                    <span className="shrink-0 px-2 py-0.5 text-xs font-semibold bg-accent-500 text-white rounded-full">Editor&apos;s Choice</span>
                  </div>
                  <p className="text-sm text-warm-600 leading-relaxed">Human-grade ingredients, no preservatives, gently cooked and delivered fresh.</p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 text-xs font-medium bg-brand-50 text-brand-600 rounded-full border border-brand-200">Grain-Free</span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-warm-100 text-warm-600 rounded-full border border-warm-200">USA-Made</span>
                  </div>
                  <button className="w-full py-2 text-sm font-medium text-brand-500 border border-brand-200 rounded-lg hover:bg-brand-50 transition-colors">
                    View Product →
                  </button>
                </div>
              </div>

              {/* Card 3 — Newsletter CTA card */}
              <div className="bg-brand-500 rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-[360px]">
                <div className="space-y-3">
                  <span className="px-2.5 py-1 text-xs font-semibold bg-white/20 text-white rounded-full">Free Newsletter</span>
                  <h3 className="font-display text-2xl font-bold text-white leading-snug">Get clean picks sent to your inbox.</h3>
                  <p className="text-sm text-brand-100 leading-relaxed">Weekly product recommendations, vetted for you. No spam. Ever.</p>
                </div>
                <div className="space-y-2 mt-6">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 text-sm rounded-lg bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-accent-400 border-0"
                  />
                  <button className="w-full py-2.5 text-sm font-semibold bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors">
                    Join Free
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-warm-200 pt-8 text-center text-sm text-warm-400">
          CleanPetList Design System · Built with Next.js + Tailwind CSS v4
        </div>

      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-warm-400">{children}</h2>
      <div className="flex-1 h-px bg-warm-200" />
    </div>
  );
}

function TokenNote({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-warm-400 font-medium">{children}</p>;
}

function ColorRow({
  label,
  note,
  swatches,
}: {
  label: string;
  note: string;
  swatches: { shade: string; hex: string; cls: string; dark: boolean }[];
}) {
  return (
    <div className="space-y-2">
      <div>
        <p className="text-sm font-semibold text-warm-800">{label}</p>
        <p className="text-xs text-warm-400">{note}</p>
      </div>
      <div className="flex rounded-xl overflow-hidden border border-warm-200">
        {swatches.map((s) => (
          <div key={s.shade} className={`${s.cls} flex-1 group relative`}>
            <div className="aspect-square w-full" />
            <div className={`absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-center p-1 ${s.dark ? "text-white" : "text-warm-800"}`}>
              <span className="text-xs font-bold">{s.shade}</span>
              <span className="text-xs font-mono">{s.hex}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        {swatches.map((s) => (
          <div key={s.shade} className="flex-1 text-center">
            <p className="text-xs text-warm-400">{s.shade}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
