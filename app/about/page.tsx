"use client";

import Link from "next/link";
import { BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";

import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Reveal } from "@/components/shared/reveal";
import { HomeBackground } from "@/components/shared/home/background";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function ValueCard({
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

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <HomeBackground />

      <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        <Reveal>
          <Card className="rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
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
                      <Sparkles className="mr-2 h-4 w-4 text-primary" />
                      About Rosey Reviews
                    </Badge>
                  </Reveal>

                  <Reveal delay={120}>
                    <h1 className="font-heading mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                      Built for clarity, not noise
                    </h1>
                  </Reveal>

                  <Reveal delay={180}>
                    <p className="font-body mx-auto mt-4 max-w-2xl text-pretty text-sm text-muted-foreground md:text-base">
                      Rosey Reviews is a focused reputation page for a single website. It helps people
                      understand what real users experience, quickly and honestly.
                    </p>
                  </Reveal>
                </div>

                <Separator className="my-10 bg-white/10" />

                {/* Mission + What it is */}
                <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
                  <Reveal delay={220}>
                    <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                      <CardContent className="p-6 md:p-7">
                        <p className="font-heading text-base font-semibold">What Rosey is</p>
                        <p className="font-body mt-3 text-sm leading-relaxed text-muted-foreground">
                          A simple review hub for Rosey.link. People can browse feedback, see trust
                          signals, and make informed decisions without digging through scattered
                          posts or screenshots.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          <Badge className="rounded-full bg-primary/15 text-primary ring-1 ring-primary/25">
                            Single website focus
                          </Badge>
                          <Badge variant="secondary" className="rounded-full">
                            Fast scanning
                          </Badge>
                          <Badge variant="secondary" className="rounded-full">
                            Calm UX
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </Reveal>

                  <Reveal delay={280}>
                    <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                      <CardContent className="p-6 md:p-7">
                        <p className="font-heading text-base font-semibold">What Rosey is not</p>
                        <p className="font-body mt-3 text-sm leading-relaxed text-muted-foreground">
                          It is not a marketplace for opinions, and it is not built to promote
                          certain reviews. We do not sell placement, and we do not manipulate what
                          people say.
                        </p>

                        <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/40" />
                            <span>No paid “top review” slots</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/40" />
                            <span>No editing opinions</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/40" />
                            <span>No dark patterns</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Reveal>
                </div>

                <Separator className="my-10 bg-white/10" />

                {/* Principles */}
                <div className="mx-auto max-w-4xl">
                  <Reveal delay={320}>
                    <h2 className="font-heading text-xl font-semibold md:text-2xl">
                      Principles we follow
                    </h2>
                  </Reveal>

                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <Reveal delay={360}>
                      <ValueCard
                        icon={<BadgeCheck className="h-5 w-5 text-primary" />}
                        title="Truth over hype"
                        desc="We keep the experience simple. Reviews should read like real people, not marketing."
                      />
                    </Reveal>
                    <Reveal delay={420}>
                      <ValueCard
                        icon={<ShieldCheck className="h-5 w-5 text-primary" />}
                        title="Safety and privacy"
                        desc="We avoid collecting what we do not need. Privacy-friendly by design."
                      />
                    </Reveal>
                    <Reveal delay={480}>
                      <ValueCard
                        icon={<Sparkles className="h-5 w-5 text-primary" />}
                        title="Clarity by default"
                        desc="Good typography, calm layout, and trust signals that are easy to understand."
                      />
                    </Reveal>
                  </div>
                </div>

                <Separator className="my-10 bg-white/10" />

                {/* CTA */}
                <div className="mx-auto max-w-4xl">
                  <Reveal delay={520}>
                    <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                      <CardContent className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-7">
                        <div>
                          <p className="font-heading text-base font-semibold">Want the full picture?</p>
                          <p className="font-body mt-2 text-sm text-muted-foreground">
                            Browse reviews, sort by what matters, and read responses when available.
                          </p>
                        </div>

                        <div className="flex flex-col gap-2 sm:flex-row">
                          <Button asChild className="font-body rounded-full">
                            <Link href="/reviews">Browse reviews</Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="font-body rounded-full border-white/15 bg-white/0 hover:bg-white/5"
                          >
                            <Link href="/review-policy">Review policy</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
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
