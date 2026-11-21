"use client";

import * as React from "react";
import { useLanguage } from "@/components/language-context";
import PerspectiveTunnelHero, {
  DEFAULT_SUPERFELIZ_ITEMS,
} from "@/components/ui/perspective-tunnel-hero";

export function SuperFelizCinematicSection() {
  const { t, locale } = useLanguage();
  const isRtl = locale === "ar";

  const content = isRtl
    ? {
        eyebrow: "وكيل أعمال رقمي فائق الذكاء",
        titleLine1: "تعرّف على",
        titleLine2: "سوبر فيليز",
        description:
          "وكيل الذكاء الاصطناعي الذكي لأعمالك. يحول الأفكار غير المرتبة إلى خطط تنفيذ دقيقة، وأتمتة مسارات العمل، وبناء أنظمة رقمية متكاملة.",
        scrollPrompt: "مرّر أو اسحب للتحليق داخل ممر الذكاء الاصطناعي",
        ctaText: "اكتشف سوبر فيليز AI",
      }
    : {
        eyebrow: "Autonomous Business AI",
        titleLine1: "MEET",
        titleLine2: "SUPERFELIZ",
        description:
          "Your business AI agent. Built to turn messy briefs into rock-solid execution plans, automated workflows, and high-performance digital systems.",
        scrollPrompt: "Scroll or swipe to fly through the spatial corridor",
        ctaText: "Explore SuperFeliz AI",
      };

  return (
    <section id="super-feliz" className="relative w-full overflow-hidden bg-white">
      <PerspectiveTunnelHero
        items={DEFAULT_SUPERFELIZ_ITEMS}
        eyebrow={content.eyebrow}
        titleLine1={content.titleLine1}
        titleLine2={content.titleLine2}
        description={content.description}
        scrollPrompt={content.scrollPrompt}
        ctaText={content.ctaText}
        ctaHref="/superfeliz"
        isRtl={isRtl}
      />
    </section>
  );
}
