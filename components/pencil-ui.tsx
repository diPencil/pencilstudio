"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

/* ---------------------------------- */
/* PENCIL Studio, premium system      */
/* synced with homepage cinematic روح  */
/* neutral / thin borders / soft shadow */
/* ---------------------------------- */

export const PENCIL = {
  paper: "bg-neutral-50",
  ink: "text-neutral-900",
  card: "bg-white border border-neutral-200 rounded-3xl",
  cardHover: "transition-all duration-300 hover:border-neutral-900 hover:shadow-xl",
  chip: "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider",
};

export function PencilDoodles({ className }: { className?: string }) {
  return <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)} />;
}

export function MarkerHighlight({ children }: { children: React.ReactNode; color?: string }) {
  return <span className="font-light italic text-neutral-500">{children}</span>;
}

type Crumb = { label: string; href?: string };

export function PencilHero({
  breadcrumb,
  sticker,
  title,
  italic,
  description,
  children,
  isRtl,
  image = "/hero-section.jpg",
  imageAlt = "PENCIL Studio",
  variant = "default",
  mode = "help",
  theme = "dark",
}: {
  breadcrumb: Crumb[];
  sticker: string;
  stickerColor?: string;
  title: React.ReactNode;
  italic?: string;
  description?: string;
  children?: React.ReactNode;
  isRtl: boolean;
  image?: string;
  imageAlt?: string;
  variant?: "default" | "care";
  mode?: "help" | "support";
  theme?: "dark" | "light";
}) {
  if (variant === "care") {
    const supportMode = mode === "support";

    return (
      <section className={cn("relative overflow-hidden", supportMode ? "min-h-[560px] bg-neutral-950 text-white" : "min-h-[540px] border-b border-neutral-200 bg-white text-neutral-950")}>
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className={cn("object-cover", supportMode ? "opacity-28" : "opacity-16 grayscale")}
            sizes="100vw"
          />
          <div className={cn(
            "absolute inset-0",
            supportMode
              ? isRtl ? "bg-gradient-to-l from-neutral-950 via-neutral-950/92 to-neutral-950/55" : "bg-gradient-to-r from-neutral-950 via-neutral-950/92 to-neutral-950/55"
              : isRtl ? "bg-gradient-to-l from-white via-white/95 to-white/65" : "bg-gradient-to-r from-white via-white/95 to-white/65"
          )} />
          <div className={cn("absolute inset-y-0 w-px", isRtl ? "right-[7vw]" : "left-[7vw]", supportMode ? "bg-white/10" : "bg-neutral-950/10")} />
          <div className={cn("absolute inset-y-0 w-px", isRtl ? "left-[7vw]" : "right-[7vw]", supportMode ? "bg-white/10" : "bg-neutral-950/10")} />
        </div>

        <div className={cn("container-custom relative z-10 flex flex-col justify-center pb-14 pt-28", supportMode ? "min-h-[560px]" : "min-h-[540px]")}>
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-current/15 pb-4">
              <nav className={cn("flex flex-wrap items-center gap-2 text-xs font-semibold", supportMode ? "text-white/45" : "text-neutral-500")}>
                {breadcrumb.map((c, i) => (
                  <React.Fragment key={`${c.label}-${i}`}>
                    {i > 0 && <span aria-hidden>/</span>}
                    {c.href ? <Link href={c.href} className="min-h-11 content-center transition hover:text-current">{c.label}</Link> : <span className={supportMode ? "text-white" : "text-neutral-950"}>{c.label}</span>}
                  </React.Fragment>
                ))}
              </nav>
              <span className={cn("font-mono text-[10px] font-black uppercase tracking-[0.22em]", supportMode ? "text-emerald-300" : "text-blue-700")}>
                {supportMode ? "PENCIL / SUPPORT" : "PENCIL / FIELD NOTES"}
              </span>
            </div>
          </Reveal>

          <div className="grid gap-8 pt-9 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-end">
            <Reveal delay={0.04}>
              <div>
                <p className={cn("mb-4 text-xs font-black uppercase tracking-[0.18em]", supportMode ? "text-white/50" : "text-blue-700")}>{sticker}</p>
                <h1 className="max-w-4xl text-5xl font-black leading-none tracking-normal sm:text-6xl lg:text-7xl">{title}</h1>
                {italic && <p className={cn("mt-5 max-w-2xl text-xl font-medium leading-relaxed", supportMode ? "text-white/82" : "text-neutral-700")}>{italic}</p>}
                {description && <p className={cn("mt-4 max-w-2xl text-base leading-8", supportMode ? "text-white/55" : "text-neutral-600")}>{description}</p>}
                {children && <div className="mt-7">{children}</div>}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className={cn("border-s ps-6", supportMode ? "border-white/15" : "border-neutral-300")}>
                <p className={cn("font-mono text-5xl font-black", supportMode ? "text-white/15" : "text-neutral-200")}>
                  {supportMode ? "24/7" : "READ"}
                </p>
                <p className={cn("mt-3 text-sm font-bold leading-6", supportMode ? "text-white/75" : "text-neutral-800")}>
                  {supportMode
                    ? isRtl ? "أرسل المشكلة مرة واحدة، مع المعلومات التي يحتاجها من سيحلها." : "Send the issue once, with what the person fixing it actually needs."
                    : isRtl ? "إجابة واضحة، ثم الخطوة التالية. لا مزيد من الكلام." : "A clear answer, then the next step. Nothing extra."}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className={cn("relative z-10 h-2", supportMode ? "bg-[linear-gradient(90deg,#ef4444_0_22%,#f59e0b_22%_48%,#10b981_48%_72%,#2563eb_72%)]" : "bg-[linear-gradient(90deg,#2563eb_0_62%,#ef4444_62%_78%,#111827_78%)]")} aria-hidden="true" />
      </section>
    );
  }

  return (
    <section className="relative flex overflow-hidden bg-neutral-900 text-white">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-neutral-900/30" />
      </div>
      <div className="container-custom relative z-10 w-full pb-14 pt-24 md:pb-16 md:pt-28">
        <Reveal>
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-white/60">
            {breadcrumb.map((c, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span aria-hidden>/</span>}
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
              {sticker}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-neutral-900">
              {isRtl ? "عربي + إنجليزي" : "AR + EN"}
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
          {italic && (
            <p className="mt-4 max-w-2xl text-lg font-light italic text-white/85 md:text-xl">{italic}</p>
          )}
          {description && <p className="mt-4 max-w-2xl leading-relaxed text-white/75">{description}</p>}
        </Reveal>
        {children && (
          <Reveal delay={0.12}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function PencilSectionTitle({
  kicker,
  title,
  isRtl,
}: {
  kicker: string;
  kickerColor?: string;
  title: React.ReactNode;
  isRtl: boolean;
}) {
  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">{kicker}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    </div>
  );
}

export function PencilCTA({
  title,
  desc,
  actions,
}: {
  title: React.ReactNode;
  desc?: string;
  actions: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-8 py-14 text-center text-white md:py-16">
      <div className="relative">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        {desc && <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/60">{desc}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3">{actions}</div>
      </div>
    </div>
  );
}
