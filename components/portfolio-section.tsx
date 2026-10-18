"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-context";
import { WORK_CATEGORIES, type WorkSlug } from "@/lib/portfolio-content";

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
  const [activeTab, setActiveTab] = useState<WorkSlug>("social-media");
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const router = useRouter();

  const activeCat = WORK_CATEGORIES.find((c) => c.slug === activeTab) ?? WORK_CATEGORIES[0];

  // big animated title: types itself once per tab switch
  const fullTitle = isRtl ? activeCat.nameAr : activeCat.nameEn;
  const [typed, setTyped] = useState(fullTitle.length);

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
  }, [activeTab]);

  // First click previews the tab, second click on the active tab opens its page.
  const handleTab = (slug: WorkSlug) => {
    if (slug === activeTab) {
      router.push(`/work/${slug}`);
    } else {
      setActiveTab(slug);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="work">
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
              src={coverSrc(cat.heroSeed)}
              alt={`${isRtl ? cat.nameAr : cat.nameEn} background`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="absolute top-[120px] left-0 right-0 z-10">
        <div className="container-custom text-white text-start" dir={isRtl ? "rtl" : "ltr"}>
          <Reveal>
            <div>
              <h2
                className={
                  isRtl
                    ? "font-normal mb-5 text-4xl lg:text-6xl tracking-normal"
                    : "font-bold mb-5 text-5xl md:text-7xl"
                }
              >
                {fullTitle.slice(0, typed)}
                <span aria-hidden className="ms-1 inline-block h-[0.9em] w-[4px] translate-y-[8px] animate-pulse bg-white/90" />
              </h2>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab + "-desc"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-base font-light italic text-white/90 leading-relaxed max-w-2xl md:text-lg">
                    {isRtl ? activeCat.taglineAr : activeCat.taglineEn}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 line-clamp-2 md:text-[15px]">
                    {isRtl ? activeCat.introAr : activeCat.introEn}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container-custom">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {WORK_CATEGORIES.map((cat) => (
                <motion.button
                  key={cat.slug}
                  className={cn(
                    "px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-md cursor-pointer",
                    activeTab === cat.slug
                      ? "bg-white text-neutral-900"
                      : "bg-white/20 text-white hover:bg-white/30",
                  )}
                  onClick={() => handleTab(cat.slug)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isRtl ? cat.nameAr : cat.nameEn}
                </motion.button>
              ))}
            </div>
            <p className="mt-4 text-center text-[11px] font-semibold text-white/60">
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
