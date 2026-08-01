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
  Phone,
  Mail,
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
        "Understand who your real customer is, what problem you're truly solving, and how to position your offer for maximum capital. We help you validate your market before you invest heavily.",
      features: ["Real customer identification", "Core problem articulation", "Value proposition development", "Market validation research"],
    },
    {
      icon: Briefcase,
      title: "Business Launch Consulting",
      description:
        "From idea to market in 90 days. We provide a structured roadmap to take your business from concept to operational — with the right platforms, tools, and strategies to generate capital quickly.",
      features: ["90-day launch roadmap", "Platform selection guidance", "Capital model development", "Launch execution support"],
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
                  detail: "support@eastconsultingllc.com",
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

          {/* GoHighLevel Form Side */}
          <div className="reveal stagger-2">
            <div className="bg-white">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/tDLheLWGJli1VwLbzgLi"
                style={{ width: "100%", height: "600px", border: "none", borderRadius: "0px" }}
                id="inline-tDLheLWGJli1VwLbzgLi"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Business Coaching"
                data-height="600"
                data-layout-iframe-id="inline-tDLheLWGJli1VwLbzgLi"
                data-form-id="tDLheLWGJli1VwLbzgLi"
                title="Business Coaching"
              />
            </div>
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

        <WhySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
