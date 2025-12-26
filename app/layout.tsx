import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/theme-provider";
import { HelpfulVotesProvider } from "@/components/providers/helpful-votes-provider";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "RoseyReview.com – Real user reviews and ratings for escorts on Rosey.link",
  description:
    "Verified experiences, photos, and honest feedback from the community. Find your best match safely!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${sora.variable} ${manrope.variable} font-body antialiased`}
      >
        <HelpfulVotesProvider>
          <ThemeProvider>
            {children}
            <Toaster richColors position="bottom-center" closeButton />
          </ThemeProvider>
        </HelpfulVotesProvider>
      </body>
    </html>
  );
}
