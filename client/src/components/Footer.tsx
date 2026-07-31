/*
 * East Consulting LLC — Footer Component
 * Design: Modern Momentum — Navy & Amber
 * Dark navy background, amber accents, clean column layout
 */

import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.12_0.05_255)] text-white">
      {/* Main Footer */}
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[oklch(0.72_0.17_70)] flex items-center justify-center font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-xl">
                EC
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-['Barlow_Condensed'] font-bold text-white text-lg uppercase tracking-wide">
                  East Consulting
                </span>
                <span className="text-[oklch(0.72_0.17_70)] text-xs tracking-widest uppercase">LLC</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Helping entrepreneurs establish their businesses properly and get them funding-ready. Your success is our mission.
            </p>

          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest text-[oklch(0.72_0.17_70)] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Business Entity Formation",
                "Business Credit Building",
                "Funding Readiness Strategy",
                "Market Positioning",
                "Business Setup Consulting",
                "90-Day Launch Program",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="text-white/60 hover:text-[oklch(0.72_0.17_70)] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ChevronRight size={12} className="text-[oklch(0.72_0.17_70)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest text-[oklch(0.72_0.17_70)] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Process", href: "#process" },
                { label: "Resources", href: "#resources" },
                { label: "Contact Us", href: "#contact" },
                { label: "Get Started", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="text-white/60 hover:text-[oklch(0.72_0.17_70)] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ChevronRight size={12} className="text-[oklch(0.72_0.17_70)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest text-[oklch(0.72_0.17_70)] mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[oklch(0.72_0.17_70)] mt-0.5 shrink-0" />
                <a
                  href="mailto:info@eastconsultingllc.com"
                  className="text-white/60 hover:text-[oklch(0.72_0.17_70)] text-sm transition-colors"
                >
                  info@eastconsultingllc.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[oklch(0.72_0.17_70)] mt-0.5 shrink-0" />
                <a
                  href="tel:+1-800-000-0000"
                  className="text-white/60 hover:text-[oklch(0.72_0.17_70)] text-sm transition-colors"
                >
                  Schedule a Consultation
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[oklch(0.72_0.17_70)] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">United States</span>
              </li>
            </ul>

            <div className="mt-6 p-4 border border-[oklch(0.72_0.17_70)]/30 bg-[oklch(0.72_0.17_70)]/5">
              <p className="text-white/80 text-sm font-['Barlow_Condensed'] font-600 uppercase tracking-wide mb-2">
                Ready to Get Started?
              </p>
              <button
                onClick={() => handleNavClick("#contact")}
                className="text-[oklch(0.72_0.17_70)] text-sm font-semibold hover:underline flex items-center gap-1"
              >
                Book a Free Consultation <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} East Consulting LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
                <Link href="/privacy-policy" className="text-white/40 hover:text-[oklch(0.72_0.17_70)] text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-white/40 hover:text-[oklch(0.72_0.17_70)] text-xs transition-colors">
                Terms of Service
              </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
