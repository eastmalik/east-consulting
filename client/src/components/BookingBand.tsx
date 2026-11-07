/*
 * East Consulting LLC — navy "Book a Consultation" band shared by Home and Services
 */

import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { BOOK_PATH } from "@/lib/site";

export default function BookingBand() {
  return (
    <section className="bg-[oklch(0.25_0.07_255)] text-white py-16 lg:py-20">
      <div className="container flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="font-['Darker_Grotesque'] font-bold leading-[0.95] text-5xl lg:text-6xl mb-4">
            Better business, built right, from day one.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Book a consultation. We'll look at where your business is today and map out what comes next.
          </p>
        </div>
        <Link href={BOOK_PATH} className="ec-btn-light self-start lg:self-auto">
          Book a Consultation <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
