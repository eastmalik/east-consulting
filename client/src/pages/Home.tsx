/*
 * East Consulting LLC — Home Page
 * Layout follows the owner's GoHighLevel home page, in navy & white:
 * Hero · Industries · Booking band
 */

import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingBand from "@/components/BookingBand";

const NAVY = "text-[oklch(0.18_0.06_255)]";
const HEADLINE = "font-['Darker_Grotesque'] font-bold leading-[0.95]";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="bg-[oklch(0.18_0.06_255)] text-white pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="container">
        <h1 className={`${HEADLINE} text-6xl sm:text-7xl lg:text-8xl xl:text-9xl max-w-5xl mb-14 lg:mb-20`}>
          Strategic goals for business growth
        </h1>
        <div className="border-t border-white/25 pt-10 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-start">
          <p className={`${HEADLINE} text-4xl lg:text-5xl`}>East Consulting LLC</p>
          <div>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              We specialize in delivering targeted business formation services designed to empower entrepreneurs and
              business leaders. With our guidance, watch your business flourish with clear, achievable business
              formation solutions.
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
    <section className="bg-white py-20 lg:py-28">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <h2 className={`${HEADLINE} ${NAVY} text-5xl lg:text-6xl mb-8`}>
            Bolstering business for clients in a variety of industries
          </h2>
          <Link href="/about" className="ec-btn-outline-navy">
            About us <ArrowRight size={18} />
          </Link>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {industries.map((industry) => (
            <li key={industry} className={`flex items-center gap-3 text-lg ${NAVY} border-b border-[oklch(0.9_0.015_255)] pb-3`}>
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
        <IndustriesSection />
        <BookingBand />
      </main>
      <Footer />
    </div>
  );
}
