/*
 * East Consulting LLC — Home Page
 * Design: navy & white, laid out after the owner's chosen reference site
 * Sections: Hero, CTA strip, What We Do, Formation Steps, Ready band, Consultation
 */

import { ChevronRight, ArrowRight, Phone, Mail, MapPin, CalendarDays } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCards from "@/components/ServiceCards";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BOOKING_URL, CONTACT } from "@/lib/site";

const NAVY = "text-[oklch(0.18_0.06_255)]";
const MUTED = "text-[oklch(0.45_0.02_255)]";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden ec-navy-gradient">
      <div className="container relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">
          <div className="ec-section-label text-white/70 mb-6">Business Formation Consulting</div>
          <h1 className="font-['Barlow_Condensed'] font-bold text-white uppercase leading-[0.95] mb-6">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">East Consulting LLC</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white/75 mt-4">
              Business Formation, Done Right.
            </span>
          </h1>
          <p className="text-white/75 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
            We guide entrepreneurs through forming their business and setting up every foundational element, the right way, from day one.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="ec-btn-light text-base px-8 py-4">
              Book a Free Consultation <ChevronRight size={18} />
            </a>
            <Link href="/what-we-do" className="ec-btn-outline-light text-base px-8 py-4">
              What We Do <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA strip ────────────────────────────────────────────────────────────────
function CtaStrip() {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border-b border-[oklch(0.9_0.015_255)] hover:bg-[oklch(0.97_0.008_255)] transition-colors"
    >
      <div className={`container py-6 flex items-center justify-center gap-3 font-['Barlow_Condensed'] font-bold uppercase tracking-wider text-lg sm:text-xl text-center ${NAVY}`}>
        Book Your Free Business Formation Consultation
        <ArrowRight size={22} className="shrink-0" />
      </div>
    </a>
  );
}

// ─── What We Do ───────────────────────────────────────────────────────────────
function WhatWeDoSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 reveal">
          <div className="max-w-2xl">
            <div className={`ec-section-label mb-4 ${NAVY}`}>What We Do</div>
            <h2 className={`font-['Barlow_Condensed'] font-bold uppercase leading-none text-4xl lg:text-5xl xl:text-6xl ${NAVY}`}>
              What Can East Consulting Do for You?
            </h2>
          </div>
          <Link href="/what-we-do" className="ec-btn-outline-navy self-start lg:self-auto">
            See What We Do <ChevronRight size={16} />
          </Link>
        </div>
        <ServiceCards />
      </div>
    </section>
  );
}

// ─── Formation Steps ──────────────────────────────────────────────────────────
const steps = [
  { title: "Choose Your Structure", desc: "Select the right structure for your business: LLC, Corporation, or Partnership." },
  { title: "Verify Your Name", desc: "Name verification and a trademark check before you file." },
  { title: "File With Your State", desc: "Secretary of State filing and your Articles of Incorporation." },
  { title: "Registered Agent", desc: "Set up the Registered Agent your business needs on record." },
  { title: "EIN Registration", desc: "Register your business with the IRS and get your EIN." },
  { title: "Professional Presence", desc: "Domain, business email, address, phone number, and Google Business Profile." },
];

function StepsSection() {
  return (
    <section className="py-20 lg:py-28 ec-navy-gradient">
      <div className="container">
        <div className="max-w-2xl mb-14 reveal">
          <div className="ec-section-label text-white/70 mb-4">How It Works</div>
          <h2 className="font-['Barlow_Condensed'] font-bold text-white uppercase leading-none text-4xl lg:text-5xl xl:text-6xl mb-4">
            From Idea to Established Business
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            We take you through every step of forming and setting up your business, in order.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div key={step.title} className={`border border-white/15 bg-white/[0.04] p-7 reveal stagger-${(i % 3) + 1}`}>
              <p className="font-['Barlow_Condensed'] font-bold text-white/40 text-4xl leading-none mb-4">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-['Barlow_Condensed'] font-bold text-white text-xl uppercase tracking-wide mb-2">{step.title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Ready band ───────────────────────────────────────────────────────────────
function ReadySection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container text-center reveal">
        <div className={`ec-section-label justify-center mb-4 ${NAVY}`}>Get Started</div>
        <h2 className={`font-['Barlow_Condensed'] font-bold uppercase leading-none text-4xl lg:text-6xl mb-6 ${NAVY}`}>
          I'm Ready to Start My Business
        </h2>
        <p className={`text-lg leading-relaxed max-w-2xl mx-auto mb-10 ${MUTED}`}>
          Book a free consultation and we'll walk you through forming your business the right way.
        </p>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="ec-btn-navy text-base px-8 py-4">
          Book a Free Consultation <ChevronRight size={18} />
        </a>
      </div>
    </section>
  );
}

// ─── Free Consultation / Contact ──────────────────────────────────────────────
function ContactSection() {
  const details = [
    { icon: Phone, title: "Office Phone", detail: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: Mail, title: "Email Us", detail: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MapPin, title: "Office Address", detail: `${CONTACT.addressLine1}, ${CONTACT.addressLine2}`, href: null },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 ec-navy-gradient">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <div className="ec-section-label text-white/70 mb-4">East Consulting LLC</div>
            <h2 className="font-['Barlow_Condensed'] font-bold text-white uppercase leading-none text-4xl lg:text-6xl mb-6">
              Get a Free Consultation
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-10">
              Speak with us about the business you want to start, and we'll map out the right structure and setup for you.
            </p>
            <div className="space-y-6">
              {details.map(({ icon: Icon, title, detail, href }) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-['Barlow_Condensed'] font-bold text-white text-sm uppercase tracking-wide">{title}</p>
                    {href ? (
                      <a href={href} className="text-white/65 text-sm hover:text-white transition-colors">{detail}</a>
                    ) : (
                      <p className="text-white/65 text-sm">{detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal stagger-2 flex items-center justify-center">
            <div className="bg-white p-10 text-center w-full max-w-md shadow-[0_20px_60px_oklch(0_0_0/0.35)]">
              <div className="w-16 h-16 bg-[oklch(0.18_0.06_255)] flex items-center justify-center mx-auto mb-6">
                <CalendarDays size={30} className="text-white" />
              </div>
              <h3 className={`font-['Barlow_Condensed'] font-bold text-3xl uppercase mb-3 ${NAVY}`}>
                Book Your Free Consultation
              </h3>
              <p className={`text-sm leading-relaxed mb-8 ${MUTED}`}>
                Choose a time that works for you. No pressure, no obligation.
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="ec-btn-navy text-base px-8 py-4 w-full justify-center">
                Schedule My Consultation <ChevronRight size={18} />
              </a>
              <p className="text-[oklch(0.6_0.02_255)] text-xs mt-5">
                You'll be taken to our secure booking page to select your preferred date &amp; time.
              </p>
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
        <CtaStrip />
        <WhatWeDoSection />
        <StepsSection />
        <ReadySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
