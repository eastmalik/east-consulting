/*
 * East Consulting LLC — About (/about)
 * Layout follows the owner's GoHighLevel About page, in navy & white:
 * hero · "Why choose us?" · who we work with · booking band
 * The template's sample testimonials are not used (they are not real clients).
 */

import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingBand from "@/components/BookingBand";

const NAVY = "text-[oklch(0.18_0.06_255)]";
const SLATE = "text-[oklch(0.42_0.03_255)]";
const HEADLINE = "font-['Darker_Grotesque'] font-bold leading-[0.95]";
const LINE = "border-[oklch(0.9_0.015_255)]";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[oklch(0.18_0.06_255)] text-white pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container">
            <h1 className={`${HEADLINE} text-6xl sm:text-7xl lg:text-8xl xl:text-9xl mb-14 lg:mb-20`}>About Us</h1>
            <div className="border-t border-white/25 pt-10 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-start">
              <p className={`${HEADLINE} text-4xl lg:text-5xl`}>East Consulting LLC</p>
              <div>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Our mission at East Consulting LLC is to empower entrepreneurs and business leaders by guiding them
                  through forming their business and setting up every foundational element, the right way, from day one.
                </p>
                <Link href="/what-we-do" className="ec-btn-outline-light">
                  View all services <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container grid grid-cols-1 lg:grid-cols-[1fr_1.75fr] gap-8 lg:gap-16 items-start">
            <h2 className={`${HEADLINE} ${NAVY} text-5xl lg:text-6xl`}>Why choose us?</h2>
            <p className={`${SLATE} text-xl leading-relaxed`}>
              We take you through business formation in the right order: choosing and registering the right structure
              with your state, then setting up the professional identity a legitimate business needs. Every step is
              clear, so you always know what comes next. We are committed to your success every step of the way.
            </p>
          </div>
        </section>

        {/* Who we work with */}
        <section className={`bg-white border-t ${LINE} py-20 lg:py-28`}>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <h2 className={`${HEADLINE} ${NAVY} text-4xl lg:text-5xl`}>
              We work with a broad range of businesses, from first-time founders to established owners getting their
              foundation right.
            </h2>
            <p className={`${SLATE} text-lg leading-relaxed lg:pt-2`}>
              Connect with us to learn more about how we can help you form and set up your business. We're ready to
              help you with every step.
            </p>
          </div>
        </section>

        <BookingBand />
      </main>

      <Footer />
    </div>
  );
}
