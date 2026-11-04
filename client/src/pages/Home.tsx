/*
 * East Consulting LLC — Home Page
 * Design: Modern Momentum — Navy & Amber
 * Sections: Hero, Services, Contact
 */

import { ChevronRight, ArrowRight, CheckCircle2, Phone, Mail, MapPin, CalendarDays } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCards from "@/components/ServiceCards";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BOOKING_URL, CONTACT } from "@/lib/site";

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[oklch(0.12_0.05_255)]">
      {/* Amber edge accent */}
      <div className="absolute top-0 right-0 w-1 h-full bg-[oklch(0.72_0.17_70)]" />

      <div className="container relative z-10 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl">
          <div className="ec-section-label text-[oklch(0.72_0.17_70)] mb-6">
            Business Formation Consulting
          </div>

          <h1 className="font-['Barlow_Condensed'] font-bold text-white leading-none mb-6">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase">
              East Consulting LLC
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase text-[oklch(0.72_0.17_70)] mt-3">
              Business Formation, Done Right.
            </span>
          </h1>

          <p className="text-white/75 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl font-['Source_Sans_3']">
            We guide entrepreneurs through forming their business and setting up every foundational element, the right way, from day one.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ec-btn-primary text-base px-8 py-4 inline-flex items-center gap-2"
            >
              Book a Free Consultation
              <ChevronRight size={18} />
            </a>
            <Link
              href="/what-we-do"
              className="ec-btn-outline text-base px-8 py-4 border-white/40 text-white hover:border-[oklch(0.72_0.17_70)] hover:text-[oklch(0.72_0.17_70)] hover:bg-transparent inline-flex items-center gap-2"
            >
              What We Do
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 mt-12 pt-12 border-t border-white/15">
            {["Business Entity Formation", "Professional Business Setup"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle2 size={14} className="text-[oklch(0.72_0.17_70)]" />
                <span className="font-['Source_Sans_3']">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[oklch(0.98_0.005_80)]">
      <div className="container">
        <div className="max-w-2xl mb-14 reveal">
          <div className="ec-section-label mb-4">What We Do</div>
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-4xl lg:text-5xl xl:text-6xl uppercase leading-none">
            Our <span className="text-[oklch(0.72_0.17_70)]">Services</span>
          </h2>
        </div>
        <ServiceCards />
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
function ContactSection() {
  const details = [
    { icon: Phone, title: "Office Phone", detail: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: Mail, title: "Email Us", detail: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MapPin, title: "Office Address", detail: `${CONTACT.addressLine1}, ${CONTACT.addressLine2}`, href: null },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[oklch(0.18_0.06_255)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <div className="ec-section-label text-[oklch(0.72_0.17_70)] mb-4">Get In Touch</div>
            <h2 className="font-['Barlow_Condensed'] font-bold text-white text-4xl lg:text-5xl uppercase leading-none mb-6">
              Let's Get Your Business <span className="text-[oklch(0.72_0.17_70)]">Started</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-10">
              Book a free consultation, or reach us directly.
            </p>
            <div className="space-y-6">
              {details.map(({ icon: Icon, title, detail, href }) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[oklch(0.72_0.17_70)]/15 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[oklch(0.72_0.17_70)]" />
                  </div>
                  <div>
                    <p className="font-['Barlow_Condensed'] font-bold text-white text-sm uppercase tracking-wide">{title}</p>
                    {href ? (
                      <a href={href} className="text-white/60 text-sm hover:text-[oklch(0.72_0.17_70)] transition-colors">
                        {detail}
                      </a>
                    ) : (
                      <p className="text-white/60 text-sm">{detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal stagger-2 flex items-center justify-center">
            <div className="bg-white/5 border border-white/10 p-10 text-center w-full max-w-md">
              <div className="w-16 h-16 bg-[oklch(0.72_0.17_70)]/15 flex items-center justify-center mx-auto mb-6">
                <CalendarDays size={32} className="text-[oklch(0.72_0.17_70)]" />
              </div>
              <h3 className="font-['Barlow_Condensed'] font-bold text-white text-3xl uppercase mb-3">
                Book Your Free Consultation
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Choose a time that works for you. No pressure, no obligation.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[oklch(0.72_0.17_70)] text-[oklch(0.12_0.04_255)] font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wider px-10 py-4 hover:bg-[oklch(0.82_0.17_70)] transition-colors duration-200 w-full justify-center"
              >
                Schedule My Consultation <ChevronRight size={18} />
              </a>
              <p className="text-white/30 text-xs mt-5">
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
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
