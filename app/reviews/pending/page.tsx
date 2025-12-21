"use client";

import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { HomeBackground } from "@/components/shared/home/background";
import { Reveal } from "@/components/shared/reveal";

export default function ReviewPendingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <HomeBackground />

      <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        <Reveal>
          <Card className="rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <CardContent className="p-0">
              <Navbar />
              <div className="h-px w-full bg-white/10" />

              <div className="px-6 pb-12 pt-12 md:px-10 md:pb-14 md:pt-14">
                <div className="mx-auto max-w-2xl text-center">
                  <Reveal delay={80}>
                    <h1 className="font-heading text-balance text-3xl font-semibold md:text-4xl">
                      Review is pending
                    </h1>
                  </Reveal>
                  <Reveal delay={140}>
                    <p className="font-body mt-3 text-sm text-muted-foreground md:text-base">
                      Thanks for sharing. We’ll take a look before it appears publicly.
                    </p>
                  </Reveal>
                  <Reveal delay={200}>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                      <Button asChild className="rounded-full">
                        <Link href="/reviews">Back to reviews</Link>
                      </Button>
                      <Button asChild variant="outline" className="rounded-full">
                        <Link href="/">Go home</Link>
                      </Button>
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
