"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCareReducedMotion } from "@/components/pencil-care-accessibility";
import { ArrowLeft, ArrowRight, ArrowUpRight, BrainCircuit, Boxes, Check, Pause, Play, PencilRuler, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { felizModels } from "@/lib/feliz";
import { HELP_PROJECT_STORIES } from "@/components/help-editorial-data";
import { PENCIL } from "@/components/pencil-ui";
import { cn } from "@/lib/utils";

const ecosystem = [
  {
    id: "pencil",
    icon: Boxes,
    en: "Pencil",
    ar: "Pencil",
    roleEn: "The wider company and ecosystem",
    roleAr: "الشركة والمنظومة الأوسع",
    bodyEn: "The point of view connecting strategy, creative work, digital products, technology, AI and the operating relationships around them.",
    bodyAr: "الرؤية التي تربط الاستراتيجية والعمل الإبداعي والمنتجات الرقمية والتقنية والذكاء الاصطناعي والعلاقات التشغيلية المحيطة بها.",
    color: "#2563eb",
  },
  {
    id: "studio",
    icon: PencilRuler,
    en: "Pencil Studio",
    ar: "Pencil Studio",
    roleEn: "The multidisciplinary making practice",
    roleAr: "ممارسة التنفيذ متعددة التخصصات",
    bodyEn: "The people who frame, write, direct, design, build, release and continue the work across brand, product and business systems.",
    bodyAr: "الفريق الذي يصوغ ويكتب ويوجه ويصمم ويبني وينشر ويواصل العمل عبر العلامة والمنتج وأنظمة الأعمال.",
    color: "#ef4444",
  },
  {
    id: "superfeliz",
    icon: BrainCircuit,
    en: "SuperFeliz",
    ar: "SuperFeliz",
    roleEn: "The complete AI in the Feliz family",
    roleAr: "الذكاء الشامل في عائلة Feliz",
    bodyEn: "Pencil's all-domain AI layer: built to understand a complete mission, connect business, technology and creation, then lead the journey between them.",
    bodyAr: "طبقة الذكاء الاصطناعي الشاملة لدى Pencil؛ تفهم المهمة كاملة، وتربط العمل والتقنية والإبداع، ثم تقود الرحلة بينها.",
    color: "#10b981",
  },
  {
    id: "family",
    icon: Sparkles,
    en: "The Feliz family",
    ar: "عائلة Feliz",
    roleEn: "Focused intelligence for different work",
    roleAr: "ذكاء متخصص لأنواع مختلفة من العمل",
    bodyEn: "Oper thinks through business, Tech architects technology, Gen produces usable creative output, and SuperFeliz connects the full mission.",
    bodyAr: "يفكر Oper في الأعمال، ويصمم Tech البنية التقنية، وينتج Gen مخرجات إبداعية قابلة للاستخدام، بينما يربط SuperFeliz المهمة كاملة.",
    color: "#f59e0b",
  },
];

export function EcosystemStage() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const [active, setActive] = React.useState("pencil");
  const item = ecosystem.find((entry) => entry.id === active) ?? ecosystem[0];
  const Icon = item.icon;
  return (
    <div className={cn(PENCIL.card, "grid overflow-hidden lg:grid-cols-[.8fr_1.2fr]")}>
      <div className="flex min-h-[420px] flex-col justify-between border-b border-neutral-200 bg-neutral-900 p-7 text-white md:p-10 lg:border-b-0 lg:border-e">
        <AnimatePresence mode="wait">
          <motion.div key={item.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10" style={{ color: item.color }}><Icon size={25} /></span>
            <h3 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">{rtl ? item.ar : item.en}</h3>
            <p className="mt-4 text-sm font-bold" style={{ color: item.color }}>{rtl ? item.roleAr : item.roleEn}</p>
            <p className="mt-6 max-w-xl leading-8 text-white/65">{rtl ? item.bodyAr : item.bodyEn}</p>
          </motion.div>
        </AnimatePresence>
        <p className="mt-10 text-xs leading-6 text-white/40">{rtl ? "ليست علامات منفصلة؛ إنها طبقات تتعاون وفق ما يحتاجه العمل." : "Not separate labels. Layers that collaborate according to what the work requires."}</p>
      </div>
      <div className="relative grid min-h-[420px] grid-cols-2 bg-white">
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-neutral-200" />
        <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-neutral-200" />
        {ecosystem.map((entry, index) => {
          const EntryIcon = entry.icon;
          const selected = active === entry.id;
          return <button key={entry.id} onMouseEnter={() => setActive(entry.id)} onFocus={() => setActive(entry.id)} onClick={() => setActive(entry.id)} className={cn("relative flex min-h-[200px] flex-col justify-between p-6 text-start transition md:p-8", selected ? "bg-neutral-900 text-white" : "text-neutral-900 hover:bg-neutral-50")}><span className="font-mono text-[10px] font-bold opacity-40">0{index + 1}</span><div><EntryIcon size={21} style={{ color: selected ? entry.color : undefined }} className={selected ? "" : "text-neutral-400"} /><p className="mt-4 text-lg font-bold tracking-tight md:text-xl">{rtl ? entry.ar : entry.en}</p></div>{selected && <motion.span layoutId="ecosystem-mark" className="absolute inset-x-0 bottom-0 h-1 rounded-full" style={{ backgroundColor: entry.color }} />}</button>;
        })}
      </div>
    </div>
  );
}

export function ProjectStorySlider() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const reduce = useCareReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (reduce || paused) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") setIndex((value) => (value + 1) % HELP_PROJECT_STORIES.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [reduce, paused]);
  const story = HELP_PROJECT_STORIES[index];
  const labels = rtl ? story.labelsAr : story.labelsEn;
  const Previous = rtl ? ArrowRight : ArrowLeft;
  const Next = rtl ? ArrowLeft : ArrowRight;
  return (
    <div className={cn(PENCIL.card, "relative grid overflow-hidden lg:grid-cols-[1.3fr_.7fr]")}>
      <div className="relative min-h-[380px] overflow-hidden md:min-h-[520px]">
        <AnimatePresence mode="wait">
          <motion.div key={story.id} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : 0.55 }} className="absolute inset-0">
            <Image src={story.image} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 68vw" priority={index === 0} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-6 start-6 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-neutral-900">{rtl ? "تصميم وإنتاج من منظومة Pencil" : "Design and production from the Pencil ecosystem"}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex min-h-[440px] flex-col justify-between border-t border-neutral-200 bg-white p-7 md:p-10 lg:border-s lg:border-t-0">
        <div>
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs font-bold text-neutral-400">{story.index} / 04</p>
            <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">{rtl ? "منظومة تنفيذ" : "Making system"}</p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={story.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <h3 className="mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl">{rtl ? story.titleAr : story.titleEn}</h3>
              <p className="mt-5 leading-8 text-neutral-600">{rtl ? story.bodyAr : story.bodyEn}</p>
              <div className="mt-6 flex flex-wrap gap-2">{labels.map((label) => <span key={label} className={cn(PENCIL.chip, "border border-neutral-200 bg-neutral-50 text-neutral-700")}>{label}</span>)}</div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div>
          <div className="mb-6 flex gap-1.5" dir="ltr">{HELP_PROJECT_STORIES.map((item, itemIndex) => <button key={item.id} aria-label={rtl ? `عرض ${itemIndex + 1}` : `View ${itemIndex + 1}`} aria-pressed={itemIndex === index} onClick={() => setIndex(itemIndex)} className="flex h-11 flex-1 items-center"><span className="block h-1.5 w-full overflow-hidden rounded-full bg-neutral-200"><motion.span className="block h-full rounded-full bg-neutral-900" animate={{ scaleX: itemIndex === index ? 1 : 0 }} style={{ transformOrigin: rtl ? "right" : "left" }} /></span></button>)}</div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button aria-label={rtl ? "السابق" : "Previous"} onClick={() => setIndex((index - 1 + HELP_PROJECT_STORIES.length) % HELP_PROJECT_STORIES.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"><Previous size={17} /></button>
              <button aria-label={rtl ? "التالي" : "Next"} onClick={() => setIndex((index + 1) % HELP_PROJECT_STORIES.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"><Next size={17} /></button>
              <button aria-pressed={paused} aria-label={paused ? (rtl ? "استئناف السلايدر" : "Resume slideshow") : (rtl ? "إيقاف السلايدر" : "Pause slideshow")} title={paused ? (rtl ? "استئناف السلايدر" : "Resume slideshow") : (rtl ? "إيقاف السلايدر" : "Pause slideshow")} onClick={() => setPaused(!paused)} className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300">{paused ? <Play size={17} /> : <Pause size={17} />}</button>
            </div>
            <Link href="/work" className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-bold transition hover:bg-neutral-100">{rtl ? "الأعمال" : "View work"}<ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FelizFamilyStage() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const reduce = useCareReducedMotion();
  const [slug, setSlug] = React.useState("superfeliz");
  const model = felizModels.find((entry) => entry.slug === slug) ?? felizModels[0];
  const Next = rtl ? ArrowLeft : ArrowRight;
  return (
    <div className="relative overflow-hidden rounded-3xl bg-neutral-950 text-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 10%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 10%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/2 h-[420px] w-[720px] max-w-none -translate-x-1/2 rounded-full blur-[140px] transition-colors duration-700"
        style={{ backgroundColor: `${model.accent}2e` }}
        aria-hidden="true"
      />
      <div className="relative p-7 md:p-10">
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]" role="tablist" aria-label={rtl ? "نماذج Feliz" : "Feliz models"}>
          {felizModels.map((entry) => {
            const selected = slug === entry.slug;
            return (
              <button
                key={entry.slug}
                role="tab"
                aria-selected={selected}
                onClick={() => setSlug(entry.slug)}
                className={cn(
                  "flex shrink-0 cursor-pointer items-center gap-2.5 rounded-full border py-2 pe-4 ps-2.5 text-sm font-bold transition",
                  selected ? "border-white bg-white text-neutral-950" : "border-white/15 text-white/65 hover:border-white/30 hover:text-white"
                )}
              >
                <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full" style={{ backgroundColor: selected ? entry.accent : `${entry.accent}26` }}>
                  <Image src="/macosdock/superfeliz.svg" alt="" width={22} height={22} className="object-contain" />
                </span>
                <span dir={rtl ? "rtl" : "ltr"}>{rtl ? entry.nameAr : entry.name}</span>
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={model.slug}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="mt-9 grid gap-6 lg:grid-cols-[1.05fr_.95fr]"
          >
            <div className="flex min-w-0 flex-col items-start">
              <p className="flex flex-wrap items-center gap-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white/40">
                <span>{model.version}</span>
                <span className={cn("rounded-full px-3 py-1", model.tier === "Free" ? "bg-emerald-400/15 text-emerald-300" : "bg-white text-neutral-950")}>
                  {model.tier === "Free" ? (rtl ? "مجاني" : "Free") : "PRO"}
                </span>
              </p>
              <h3 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">{rtl ? model.nameAr : model.name}</h3>
              <p className="mt-3 text-lg font-bold" style={{ color: model.accent }}>{rtl ? model.taglineAr : model.taglineEn}</p>
              <p className="mt-6 leading-8 text-white/60">{rtl ? model.descAr : model.descEn}</p>
              <div className="mt-7 flex flex-wrap items-center gap-2">
                {(rtl ? model.formulaAr : model.formulaEn).map((step, index) => (
                  <React.Fragment key={step}>
                    <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white">{step}</span>
                    {index < model.formulaEn.length - 1 && <Next size={13} className="shrink-0 text-white/30" />}
                  </React.Fragment>
                ))}
              </div>
              <Link href="/superfeliz" className="group mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-neutral-950 transition hover:bg-neutral-200">
                {rtl ? "ادخل عالم SuperFeliz" : "Enter SuperFeliz"}<ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="relative min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-8">
              <div className="absolute -top-24 left-1/2 h-64 w-64 max-w-none -translate-x-1/2 rounded-full blur-[100px] transition-colors duration-700" style={{ backgroundColor: `${model.accent}40` }} aria-hidden="true" />
              <div className="relative flex flex-col items-center py-3 text-center">
                <span className="flex h-24 w-24 items-center justify-center rounded-[1.75rem] border border-white/10 bg-black/40 shadow-2xl">
                  <Image src="/macosdock/superfeliz.svg" alt="" width={64} height={64} />
                </span>
                <p className="mt-5 text-xl font-black tracking-tight">{rtl ? model.nameAr : model.name}</p>
                <p className="mt-1.5 text-sm font-bold" style={{ color: model.accent }}>{rtl ? model.roleAr : model.roleEn}</p>
              </div>
              <div className="relative mt-4 space-y-1 border-t border-white/10 pt-4">
                {(rtl ? model.scopeAr : model.scopeEn).slice(0, 6).map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-bold text-white/85 transition hover:bg-white/[0.05]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${model.accent}22`, color: model.accent }}><Check size={13} /></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
