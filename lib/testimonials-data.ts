export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  org: string;
  initials: string;
  color: string;
  challenge: string;
  solution: string;
  metrics: { value: string; label: string }[];
  orgType: string;
  timeline: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Radmin made it straightforward for our municipality to migrate off Google Workspace. They handled every detail — from server setup to staff training — and our team didn't miss a beat.",
    name: "Sarah Chen",
    title: "IT Director",
    org: "Municipality of Riverside",
    initials: "SC",
    color: "var(--navy)",
    orgType: "Municipal government",
    timeline: "6 weeks",
    challenge:
      "The municipality was storing all staff files, communications, and citizen-adjacent records in Google Workspace. Following new regional data governance requirements, council mandated a migration to infrastructure with full data residency control — but the IT team had no experience with self-hosted systems and no budget for an internal hire.",
    solution:
      "Radmin scoped a self-hosted Nextcloud deployment on municipality-owned hardware, handled vendor coordination, configured role-based access for 80 staff across 6 departments, migrated 2TB of files and 3 years of shared calendars, and ran two training sessions for department leads.",
    metrics: [
      { value: "80", label: "staff migrated" },
      { value: "2 TB", label: "data moved" },
      { value: "6 wks", label: "end-to-end" },
      { value: "0", label: "service disruptions" },
    ],
  },
  {
    quote:
      "We were spending too much time managing servers and too little time on our mission. Radmin took that operational burden off us entirely and our donor data is finally where it belongs — with us.",
    name: "Marcus Webb",
    title: "Operations Lead",
    org: "Horizon NGO",
    initials: "MW",
    color: "#1D4ED8",
    orgType: "NGO",
    timeline: "3 weeks",
    challenge:
      "Horizon NGO was running their own Nextcloud instance on a rented VPS. Backups were irregular, security patching fell behind, and the operations lead was spending 4–6 hours per week on server maintenance — time that should have been going to programme delivery. Donor data and field reports were at risk.",
    solution:
      "Radmin migrated the existing Nextcloud installation to a managed environment, implemented automated daily backups, set up monitoring and alerting, applied all outstanding security patches, and handed the operations lead a clean admin dashboard with zero ongoing maintenance responsibilities.",
    metrics: [
      { value: "6 hrs", label: "staff time saved weekly" },
      { value: "100%", label: "backup coverage" },
      { value: "3 wks", label: "to fully managed" },
      { value: "0", label: "incidents since migration" },
    ],
  },
  {
    quote:
      "The training Radmin provided meant our team could manage day-to-day operations within three months. That drastically reduced our subscription costs. That's the kind of partnership we wanted.",
    name: "Amara Diallo",
    title: "Executive Director",
    org: "Civic Bridge Foundation",
    initials: "AD",
    color: "#059669",
    orgType: "Civil society foundation",
    timeline: "3 months",
    challenge:
      "Civic Bridge was paying for a suite of proprietary collaboration tools that had grown expensive as the organisation scaled. The executive team wanted to reduce spend without sacrificing capability, but lacked internal knowledge to evaluate open-source alternatives or manage a migration independently.",
    solution:
      "Radmin conducted a needs assessment, recommended a Nextcloud + Vaultwarden stack, managed the migration from Microsoft 365, and ran a structured three-month training programme for the foundation's two-person operations team — enabling them to handle user administration and routine maintenance independently.",
    metrics: [
      { value: "40%", label: "reduction in tool costs" },
      { value: "2", label: "staff fully trained" },
      { value: "3 mo", label: "to self-sufficient" },
      { value: "0", label: "data lost in migration" },
    ],
  },
];
