"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "@/components/shared/motion/reveal";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-context";
import { WORK_CATEGORIES, type WorkSlug } from "@/lib/portfolio/portfolio-content";

/**
 * Original materials-section idea, untouched:
 * full background per tab, animated title, one short line under it,
 * pills at the bottom. Only additions: 5 tabs + two-click to open pages.
 *
 * TAB BACKGROUNDS: each category has a `heroSeed` in lib/portfolio-content.ts.
 * Replace the seed with a local path, e.g. heroSeed: "/work/social-media.jpg"
 * (put the file in public/work/).
 */
const coverSrc = (seed: string) =>
  seed.startsWith("/") ? seed : `https://picsum.photos/seed/${seed}/1600/900`;

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<WorkSlug>("corporate-identity");
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const router = useRouter();

  const activeCat = WORK_CATEGORIES.find((c) => c.slug === activeTab) ?? WORK_CATEGORIES[0];

  // big animated title: types itself once per tab switch
  const fullTitle = isRtl ? activeCat.nameAr : activeCat.nameEn;
  const [typed, setTyped] = useState(fullTitle.length);

  // Auto-advance infinitely every 5 seconds (with pause on hover)
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = WORK_CATEGORIES.findIndex((c) => c.slug === prev);
        const nextIndex = (currentIndex + 1) % WORK_CATEGORIES.length;
        return WORK_CATEGORIES[nextIndex].slug;
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, activeTab]);

  // Floating bubble message logic above active tab
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const reopenTimerRef = useRef<number | null>(null);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    if (reopenTimerRef.current) window.clearTimeout(reopenTimerRef.current);
    // Reopen after 6 seconds if dismissed
    reopenTimerRef.current = window.setTimeout(() => {
      setIsPopupVisible(true);
    }, 6000);
  };

  useEffect(() => {
    return () => {
      if (reopenTimerRef.current) window.clearTimeout(reopenTimerRef.current);
    };
  }, []);

  useEffect(() => {
    setTyped(0);
    if (fullTitle.length === 0) return;
    const timer = window.setInterval(() => {
      setTyped((v) => {
        if (v >= fullTitle.length) {
          window.clearInterval(timer);
          return v;
        }
        return v + 1;
      });
    }, fullTitle.length > 18 ? 30 : 50);
    return () => window.clearInterval(timer);
  }, [activeTab, fullTitle]);

  // First click previews the tab, second click on the active tab opens its page.
  const handleTab = (slug: WorkSlug) => {
    if (slug === activeTab) {
      router.push(`/work/${slug}`);
    } else {
      setActiveTab(slug);
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden" id="work">
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        {WORK_CATEGORIES.map((cat) => (
          <motion.div
            key={cat.slug}
            className="absolute inset-0"
            initial={{ opacity: cat.slug === activeTab ? 1 : 0 }}
            animate={{ opacity: cat.slug === activeTab ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={coverSrc(isRtl && cat.heroSeedAr ? cat.heroSeedAr : cat.heroSeed)}
              alt={`${isRtl ? cat.nameAr : cat.nameEn} background`}
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        ))}
      </div>

      {/* Top Header & Intro text */}
      <div className="relative z-10 pt-24 sm:pt-28 md:pt-36 px-4 sm:px-6">
        <div className="container-custom text-start" dir={isRtl ? "rtl" : "ltr"}>
          <Reveal>
            <div>
              <h2
                className={
                  isRtl
                    ? "font-normal mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-6xl tracking-normal text-neutral-900"
                    : "font-normal mb-3 sm:mb-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-neutral-900 tracking-tight"
                }
              >
                {fullTitle.slice(0, typed)}
                <span aria-hidden className="ms-1 inline-block h-[0.9em] w-[3px] sm:w-[4px] translate-y-[4px] sm:translate-y-[8px] animate-pulse bg-[#2057ff]" />
              </h2>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab + "-desc"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-sm sm:text-base md:text-lg font-semibold italic text-neutral-900 leading-relaxed max-w-xl">
                    {isRtl ? activeCat.taglineAr : activeCat.taglineEn}
                  </p>
                  <p className="mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm font-medium leading-relaxed text-black/85 line-clamp-2 md:line-clamp-3">
                    {isRtl ? activeCat.introAr : activeCat.introEn}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="relative z-20 pb-6 sm:pb-8 pt-4 overflow-visible">
        <div className="container-custom overflow-visible">
          <Reveal delay={0.1}>
            <div
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2 py-2 overflow-visible"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {WORK_CATEGORIES.map((cat) => {
                const isActive = activeTab === cat.slug;
                return (
                  <div key={cat.slug} className="relative flex-shrink-0 flex items-center justify-center overflow-visible">
                    <AnimatePresence>
                      {isActive && isPopupVisible && (
                        <motion.div
                          key={`popup-${cat.slug}`}
                          initial={{ opacity: 0, y: 6, scale: 0.85, x: "-50%" }}
                          animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                          exit={{ opacity: 0, y: 4, scale: 0.85, x: "-50%" }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          onClick={() => handleTab(cat.slug)}
                          className="absolute bottom-full mb-2.5 left-1/2 z-50 pointer-events-auto whitespace-nowrap shadow-xl flex items-center gap-1.5 px-3 py-1 bg-white text-neutral-900 border border-neutral-200/90 text-[10px] sm:text-[11px] font-semibold select-none rounded-full cursor-pointer hover:bg-neutral-50 active:scale-95"
                          style={{
                            borderRadius: isRtl ? "9999px 9999px 9999px 0px" : "9999px 9999px 0px 9999px",
                          }}
                        >
                          <span className="flex items-center gap-1.5">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2057ff] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2057ff]"></span>
                            </span>
                            <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-900 tracking-tight leading-none">
                              {isRtl ? "دوسة لفتح الأعمال" : "Tap to open works"}
                            </span>
                          </span>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClosePopup();
                            }}
                            className="p-0.5 -mr-0.5 hover:bg-neutral-100 text-neutral-400 hover:text-neutral-900 rounded-full transition-colors cursor-pointer"
                            aria-label="Close"
                          >
                            <X size={11} strokeWidth={2.5} />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.button
                      className={cn(
                        "px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm rounded-full font-medium transition-all duration-300 backdrop-blur-md cursor-pointer whitespace-nowrap",
                        isActive
                          ? "bg-[#2057ff] text-white shadow-lg shadow-blue-500/25"
                          : "bg-white/80 text-neutral-800 border border-neutral-300/60 shadow-xs hover:bg-white hover:text-black",
                      )}
                      onClick={() => handleTab(cat.slug)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isRtl ? cat.nameAr : cat.nameEn}
                    </motion.button>
                  </div>
                );
              })}
            </div>
            <p className="mt-2 sm:mt-4 text-center text-[10px] sm:text-[11px] font-semibold text-neutral-600 px-4">
              {isRtl
                ? "أول دوسة تعرض التابة. دوسة تانية على نفس التابة تفتح صفحتها."
                : "First tap previews the tab. Tapping the active tab again opens its page."}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
