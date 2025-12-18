"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  Check,
  Flag,
  MessageSquare,
  Star,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Reveal } from "@/components/shared/reveal";
import { HomeBackground } from "@/components/shared/home/background";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Review = {
  id: string;
  title: string;
  body: string;
  name: string;
  meta: string;
  rating: number;
  verified: boolean;
  createdAt: string;
  helpfulCount: number;
  tags: string[];
  response?: {
    author: string;
    createdAt: string;
    body: string;
  };
};

const REVIEWS: Review[] = [
  {
    id: "rosey-001",
    title: "Fast, clean, and trustworthy",
    body:
      "Everything felt straightforward. Pages loaded quickly and the experience was calm. " +
      "It did not feel like the site was trying to trick me into anything.\n\n" +
      "I especially liked how readable the layout is. The flow felt consistent and predictable. " +
      "If you are trying to assess credibility quickly, it does the job.",
    name: "Amina",
    meta: "Verified user",
    rating: 5,
    verified: true,
    createdAt: "2025-12-15",
    helpfulCount: 42,
    tags: ["Speed", "Trust"],
    response: {
      author: "Rosey team",
      createdAt: "2025-12-16",
      body:
        "Thanks for the detailed feedback. We are keeping the experience calm on purpose. " +
        "If you ever run into confusing steps, please message support with a screenshot and we will fix it fast.",
    },
  },
  {
    id: "rosey-002",
    title: "Good overall, one thing to improve",
    body:
      "Really solid experience. I would love slightly clearer guidance on one step, " +
      "but it is already better than most sites.\n\n" +
      "The main win is that it does not feel noisy. It feels like the site respects my attention.",
    name: "David",
    meta: "Verified user",
    rating: 4,
    verified: true,
    createdAt: "2025-12-12",
    helpfulCount: 18,
    tags: ["UX", "Clarity"],
  },
  {
    id: "rosey-003",
    title: "Feels credible",
    body:
      "The way information is presented feels transparent. I like that reviews do not feel edited " +
      "and the page is easy to scan.",
    name: "Chioma",
    meta: "User",
    rating: 5,
    verified: false,
    createdAt: "2025-12-09",
    helpfulCount: 9,
    tags: ["Transparency"],
  },
];

function getReviewById(id: string) {
  return REVIEWS.find((r) => r.id === id) ?? null;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? "h-4 w-4 fill-primary text-primary"
              : "h-4 w-4 text-foreground/20"
          }
        />
      ))}
    </div>
  );
}

