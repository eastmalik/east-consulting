/*
 * East Consulting LLC — Contact Us Page (/contact)
 * Design: Modern Momentum — Navy & Amber
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Phone, Mail, Clock, CheckCircle2, CalendarDays, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "support@eastconsultingllc.com",
      sub: "We respond within 24 hours",
      href: "mailto:support@eastconsultingllc.com",
    },
    {
      icon: Phone,
      title: "Office Phone",
      detail: "(678) 325-4094",
      sub: "Office line — Mon–Fri 9am–6pm CST",
      href: "tel:+16783254094",
    },
    {
      icon: MapPin,
      title: "Office Address",
      detail: "850 N. Jefferson Street",
      sub: "Jackson, MS 39202",
      href: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Mon – Fri: 9am – 6pm CST",
      sub: "Weekend appointments available",
      href: null,
    },
  ];

  const expectations = [
    "Free 30-minute business assessment",
    "Customized roadmap for your situation",
    "Clear next steps to get funding-ready",
    "No pressure, no obligation",
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
            <span className="text-white/70">Contact Us</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[oklch(0.72_0.17_70)]" />
              <span className="text-[oklch(0.72_0.17_70)] text-xs font-['Barlow_Condensed'] tracking-widest uppercase font-semibold">
                Get In Touch
              </span>
            </div>
            <h1 className="font-['Barlow_Condensed'] font-bold text-white text-5xl lg:text-7xl uppercase leading-none mb-6">
              Let's Build Your <span className="text-[oklch(0.72_0.17_70)]">Business</span> Together
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              Schedule a free consultation with East Consulting LLC. We'll assess where you are, where you want to go, and map out exactly what it takes to get your business properly established and positioned for funding.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-[oklch(0.98_0.005_80)] py-14">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map(({ icon: Icon, title, detail, sub, href }) => (
              <div key={title} className="bg-white border border-[oklch(0.88_0.005_255)] p-7 flex items-start gap-5 hover:border-[oklch(0.72_0.17_70)]/50 transition-colors duration-300">
                <div className="w-12 h-12 bg-[oklch(0.18_0.06_255)] flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-[oklch(0.72_0.17_70)]" />
                </div>
                <div>
                  <p className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-sm uppercase tracking-wide mb-1">{title}</p>
                  {href ? (
                    <a href={href} className="text-[oklch(0.35_0.04_255)] text-sm font-semibold hover:text-[oklch(0.72_0.17_70)] transition-colors">{detail}</a>
                  ) : (
                    <p className="text-[oklch(0.35_0.04_255)] text-sm font-semibold">{detail}</p>
                  )}
                  <p className="text-[oklch(0.55_0.01_255)] text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Text Messaging Disclosure (A2P opt-in) */}
      <section className="bg-[oklch(0.98_0.005_80)] pb-14">
        <div className="container">
          <div className="bg-white border-l-4 border-[oklch(0.72_0.17_70)] border-y border-r border-y-[oklch(0.88_0.005_255)] border-r-[oklch(0.88_0.005_255)] p-7">
            <p className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-sm uppercase tracking-wide mb-3">
              Text Messaging (SMS)
            </p>
            <p className="text-[oklch(0.35_0.04_255)] text-sm leading-relaxed mb-3">
              To reach us, use the chat button in the bottom corner of any page. The chat form asks for your name, mobile number, and message. By submitting the chat form, you authorize <strong>East Consulting LLC</strong> to text or call the number you provide with informational and transactional messages, such as replies to your inquiry, appointment coordination, and follow-up on your request, possibly using automated means. We do not send marketing or promotional texts.
            </p>
            <p className="text-[oklch(0.35_0.04_255)] text-sm leading-relaxed mb-3">
              Message frequency varies. Message &amp; data rates may apply. Reply <strong>HELP</strong> for help or <strong>STOP</strong> to opt out at any time. Consent is not a condition of purchase; you can also reach us by email or phone without using the chat. Your mobile number and opt-in consent are never shared with third parties or affiliates.
            </p>
            <p className="text-sm">
              <Link href="/privacy-policy" className="text-[oklch(0.35_0.12_255)] font-semibold hover:underline">Privacy Policy</Link>
              <span className="text-gray-300 mx-2">|</span>
              <Link href="/terms-and-conditions" className="text-[oklch(0.35_0.12_255)] font-semibold hover:underline">Terms &amp; Conditions</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Form + What to Expect */}
      <section id="form" className="bg-[oklch(0.18_0.06_255)] py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left — What to Expect */}
            <div>
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[oklch(0.72_0.17_70)]" />
                <span className="text-[oklch(0.72_0.17_70)] text-xs font-['Barlow_Condensed'] tracking-widest uppercase font-semibold">
                  Free Consultation
                </span>
              </div>
              <h2 className="font-['Barlow_Condensed'] font-bold text-white text-4xl lg:text-5xl uppercase leading-none mb-6">
                Ready to Build Your <span className="text-[oklch(0.72_0.17_70)]">Funding-Ready Business?</span>
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-10">
                Fill out the form and we'll reach out within 24 hours to schedule your free 30-minute consultation. No pressure, no obligation — just a clear conversation about where your business is and where it needs to go.
              </p>

              {/* What to Expect Box */}
              <div className="p-7 border border-white/10 bg-white/5 mb-8">
                <h4 className="font-['Barlow_Condensed'] font-bold text-white text-sm uppercase tracking-widest mb-5">
                  What to Expect
                </h4>
                <ul className="space-y-4">
                  {expectations.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/65 text-sm">
                      <CheckCircle2 size={15} className="text-[oklch(0.72_0.17_70)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick links */}
              <div className="flex flex-col gap-3">
                <Link href="/about" className="inline-flex items-center gap-2 text-[oklch(0.72_0.17_70)] text-sm font-semibold hover:underline">
                  <ChevronRight size={14} /> Learn more about East Consulting LLC
                </Link>
                <Link href="/resources" className="inline-flex items-center gap-2 text-[oklch(0.72_0.17_70)] text-sm font-semibold hover:underline">
                  <ChevronRight size={14} /> Browse our free business resources
                </Link>
              </div>
            </div>

            {/* Right — Booking CTA Card */}
            <div className="flex items-start justify-center">
              <div className="bg-white/5 border border-white/10 p-10 text-center w-full">
                <div className="w-16 h-16 bg-[oklch(0.72_0.17_70)]/15 flex items-center justify-center mx-auto mb-6">
                  <CalendarDays size={32} className="text-[oklch(0.72_0.17_70)]" />
                </div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-white text-3xl uppercase mb-3">
                  Book Your Free Consultation
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Click below to choose a time that works for you. You'll be taken to our secure scheduling page — no forms to fill out here, just pick your slot and we'll take it from there.
                </p>
                <a
                  href="https://api.leadconnectorhq.com/widget/booking/22Ig6MGZ2XELV3Qi9Zr3"
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

      <Footer />
    </div>
  );
}
