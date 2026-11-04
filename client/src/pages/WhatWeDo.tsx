/*
 * East Consulting LLC — What We Do (/what-we-do)
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCards from "@/components/ServiceCards";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BOOKING_URL } from "@/lib/site";

export default function WhatWeDo() {
  useScrollReveal();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-[oklch(0.18_0.06_255)] pt-28 pb-16">
        <div className="container">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
            <Link href="/" className="hover:text-[oklch(0.72_0.17_70)] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/70">What We Do</span>
          </div>
          <div className="max-w-3xl">
            <div className="ec-section-label text-[oklch(0.72_0.17_70)] mb-5">What We Do</div>
            <h1 className="font-['Barlow_Condensed'] font-bold text-white text-5xl lg:text-7xl uppercase leading-none mb-6">
              Business Formation, <span className="text-[oklch(0.72_0.17_70)]">Done Right</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              East Consulting LLC helps entrepreneurs form their business and set up every foundational element the right way, from day one.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[oklch(0.98_0.005_80)] py-20 flex-1">
        <div className="container">
          <ServiceCards />
        </div>
      </section>

      <section className="bg-[oklch(0.72_0.17_70)] py-16">
        <div className="container text-center">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-4xl lg:text-5xl uppercase leading-none mb-8">
            Ready to Get Started?
          </h2>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[oklch(0.18_0.06_255)] text-white font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-wider px-8 py-4 hover:bg-[oklch(0.25_0.06_255)] transition-colors duration-200"
          >
            Book a Free Consultation <ChevronRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
