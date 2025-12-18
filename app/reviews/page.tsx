"use client";

import * as React from "react";
import Link from "next/link";
import { BadgeCheck, Search, SlidersHorizontal, Star, ThumbsUp } from "lucide-react";

import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Reveal } from "@/components/shared/reveal";
import { HomeBackground } from "@/components/shared/home/background";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

type Review = {
  id: string;
  title: string;
  body: string;
  name: string;
  meta: string;
  rating: number;
  verified: boolean;
  createdAt: string; // ISO or display string
  helpfulCount: number;
  tags: string[];
};

const REVIEWS: Review[] = [
  {
    id: "rosey-001",
    title: "Fast, clean, and trustworthy",
    body: "Everything felt straightforward. Pages loaded quickly and the experience was calm. It did not feel like the site was trying to trick me into anything.",
    name: "Amina",
    meta: "Verified user",
    rating: 5,
    verified: true,
    createdAt: "2025-12-15",
    helpfulCount: 42,
    tags: ["Speed", "Trust"],
  },
  {
    id: "rosey-002",
    title: "Good overall, one thing to improve",
    body: "Really solid experience. I would love slightly clearer guidance on one step, but it is already better than most sites.",
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
    body: "The way information is presented feels transparent. I like that reviews do not feel edited and the page is easy to scan.",
    name: "Chioma",
    meta: "User",
    rating: 5,
    verified: false,
    createdAt: "2025-12-09",
    helpfulCount: 9,
    tags: ["Transparency"],
  },
  {
    id: "rosey-004",
    title: "Decent experience",
    body: "No major issues. I think the overall flow is good. Would be nice to see more guidance on what is verified and what is not.",
    name: "Michael",
    meta: "User",
    rating: 3,
    verified: false,
    createdAt: "2025-12-05",
    helpfulCount: 3,
    tags: ["Verification"],
  },
];

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

function clampBody(text: string, max = 140) {
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + "…";
}

