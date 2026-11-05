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

      <section className="bg-white pt-28 pb-16">
        <div className="container">
          <div className="flex items-center gap-2 text-[oklch(0.55_0.02_255)] text-sm mb-6">
            <Link href="/" className="hover:text-[oklch(0.32_0.09_255)] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[oklch(0.42_0.03_255)]">What We Do</span>
          </div>
          <div className="max-w-3xl">
            <div className="ec-section-label text-[oklch(0.42_0.03_255)] mb-5">What We Do</div>
            <h1 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-5xl lg:text-7xl uppercase leading-none mb-6">
              Business Formation, <span className="text-[oklch(0.42_0.03_255)]">Done Right</span>
            </h1>
            <p className="text-[oklch(0.42_0.03_255)] text-lg leading-relaxed">
              East Consulting LLC helps entrepreneurs form their business and set up every foundational element the right way, from day one.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 flex-1">
        <div className="container">
          <ServiceCards />
        </div>
      </section>

      <section className="bg-white border-t border-[oklch(0.9_0.015_255)] py-16">
        <div className="container text-center">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-4xl lg:text-5xl uppercase leading-none mb-8">
            Ready to Get Started?
          </h2>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ec-btn-navy text-base px-8 py-4"
          >
            Book a Free Consultation <ChevronRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
