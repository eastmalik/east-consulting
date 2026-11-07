/*
 * East Consulting LLC — Terms & Conditions (/terms-and-conditions)
 * Includes the text-messaging (SMS) program terms A2P 10DLC reviewers require.
 * The opt-in described here must match the consent checkbox on the GoHighLevel booking form.
 */

import { Link } from "wouter";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { BOOK_PATH, CONTACT } from "@/lib/site";

const WEBSITE = "https://www.eastconsultingllc.com";

const sections: LegalSection[] = [
  {
    heading: "About these terms",
    body: (
      <p>
        These Terms &amp; Conditions apply to your use of <a href={WEBSITE}>{WEBSITE}</a> and to the services provided
        by East Consulting LLC ("East Consulting", "we", "us"). By using this website, booking a consultation, or
        opting in to our text messages, you agree to these terms.
      </p>
    ),
  },
  {
    heading: "Our services",
    body: (
      <>
        <p>
          East Consulting LLC provides business formation consulting: guidance on business entity formation and on
          professional business setup. We also set up business automation systems (booking forms, calendars,
          pipelines, and automated emails) for our clients.
        </p>
        <p>
          Our services are guidance and consulting. We are not a law firm and do not provide legal advice. For legal
          questions about your business, please consult a licensed attorney or another qualified professional.
        </p>
      </>
    ),
  },
  {
    heading: "Consultations and booking",
    body: (
      <p>
        You can request a consultation through our <Link href={BOOK_PATH}>booking form</Link> and then choose a time on
        our calendar. If you need to reschedule or cancel, please contact us as early as you can at{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or {CONTACT.phone}.
      </p>
    ),
  },
  {
    heading: "No guarantees",
    body: (
      <p>
        Filings, registrations, and approvals are decided by the government agencies involved (for example, your
        state's Secretary of State or the IRS), not by us. We do not guarantee any particular outcome or timeline.
      </p>
    ),
  },
  {
    heading: "Text messaging (SMS) terms",
    body: (
      <>
        <p>
          <strong>Who sends the messages.</strong> Text messages are sent by East Consulting LLC.
        </p>
        <p>
          <strong>How you opt in.</strong> You opt in by checking the optional text-message consent box on our{" "}
          <Link href={BOOK_PATH}>booking form</Link>. The box is not pre-checked. Consent is not a condition of booking
          or of any purchase.
        </p>
        <p>
          <strong>What we send.</strong> Appointment confirmations, reminders, and updates about your consultation. We
          do not send marketing or promotional text messages.
        </p>
        <p>
          <strong>Message frequency and rates.</strong> Message frequency varies. Message and data rates may apply.
        </p>
        <p>
          <strong>How to opt out.</strong> Reply <strong>STOP</strong> to any message to stop receiving texts. We will
          send one message confirming that you have been unsubscribed, and then no further texts. To join again, reply{" "}
          <strong>START</strong> or opt in again on our booking form.
        </p>
        <p>
          <strong>How to get help.</strong> Reply <strong>HELP</strong> to any message, email{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>, or call <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
        </p>
        <p>
          <strong>Carriers.</strong> Mobile carriers are not liable for delayed or undelivered messages.
        </p>
        <p>
          <strong>Privacy.</strong> Your phone number and text-message consent are never shared with third parties for
          marketing. See our <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </>
    ),
  },
  {
    heading: "Use of this website",
    body: (
      <p>
        You agree to use this website only for lawful purposes. The content of this website, including text, logo, and
        design, belongs to East Consulting LLC and may not be copied or reused without our permission.
      </p>
    ),
  },
  {
    heading: "Limitation of liability",
    body: (
      <p>
        This website and its content are provided for general information. To the fullest extent permitted by law,
        East Consulting LLC is not liable for any indirect or consequential loss arising from your use of this website.
      </p>
    ),
  },
  {
    heading: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of the state in which East Consulting LLC is organized, and the laws of
        the United States.
      </p>
    ),
  },
  {
    heading: "Changes to these terms",
    body: (
      <p>
        We may update these Terms &amp; Conditions from time to time. The "Last updated" date at the top of this page
        shows when they were last changed.
      </p>
    ),
  },
  {
    heading: "Contact us",
    body: (
      <p>
        East Consulting LLC, {CONTACT.addressLine1}, {CONTACT.addressLine2}
        <br />
        Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        <br />
        Phone: <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
      </p>
    ),
  },
];

export default function TermsAndConditions() {
  return <LegalPage title="Terms & Conditions" lastUpdated="November 6, 2026" sections={sections} />;
}
