/*
 * East Consulting LLC — Navbar Component
 * Design: navy & white
 * Dark navy background with white accent on active/hover states
 * Bold condensed typography, clean horizontal layout
 */

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Home", href: "/", isAnchor: false },
  { label: "What We Do", href: "/what-we-do", isAnchor: false },
  { label: "Resources", href: "/resources", isAnchor: false },
  { label: "Contact", href: "/#contact", isAnchor: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (href: string) => {
    setIsOpen(false);
    const anchor = href.replace("/#", "#"); // "/#services" → "#services"
    if (location === "/") {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  const isActive = (href: string) => location === href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-[0_4px_24px_oklch(0.18_0.06_255/0.1)]"
            : "bg-white/95 backdrop-blur-md border-b border-[oklch(0.9_0.015_255)]"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <img
                src="/manus-storage/logo.svg"
                alt="East Consulting LLC Logo"
                className="w-10 h-10 object-contain pointer-events-none"
              />
              <span className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-lg tracking-wide uppercase leading-none">
                East Consulting
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.isAnchor ? (
                  <button
                    key={link.href}
                    onClick={() => handleAnchorClick(link.href)}
                    className="font-['Barlow_Condensed'] font-600 text-sm tracking-widest uppercase text-[oklch(0.42_0.03_255)] hover:text-[oklch(0.32_0.09_255)] transition-colors duration-200 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[oklch(0.18_0.06_255)] transition-all duration-200 group-hover:w-full" />
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-['Barlow_Condensed'] font-600 text-sm tracking-widest uppercase transition-colors duration-200 relative group ${
                      isActive(link.href)
                        ? "text-[oklch(0.18_0.06_255)]"
                        : "text-[oklch(0.42_0.03_255)] hover:text-[oklch(0.32_0.09_255)]"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[oklch(0.18_0.06_255)] transition-all duration-200 ${
                        isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                )
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-[oklch(0.18_0.06_255)] p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          <nav className="flex flex-col gap-2 flex-1">
            {navLinks.map((link, i) =>
              link.isAnchor ? (
                <button
                  key={link.href}
                  onClick={() => handleAnchorClick(link.href)}
                  className="flex items-center justify-between py-4 border-b border-[oklch(0.9_0.015_255)] text-[oklch(0.18_0.06_255)] font-['Barlow_Condensed'] font-600 text-2xl uppercase tracking-wider hover:text-[oklch(0.32_0.09_255)] transition-colors text-left"
                  style={{ transitionDelay: isOpen ? `${i * 50}ms` : "0ms" }}
                >
                  {link.label}
                  <ChevronRight size={20} className="text-[oklch(0.18_0.06_255)]" />
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-4 border-b border-[oklch(0.9_0.015_255)] text-[oklch(0.18_0.06_255)] font-['Barlow_Condensed'] font-600 text-2xl uppercase tracking-wider hover:text-[oklch(0.32_0.09_255)] transition-colors"
                  style={{ transitionDelay: isOpen ? `${i * 50}ms` : "0ms" }}
                >
                  {link.label}
                  <ChevronRight size={20} className="text-[oklch(0.18_0.06_255)]" />
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
