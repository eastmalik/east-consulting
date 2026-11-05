/*
 * East Consulting LLC — Footer Component
 * Design: navy footer, white text; Quick Links · Contact Us · Legal
 * (layout follows the owner's GoHighLevel home page)
 */

import { Link } from "wouter";
import { BOOKING_URL, CONTACT } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/what-we-do" },
  { label: "Press", href: "/press" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const headingClass = "font-['Darker_Grotesque'] font-bold text-2xl text-white mb-4";
const linkClass = "text-white/75 hover:text-white text-base transition-colors";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.06_255)] text-white">
      <div className="container py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <h4 className={headingClass}>Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>{label}</Link>
                </li>
              ))}
              <li>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={headingClass}>Contact Us</h4>
            <ul className="space-y-2.5 text-white/75 text-base">
              <li className="text-white font-semibold">East Consulting LLC</li>
              <li><a href={CONTACT.phoneHref} className={linkClass}>{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className={linkClass}>{CONTACT.email}</a></li>
              <li>{CONTACT.addressLine1}<br />{CONTACT.addressLine2}</li>
            </ul>
          </div>

          <div>
            <h4 className={headingClass}>Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container py-5">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} East Consulting LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
