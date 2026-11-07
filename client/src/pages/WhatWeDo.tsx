/*
 * East Consulting LLC — Services (/what-we-do)
 * Layout follows the owner's GoHighLevel Services page, in navy & white:
 * intro · numbered service rows · booking band
 */

import { useEffect } from "react";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingBand from "@/components/BookingBand";
import { SERVICES } from "@/lib/services";

const NAVY = "text-[oklch(0.18_0.06_255)]";
const SLATE = "text-[oklch(0.42_0.03_255)]";
const HEADLINE = "font-['Darker_Grotesque'] font-bold leading-[0.95]";
const LINE = "border-[oklch(0.9_0.015_255)]";

export default function WhatWeDo() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Intro */}
        <section className="bg-white pt-32 pb-12 lg:pt-44 lg:pb-16">
          <div className="container grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-20 items-start">
            <h1 className={`${HEADLINE} ${NAVY} text-6xl sm:text-7xl lg:text-8xl`}>Our Services</h1>
            <p className={`${SLATE} text-lg leading-relaxed lg:pt-4`}>
              Wherever your business is today, we help you take the next step: forming the right legal structure with
              your state, setting up the professional identity customers trust, and putting automation in place so you
              can focus on your clients. Whether you're starting from an idea or already running your business, we
              guide you every step of the way.
            </p>
          </div>
        </section>

        {/* Numbered services */}
        <section className="bg-white pb-20 lg:pb-28">
          <div className="container">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className={`border-t ${LINE} py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-[8rem_1fr_1.4fr] gap-4 lg:gap-12 items-start ${
                  i === SERVICES.length - 1 ? `border-b` : ""
                }`}
              >
                <p className={`${HEADLINE} ${NAVY} text-4xl lg:text-5xl`}>{i + 1}.</p>
                <h2 className={`${HEADLINE} ${NAVY} text-4xl lg:text-5xl`}>{service.title}</h2>
                <div>
                  <p className={`${SLATE} text-lg leading-relaxed mb-6`}>{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className={`flex items-center gap-2.5 ${NAVY} text-base`}>
                        <Check size={16} className="shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <BookingBand />
      </main>

      <Footer />
    </div>
  );
}
