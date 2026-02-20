"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import Image from "next/image";

// ── Scroll-triggered reveal ────────────────────────────────────────────────
function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "right";
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const translateInit = direction === "right" ? "translateX(16px)" : "translateY(22px)";
    el.style.opacity = "0";
    el.style.transform = translateInit;
    el.style.transition = `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          obs.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export default function V2() {
  return (
    <div className="min-h-screen bg-warm-50">

      {/* ── Global micro-interaction styles ── */}
      <style>{`
        @keyframes heroFade {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-badge { animation: heroFade 0.65s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
        .hero-h1    { animation: heroFade 0.65s cubic-bezier(0.22,1,0.36,1) 0.3s both; }
        .hero-sub   { animation: heroFade 0.65s cubic-bezier(0.22,1,0.36,1) 0.45s both; }
        .hero-form  { animation: heroFade 0.65s cubic-bezier(0.22,1,0.36,1) 0.58s both; }

        /* Nav links underline slide */
        .nav-link { position: relative; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1.5px;
          background: #3D6B4F;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }

        /* Form focus ring */
        .form-wrap:focus-within {
          border-color: #7DB49A !important;
          box-shadow: 0 0 0 3px rgba(61,107,79,0.08);
          transition: border-color 0.25s, box-shadow 0.25s;
        }

        /* Benefit cards */
        .benefit-card {
          transition: background 0.3s, border-color 0.3s, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s;
        }
        .benefit-card:hover {
          border-color: #AECFBC !important;
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(61,107,79,0.1);
          background: #ffffff !important;
        }

        /* How It Works steps */
        .step-item { transition: transform 0.35s cubic-bezier(0.22,1,0.36,1); }
        .step-item:hover { transform: translateY(-5px); }
        .step-circle {
          transition: background 0.3s, border-color 0.3s, color 0.3s, box-shadow 0.3s;
        }
        .step-item:hover .step-circle {
          background: #3D6B4F !important;
          border-color: #3D6B4F !important;
          color: #fff !important;
          box-shadow: 0 4px 24px rgba(61,107,79,0.3);
        }

        /* Checklist items */
        .check-item {
          transition: background 0.25s, border-color 0.25s, transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .check-item:hover {
          background: #EDF4F0 !important;
          border-color: #AECFBC !important;
          transform: translateX(5px);
        }

        /* Mission bar items */
        .mission-item { transition: color 0.25s; }
        .mission-item:hover { color: #315741 !important; }

        /* FAQ rows */
        .faq-row h3 { transition: color 0.2s; }
        .faq-row:hover h3 { color: #3D6B4F !important; }

        /* CTA button */
        .btn-primary { transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s; }
        .btn-primary:hover {
          opacity: 0.92;
          transform: scale(1.025);
          box-shadow: 0 4px 16px rgba(61,107,79,0.3);
        }
      `}</style>

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

/* ── NAV ──────────────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(250,250,248,0.88)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid #E8E6E1",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-bold text-warm-900">
          Clean<span style={{ color: "#3D6B4F" }}>Pet</span>List
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-warm-500">
          <a href="#how-it-works" className="nav-link hover:text-warm-900 transition-colors">How It Works</a>
          <a href="#faq" className="nav-link hover:text-warm-900 transition-colors">FAQ</a>
        </nav>
        <a
          href="#join"
          className="px-4 py-2 text-sm font-semibold rounded-lg btn-primary"
          style={{ background: "#3D6B4F", color: "#fff" }}
        >
          Join Free
        </a>
      </div>
    </header>
  );
}

/* ── HERO ─────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      id="join"
      className="relative overflow-hidden"
      style={{ height: "100vh", minHeight: "680px" }}
    >
      {/* Photo fills the entire viewport — fully visible, no overlays */}
      <Image
        src="https://images.unsplash.com/photo-1594149929911-78975a43d4f5?w=1800&q=85"
        alt="Happy golden retriever in natural sunlight"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Bottom transition to next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-20"
        style={{ background: "linear-gradient(to top, #FAFAF8, transparent)" }}
      />

      {/* Content — solid floating card anchored left */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div
            className="rounded-2xl p-10 space-y-0"
            style={{
              background: "#FAFAF8",
              boxShadow: "0 16px 64px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06)",
              maxWidth: "520px",
            }}
          >
            {/* Badge */}
            <div
              className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{ background: "#EDF4F0", border: "1px solid #AECFBC" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#3D6B4F" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#315741" }}>
                Free Weekly Newsletter
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-h1 leading-tight mb-4 text-warm-900"
              style={{
                fontFamily: "var(--font-lora)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 2.8vw, 2.8rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Everything your pet needs.
              <br />
              <span style={{ color: "#3D6B4F" }}>Nothing they shouldn&apos;t have.</span>
            </h1>

            {/* Subheadline */}
            <p
              className="hero-sub leading-relaxed mb-8 text-warm-600"
              style={{ fontSize: "1rem" }}
            >
              Vetted organic and natural pet products — food, treats, toys,
              supplements — sent to your inbox every week. Free.
            </p>

            {/* Email form */}
            <form className="hero-form space-y-3">
              <div
                className="form-wrap flex gap-2 p-1.5 rounded-xl bg-white"
                style={{ border: "1px solid #E8E6E1", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-4 py-2.5 text-base bg-transparent focus:outline-none text-warm-900 placeholder-warm-400"
                  style={{ caretColor: "#3D6B4F" }}
                />
                <button
                  type="submit"
                  className="btn-primary shrink-0 px-5 py-2.5 text-sm font-semibold rounded-lg"
                  style={{ background: "#3D6B4F", color: "#fff" }}
                >
                  Join Free
                </button>
              </div>
              <p className="text-xs pl-1 text-warm-400">
                No spam. No greenwashing. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-400">
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

/* ── MISSION BAR ──────────────────────────────────────────────────────────── */
function MissionBar() {
  const items = [
    "We read the labels so you don't have to",
    "No artificial preservatives. Ever.",
    "Honest recommendations, not sponsored ones",
  ];
  return (
    <section style={{ background: "#EDF4F0", borderBottom: "1px solid #D5E8DC" }}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              {i > 0 && (
                <span className="hidden sm:block w-px h-4 shrink-0 bg-brand-200" />
              )}
              <p className="mission-item text-sm font-medium text-center text-brand-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PROBLEM ──────────────────────────────────────────────────────────────── */
function Problem() {
  return (
    <section className="bg-warm-50 pt-24 pb-0 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <Reveal>
          <span className="text-xs font-semibold tracking-widest uppercase block mb-6 text-brand-500">
            The Problem
          </span>
          <h2
            className="font-display font-bold text-warm-900 mb-10 leading-tight"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            You read the labels. You do the research.{" "}
            <span className="text-warm-400">It still feels like a guessing game.</span>
          </h2>
        </Reveal>
        <div className="space-y-5 text-lg leading-relaxed text-warm-600">
          <Reveal delay={100}>
            <p>
              The pet industry is built on vague claims. &quot;Natural.&quot; &quot;Wholesome.&quot; &quot;Premium.&quot;{" "}
              Words that sound good, mean nothing, and appear on products full of artificial
              preservatives, mystery fillers, and ingredients you can&apos;t pronounce.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p>
              Most pet owners spend hours Googling every new product — scanning Reddit, decoding
              ingredient panels, trying to figure out if &quot;by-product meal&quot; is actually bad — only
              to still feel unsure at checkout.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="font-medium text-warm-800">
              Your pet can&apos;t read the label. That job falls to you. We built CleanPetList to make it easier.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Full-width editorial image strip */}
      <div className="relative h-64 sm:h-80">
        <Image
          src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?w=1400&q=80"
          alt="Pet owner hugging their happy dog"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}

/* ── WHAT YOU GET ─────────────────────────────────────────────────────────── */
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
    <section className="bg-white py-24 border-y border-warm-200">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase block mb-4 text-brand-500">
              What You Get
            </span>
            <h2 className="font-display text-4xl font-bold text-warm-900">What&apos;s in the newsletter</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <Reveal
              key={i}
              delay={i * 130}
              className="benefit-card rounded-2xl p-7 space-y-4 bg-warm-50"
              style={{ border: "1px solid #E8E6E1" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: "#EDF4F0", border: "1px solid #D5E8DC" }}
              >
                {b.icon}
              </div>
              <h3 className="text-lg font-semibold text-warm-900 leading-snug">{b.title}</h3>
              <p className="text-base leading-relaxed text-warm-600">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── HOW IT WORKS ─────────────────────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    { n: "1", title: "Enter your email", body: "Takes 10 seconds. No credit card, no account, no commitment." },
    { n: "2", title: "Get clean picks every week", body: "Vetted products across every category, straight to your inbox every week." },
    { n: "3", title: "Shop with confidence", body: "We link directly to the brand. No middleman, no markup, no sponsored picks." },
  ];
  return (
    <section id="how-it-works" className="bg-warm-100 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase block mb-4 text-brand-500">
              How It Works
            </span>
            <h2 className="font-display text-4xl font-bold text-warm-900">Simple.</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="step-item flex flex-col items-center text-center space-y-5">
                <div
                  className="step-circle w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold font-display"
                  style={{
                    background: "#EDF4F0",
                    border: "2px solid #AECFBC",
                    color: "#3D6B4F",
                  }}
                >
                  {s.n}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-warm-900">{s.title}</h3>
                  <p className="text-base leading-relaxed max-w-xs text-warm-600">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHO IT'S FOR ─────────────────────────────────────────────────────────── */
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
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase block mb-4 text-brand-500">
              Who It&apos;s For
            </span>
            <h2 className="font-display text-4xl font-bold text-warm-900">This is for you if...</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="right">
            <div className="relative hidden lg:block h-[460px] rounded-3xl overflow-hidden border border-warm-200">
              <Image
                src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800&q=80"
                alt="Healthy cat portrait"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="space-y-3">
            {items.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className="check-item flex items-start gap-4 rounded-xl px-5 py-4 bg-warm-50"
                  style={{ border: "1px solid #E8E6E1" }}
                >
                  <span
                    className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "#3D6B4F" }}
                  >
                    ✓
                  </span>
                  <p className="text-base leading-relaxed text-warm-700">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FOUNDER NOTE ─────────────────────────────────────────────────────────── */
function FounderNote() {
  return (
    <section className="bg-brand-500 py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <Reveal>
          <div
            className="font-display leading-none mb-1 select-none"
            style={{ fontSize: "6rem", color: "rgba(255,255,255,0.15)" }}
          >
            &ldquo;
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase block mb-7 text-brand-200">
            Why We&apos;re Building This
          </span>
        </Reveal>
        <Reveal delay={120}>
          <blockquote className="font-display text-2xl sm:text-3xl font-medium text-white leading-relaxed mb-8">
            We started CleanPetList because we were frustrated. Finding clean, trustworthy pet
            products meant spending hours reading ingredient panels, cross-referencing Reddit threads,
            and still feeling unsure. There&apos;s no shortage of pet products. There&apos;s a
            shortage of honest information about them.
          </blockquote>
        </Reveal>
        <Reveal delay={220}>
          <div className="w-10 h-px mx-auto mb-7 bg-brand-300" />
          <p className="text-base text-brand-100">
            So we&apos;re building it — a newsletter first, a full directory soon. No sponsored
            content. No products we wouldn&apos;t give our own pets.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── FAQ ──────────────────────────────────────────────────────────────────── */
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
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase block mb-4 text-brand-500">FAQ</span>
            <h2 className="font-display text-4xl font-bold text-warm-900">Good questions.</h2>
          </div>
        </Reveal>
        <div>
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 70}>
              <div
                className="faq-row py-6"
                style={{ borderTop: i === 0 ? "none" : "1px solid #E8E6E1" }}
              >
                <h3 className="text-lg font-semibold text-warm-900 mb-2">{faq.q}</h3>
                <p className="text-base leading-relaxed text-warm-600">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA ────────────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="bg-brand-500 py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <Reveal>
          <span className="text-xs font-semibold tracking-widest uppercase block mb-6 text-brand-200">
            Join the List
          </span>
          <h2
            className="font-display font-bold text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            Your pet can&apos;t read the label.
            <br />
            <span className="text-brand-100">You can — and now you have backup.</span>
          </h2>
          <p className="text-lg mb-10 leading-relaxed text-brand-100">
            Join the newsletter and get clean pet product picks every week.
            Free, honest, and actually useful.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <form className="max-w-md mx-auto space-y-3">
            <div
              className="form-wrap flex gap-2 p-1.5 rounded-xl bg-white"
              style={{ border: "1px solid #E8E6E1", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 min-w-0 px-4 py-2.5 text-base bg-transparent focus:outline-none text-warm-900 placeholder-warm-400"
                style={{ caretColor: "#3D6B4F" }}
              />
              <button
                type="submit"
                className="btn-primary shrink-0 px-5 py-2.5 text-sm font-semibold rounded-lg"
                style={{ background: "#C4813A", color: "#fff" }}
              >
                Join Free
              </button>
            </div>
            <p className="text-xs text-brand-200">
              Unsubscribe anytime. We&apos;re not into spam any more than you are.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ── FOOTER ───────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-warm-900 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg font-bold text-white">
          Clean<span className="text-brand-300">Pet</span>List
        </span>
        <p className="text-sm text-center text-warm-600">
          © {new Date().getFullYear()} CleanPetList. Honest pet product picks, weekly.
        </p>
        <a href="#" className="text-sm text-warm-600 hover:text-white transition-colors">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
