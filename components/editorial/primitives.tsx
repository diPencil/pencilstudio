"use client";

import React from "react";
import { cn } from "@/lib/utils";

/** Small pill label used above section headings, matching the About page. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-800 sm:text-xs",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Editorial section heading: eyebrow + large light heading + optional description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  isRtl,
  align = "start",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  isRtl?: boolean;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "text-4xl font-normal text-neutral-900 lg:text-6xl",
          isRtl ? "tracking-normal" : "leading-tight"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Dark monolithic panel, the "anchor" surface used across the About page. */
export function DarkPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-neutral-900 bg-neutral-950 text-white shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Ambient cobalt/violet blobs + dot matrix backdrop for section wrappers. */
export function AmbientBackdrop({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-24 left-1/4 h-[520px] w-[520px] rounded-full bg-[#2057ff]/10 blur-[130px]" />
      <div className="absolute bottom-0 right-1/4 h-[460px] w-[460px] rounded-full bg-[#8b5cf6]/8 blur-[130px]" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

/** Pill call-to-action button, dark by default, cobalt on hover. */
export function PillCta({
  href,
  children,
  variant = "dark",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "cobalt" | "light";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300",
        variant === "dark" && "bg-neutral-950 text-white hover:bg-[#2057ff]",
        variant === "cobalt" && "bg-[#2057ff] text-white hover:bg-[#1848dc]",
        variant === "light" && "bg-white text-neutral-900 hover:bg-neutral-200",
        className
      )}
    >
      {children}
    </a>
  );
}
