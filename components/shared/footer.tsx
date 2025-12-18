import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rosey Reviews. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <Link className="text-muted-foreground hover:text-foreground" href="/about">
              About
            </Link>
            <Link className="text-muted-foreground hover:text-foreground" href="/contact">
              Contact
            </Link>
            <Link className="text-muted-foreground hover:text-foreground" href="/review-policy">
              Review Policy
            </Link>
            <Link className="text-muted-foreground hover:text-foreground" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
