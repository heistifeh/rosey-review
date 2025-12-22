"use client";

import Link from "next/link";
import { AlertTriangle, BadgeCheck, BookOpen, MapPin, ShieldCheck } from "lucide-react";

import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Reveal } from "@/components/shared/reveal";
import { HomeBackground } from "@/components/shared/home/background";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const roseyLink = (
  <Link
    className="text-foreground underline decoration-primary/50 underline-offset-4 transition hover:text-primary"
    href="https://rosey.link"
    target="_blank"
    rel="noreferrer"
  >
    Rosey.link
  </Link>
);

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-7">
      <h2 className="font-heading text-base font-semibold md:text-lg">{title}</h2>
      <div className="font-body mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export default function UltimateGuide2025Page() {
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
                <div className="mx-auto max-w-3xl text-center">
                  <Reveal delay={60}>
                    <Badge
                      variant="secondary"
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
                    >
                      <BookOpen className="mr-2 h-4 w-4 text-primary" />
                      Ultimate Guide 2025
                    </Badge>
                  </Reveal>

                  <Reveal delay={120}>
                    <h1 className="font-heading mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                      Ultimate Guide to Safe Escorts in 2025
                    </h1>
                  </Reveal>

                  <Reveal delay={180}>
                    <p className="font-body mx-auto mt-4 max-w-2xl text-pretty text-sm text-muted-foreground md:text-base">
                      Top cities like Miami, Los Angeles, New York, Chicago, and Las Vegas lead the
                      market. Learn how to avoid scams and why {roseyLink} remains the safest choice
                      for discreet, reliable bookings.
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

                <div className="space-y-6">
                  <Section title="The five major escort cities in 2025">
                    <p>
                      In 2025, demand for escorts in Miami, Los Angeles, New York, Chicago, and Las
                      Vegas remains at an all-time high. These five cities are U.S. leaders because
                      tourism, business travel, nightlife, and a large base of independent providers
                      fuel consistent, premium options.
                    </p>
                    <p>
                      Other hotspots include Houston, Atlanta, San Francisco, Dallas, and Phoenix.
                      But if you want the most options and the highest quality, the big five deliver
                      the best depth and reliability.
                    </p>
                  </Section>

                  <Section title="Why these cities dominate">
                    <ul className="space-y-2">
                      <li>
                        <span className="font-medium text-foreground">Miami escorts:</span> Known for
                        stunning, diverse providers (often Latina and international) thriving in the
                        beach and party atmosphere. South Beach outcalls are legendary for energy and
                        discretion.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Los Angeles escorts:</span>
                        Hollywood glamour meets upscale companionship. Expect model looks with
                        girlfriend experiences (GFE), perfect for Beverly Hills or Downtown meets.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">New York escorts:</span> The
                        biggest selection anywhere, from Manhattan elites to diverse independents
                        across boroughs. Ideal for busy professionals needing reliable, no-drama
                        service.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Chicago escorts:</span>
                        Sophisticated Midwestern charm with engaging, professional providers.
                        Downtown hotel dates shine with punctuality and warmth.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Las Vegas escorts:</span> Sin
                        City excitement. Providers cater to conventions, strip visits, and high-
                        rollers with fun, discreet adventures.
                      </li>
                    </ul>
                    <p>
                      Rising stars include Houston (diverse and affordable), Atlanta (vibrant
                      hospitality), San Francisco (progressive and inclusive), Dallas (Texas-sized
                      variety), and Phoenix (sunny, relaxed vibes). These cities dominate because they
                      attract affluent clients and top-tier independents who value platforms like
                      {" "}
                      {roseyLink} for visibility and trust.
                    </p>
                  </Section>

                  <Section title="The growing risks: common scams in 2025">
                    <p>
                      The adult industry attracts scammers. In 2025, scams evolve with tech, but the
                      classics persist. Watch for these red flags:
                    </p>
                    <ol className="list-decimal space-y-2 pl-5">
                      <li>Bait-and-switch: Stolen or edited photos, different person shows up.</li>
                      <li>Deposit scams: Upfront payments via gift cards or crypto, then vanish.</li>
                      <li>Fake profiles and catfishing: Stolen images to lure info or money.</li>
                      <li>Extortion or blackmail: Fake "pimp" or "police" threats.</li>
                      <li>Hidden fees or robbery setups: Low rates lead to add-ons or unsafe meets.</li>
                    </ol>
                    <div className="mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <AlertTriangle className="mt-0.5 h-5 w-5 text-primary" />
                      <p>
                        Never send deposits without strong verification, avoid unconventional payments,
                        and limit personal info upfront. Reverse-image search photos and check for
                        consistency across profiles.
                      </p>
                    </div>
                  </Section>

                  <Section title="How verified reviews on Rosey.link ensure authenticity">
                    <p>
                      {roseyLink} Reviews verify every submission to confirm it comes from a real user
                      who used the service. We do not allow paid placements, edits to opinions, or
                      fake submissions. Only spam and abuse are removed.
                    </p>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-medium text-foreground">Accurate representations:</span>
                        Reviews highlight when providers match photos exactly, arrive on time, and
                        deliver professional service.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Real user experiences:</span>
                        Verified feedback from cities like New York, Chicago, and Los Angeles confirms
                        no bait-and-switch and genuine interactions.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Enhanced safety:</span>
                        Transparency helps users avoid shady practices and make informed decisions.
                      </li>
                    </ul>
                    <p>
                      Users consistently praise {roseyLink} for being reliable, secure, and private
                      with 99.2% uptime and a focus on unedited, honest opinions.
                    </p>
                  </Section>

                  <Section title="Why Rosey.link is the safest platform in 2025">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2 text-foreground">
                          <ShieldCheck className="h-4 w-4 text-primary" />
                          <span className="font-medium">Rigorous manual verification</span>
                        </div>
                        <p className="mt-2">
                          Every review is checked to confirm a genuine client experience. No fakes,
                          no paid promotions.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2 text-foreground">
                          <BadgeCheck className="h-4 w-4 text-primary" />
                          <span className="font-medium">Full SSL + privacy focus</span>
                        </div>
                        <p className="mt-2">
                          HTTPS security protects your data and keeps browsing and bookings private.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2 text-foreground">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="font-medium">Built for 2025 standards</span>
                        </div>
                        <p className="mt-2">
                          Fast-loading, mobile-optimized, and designed around modern privacy and
                          anti-scam features.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2 text-foreground">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span className="font-medium">Community-driven trust</span>
                        </div>
                        <p className="mt-2">
                          4.8-star average ratings from verified users prove reliability and reduce
                          risk.
                        </p>
                      </div>
                    </div>
                    <p>
                      Unlike outdated platforms plagued by unverified ads or hidden scams,
                      {" "}
                      {roseyLink} weeds out issues upfront. Users rave about the peace of mind:
                      "Finally a site where what you see is what you get."
                    </p>
                  </Section>

                  <Section title="Step-by-step: how to book safely">
                    <ol className="list-decimal space-y-2 pl-5">
                      <li>Browse profiles on {roseyLink} and filter by city.</li>
                      <li>Read verified reviews for patterns in accuracy and service quality.</li>
                      <li>Contact politely and provide any requested screening info.</li>
                      <li>Confirm details: time, location, expectations, and pricing.</li>
                      <li>Enjoy discreetly and follow basic safety etiquette.</li>
                    </ol>
                  </Section>

                  <Section title="Final thoughts">
                    <p>
                      With scams on the rise, sticking to verified platforms is non-negotiable.
                      {" "}
                      {roseyLink} delivers the safest, most reliable way to connect with top escorts
                      in Miami, Los Angeles, New York, Chicago, Las Vegas, and beyond.
                    </p>
                    <p>
                      Ready to experience the difference? Explore verified providers and reviews
                      today and submit your own story to help build a stronger community.
                    </p>
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                      <Button asChild className="font-body h-11 rounded-2xl px-6 shadow-glow">
                        <Link href="https://rosey.link" target="_blank" rel="noreferrer">
                          Visit Rosey.link
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="font-body h-11 rounded-2xl border-white/15 bg-white/0 px-6 text-foreground hover:bg-white/5"
                      >
                        <Link href="/reviews">Read Rosey Reviews</Link>
                      </Button>
                    </div>
                  </Section>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>

      <Footer />
    </main>
  );
}
