"use client";

import { Fragment, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  PhoneCall,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/motion/reveal";
import { SectionHeading } from "@/components/shared/typography/section-heading";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import { PencilButton } from "@/components/ui/pencil-button";
import { SuperfelizStackSection } from "./superfeliz-stack-section";
import { SuperfelizModelsCarousel } from "./superfeliz-models-carousel";
import { SuperfelizJourneySection } from "./superfeliz-journey-section";
import { SuperfelizPhilosophySection } from "./superfeliz-philosophy-section";
import { SuperfelizProCta } from "./superfeliz-pro-cta";
import { SuperfelizFaqSection } from "./superfeliz-faq-section";
import { useLanguage } from "@/components/language-context";
import { felizModels, felizJourney, felizFaqs, type FelizModel } from "@/lib/feliz/feliz";
import { cn } from "@/lib/utils";
import { LazyDotLottie } from "@/components/shared/media/lazy-dot-lottie";

const PRO_CROWN_LOTTIE = "https://lottie.host/4531a6de-9d03-4730-a036-9f3eb7aa216d/hbQIg95we5.lottie";

function ProCrownLottie({ size = 24, width, height }: { size?: number; width?: number; height?: number }) {
  return (
    <span className="inline-flex items-center justify-center shrink-0 overflow-hidden" style={{ width: width ?? size, height: height ?? size }}>
      <LazyDotLottie
        src={PRO_CROWN_LOTTIE}
        autoplay
        loop
        className="h-full w-full"
        aria-hidden="true"
      />
    </span>
  );
}

/* Console pill icon tint per model. SuperFeliz keeps its natural colors. */
const PILL_ICON_FILTER: Record<string, string | undefined> = {
  oper: "hue-rotate(-60deg) saturate(1.5)",
  tech: "hue-rotate(150deg) saturate(1.5)",
  gen: "hue-rotate(195deg) saturate(1.6)",
  superfeliz: undefined,
};

const DOSSIER_STYLES = `
  .dossier-paper-ltr {
    background-color: #FFFDF6;
    background-image:
      linear-gradient(to right, transparent 0, transparent 46px, rgba(220, 38, 38, 0.4) 46px, rgba(220, 38, 38, 0.4) 48px, transparent 48px),
      repeating-linear-gradient(to bottom, transparent 0, transparent 27px, rgba(37, 99, 235, 0.14) 27px, rgba(37, 99, 235, 0.14) 28px);
  }
  .dossier-paper-rtl {
    background-color: #FFFDF6;
    background-image:
      linear-gradient(to left, transparent 0, transparent 46px, rgba(220, 38, 38, 0.4) 46px, rgba(220, 38, 38, 0.4) 48px, transparent 48px),
      repeating-linear-gradient(to bottom, transparent 0, transparent 27px, rgba(37, 99, 235, 0.14) 27px, rgba(37, 99, 235, 0.14) 28px);
  }
  .dossier-holes {
    position: relative;
  }
  .dossier-holes::before {
    content: "";
    position: absolute;
    top: 22px;
    bottom: 22px;
    inset-inline-start: 13px;
    width: 14px;
    background-image: radial-gradient(circle at 50% 50%, #DCE8FB 5px, rgba(11, 11, 11, 0.15) 5.5px, transparent 7px);
    background-size: 14px 76px;
    background-repeat: repeat-y;
  }
`;

const TICKER_STYLES = `@keyframes feliz-tick {
  to {
    transform: translateX(-50%);
  }
}
.feliz-ticker-track {
  animation: feliz-tick 30s linear infinite;
}
.feliz-ticker-track:hover {
  animation-play-state: paused;
}
`;


function TierBadge({ tier, onDark = false }: { tier: FelizModel["tier"]; onDark?: boolean }) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const free = tier === "Free";
  if (!free) {
    return (
      <span className="inline-flex min-h-[24px] min-w-[64px] items-center justify-center" aria-label="PRO">
        <ProCrownLottie width={64} height={24} />
      </span>
    );
  }
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider",
        "bg-emerald-100 text-emerald-800"
      )}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {isRtl ? "مجاني" : tier}
    </span>
  );
}

