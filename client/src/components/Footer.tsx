/*
 * East Consulting LLC — Footer Component
 * Design: Modern Momentum — Navy & Amber
 * Dark navy background, amber accents, clean column layout
 */

import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";
import { BOOKING_URL, CONTACT } from "@/lib/site";

const linkColumns = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "What We Do", href: "/what-we-do" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    heading: "Legals",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0.05_255)] text-white">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 cursor-pointer">
              <img
                src="/manus-storage/logo.svg"
                alt="East Consulting LLC Logo"
                className="w-10 h-10 object-contain pointer-events-none"
              />
              <div className="flex flex-col leading-none">
                <span className="font-['Barlow_Condensed'] font-bold text-white text-lg uppercase tracking-wide">
                  East Consulting
                </span>
                <span className="text-[oklch(0.72_0.17_70)] text-xs tracking-widest uppercase">LLC</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Helping entrepreneurs form their businesses the right way, from day one.
            </p>
          </div>

          {linkColumns.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest text-[oklch(0.72_0.17_70)] mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-white/60 hover:text-[oklch(0.72_0.17_70)] text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <ChevronRight size={12} className="text-[oklch(0.72_0.17_70)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest text-[oklch(0.72_0.17_70)] mb-5">
              Contact
            </h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[oklch(0.72_0.17_70)] mt-0.5 shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="text-white/60 hover:text-[oklch(0.72_0.17_70)] text-sm transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[oklch(0.72_0.17_70)] mt-0.5 shrink-0" />
                <a href={CONTACT.phoneHref} className="text-white/60 hover:text-[oklch(0.72_0.17_70)] text-sm transition-colors">
                  {CONTACT.phone} — Office
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[oklch(0.72_0.17_70)] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">{CONTACT.addressLine1}<br />{CONTACT.addressLine2}</span>
              </li>
            </ul>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.72_0.17_70)] text-sm font-semibold hover:underline inline-flex items-center gap-1"
            >
              Book a Free Consultation <ChevronRight size={14} />
            </a>
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
