"use client";

import Link from "next/link";
import { BadgeCheck, FileText, ShieldCheck } from "lucide-react";

import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Reveal } from "@/components/shared/reveal";
import { HomeBackground } from "@/components/shared/home/background";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-7">
      <h2 className="font-heading text-base font-semibold md:text-lg">{title}</h2>
      <div className="font-body mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export default function TermsPage() {
  const lastUpdated = "December 2025";

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <HomeBackground />

      <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        <Reveal>
          <Card className="rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <CardContent className="p-0">
              <Navbar />
              <div className="h-px w-full bg-white/10" />

              <div className="px-6 pb-10 pt-10 md:px-10 md:pb-12 md:pt-12">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                  <Reveal delay={60}>
                    <Badge
                      variant="secondary"
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
                    >
                      <FileText className="mr-2 h-4 w-4 text-primary" />
                      Terms of Service
                    </Badge>
                  </Reveal>

                  <Reveal delay={120}>
                    <h1 className="font-heading mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                      Simple rules, clear expectations
                    </h1>
                  </Reveal>

                  <Reveal delay={180}>
                    <p className="font-body mx-auto mt-4 max-w-2xl text-pretty text-sm text-muted-foreground md:text-base">
                      These terms describe how you can use this review site and what we expect
                      from users. If you have questions, contact support.
                    </p>
                  </Reveal>

                  <Reveal delay={220}>
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-muted-foreground">
                      <BadgeCheck className="h-4 w-4 text-primary" />
                      Last updated: <span className="text-foreground">{lastUpdated}</span>
                    </div>
                  </Reveal>
                </div>

                <Separator className="my-10 bg-white/10" />

                {/* Content */}
                <div className="mx-auto grid max-w-4xl gap-4">
                  <Reveal delay={260}>
                    <Section title="1. What this site is">
                      <p>
                        This site provides a review and reputation experience for Rosey.link.
                        Users can browse reviews and related trust signals. Content is displayed
                        for informational purposes.
                      </p>
                    </Section>
                  </Reveal>

                  <Reveal delay={320}>
                    <Section title="2. Who can use it">
                      <p>
                        You may use the site if you can comply with these terms and applicable laws.
                        If you are submitting content, you confirm you have the right to submit it.
                      </p>
                      <p>
                        We may restrict access for abusive behavior, spam activity, or repeated
                        policy violations.
                      </p>
                    </Section>
                  </Reveal>

                  <Reveal delay={380}>
                    <Section title="3. Reviews and user content">
                      <p>
                        Reviews are opinions from users. We do not guarantee accuracy, completeness,
                        or outcomes. Do not treat reviews as professional advice.
                      </p>
                      <p>
                        If you submit a review, you agree it will be public and may be moderated
                        according to our{" "}
                        <Link className="text-foreground underline underline-offset-4" href="/review-policy">
                          Review Policy
                        </Link>
                        .
                      </p>
                    </Section>
                  </Reveal>

                  <Reveal delay={440}>
                    <Section title="4. What is not allowed">
                      <p>Do not use the site to:</p>
                      <ul className="list-disc pl-5">
                        <li>Post spam, bots, or repetitive promotional content</li>
                        <li>Harass, threaten, or target individuals or groups</li>
                        <li>Share personal data (addresses, phone numbers, IDs) or doxxing</li>
                        <li>Post phishing links, malware, or harmful redirects</li>
                        <li>Impersonate another person or misrepresent your identity</li>
                      </ul>
                      <p>
                        Violations can lead to content removal and access restrictions.
                      </p>
                    </Section>
                  </Reveal>

                  <Reveal delay={500}>
                    <Section title="5. Moderation and enforcement">
                      <p>
                        We moderate content to reduce spam and abuse. We do not edit opinions to
                        change meaning. When needed, we may remove content that violates policy.
                      </p>
                      <p>
                        For details, see{" "}
                        <Link className="text-foreground underline underline-offset-4" href="/review-policy">
                          Review Policy and Moderation
                        </Link>
                        .
                      </p>
                    </Section>
                  </Reveal>

                  <Reveal delay={560}>
                    <Section title="6. Links and external services">
                      <p>
                        The site may link to external pages (including Rosey.link). We are not responsible
                        for external services, content, or availability.
                      </p>
                    </Section>
                  </Reveal>

                  <Reveal delay={620}>
                    <Section title="7. Disclaimers">
                      <p>
                        The site is provided “as is”. We make reasonable efforts to keep it available,
                        but we do not guarantee uninterrupted operation.
                      </p>
                      <p>
                        We are not liable for decisions you make based on reviews or displayed signals.
                      </p>
                    </Section>
                  </Reveal>

                  <Reveal delay={680}>
                    <Section title="8. Privacy">
                      <p>
                        We aim to collect as little as possible. If you contact support, we use your
                        details only to respond. For more, see the privacy section or policy page if you add one.
                      </p>
                    </Section>
                  </Reveal>

                  <Reveal delay={740}>
                    <Section title="9. Changes to these terms">
                      <p>
                        We may update these terms from time to time. The “Last updated” date will reflect
                        the latest version. Continued use means you accept the updated terms.
                      </p>
                    </Section>
                  </Reveal>

                  <Reveal delay={800}>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-7">
                      <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/15 ring-1 ring-primary/25">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-heading text-base font-semibold">Need help or want to report something?</p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Use the contact page and include any relevant review ID or link.
                          </p>
                          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                            <Button asChild className="rounded-full">
                              <Link href="/contact">Contact support</Link>
                            </Button>
                            <Button
                              asChild
                              variant="outline"
                              className="rounded-full border-white/15 bg-white/0 hover:bg-white/5"
                            >
                              <Link href="/reviews">Browse reviews</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Footer />
      </div>

      <div className="h-10" />
    </main>
  );
}
