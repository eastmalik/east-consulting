/*
 * East Consulting LLC — Home Page
 * Design: Modern Momentum — Navy & Amber
 * Sections: Hero, Stats, Services, Process, About, Resources, CTA, Contact
 * Deep navy + amber palette, Barlow Condensed + Source Sans 3 typography
 * Asymmetric layouts, angled section dividers, scroll-reveal animations
 */

import { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Building2,
  CreditCard,
  TrendingUp,
  Target,
  Briefcase,
  FileText,
  Star,
  Phone,
  Mail,
  Send,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// ─── Animated Counter ───────────────────────────────────────────────────────
function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[oklch(0.12_0.05_255)]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663577067712/m6cpGomBnM8CEV4rGdFEXc/hero-abstract-v2-Ffp4aEFBeeoRj6U8avu5tM.webp)`,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.05_255)/95] via-[oklch(0.12_0.05_255)/80] to-[oklch(0.12_0.05_255)/40]" />
      {/* Amber diagonal accent */}
      <div className="absolute top-0 right-0 w-1 h-full bg-[oklch(0.72_0.17_70)]" />

      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="ec-section-label text-[oklch(0.72_0.17_70)] mb-6">
            Business Development Consulting
          </div>

          {/* Headline */}
          <h1 className="font-['Barlow_Condensed'] font-bold text-white leading-none mb-6">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase">
              Build Your
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase text-[oklch(0.72_0.17_70)]">
              Business Right.
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase">
              Get Funded.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/75 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl font-['Source_Sans_3']">
            East Consulting LLC guides entrepreneurs through every step of establishing a legally sound, 
            credit-ready business — positioned to attract investors and secure funding.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="ec-btn-primary text-base px-8 py-4"
            >
              Book a Free Consultation
              <ChevronRight size={18} />
            </button>
            <button
              onClick={() => handleNavClick("#services")}
              className="ec-btn-outline text-base px-8 py-4 border-white/40 text-white hover:border-[oklch(0.72_0.17_70)] hover:text-[oklch(0.72_0.17_70)] hover:bg-transparent"
            >
              Explore Services
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 mt-12 pt-12 border-t border-white/15">
            {[
              "Entity Formation",
              "Business Credit Building",
              "Funding Readiness",
              "90-Day Launch System",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle2 size={14} className="text-[oklch(0.72_0.17_70)]" />
                <span className="font-['Source_Sans_3']">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom angle */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60 L1440 0 L1440 60 Z" fill="oklch(0.98 0.005 80)" />
        </svg>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: "Business Entity Formation",
      description:
        "We guide you through selecting and registering the right business structure — LLC, Corporation, or Partnership — with your state's Secretary of State, ensuring your business is legally established from day one.",
      features: ["Name verification & trademark check", "Secretary of State filing", "Registered Agent setup", "Articles of Incorporation"],
    },
    {
      icon: FileText,
      title: "Professional Business Setup",
      description:
        "A legitimate business needs more than an idea. We help you establish every foundational element: professional email, business address, phone number, EIN, DUNS number, and Google Business Profile.",
      features: ["EIN registration (IRS)", "Professional domain & email", "Business address & phone", "Google Business Profile"],
    },
    {
      icon: CreditCard,
      title: "Business Credit Building",
      description:
        "We walk you through building a strong business credit profile from scratch — opening the right tradelines, establishing credit history, and positioning your business to qualify for funding.",
      features: ["Business bank account setup", "Tradeline strategy", "NAV & credit monitoring", "Net-30 vendor accounts"],
    },
    {
      icon: TrendingUp,
      title: "Funding Readiness Strategy",
      description:
        "Getting funded requires more than a good idea — lenders verify your business foundation. We ensure every element is in place so your business is positioned to access capital, credit lines, and investors.",
      features: ["Funding checklist completion", "Lender-ready documentation", "Business credit score building", "Capital access strategy"],
    },
    {
      icon: Target,
      title: "Market Positioning",
      description:
        "Understand who your real customer is, what problem you're truly solving, and how to position your offer for maximum revenue. We help you validate your market before you invest heavily.",
      features: ["Real customer identification", "Core problem articulation", "Value proposition development", "Market validation research"],
    },
    {
      icon: Briefcase,
      title: "Business Launch Consulting",
      description:
        "From idea to market in 90 days. We provide a structured roadmap to take your business from concept to operational — with the right platforms, tools, and strategies to generate revenue quickly.",
      features: ["90-day launch roadmap", "Platform selection guidance", "Revenue model development", "Launch execution support"],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[oklch(0.98_0.005_80)]">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-14 reveal">
          <div className="ec-section-label mb-4">What We Do</div>
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-4xl lg:text-5xl xl:text-6xl uppercase leading-none mb-4">
            Services Built for{" "}
            <span className="text-[oklch(0.72_0.17_70)]">Serious Entrepreneurs</span>
          </h2>
          <p className="text-[oklch(0.55_0.01_255)] text-lg leading-relaxed">
            Every service we offer is designed with one goal: getting your business properly established and funding-ready. No shortcuts. No guesswork.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`ec-card p-7 reveal stagger-${(i % 3) + 1}`}
              >
                <div className="w-12 h-12 bg-[oklch(0.72_0.17_70)]/10 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-[oklch(0.72_0.17_70)]" />
                </div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-xl uppercase tracking-wide mb-3">
                  {service.title}
                </h3>
                <p className="text-[oklch(0.55_0.01_255)] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[oklch(0.35_0.04_255)]">
                      <CheckCircle2 size={13} className="text-[oklch(0.72_0.17_70)] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Process Section ──────────────────────────────────────────────────────────
function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Verify Your Business Name",
      description:
        "Before investing in branding, we verify your desired business name is legally available — checking general availability and federal trademark status through the USPTO.",
    },
    {
      num: "02",
      title: "Set Up Your Digital Presence",
      description:
        "Establish a professional domain and business email. A professional email signals credibility to lenders, partners, and customers — not a hobby, a real business.",
    },
    {
      num: "03",
      title: "File with the Secretary of State",
      description:
        "Register your business entity (LLC, Corporation, etc.) with your state. This is the legal foundation everything else is built upon.",
    },
    {
      num: "04",
      title: "Obtain Your EIN & Business Identifiers",
      description:
        "Secure your Employer Identification Number (EIN) from the IRS and your DUNS Number from Dun & Bradstreet — essential for business credit and banking.",
    },
    {
      num: "05",
      title: "Open Business Banking & Merchant Accounts",
      description:
        "Establish a dedicated business bank account and merchant processing account. This separates personal and business finances — a requirement for funding.",
    },
    {
      num: "06",
      title: "Build Business Credit",
      description:
        "Begin building your business credit profile through strategic tradelines, vendor accounts, and credit monitoring tools that report to business credit bureaus.",
    },
  ];

  return (
    <section
      id="process"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663577067712/m6cpGomBnM8CEV4rGdFEXc/services-bg-jS2GRvijWns3nn7ZcGMTm9.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[oklch(0.18_0.06_255)/92]" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14 reveal">
          <div className="ec-section-label text-[oklch(0.72_0.17_70)] mb-4">Our Process</div>
          <h2 className="font-['Barlow_Condensed'] font-bold text-white text-4xl lg:text-5xl xl:text-6xl uppercase leading-none mb-4">
            The 6-Step Path to a{" "}
            <span className="text-[oklch(0.72_0.17_70)]">Funding-Ready Business</span>
          </h2>
          <p className="text-white/65 text-lg leading-relaxed">
            Our proven framework walks you through every critical step — in the right order — so lenders and vendors see a legitimate, creditworthy business.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`reveal stagger-${(i % 3) + 1} p-7 border border-white/10 hover:border-[oklch(0.72_0.17_70)]/50 transition-all duration-300 bg-white/5 backdrop-blur-sm`}
            >
              <div className="font-['Barlow_Condensed'] font-bold text-6xl text-[oklch(0.72_0.17_70)]/25 leading-none mb-4 select-none">
                {step.num}
              </div>
              <h3 className="font-['Barlow_Condensed'] font-bold text-white text-xl uppercase tracking-wide mb-3">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[oklch(0.98_0.005_80)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663577067712/m6cpGomBnM8CEV4rGdFEXc/process-bg-T87ZAZSBqEosyjrYSQiHpJ.webp"
                alt="Business planning and strategy"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              {/* Amber accent box */}
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[oklch(0.72_0.17_70)] hidden lg:flex flex-col items-center justify-center text-[oklch(0.18_0.06_255)]">
                <span className="font-['Barlow_Condensed'] font-bold text-3xl leading-none">90</span>
                <span className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-wide">Day</span>
                <span className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-wide">System</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="reveal order-1 lg:order-2">
            <div className="ec-section-label mb-4">About East Consulting</div>
            <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-4xl lg:text-5xl uppercase leading-none mb-6">
              We Build Businesses{" "}
              <span className="text-[oklch(0.72_0.17_70)]">That Are Ready</span>{" "}
              for the Next Level
            </h2>
            <p className="text-[oklch(0.55_0.01_255)] text-base leading-relaxed mb-5">
              At East Consulting LLC, we believe every entrepreneur deserves the tools and knowledge to build a business that lasts. We specialize in helping purpose-driven entrepreneurs establish their businesses correctly — legally, financially, and strategically.
            </p>
            <p className="text-[oklch(0.55_0.01_255)] text-base leading-relaxed mb-8">
              The United States tax code incentivizes three groups: business owners, investors, and real estate owners. Our mission is to help you position yourself as a legitimate business owner — with the structure, credit, and documentation to access the funding you need to grow.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Foundation First",
                  desc: "We build your business on a solid legal and financial foundation before anything else.",
                },
                {
                  title: "Credit-Ready from Day One",
                  desc: "Every step we take is designed to position your business for funding and credit access.",
                },
                {
                  title: "Real Results, Real Strategy",
                  desc: "We don't sell what we think you need — we guide you based on what actually works.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-1 bg-[oklch(0.72_0.17_70)] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-base uppercase tracking-wide mb-1">
                      {title}
                    </h4>
                    <p className="text-[oklch(0.55_0.01_255)] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="ec-btn-primary"
            >
              Work With Us
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Resources / Checklist Section ───────────────────────────────────────────
function ResourcesSection() {
  const checklistItems = [
    { item: "Obtain a business address", resource: "ipostal1.com" },
    { item: "Obtain a business telephone number", resource: "Grasshopper.com" },
    { item: "Obtain Articles of Incorporation", resource: "Secretary of State" },
    { item: "Obtain EIN number", resource: "irs.gov" },
    { item: "Purchase Domain Name", resource: "domains.google.com" },
    { item: "Set up professional email", resource: "GoDaddy / Zoho" },
    { item: "Obtain DUNS Number", resource: "dnb.com" },
    { item: "Set up Business Profile on Google", resource: "google.com/business" },
    { item: "Open Business Bank Account", resource: "Chase, BOA, or choice" },
    { item: "Set up Business Merchant Account", resource: "Stripe, PayPal, Paysley" },
    { item: "Create NAV account", resource: "nav.com" },
  ];

  const tradelines = [
    { name: "Nav Boost", cost: "$39.99/mo", benefit: "Reports business credit activity" },
    { name: "Biz Credit Central", cost: "$11.99/mo", benefit: "$2,500 Line of Credit" },
    { name: "Ecredable Business Lift", cost: "$9.95/mo", benefit: "Reports in 1–2 weeks" },
    { name: "Credit Strong (Business)", cost: "$99–$115/mo", benefit: "Installment tradeline" },
    { name: "Business Net-30 Accounts", cost: "Varies", benefit: "U-Line, Quill, Grainger" },
  ];

  return (
    <section id="resources" className="py-20 lg:py-28 bg-[oklch(0.94_0.005_255)]">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-14 reveal">
          <div className="ec-section-label mb-4">Free Resources</div>
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-4xl lg:text-5xl uppercase leading-none mb-4">
            Your Business Setup &{" "}
            <span className="text-[oklch(0.72_0.17_70)]">Credit Checklist</span>
          </h2>
          <p className="text-[oklch(0.55_0.01_255)] text-lg leading-relaxed">
            Complete these steps in order to build a legally established, credit-ready business. Each step positions you closer to funding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Business Setup Checklist */}
          <div className="reveal">
            <h3 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-[oklch(0.72_0.17_70)] flex items-center justify-center text-[oklch(0.18_0.06_255)] text-sm font-bold">1</span>
              Business Setup Checklist
            </h3>
            <div className="bg-white shadow-sm">
              {checklistItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start justify-between gap-4 px-5 py-4 ${
                    i < checklistItems.length - 1 ? "border-b border-[oklch(0.88_0.005_255)]" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-[oklch(0.72_0.17_70)] shrink-0 mt-0.5" />
                    <span className="text-[oklch(0.35_0.04_255)] text-sm leading-relaxed">{item.item}</span>
                  </div>
                  <span className="text-[oklch(0.72_0.17_70)] text-xs font-semibold whitespace-nowrap shrink-0">
                    {item.resource}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Tradelines */}
          <div className="reveal stagger-2">
            <h3 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-[oklch(0.18_0.06_255)] flex items-center justify-center text-[oklch(0.72_0.17_70)] text-sm font-bold">2</span>
              Business Tradelines
            </h3>
            <div className="bg-white shadow-sm mb-6">
              {tradelines.map((line, i) => (
                <div
                  key={i}
                  className={`px-5 py-4 ${i < tradelines.length - 1 ? "border-b border-[oklch(0.88_0.005_255)]" : ""}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-base uppercase tracking-wide">
                      {line.name}
                    </span>
                    <span className="text-[oklch(0.72_0.17_70)] font-semibold text-sm">{line.cost}</span>
                  </div>
                  <p className="text-[oklch(0.55_0.01_255)] text-sm">{line.benefit}</p>
                </div>
              ))}
            </div>

            {/* Pro Tip */}
            <div className="bg-[oklch(0.18_0.06_255)] p-6">
              <div className="flex gap-3">
                <Star size={18} className="text-[oklch(0.72_0.17_70)] shrink-0 mt-0.5" />
                <div>
                  <p className="font-['Barlow_Condensed'] font-bold text-white text-sm uppercase tracking-wide mb-1">
                    East Consulting Pro Tip
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Complete the Business Setup Checklist in order before applying for any business credit. Lenders and vendors verify these foundational elements before approving your business for tradelines or funding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Why Section ──────────────────────────────────────────────────────────────
function WhySection() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663577067712/m6cpGomBnM8CEV4rGdFEXc/cta-bg-BrB3fkT2Z5B7EhuYn5ohnL.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[oklch(0.12_0.05_255)/88]" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center reveal">
          <div className="ec-section-label justify-center mb-4 text-[oklch(0.72_0.17_70)]">
            Why Start a Business?
          </div>
          <h2 className="font-['Barlow_Condensed'] font-bold text-white text-4xl lg:text-5xl xl:text-6xl uppercase leading-none mb-6">
            The Tax Code Rewards{" "}
            <span className="text-[oklch(0.72_0.17_70)]">Business Owners</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            The U.S. tax code is not just a set of rules — it is a series of incentives designed to reward specific behaviors that grow the economy. It heavily incentivizes three groups of people: <strong className="text-white">Business Owners, Investors, and Real Estate Owners.</strong>
          </p>
          <p className="text-white/70 text-lg leading-relaxed mb-12">
            To build true generational wealth and achieve financial freedom, you must position yourself to be one or more of these. East Consulting LLC helps you take that crucial first step.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "🏢", label: "Business Owners", desc: "Write off expenses, build credit, access capital" },
              { icon: "📈", label: "Investors", desc: "Capital gains advantages and portfolio growth" },
              { icon: "🏠", label: "Real Estate Owners", desc: "Depreciation, equity, and passive income" },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="border border-white/15 p-6 bg-white/5 backdrop-blur-sm">
                <div className="text-3xl mb-3">{icon}</div>
                <h4 className="font-['Barlow_Condensed'] font-bold text-white text-lg uppercase tracking-wide mb-2">
                  {label}
                </h4>
                <p className="text-white/60 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="ec-btn-primary text-base px-10 py-4"
          >
            Start Your Business Journey
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[oklch(0.18_0.06_255)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side */}
          <div className="reveal">
            <div className="ec-section-label text-[oklch(0.72_0.17_70)] mb-4">Get In Touch</div>
            <h2 className="font-['Barlow_Condensed'] font-bold text-white text-4xl lg:text-5xl uppercase leading-none mb-6">
              Ready to Build Your{" "}
              <span className="text-[oklch(0.72_0.17_70)]">Funding-Ready Business?</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-10">
              Schedule a free consultation with East Consulting LLC. We'll assess where you are, where you want to go, and map out exactly what needs to happen to get your business properly established and positioned for funding.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Schedule a Call",
                  detail: "Book a free 30-minute consultation",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  detail: "info@eastconsultingllc.com",
                },
              ].map(({ icon: Icon, title, detail }) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[oklch(0.72_0.17_70)]/15 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[oklch(0.72_0.17_70)]" />
                  </div>
                  <div>
                    <p className="font-['Barlow_Condensed'] font-bold text-white text-sm uppercase tracking-wide">
                      {title}
                    </p>
                    <p className="text-white/60 text-sm">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div className="mt-10 p-6 border border-white/10 bg-white/5">
              <h4 className="font-['Barlow_Condensed'] font-bold text-white text-sm uppercase tracking-widest mb-4">
                What to Expect
              </h4>
              <ul className="space-y-3">
                {[
                  "Free 30-minute business assessment",
                  "Customized roadmap for your situation",
                  "Clear next steps to get funding-ready",
                  "No pressure, no obligation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/65 text-sm">
                    <CheckCircle2 size={14} className="text-[oklch(0.72_0.17_70)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="reveal stagger-2">
            {submitted ? (
              <div className="bg-white/5 border border-[oklch(0.72_0.17_70)]/40 p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <CheckCircle2 size={48} className="text-[oklch(0.72_0.17_70)] mb-5" />
                <h3 className="font-['Barlow_Condensed'] font-bold text-white text-2xl uppercase tracking-wide mb-3">
                  Message Received!
                </h3>
                <p className="text-white/65 text-base">
                  Thank you for reaching out. A member of the East Consulting team will contact you within 24 hours to schedule your free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-10">
                <h3 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-xl uppercase tracking-wide mb-6">
                  Book Your Free Consultation
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[oklch(0.35_0.04_255)] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-[oklch(0.88_0.005_255)] px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.72_0.17_70)] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[oklch(0.35_0.04_255)] mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-[oklch(0.88_0.005_255)] px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.72_0.17_70)] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[oklch(0.35_0.04_255)] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-[oklch(0.88_0.005_255)] px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.72_0.17_70)] transition-colors"
                      placeholder="(000) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[oklch(0.35_0.04_255)] mb-1.5">
                      Business Name
                    </label>
                    <input
                      type="text"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full border border-[oklch(0.88_0.005_255)] px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.72_0.17_70)] transition-colors"
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[oklch(0.35_0.04_255)] mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full border border-[oklch(0.88_0.005_255)] px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.72_0.17_70)] transition-colors bg-white text-[oklch(0.35_0.04_255)]"
                  >
                    <option value="">Select a service...</option>
                    <option value="entity">Business Entity Formation</option>
                    <option value="setup">Professional Business Setup</option>
                    <option value="credit">Business Credit Building</option>
                    <option value="funding">Funding Readiness Strategy</option>
                    <option value="market">Market Positioning</option>
                    <option value="launch">Business Launch Consulting</option>
                    <option value="full">Full 90-Day Program</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[oklch(0.35_0.04_255)] mb-1.5">
                    Tell Us About Your Business
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-[oklch(0.88_0.005_255)] px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.72_0.17_70)] transition-colors resize-none"
                    placeholder="Briefly describe your business idea or current stage..."
                  />
                </div>

                <button type="submit" className="ec-btn-primary w-full justify-center text-base py-4">
                  Send My Request
                  <Send size={16} />
                </button>

                <p className="text-[oklch(0.55_0.01_255)] text-xs mt-4 text-center">
                  We respond within 24 hours. Your information is kept strictly confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Home Page ───────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <ResourcesSection />
        <WhySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
