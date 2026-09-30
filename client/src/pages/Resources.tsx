/*
 * East Consulting LLC — Resources Page (/resources)
 * Design: Modern Momentum — Navy & Amber
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, CheckCircle2, FileText, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Resources() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const setupChecklist = [
    { category: "Legal Foundation", items: ["Register your business entity (LLC or Corporation)", "File Articles of Organization/Incorporation with Secretary of State", "Obtain a Registered Agent", "Draft an Operating Agreement or Bylaws"] },
    { category: "Tax & Federal Identity", items: ["Apply for your EIN (Employer Identification Number) from the IRS", "Register with your state's Department of Revenue if required", "Understand your business tax obligations (quarterly estimated taxes)"] },
    { category: "Business Identity", items: ["Secure a professional domain name", "Set up a professional business email (not Gmail/Yahoo)", "Get a dedicated business phone number", "Establish a business mailing address (not your home)"] },
    { category: "Banking & Finance", items: ["Open a dedicated business bank account", "Keep all business income and expenses separate from personal", "Set up a business accounting system (QuickBooks, Wave, etc.)", "Apply for a business debit card"] },
    { category: "Online Presence", items: ["Create a Google Business Profile", "Set up your website with a contact form", "List your business on Yelp, BBB, and industry directories", "Ensure your NAP (Name, Address, Phone) is consistent everywhere"] },
  ];

  const taxAdvantages = [
    { title: "Home Office Deduction", desc: "Deduct a portion of your rent/mortgage, utilities, and internet if you work from home." },
    { title: "Vehicle & Mileage", desc: "Deduct business-related mileage, car payments, insurance, and maintenance." },
    { title: "Business Meals", desc: "Deduct 50% of meals with clients, partners, or employees for business purposes." },
    { title: "Equipment & Technology", desc: "Deduct computers, phones, software, and other tools used for your business." },
    { title: "Education & Training", desc: "Deduct courses, books, seminars, and coaching directly related to your business." },
    { title: "Health Insurance Premiums", desc: "Self-employed individuals may deduct 100% of health insurance premiums." },
    { title: "Retirement Contributions", desc: "Contribute to a SEP-IRA or Solo 401(k) and deduct contributions from taxable income." },
    { title: "Business Travel", desc: "Deduct flights, hotels, and transportation for legitimate business travel." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-[oklch(0.18_0.06_255)] pt-28 pb-16">
        <div className="container">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
            <Link href="/" className="hover:text-[oklch(0.72_0.17_70)] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/70">Resources</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[oklch(0.72_0.17_70)]" />
              <span className="text-[oklch(0.72_0.17_70)] text-xs font-['Barlow_Condensed'] tracking-widest uppercase font-semibold">
                Free Business Resources
              </span>
            </div>
            <h1 className="font-['Barlow_Condensed'] font-bold text-white text-5xl lg:text-7xl uppercase leading-none mb-6">
              Everything You Need to <span className="text-[oklch(0.72_0.17_70)]">Get Started</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              Use these guides, checklists, and resources to understand what it takes to build a properly structured, funding-ready business. This is the knowledge most entrepreneurs never get — until now.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-[oklch(0.72_0.17_70)] py-5">
        <div className="container">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-[oklch(0.18_0.06_255)] font-['Barlow_Condensed'] font-bold text-xs uppercase tracking-widest">Jump to:</span>
            {["Business Setup Checklist", "Tax Advantages"].map((label, i) => (
              <a
                key={label}
                href={`#section-${i + 1}`}
                className="text-[oklch(0.18_0.06_255)]/75 hover:text-[oklch(0.18_0.06_255)] text-xs font-semibold uppercase tracking-wide transition-colors flex items-center gap-1"
              >
                <ChevronRight size={12} /> {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Download PDF Banner */}
      <section className="bg-[oklch(0.98_0.005_80)] py-12">
        <div className="container">
          <div className="bg-[oklch(0.18_0.06_255)] flex flex-col md:flex-row items-center justify-between gap-6 p-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-[oklch(0.72_0.17_70)] flex items-center justify-center shrink-0">
                <FileText size={26} className="text-[oklch(0.18_0.06_255)]" />
              </div>
              <div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-white text-xl uppercase tracking-wide mb-1">
                  Business Setup Checklist — Free Download
                </h3>
                <p className="text-white/60 text-sm">
                  The complete step-by-step business setup checklist as a printable PDF. Take it with you.
                </p>
              </div>
            </div>
            <a
              href="/manus-storage/Business_Setup_Checklist_EastConsulting.pdf"
              download="Business_Setup_Checklist_EastConsulting.pdf"
              className="inline-flex items-center gap-2 bg-[oklch(0.72_0.17_70)] text-[oklch(0.18_0.06_255)] font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest px-7 py-3.5 hover:bg-[oklch(0.65_0.18_70)] transition-colors duration-200 shrink-0"
            >
              Download PDF <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Section 1 — Business Setup Checklist */}
      <section id="section-1" className="bg-[oklch(0.98_0.005_80)] py-20">
        <div className="container">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[oklch(0.72_0.17_70)]" />
              <span className="text-[oklch(0.72_0.17_70)] text-xs font-['Barlow_Condensed'] tracking-widest uppercase font-semibold">
                Resource 01
              </span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-4xl lg:text-5xl uppercase leading-none mb-4">
              Business Setup Checklist
            </h2>
            <p className="text-[oklch(0.45_0.01_255)] text-base max-w-2xl">
              Follow this step-by-step checklist to ensure your business is properly established. Skipping any of these steps can hold your business back from funding and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {setupChecklist.map((group) => (
              <div key={group.category} className="bg-white border border-[oklch(0.88_0.005_255)] p-7">
                <h3 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-lg uppercase tracking-wide mb-5 pb-3 border-b border-[oklch(0.88_0.005_255)]">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-[oklch(0.72_0.17_70)] shrink-0 mt-0.5" />
                      <span className="text-[oklch(0.35_0.04_255)] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Tax Advantages */}
      <section id="section-2" className="bg-white py-20">
        <div className="container">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[oklch(0.72_0.17_70)]" />
              <span className="text-[oklch(0.72_0.17_70)] text-xs font-['Barlow_Condensed'] tracking-widest uppercase font-semibold">
                Resource 02
              </span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-4xl lg:text-5xl uppercase leading-none mb-4">
              Business Tax Advantages
            </h2>
            <p className="text-[oklch(0.45_0.01_255)] text-base max-w-2xl">
              The U.S. tax code was written to benefit business owners. These are legitimate deductions available to you once your business is properly established. Always consult a tax professional for your specific situation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {taxAdvantages.map((item) => (
              <div key={item.title} className="bg-white border border-[oklch(0.88_0.005_255)] p-6 hover:border-[oklch(0.72_0.17_70)]/50 transition-colors duration-300">
                <Star size={16} className="text-[oklch(0.72_0.17_70)] mb-3" />
                <h3 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-base uppercase tracking-wide mb-2">{item.title}</h3>
                <p className="text-[oklch(0.45_0.01_255)] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.72_0.17_70)] py-16">
        <div className="container text-center">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-4xl lg:text-5xl uppercase leading-none mb-4">
            Need Help Putting This Into Action?
          </h2>
          <p className="text-[oklch(0.18_0.06_255)]/75 text-base mb-8 max-w-xl mx-auto">
            Knowledge is the first step. East Consulting LLC walks you through every item on this list — so nothing gets missed and your business is built right the first time.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/booking/22Ig6MGZ2XELV3Qi9Zr3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[oklch(0.18_0.06_255)] text-white font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-wider px-8 py-4 hover:bg-[oklch(0.25_0.06_255)] transition-colors duration-200"
          >
            Book a Free Consultation <ChevronRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
