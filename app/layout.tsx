import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Radmin — Managed Open-Source Tools for Institutions",
  description:
    "Radmin provides managed Nextcloud, Vaultwarden, and other open-source collaboration tools for NGOs, non-profits, and municipal governments. Your data stays yours.",
  metadataBase: new URL("https://radmin.live"),
  openGraph: {
    title: "Radmin — Your Data. Your Infrastructure.",
    description:
      "Managed open-source collaboration tools built for institutions that care about data sovereignty.",
    url: "https://radmin.live",
    siteName: "Radmin",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radmin — Your Data. Your Infrastructure.",
    description:
      "Managed open-source collaboration tools for NGOs, non-profits, and municipal governments.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
