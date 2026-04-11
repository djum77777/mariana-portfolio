import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mariana Djum | AI-Native Content Strategist",
  description:
    "Portfolio for Mariana Djum showcasing AI-native content strategy, workflow automation, and selected project builds.",
  applicationName: "Mariana Portfolio",
  keywords: [
    "AI content strategy",
    "Agentic workflows",
    "Portfolio",
    "Social media operations",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--background)] focus:px-3 focus:py-2 focus:text-sm focus:text-foreground"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
