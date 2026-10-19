"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { HTMLAttributes, MouseEvent, KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

export interface CarouselItem {
  id: string | number;
  stat: string;
  quote: string;
  author: string;
  role: string;
  defaultImage: string;
  selectedImage: string;
  alt?: string;
  badge?: string;
  days?: string;
}

export interface CalendlyCarouselProps extends HTMLAttributes<HTMLDivElement> {
  items: CarouselItem[];
  autoPlayInterval?: number;
  pauseOnHover?: boolean;
}

type ScreenTier = "mobile" | "tablet" | "desktop";

const VISIBLE_OFFSETS = [-3, -2, -1, 0, 1, 2, 3] as const;

const TRANSITION_SPRING = {
  type: "spring",
  stiffness: 220,
  damping: 26,
  mass: 0.75,
} as const;

export function CalendlyCarousel({
  items,
  autoPlayInterval = 6000,
  pauseOnHover = false,
  className,
  ...props
}: CalendlyCarouselProps) {
  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const elapsedRef = useRef<number>(0);

  // State
  const [page, setPage] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [tier, setTier] = useState<ScreenTier>("desktop");
  const [viewportWidth, setViewportWidth] = useState<number>(1200);

  // Global State/Hooks
  const total = items.length;
  const activeIndex = ((page % total) + total) % total;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);

      if (width < 768) {
        setTier("mobile");
      } else if (width < 1120) {
        setTier("tablet");
      } else {
        setTier("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (pauseOnHover && isHovered) {
      lastTimeRef.current = null;
      return;
    }

    const step = (timestamp: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }

      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      elapsedRef.current += delta;

      if (elapsedRef.current >= autoPlayInterval) {
        elapsedRef.current = 0;
        lastTimeRef.current = null;
        setProgress(0);
        setPage((curr) => curr + 1);
        return;
      }

      setProgress(Math.min((elapsedRef.current / autoPlayInterval) * 100, 100));
      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lastTimeRef.current = null;
    };
  }, [page, pauseOnHover, isHovered, autoPlayInterval]);

  // Handlers
  const handlePrev = useCallback(() => {
    elapsedRef.current = 0;
    lastTimeRef.current = null;
    setProgress(0);
    setPage((curr) => curr - 1);
  }, []);

  const handleNext = useCallback(() => {
    elapsedRef.current = 0;
    lastTimeRef.current = null;
    setProgress(0);
    setPage((curr) => curr + 1);
  }, []);

  const handleSelectTab = (event: MouseEvent<HTMLButtonElement>) => {
    const indexStr = event.currentTarget.dataset.index;

    if (indexStr !== undefined) {
      const targetIdx = Number.parseInt(indexStr, 10);
      let diff = targetIdx - activeIndex;

      if (diff > total / 2) {
        diff -= total;
      } else if (diff < -total / 2) {
        diff += total;
      }

      elapsedRef.current = 0;
      lastTimeRef.current = null;
      setProgress(0);
      setPage((curr) => curr + diff);
    }
  };

  const handleSelectCard = (event: MouseEvent<HTMLDivElement>) => {
    const offsetStr = event.currentTarget.dataset.offset;

    if (offsetStr !== undefined) {
      const offset = Number.parseInt(offsetStr, 10);

      if (offset !== 0) {
        elapsedRef.current = 0;
        lastTimeRef.current = null;
        setProgress(0);
        setPage((curr) => curr + offset);
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      handlePrev();
    } else if (event.key === "ArrowRight") {
      handleNext();
    }
  };

  const isUltraWide = viewportWidth >= 1650;
  const isWide = viewportWidth >= 1380;

  const activeDimensions = {
    desktop: {
      width: isUltraWide ? 960 : isWide ? 880 : 790,
      height: isUltraWide ? 550 : isWide ? 530 : 516,
    },
    tablet: { width: 560, height: 440 },
    mobile: { width: Math.min(340, viewportWidth - 56), height: 490 },
  }[tier];

  return (
    <div
      ref={containerRef}
      dir="ltr"
      role="region"
      aria-roledescription="carousel"
      aria-label="Delivery framework phases"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative w-full flex flex-col items-center select-none outline-none py-6 overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        id="carousel-view-panel"
        role="tabpanel"
        aria-live="polite"
        className="relative w-full flex items-center justify-center"
        style={{ height: activeDimensions.height }}
      >
        {VISIBLE_OFFSETS.map((offset) => {
          const virtualIndex = page + offset;
          const itemIndex = ((virtualIndex % total) + total) % total;
          const item = items[itemIndex];
          const isActive = offset === 0;

          const getVariant = () => {
            if (tier === "mobile") {
              const activeW = activeDimensions.width;
              const activeH = activeDimensions.height;
              const gap = 16;
              const peekW = 60;
              const peekH = 410;

              if (offset === 0) {
                return {
                  x: -activeW / 2,
                  y: -activeH / 2,
                  width: activeW,
                  height: activeH,
                  opacity: 1,
                  zIndex: 0,
                  pointerEvents: "auto" as const,
                };
              }

              if (offset === -1) {
                return {
                  x: -activeW / 2 - gap - peekW,
                  y: -peekH / 2,
                  width: peekW,
                  height: peekH,
                  opacity: 1,
                  zIndex: 100,
                  pointerEvents: "auto" as const,
                };
              }

              if (offset === 1) {
                return {
                  x: activeW / 2 + gap,
                  y: -peekH / 2,
                  width: peekW,
                  height: peekH,
                  opacity: 1,
                  zIndex: 100,
                  pointerEvents: "auto" as const,
                };
              }

              return {
                x: offset < 0 ? -activeW / 2 - 220 : activeW / 2 + 220,
                y: -peekH / 2,
                width: peekW,
                height: peekH,
                opacity: 0,
                zIndex: 0,
                pointerEvents: "none" as const,
              };
            }

            if (tier === "tablet") {
              const activeW = 560;
              const activeH = 440;
              const gap = 18;
              const sideW = 100;
              const sideH = 340;

              if (offset === 0) {
                return {
                  x: -activeW / 2,
                  y: -activeH / 2,
                  width: activeW,
                  height: activeH,
                  opacity: 1,
                  zIndex: 0,
                  pointerEvents: "auto" as const,
                };
              }

              if (offset === -1) {
                return {
                  x: -activeW / 2 - gap - sideW,
                  y: -sideH / 2,
                  width: sideW,
                  height: sideH,
                  opacity: 1,
                  zIndex: 100,
                  pointerEvents: "auto" as const,
                };
              }

              if (offset === 1) {
                return {
                  x: activeW / 2 + gap,
                  y: -sideH / 2,
                  width: sideW,
                  height: sideH,
                  opacity: 1,
                  zIndex: 100,
                  pointerEvents: "auto" as const,
                };
              }

              return {
                x: offset < 0 ? -activeW / 2 - 240 : activeW / 2 + 240,
                y: -sideH / 2,
                width: 74,
                height: 205,
                opacity: 0,
                zIndex: 0,
                pointerEvents: "none" as const,
              };
            }

            const activeW = activeDimensions.width;
            const activeH = activeDimensions.height;
            const gap0 = 20;
            const gap1 = 16;

            const side1W = isUltraWide ? 145 : isWide ? 130 : 114;
            const side1H = isUltraWide ? 390 : isWide ? 370 : 348;

            const side2W = isUltraWide ? 110 : isWide ? 98 : 86;
            const side2H = isUltraWide ? 250 : isWide ? 232 : 216;

            const x1 = activeW / 2 + gap0;
            const x2 = x1 + side1W + gap1;

            switch (offset) {
              case 0:
                return {
                  x: -activeW / 2,
                  y: -activeH / 2,
                  width: activeW,
                  height: activeH,
                  opacity: 1,
                  zIndex: 0,
                  pointerEvents: "auto" as const,
                };
              case 1:
                return {
                  x: x1,
                  y: -side1H / 2,
                  width: side1W,
                  height: side1H,
                  opacity: 1,
                  zIndex: 100,
                  pointerEvents: "auto" as const,
                };
              case -1:
                return {
                  x: -(x1 + side1W),
                  y: -side1H / 2,
                  width: side1W,
                  height: side1H,
                  opacity: 1,
                  zIndex: 100,
                  pointerEvents: "auto" as const,
                };
              case 2:
                return {
                  x: x2,
                  y: -side2H / 2,
                  width: side2W,
                  height: side2H,
                  opacity: 1,
                  zIndex: 90,
                  pointerEvents: "auto" as const,
                };
              case -2:
                return {
                  x: -(x2 + side2W),
                  y: -side2H / 2,
                  width: side2W,
                  height: side2H,
                  opacity: 1,
                  zIndex: 90,
                  pointerEvents: "auto" as const,
                };
              case 3:
                return {
                  x: x2 + side2W + 90,
                  y: -side2H / 2,
                  width: side2W,
                  height: side2H,
                  opacity: 0,
                  zIndex: 0,
                  pointerEvents: "none" as const,
                };
              case -3:
                return {
                  x: -(x2 + side2W + 90),
                  y: -side2H / 2,
                  width: side2W,
                  height: side2H,
                  opacity: 0,
                  zIndex: 0,
                  pointerEvents: "none" as const,
                };
              default:
                return {
                  x: offset < 0 ? -(x2 + side2W + 220) : (x2 + side2W + 220),
                  y: -side2H / 2,
                  width: side2W,
                  height: side2H,
                  opacity: 0,
                  zIndex: 0,
                  pointerEvents: "none" as const,
                };
            }
          };

          return (
            <motion.div
              key={virtualIndex}
              data-offset={offset}
              onClick={handleSelectCard}
              initial={false}
              animate={getVariant()}
              transition={TRANSITION_SPRING}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                willChange: "transform",
              }}
              className={cn(
                "rounded-[28px] sm:rounded-[36px] bg-white border border-neutral-200/90 text-neutral-900 shadow-[0_12px_36px_rgba(95,109,119,0.09),0_4px_14px_rgba(95,109,119,0.06)] overflow-visible",
                !isActive && "cursor-pointer"
              )}
            >
              {/* Connector between -1 and 0 */}
              {offset === -1 && (
                <div
                  aria-hidden="true"
                  className="absolute top-0 bottom-0 flex items-center text-white pointer-events-none z-[100]"
                  style={{
                    width: 22,
                    height: isUltraWide ? 48 : 42,
                    margin: "auto 0",
                    left: "calc(100% - 1px)",
                  }}
                >
                  <svg
                    viewBox="0 0 20 37.3338"
                    preserveAspectRatio="none"
                    className="size-full fill-current overflow-visible block drop-shadow-sm"
                  >
                    <path d="M0 0C0 0 1.2422 13.5759 10 13.5759C18.7578 13.5759 20 0 20 0V37.3338C20 37.3338 18.7578 23.7578 10 23.7578C1.2422 23.7578 0 37.3338 0 37.3338V0Z" />
                  </svg>
                </div>
              )}

              {/* Connector between 0 and 1 */}
              {offset === 1 && (
                <div
                  aria-hidden="true"
                  className="absolute top-0 bottom-0 flex items-center text-white pointer-events-none z-[100]"
                  style={{
                    width: 22,
                    height: isUltraWide ? 48 : 42,
                    margin: "auto 0",
                    right: "calc(100% - 1px)",
                  }}
                >
                  <svg
                    viewBox="0 0 20 37.3338"
                    preserveAspectRatio="none"
                    className="size-full fill-current overflow-visible block drop-shadow-sm"
                  >
                    <path d="M0 0C0 0 1.2422 13.5759 10 13.5759C18.7578 13.5759 20 0 20 0V37.3338C20 37.3338 18.7578 23.7578 10 23.7578C1.2422 23.7578 0 37.3338 0 37.3338V0Z" />
                  </svg>
                </div>
              )}

              {/* Connector between -2 and -1 */}
              {offset === -2 && tier === "desktop" && (
                <div
                  aria-hidden="true"
                  className="absolute top-0 bottom-0 flex items-center text-white pointer-events-none z-[100]"
                  style={{
                    width: 18,
                    height: isUltraWide ? 34 : 28,
                    margin: "auto 0",
                    left: "calc(100% - 1px)",
                  }}
                >
                  <svg
                    viewBox="0 0 16 28"
                    preserveAspectRatio="none"
                    className="size-full fill-current overflow-visible block drop-shadow-sm"
                  >
                    <path d="M0 0C0 0 0.993759 10.1818 8 10.1818C15.0062 10.1818 16 0 16 0V28C16 28 15.0062 17.8182 8 17.8182C0.993759 17.8182 0 28 0 28V0Z" />
                  </svg>
                </div>
              )}

              {/* Connector between 1 and 2 */}
              {offset === 2 && tier === "desktop" && (
                <div
                  aria-hidden="true"
                  className="absolute top-0 bottom-0 flex items-center text-white pointer-events-none z-[100]"
                  style={{
                    width: 18,
                    height: isUltraWide ? 34 : 28,
                    margin: "auto 0",
                    right: "calc(100% - 1px)",
                  }}
                >
                  <svg
                    viewBox="0 0 16 28"
                    preserveAspectRatio="none"
                    className="size-full fill-current overflow-visible block drop-shadow-sm"
                  >
                    <path d="M0 0C0 0 0.993759 10.1818 8 10.1818C15.0062 10.1818 16 0 16 0V28C16 28 15.0062 17.8182 8 17.8182C0.993759 17.8182 0 28 0 28V0Z" />
                  </svg>
                </div>
              )}

              <div
                className="size-full overflow-hidden relative"
                style={{ borderRadius: "inherit" }}
              >
                <motion.div
                  initial={false}
                  animate={{ opacity: isActive ? 0 : 1 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className={cn(
                    "absolute inset-0 p-2",
                    isActive && "pointer-events-none"
                  )}
                >
                  <div className="size-full rounded-[20px] sm:rounded-[24px] overflow-hidden bg-neutral-100 relative">
                    <Image
                      alt={item.alt || item.author}
                      src={item.defaultImage}
                      fill
                      unoptimized
                      draggable={false}
                      style={{ objectFit: "cover" }}
                      className="size-full object-cover"
                    />
                  </div>
                </motion.div>

                <div
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    width: activeDimensions.width,
                    height: activeDimensions.height,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : offset < 0 ? -activeDimensions.width : activeDimensions.width,
                    }}
                    transition={TRANSITION_SPRING}
                    className={cn(
                      "size-full flex flex-col md:flex-row p-4 sm:p-5 md:p-6 lg:p-8 gap-4 sm:gap-5 md:gap-8",
                      !isActive && "pointer-events-none"
                    )}
                  >
                    <div className="flex-1 min-w-0 flex flex-col items-start text-start justify-between py-1 gap-3 sm:gap-4">
                      {/* Top Badges / Days */}
                      <div className="w-full flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200/80 px-3 py-1 font-mono text-xs font-bold text-[#2057ff]">
                          {item.days || item.role}
                        </span>
                        <span className="font-mono text-xs font-semibold text-neutral-400">
                          {item.id}
                        </span>
                      </div>

                      <h3
                        title={item.stat}
                        className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-neutral-950 leading-tight w-full text-start"
                      >
                        {item.stat}
                      </h3>

                      <div className="relative w-full min-w-0 my-auto py-1 text-start">
                        <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed text-start">
                          {item.quote}
                        </p>
                      </div>

                      <div className="flex min-w-0 w-full max-w-full overflow-hidden items-start justify-start">
                        <div className="flex flex-col items-start min-w-0 max-w-full">
                          <span className="w-fit inline-flex items-center justify-center rounded-full font-bold py-1.5 px-3.5 text-xs bg-neutral-900 text-white shrink-0 select-none">
                            <span className="whitespace-nowrap">
                              {item.author}
                            </span>
                          </span>

                          <span className="mt-1.5 w-fit inline-flex items-center text-xs font-medium text-neutral-500 max-w-full select-none">
                            <span title={item.role} className="truncate">
                              {item.role}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative shrink-0 overflow-hidden rounded-[20px] sm:rounded-[26px] bg-neutral-100 w-full md:w-[clamp(240px,46%,440px)] flex-1 md:flex-initial md:h-full max-h-[260px] md:max-h-none border border-neutral-200/80 shadow-md">
                      <Image
                        alt={item.alt || item.author}
                        src={item.selectedImage}
                        fill
                        unoptimized
                        draggable={false}
                        style={{ objectFit: "cover" }}
                        className="size-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div
        role="tablist"
        aria-label="Delivery framework phases"
        className="flex items-center gap-2 mt-7"
      >
        {items.map((item, idx) => {
          const isSelected = idx === activeIndex;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              data-index={idx}
              id={`carousel-tab-${idx}`}
              aria-controls="carousel-view-panel"
              onClick={handleSelectTab}
              aria-selected={isSelected}
              aria-label={`Phase ${idx + 1}`}
              tabIndex={isSelected ? 0 : -1}
              className={cn(
                "h-[9px] rounded-full overflow-hidden border-0 p-0 cursor-pointer transition-[width] duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                isSelected
                  ? "w-[90px] bg-neutral-200"
                  : "w-[12px] bg-neutral-300 hover:bg-neutral-400"
              )}
            >
              {isSelected && (
                <div
                  className="h-full rounded-full bg-[#2057ff]"
                  style={{
                    transformOrigin: "0% 50%",
                    transform: `scaleX(${progress / 100})`,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
