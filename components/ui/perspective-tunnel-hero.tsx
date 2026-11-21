"use client";

import {
  motion,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PencilButton } from "@/components/ui/pencil-button";

export interface TunnelItem {
  src: string;
  title: string;
  titleAr?: string;
  badge?: string;
  badgeAr?: string;
  category?: string;
  categoryAr?: string;
  href?: string;
  flipX?: boolean;
}

export const DEFAULT_SUPERFELIZ_ITEMS: TunnelItem[] = [
  // 1. الأربعة كروت الأساسية لفيليز (دون أي تغيير في ترتيبهم الأصلي)
  {
    src: "/meet-feliz/felizoper.jpg",
    title: "Feliz Oper",
    titleAr: "فيليز أوبر",
    badge: "AI Operator",
    badgeAr: "مشغّل الأعمال",
    category: "Strategy & Feasibility",
    categoryAr: "الجدوى والتخطيط",
    href: "/superfeliz",
  },
  {
    src: "/meet-feliz/feliztech.jpg",
    title: "Feliz Tech",
    titleAr: "فيليز تك",
    badge: "Tech Architect",
    badgeAr: "المعماري البرمجي",
    category: "Software Architecture",
    categoryAr: "هندسة النظم السحابية",
    href: "/superfeliz",
    flipX: true,
  },
  {
    src: "/meet-feliz/felizgen.jpg",
    title: "Feliz Gen",
    titleAr: "فيليز جين",
    badge: "Creative Mind",
    badgeAr: "العقل الإبداعي",
    category: "Branding & Content",
    categoryAr: "الهوية وصناعة المحتوى",
    href: "/superfeliz",
  },
  {
    src: "/meet-feliz/superfeliz-autonomuous.jpg",
    title: "SuperFeliz Autonomous",
    titleAr: "سوبر فيليز المستقل",
    badge: "Master Agent",
    badgeAr: "الوكيل السيادي",
    category: "Company Orchestration",
    categoryAr: "إدارة وأتمتة الشركات",
    href: "/superfeliz",
    flipX: true,
  },

  // 2. الخمسة كروت الباقية (الصور والمحتوى الجديد)
  {
    src: "/meet-feliz/build-with-superfeliz.jpg",
    title: "Smart Systems & Growth",
    titleAr: "أنظمة ذكية ونمو مستدام",
    badge: "Real Growth",
    badgeAr: "نمو حقيقي",
    category: "AI Architecture",
    categoryAr: "بنية الذكاء الاصطناعي",
    href: "/superfeliz",
  },
  {
    src: "/meet-feliz/creative-systems.jpg",
    title: "AI Creative Systems",
    titleAr: "أنظمة التصميم الذكي",
    badge: "Create Smarter",
    badgeAr: "إبداع ذكي",
    category: "Content & Design Engines",
    categoryAr: "محركات الإبداع والمحتوى",
    href: "/superfeliz",
  },
  {
    src: "/meet-feliz/build-a-brand.jpg",
    title: "Build a Scalable Brand",
    titleAr: "صناعة هوية قابلة للتوسع",
    badge: "Brand Scaling",
    badgeAr: "توسع العلامة",
    category: "Brand Engineering",
    categoryAr: "هندسة الهوية المؤسسية",
    href: "/superfeliz",
  },
  {
    src: "/meet-feliz/launch-faster.jpg",
    title: "Launch Faster",
    titleAr: "انطلاق فائق السرعة",
    badge: "Rapid Delivery",
    badgeAr: "تنفيذ متسارع",
    category: "Full-Stack Velocity",
    categoryAr: "جاهزية برمجية فورية",
    href: "/superfeliz",
  },
  {
    src: "/meet-feliz/pencil-expertise.jpg",
    title: "Pencil Expertise",
    titleAr: "خبرة بينسل المتكاملة",
    badge: "Our Expertise",
    badgeAr: "خبراتنا المتراكمة",
    category: "Design & Tech Mastery",
    categoryAr: "ريادة التصميم والبرمجة",
    href: "/superfeliz",
  },
];

interface TunnelCardData {
  item: TunnelItem;
  angleCos: number;
  angleSin: number;
  radiusFactorX: number;
  radiusFactorY: number;
  rotationZ: number;
  index: number;
}

const SPRING_CONFIG = { stiffness: 60, damping: 25, mass: 0.5 };

interface StageDimensions {
  width: number;
  height: number;
  isMobile: boolean;
}

function useCameraParallax(enabled: boolean) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, SPRING_CONFIG);
  const y = useSpring(rawY, SPRING_CONFIG);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, rawX, rawY]);

  return { x, y };
}