export default function ReviewsPage() {
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState<"recent" | "highest" | "helpful">("recent");
  const [minRating, setMinRating] = React.useState<number | null>(null);
  const [verifiedOnly, setVerifiedOnly] = React.useState(false);

  // simple client-side pagination placeholder
  const [page, setPage] = React.useState(1);
  const pageSize = 6;

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = REVIEWS.filter((r) => {
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.body.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q)) ||
        r.name.toLowerCase().includes(q);

      const matchesRating = minRating ? r.rating >= minRating : true;
      const matchesVerified = verifiedOnly ? r.verified : true;

      return matchesQuery && matchesRating && matchesVerified;
    });

    list = list.sort((a, b) => {
      if (sort === "highest") return b.rating - a.rating;
      if (sort === "helpful") return b.helpfulCount - a.helpfulCount;
      // recent
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return list;
  }, [query, sort, minRating, verifiedOnly]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);

  React.useEffect(() => {
    setPage(1);
  }, [query, sort, minRating, verifiedOnly]);

  const pageItems = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <HomeBackground />

      <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        <Reveal>
          <Card className="rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <CardContent className="p-0">
              <Navbar />
              <div className="h-px w-full bg-white/10" />

              <div className="px-6 pb-8 pt-10 md:px-10 md:pb-10 md:pt-12">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                  <Reveal delay={60}>
                    <h1 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                      Reviews
                    </h1>
                  </Reveal>
                  <Reveal delay={120}>
                    <p className="font-body mx-auto mt-3 max-w-2xl text-pretty text-sm text-muted-foreground md:text-base">
                      Search, filter, and read what people are saying about Rosey.link.
                    </p>
                  </Reveal>
                </div>

                {/* Controls */}
                <Reveal delay={180}>
                  <div className="mx-auto mt-8 max-w-4xl">
                    <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl md:grid-cols-[1fr_auto]">
                      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-background/30 px-3 py-2">
                        <Search className="h-4 w-4 text-muted-foreground" />
                        <Input
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder="Search reviews, tags, names…"
                          className="h-9 border-0 bg-transparent p-0 focus-visible:ring-0"
                        />
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 md:justify-end">
                        <Button
                          variant="ghost"
                          className="font-body rounded-full border border-white/10 bg-white/0 text-sm hover:bg-white/5"
                          onClick={() => setVerifiedOnly((v) => !v)}
                        >
                          <BadgeCheck className="mr-2 h-4 w-4" />
                          Verified only: {verifiedOnly ? "On" : "Off"}
                        </Button>

                        <Button
                          variant="ghost"
                          className="font-body rounded-full border border-white/10 bg-white/0 text-sm hover:bg-white/5"
                          onClick={() => {
                            // light UI: cycle sort
                            setSort((s) => (s === "recent" ? "highest" : s === "highest" ? "helpful" : "recent"));
                          }}
                        >
                          <SlidersHorizontal className="mr-2 h-4 w-4" />
                          Sort: {sort === "recent" ? "Recent" : sort === "highest" ? "Highest" : "Most helpful"}
                        </Button>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {[
                        { label: "All", value: null },
                        { label: "4+ stars", value: 4 },
                        { label: "3+ stars", value: 3 },
                        { label: "2+ stars", value: 2 },
                      ].map((chip) => {
                        const active = minRating === chip.value;
                        return (
                          <Button
                            key={chip.label}
                            variant={active ? "default" : "outline"}
                            className="font-body h-9 rounded-full"
                            onClick={() => setMinRating(chip.value)}
                          >
                            {chip.label}
                          </Button>
                        );
                      })}

                      <div className="ml-auto hidden text-xs text-muted-foreground md:block">
                        Showing {filtered.length} result{filtered.length === 1 ? "" : "s"}
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Separator className="my-8 bg-white/10" />

                {/* List */}
                <div className="mx-auto max-w-4xl">
                  <div className="grid gap-4">
                    {pageItems.map((r, idx) => (
                      <Reveal key={r.id} delay={220 + idx * 60}>
                        <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                          <CardContent className="p-5 md:p-6">
                            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h3 className="font-heading text-base font-semibold md:text-lg">
                                    {r.title}
                                  </h3>
                                  {r.verified ? (
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

                                <div className="mt-2 flex flex-wrap items-center gap-3">
                                  <Stars rating={r.rating} />
                                  <span className="text-xs text-muted-foreground">
                                    {r.name} · {r.meta} · {r.createdAt}
                                  </span>
                                </div>

                                <p className="font-body mt-3 text-sm leading-relaxed text-foreground/90">
                                  {clampBody(r.body, 200)}
                                </p>

                                <div className="mt-3 flex flex-wrap gap-2">
                                  {r.tags.map((t) => (
                                    <button
                                      key={t}
                                      onClick={() => setQuery(t)}
                                      className="rounded-full border border-white/10 bg-white/0 px-3 py-1 text-xs text-muted-foreground hover:bg-white/5"
                                    >
                                      {t}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div className="flex shrink-0 items-center gap-2 md:flex-col md:items-end">
                                <Button
                                  variant="ghost"
                                  className="font-body rounded-full border border-white/10 bg-white/0 hover:bg-white/5"
                                >
                                  <ThumbsUp className="mr-2 h-4 w-4" />
                                  Helpful ({r.helpfulCount})
                                </Button>

                                <Button asChild className="font-body rounded-full">
                                  <Link href={`/reviews/${r.id}`}>Read more</Link>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Reveal>
                    ))}

                    {pageItems.length === 0 && (
                      <Reveal delay={240}>
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
                          <p className="font-heading text-lg font-semibold">No results</p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Try a different search, remove filters, or browse all reviews.
                          </p>
                          <Button
                            className="mt-5 rounded-full"
                            onClick={() => {
                              setQuery("");
                              setMinRating(null);
                              setVerifiedOnly(false);
                              setSort("recent");
                            }}
                          >
                            Reset filters
                          </Button>
                        </div>
                      </Reveal>
                    )}
                  </div>

                  {/* Pagination */}
                  <Reveal delay={300}>
                    <div className="mt-8 flex items-center justify-between gap-3">
                      <p className="text-xs text-muted-foreground">
                        Page {safePage} of {totalPages}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          className="rounded-full"
                          disabled={safePage <= 1}
                          onClick={() => setPage((p) => Math.max(1, p - 1))}
                        >
                          Prev
                        </Button>
                        <Button
                          variant="outline"
                          className="rounded-full"
                          disabled={safePage >= totalPages}
                          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        >
                          Next
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
