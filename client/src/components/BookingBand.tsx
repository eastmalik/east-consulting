/*
 * East Consulting LLC — navy "Book a Consultation" band shared by Home and Services
 */

import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/site";

export default function BookingBand() {
  return (
    <section className="bg-[oklch(0.25_0.07_255)] text-white py-16 lg:py-20">
      <div className="container flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <h2 className="font-['Darker_Grotesque'] font-bold leading-[0.95] text-5xl lg:text-6xl max-w-2xl">
          Better business, built right, from day one.
        </h2>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="ec-btn-light self-start lg:self-auto">
          Book a Consultation <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
