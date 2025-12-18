import { Reveal } from "@/components/shared/reveal";

export function HomeHero() {
  return (
    <>
      <Reveal delay={60}>
        <h1 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-5xl">
          What people say about Rosey
        </h1>
      </Reveal>

      <Reveal delay={140}>
        <p className="font-body mx-auto mt-4 max-w-2xl text-pretty text-sm text-muted-foreground md:text-base">
          Rosey.link is reviewed by real users. No paid placements. No edits.
        </p>
      </Reveal>
    </>
  );
}
