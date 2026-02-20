import Image from "next/image";

export default function V2() {
  return (
    <div className="min-h-screen bg-warm-50 text-warm-900">
      <Nav />
      <main>
        <Hero />
        <MissionBar />
        <Problem />
        <WhatYouGet />
        <HowItWorks />
        <WhoItsFor />
        <FounderNote />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ── NAV ── */
function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-bold text-white drop-shadow">
          Clean<span style={{ color: "#A8E6A3" }}>Pet</span>List
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <a
          href="#join"
          className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#fff",
            backdropFilter: "blur(8px)",
          }}
        >
          Join Free
        </a>
      </div>
    </header>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <section
      id="join"
      className="relative overflow-hidden"
      style={{ height: "100vh", minHeight: "680px" }}
    >
      {/* Full-bleed photo */}
      <Image
        src="https://images.unsplash.com/photo-1594149929911-78975a43d4f5?w=1800&q=85"
        alt="Happy golden retriever in natural sunlight"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Left-to-right gradient so content sits on dark, photo bleeds right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(5,15,7,0.93) 0%, rgba(5,15,7,0.80) 30%, rgba(5,15,7,0.35) 58%, transparent 80%)",
        }}
      />
      {/* Subtle top darkening for nav legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(5,15,7,0.4) 0%, transparent 18%)",
        }}
      />

      {/* Content — left-aligned, vertically centered */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-lg">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7"
              style={{
                background: "rgba(168,230,163,0.15)",
                border: "1px solid rgba(168,230,163,0.35)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#A8E6A3" }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#A8E6A3" }}>
                Free Weekly Newsletter
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-white leading-tight mb-5"
              style={{
                fontFamily: "var(--font-lora)",
                fontWeight: 700,
                fontSize: "clamp(2.8rem, 5vw, 4.4rem)",
                letterSpacing: "-0.025em",
                textShadow: "0 2px 24px rgba(0,0,0,0.3)",
              }}
            >
              Everything your
              <br />
              pet needs.{" "}
              <span style={{ color: "#A8E6A3" }}>
                Nothing they
                <br />
                shouldn&apos;t have.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="leading-relaxed mb-9"
              style={{
                color: "rgba(255,255,255,0.68)",
                fontSize: "1.1rem",
                maxWidth: "400px",
              }}
            >
              Vetted organic and natural pet products — food, treats, toys,
              supplements — sent to your inbox every week. Free.
            </p>

            {/* Email form */}
            <form className="space-y-3" style={{ maxWidth: "420px" }}>
              <div
                className="flex gap-2 p-1.5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.09)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-4 py-2.5 text-base bg-transparent focus:outline-none"
                  style={{ color: "#fff", caretColor: "#A8E6A3" }}
                />
                <button
                  type="submit"
                  className="shrink-0 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all hover:opacity-90"
                  style={{ background: "#3D6B4F", color: "#fff", letterSpacing: "0.01em" }}
                >
                  Join Free
                </button>
              </div>
              <p className="text-xs pl-1" style={{ color: "rgba(255,255,255,0.38)" }}>
                No spam. No greenwashing. Unsubscribe anytime.
              </p>
            </form>

          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(255,255,255,0.3)" }}
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
    </section>
  );
}

