export type Tier = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  cta: string;
  featured: boolean;
};

export const TIERS: Tier[] = [
  {
    number: "01",
    title: "Hosted subscription",
    subtitle: "Fastest to start",
    description:
      "Sign up online, fill out a short form, and you're live. We handle the servers, updates, backups, and security. You manage your users and data. No IT team required.",
    details: [
      "Self-service onboarding",
      "Automated backups included",
      "Security patches handled",
      "Human support always",
    ],
    cta: "Best for small teams",
    featured: false,
  },
  {
    number: "02",
    title: "Self-hosted contract",
    subtitle: "For compliance-sensitive organisations",
    description:
      "Your data never leaves your hardware. We negotiate with suppliers, install and configure everything, and provide ongoing support. You get full control with none of the operational burden.",
    details: [
      "We handle all logistics",
      "Your hardware, your data",
      "Compliance-ready setup",
      "Dedicated support line",
    ],
    cta: "Best for governments & regulated orgs",
    featured: true,
  },
  {
    number: "03",
    title: "Consultation & training",
    subtitle: "Not sure where to start?",
    description:
      "We assess your organisation's needs, recommend the right tools, and build an implementation plan with projected costs. We also train your team so you can eventually manage it yourselves.",
    details: [
      "Full needs assessment",
      "Implementation plan + cost projection",
      "Hands-on team training",
      "Ongoing advisory available",
    ],
    cta: "Best for orgs in transition",
    featured: false,
  },
];

export const INCLUDED = [
  "Backups",
  "Monitoring",
  "Security patches",
  "Human support",
  "SSL/TLS management",
];

export const PRICING_FAQ = [
  {
    q: "How is pricing structured?",
    a: "Hosted subscriptions are billed monthly or annually per organisation — not per seat. Self-hosted contracts are scoped individually based on your hardware and requirements. Contact us for a custom quote.",
  },
  {
    q: "Do you offer discounts for non-profits and NGOs?",
    a: "Yes. We offer reduced rates for registered non-profits, NGOs, and small municipalities. Tell us about your organisation when you get in touch and we'll work something out.",
  },
  {
    q: "What's included in 'human support'?",
    a: "You reach the same engineers who manage your infrastructure — not a tiered support queue. Response times vary by plan, but all plans include direct access to the team.",
  },
  {
    q: "Can we switch between tiers later?",
    a: "Yes. Many clients start on a hosted subscription and migrate to a self-hosted contract as their compliance needs grow. We handle the migration with zero data loss.",
  },
  {
    q: "Is there a minimum contract length?",
    a: "Hosted subscriptions are month-to-month with an annual option at a discount. Self-hosted contracts are typically 12 months given the setup investment, but we're flexible.",
  },
  {
    q: "What happens to our data if we leave?",
    a: "You own your data at all times. We provide a full data export in open formats and will assist with migration to another provider or in-house setup at no additional charge.",
  },
];
