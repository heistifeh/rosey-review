"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { HomeBackground } from "@/components/shared/home/background";
import { HomeHero } from "@/components/shared/home/hero";
import { HomeMetrics } from "@/components/shared/home/metrics";
import { HomeFeaturedReview } from "@/components/shared/home/featured-review";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <HomeBackground />

      <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        <Reveal>
          <Card className="rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <CardContent className="p-0">
              <Navbar />
              <div className="h-px w-full bg-white/10" />

              <div className="px-6 pb-7 pt-10 md:px-10 md:pb-10 md:pt-14">
                <div className="mx-auto max-w-3xl text-center">
                  <HomeHero />
                  <HomeMetrics />
                  <HomeFeaturedReview />
                </div>

                <div className="mt-14 h-24" />
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