function FormulaFlow({ steps, dark = false }: { steps: string[]; dark?: boolean }) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <Fragment key={step}>
          <span
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-bold",
              dark ? "border-white/15 bg-white/10 text-white" : "border-neutral-300 bg-white text-neutral-800"
            )}
            dir={isRtl ? "rtl" : "ltr"}
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <NextIcon size={13} className={cn("shrink-0", dark ? "text-white/40" : "text-neutral-400")} />
          )}
        </Fragment>
      ))}
    </div>
  );
}

function FamilyShowcase() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [slug, setSlug] = useState("oper");
  const model = felizModels.find((m) => m.slug === slug) ?? felizModels[0];
  const flagship = model.slug === "superfeliz";
  const pro = model.tier === "PRO";

  return (
    <div className="mt-10">
      {/* Model switch */}
      <div className="flex gap-1 overflow-x-auto rounded-[1.75rem] border border-neutral-200 bg-white p-2 shadow-[0_18px_40px_-24px_rgba(11,11,11,0.25)]" role="tablist" aria-label="Feliz models">
        {felizModels.map((m) => {
          const selected = m.slug === slug;
          return (
            <button
              key={m.slug}
              role="tab"
              aria-selected={selected}
              onClick={() => setSlug(m.slug)}
              className={cn(
                "relative min-w-[210px] flex-1 cursor-pointer rounded-2xl px-3 py-3 text-start outline-none transition-colors lg:min-w-0",
                selected ? "text-white" : "text-neutral-600 hover:bg-neutral-100"
              )}
            >
              {selected && (
                <motion.span
                  layoutId="model-tab-bg"
                  className="absolute inset-0 rounded-2xl bg-neutral-900"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative flex items-center gap-2.5">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl"
                  style={{
                    backgroundColor: selected ? "#FFFFFF" : `${m.accent}1F`,
                    color: selected ? "#FFFFFF" : m.accent,
                  }}
                >
                  <Image
                    src="/macosdock/superfeliz.svg"
                    alt=""
                    width={32}
                    height={32}
                    style={{ width: "72%", height: "72%" }}
                    className="object-contain"
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-black" dir={isRtl ? "rtl" : "ltr"}>
                    {isRtl ? m.nameAr : m.name}
                  </span>
                  <span className={cn("mt-0.5 block truncate text-[11px] font-semibold", selected ? "text-white/60" : "text-neutral-500")}>
                    {isRtl ? m.roleAr : m.roleEn}
                  </span>
                </span>
                <TierBadge tier={m.tier} onDark={selected} />
              </span>
            </button>
          );
        })}
      </div>

      {/* Open folder */}
      <AnimatePresence mode="wait">
        <motion.div
          key={model.slug}
          id={`model-${model.slug}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mt-4 scroll-mt-24 rounded-3xl border border-[#B9CFF3] bg-[#DCE8FB] p-4 shadow-[0_40px_80px_-30px_rgba(11,11,11,0.28)] sm:p-6 md:p-8"
        >
          {/* Stamp - PRO replaced by moving lottie without board */}
          <motion.span
            initial={{ scale: 2.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 8 }}
            transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.45 }}
            className={cn(
              "absolute -top-4 end-6 z-20 flex items-center justify-center",
              pro ? "" : "rounded-lg border-[3px] border-emerald-600 bg-white/90 px-4 py-1.5 text-sm font-black uppercase tracking-[0.18em] text-emerald-700"
            )}
          >
            {pro ? <ProCrownLottie size={42} /> : isRtl ? "مجاني" : "Free"}
            {!pro && " ✓"}
          </motion.span>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Voice paper */}
            <div className={cn("dossier-holes overflow-hidden rounded-xl shadow-[0_18px_40px_-20px_rgba(11,11,11,0.35)]", isRtl ? "dossier-paper-rtl" : "dossier-paper-ltr")}>
              <div className="ms-8 p-6 sm:ms-10 sm:p-8">
                <span className="inline-block rounded-full border border-neutral-900/15 bg-white px-3 py-1 text-[11px] font-bold text-neutral-700">
                  {isRtl ? "صوت النموذج" : "The model's voice"}
                </span>
                <p className="mt-4 text-[15px] font-semibold leading-[28px] text-neutral-700">
                  <span className="mb-1 block text-[11px] font-black uppercase tracking-[0.18em] text-neutral-400">
                    {isRtl ? "أنت" : "You"}
                  </span>
                  {isRtl ? model.exampleQAr : model.exampleQEn}
                </p>
                <div className="mt-4 flex items-start gap-2.5 border-t border-dashed border-neutral-900/15 pt-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg"
                    style={{ backgroundColor: `${model.accent}1F`, color: model.accent }}
                  >
                    <Image
                      src="/macosdock/superfeliz.svg"
                      alt=""
                      width={28}
                      height={28}
                      style={{ width: "75%", height: "75%" }}
                      className="object-contain"
                    />
                  </span>
                  <p className="text-sm font-medium leading-[28px] text-neutral-800">
                    {isRtl ? model.exampleAAr : model.exampleAEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Spec sheet */}
            <div className="rounded-xl border border-neutral-900/10 bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-2xl font-black tracking-tight text-neutral-900 md:text-3xl" dir={isRtl ? "rtl" : "ltr"}>
                  {isRtl ? model.nameAr : model.name}
                </h3>
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-bold text-neutral-500" dir="ltr">
                  {model.version}
                </span>
              </div>
              <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-neutral-500">
                {isRtl ? model.roleAr : model.roleEn}
              </p>
              <p className="mt-3 text-lg font-light italic text-neutral-500">
                {isRtl ? model.taglineAr : model.taglineEn}
              </p>

              <div className="mt-5">
                <FormulaFlow steps={isRtl ? model.formulaAr : model.formulaEn} />
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {(isRtl ? model.scopeAr : model.scopeEn).map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[13px] font-medium leading-relaxed text-neutral-700">
                    <Check size={14} strokeWidth={3} className="mt-1 shrink-0 text-emerald-600" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-neutral-50 p-4">
                <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  {isRtl ? model.chipsLabelAr : model.chipsLabelEn}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {(isRtl ? model.chipsAr : model.chipsEn).map((chip) => (
                    <span key={chip} className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-neutral-600">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-[13px] font-bold leading-relaxed text-neutral-900">
                {isRtl ? model.positioningAr : model.positioningEn}
              </p>

              <div className="mt-5">
                <PencilButton
                  href="/askfeliz"
                  iconType="superfeliz"
                  variant="primary"
                  size="default"
                  hoverLabel={isRtl ? "جرّب فيليز الآن ←" : "Try Feliz Now →"}
                >
                  {model.tier === "Free"
                    ? isRtl
                      ? `جرّب ${model.nameAr} مجاناً`
                      : `Try ${model.name} free`
                    : isRtl
                      ? "اطلب الاحترافي"
                      : "Request PRO access"}
                </PencilButton>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function SuperFelizPage() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSlug, setActiveSlug] = useState("superfeliz");
  const activeModel = felizModels.find((m) => m.slug === activeSlug) ?? felizModels[3];
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;
  const router = useRouter();

  const goAsk = () => {
    router.push("/askfeliz");
  };

  const tickerItems = felizModels.flatMap((m) => [
    isRtl ? m.nameAr : m.name,
    ...(isRtl ? m.formulaAr : m.formulaEn),
    m.tier,
  ]);

/* Ambient particles for the animated hero backdrop - deterministic to avoid hydration mismatch */
  const heroParticles = useMemo(() => {
    const particles: Array<{
      id: number;
      left: number;
      top: number;
      size: number;
      duration: number;
      delay: number;
      drift: number;
      peak: number;
    }> = [];
    // Fixed seed for deterministic generation
    let seed = 0x2b5b4a3c;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 0x100000000;
    };
    for (let i = 0; i < 16; i++) {
      particles.push({
        id: i,
        left: rand() * 100,
        top: 20 + rand() * 70,
        size: 1.5 + rand() * 2.5,
        duration: 7 + rand() * 8,
        delay: rand() * 8,
        drift: (rand() - 0.5) * 70,
        peak: 0.3 + rand() * 0.5,
      });
    }
    return particles;
  }, []);

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-neutral-900 text-white">
        <style>{TICKER_STYLES}</style>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse 85% 60% at 50% 32%, black 15%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 85% 60% at 50% 32%, black 15%, transparent 75%)",
          }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute left-1/2 top-[-220px] h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-[#2563EB]/25 blur-[150px]"
          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute right-[4%] top-[30%] h-[340px] w-[340px] rounded-full bg-emerald-500/20 blur-[130px]"
          animate={{ y: [0, -40, 0], x: [0, -30, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-[8%] left-[6%] h-[300px] w-[300px] rounded-full bg-violet-500/20 blur-[130px]"
          animate={{ y: [0, 35, 0], x: [0, 30, 0], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        {/* Rotating color sweep */}
        <motion.div
          className="absolute left-1/2 top-[-30%] h-[760px] w-[760px]"
          style={{
            x: "-50%",
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(80,140,255,0.20) 60deg, transparent 130deg, transparent 200deg, rgba(52,211,153,0.14) 260deg, transparent 330deg)",
            filter: "blur(80px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
        {/* Light shimmer band */}
        <motion.div
          className="absolute top-[-20%] h-[140%] w-36 rotate-12 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent blur-2xl"
          animate={{ left: ["-12%", "106%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
          aria-hidden="true"
        />
        {/* Rising particles */}
        {heroParticles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -160], x: [0, p.drift], opacity: [0, p.peak, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
            aria-hidden="true"
          />
        ))}
        <motion.div
          className="absolute bottom-[-160px] end-[4%] h-[420px] w-[420px] rounded-full bg-emerald-500/15 blur-[140px]"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <div className="container-custom relative z-10 pb-16 pt-28 text-center md:pb-20 md:pt-40">
          <Reveal>
            <nav className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold tracking-wide text-white/60">
              <Link href="/" className="transition hover:text-white">
                {isRtl ? "الرئيسية" : "Home"}
              </Link>
              <span aria-hidden>/</span>
              <span className="text-white">SuperFeliz</span>
            </nav>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 pe-4 ps-2 text-[11px] font-bold backdrop-blur-md">
                <Image src="/macosdock/superfeliz.svg" alt="" width={22} height={22} className="object-contain" />
                {isRtl ? "سوبر فيليز - عائلة بينسل للذكاء الاصطناعي" : "SuperFeliz - The Pencil AI family"}
              </span>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1.5 text-[11px] font-bold text-emerald-300" dir={isRtl ? "rtl" : "ltr"}>
                    {isRtl ? "2 مجاني" : "2 Free"}
                  </span>
                  <span className="inline-flex min-h-[28px] items-center gap-1.5 text-[11px] font-black text-white" dir={isRtl ? "rtl" : "ltr"}>
                    <span>2</span>
                    <ProCrownLottie width={64} height={28} />
                  </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-6 max-w-5xl text-6xl font-black leading-[0.98] tracking-tight md:text-8xl">
              {isRtl ? (
                <>
                  عائلة واحدة.
                  <br />
                  <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.9)", color: "transparent" }}>
                    أربعة عقول.
                  </span>
                </>
              ) : (
                <>
                  One family.
                  <br />
                  <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.9)", color: "transparent" }}>
                    Four minds.
                  </span>
                </>
              )}
            </h1>
          </Reveal>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold text-white/55">
            {isRtl ? "اختر عقلك وادخل الشات." : "Pick your mind and jump into chat."}
          </p>

          {/* Mission console: type and jump into chat */}
          <Reveal delay={0.15}>
            <div className="mx-auto mt-9 max-w-3xl rounded-[1.75rem] border border-white/10 bg-black/40 p-4 text-start shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-5">
              <div className="flex flex-wrap items-center gap-2">
                {felizModels.map((m) => {
                  const selected = m.slug === activeSlug;
                  return (
                    <button
                      key={m.slug}
                      onClick={() => setActiveSlug(m.slug)}
                      className={cn(
                        "flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-bold transition",
                        selected
                          ? "border-white bg-white text-neutral-900"
                          : "border-white/10 text-white/65 hover:border-white/25 hover:text-white"
                      )}
                    >
                      <Image
                        src="/macosdock/superfeliz.svg"
                        alt=""
                        width={18}
                        height={18}
                        style={PILL_ICON_FILTER[m.slug] ? { filter: PILL_ICON_FILTER[m.slug] } : undefined}
                        className="shrink-0 object-contain"
                      />
                      <span dir={isRtl ? "rtl" : "ltr"}>{isRtl ? m.nameAr : m.name}</span>
                    </button>
                  );
                })}
                <PencilButton
                  onClick={goAsk}
                  variant="primary"
                  size="default"
                  hoverLabel={isRtl ? "ابدأ المحادثة ←" : "Start Chat →"}
                  className="ms-auto"
                >
                  {isRtl ? "اسأل فيليز" : "Ask Feliz"}
                </PencilButton>
              </div>
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.p
              key={activeModel.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-sm"
            >
              <b className="text-white" dir={isRtl ? "rtl" : "ltr"}>
                {isRtl ? activeModel.nameAr : activeModel.name}
              </b>
              <span className="italic text-white/60">
                {isRtl ? activeModel.taglineAr : activeModel.taglineEn}
              </span>
              <a
                href={`#model-${activeModel.slug}`}
                className="font-bold text-white transition hover:underline"
              >
                {isRtl ? "الملف الكامل" : "Full profile"}
              </a>
            </motion.p>
          </AnimatePresence>

          <div className="mt-7 flex justify-center">
            <a
              href="#models"
              className="group inline-flex items-center gap-2 text-sm font-bold text-white/60 transition hover:text-white"
            >
              {isRtl ? "قابل العائلة" : "Meet the family"}
              <span className="inline-block animate-bounce" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            {[
              { value: "4", labelEn: "specialized models", labelAr: "نماذج متخصصة" },
              { value: "2", labelEn: "free forever", labelAr: "مجانية للأبد" },
              { value: "AR+EN", labelEn: "thinks in both", labelAr: "يفكر باللغتين" },
            ].map((s) => (
              <span key={s.value} className="inline-flex items-baseline gap-1.5">
                <b className="text-lg font-black" dir={isRtl ? "rtl" : "ltr"}>
                  {s.value === "AR+EN" && isRtl ? "عربي وإنجليزي" : s.value}
                </b>
                <span className="text-white/55">{isRtl ? s.labelAr : s.labelEn}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TICKER ---------- */}
      <div className="overflow-hidden border-y border-white/10 bg-neutral-900 py-3.5" dir="ltr">
        <div className="feliz-ticker-track flex w-max items-center gap-10 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-10 text-xs font-bold uppercase tracking-[0.2em] text-white/45"
            >
              {item}
              <span className="text-[#5B9CFF]" aria-hidden="true">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ---------- ECOSYSTEM / THE STACK (Reference Bento Layout) ---------- */}
      <SuperfelizStackSection />

      {/* ---------- MODELS (Connected 3D Carousel matching Reference) ---------- */}
      <SuperfelizModelsCarousel />

      {/* ---------- JOURNEY (PENCIL Signature Flow) ---------- */}
      <SuperfelizJourneySection />

      {/* ---------- FREE vs PRO (Reference Asymmetric Split Layout) ---------- */}
      <SuperfelizPhilosophySection />

      {/* ---------- PRO ACCESS (PENCIL Royal Blue Consultation Banner) ---------- */}
      <SuperfelizProCta />

      {/* ---------- EXECUTIVE FAQ: Before you ask (PENCIL Signature Soul) ---------- */}
      <SuperfelizFaqSection />

      <Footer />
    </div>
  );
}

