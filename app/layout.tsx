import { LanguageProvider } from "./contexts/languagecontext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme } from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kenny Johary | Développeur Fullstack",
    template: "%s | Kenny Johary",
  },
  description:
    "Portfolio de Kenny Johary - Développeur Python, Odoo, Next.js et Data Engineering",
  keywords: [
    "Développeur",
    "Python",
    "Odoo",
    "Next.js",
    "Portfolio",
    "Madagascar",
  ],
  authors: [{ name: "Kenny Johary Randria Harison" }],
  openGraph: {
    title: "Kenny Johary - Développeur Fullstack",
    description: "Développeur backend Python/Odoo spécialisé Next.js",
    url: "https://portfolio-nshx.vercel.app",
    siteName: "Kenny Johary Portfolio",
    images: [{ url: "/ken.png", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Theme>
          <LanguageProvider>
            {" "}
            {/* ← LanguageProvider À L'INTÉRIEUR de Theme */}
            {children}
          </LanguageProvider>
        </Theme>
      </body>
    </html>
  );
}
