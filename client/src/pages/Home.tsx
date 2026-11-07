/*
 * East Consulting LLC — Home Page
 * Layout follows the owner's GoHighLevel home page, in navy & white.
 * Wording follows the customer-as-hero structure of the owner's Arise Credit Pro
 * site (owner's choice): their goal · "Does this sound like you?" · you're not
 * alone · a simple plan · book a call.
 * Hero · Pain points · Quote · Three steps · Industries · Booking band
 */

import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingBand from "@/components/BookingBand";

const NAVY = "text-[oklch(0.18_0.06_255)]";
const SLATE = "text-[oklch(0.42_0.03_255)]";
const HEADLINE = "font-['Darker_Grotesque'] font-bold leading-[0.95]";
const LINE = "border-[oklch(0.9_0.015_255)]";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="bg-[oklch(0.18_0.06_255)] text-white pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="container">
        <h1 className={`${HEADLINE} text-6xl sm:text-7xl lg:text-8xl xl:text-9xl max-w-5xl mb-14 lg:mb-20`}>
          You bring the vision. We help you build it right.
        </h1>
        <div className="border-t border-white/25 pt-10 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-start">
          <p className={`${HEADLINE} text-4xl lg:text-5xl`}>East Consulting LLC</p>
          <div>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              You work hard on your business. You deserve one that's set up the right way, from the paperwork, to the
              professional details, to the systems that keep it running. East Consulting LLC walks you through every
              step, in the right order, so you can focus on what you do best.
            </p>
            <Link href="/what-we-do" className="ec-btn-outline-light">
              View all services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Does this sound like you? ────────────────────────────────────────────────
const painPoints = [
  {
    title: "You have the idea, but not the paperwork",
    desc: "LLC or corporation? Which forms, which office, which order? You don't want a mistake that costs you later, so the business stays on hold.",
  },
  {
    title: "Your business doesn't look official yet",
    desc: "A personal email, your own cell number, no business address, and no listing on Google. Customers notice, and some of them move on.",
  },
  {
    title: "Leads are slipping through the cracks",
    desc: "Someone asks about your services and the follow-up never happens. A client misses an appointment and never rebooks. You're doing it all by hand.",
  },
  {
    title: "You don't know who to trust",
    desc: "Everyone online has a different answer. You just want someone who will lay out the steps plainly and help you get it done.",
  },
];

function PainPointsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-16 items-end mb-12 lg:mb-16">
          <h2 className={`${HEADLINE} ${NAVY} text-5xl lg:text-6xl`}>Does this sound like you?</h2>
          <p className={`${SLATE} text-lg leading-relaxed`}>
            Starting a business is exciting, until you hit the paperwork, the setup, and the follow-up. Here is what
            that looks like for a lot of entrepreneurs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {painPoints.map(({ title, desc }) => (
            <div key={title} className={`border ${LINE} rounded-lg p-7 lg:p-8`}>
              <h3 className={`${HEADLINE} ${NAVY} text-3xl lg:text-4xl mb-3`}>{title}</h3>
              <p className={`${SLATE} text-base leading-relaxed`}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── You're not alone ─────────────────────────────────────────────────────────
function QuoteSection() {
  return (
    <section className="bg-[oklch(0.18_0.06_255)] text-white py-20 lg:py-24">
      <div className="container max-w-4xl text-center">
        <p className={`${HEADLINE} text-4xl lg:text-5xl mb-6`}>
          &ldquo;You're not behind, and you don't have to figure it out alone. You just need a clear path, and a
          partner to walk it with you.&rdquo;
        </p>
        <p className="text-white/70 text-base">East Consulting LLC</p>
      </div>
    </section>
  );
}

// ─── The plan ─────────────────────────────────────────────────────────────────
const steps = [
  { title: "Book a consultation", desc: "Tell us about your business and where you want to take it." },
  {
    title: "Get your plan",
    desc: "We map out what your business needs, in the right order: formation, setup, and automation.",
  },
  {
    title: "Build it right",
    desc: "We set it up with you, step by step, so you can get back to running your business.",
  },
];

function StepsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <h2 className={`${HEADLINE} ${NAVY} text-5xl lg:text-6xl mb-12 lg:mb-16`}>Your path, in three steps</h2>
        <ol className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {steps.map(({ title, desc }, i) => (
            <li key={title} className={`border-t-2 border-[oklch(0.18_0.06_255)] pt-6`}>
              <p className={`${HEADLINE} ${NAVY} text-5xl mb-4`}>{String(i + 1).padStart(2, "0")}</p>
              <h3 className={`${HEADLINE} ${NAVY} text-3xl lg:text-4xl mb-3`}>{title}</h3>
              <p className={`${SLATE} text-lg leading-relaxed`}>{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─── Industries ───────────────────────────────────────────────────────────────
const industries = [
  "Technology and Startups",
  "Healthcare",
  "Retail and E-commerce",
  "Manufacturing",
  "Real Estate",
  "Hospitality and Tourism",
  "Education and Training",
  "Non-Profit Organizations",
  "Creative Industries",
];

function IndustriesSection() {
  return (
    <section className={`bg-white border-t ${LINE} py-20 lg:py-28`}>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <h2 className={`${HEADLINE} ${NAVY} text-5xl lg:text-6xl mb-8`}>We work with businesses in every industry</h2>
          <Link href="/about" className="ec-btn-outline-navy">
            About us <ArrowRight size={18} />
          </Link>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {industries.map((industry) => (
            <li key={industry} className={`flex items-center gap-3 text-lg ${NAVY} border-b ${LINE} pb-3`}>
              <Check size={18} className="shrink-0" />
              {industry}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Main Home Page ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <PainPointsSection />
        <QuoteSection />
        <StepsSection />
        <IndustriesSection />
        <BookingBand />
      </main>
      <Footer />
    </div>
  );
}
