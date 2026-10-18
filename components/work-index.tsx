"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-context";
import { WORK_CATEGORIES } from "@/lib/portfolio-content";
import { cn } from "@/lib/utils";

const pinImg = (id: string, h: number) => `https://picsum.photos/seed/pencil-${id}/640/${h}`;

interface Pin {
  id: string;
  slug: string;
  catNameEn: string;
  catNameAr: string;
  titleEn: string;
  titleAr: string;
  clientEn: string;
  clientAr: string;
  year: string;
  height: number;
  tagsEn: string[];
  tagsAr: string[];
}

export function WorkIndex() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string | null>(null);

  const pins: Pin[] = useMemo(
    () =>
      WORK_CATEGORIES.flatMap((c) =>
        c.projects.map((p) => ({
          id: p.id,
          slug: c.slug,
          catNameEn: c.nameEn,
          catNameAr: c.nameAr,
          titleEn: p.titleEn,
          titleAr: p.titleAr,
          clientEn: p.clientEn,
          clientAr: p.clientAr,
          year: p.year,
          height: p.height,
          tagsEn: p.tagsEn,
          tagsAr: p.tagsAr,
        }))
      ),
    []
  );

  const visible = pins.filter((p) => {
    if (cat && p.slug !== cat) return false;
    const q = query.trim().toLowerCase();
    if (!q) return true;
    const hay = isRtl
      ? `${p.titleAr} ${p.clientAr} ${p.catNameAr} ${p.tagsAr.join(" ")}`.toLowerCase()
      : `${p.titleEn} ${p.clientEn} ${p.catNameEn} ${p.tagsEn.join(" ")} ${p.year}`.toLowerCase();
    return q.split(/\s+/).every((w) => hay.includes(w));
  });

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header light />

      {/* intro */}
      <section className="bg-white pb-8 pt-28 md:pt-36">
        <div className="container-custom text-center">
          <Reveal>
            <span className="inline-block rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-800 mb-4">
              {isRtl ? "أعمال بنسل" : "Pencil work"}
            </span>
            <h1 className={cn("mx-auto max-w-3xl text-4xl lg:text-6xl", isRtl ? "font-normal tracking-normal" : "font-bold leading-tight")}>
              {isRtl ? (
                <>
                  <span className="block">شغل يتكلم</span>
                  <span className="block italic font-light text-neutral-500">قبل ما نتكلم.</span>
                </>
              ) : (
                <>
                  <span className="block">Work that speaks</span>
                  <span className="block italic font-light text-neutral-500">before we do.</span>
                </>
              )}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
              {isRtl
                ? "ثلاثون مشروعا حقيقيا لعملاء حقيقيين. سوشيال وهويات ومونتاج ومواقع وتطبيقات. قلب ودوس على أي حاجة تعجبك لترى حكايتها."
                : "Thirty real projects for real clients. Social, identities, video, websites, apps. Scroll around and open anything you like to see its story."}
            </p>
          </Reveal>

          {/* Pinterest style search */}
          <Reveal delay={0.08}>
            <div className="mx-auto mt-7 flex max-w-xl items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-5 py-3.5 transition focus-within:border-neutral-900 focus-within:bg-white">
              <Search size={18} className="shrink-0 text-neutral-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isRtl ? "دوّر على مطعم، عيادة، عقارات..." : "Try restaurant, clinic, real estate..."}
                className="w-full bg-transparent text-sm font-semibold outline-none placeholder:font-normal placeholder:text-neutral-400"
                aria-label={isRtl ? "ابحث في الشغل" : "Search the work"}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear"
                  className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full bg-neutral-200 transition hover:bg-neutral-300"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </Reveal>

          {/* topic chips */}
          <Reveal delay={0.12}>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setCat(null)}
                className={cn(
                  "cursor-pointer rounded-full px-4 py-2 text-xs font-bold transition",
                  cat === null ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                )}
              >
                {isRtl ? "الكل" : "All"}
              </button>
              {WORK_CATEGORIES.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => setCat(cat === c.slug ? null : c.slug)}
                  className={cn(
                    "cursor-pointer rounded-full px-4 py-2 text-xs font-bold transition",
                    cat === c.slug ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  )}
                >
                  {isRtl ? c.nameAr : c.nameEn}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* masonry feed */}
      <section className="container-custom pb-16 md:pb-24">
        {visible.length === 0 ? (
          <div className="mx-auto max-w-md py-16 text-center">
            <p className="text-xl font-bold">{isRtl ? "مفيش حاجة بالاسم ده" : "Nothing by that name"}</p>
            <p className="mt-2 text-sm text-neutral-500">
              {isRtl ? "جرّب كلمة تانية أو دوس الكل." : "Try another word, or tap All."}
            </p>
            <button
              onClick={() => { setQuery(""); setCat(null); }}
              className="mt-5 cursor-pointer rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-700"
            >
              {isRtl ? "اعرض الكل" : "Show all"}
            </button>
          </div>
        ) : (
          <>
            <p className="mb-5 text-xs font-bold uppercase tracking-wider text-neutral-400">
              {visible.length} {isRtl ? "مشروع" : "projects"}
            </p>
            <motion.div layout className="columns-2 gap-4 md:columns-3 xl:columns-4">
              <AnimatePresence mode="popLayout">
                {visible.map((p) => (
                  <motion.div
                    layout
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-white"
                  >
                    <Link href={`/work/${p.slug}/${p.id}`} className="block" aria-label={isRtl ? p.titleAr : p.titleEn}>
                      <div className="relative w-full overflow-hidden" style={{ aspectRatio: `800 / ${p.height}` }}>
                        <Image
                          src={pinImg(p.id, Math.round((640 * p.height) / 800))}
                          alt={isRtl ? p.titleAr : p.titleEn}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.04]"
                          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />
                        <span className="absolute end-3 top-3 flex translate-y-1 items-center gap-1 rounded-full bg-white px-3.5 py-2 text-xs font-bold text-neutral-900 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                          {isRtl ? "افتح" : "Open"}
                          <ArrowUpRight size={13} />
                        </span>
                        <span className="absolute bottom-3 start-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-bold text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                          {isRtl ? p.catNameAr : p.catNameEn}
                        </span>
                      </div>
                      <div className="p-3">
                        <p className="line-clamp-2 text-[13px] font-bold leading-snug">
                          {isRtl ? p.titleAr : p.titleEn}
                        </p>
                        <p className="mt-1 truncate text-xs text-neutral-500">
                          {isRtl ? p.clientAr : p.clientEn}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}
