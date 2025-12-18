import * as React from "react";
import { Check, ShieldCheck, Star, Verified } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

function Metric({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <div className="grid h-9 w-9 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10 dark:bg-white/5">
        {icon}
      </div>
      <div>
        <p className="font-heading text-base font-semibold leading-none">{value}</p>
        <p className="font-body mt-1 text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

export function HomeMetrics() {
  return (
    <Reveal delay={220}>
      <div className="mx-auto mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-glow dark:border-white/10 dark:bg-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <Metric value="4.8" label="Average Rating" icon={<Star className="h-4 w-4 text-primary" />} />
          <Metric value="1,200+" label="Verified Reviews" icon={<Verified className="h-4 w-4 text-primary" />} />
          <Metric value="99.2%" label="Uptime" icon={<ShieldCheck className="h-4 w-4 text-primary" />} />
          <Metric value="✔" label="Secure & Private" icon={<Check className="h-4 w-4 text-primary" />} />
        </div>
      </div>
    </Reveal>
  );
}
