"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-9 w-9 place-items-center rounded-2xl bg-primary/15 ring-1 ring-primary/25">
        <div className="h-4 w-4 rounded-full bg-primary" />
      </div>
      <div className="leading-none">
        <p className="font-heading text-sm font-semibold tracking-tight">Rosey Reviews</p>
        <p className="font-body text-xs text-muted-foreground">Trust, reviewed.</p>
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-5">
      <Link href="/" className="rounded-xl focus:outline-none focus:ring-2 focus:ring-ring">
        <Logo />
      </Link>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          className="font-body rounded-full px-4 text-sm text-foreground/90 hover:bg-white/5 dark:hover:bg-white/5"
          asChild
        >
          <Link href="/reviews">
            Reviews <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
          </Link>
        </Button>

        <ThemeToggle />
      </div>
    </div>
  );
}
