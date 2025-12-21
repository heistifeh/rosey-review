"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { HomeBackground } from "@/components/shared/home/background";
import { Reveal } from "@/components/shared/reveal";

export default function SubmitReviewPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    router.push("/reviews/pending");
  };

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
                <div className="mx-auto max-w-2xl">
                  <Reveal delay={80}>
                    <h1 className="font-heading text-balance text-3xl font-semibold md:text-4xl">
                      Write a review
                    </h1>
                  </Reveal>
                  <Reveal delay={140}>
                    <p className="font-body mt-3 text-sm text-muted-foreground md:text-base">
                      Share your experience. We’ll queue it for review before publishing.
                    </p>
                  </Reveal>

                  <Reveal delay={200}>
                    <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                      <div>
                        <label className="text-sm font-medium text-foreground">Name</label>
                        <Input
                          required
                          name="name"
                          placeholder="Your name"
                          className="mt-2 h-11"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">Review title</label>
                        <Input
                          required
                          name="title"
                          placeholder="Short headline"
                          className="mt-2 h-11"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">Your review</label>
                        <Textarea
                          required
                          name="body"
                          rows={6}
                          placeholder="Write your review"
                          className="mt-2"
                        />
                      </div>
                      <Button type="submit" className="w-full rounded-full" disabled={submitting}>
                        {submitting ? "Submitting..." : "Submit review"}
                      </Button>
                    </form>
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
