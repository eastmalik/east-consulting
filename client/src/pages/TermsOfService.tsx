/*
 * East Consulting LLC — Terms of Service Page
 * Design: Modern Momentum — Navy & Amber
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
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
            <span className="text-white/70">Terms of Service</span>
          </div>
          <h1 className="font-['Barlow_Condensed'] font-bold text-white text-5xl lg:text-6xl uppercase leading-none mb-3">
            Terms of Service
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
              Please read these Terms of Service carefully before using the East Consulting LLC website or engaging our services. By accessing our website or using our services, you agree to be bound by these terms.
            </p>
          </div>

          <div className="space-y-10 text-[oklch(0.35_0.04_255)]">

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm leading-relaxed">
                By accessing or using the East Consulting LLC website (the "Site") or any of our consulting services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our Site or services. East Consulting LLC reserves the right to modify these terms at any time, and your continued use of the Site constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                2. Description of Services
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                East Consulting LLC provides business development consulting services, including but not limited to:
              </p>
              <ul className="space-y-2 text-sm mb-3">
                {[
                  "Business entity formation guidance and support",
                  "Professional business setup consulting",
                  "Business banking and operations setup",
                  "Funding readiness assessment and preparation",
                  "Market positioning and business launch consulting",
                  "Educational resources and materials related to business development",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.17_70)] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed">
                Our services are educational and advisory in nature. East Consulting LLC is not a law firm, accounting firm, or financial institution, and nothing we provide constitutes legal, tax, accounting, or financial advice.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                3. No Professional Advice Disclaimer
              </h2>
              <p className="text-sm leading-relaxed">
                The information and guidance provided by East Consulting LLC is for general educational and informational purposes only. It does not constitute legal, financial, tax, or accounting advice. You should consult with a licensed attorney, certified public accountant, or other qualified professional before making any business, legal, or financial decisions. East Consulting LLC makes no representations or warranties regarding the accuracy, completeness, or suitability of any information provided.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                4. Client Responsibilities
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                As a client or prospective client, you agree to:
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Provide accurate, complete, and truthful information when engaging our services",
                  "Use our services only for lawful purposes",
                  "Not misrepresent your identity, business, or intentions",
                  "Take full responsibility for all business decisions made based on our guidance",
                  "Comply with all applicable federal, state, and local laws and regulations",
                  "Not use our services to engage in any fraudulent, deceptive, or illegal activity",
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
                5. Payment Terms
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                Payment terms for consulting services will be outlined in a separate service agreement or invoice provided prior to the commencement of services. By engaging our services, you agree to pay all applicable fees as described. All fees are non-refundable unless otherwise specified in writing by East Consulting LLC.
              </p>
              <p className="text-sm leading-relaxed">
                East Consulting LLC reserves the right to modify its pricing at any time. Any changes to fees for ongoing services will be communicated to you in advance.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                6. Intellectual Property
              </h2>
              <p className="text-sm leading-relaxed">
                All content on this Site, including but not limited to text, graphics, logos, images, guides, templates, and educational materials, is the property of East Consulting LLC and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent. Any materials provided to you as part of our services are for your personal business use only and may not be resold or redistributed.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                7. Confidentiality
              </h2>
              <p className="text-sm leading-relaxed">
                East Consulting LLC treats all client information as confidential. We will not disclose your business information, plans, or personal details to third parties without your consent, except as required by law or as necessary to deliver our services. We expect the same level of confidentiality from our clients regarding any proprietary methods, processes, or materials we share during our engagement.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                8. Limitation of Liability
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                To the fullest extent permitted by law, East Consulting LLC, its owners, employees, and contractors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services or website, including but not limited to:
              </p>
              <ul className="space-y-2 text-sm mb-3">
                {[
                  "Loss of profits, capital, or business opportunities",
                  "Failure to obtain funding or investment",
                  "Decisions made based on our educational guidance",
                  "Errors or omissions in any information provided",
                  "Unauthorized access to or alteration of your data",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.17_70)] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed">
                Our total liability to you for any claim arising from these terms or our services shall not exceed the total amount paid by you to East Consulting LLC in the three months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                9. Indemnification
              </h2>
              <p className="text-sm leading-relaxed">
                You agree to indemnify, defend, and hold harmless East Consulting LLC and its owners, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to your use of our services, your violation of these Terms, or your violation of any applicable law or regulation.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                10. Termination
              </h2>
              <p className="text-sm leading-relaxed">
                East Consulting LLC reserves the right to terminate or suspend your access to our services at any time, with or without cause, and with or without notice. You may also terminate your engagement with us at any time by providing written notice. Upon termination, all provisions of these Terms that by their nature should survive termination shall remain in effect.
              </p>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                11. Governing Law
              </h2>
              <p className="text-sm leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the United States and the state in which East Consulting LLC is registered, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved through good-faith negotiation, and if unresolved, through binding arbitration or the courts of competent jurisdiction.
              </p>
            </section>

            {/* A2P SMS Required Section */}
            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                12. SMS Text Messaging Terms
              </h2>
              <p className="text-sm leading-relaxed mb-5">
                East Consulting LLC operates an SMS messaging program to communicate with clients and prospective clients for customer care only: responses to inquiries and support requests, appointment coordination, and follow-up communications related to an existing inquiry. We do not send marketing or promotional text messages. By providing your phone number and opting in, you agree to the following terms.
              </p>

              {/* Business Identity */}
              <div className="mb-5">
                <p className="font-semibold text-[oklch(0.18_0.06_255)] text-sm uppercase tracking-wide mb-2">12.1 — Business Identity</p>
                <p className="text-sm leading-relaxed">
                  SMS messages are sent by <strong>East Consulting LLC</strong>, a business development consulting company that helps entrepreneurs establish legally sound, professionally structured businesses positioned to attract investors and secure funding. Messages may include appointment confirmations, consultation reminders, service updates, and follow-up communications.
                </p>
              </div>

              {/* Opt-Out & Support */}
              <div className="bg-[oklch(0.72_0.17_70)]/10 border-l-4 border-[oklch(0.72_0.17_70)] p-5 mb-5">
                <p className="font-semibold text-[oklch(0.18_0.06_255)] text-sm uppercase tracking-wide mb-2">12.2 — Opt-Out &amp; Support Instructions</p>
                <p className="text-sm leading-relaxed text-[oklch(0.35_0.04_255)]">
                  You can cancel the SMS service at any time. Just text &ldquo;STOP&rdquo; to the number from which you received the message. After you send the SMS message &ldquo;STOP&rdquo; to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again. If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at{" "}
                  <a href="mailto:support@eastconsultingllc.com" className="text-[oklch(0.72_0.17_70)] hover:underline">support@eastconsultingllc.com</a>.
                </p>
              </div>

              {/* Carrier Liability */}
              <div className="mb-5">
                <p className="font-semibold text-[oklch(0.18_0.06_255)] text-sm uppercase tracking-wide mb-2">12.3 — Carrier Liability</p>
                <p className="text-sm leading-relaxed">
                  Carriers are not liable for delayed or undelivered messages.
                </p>
              </div>

              {/* Message Frequency & Rates */}
              <div className="bg-[oklch(0.72_0.17_70)]/10 border-l-4 border-[oklch(0.72_0.17_70)] p-5 mb-5">
                <p className="font-semibold text-[oklch(0.18_0.06_255)] text-sm uppercase tracking-wide mb-2">12.4 — Message Frequency &amp; Rates</p>
                <p className="text-sm leading-relaxed text-[oklch(0.35_0.04_255)]">
                  As always, message and data rates may apply for any messages sent to you from us and to us from you. You will receive messages based on your consultation schedule and service engagement — message frequency may vary. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.
                </p>
              </div>

              {/* Privacy Policy Cross-Link */}
              <div className="mb-2">
                <p className="font-semibold text-[oklch(0.18_0.06_255)] text-sm uppercase tracking-wide mb-2">12.5 — Privacy Policy</p>
                <p className="text-sm leading-relaxed">
                  If you have any questions regarding privacy, please read our privacy policy:{" "}
                  <Link href="/privacy-policy" className="text-[oklch(0.72_0.17_70)] hover:underline font-medium">eastconsultingllc.com/privacy-policy</Link>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-2 border-b border-[oklch(0.88_0.005_255)]">
                13. Contact Us
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-[oklch(0.18_0.06_255)] p-6 text-white">
                <p className="font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide mb-3">East Consulting LLC</p>
                <p className="text-white/70 text-sm mb-1">Email: <a href="mailto:support@eastconsultingllc.com" className="text-[oklch(0.72_0.17_70)] hover:underline">support@eastconsultingllc.com</a></p>
                <p className="text-white/70 text-sm">850 N. Jefferson Street, Jackson, MS 39202</p>
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
