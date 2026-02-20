export default function Home() {
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
    <header className="sticky top-0 z-50 bg-warm-50/90 backdrop-blur-sm border-b border-warm-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-bold text-warm-900">
          Clean<span className="text-brand-500">Pet</span>List
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-warm-600">
          <a href="#how-it-works" className="hover:text-warm-900 transition-colors">How It Works</a>
          <a href="#faq" className="hover:text-warm-900 transition-colors">FAQ</a>
        </nav>
        <a
          href="#join"
          className="px-4 py-2 text-sm font-medium border border-brand-500 text-brand-500 rounded-lg hover:bg-brand-50 transition-colors"
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
    <section id="join" className="bg-white border-b border-warm-200">
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-brand-50 text-brand-600 rounded-full border border-brand-200 mb-6">
          Free Weekly Newsletter
        </span>
        <h1 className="font-display text-5xl sm:text-6xl font-bold text-warm-900 leading-tight mb-6">
          Everything your pet needs.{" "}
          <span className="text-brand-500">Nothing they shouldn&apos;t have.</span>
        </h1>
        <p className="text-lg sm:text-xl text-warm-600 leading-relaxed mb-10 max-w-2xl mx-auto">
          Every week, we find and vet the best organic, natural, and toxin-free
          pet products — food, treats, toys, supplements, and more — and send
          them straight to your inbox.
        </p>

        {/* Email Form */}
        <form className="max-w-md mx-auto space-y-3">
          <div className="flex gap-2">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="flex-1 min-w-0 px-4 py-3 text-base border border-warm-300 rounded-lg bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
            />
            <button
              type="submit"
              className="shrink-0 px-5 py-3 text-base font-semibold bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors"
            >
              Join Free
            </button>
          </div>
          <p className="text-sm text-warm-400">
            No spam. No greenwashing. Just clean picks, weekly.
          </p>
        </form>
      </div>
    </section>
  );
}

