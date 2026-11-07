// The owner's services. 1 and 2 are worded exactly as the owner wrote them.
// 3 is the business automation system from the owner's Miro board ("THE FLOW").
// The owner removed the price and the "1 week" timeline from the site.
type Service = { title: string; description: string; features: string[] };

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
      "Stop chasing leads by hand. We set up your business automation system in GoHighLevel: a booking form and calendar, pipelines that track every lead, and automated emails that confirm, remind, and follow up for you, so no client slips through the cracks.",
    features: ["Booking form & calendar", "Lead pipelines", "Automated email workflows", "Reminders & no-show follow-up"],
  },
];
