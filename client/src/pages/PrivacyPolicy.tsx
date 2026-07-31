/*
 * East Consulting LLC — Privacy Policy Page
 * Design: Modern Momentum — Navy & Amber
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="bg-[oklch(0.18_0.06_255)] pt-28 pb-14">
        <div className="container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
            <Link href="/" className="hover:text-[oklch(0.72_0.17_70)] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/70">Privacy Policy</span>
          </div>
          <h1 className="font-['Barlow_Condensed'] font-bold text-white text-5xl lg:text-6xl uppercase leading-none mb-3">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 bg-[oklch(0.98_0.005_80)] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-[oklch(0.72_0.17_70)]/10 border-l-4 border-[oklch(0.72_0.17_70)] p-5 mb-10">
            <p className="text-[oklch(0.35_0.04_255)] text-sm leading-relaxed">
              At East Consulting LLC, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage our services.
            </p>
          </div>

          <div className="space-y-10 text-[oklch(0.35_0.04_255)]">

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                1. Information We Collect
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                We collect information that you voluntarily provide to us when you fill out our contact form, book a consultation, or otherwise communicate with us. This may include:
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Full name",
                  "Email address",
                  "Phone number",
                  "Business name and description",
                  "Service interests and goals",
                  "Any other information you choose to share in your messages",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.17_70)] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed mt-3">
                We may also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages visited. This information is collected through standard web analytics tools.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                2. How We Use Your Information
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "To respond to your inquiries and schedule consultations",
                  "To provide, operate, and improve our consulting services",
                  "To send you relevant information about our services, resources, and updates (with your consent)",
                  "To personalize your experience and tailor our recommendations to your business needs",
                  "To comply with legal obligations and protect our legal rights",
                  "To analyze website usage and improve our online presence",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.17_70)] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                3. How We Share Your Information
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "With trusted service providers who assist us in operating our website and delivering our services, subject to confidentiality agreements",
                  "When required by law, court order, or governmental authority",
                  "To protect the rights, property, or safety of East Consulting LLC, our clients, or others",
                  "With your explicit consent",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.17_70)] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                4. Data Retention
              </h2>
              <p className="text-sm leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. Cookies are small data files stored on your device. You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of our website.
              </p>
              <p className="text-sm leading-relaxed">
                We use analytics tools to understand how visitors interact with our website. This data is aggregated and does not personally identify you.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                6. Security of Your Information
              </h2>
              <p className="text-sm leading-relaxed">
                We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                7. Your Rights and Choices
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "The right to access and receive a copy of the personal information we hold about you",
                  "The right to request correction of inaccurate or incomplete information",
                  "The right to request deletion of your personal information",
                  "The right to opt out of marketing communications at any time",
                  "The right to withdraw consent where processing is based on consent",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.17_70)] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed mt-3">
                To exercise any of these rights, please contact us at the information provided below.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                8. Children's Privacy
              </h2>
              <p className="text-sm leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us immediately and we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                9. Changes to This Policy
              </h2>
              <p className="text-sm leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of any material changes by updating the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                10. Contact Us
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-[oklch(0.18_0.06_255)] p-6 text-white">
                <p className="font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide mb-3">East Consulting LLC</p>
                <p className="text-white/70 text-sm mb-1">Email: <a href="mailto:eastm65@gmail.com" className="text-[oklch(0.72_0.17_70)] hover:underline">eastm65@gmail.com</a></p>
                <p className="text-white/70 text-sm">United States</p>
              </div>
            </section>

          </div>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-[oklch(0.88_0.005_255)]">
            <Link href="/" className="inline-flex items-center gap-2 text-[oklch(0.72_0.17_70)] font-semibold text-sm hover:underline">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
