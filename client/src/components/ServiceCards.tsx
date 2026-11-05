/*
 * East Consulting LLC — the two services, shared by Home and What We Do
 */

import { Building2, CheckCircle2, FileText } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Business Entity Formation",
    description:
      "We guide you through selecting and registering the right business structure — LLC, Corporation, or Partnership — with your state's Secretary of State, ensuring your business is legally established from day one.",
    features: ["Name verification & trademark check", "Secretary of State filing", "Registered Agent setup", "Articles of Incorporation"],
  },
  {
    icon: FileText,
    title: "Professional Business Setup",
    description:
      "A legitimate business needs more than an idea. We help you establish every foundational element: professional email, business address, phone number, EIN, and Google Business Profile.",
    features: ["EIN registration (IRS)", "Professional domain & email", "Business address & phone", "Google Business Profile"],
  },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <div key={service.title} className={`ec-card p-7 lg:p-9 reveal stagger-${i + 1}`}>
            <div className="w-12 h-12 bg-[oklch(0.18_0.06_255)]/[0.07] flex items-center justify-center mb-5">
              <Icon size={24} className="text-[oklch(0.18_0.06_255)]" />
            </div>
            <h3 className="font-['Darker_Grotesque'] font-bold text-[oklch(0.18_0.06_255)] text-2xl uppercase tracking-wide mb-3">
              {service.title}
            </h3>
            <p className="text-[oklch(0.55_0.01_255)] text-base leading-relaxed mb-6">{service.description}</p>
            <ul className="space-y-2.5">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-[oklch(0.35_0.04_255)]">
                  <CheckCircle2 size={14} className="text-[oklch(0.18_0.06_255)] shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
