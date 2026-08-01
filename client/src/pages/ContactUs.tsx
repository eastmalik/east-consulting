/*
 * East Consulting LLC — Contact Us Page (/contact)
 * Design: Modern Momentum — Navy & Amber
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
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
      detail: "eastm65@gmail.com",
      sub: "We respond within 24 hours",
      href: "mailto:eastm65@gmail.com",
    },
    {
      icon: Phone,
      title: "Schedule a Call",
      detail: "Book a Free Consultation",
      sub: "30-minute business assessment",
      href: "#form",
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            {/* Right — GoHighLevel Form */}
            <div>
              <div className="bg-white">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/tDLheLWGJli1VwLbzgLi"
                  style={{ width: "100%", height: "600px", border: "none", borderRadius: "0px" }}
                  id="inline-tDLheLWGJli1VwLbzgLi-contact"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Business Coaching"
                  data-height="600"
                  data-layout-iframe-id="inline-tDLheLWGJli1VwLbzgLi-contact"
                  data-form-id="tDLheLWGJli1VwLbzgLi"
                  title="Business Coaching"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
