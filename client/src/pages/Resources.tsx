/*
 * East Consulting LLC — Resources Page (/resources)
 * Design: Modern Momentum — Navy & Amber
 */

import { useEffect } from "react";
import { Link } from "wouter";
import {
  ChevronRight, CheckCircle2, Building2, CreditCard, FileText,
  DollarSign, Landmark, BookOpen, AlertCircle, Star
} from "lucide-react";
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
    { category: "Business Credit Profile", items: ["Register with Dun & Bradstreet to get your DUNS Number", "Register with Experian Business and Equifax Business", "Sign up for NAV to monitor your business credit", "Open Net-30 vendor accounts (Uline, Grainger, Quill)", "Apply for a business credit card after 3–6 months of history"] },
    { category: "Online Presence", items: ["Create a Google Business Profile", "Set up your website with a contact form", "List your business on Yelp, BBB, and industry directories", "Ensure your NAP (Name, Address, Phone) is consistent everywhere"] },
  ];

  const tradelines = [
    { name: "Uline", type: "Net-30 Vendor", desc: "Office and shipping supplies. Reports to D&B. One of the easiest first tradelines to establish.", tier: "Starter" },
    { name: "Grainger", type: "Net-30 Vendor", desc: "Industrial and safety supplies. Reports to D&B and Experian Business.", tier: "Starter" },
    { name: "Quill (Staples)", type: "Net-30 Vendor", desc: "Office supplies. Reports to D&B. Low barrier to entry for new businesses.", tier: "Starter" },
    { name: "Amazon Business", type: "Net-30 / Credit", desc: "Business purchasing account. Reports to business credit bureaus after approval.", tier: "Growth" },
    { name: "Home Depot Commercial", type: "Business Credit", desc: "Commercial credit account for business purchases. Reports to D&B and Experian.", tier: "Growth" },
    { name: "Lowes Business", type: "Business Credit", desc: "Business credit account for tools and supplies. Reports to major bureaus.", tier: "Growth" },
    { name: "Shell Fleet Card", type: "Fleet / Fuel Card", desc: "Fuel and vehicle expenses. Reports to D&B. Great for businesses with vehicles.", tier: "Growth" },
    { name: "Nav Business Boost", type: "Credit Builder", desc: "Specifically designed to build business credit. Reports to all major bureaus.", tier: "Starter" },
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

  const fundingTypes = [
    { icon: Landmark, title: "SBA Loans", desc: "Small Business Administration loans offer low interest rates and long repayment terms. Requires strong credit and documentation.", requirement: "650+ credit score, 2+ years in business" },
    { icon: CreditCard, title: "Business Credit Lines", desc: "Revolving lines of credit for operational expenses. Available after establishing 6–12 months of business credit history.", requirement: "Strong business credit profile, bank history" },
    { icon: DollarSign, title: "Business Term Loans", desc: "Lump-sum loans for specific purposes like equipment, expansion, or working capital. Fixed repayment schedules.", requirement: "Business bank statements, revenue history" },
    { icon: Building2, title: "Business Credit Cards", desc: "Unsecured credit cards for business expenses. Available after establishing initial business credit tradelines.", requirement: "EIN, business bank account, credit profile" },
  ];

  const tierColors: Record<string, string> = {
    Starter: "bg-[oklch(0.72_0.17_70)]/15 text-[oklch(0.55_0.15_70)] border border-[oklch(0.72_0.17_70)]/30",
    Growth: "bg-[oklch(0.18_0.06_255)]/10 text-[oklch(0.18_0.06_255)] border border-[oklch(0.18_0.06_255)]/20",
  };

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
              Use these guides, checklists, and resources to understand what it takes to build a properly structured, credit-ready, funding-ready business. This is the knowledge most entrepreneurs never get — until now.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-[oklch(0.72_0.17_70)] py-5">
        <div className="container">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-[oklch(0.18_0.06_255)] font-['Barlow_Condensed'] font-bold text-xs uppercase tracking-widest">Jump to:</span>
            {["Business Setup Checklist", "Tradelines Guide", "Tax Advantages", "Funding Types"].map((label, i) => (
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
                  The complete step-by-step checklist + tradelines guide as a printable PDF. Take it with you.
                </p>
              </div>
            </div>
            <a
              href="/manus-storage/Business_Setup_Checklist_EastConsulting_a8976c2c.pdf"
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
              Follow this step-by-step checklist to ensure your business is properly established. Skipping any of these steps can disqualify you from business credit and funding.
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

      {/* Section 2 — Tradelines Guide */}
      <section id="section-2" className="bg-[oklch(0.18_0.06_255)] py-20">
        <div className="container">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[oklch(0.72_0.17_70)]" />
              <span className="text-[oklch(0.72_0.17_70)] text-xs font-['Barlow_Condensed'] tracking-widest uppercase font-semibold">
                Resource 02
              </span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-bold text-white text-4xl lg:text-5xl uppercase leading-none mb-4">
              Business Tradelines Guide
            </h2>
            <p className="text-white/60 text-base max-w-2xl">
              Tradelines are accounts that report to business credit bureaus and build your business credit profile. Start with Starter tier accounts, then progress to Growth tier as your profile strengthens.
            </p>
          </div>
          <div className="bg-[oklch(0.72_0.17_70)]/10 border border-[oklch(0.72_0.17_70)]/20 p-5 mb-8 flex items-start gap-3">
            <AlertCircle size={18} className="text-[oklch(0.72_0.17_70)] shrink-0 mt-0.5" />
            <p className="text-white/70 text-sm leading-relaxed">
              <strong className="text-white">Important:</strong> Always use your business EIN (not your SSN) when applying for business tradelines. Ensure your business address, phone, and name are consistent across all applications and match your Secretary of State registration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tradelines.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 p-6 hover:border-[oklch(0.72_0.17_70)]/40 transition-colors duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-['Barlow_Condensed'] font-bold text-white text-lg uppercase tracking-wide">{t.name}</h3>
                    <p className="text-[oklch(0.72_0.17_70)] text-xs font-semibold uppercase tracking-wide mt-0.5">{t.type}</p>
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1 ${tierColors[t.tier]}`}>{t.tier}</span>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Tax Advantages */}
      <section id="section-3" className="bg-[oklch(0.98_0.005_80)] py-20">
        <div className="container">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[oklch(0.72_0.17_70)]" />
              <span className="text-[oklch(0.72_0.17_70)] text-xs font-['Barlow_Condensed'] tracking-widest uppercase font-semibold">
                Resource 03
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

      {/* Section 4 — Funding Types */}
      <section id="section-4" className="bg-[oklch(0.18_0.06_255)] py-20">
        <div className="container">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[oklch(0.72_0.17_70)]" />
              <span className="text-[oklch(0.72_0.17_70)] text-xs font-['Barlow_Condensed'] tracking-widest uppercase font-semibold">
                Resource 04
              </span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-bold text-white text-4xl lg:text-5xl uppercase leading-none mb-4">
              Types of Business Funding
            </h2>
            <p className="text-white/60 text-base max-w-2xl">
              Understanding what funding options are available — and what's required to qualify — helps you build toward the right goal from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fundingTypes.map(({ icon: Icon, title, desc, requirement }) => (
              <div key={title} className="border border-white/10 p-8 hover:border-[oklch(0.72_0.17_70)]/40 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[oklch(0.72_0.17_70)]/15 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[oklch(0.72_0.17_70)]" />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] font-bold text-white text-xl uppercase tracking-wide">{title}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex items-start gap-2 bg-white/5 p-3">
                  <BookOpen size={13} className="text-[oklch(0.72_0.17_70)] shrink-0 mt-0.5" />
                  <p className="text-white/50 text-xs"><strong className="text-[oklch(0.72_0.17_70)]">Typical Requirements:</strong> {requirement}</p>
                </div>
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
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[oklch(0.18_0.06_255)] text-white font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest px-8 py-4 hover:bg-[oklch(0.25_0.06_255)] transition-colors duration-200"
          >
            Book a Free Consultation <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
