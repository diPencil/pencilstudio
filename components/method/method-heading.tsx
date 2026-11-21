"use client";

import { Reveal } from "@/components/shared/motion/reveal";
import { useLanguage } from "@/components/language-context";
import { ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * PENCIL signature section heading matching service-detail.tsx and internal pages:
 * Left: Pill badge with pulsing dot + Heavy display title with italic #2057FF accent.
 * Right: Round #2057FF ArrowDownRight icon + Bold Subtitle + Narrative Description.
 */
export function MethodHeading({
  badge,
  title,
  accent,
  subtitle,
  description,
  dark = false,
  delay = 0,
  className,
}: {
  badge: string;
  title: string;
  accent?: string;
  subtitle?: string;
  description?: string;
  dark?: boolean;
  delay?: number;
  className?: string;
}) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  return (
    <div className={cn("relative mb-12 sm:mb-16", className)}>
      <div className="flex flex-col justify-between gap-6 pb-2 text-start md:flex-row md:items-start lg:gap-12">
        {/* Left Column: Eyebrow + Main Title */}
        <div className="max-w-2xl">
          <Reveal delay={delay}>
            <div
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-mono font-bold tracking-wider mb-4 shadow-2xs",
                dark
                  ? "border-white/20 bg-white/10 text-white backdrop-blur-md"
                  : "border-blue-200/80 bg-blue-50/70 text-[#2057FF]"
              )}
            >
              <span
                className={cn(
                  "size-1.5 rounded-full animate-pulse",
                  dark ? "bg-white" : "bg-[#2057FF]"
                )}
              />
              <span>{badge}</span>
            </div>

            <h2
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.14]",
                isRtl ? "tracking-normal" : "tracking-tight",
                dark ? "text-white" : "text-neutral-900"
              )}
            >
              {title}{" "}
              {accent && (
                <span
                  className={cn(
                    "font-light italic",
                    dark ? "text-neutral-400" : "text-neutral-500"
                  )}
                >
                  {accent}
                </span>
              )}
            </h2>
          </Reveal>
        </div>

        {/* Right Column: Circular Arrow + Subtitle & Narrative Description */}
        {(description || subtitle) && (
          <div className="flex max-w-lg items-start gap-3.5 pt-1 lg:pt-3">
            <Reveal delay={delay + 0.08}>
              <div className="flex items-start gap-3.5">
                <div
                  className={cn(
                    "flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full shadow-md transition-all duration-300 hover:scale-105 mt-0.5",
                    dark
                      ? "bg-white text-neutral-950 shadow-white/10"
                      : "bg-[#2057FF] text-white shadow-blue-600/25"
                  )}
                >
                  <ArrowDownRight
                    size={18}
                    className={cn("transition-transform", isRtl && "-scale-x-100")}
                  />
                </div>
                <div>
                  {subtitle && (
                    <p
                      className={cn(
                        "text-sm font-bold",
                        dark ? "text-white" : "text-neutral-950"
                      )}
                    >
                      {subtitle}
                    </p>
                  )}
                  {description && (
                    <p
                      className={cn(
                        "mt-1 text-xs sm:text-[13px] leading-relaxed",
                        dark ? "text-white/70" : "text-neutral-600",
                        !subtitle && "mt-0"
                      )}
                    >
                      {description}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </div>
  );
}
