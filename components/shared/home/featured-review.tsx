import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < rating ? "h-4 w-4 fill-primary text-primary" : "h-4 w-4 text-white/25"}
        />
      ))}
    </div>
  );
}

export function HomeFeaturedReview() {
  return (
    <Reveal delay={320}>
      <div className="mx-auto mt-10 rounded-[26px] border border-white/10 bg-white/5 px-5 py-6 text-left shadow-[0_18px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl md:px-7 md:py-7 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-2xl ring-1 ring-white/15">
              <img
                alt="Reviewer avatar"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=60"
              />
            </div>
            <div>
              <p className="font-heading text-base font-semibold md:text-lg">Rosey is Outstanding!</p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="font-body text-xs text-muted-foreground">Sarah M., Verified User</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-1 text-[11px] text-primary ring-1 ring-primary/25">
                  <Check className="h-3 w-3" /> Verified
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <Stars rating={5} />
          </div>
        </div>

        <p className="font-body mt-5 text-pretty text-sm leading-relaxed text-foreground/90 md:text-base">
          “Rosey site has been a game changer for me. Reliable, fast, and incredibly easy to use. Couldn’t be happier!”
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Button
            asChild
            variant="outline"
            className="font-body h-11 rounded-2xl border-white/15 bg-white/0 px-6 text-foreground hover:bg-white/5 dark:border-white/15"
          >
            <Link href="/reviews">Browse Reviews</Link>
          </Button>
          <Button asChild className="font-body h-11 rounded-2xl px-6 shadow-glow">
            <Link href="https://rosey.link" target="_blank" rel="noreferrer">
              Visit Rosey.link
            </Link>
          </Button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
          <Check className="h-3.5 w-3.5" />
          <span>We do not edit opinions. Only spam and abuse are removed.</span>
        </div>
      </div>
    </Reveal>
  );
}