/* ── MISSION BAR ── */
function MissionBar() {
  const items = [
    "We read the labels so you don't have to",
    "No artificial preservatives. Ever.",
    "Honest recommendations, not sponsored ones",
  ];
  return (
    <section className="bg-brand-500">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 sm:divide-x sm:divide-brand-400">
          {items.map((item, i) => (
            <p key={i} className="text-sm font-medium text-white/90 sm:px-8 text-center">{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PROBLEM ── */
function Problem() {
  return (
    <section className="bg-warm-50 py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-500 mb-4">The Problem</span>
        <h2 className="font-display text-4xl font-bold text-warm-900 mb-8 leading-tight">
          You read the labels. You do the research. It still feels like a guessing game.
        </h2>
        <div className="space-y-5 text-lg text-warm-600 leading-relaxed text-left">
          <p>
            The pet industry is built on vague claims. &quot;Natural.&quot; &quot;Wholesome.&quot; &quot;Premium.&quot; Words that sound good, mean nothing, and appear on products full of artificial preservatives, mystery fillers, and ingredients you can&apos;t pronounce.
          </p>
          <p>
            Most pet owners spend hours Googling every new product — scanning Reddit, decoding ingredient panels, trying to figure out if &quot;by-product meal&quot; is actually bad — only to still feel unsure at checkout.
          </p>
          <p className="font-medium text-warm-800">
            Your pet can&apos;t read the label. That job falls to you. We built CleanPetList to make it easier.
          </p>
        </div>
        <div className="mt-12 rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?w=1200&q=80"
            alt="Pet owner hugging their happy dog"
            width={1200}
            height={500}
            className="w-full h-64 sm:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ── WHAT YOU GET ── */
function WhatYouGet() {
  const benefits = [
    { icon: "📬", title: "Clean product picks, every week", body: "We find, vet, and recommend the best organic, natural, and toxin-free pet products across food, treats, supplements, toys, and accessories. One email. Real recommendations." },
    { icon: "🏷️", title: "Ingredient breakdowns you can actually understand", body: "We don't just say a product is clean — we show you why. What's in it, what's not, and what to look for on your own." },
    { icon: "🗂️", title: "Early access to the full directory", body: "We're building a searchable directory of every vetted clean pet product. Subscribers get in first, before public launch." },
  ];
  return (
    <section className="bg-white border-y border-warm-200 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-500 mb-4">What You Get</span>
          <h2 className="font-display text-4xl font-bold text-warm-900">What&apos;s in the newsletter</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-warm-50 rounded-2xl border border-warm-200 p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-2xl">{b.icon}</div>
              <h3 className="text-lg font-semibold text-warm-900 leading-snug">{b.title}</h3>
              <p className="text-base text-warm-600 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── HOW IT WORKS ── */
function HowItWorks() {
  const steps = [
    { n: "1", title: "Enter your email", body: "Takes 10 seconds. No credit card, no account, no commitment." },
    { n: "2", title: "Get clean picks every week", body: "Vetted products across every category, straight to your inbox every week." },
    { n: "3", title: "Shop with confidence", body: "We link directly to the brand. No middleman, no markup, no sponsored picks." },
  ];
  return (
    <section id="how-it-works" className="bg-warm-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-500 mb-4">How It Works</span>
          <h2 className="font-display text-4xl font-bold text-warm-900">Simple.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-brand-500 text-white flex items-center justify-center text-2xl font-bold font-display">{s.n}</div>
              <h3 className="text-xl font-semibold text-warm-900">{s.title}</h3>
              <p className="text-base text-warm-600 leading-relaxed max-w-xs">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHO IT'S FOR ── */
function WhoItsFor() {
  const items = [
    "You've ever Googled \"is [ingredient] safe for dogs\" before giving a treat",
    "Your pet has allergies, sensitivities, or a health condition and you can't afford to guess",
    "You're tired of \"natural\" labels that turn out to mean nothing",
    "You want someone to just tell you what's actually good",
  ];
  return (
    <section className="bg-white border-y border-warm-200 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-500 mb-4">Who It&apos;s For</span>
          <h2 className="font-display text-4xl font-bold text-warm-900">This is for you if...</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative hidden lg:block h-[460px] rounded-3xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800&q=80" alt="Healthy cat portrait" fill className="object-cover" />
          </div>
          <div className="space-y-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-warm-50 rounded-xl border border-warm-200 px-6 py-4">
                <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold">✓</span>
                <p className="text-base text-warm-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FOUNDER NOTE ── */
function FounderNote() {
  return (
    <section className="bg-brand-900 py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-300 mb-6">Why We&apos;re Building This</span>
        <blockquote className="font-display text-2xl sm:text-3xl font-medium text-white leading-relaxed mb-8">
          &ldquo;We started CleanPetList because we were frustrated. Finding clean, trustworthy pet products meant spending hours reading ingredient panels, cross-referencing Reddit threads, and still feeling unsure. There&apos;s no shortage of pet products. There&apos;s a shortage of honest information about them.&rdquo;
        </blockquote>
        <p className="text-brand-300 text-base">So we&apos;re building it — a newsletter first, a full directory soon. No sponsored content. No products we wouldn&apos;t give our own pets.</p>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FAQ() {
  const faqs = [
    { q: "Is this really free?", a: "Yes. The newsletter is free. The directory (coming soon) will be free to browse." },
    { q: "How do you pick products?", a: "We screen every product against a strict set of standards: no artificial preservatives, no synthetic dyes, no ambiguous ingredient sourcing. If it doesn't pass, it doesn't get recommended." },
    { q: "How often do you send emails?", a: "Once a week. Never more unless you want it." },
    { q: "What kinds of pets do you cover?", a: "Dogs and cats to start. More coming based on what our readers want." },
    { q: "Do you take sponsored recommendations?", a: "No. We don't accept payment to recommend products. Ever." },
  ];
  return (
    <section id="faq" className="bg-warm-50 py-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-500 mb-4">FAQ</span>
          <h2 className="font-display text-4xl font-bold text-warm-900">Good questions.</h2>
        </div>
        <div className="divide-y divide-warm-200">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <h3 className="text-lg font-semibold text-warm-900 mb-2">{faq.q}</h3>
              <p className="text-base text-warm-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA ── */
function FinalCTA() {
  return (
    <section className="bg-brand-500 py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          Your pet can&apos;t read the label.<br />You can — and now you have backup.
        </h2>
        <p className="text-lg text-brand-100 mb-10 leading-relaxed">Join the newsletter and get clean pet product picks every week. Free, honest, and actually useful.</p>
        <form className="max-w-md mx-auto space-y-3">
          <input type="email" name="email" placeholder="Enter your email address" required className="w-full px-5 py-3 text-base rounded-lg bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-accent-400 border-0" />
          <button type="submit" className="w-full py-3 text-base font-semibold bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors">Join Free</button>
          <p className="text-sm text-brand-200">Unsubscribe anytime. We&apos;re not into spam any more than you are.</p>
        </form>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className="bg-warm-900 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg font-bold text-white">Clean<span className="text-brand-300">Pet</span>List</span>
        <p className="text-sm text-warm-500 text-center">© {new Date().getFullYear()} CleanPetList. Honest pet product picks, weekly.</p>
        <a href="#" className="text-sm text-warm-500 hover:text-white transition-colors">Privacy Policy</a>
      </div>
    </footer>
  );
}
