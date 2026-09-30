/*
 * East Consulting LLC — About Us Page (/about)
 * Design: Modern Momentum — Navy & Amber
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, CheckCircle2, Target, Eye, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const values = [
    {
      icon: Target,
      title: "Precision",
      desc: "We don't offer generic advice. Every recommendation is tailored to your specific business stage, industry, and funding goals.",
    },
    {
      icon: Eye,
      title: "Transparency",
      desc: "We walk you through every step with full clarity — no hidden fees, no vague promises, just a clear roadmap to success.",
    },
    {
      icon: Heart,
      title: "Commitment",
      desc: "Your success is our mission. We stay engaged throughout your journey, from entity formation all the way to funding readiness.",
    },
  ];

  const whyItems = [
    "Most entrepreneurs skip critical setup steps that disqualify them from funding",
    "Banks and investors verify your business foundation before they commit",
    "A properly structured business separates personal and business liability",
    "A professional business identity builds trust with customers, partners, and banks",
    "The right structure unlocks tax advantages unavailable to individuals",
    "Investors look for legitimacy — we help you build it from day one",
  ];

  const processSteps = [
    { num: "01", title: "Business Entity Formation", desc: "Register your LLC or Corporation with the Secretary of State with the right structure for your goals." },
    { num: "02", title: "EIN & Business Identity", desc: "Obtain your Employer Identification Number and establish your professional business identity." },
    { num: "03", title: "Business Banking", desc: "Open a dedicated business bank account to separate finances and establish banking history." },
    { num: "04", title: "Professional Presence", desc: "Set up your business domain, professional email, phone number, and Google Business Profile so customers can find and trust you." },
    { num: "05", title: "Operations & Bookkeeping", desc: "Put a bookkeeping system and merchant account in place so your finances stay organized and documented." },
    { num: "06", title: "Funding Readiness", desc: "With your foundation in place, position your business to access capital and investor funding." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-[oklch(0.18_0.06_255)] pt-28 pb-16">
        <div className="container">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
            <Link href="/" className="hover:text-[oklch(0.72_0.17_70)] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/70">About Us</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[oklch(0.72_0.17_70)]" />
              <span className="text-[oklch(0.72_0.17_70)] text-xs font-['Barlow_Condensed'] tracking-widest uppercase font-semibold">
                Our Story
              </span>
            </div>
            <h1 className="font-['Barlow_Condensed'] font-bold text-white text-5xl lg:text-7xl uppercase leading-none mb-6">
              Built to Help <span className="text-[oklch(0.72_0.17_70)]">Entrepreneurs</span> Win
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              East Consulting LLC was founded on a simple belief: every entrepreneur deserves access to the knowledge and structure that positions their business for real success — not just an idea, but a fundable, legally sound, professionally structured enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[oklch(0.98_0.005_80)] py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[oklch(0.72_0.17_70)]" />
                <span className="text-[oklch(0.72_0.17_70)] text-xs font-['Barlow_Condensed'] tracking-widest uppercase font-semibold">
                  Who We Are
                </span>
              </div>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-4xl lg:text-5xl uppercase leading-none mb-6">
                Your Business Development Partner
              </h2>
              <p className="text-[oklch(0.45_0.01_255)] text-base leading-relaxed mb-5">
                East Consulting LLC is a business development consulting firm specializing in helping entrepreneurs establish their businesses the right way — from the ground up. We guide you through every foundational step: entity formation, professional setup, business banking, and funding readiness.
              </p>
              <p className="text-[oklch(0.45_0.01_255)] text-base leading-relaxed mb-8">
                We understand that most people who want to start a business don't know what they don't know. The steps that banks and investors look for are rarely taught — and skipping them can cost you years of opportunity. That's where we come in.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[oklch(0.72_0.17_70)] text-[oklch(0.18_0.06_255)] font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest px-7 py-3.5 hover:bg-[oklch(0.65_0.18_70)] transition-colors duration-200"
              >
                Work With Us <ChevronRight size={16} />
              </Link>
            </div>
            <div className="space-y-4">
              <div className="bg-[oklch(0.18_0.06_255)] p-8">
                <h3 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.72_0.17_70)] text-xl uppercase tracking-wide mb-3">Our Mission</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  To empower entrepreneurs with the knowledge, structure, and strategy needed to build legitimate, fundable businesses — closing the gap between a great idea and a business that banks and investors take seriously.
                </p>
              </div>
              <div className="bg-[oklch(0.72_0.17_70)] p-8">
                <h3 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-xl uppercase tracking-wide mb-3">Our Vision</h3>
                <p className="text-[oklch(0.18_0.06_255)]/80 text-sm leading-relaxed">
                  A world where every entrepreneur has equal access to the tools, knowledge, and structure that make business success not just possible — but inevitable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[oklch(0.18_0.06_255)] py-20">
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[oklch(0.72_0.17_70)]" />
              <span className="text-[oklch(0.72_0.17_70)] text-xs font-['Barlow_Condensed'] tracking-widest uppercase font-semibold">
                What Drives Us
              </span>
              <div className="w-8 h-px bg-[oklch(0.72_0.17_70)]" />
            </div>
            <h2 className="font-['Barlow_Condensed'] font-bold text-white text-4xl lg:text-5xl uppercase leading-none">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-white/10 p-8 hover:border-[oklch(0.72_0.17_70)]/50 transition-colors duration-300">
                <div className="w-12 h-12 bg-[oklch(0.72_0.17_70)]/15 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[oklch(0.72_0.17_70)]" />
                </div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-white text-xl uppercase tracking-wide mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Proper Setup Matters */}
      <section className="bg-[oklch(0.98_0.005_80)] py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[oklch(0.72_0.17_70)]" />
                <span className="text-[oklch(0.72_0.17_70)] text-xs font-['Barlow_Condensed'] tracking-widest uppercase font-semibold">
                  The Problem We Solve
                </span>
              </div>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-4xl lg:text-5xl uppercase leading-none mb-6">
                Why Proper Setup <span className="text-[oklch(0.72_0.17_70)]">Matters</span>
              </h2>
              <p className="text-[oklch(0.45_0.01_255)] text-base leading-relaxed">
                The difference between a business that gets funded and one that doesn't often has nothing to do with the idea — it has everything to do with the foundation. Most entrepreneurs learn this the hard way. We make sure you get it right from the start.
              </p>
            </div>
            <ul className="space-y-4">
              {whyItems.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <CheckCircle2 size={18} className="text-[oklch(0.72_0.17_70)] shrink-0 mt-0.5" />
                  <span className="text-[oklch(0.35_0.04_255)] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our 6-Step Process */}
      <section className="bg-[oklch(0.18_0.06_255)] py-20">
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[oklch(0.72_0.17_70)]" />
              <span className="text-[oklch(0.72_0.17_70)] text-xs font-['Barlow_Condensed'] tracking-widest uppercase font-semibold">
                How We Work
              </span>
              <div className="w-8 h-px bg-[oklch(0.72_0.17_70)]" />
            </div>
            <h2 className="font-['Barlow_Condensed'] font-bold text-white text-4xl lg:text-5xl uppercase leading-none">
              Our 6-Step Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="bg-white/5 border border-white/10 p-7 hover:border-[oklch(0.72_0.17_70)]/40 transition-colors duration-300">
                <div className="font-['Barlow_Condensed'] font-bold text-[oklch(0.72_0.17_70)] text-4xl leading-none mb-4 opacity-60">
                  {step.num}
                </div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-white text-lg uppercase tracking-wide mb-3">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.72_0.17_70)] py-16">
        <div className="container text-center">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-4xl lg:text-5xl uppercase leading-none mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[oklch(0.18_0.06_255)]/75 text-base mb-8 max-w-xl mx-auto">
            Book a free consultation and let's map out exactly what your business needs to become funding-ready.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/booking/22Ig6MGZ2XELV3Qi9Zr3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[oklch(0.18_0.06_255)] text-white font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest px-8 py-4 hover:bg-[oklch(0.25_0.06_255)] transition-colors duration-200"
          >
            Book a Free Consultation <ChevronRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
