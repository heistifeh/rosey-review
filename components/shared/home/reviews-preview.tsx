import Link from "next/link";
import Image from "next/image";

import { Reveal } from "@/components/shared/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { toPlainText } from "@portabletext/toolkit";
import type { ReviewDocument } from "@/lib/sanity/reviews";

type HomeReviewsPreviewProps = {
  reviews: ReviewDocument[];
};

function clampText(blocks: ReviewDocument["body"], max = 140) {
  const text = toPlainText(blocks || []);
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + "…";
}

export function HomeReviewsPreview({ reviews }: HomeReviewsPreviewProps) {
  if (!reviews.length) return null;

  return (
    <section className="mt-12 text-left">
      <Reveal delay={360}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-heading text-xl font-semibold">Latest reviews</p>
            <p className="font-body text-sm text-muted-foreground">
              A quick peek at what people are sharing right now.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/reviews">See all reviews</Link>
          </Button>
        </div>
      </Reveal>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {reviews.map((review, index) => {
          const avatarUrl = review.reviewerAvatar
            ? urlFor(review.reviewerAvatar).width(72).height(72).fit("crop").url()
            : null;
          const initials = review.name?.charAt(0)?.toUpperCase() ?? "?";

          return (
            <Reveal key={review.slug} delay={420 + index * 70}>
              <Card className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <CardContent className="flex h-full flex-col gap-4 p-5">
                  <div className="flex items-center gap-3">
                    {avatarUrl ? (
                      <Image
                        src={avatarUrl}
                        alt={`${review.name} avatar`}
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-foreground">
                        {initials}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">{review.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-heading text-base font-semibold">{review.title}</p>
                    <p className="font-body text-sm text-muted-foreground">
                      {clampText(review.body, 160)}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-2">
                    <Badge className="rounded-full bg-primary/15 text-primary ring-1 ring-primary/25">
                      {review.rating}/5
                    </Badge>
                    <Button asChild size="sm" className="rounded-full">
                      <Link href={`/reviews/${review.slug}`}>Read</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
