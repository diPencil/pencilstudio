"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export type CardStackItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
  ctaLabel?: string;
  tag?: string;
  rawProduct?: any; // To pass back to onQuickLook
};

export type CardStackProps<T extends CardStackItem> = {
  items: T[];
  initialIndex?: number;
  maxVisible?: number;
  cardWidth?: number;
  cardHeight?: number;
  overlap?: number;
  spreadDeg?: number;
  perspectivePx?: number;
  depthPx?: number;
  tiltXDeg?: number;
  activeLiftPx?: number;
  activeScale?: number;
  inactiveScale?: number;
  springStiffness?: number;
  springDamping?: number;
  loop?: boolean;
  autoAdvance?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;
  showDots?: boolean;
  className?: string;
  onChangeIndex?: (index: number, item: T) => void;
  renderCard?: (item: T, state: { active: boolean }) => React.ReactNode;
  onActiveCardClick?: (item: T) => void;
};

function wrapIndex(n: number, len: number) {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}

function signedOffset(i: number, active: number, len: number, loop: boolean) {
  const raw = i - active;
  if (!loop || len <= 1) return raw;

  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

export function CardStack<T extends CardStackItem>({
  items,
  initialIndex = 0,
  maxVisible = 7,
  cardWidth = 520,
  cardHeight = 320,
  overlap = 0.48,
  spreadDeg = 48,
  perspectivePx = 1100,
  depthPx = 140,
  tiltXDeg = 12,
  activeLiftPx = 22,
  activeScale = 1.03,
  inactiveScale = 0.94,
  springStiffness = 280,
  springDamping = 28,
  loop = true,
  autoAdvance = false,
  intervalMs = 2800,
  pauseOnHover = true,
  showDots = true,
  className,
  onChangeIndex,
  renderCard,
  onActiveCardClick,
}: CardStackProps<T>) {
  const reduceMotion = useReducedMotion();
  const len = items.length;

  const [active, setActive] = React.useState(() =>
    wrapIndex(initialIndex, len),
  );
  const [hovering, setHovering] = React.useState(false);
  
  // Responsive card size calculations
  const [dimensions, setDimensions] = React.useState({ width: cardWidth, height: cardHeight });

  React.useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        // Mobile screen sizes
        const targetWidth = Math.min(screenWidth - 48, 380);
        setDimensions({
          width: targetWidth,
          height: Math.round(targetWidth * 0.72),
        });
      } else if (screenWidth < 1024) {
        // Tablet screen sizes
        setDimensions({
          width: 440,
          height: 280,
        });
      } else {
        // Desktop screen sizes
        setDimensions({
          width: cardWidth,
          height: cardHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cardWidth, cardHeight]);

  React.useEffect(() => {
    setActive((a) => wrapIndex(a, len));
  }, [len]);

  React.useEffect(() => {
    if (!len) return;
    onChangeIndex?.(active, items[active]!);
  }, [active, len, items, onChangeIndex]);

  const maxOffset = Math.max(0, Math.floor(maxVisible / 2));
  const cardSpacing = Math.max(10, Math.round(dimensions.width * (1 - overlap)));
  const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0;

  const canGoPrev = loop || active > 0;
  const canGoNext = loop || active < len - 1;

  const prev = React.useCallback(() => {
    if (!len) return;
    if (!canGoPrev) return;
    setActive((a) => wrapIndex(a - 1, len));
  }, [canGoPrev, len]);

  const next = React.useCallback(() => {
    if (!len) return;
    if (!canGoNext) return;
    setActive((a) => wrapIndex(a + 1, len));
  }, [canGoNext, len]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  React.useEffect(() => {
    if (!autoAdvance) return;
    if (reduceMotion) return;
    if (!len) return;
    if (pauseOnHover && hovering) return;

    const id = window.setInterval(
      () => {
        if (loop || active < len - 1) next();
      },
      Math.max(700, intervalMs),
    );

    return () => window.clearInterval(id);
  }, [
    autoAdvance,
    intervalMs,
    hovering,
    pauseOnHover,
    reduceMotion,
    len,
    loop,
    active,
    next,
  ]);

  if (!len) return null;

  const activeItem = items[active]!;

  return (
    <div
      className={cn("w-full", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Stage */}
      <div
        className="relative w-full outline-none"
        style={{ height: Math.max(320, dimensions.height + 60) }}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {/* background wash / spotlight */}
        <div
          className="pointer-events-none absolute inset-x-0 top-6 mx-auto h-48 w-[70%] rounded-full bg-black/5 blur-3xl dark:bg-white/5"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-40 w-[76%] rounded-full bg-black/10 blur-3xl dark:bg-black/30"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 flex items-end justify-center"
          style={{
            perspective: `${perspectivePx}px`,
          }}
        >
          <AnimatePresence initial={false}>
            {items.map((item, i) => {
              const off = signedOffset(i, active, len, loop);
              const abs = Math.abs(off);
              const visible = abs <= maxOffset;

              if (!visible) return null;

              const rotateZ = off * stepDeg;
              const x = off * cardSpacing;
              const y = abs * 10;
              const z = -abs * depthPx;

              const isActive = off === 0;

              const scale = isActive ? activeScale : inactiveScale;
              const lift = isActive ? -activeLiftPx : 0;
              const rotateX = isActive ? 0 : tiltXDeg;
              const zIndex = 100 - abs;

              const dragProps = isActive
                ? {
                    drag: "x" as const,
                    dragConstraints: { left: 0, right: 0 },
                    dragElastic: 0.18,
                    onDragEnd: (
                      _e: any,
                      info: { offset: { x: number }; velocity: { x: number } },
                    ) => {
                      if (reduceMotion) return;
                      const travel = info.offset.x;
                      const v = info.velocity.x;
                      const threshold = Math.min(160, dimensions.width * 0.22);

                      if (travel > threshold || v > 650) prev();
                      else if (travel < -threshold || v < -650) next();
                    },
                  }
                : {};

              return (
                <motion.div
                  key={item.id}
                  className={cn(
                    "absolute bottom-0 rounded-2xl border-4 border-black/10 dark:border-white/10 overflow-hidden shadow-xl",
                    "will-change-transform select-none",
                    isActive
                      ? "cursor-grab active:cursor-grabbing"
                      : "cursor-pointer",
                  )}
                  style={{
                    width: dimensions.width,
                    height: dimensions.height,
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: y + 40,
                          x,
                          rotateZ,
                          rotateX,
                          scale,
                        }
                  }
                  animate={{
                    opacity: 1,
                    x,
                    y: y + lift,
                    rotateZ,
                    rotateX,
                    scale,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: springStiffness,
                    damping: springDamping,
                  }}
                  onClick={() => {
                    if (isActive) {
                      onActiveCardClick?.(item);
                    } else {
                      setActive(i);
                    }
                  }}
                  {...dragProps}
                >
                  <div
                    className="h-full w-full"
                    style={{
                      transform: `translateZ(${z}px)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {renderCard ? (
                      renderCard(item, { active: isActive })
                    ) : (
                      <DefaultFanCard item={item} active={isActive} />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Dots navigation centered at bottom */}
      {showDots ? (
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            {items.map((it, idx) => {
              const on = idx === active;
              return (
                <button
                  key={it.id}
                  onClick={() => setActive(idx)}
                  className={cn(
                    "h-2 w-2 rounded-full transition",
                    on
                      ? "bg-neutral-800 dark:bg-white"
                      : "bg-neutral-800/30 dark:bg-white/30 hover:bg-neutral-800/50 dark:hover:bg-white/50",
                  )}
                  aria-label={`Go to ${it.title}`}
                />
              );
            })}
          </div>
          {activeItem.href ? (
            <Link
              href={activeItem.href}
              className="text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white transition"
              aria-label="Open link"
            >
              <SquareArrowOutUpRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function DefaultFanCard({ item }: { item: CardStackItem; active: boolean }) {
  return (
    <div className="relative h-full w-full">
      {/* image */}
      <div className="absolute inset-0">
        {item.imageSrc ? (
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            className="object-cover"
            draggable={false}
            priority
            sizes="(max-width: 768px) 100vw, 520px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-sm text-neutral-500">
            No image
          </div>
        )}
      </div>

      {/* subtle gradient overlay at bottom for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* badge / tag */}
      {item.tag && (
        <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md text-white border border-white/20">
          {item.tag}
        </div>
      )}

      {/* content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 text-start text-white">
        <div className="truncate text-xl font-bold tracking-tight">
          {item.title}
        </div>
        {item.description ? (
          <div className="mt-1.5 line-clamp-2 text-xs text-white/80 leading-relaxed font-medium">
            {item.description}
          </div>
        ) : null}
      </div>
    </div>
  );
}
