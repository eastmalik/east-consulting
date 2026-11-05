/*
 * East Consulting LLC — 404 page
 */

import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-white flex items-center pt-28 pb-20">
        <div className="container">
          <div className="max-w-2xl">
            <div className="ec-section-label text-[oklch(0.42_0.03_255)] mb-5">404</div>
            <h1 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-5xl lg:text-7xl uppercase leading-none mb-6">
              Page Not <span className="text-[oklch(0.42_0.03_255)]">Found</span>
            </h1>
            <p className="text-[oklch(0.42_0.03_255)] text-lg leading-relaxed mb-10">
              Sorry, the page you are looking for doesn't exist. It may have been moved or deleted.
            </p>
            <Link href="/" className="ec-btn-navy text-base px-8 py-4">
              Back to Home <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
