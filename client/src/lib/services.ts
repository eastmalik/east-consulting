// The owner's services. 001 and 002 are worded exactly as the owner wrote them.
// 003 is the business automation system from the owner's Miro board ("THE FLOW"),
// priced by the owner: $500 one-time, set up in 1 week.
type Service = { title: string; description: string; features: string[]; price?: string; timeline?: string };

export const SERVICES: Service[] = [
  {
    title: "Business Entity Formation",
    description:
      "We guide you through selecting and registering the right business structure — LLC, Corporation, or Partnership — with your state's Secretary of State, ensuring your business is legally established from day one.",
    features: ["Name verification & trademark check", "Secretary of State filing", "Registered Agent setup", "Articles of Incorporation"],
  },
  {
    title: "Professional Business Setup",
    description:
      "A legitimate business needs more than an idea. We help you establish every foundational element: professional email, business address, phone number, EIN, and Google Business Profile.",
    features: ["EIN registration (IRS)", "Professional domain & email", "Business address & phone", "Google Business Profile"],
  },
  {
    title: "Business Automation Setup",
    description:
      "We set up your business automation system in GoHighLevel: a booking form and calendar, pipelines that track every lead, and automated emails that confirm, remind, and follow up for you, so no client slips through the cracks.",
    features: ["Booking form & calendar", "Lead pipelines", "Automated email workflows", "Reminders & no-show follow-up"],
    price: "$500 one-time",
    timeline: "Set up in 1 week",
  },
];
