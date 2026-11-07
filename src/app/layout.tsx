import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
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
  title: {
    default: "Ice Wealth",
    template: "%s | Ice Wealth",
  },
  description:
    "Ice Wealth — your money, accounts, cards, transfers, investments, and digital assets in one place.",
  applicationName: "Ice Wealth",
  openGraph: {
    title: "Ice Wealth",
    description:
      "Manage your money, accounts, cards, transfers, investments, and digital assets with Ice Wealth.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ice Wealth",
    description:
      "Your money and financial life, together in one place.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased font-sans`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
