import type { ReactNode } from "react";

export type Service = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: ReactNode;
  badge: string | null;
  accent: boolean;
  longDescription: string;
  useCases: string[];
};

export const SERVICES: Service[] = [
  {
    name: "Nextcloud",
    tagline: "Your own Google Drive — without Google.",
    description:
      "Shared file storage, real-time document editing, team calendars, and contact management — all on infrastructure you control. No data mining. No usage-based pricing surprises. No sudden policy changes.",
    features: [
      "File sync & sharing",
      "Collaborative document editing",
      "Shared calendars & contacts",
      "Mobile apps for iOS & Android",
      "Encrypted storage",
    ],
    icon: null,
    badge: "Most popular",
    accent: true,
    longDescription:
      "Nextcloud is the world's leading open-source collaboration platform. We configure, harden, and host it so your team gets a Google Workspace equivalent — file sharing, real-time document editing, team calendars, video calls, and contacts — entirely on infrastructure that belongs to you. No algorithmic scanning of your files. No terms-of-service changes that flip overnight. No per-seat billing surprises.",
    useCases: [
      "Migrating off Google Workspace or Microsoft 365",
      "Secure document sharing with external partners",
      "Shared team calendars with no vendor lock-in",
      "Compliant file storage for regulated data",
    ],
  },
  {
    name: "Vaultwarden",
    tagline: "Passwords and secrets — kept secret.",
    description:
      "A fully self-hosted password manager compatible with all Bitwarden clients. Share credentials securely across your team. Store MFA codes, credit card info, and sensitive notes — none of it ever leaves your servers.",
    features: [
      "Team password sharing",
      "MFA & TOTP storage",
      "Browser extensions",
      "Zero-knowledge architecture",
      "Secure notes & card storage",
    ],
    icon: null,
    badge: null,
    accent: false,
    longDescription:
      "Vaultwarden is a lightweight, self-hosted Bitwarden-compatible server. Every Bitwarden app — browser extensions, desktop clients, mobile apps — works with it out of the box. Your team's credentials are encrypted with keys only you hold, stored on hardware you control, and never transmitted to a third party. This is the password management infrastructure that enterprise security teams wish they'd started with.",
    useCases: [
      "Replacing LastPass, 1Password, or shared spreadsheets",
      "Secure credential sharing within IT teams",
      "Storing and rotating API keys and service tokens",
      "MFA code management across departments",
    ],
  },
  {
    name: "OpenDesk",
    tagline: "A complete digital workplace — fully open-source.",
    description:
      "OpenDesk bundles email, calendar, video conferencing, project management, and document collaboration into a single integrated platform. One deployment replaces half a dozen proprietary tools.",
    features: [
      "Integrated email & calendar",
      "Video conferencing",
      "Real-time document collaboration",
      "Project & task management",
      "Unified admin dashboard",
    ],
    icon: null,
    badge: null,
    accent: false,
    longDescription:
      "OpenDesk is an open-source digital workplace platform that brings together the essential tools organisations use every day — email, calendars, video calls, document editing, project boards, and file sharing — into a single, coherent experience. Instead of stitching together six separate tools, your team gets one platform with a unified interface and centralised administration. We deploy, configure, and maintain the full stack so your IT team doesn't have to.",
    useCases: [
      "Replacing Microsoft 365 or Google Workspace with a single platform",
      "Organisations wanting a unified digital workplace without vendor lock-in",
      "Teams needing integrated video, docs, and project management",
      "Institutions with strict data residency requirements",
    ],
  },
  {
    name: "Custom deployment",
    tagline: "If it's open-source, we can run it.",
    description:
      "Nextcloud and Vaultwarden are our flagship tools, but we can deploy almost any open-source application your organisation needs. Any application maintained by Co-op Cloud can be deployed out of the box.",
    features: [
      "Co-op Cloud app catalogue",
      "Custom app deployment",
      "Tool assessment & selection",
      "Full data migration support",
      "Ongoing maintenance",
      "Staff onboarding",
    ],
    icon: null,
    badge: null,
    accent: false,
    longDescription:
      "The open-source ecosystem is vast. Beyond our flagship tools, we've deployed project management platforms, internal wikis, customer relationship managers, mail servers, and sector-specific software for clients. We're active contributors to the Co-op Cloud project — a free and open-source toolchain for deploying and managing open-source applications. Any of the 100+ applications in the Co-op Cloud catalogue can be deployed for your organisation with minimal lead time. We start with a needs assessment, recommend the right tools, and handle everything from installation to ongoing maintenance.",
    useCases: [
      "Deploying any app from the Co-op Cloud catalogue",
      "Replacing Notion or Confluence with open-source wikis",
      "Self-hosted project management (Taiga, Plane, OpenProject)",
      "Open-source CRM for donor and beneficiary management",
      "Sector-specific tools for NGOs and municipalities",
    ],
  },
];
