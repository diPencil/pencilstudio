import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  wide?: boolean;
  delay?: number;
  className?: string;
}

/**
 * Standard section heading: small caps label, bold title, optional lede.
 * Keeps heading rhythm identical across light and dark sections.
 */
export function SectionHeading({
  label,
  title,
  description,
  dark = false,
  wide = false,
  delay = 0,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal delay={delay} className={className}>
      <p
        className={cn(
          "flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]",
          dark ? "text-white/50" : "text-neutral-500"
        )}
      >
        {label}
      </p>
      <h2
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight md:text-5xl",
          dark ? "text-white" : "text-neutral-900",
          wide && "max-w-2xl"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 max-w-2xl leading-relaxed", dark ? "text-white/65" : "text-neutral-600")}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
