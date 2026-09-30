/**
 * East Consulting LLC — Terms & Conditions Page (/terms-and-conditions)
 * Design: Modern Momentum — Navy & Amber
 * Includes all A2P 10DLC required SMS clauses for carrier approval
 * No use of the word "revenue" anywhere in this document
 */

import { Link } from "wouter";
import { ChevronLeft, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  const lastUpdated = "August 1, 2026";

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.002_286)] font-['Source_Sans_3']">
      <Navbar />

      {/* Header */}
      <div className="bg-[oklch(0.18_0.06_255)] pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[oklch(0.72_0.17_70)] hover:text-[oklch(0.82_0.17_70)] text-sm font-semibold mb-8 transition-colors"
          >
            <ChevronLeft size={16} />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[oklch(0.72_0.17_70)]/15 flex items-center justify-center">
              <FileText size={24} className="text-[oklch(0.72_0.17_70)]" />
            </div>
            <h1 className="font-['Barlow_Condensed'] font-bold text-white text-4xl uppercase tracking-wide">
              Terms &amp; Conditions
            </h1>
          </div>
          <p className="text-white/60 text-sm">
            Last Updated: {lastUpdated} &nbsp;|&nbsp; East Consulting LLC
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* Intro */}
        <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to <strong>East Consulting LLC</strong> ("Company," "we," "us," or "our"). These Terms &amp; Conditions ("Terms") govern your access to and use of our website located at{" "}
            <a href="https://www.eastconsultingllc.com" className="text-[oklch(0.35_0.12_255)] hover:underline font-medium">
              www.eastconsultingllc.com
            </a>{" "}
            and all related services, programs, and communications offered by East Consulting LLC.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            By accessing our website, submitting a contact form, booking a consultation, or opting in to receive communications from us, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Please read these Terms carefully. They contain important information about your rights and obligations, including provisions related to SMS text messaging, privacy, and limitations of liability.
          </p>
        </div>

        {/* Section 1 */}
        <section className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-3 border-b border-gray-100">
            1. Services Description
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            East Consulting LLC provides business development consulting services, including but not limited to: business entity formation guidance, professional business setup, business banking and operations setup, funding readiness preparation, market positioning, and related educational resources. East Consulting LLC does not provide credit repair, debt relief, or lending services.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our services are intended to provide general business guidance and education. Nothing on this website or in our consulting sessions constitutes legal, financial, tax, or accounting advice. You should consult qualified licensed professionals for advice specific to your situation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Results from our programs vary based on individual effort, market conditions, and other factors outside our control. We do not guarantee specific outcomes, funding approvals, or capital acquisition.
          </p>
        </section>

        {/* Section 2 */}
        <section className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-3 border-b border-gray-100">
            2. Eligibility
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By using this website or engaging our services, you represent that you are at least 18 years of age, have the legal capacity to enter into binding agreements, and are using our services for lawful business purposes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our services are available to individuals and business entities located in the United States. We reserve the right to refuse service to anyone at our sole discretion.
          </p>
        </section>

        {/* Section 3 — SMS (A2P Required) */}
        <section className="bg-white rounded-sm shadow-sm border-l-4 border-l-[oklch(0.72_0.17_70)] border border-gray-100 p-8 mb-6">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-3 border-b border-gray-100">
            3. SMS Text Messaging Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            By providing your mobile phone number and submitting a form on our website, you agree to receive SMS text messages from East Consulting LLC. The following terms apply to all SMS communications:
          </p>

          <div className="space-y-6">

            {/* 3.1 */}
            <div className="bg-[oklch(0.97_0.002_286)] rounded-sm p-5 border border-gray-200">
              <h3 className="font-semibold text-[oklch(0.18_0.06_255)] text-base mb-2">
                3.1 Business Identity &amp; Program Description
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                SMS messages are sent by <strong>East Consulting LLC</strong>, a business development consulting company. Our SMS program is used for customer care only: responses to inquiries and support requests, appointment coordination, and follow-up communications related to an existing inquiry. We do not send promotional or marketing text messages.
              </p>
            </div>

            {/* 3.2 */}
            <div className="bg-[oklch(0.97_0.002_286)] rounded-sm p-5 border border-gray-200">
              <h3 className="font-semibold text-[oklch(0.18_0.06_255)] text-base mb-2">
                3.2 Consent to Receive SMS Messages
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                You opt in to SMS messages by entering your mobile number in the chat widget on our website and submitting the chat form. The chat form displays a consent notice stating that, by submitting, you authorize East Consulting LLC to text or call the number provided with informational and transactional messages, possibly using automated means. The chat widget is the only place on our website where phone numbers are collected for text messaging. Consent is not a condition of purchasing any goods or services; you can contact us by email or phone instead.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                We send one type of SMS message: <strong>informational and transactional messages</strong> — replies to your inquiry or support request, appointment coordination, and follow-up related to that inquiry. We do not send marketing or promotional messages.
              </p>
            </div>

            {/* 3.3 */}
            <div className="bg-[oklch(0.97_0.002_286)] rounded-sm p-5 border border-gray-200">
              <h3 className="font-semibold text-[oklch(0.18_0.06_255)] text-base mb-2">
                3.3 Message Frequency &amp; Rates
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Message frequency varies based on your interactions with our services. You may receive up to 4–8 messages per month. <strong>Message and data rates may apply</strong> depending on your mobile carrier plan. East Consulting LLC is not responsible for any charges incurred from your mobile carrier.
              </p>
            </div>

            {/* 3.4 */}
            <div className="bg-[oklch(0.72_0.17_70)]/10 rounded-sm p-5 border border-[oklch(0.72_0.17_70)]/30">
              <h3 className="font-semibold text-[oklch(0.18_0.06_255)] text-base mb-2">
                3.4 How to Opt Out (STOP)
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                You may opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message you receive from us. After sending STOP, you will receive a one-time confirmation message and no further SMS messages will be sent to your number.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                To re-subscribe after opting out, reply <strong>START</strong> to the same number. For help, reply <strong>HELP</strong> to any message or contact us at{" "}
                <a href="mailto:support@eastconsultingllc.com" className="text-[oklch(0.35_0.12_255)] hover:underline font-medium">
                  support@eastconsultingllc.com
                </a>{" "}
                or call <a href="tel:+16783254094" className="text-[oklch(0.35_0.12_255)] hover:underline font-medium">(678) 325-4094</a>.
              </p>
            </div>

            {/* 3.5 */}
            <div className="bg-[oklch(0.97_0.002_286)] rounded-sm p-5 border border-gray-200">
              <h3 className="font-semibold text-[oklch(0.18_0.06_255)] text-base mb-2">
                3.5 Carrier Liability Disclaimer
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Mobile carriers are not liable for delayed or undelivered messages. Delivery of SMS messages is subject to effective transmission from your mobile carrier. East Consulting LLC is not responsible for messages that are not received due to carrier issues, network outages, or incorrect phone numbers provided by the user.
              </p>
            </div>

            {/* 3.6 */}
            <div className="bg-[oklch(0.97_0.002_286)] rounded-sm p-5 border border-gray-200">
              <h3 className="font-semibold text-[oklch(0.18_0.06_255)] text-base mb-2">
                3.6 No Sharing of SMS Opt-In Data
              </h3>
              <div className="bg-white border border-gray-300 rounded-sm p-4">
                <p className="text-gray-800 text-sm leading-relaxed font-medium">
                  No mobile information (including phone numbers and SMS opt-in consent) will be shared with third parties or affiliates for marketing or promotional purposes. This data will not be sold, rented, or transferred to any outside parties. SMS opt-in consent and phone numbers collected for SMS purposes are used solely to communicate with the individual who provided consent and will not be shared with any third party for any purpose.
                </p>
              </div>
            </div>

            {/* 3.7 */}
            <div className="bg-[oklch(0.97_0.002_286)] rounded-sm p-5 border border-gray-200">
              <h3 className="font-semibold text-[oklch(0.18_0.06_255)] text-base mb-2">
                3.7 Privacy Policy Reference
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Your use of our SMS services is also governed by our{" "}
                <Link href="/privacy-policy" className="text-[oklch(0.35_0.12_255)] hover:underline font-medium">
                  Privacy Policy
                </Link>
                , which describes how we collect, use, and protect your personal information, including your phone number and SMS consent data.
              </p>
            </div>

          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-3 border-b border-gray-100">
            4. User Responsibilities
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By using our website and services, you agree to:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
            {[
              "Provide accurate, current, and complete information when submitting forms or booking consultations.",
              "Use our services only for lawful purposes and in compliance with all applicable laws and regulations.",
              "Not misrepresent your identity, business, or qualifications.",
              "Not attempt to gain unauthorized access to any portion of our website or systems.",
              "Not use our services to engage in any fraudulent, deceptive, or harmful activity.",
              "Maintain the confidentiality of any proprietary materials, strategies, or information shared during consulting sessions.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 bg-[oklch(0.72_0.17_70)]/15 text-[oklch(0.72_0.17_70)] rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Section 5 */}
        <section className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-3 border-b border-gray-100">
            5. Payment Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fees for consulting services, programs, and packages are communicated prior to engagement. All fees are due as specified in your service agreement or invoice. East Consulting LLC reserves the right to modify pricing at any time, with notice provided to existing clients.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Refund eligibility is determined on a case-by-case basis and outlined in your individual service agreement. Initial consultation fees, if any, are non-refundable once the consultation has taken place.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Failure to make timely payments may result in suspension or termination of services. Outstanding balances are subject to a late fee as specified in your service agreement.
          </p>
        </section>

        {/* Section 6 */}
        <section className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-3 border-b border-gray-100">
            6. Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All content on this website — including text, graphics, logos, images, downloadable resources, and program materials — is the property of East Consulting LLC and is protected by applicable copyright and intellectual property laws.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You may not reproduce, distribute, modify, or create derivative works from our content without prior written permission from East Consulting LLC. Downloadable resources provided to clients are for personal, non-commercial use only.
          </p>
        </section>

        {/* Section 7 */}
        <section className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-3 border-b border-gray-100">
            7. Confidentiality
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            East Consulting LLC treats all client information with strict confidentiality. We will not disclose your personal or business information to third parties except as required by law, with your explicit consent, or as necessary to deliver our services (e.g., scheduling platforms, payment processors).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Clients are also expected to maintain the confidentiality of any proprietary methodologies, frameworks, or materials shared during the consulting engagement.
          </p>
        </section>

        {/* Section 8 */}
        <section className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-3 border-b border-gray-100">
            8. Disclaimer of Warranties
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our website and services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. East Consulting LLC does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We make no representations or warranties regarding the accuracy, completeness, or suitability of any information provided on this website or during consulting sessions. Business outcomes depend on many factors outside our control, and no specific results are guaranteed.
          </p>
        </section>

        {/* Section 9 */}
        <section className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-3 border-b border-gray-100">
            9. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To the fullest extent permitted by applicable law, East Consulting LLC and its members, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This includes, without limitation, loss of profits, capital, business opportunities, data, or goodwill, even if East Consulting LLC has been advised of the possibility of such damages.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our total liability to you for any claim arising out of or relating to these Terms or our services shall not exceed the total amount paid by you to East Consulting LLC in the three (3) months preceding the claim.
          </p>
        </section>

        {/* Section 10 */}
        <section className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-3 border-b border-gray-100">
            10. Indemnification
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to indemnify, defend, and hold harmless East Consulting LLC and its members, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with your use of our website or services, your violation of these Terms, or your violation of any applicable law or the rights of any third party.
          </p>
        </section>

        {/* Section 11 */}
        <section className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-3 border-b border-gray-100">
            11. Governing Law &amp; Dispute Resolution
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Georgia.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Before initiating any formal legal proceeding, you agree to first contact East Consulting LLC in writing to attempt to resolve the dispute informally. We will make a good-faith effort to resolve any dispute within 30 days of receiving written notice.
          </p>
        </section>

        {/* Section 12 */}
        <section className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="font-['Barlow_Condensed'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-4 pb-3 border-b border-gray-100">
            12. Changes to These Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            East Consulting LLC reserves the right to update or modify these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our website or services after any changes constitutes your acceptance of the revised Terms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We encourage you to review these Terms periodically to stay informed of any updates.
          </p>
        </section>

        {/* Section 13 — Contact */}
        <section className="bg-[oklch(0.18_0.06_255)] rounded-sm p-8 mb-6">
          <h2 className="font-['Barlow_Condensed'] font-bold text-white text-2xl uppercase tracking-wide mb-4 pb-3 border-b border-white/10">
            13. Contact Us
          </h2>
          <p className="text-white/70 text-sm mb-5">
            If you have any questions about these Terms &amp; Conditions, please contact us:
          </p>
          <div className="space-y-2">
            <p className="text-white/70 text-sm font-semibold">East Consulting LLC</p>
            <p className="text-white/70 text-sm">
              Email:{" "}
              <a href="mailto:support@eastconsultingllc.com" className="text-[oklch(0.72_0.17_70)] hover:underline">
                support@eastconsultingllc.com
              </a>
            </p>
            <p className="text-white/70 text-sm">
              Phone:{" "}
              <a href="tel:+16783254094" className="text-[oklch(0.72_0.17_70)] hover:underline">
                (678) 325-4094
              </a>
            </p>
            <p className="text-white/70 text-sm">Address: 850 N. Jefferson Street, Jackson, MS 39202</p>
            <p className="text-white/70 text-sm">
              Website:{" "}
              <a href="https://www.eastconsultingllc.com" className="text-[oklch(0.72_0.17_70)] hover:underline">
                www.eastconsultingllc.com
              </a>
            </p>
          </div>
        </section>

        {/* Bottom nav */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Link href="/" className="text-[oklch(0.35_0.12_255)] hover:text-[oklch(0.18_0.06_255)] text-sm font-medium hover:underline transition-colors">
            ← Back to Home
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/privacy-policy" className="text-[oklch(0.35_0.12_255)] hover:text-[oklch(0.18_0.06_255)] text-sm font-medium hover:underline transition-colors">
            Privacy Policy
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/terms-of-service" className="text-[oklch(0.35_0.12_255)] hover:text-[oklch(0.18_0.06_255)] text-sm font-medium hover:underline transition-colors">
            Terms of Service
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/contact" className="text-[oklch(0.35_0.12_255)] hover:text-[oklch(0.18_0.06_255)] text-sm font-medium hover:underline transition-colors">
            Contact Us
          </Link>
        </div>

      </div>
      <Footer />
    </div>
  );
}
