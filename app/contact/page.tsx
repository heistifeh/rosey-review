"use client";

import * as React from "react";
import Link from "next/link";
import { AlertTriangle, Clock, Mail, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Reveal } from "@/components/shared/reveal";
import { HomeBackground } from "@/components/shared/home/background";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

type FormState = {
  name: string;
  email: string;
  message: string;
};

function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/15 ring-1 ring-primary/25">
            {icon}
          </div>
          <div>
            <p className="font-heading text-base font-semibold">{title}</p>
            <p className="font-body mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ContactPage() {
  const [form, setForm] = React.useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle");

  const canSubmit =
    form.name.trim().length > 1 &&
    form.email.trim().includes("@") &&
    form.message.trim().length > 8;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || status === "sending") return;

    setStatus("sending");

    // Placeholder: wire this to your API route later (/api/contact).
    try {
      await new Promise((r) => setTimeout(r, 900));

      toast.success("Message sent", {
        description: "Thanks for reaching out. We'll reply soon.",
      });

      setStatus("sent");
    } catch (error) {
      toast.error("Unable to send message", {
        description: "Please try again in a moment.",
      });
      setStatus("idle");
    }
  }

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
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                  <Reveal delay={60}>
                    <Badge
                      variant="secondary"
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
                    >
                      <Mail className="mr-2 h-4 w-4 text-primary" />
                      Contact and Support
                    </Badge>
                  </Reveal>

                  <Reveal delay={120}>
                    <h1 className="font-heading mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                      Need help? Reach us here
                    </h1>
                  </Reveal>

                  <Reveal delay={180}>
                    <p className="font-body mx-auto mt-4 max-w-2xl text-pretty text-sm text-muted-foreground md:text-base">
                      We keep support simple. Send a message and we will respond as fast as possible.
                    </p>
                  </Reveal>
                </div>

                <Separator className="my-10 bg-white/10" />

                <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[1.2fr_0.8fr]">
                  {/* Form */}
                  <Reveal delay={220}>
                    <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                      <CardContent className="p-6 md:p-7">
                        <p className="font-heading text-base font-semibold">Send a message</p>
                        <p className="font-body mt-2 text-sm text-muted-foreground">
                          For general questions, feedback, or review-related concerns.
                        </p>

                        {status === "sent" ? (
                          <div className="mt-6 rounded-2xl border border-primary/25 bg-primary/10 p-5">
                            <p className="font-heading text-sm font-semibold text-foreground">
                              Message received
                            </p>
                            <p className="mt-2 text-sm text-muted-foreground">
                              Thanks. We will reply to <span className="text-foreground">{form.email}</span>.
                            </p>

                            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                              <Button
                                className="rounded-full"
                                onClick={() => {
                                  setStatus("idle");
                                  setForm({ name: "", email: "", message: "" });
                                }}
                              >
                                Send another
                              </Button>
                              <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/0 hover:bg-white/5">
                                <Link href="/reviews">Browse reviews</Link>
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <form onSubmit={onSubmit} className="mt-6 space-y-4">
                            <div className="grid gap-3 md:grid-cols-2">
                              <div className="space-y-2">
                                <label className="font-body text-sm text-muted-foreground">Name</label>
                                <Input
                                  value={form.name}
                                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                                  placeholder="Your name"
                                  className="h-11 rounded-2xl border-white/10 bg-background/30"
                                />
                              </div>

                              <div className="space-y-2">
                                <label className="font-body text-sm text-muted-foreground">Email</label>
                                <Input
                                  value={form.email}
                                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                                  placeholder="you@example.com"
                                  type="email"
                                  className="h-11 rounded-2xl border-white/10 bg-background/30"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="font-body text-sm text-muted-foreground">Message</label>
                              <Textarea
                                value={form.message}
                                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                                placeholder="Tell us what happened, include links if relevant."
                                className="min-h-[140px] rounded-2xl border-white/10 bg-background/30"
                              />
                              <p className="text-xs text-muted-foreground">
                                Tip: If you are reporting an issue, include the review ID or a screenshot link.
                              </p>
                            </div>

                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                              <p className="text-xs text-muted-foreground">
                                By sending this message, you agree to our{" "}
                                <Link className="text-foreground underline underline-offset-4" href="/terms">
                                  Terms
                                </Link>.
                              </p>

                              <Button
                                type="submit"
                                disabled={!canSubmit || status === "sending"}
                                className="rounded-full"
                              >
                                {status === "sending" ? "Sending…" : "Send message"}
                              </Button>
                            </div>
                          </form>
                        )}
                      </CardContent>
                    </Card>
                  </Reveal>

                  {/* Side info */}
                  <div className="space-y-4">
                    <Reveal delay={260}>
                      <InfoCard
                        icon={<Clock className="h-5 w-5 text-primary" />}
                        title="Typical response time"
                        desc="Usually within 24 hours. Faster for urgent reports."
                      />
                    </Reveal>

                    <Reveal delay={320}>
                      <InfoCard
                        icon={<ShieldCheck className="h-5 w-5 text-primary" />}
                        title="Privacy friendly"
                        desc="We only ask for what we need to respond. We do not sell your data."
                      />
                    </Reveal>

                    <Reveal delay={380}>
                      <Card className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3">
                            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/15 ring-1 ring-primary/25">
                              <AlertTriangle className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-heading text-base font-semibold">Report abuse</p>
                              <p className="font-body mt-2 text-sm leading-relaxed text-muted-foreground">
                                If a review includes spam, harassment, or sensitive personal data, report it.
                              </p>

                              <div className="mt-4 flex flex-col gap-2">
                                <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/0 hover:bg-white/5">
                                  <Link href="/review-policy">Review policy</Link>
                                </Button>

                                <Button
                                  className="rounded-full"
                                  onClick={() => {
                                    setForm((s) => ({
                                      ...s,
                                      message:
                                        s.message ||
                                        "I want to report a review for abuse. Review ID: \nReason: \nLink: ",
                                    }));
                                  }}
                                >
                                  Prefill report template
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Reveal>
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
