/*
 * East Consulting LLC — shared layout for the legal pages
 * Navy title band, then plain sections with short headings
 * (format modelled on betdavidconsulting.com/privacy.html, per the owner).
 */

import { useEffect, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type LegalSection = { heading: string; body: ReactNode };

export default function LegalPage({
  title,
  lastUpdated,
  sections,
}: {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-[oklch(0.18_0.06_255)] text-white pt-32 pb-14 lg:pt-40 lg:pb-16">
          <div className="container">
            <h1 className="font-['Darker_Grotesque'] font-bold leading-[0.95] text-6xl sm:text-7xl lg:text-8xl mb-6">
              {title}
            </h1>
            <p className="text-white/70 text-base">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="container">
            <div className="max-w-3xl space-y-10">
              {sections.map(({ heading, body }) => (
                <div key={heading}>
                  <h2 className="font-['Darker_Grotesque'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-3">
                    {heading}
                  </h2>
                  <div className="text-[oklch(0.35_0.03_255)] text-base leading-relaxed space-y-3 [&_a]:text-[oklch(0.18_0.06_255)] [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
                    {body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
