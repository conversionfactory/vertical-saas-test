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
        </div>
        <div className="w-[480px] h-[320px] shrink-0 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm">
          Product Screenshot
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