interface TunnelCardProps {
  card: TunnelCardData;
  progress: MotionValue<number>;
  pointer: { x: MotionValue<number>; y: MotionValue<number> };
  total: number;
  stage: StageDimensions;
  isRtl?: boolean;
}

function TunnelCard({ card, progress, pointer, total, stage, isRtl }: TunnelCardProps) {
  const staggerSpan = 0.55;
  const start = (card.index / total) * (1 - staggerSpan);
  const end = start + staggerSpan;

  const localProgress = useTransform(progress, [start, end], [0, 1]);

  const farZ = stage.isMobile ? -1200 : -1700;
  const nearZ = stage.isMobile ? 350 : 520;
  const z = useTransform(localProgress, [0, 1], [farZ, nearZ]);

  const opacity = useTransform(localProgress, [0, 0.18, 0.82, 0.98], [0, 1, 1, 0]);

  const cardWidth = stage.isMobile
    ? Math.max(140, Math.min(190, stage.width * 0.4))
    : Math.max(190, Math.min(280, stage.width * 0.19));

  const baseX = card.angleCos * (stage.width * card.radiusFactorX);
  const baseY = card.angleSin * (stage.height * card.radiusFactorY);
  const panStrength = stage.isMobile ? 22 : 48;

  const transform = useTransform(
    [z, pointer.x, pointer.y],
    ([currZ, px, py]: number[]) => {
      const offsetX = baseX - px * panStrength;
      const offsetY = baseY - py * panStrength;
      return `translate3d(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px), ${currZ}px) rotateZ(${card.rotationZ}deg)`;
    }
  );

  const displayTitle = isRtl && card.item.titleAr ? card.item.titleAr : card.item.title;
  const displayBadge = isRtl && card.item.badgeAr ? card.item.badgeAr : card.item.badge;
  const displayCategory = isRtl && card.item.categoryAr ? card.item.categoryAr : card.item.category;

  return (
    <motion.div
      style={{
        width: cardWidth,
        transform,
        opacity,
        zIndex: card.index + 1,
      }}
      className="pointer-events-auto absolute left-1/2 top-1/2 aspect-[4/5] will-change-transform select-none cursor-pointer"
    >
      <Link
        href={card.item.href || "/superfeliz"}
        className="group relative block h-full w-full overflow-hidden rounded-2xl bg-white shadow-xl shadow-neutral-950/8 border border-neutral-200 transition-all duration-500 hover:border-blue-500/80 hover:shadow-2xl hover:shadow-blue-500/15"
      >
        <Image
          src={card.item.src}
          alt={displayTitle}
          fill
          sizes="(max-width: 768px) 190px, 280px"
          draggable={false}
          className={cn(
            "h-full w-full object-cover transition-transform duration-700 ease-out",
            card.item.flipX
              ? "-scale-x-100 group-hover:-scale-x-110 group-hover:scale-y-110"
              : "group-hover:scale-110"
          )}
        />

        {/* Subtle top badge */}
        {displayBadge && (
          <div className="absolute top-3 left-3 z-10" dir={isRtl ? "rtl" : "ltr"}>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-neutral-800 border border-neutral-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {displayBadge}
            </span>
          </div>
        )}

        {/* Bottom card content */}
        <div
          dir={isRtl ? "rtl" : "ltr"}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5 text-start"
        >
          {displayCategory && (
            <span className="text-[10px] font-mono uppercase tracking-wider text-blue-300 drop-shadow-sm mb-1">
              {displayCategory}
            </span>
          )}
          <span className="text-xs sm:text-sm font-bold text-white drop-shadow-md flex items-center justify-between gap-2">
            <span>{displayTitle}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-blue-400 shrink-0" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export interface PerspectiveTunnelHeroProps {
  items?: TunnelItem[];
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  scrollPrompt?: string;
  ctaText?: string;
  ctaHref?: string;
  isRtl?: boolean;
  className?: string;
}

export default function PerspectiveTunnelHero({
  items = DEFAULT_SUPERFELIZ_ITEMS,
  eyebrow = "Autonomous Business AI",
  titleLine1 = "MEET",
  titleLine2 = "SUPERFELIZ",
  description = "Your business AI agent. Built to turn messy briefs into rock-solid execution plans, automated workflows, and digital growth.",
  scrollPrompt = "Scroll or swipe to fly through the corridor",
  ctaText = "Explore SuperFeliz",
  ctaHref = "/superfeliz",
  isRtl = false,
  className,
}: PerspectiveTunnelHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const [stage, setStage] = useState<StageDimensions>({
    width: 1440,
    height: 900,
    isMobile: false,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setStage({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const tunnelCards = useMemo<TunnelCardData[]>(() => {
    return items.map((item, i) => {
      const goldenAngle = i * 137.5 * (Math.PI / 180);
      const radiusFactorX = 0.28 + (i % 3) * 0.08;
      const radiusFactorY = 0.26 + (i % 2) * 0.09;

      return {
        item,
        angleCos: Math.cos(goldenAngle),
        angleSin: Math.sin(goldenAngle),
        radiusFactorX,
        radiusFactorY,
        rotationZ: (i % 2 === 0 ? 1 : -1) * (3 + (i % 5) * 2),
        index: i,
      };
    });
  }, [items]);

  // Raw motion value controlled directly by mouse wheel / touch trackpad / swipe
  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.0001,
  });

  // Handle wheel scrolling locally inside the viewport container
  // Safely allows normal page scrolling once boundaries are reached!
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const current = rawProgress.get();
      const delta = e.deltaY * 0.0008;
      const next = current + delta;

      // If scrolling down while already at the end, allow normal page scroll
      if (current >= 1 && e.deltaY > 0) {
        return;
      }
      // If scrolling up while already at the beginning, allow normal page scroll
      if (current <= 0 && e.deltaY < 0) {
        return;
      }

      // Inside boundaries: capture wheel to navigate 3D tunnel smoothly
      e.preventDefault();
      const clamped = Math.min(1, Math.max(0, next));
      rawProgress.set(clamped);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [rawProgress]);

  // Touch swipe support for mobile
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchCurrentY = e.touches[0].clientY;
      const deltaY = touchStartY - touchCurrentY;
      touchStartY = touchCurrentY;

      const current = rawProgress.get();
      const delta = deltaY * 0.0012;
      const next = current + delta;

      if ((current >= 1 && deltaY > 0) || (current <= 0 && deltaY < 0)) {
        return;
      }

      if (e.cancelable) {
        e.preventDefault();
      }
      rawProgress.set(Math.min(1, Math.max(0, next)));
    };

    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
    };
  }, [rawProgress]);

  const pointer = useCameraParallax(!reduce);

  const titleScale = useTransform(smoothProgress, [0, 0.5, 1], [0.75, 1, 1.35]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.12, 0.85, 1], [0.35, 1, 1, 0]);
  const promptOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  return (
    <div
      ref={containerRef}
      dir="ltr"
      className={cn(
        "relative h-[100svh] w-full overflow-hidden bg-white text-neutral-900 select-none flex items-center justify-center border-b border-neutral-200",
        className
      )}
      style={{
        perspective: stage.isMobile ? "900px" : "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Immersive Background Grid & Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />

      {/* Depth Ring Guides */}
      <div className="pointer-events-none absolute h-[48vmin] w-[48vmin] rounded-full border border-blue-500/15" />
      <div className="pointer-events-none absolute h-[76vmin] w-[76vmin] rounded-full border border-dashed border-neutral-300/70" />

      {/* Central Anchor Typography */}
      <motion.div
        style={{ scale: titleScale, opacity: titleOpacity }}
        dir={isRtl ? "rtl" : "ltr"}
        className="pointer-events-none z-0 flex flex-col items-center text-center px-6 max-w-2xl"
      >
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-blue-600 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          {eyebrow}
        </p>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1] text-neutral-900">
          {titleLine1}
          <br />
          <span className="italic font-light text-neutral-400">
            {titleLine2}
          </span>
        </h2>

        <p className="mt-5 max-w-[44ch] text-sm sm:text-base font-normal text-neutral-600 leading-relaxed">
          {description}
        </p>

        {/* Action Button */}
        {ctaText && (
          <div className="mt-6 pointer-events-auto">
            <PencilButton
              href={ctaHref}
              iconType="superfeliz"
              variant="primary"
              size="md"
              hoverLabel={isRtl ? "اكتشف فيليز ←" : "Explore Feliz →"}
            >
              <span>{ctaText}</span>
            </PencilButton>
          </div>
        )}
      </motion.div>

      {/* Scroll Prompt */}
      <motion.div
        style={{ opacity: promptOpacity }}
        className="pointer-events-none absolute bottom-8 z-20 flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-500"
      >
        <span>{scrollPrompt}</span>
        <div className="h-6 w-px bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>

      {/* 3D Z-Space Plane */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        {tunnelCards.map((card, i) => (
          <TunnelCard
            key={i}
            card={card}
            progress={smoothProgress}
            pointer={pointer}
            total={tunnelCards.length}
            stage={stage}
            isRtl={isRtl}
          />
        ))}
      </div>
    </div>
  );
}