export default function ReviewDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id ?? "";
  const review = React.useMemo(() => getReviewById(id), [id]);

  const [helpfulDelta, setHelpfulDelta] = React.useState<null | "up" | "down">(null);

  const related = React.useMemo(() => {
    if (!review) return [];
    return REVIEWS.filter((r) => r.id !== review.id).slice(0, 2);
  }, [review]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <HomeBackground />

      <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        <Reveal>
          <Card className="rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <CardContent className="p-0">
              <Navbar />
              <div className="h-px w-full bg-white/10" />

              <div className="px-6 pb-10 pt-8 md:px-10 md:pb-12 md:pt-10">
                {/* Top actions */}
                <Reveal delay={60}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      asChild
                      variant="ghost"
                      className="w-fit rounded-full border border-white/10 bg-white/0 hover:bg-white/5"
                    >
                      <Link href="/reviews">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to reviews
                      </Link>
                    </Button>

                    <div className="flex flex-wrap items-center gap-2">
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full border-white/15 bg-white/0 hover:bg-white/5"
                      >
                        <Link href="/contact">
                          <Flag className="mr-2 h-4 w-4" />
                          Report this review
                        </Link>
                      </Button>

                      <Button
                        asChild
                        className="rounded-full"
                      >
                        <Link href="https://rosey.link" target="_blank" rel="noreferrer">
                          Visit Rosey.link
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Reveal>

                <Separator className="my-8 bg-white/10" />

                {/* Body */}
                {!review ? (
                  <Reveal delay={120}>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
                      <p className="font-heading text-lg font-semibold">Review not found</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        This review may have been removed or the link is incorrect.
                      </p>
                      <Button asChild className="mt-5 rounded-full">
                        <Link href="/reviews">Go back</Link>
                      </Button>
                    </div>
                  </Reveal>
                ) : (
                  <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[1.2fr_0.8fr]">
                    {/* Main */}
                    <div className="space-y-4">
                      <Reveal delay={140}>
                        <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                          <CardContent className="p-6 md:p-7">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <div className="min-w-0">
                                <h1 className="font-heading text-balance text-2xl font-semibold md:text-3xl">
                                  {review.title}
                                </h1>

                                <div className="mt-3 flex flex-wrap items-center gap-3">
                                  <Stars rating={review.rating} />
                                  <span className="text-xs text-muted-foreground">
                                    {review.name} · {review.meta} · {review.createdAt}
                                  </span>

                                  {review.verified ? (
                                    <Badge className="rounded-full bg-primary/15 text-primary ring-1 ring-primary/25">
                                      <BadgeCheck className="mr-1 h-3.5 w-3.5" />
                                      Verified
                                    </Badge>
                                  ) : (
                                    <Badge variant="secondary" className="rounded-full">
                                      Unverified
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/90">
                              {review.body.split("\n\n").map((p, idx) => (
                                <p key={idx} className="font-body">
                                  {p}
                                </p>
                              ))}
                            </div>

                            {/* Tags */}
                            <div className="mt-6 flex flex-wrap gap-2">
                              {review.tags.map((t) => (
                                <Link
                                  key={t}
                                  href={`/reviews?tag=${encodeURIComponent(t)}`}
                                  className="rounded-full border border-white/10 bg-white/0 px-3 py-1 text-xs text-muted-foreground hover:bg-white/5"
                                >
                                  {t}
                                </Link>
                              ))}
                            </div>

                            {/* Helpful */}
                            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <p className="text-xs text-muted-foreground">
                                Was this review helpful?
                              </p>
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  className="rounded-full border border-white/10 bg-white/0 hover:bg-white/5"
                                  onClick={() => setHelpfulDelta((v) => (v === "up" ? null : "up"))}
                                >
                                  <ThumbsUp className="mr-2 h-4 w-4" />
                                  Yes
                                </Button>
                                <Button
                                  variant="ghost"
                                  className="rounded-full border border-white/10 bg-white/0 hover:bg-white/5"
                                  onClick={() => setHelpfulDelta((v) => (v === "down" ? null : "down"))}
                                >
                                  <ThumbsDown className="mr-2 h-4 w-4" />
                                  No
                                </Button>
                              </div>
                            </div>

                            <div className="mt-3 text-xs text-muted-foreground">
                              Helpful votes:{" "}
                              <span className="text-foreground">
                                {review.helpfulCount + (helpfulDelta === "up" ? 1 : helpfulDelta === "down" ? -1 : 0)}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </Reveal>

                      {/* Optional response */}
                      {review.response && (
                        <Reveal delay={200}>
                          <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                            <CardContent className="p-6 md:p-7">
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <p className="font-heading text-base font-semibold">Response from Rosey</p>
                                  <p className="mt-1 text-xs text-muted-foreground">
                                    {review.response.author} · {review.response.createdAt}
                                  </p>
                                </div>
                                <Badge className="rounded-full bg-primary/15 text-primary ring-1 ring-primary/25">
                                  <Check className="mr-1 h-3.5 w-3.5" />
                                  Official
                                </Badge>
                              </div>

                              <p className="font-body mt-4 text-sm leading-relaxed text-muted-foreground">
                                {review.response.body}
                              </p>

                              <div className="mt-5">
                                <Button
                                  asChild
                                  variant="outline"
                                  className="rounded-full border-white/15 bg-white/0 hover:bg-white/5"
                                >
                                  <Link href="/contact">
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Reply via support
                                  </Link>
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </Reveal>
                      )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-4">
                      <Reveal delay={180}>
                        <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                          <CardContent className="p-6">
                            <p className="font-heading text-base font-semibold">Quick context</p>
                            <p className="mt-2 text-sm text-muted-foreground">
                              Verified reviews are tied to a signal Rosey controls. They are not paid
                              placements and do not guarantee accuracy.
                            </p>
                            <div className="mt-4 flex flex-col gap-2">
                              <Button asChild className="rounded-full">
                                <Link href="/review-policy">Review policy</Link>
                              </Button>
                              <Button
                                asChild
                                variant="outline"
                                className="rounded-full border-white/15 bg-white/0 hover:bg-white/5"
                              >
                                <Link href="/terms">Terms</Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </Reveal>

                      {related.length > 0 && (
                        <Reveal delay={240}>
                          <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                            <CardContent className="p-6">
                              <p className="font-heading text-base font-semibold">Related reviews</p>
                              <div className="mt-4 space-y-3">
                                {related.map((r) => (
                                  <Link
                                    key={r.id}
                                    href={`/reviews/${r.id}`}
                                    className="block rounded-2xl border border-white/10 bg-white/0 p-4 hover:bg-white/5"
                                  >
                                    <div className="flex items-center justify-between gap-3">
                                      <p className="font-heading text-sm font-semibold">{r.title}</p>
                                      <span className="text-xs text-muted-foreground">{r.rating}/5</span>
                                    </div>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                      {r.name} · {r.createdAt}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </Reveal>
                      )}
                    </div>
                  </div>
                )}
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
