"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
import { toast } from "sonner";

import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Reveal } from "@/components/shared/reveal";
import { HomeBackground } from "@/components/shared/home/background";
import { helpfulAdjustment, useHelpfulVotes } from "@/components/providers/helpful-votes-provider";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import type { ReviewDocument } from "@/lib/sanity/reviews";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type ReviewDetailClientProps = {
  review: ReviewDocument;
  related: ReviewDocument[];
  structuredData: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating ? "h-4 w-4 fill-primary text-primary" : "h-4 w-4 text-foreground/20"
          }
        />
      ))}
    </div>
  );
}

export function ReviewDetailClient({ review, related, structuredData }: ReviewDetailClientProps) {
  const { getVote, toggleVote } = useHelpfulVotes();
  const helpfulVote = getVote(review.slug);
  const avatarUrl = review.reviewerAvatar
    ? urlFor(review.reviewerAvatar).width(72).height(72).fit("crop").url()
    : null;
  const initials = review.name?.charAt(0)?.toUpperCase() ?? "?";

  const handleHelpfulClick = React.useCallback(
    (direction: "up" | "down") => {
      const current = helpfulVote;
      const nextVote = current === direction ? null : direction;
      toggleVote(review.slug, direction);

      if (nextVote === "up") {
        toast.success("Marked as helpful", {
          description: "Thanks for letting us know this review helped.",
        });
      } else if (nextVote === "down") {
        toast("Marked as not helpful", {
          description: "We appreciate the signal. We'll keep listening.",
        });
      } else {
        toast("Feedback removed", {
          description: "We cleared your response for this review.",
        });
      }
    },
    [helpfulVote, review.slug, toggleVote],
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <HomeBackground />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        <Reveal>
          <Card className="rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <CardContent className="p-0">
              <Navbar />
              <div className="h-px w-full bg-white/10" />

              <div className="px-6 pb-10 pt-8 md:px-10 md:pb-12 md:pt-10">
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

                      <Button asChild className="rounded-full">
                        <Link href="https://rosey.link" target="_blank" rel="noreferrer">
                          Visit Rosey.link
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Reveal>

                <Separator className="my-8 bg-white/10" />

                <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-4">
                    <Reveal delay={140}>
                      <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                        <CardContent className="p-6 md:p-7">
                          <div className="flex flex-wrap items-center gap-4">
                            {avatarUrl ? (
                              <Image
                                src={avatarUrl}
                                alt={`${review.name} avatar`}
                                width={60}
                                height={60}
                                className="h-14 w-14 rounded-full object-cover"
                              />
                            ) : (
                              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-foreground">
                                {initials}
                              </div>
                            )}
                            <div className="min-w-0">
                              <h1 className="font-heading text-balance text-2xl font-semibold md:text-3xl">
                                {review.title}
                              </h1>
                              <div className="mt-2 flex flex-wrap items-center gap-3">
                                <div>
                                  <p className="text-sm font-medium text-foreground">{review.name}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {review.meta ? `${review.meta} · ` : ""}
                                    {new Date(review.createdAt).toLocaleDateString()}
                                  </p>
                                </div>
                                <Stars rating={review.rating} />
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

                          <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/90 prose prose-invert">
                            <PortableText
                              value={review.body}
                              components={{
                                block: {
                                  h2: ({ children }) => (
                                    <h2 className="font-heading text-lg font-semibold text-foreground">{children}</h2>
                                  ),
                                },
                                marks: {
                                  link: ({ value, children }) => (
                                    <a
                                      href={value?.href}
                                      className="text-primary underline underline-offset-2"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {children}
                                    </a>
                                  ),
                                },
                              }}
                            />
                          </div>

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

                          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xs text-muted-foreground">Was this review helpful?</p>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                className={`rounded-full border border-white/10 bg-white/0 hover:bg-white/5 ${
                                  helpfulVote === "up" ? "border-primary/40 bg-primary/10 text-primary" : ""
                                }`}
                                onClick={() => handleHelpfulClick("up")}
                              >
                                <ThumbsUp className="mr-2 h-4 w-4" />
                                Yes
                              </Button>
                              <Button
                                variant="ghost"
                                className={`rounded-full border border-white/10 bg-white/0 hover:bg-white/5 ${
                                  helpfulVote === "down" ? "border-primary/40 bg-primary/10 text-primary" : ""
                                }`}
                                onClick={() => handleHelpfulClick("down")}
                              >
                                <ThumbsDown className="mr-2 h-4 w-4" />
                                No
                              </Button>
                            </div>
                          </div>

                          <div className="mt-3 text-xs text-muted-foreground">
                            Helpful votes:{" "}
                            <span className="text-foreground">
                              {review.helpfulCount + helpfulAdjustment(helpfulVote)}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Reveal>

                    {review.response && (
                      <Reveal delay={200}>
                        <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                          <CardContent className="p-6 md:p-7">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="font-heading text-base font-semibold">Response from Rosey</p>
                                <p className="mt-1 text-xs text-muted-foreground">
                                  {review.response.author} ·{" "}
                                  {review.response.createdAt
                                    ? new Date(review.response.createdAt).toLocaleDateString()
                                    : ""}
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

                  <div className="space-y-4">
                    <Reveal delay={180}>
                      <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                        <CardContent className="p-6">
                          <p className="font-heading text-base font-semibold">Quick context</p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Verified reviews are tied to a signal Rosey controls. They are not paid placements and do
                            not guarantee accuracy.
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
                                  key={r.slug}
                                  href={`/reviews/${r.slug}`}
                                  className="block rounded-2xl border border-white/10 bg-white/0 p-4 hover:bg-white/5"
                                >
                                  <div className="flex items-center justify-between gap-3">
                                    <p className="font-heading text-sm font-semibold">{r.title}</p>
                                    <span className="text-xs text-muted-foreground">{r.rating}/5</span>
                                  </div>
                                  <p className="mt-1 text-xs text-muted-foreground">
                                    {r.name} · {new Date(r.createdAt).toLocaleDateString()}
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
