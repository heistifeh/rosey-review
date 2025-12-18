import "./globals.css";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