/* ── MISSION BAR ── */
function MissionBar() {
  const items = [
    { text: "We read the labels so you don't have to" },
    { text: "No artificial preservatives. Ever." },
    { text: "Honest recommendations, not sponsored ones" },
  ];
  return (
    <section className="bg-brand-500">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 sm:divide-x sm:divide-brand-400">
          {items.map((item, i) => (
            <p key={i} className="text-sm font-medium text-white/90 sm:px-8 text-center">
              {item.text}
            </p>
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
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-500 mb-4">
          The Problem
        </span>
        <h2 className="font-display text-4xl font-bold text-warm-900 mb-8 leading-tight">
          You read the labels. You do the research. It still feels like a
          guessing game.
        </h2>
        <div className="space-y-5 text-lg text-warm-600 leading-relaxed text-left">
          <p>
            The pet industry is built on vague claims. &quot;Natural.&quot; &quot;Wholesome.&quot;
            &quot;Premium.&quot; Words that sound good, mean nothing, and appear on
            products full of artificial preservatives, mystery fillers, and
            ingredients you can&apos;t pronounce.
          </p>
          <p>
            Most pet owners spend hours Googling every new product — scanning
            Reddit, decoding ingredient panels, trying to figure out if
            &quot;by-product meal&quot; is actually bad — only to still feel unsure at
            checkout.
          </p>
          <p className="font-medium text-warm-800">
            Your pet can&apos;t read the label. That job falls to you. We built
            CleanPetList to make it easier.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── WHAT YOU GET ── */
function WhatYouGet() {
  const benefits = [
    {
      icon: "📬",
      title: "Clean product picks, every week",
      body: "We find, vet, and recommend the best organic, natural, and toxin-free pet products across food, treats, supplements, toys, and accessories. One email. Real recommendations.",
    },
    {
      icon: "🏷️",
      title: "Ingredient breakdowns you can actually understand",
      body: "We don't just say a product is clean — we show you why. What's in it, what's not, and what to look for on your own.",
    },
    {
      icon: "🗂️",
      title: "Early access to the full directory",
      body: "We're building a searchable directory of every vetted clean pet product. Subscribers get in first, before public launch.",
    },
  ];

  return (
    <section className="bg-white border-y border-warm-200 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-500 mb-4">
            What You Get
          </span>
          <h2 className="font-display text-4xl font-bold text-warm-900">
            What&apos;s in the newsletter
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-warm-50 rounded-2xl border border-warm-200 p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-2xl">
                {b.icon}
              </div>
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
    {
      n: "1",
      title: "Enter your email",
      body: "Takes 10 seconds. No credit card, no account, no commitment.",
    },
    {
      n: "2",
      title: "Get clean picks every week",
      body: "Vetted products across every category, straight to your inbox every week.",
    },
    {
      n: "3",
      title: "Shop with confidence",
      body: "We link directly to the brand. No middleman, no markup, no sponsored picks.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-warm-50 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-500 mb-4">
            How It Works
          </span>
          <h2 className="font-display text-4xl font-bold text-warm-900">
            Simple.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-brand-500 text-white flex items-center justify-center text-2xl font-bold font-display">
                {s.n}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute" />
              )}
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
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-500 mb-4">
            Who It&apos;s For
          </span>
          <h2 className="font-display text-4xl font-bold text-warm-900">
            This is for you if...
          </h2>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-warm-50 rounded-xl border border-warm-200 px-6 py-4">
              <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold">
                ✓
              </span>
              <p className="text-base text-warm-700 leading-relaxed">{item}</p>
            </div>
          ))}
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
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-300 mb-6">
          Why We&apos;re Building This
        </span>
        <blockquote className="font-display text-2xl sm:text-3xl font-medium text-white leading-relaxed mb-8">
          &ldquo;We started CleanPetList because we were frustrated. Finding clean,
          trustworthy pet products meant spending hours reading ingredient
          panels, cross-referencing Reddit threads, and still feeling unsure.
          There&apos;s no shortage of pet products. There&apos;s a shortage of honest
          information about them.&rdquo;
        </blockquote>
        <p className="text-brand-300 text-base">
          So we&apos;re building it — a newsletter first, a full directory soon. No
          sponsored content. No products we wouldn&apos;t give our own pets.
        </p>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FAQ() {
  const faqs = [
    {
      q: "Is this really free?",
      a: "Yes. The newsletter is free. The directory (coming soon) will be free to browse.",
    },
    {
      q: "How do you pick products?",
      a: "We screen every product against a strict set of standards: no artificial preservatives, no synthetic dyes, no ambiguous ingredient sourcing. If it doesn't pass, it doesn't get recommended.",
    },
    {
      q: "How often do you send emails?",
      a: "Once a week. Never more unless you want it.",
    },
    {
      q: "What kinds of pets do you cover?",
      a: "Dogs and cats to start. More coming based on what our readers want.",
    },
    {
      q: "Do you take sponsored recommendations?",
      a: "No. We don't accept payment to recommend products. Ever.",
    },
  ];

  return (
    <section id="faq" className="bg-warm-50 py-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-500 mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl font-bold text-warm-900">
            Good questions.
          </h2>
        </div>
        <div className="divide-y divide-warm-200">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <h3 className="text-lg font-semibold text-warm-900 mb-2">
                {faq.q}
              </h3>
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
          Your pet can&apos;t read the label.
          <br />
          You can — and now you have backup.
        </h2>
        <p className="text-lg text-brand-100 mb-10 leading-relaxed">
          Join the newsletter and get clean pet product picks every week. Free,
          honest, and actually useful.
        </p>
        <form className="max-w-md mx-auto space-y-3">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="w-full px-5 py-3 text-base rounded-lg bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-accent-400 border-0"
          />
          <button
            type="submit"
            className="w-full py-3 text-base font-semibold bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
          >
            Join Free
          </button>
          <p className="text-sm text-brand-200">
            Unsubscribe anytime. We&apos;re not into spam any more than you are.
          </p>
        </form>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className="bg-warm-900 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg font-bold text-white">
          Clean<span className="text-brand-300">Pet</span>List
        </span>
        <p className="text-sm text-warm-500 text-center">
          © {new Date().getFullYear()} CleanPetList. Honest pet product picks, weekly.
        </p>
        <a href="#" className="text-sm text-warm-500 hover:text-white transition-colors">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
