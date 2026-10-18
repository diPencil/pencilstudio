"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ZoomIn,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { MethodHeading } from "@/components/method/method-heading";
import { WorkStreamHero } from "@/components/work-stream-hero";
import { useLanguage } from "@/components/language-context";
import { WORK_CATEGORIES, type WorkCategory } from "@/lib/portfolio-content";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { cn } from "@/lib/utils";

const workImg = (id: string, w: number, h: number) => `https://picsum.photos/seed/pencil-${id}/${w}/${h}`;

// first two sentences only, keeps the hero sub line short
const short = (s: string) => {
  const parts = s.split(/(?<=[.!?؟])\s+/);
  return parts.slice(0, 2).join(" ");
};

export function WorkDetail({ category }: { category: WorkCategory }) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;

  const allTags = useMemo(
    () => Array.from(new Set(category.projects.flatMap((p) => (isRtl ? p.tagsAr : p.tagsEn)))),
    [category, isRtl]
  );
  const [tag, setTag] = useState<string | null>(null);

  const visible = tag
    ? category.projects.filter((p) => (isRtl ? p.tagsAr : p.tagsEn).includes(tag))
    : category.projects;

  const others = WORK_CATEGORIES.filter((c) => c.slug !== category.slug);

  const egp = new Intl.NumberFormat("en-US").format(Math.round(category.priceFromUsd * 50.5));

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header />

      {/* HERO — image stream corridor over our own work */}
      <WorkStreamHero
        images={category.projects.map((p) => ({
          src: workImg(p.id, 480, 312),
          alt: isRtl ? p.titleAr : p.titleEn,
        }))}
      >
        <div className="container-custom w-full pb-16 pt-28 text-center md:pb-24 md:pt-36">
          <Reveal>
            <nav className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold tracking-wide text-white/55">
              <Link href="/" className="transition hover:text-white">{isRtl ? "الرئيسية" : "Home"}</Link>
              <span aria-hidden>/</span>
              <Link href="/work" className="transition hover:text-white">{isRtl ? "شغلنا" : "Work"}</Link>
              <span aria-hidden>/</span>
              <span className="text-white">{isRtl ? category.nameAr : category.nameEn}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[11px] font-bold text-white/75 backdrop-blur-md">
              {isRtl ? category.nameAr : category.nameEn}
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              <span className="block">{isRtl ? category.nameAr : category.nameEn}</span>
              <span className="block font-light italic text-white/55">
                {isRtl ? category.taglineAr : category.taglineEn}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/65">
              {short(isRtl ? category.introAr : category.introEn)}
            </p>
            <p className="mx-auto mt-3 text-xs font-bold text-white/45" dir="ltr">
              ${category.priceFromUsd}+ · {isRtl ? category.durationAr : category.durationEn}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:info@dipencil.com"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200"
              >
                {isRtl ? "ابدأ مشروعا مشابها" : "Start a project like this"}
                <NextIcon size={15} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                {isRtl ? "شاهد المعرض" : "Browse the gallery"}
              </a>
            </div>
          </Reveal>
        </div>
      </WorkStreamHero>

      {/* GALLERY */}
      <section id="gallery" className="container-custom scroll-mt-24 py-14 md:py-20">
        <MethodHeading
          badge={isRtl ? "المعرض" : "The gallery"}
          title={isRtl ? "شغل حقيقي" : "Real work,"}
          accent={isRtl ? "لعملاء حقيقيين." : "real clients."}
          description={
            isRtl
              ? "كل قطعة تحتها حكاية ورقم. دوس على أي واحدة لتراها كاملة."
              : "Every piece has a story and a number behind it. Tap any piece to see it fully."
          }
        />

        {/* filters */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            onClick={() => setTag(null)}
            className={cn(
              "shrink-0 cursor-pointer rounded-full px-4 py-2 text-xs font-bold transition",
              tag === null ? "bg-neutral-900 text-white" : "border border-neutral-300 bg-white text-neutral-600 hover:border-neutral-900"
            )}
          >
            {isRtl ? "الكل" : "All"} · {category.projects.length}
          </button>
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={cn(
                "shrink-0 cursor-pointer rounded-full px-4 py-2 text-xs font-bold transition",
                tag === t ? "bg-neutral-900 text-white" : "border border-neutral-300 bg-white text-neutral-600 hover:border-neutral-900"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* masonry */}
        <motion.div layout className="mt-6 columns-2 gap-4 md:columns-3 xl:columns-4">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.figure
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-neutral-200 bg-white"
              >
                <Link href={`/work/${category.slug}/${p.id}`} className="block w-full text-start" aria-label={isRtl ? p.titleAr : p.titleEn}>
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: `800 / ${p.height}` }}>
                    <Image
                      src={workImg(p.id, 640, Math.round((640 * p.height) / 800))}
                      alt={isRtl ? p.titleAr : p.titleEn}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                    <span className="absolute end-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-neutral-900 opacity-0 transition group-hover:opacity-100">
                      <ZoomIn size={15} />
                    </span>
                  </div>
                  <figcaption className="p-4">
                    <p className="text-sm font-bold leading-snug">{isRtl ? p.titleAr : p.titleEn}</p>
                    <p className="mt-1 text-xs text-neutral-500">
                      {isRtl ? p.clientAr : p.clientEn} · <span dir="ltr">{p.year}</span>
                    </p>
                  </figcaption>
                </Link>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="bg-neutral-900 py-14 text-white md:py-20">
        <div className="container-custom">
          <MethodHeading
            dark
            badge={isRtl ? "كيف نشتغل" : "How we work"}
            title={isRtl ? "نفس العناية" : "Same care,"}
            accent={isRtl ? "كل مرة." : "every time."}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {category.steps.map((s, i) => (
              <Reveal key={s.tEn} delay={0.05 * i}>
                <div className="h-full rounded-2xl border border-white/12 bg-white/[0.04] p-6">
                  <span className="text-4xl font-bold text-white/15" dir="ltr">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-bold">{isRtl ? s.tAr : s.tEn}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{isRtl ? s.dAr : s.dEn}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE + NEXT */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-custom">
          <div className="rounded-3xl bg-neutral-100 p-8 md:p-12">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                    {isRtl ? "تبدأ من هنا" : "Starts from here"}
                  </p>
                  <p className="mt-2 text-4xl font-bold md:text-5xl" dir="ltr">
                    ${category.priceFromUsd}+
                    <span className="ms-2 align-middle text-sm font-bold text-neutral-400">≈ {egp} ج.م</span>
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
                    {isRtl
                      ? "السعر النهائي ثابت بعد مكالمة عشرين دقيقة. لا مفاجآت في النص."
                      : "Final quote is fixed after a twenty minute call. No surprises midway."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:info@dipencil.com"
                    className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-neutral-700"
                  >
                    {isRtl ? "ابدأ مشروعا مشابها" : "Start a project like this"}
                    <NextIcon size={15} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </a>
                  <a
                    href="https://wa.me/201003778273"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-bold transition hover:border-neutral-900"
                  >
                    <WhatsAppIcon size={17} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mb-5 mt-12 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                {isRtl ? "شاهد باقي الشغل" : "See the rest of the work"}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/work/${o.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:border-neutral-900"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={workImg(o.projects[0].id, 600, 375)}
                        alt=""
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <span className="absolute bottom-3 start-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-neutral-900">
                        {o.projects.length} {isRtl ? "مشاريع" : "projects"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2 p-4">
                      <p className="text-sm font-bold leading-snug">{isRtl ? o.nameAr : o.nameEn}</p>
                      <ArrowUpRight size={16} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>

            <div className="mt-8">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-bold transition hover:border-neutral-900"
              >
                <BackIcon size={15} />
                {isRtl ? "كل الشغل" : "All work"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
