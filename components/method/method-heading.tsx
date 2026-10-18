import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-context";
import { cn } from "@/lib/utils";

/**
 * Section heading in the exact homepage voice:
 * pill badge, font-normal display title with an italic
 * light accent, and a relaxed large description.
 */
export function MethodHeading({
  badge,
  title,
  accent,
  description,
  dark = false,
  delay = 0,
}: {
  badge: string;
  title: string;
  accent?: string;
  description?: string;
  dark?: boolean;
  delay?: number;
}) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  return (
    <Reveal delay={delay}>
      <span
        className={cn(
          "inline-block rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider",
          isRtl && "tracking-normal",
          dark ? "border-white/15 bg-white/10 text-white" : "border-neutral-200 bg-neutral-100 text-neutral-800",
          "mb-4"
        )}
      >
        {badge}
      </span>
      <h2
        className={cn(
          "mb-4 max-w-3xl text-4xl lg:text-6xl",
          dark ? "text-white" : "text-neutral-900",
          isRtl ? "font-normal tracking-normal" : "font-normal leading-tight"
        )}
      >
        {title}{" "}
        {accent ? (
          <span className={cn("italic font-light", dark ? "text-white/55" : "text-neutral-500")}>{accent}</span>
        ) : null}
      </h2>
      {description ? (
        <p className={cn("max-w-2xl text-lg leading-relaxed", dark ? "text-white/65" : "text-neutral-600")}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
