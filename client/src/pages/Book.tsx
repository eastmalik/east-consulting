/*
 * East Consulting LLC — Book a Consultation (/book)
 * Layout follows the owner's GoHighLevel booking page: a white card holding
 * the GoHighLevel form. After the form, GoHighLevel sends people to the calendar.
 */

import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BOOKING_CALENDAR_URL, BOOKING_FORM_ID, BOOKING_FORM_URL } from "@/lib/site";

const FORM_EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";
const NAVY = "text-[oklch(0.18_0.06_255)]";
const SLATE = "text-[oklch(0.42_0.03_255)]";

export default function Book() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    // GoHighLevel's helper script sizes the form to fit its content.
    if (!document.querySelector(`script[src="${FORM_EMBED_SCRIPT}"]`)) {
      const script = document.createElement("script");
      script.src = FORM_EMBED_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const iframeId = `inline-${BOOKING_FORM_ID}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-[oklch(0.97_0.008_255)] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white border border-[oklch(0.9_0.015_255)] shadow-[0_20px_60px_oklch(0.18_0.06_255/0.08)] px-5 py-10 sm:px-10">
            <h1 className={`font-['Darker_Grotesque'] font-bold leading-[0.95] ${NAVY} text-5xl lg:text-6xl text-center mb-4`}>
              Book a Consultation
            </h1>
            <p className={`${SLATE} text-lg text-center mb-8`}>
              Fill out the form below, then choose a time on our calendar.
            </p>

            <iframe
              src={BOOKING_FORM_URL}
              style={{ width: "100%", height: "600px", border: "none", borderRadius: "0px" }}
              id={iframeId}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Business Coaching"
              data-height="600"
              data-layout-iframe-id={iframeId}
              data-form-id={BOOKING_FORM_ID}
              title="Book a Consultation"
            />

            <p className={`${SLATE} text-base text-center mt-8`}>
              Already filled out the form?{" "}
              <a
                href={BOOKING_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${NAVY} font-semibold underline underline-offset-4 inline-flex items-center gap-1`}
              >
                Choose a time on our calendar <ArrowRight size={16} />
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
