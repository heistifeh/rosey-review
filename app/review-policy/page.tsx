"use client";

import Link from "next/link";
import {
  AlertTriangle,
  BadgeCheck,
  Check,
  ShieldCheck,
  X,
} from "lucide-react";

import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Reveal } from "@/components/shared/reveal";
import { HomeBackground } from "@/components/shared/home/background";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Rule({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/15 ring-1 ring-primary/25">
            {icon}
          </div>
          <div>
            <p className="font-heading text-base font-semibold">{title}</p>
            <p className="font-body mt-2 text-sm leading-relaxed text-muted-foreground">
              {desc}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ReviewPolicyPage() {
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
                      <ShieldCheck className="mr-2 h-4 w-4 text-primary" />
                      Review Policy and Moderation
                    </Badge>
                  </Reveal>

                  <Reveal delay={120}>
                    <h1 className="font-heading mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                      We keep opinions intact
                    </h1>
                  </Reveal>

                  <Reveal delay={180}>
                    <p className="font-body mx-auto mt-4 max-w-2xl text-pretty text-sm text-muted-foreground md:text-base">
                      Our job is to remove spam and abuse, not rewrite what people think.
                      This policy explains what stays, what gets removed, and how reporting works.
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

                {/* Core principles */}
                <div className="mx-auto max-w-4xl">
                  <Reveal delay={260}>
                    <h2 className="font-heading text-xl font-semibold md:text-2xl">
                      Core principles
                    </h2>
                  </Reveal>

                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <Reveal delay={300}>
                      <Rule
                        icon={<Check className="h-5 w-5 text-primary" />}
                        title="No editing opinions"
                        desc="We do not change meaning, tone, or intent. People can be positive or critical."
                      />
                    </Reveal>
                    <Reveal delay={360}>
                      <Rule
                        icon={<ShieldCheck className="h-5 w-5 text-primary" />}
                        title="Safety first"
                        desc="We remove harassment, doxxing, and content that puts people at risk."
                      />
                    </Reveal>
                    <Reveal delay={420}>
                      <Rule
                        icon={<AlertTriangle className="h-5 w-5 text-primary" />}
                        title="Spam and fraud filtered"
                        desc="We remove fake reviews, duplicate campaigns, and automated spam."
                      />
                    </Reveal>
                  </div>
                </div>

                <Separator className="my-10 bg-white/10" />

                {/* What we remove vs what we keep */}
                <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
                  <Reveal delay={460}>
                    <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                      <CardContent className="p-6 md:p-7">
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-heading text-base font-semibold">
                            What we remove
                          </p>
                          <Badge className="rounded-full bg-primary/15 text-primary ring-1 ring-primary/25">
                            <X className="mr-1 h-3.5 w-3.5" />
                            Removed
                          </Badge>
                        </div>

                        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                          {[
                            "Spam, bots, or repeated copy-paste content",
                            "Harassment, hate speech, threats, or intimidation",
                            "Personal data (phone numbers, addresses, IDs) and doxxing",
                            "Impersonation or misleading identity claims",
                            "Illegal content or instructions to commit wrongdoing",
                            "Malware links, phishing, or harmful redirections",
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/40" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="mt-5 text-xs text-muted-foreground">
                          Note: Removal decisions are based on policy, not whether a review is positive or negative.
                        </p>
                      </CardContent>
                    </Card>
                  </Reveal>

                  <Reveal delay={520}>
                    <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                      <CardContent className="p-6 md:p-7">
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-heading text-base font-semibold">
                            What we keep
                          </p>
                          <Badge variant="secondary" className="rounded-full">
                            <Check className="mr-1 h-3.5 w-3.5" />
                            Stays
                          </Badge>
                        </div>

                        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                          {[
                            "Honest experiences, including critical feedback",
                            "Strong opinions (as long as they are not abusive or unsafe)",
                            "Reports of poor service or bad outcomes, if described responsibly",
                            "Comparisons to other websites, if not defamatory or doxxing",
                            "Requests for clarification and follow-ups",
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/40" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="mt-5 text-xs text-muted-foreground">
                          We may redact personal info (like a phone number) while leaving the rest intact.
                        </p>
                      </CardContent>
                    </Card>
                  </Reveal>
                </div>

                <Separator className="my-10 bg-white/10" />

                {/* Verification */}
                <div className="mx-auto max-w-4xl">
                  <Reveal delay={560}>
                    <h2 className="font-heading text-xl font-semibold md:text-2xl">
                      Verified reviews
                    </h2>
                  </Reveal>

                  <Reveal delay={600}>
                    <Card className="mt-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                      <CardContent className="p-6 md:p-7">
                        <p className="font-body text-sm text-muted-foreground">
                          A “Verified” badge means the review is tied to a signal Rosey controls.
                          Examples: account age, completed flow, or internal confirmation.
                          The badge does not mean the review is positive, it means it is attributable.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          <Badge className="rounded-full bg-primary/15 text-primary ring-1 ring-primary/25">
                            Badge = signal-based
                          </Badge>
                          <Badge variant="secondary" className="rounded-full">
                            Not a quality rating
                          </Badge>
                          <Badge variant="secondary" className="rounded-full">
                            Not paid
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </Reveal>
                </div>

                <Separator className="my-10 bg-white/10" />

                {/* FAQ style */}
                <div className="mx-auto max-w-4xl">
                  <Reveal delay={640}>
                    <h2 className="font-heading text-xl font-semibold md:text-2xl">
                      Reporting and enforcement
                    </h2>
                  </Reveal>

                  <Reveal delay={680}>
                    <Accordion type="single" collapsible className="mt-4 w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>How do I report a review?</AccordionTrigger>
                        <AccordionContent>
                          Use the contact page and include the review ID, what rule it violates, and a link.
                          If the issue is personal data exposure, say so clearly so it can be handled faster.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger>Do you notify the reviewer?</AccordionTrigger>
                        <AccordionContent>
                          When possible, yes. If a review is removed, we may inform the author at a high level.
                          We do not share reporter identity by default.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger>Can you edit a review instead of removing it?</AccordionTrigger>
                        <AccordionContent>
                          We avoid editing. In rare cases, we may redact personal data while leaving the
                          experience intact. If the core content violates policy, it is removed.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger>How fast do you respond?</AccordionTrigger>
                        <AccordionContent>
                          Most reports are reviewed within 24 hours. High-risk reports (doxxing, threats,
                          phishing) are prioritized.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Reveal>

                  <Reveal delay={740}>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                      <div>
                        <p className="font-heading text-base font-semibold">Need to report something?</p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Send a report with the review ID and the rule being violated.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 sm:flex-row">
                        <Button asChild className="rounded-full">
                          <Link href="/contact">Go to contact</Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="rounded-full border-white/15 bg-white/0 hover:bg-white/5"
                        >
                          <Link href="/terms">Terms of service</Link>
                        </Button>
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
