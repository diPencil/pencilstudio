"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Crown, Lock, Plus, SendHorizontal } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-context";
import { LazyDotLottie } from "@/components/lazy-dot-lottie";
import { felizModels } from "@/lib/feliz";
import { getDemoReply, MODEL_SUGGESTIONS, type DemoModel } from "@/lib/feliz-demo";
import { IndustryIcon } from "@/components/industry-icons";
import { cn } from "@/lib/utils";

type ChatModel = DemoModel | "gen" | "superfeliz";

const ProAuthModal = dynamic(() => import("@/components/pro-auth-modal").then((mod) => mod.ProAuthModal), {
  ssr: false,
});

const FELIZ_ICON = "/macosdock/superfeliz.svg";
const PRO_CROWN_LOTTIE = "https://lottie.host/4531a6de-9d03-4730-a036-9f3eb7aa216d/hbQIg95we5.lottie";

const GLOW_STYLES = `
@property --glow-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
.glow-runner {
  position: relative;
}
.glow-runner::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1.5px;
  background: conic-gradient(
    from var(--glow-angle),
    transparent 0deg,
    transparent 245deg,
    rgba(91, 156, 255, 0.9) 295deg,
    #ffffff 320deg,
    rgba(91, 156, 255, 0.9) 345deg,
    transparent 360deg
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.45s ease;
  filter: drop-shadow(0 0 8px rgba(91, 156, 255, 0.75));
  animation: glow-spin 3.2s linear infinite;
  animation-play-state: paused;
  pointer-events: none;
}
.glow-runner:hover::before,
.glow-runner:focus-within::before {
  opacity: 1;
  animation-play-state: running;
}
@keyframes glow-spin {
  to {
    --glow-angle: 360deg;
  }
}
`;

const LANDING_PHRASES: Record<ChatModel, { en: string[]; ar: string[] }> = {
  oper: {
    en: ["Ask about business…", "Ask about pricing…", "Ask about marketing…", "Ask about risks…"],
    ar: ["اسأل عن الأعمال…", "اسأل عن التسعير…", "اسأل عن التسويق…", "اسأل عن المخاطر…"],
  },
  tech: {
    en: ["Ask about websites…", "Ask about apps…", "Ask about hosting…", "Ask about payments…"],
    ar: ["اسأل عن المواقع…", "اسأل عن التطبيقات…", "اسأل عن الاستضافة…", "اسأل عن المدفوعات…"],
  },
  gen: {
    en: ["Ask about branding…", "Ask about content…", "Ask about MVPs…"],
    ar: ["اسأل عن العلامات…", "اسأل عن المحتوى…", "اسأل عن إم في بي…"],
  },
  superfeliz: {
    en: ["Ask about anything…", "Ask about everything…"],
    ar: ["اسأل عن أي شيء…", "اسأل عن كل شيء…"],
  },
};

interface Industry {
  id: string;
  image: string;
  color: string;
  lottie?: string;
  iconFilter?: string;
  iconScale?: number;
  en: string;
  ar: string;
  promptEn: string;
  promptAr: string;
}

const INDUSTRIES: Industry[] = [
  {
    id: "tourism",
    image: "/business-sectors/tourism-booking.jpg",
    color: "#38BDF8",
    lottie: "https://lottie.host/f8627d11-9784-4549-9dc7-fccf3d5cc7d0/xOTAJ12zBb.lottie",
    en: "Tourism and Booking",
    ar: "السياحة والحجوزات",
    promptEn: "I want a booking website for my tourism company.",
    promptAr: "أريد موقع حجز لشركة السياحة.",
  },
  {
    id: "realestate",
    image: "/business-sectors/real-estate.jpg",
    color: "#FBBF24",
    lottie: "https://lottie.host/a697a905-2c96-4541-9f9a-aefd8f933c54/Y28gKkUpsd.lottie",
    iconFilter: "hue-rotate(140deg) saturate(1.4) brightness(1.7)",
    en: "Real Estate",
    ar: "العقارات",
    promptEn: "How do I get more serious property viewings?",
    promptAr: "كيف أجلب معاينات عقارية جادة؟",
  },
  {
    id: "restaurants",
    image: "/business-sectors/restaurant-pos.jpg",
    color: "#FB7185",
    lottie: "https://lottie.host/44069424-9b7a-4256-9ea4-9362ec578766/hFQqeWjhWX.lottie",
    iconScale: 1.4,
    en: "Restaurants",
    ar: "المطاعم",
    promptEn: "I need an ordering system for my restaurant.",
    promptAr: "أحتاج نظام طلبات لمطعمي.",
  },
  {
    id: "medical",
    image: "/business-sectors/medical-clinics.jpg",
    color: "#34D399",
    lottie: "https://lottie.host/0580a82c-bd50-4a20-b8b0-63ac3dac5bb9/jif8oyte6z.lottie",
    en: "Clinics",
    ar: "العيادات",
    promptEn: "I want online booking for my clinic.",
    promptAr: "أريد حجزاً إلكترونياً لعيادتي.",
  },
  {
    id: "education",
    image: "/business-sectors/education-lms.jpg",
    color: "#A78BFA",
    lottie: "https://lottie.host/3d9ad071-5adf-49ba-91d8-b6ac890e101d/JsPulo9fvJ.lottie",
    en: "Education",
    ar: "التعليم",
    promptEn: "How do I sell my courses online?",
    promptAr: "كيف أبيع دوراتي عبر الإنترنت؟",
  },
  {
    id: "corporate",
    image: "/business-sectors/corporate-websites.jpg",
    color: "#94A3B8",
    lottie: "https://lottie.host/1abc68c1-cc55-4d83-adea-e23f84edaec9/QbDjsclI9h.lottie",
    iconScale: 1.4,
    en: "Corporate",
    ar: "الشركات",
    promptEn: "We need a fast bilingual company website.",
    promptAr: "نحتاج موقع شركة سريعاً باللغتين.",
  },
  {
    id: "ecommerce",
    image: "/business-sectors/e-commerce.jpg",
    color: "#FB923C",
    lottie: "https://lottie.host/1f4d2fb6-a234-4023-a339-865157595e4f/h3SkxId4wF.lottie",
    iconScale: 1.4,
    en: "E-Commerce",
    ar: "التجارة الإلكترونية",
    promptEn: "How do I increase my store checkout rate?",
    promptAr: "كيف أرفع نسبة إتمام الشراء في متجري؟",
  },
  {
    id: "crm",
    image: "/business-sectors/crm-automation.jpg",
    color: "#22D3EE",
    lottie: "https://lottie.host/734cf7d0-e88c-4c4d-bf48-d3ae9c73d997/pMJVK45GJf.lottie",
    iconScale: 1.4,
    en: "CRM and Automation",
    ar: "العملاء والأتمتة",
    promptEn: "How do I organize clients and follow-ups?",
    promptAr: "كيف أنظم العملاء والمتابعات؟",
  },
];

/* PRO avatar: static Feliz icon only (no flip) */
function ProMorphIcon({ fill = false, size = 18 }: { size?: number; fill?: boolean }) {
  return (
    <span
      className="relative inline-flex items-center justify-center overflow-hidden"
      style={fill ? { position: "relative", width: "100%", height: "100%" } : { position: "relative", width: size, height: size }}
    >
      {fill ? (
        <Image src={FELIZ_ICON} alt="" fill className="object-contain" />
      ) : (
        <Image src={FELIZ_ICON} alt="" width={size} height={size} className="object-contain" />
      )}
    </span>
  );
}

/* Small crown Lottie for PRO board - shape only, no PRO word - uses iframe to avoid ImageData error, sized bigger to be visible */
function ProCrownIcon({ size = 24 }: { size?: number }) {
  return (
    <span className="inline-flex items-center justify-center shrink-0 overflow-hidden" style={{ width: size, height: size }}>
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

/* Every model wears the Feliz mark itself. Small pills (landing) have white board */
function ModelAvatar({
  slug,
  boxClass = "h-10 w-10 rounded-xl",
}: {
  slug: ChatModel;
  boxClass?: string;
}) {
  const meta = felizModels.find((m) => m.slug === slug);
  const pro = meta?.tier === "PRO";
  const accent = meta?.accent ?? "#2563EB";
  const isSmallPill = boxClass.includes("h-6");
  return (
    <span
      className={cn("flex shrink-0 items-center justify-center overflow-hidden", boxClass, isSmallPill && "border border-black/5 shadow-sm")}
      style={{ backgroundColor: isSmallPill ? "#FFFFFF" : `${accent}26`, color: isSmallPill ? accent : slug === "superfeliz" ? "#FFFFFF" : accent }}
    >
      <span className="inline-flex items-center justify-center" style={{ width: "72%", height: "72%" }}>
        {pro ? (
          <ProMorphIcon fill />
        ) : (
          <Image
            src={FELIZ_ICON}
            alt=""
            width={64}
            height={64}
            style={{ width: "100%", height: "100%" }}
            className="object-contain"
          />
        )}
      </span>
    </span>
  );
}

interface Msg {
  id: number;
  from: "user" | "agent" | "system";
  text: string;
}

function greetingFor(model: ChatModel, isRtl: boolean): string {
  if (model === "oper")
    return isRtl
      ? "أنا فيليز أوبر. اسألني عن الأعمال والسوق والتسعير والقرارات."
      : "I am Feliz Oper. Ask me about business, market, pricing, or decisions.";
  if (model === "tech")
    return isRtl
      ? "أنا فيليز تك. اسألني كيف تبني فكرتك: موقعاً أو تطبيقاً أو نظاماً."
      : "I am Feliz Tech. Ask me how to build your idea: a site, an app, or a system.";
  return "";
}

function lockTextFor(isRtl: boolean): string {
  return isRtl
    ? "هذا النموذج احترافي. يُفتح جين وسوبر فيليز للشركات المشتركة مع بنسل أو المنفذة لخدمة لدينا."
    : "This model is PRO. Gen and SuperFeliz open for companies subscribed with Pencil or executing a service with us.";
}

/* ================= LANDING (bolt-style entry) ================= */

function AskLanding({
  model,
  setModel,
  onStart,
  onRequireAuth,
}: {
  model: ChatModel;
  setModel: (m: ChatModel) => void;
  onStart: (text: string) => void;
  onRequireAuth: (m: ChatModel) => void;
}) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);
  const [typed, setTyped] = useState("");
  const [mounted, setMounted] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);
  const locked = model === "gen" || model === "superfeliz";

  /* Typewriter placeholder: types, holds, deletes, next phrase */
  useEffect(() => {
    const phrases = isRtl ? LANDING_PHRASES[model].ar : LANDING_PHRASES[model].en;
    setTyped("");
    let idx = 0;
    let sub = 0;
    let deleting = false;
    let timer = 0;
    const tick = () => {
      const full = phrases[idx];
      if (!deleting) {
        sub += 1;
        setTyped(full.slice(0, sub));
        if (sub >= full.length) {
          deleting = true;
          timer = window.setTimeout(tick, 1500);
          return;
        }
        timer = window.setTimeout(tick, 45);
      } else {
        sub -= 1;
        setTyped(full.slice(0, Math.max(0, sub)));
        if (sub <= 0) {
          deleting = false;
          idx = (idx + 1) % phrases.length;
          timer = window.setTimeout(tick, 350);
          return;
        }
        timer = window.setTimeout(tick, 22);
      }
    };
    timer = window.setTimeout(tick, 500);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model, locale]);
  const suggestions = locked
    ? []
    : isRtl
      ? MODEL_SUGGESTIONS[model].ar
      : MODEL_SUGGESTIONS[model].en;

  const submit = () => {
    if (locked) {
      onRequireAuth(model);
      return;
    }
    if (text.trim()) onStart(text.trim());
  };

  const pickIndustry = (ind: Industry) => {
    setText(isRtl ? ind.promptAr : ind.promptEn);
    boxRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 450);
  };

  return (
    <section className="relative overflow-hidden">
      <style>{GLOW_STYLES}</style>

      <div className="container-custom relative z-10 pb-16 pt-28 text-center md:pb-20 md:pt-40">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[11px] font-bold text-white/75 backdrop-blur-md">
            <Image src={FELIZ_ICON} alt="" width={16} height={16} className="object-contain brightness-0 invert" />
            {isRtl ? "اسأل فيليز" : "Ask Feliz"}
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            {isRtl ? (
              <>
                ماذا ستسأل <span className="font-light italic text-white/55">فيليز اليوم؟</span>
              </>
            ) : (
              <>
                <span className="block">What will you ask</span>
                <span className="block font-light italic text-white/55">Feliz today?</span>
              </>
            )}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/65">
            {isRtl
              ? "إجابات تجارية وتقنية فوراً. بالعربية والإنجليزية."
              : "Business and technical answers, instantly. In Arabic and English."}
          </p>
        </Reveal>

        {/* Prompt box */}
        <Reveal delay={0.15}>
          <div ref={boxRef} className="glow-runner mx-auto mt-9 max-w-3xl rounded-[1.75rem] border border-white/10 bg-[#0B0B0F]/90 p-4 text-start shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)] backdrop-blur-md sm:p-5">
            <div className="relative">
              <textarea
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    submit();
                  }
                }}
                rows={3}
                placeholder=""
                aria-label={isRtl ? "اسأل فيليز" : "Ask Feliz"}
                className="relative z-10 w-full resize-none bg-transparent text-[15px] leading-7 text-white focus:outline-none"
              />
              {!text && !focused && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 text-[15px] leading-7 text-white/35"
                >
                  {typed}
                  <span className="ms-1 inline-block h-4 w-[2px] animate-pulse bg-white/60 align-middle" />
                </div>
              )}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <div className="flex flex-1 flex-wrap items-center gap-2">
                {felizModels.map((m) => {
                  const selected = m.slug === model;
                  const isPro = m.tier === "PRO";
                  return (
                    <button
                      key={m.slug}
                      onClick={() => {
                        if (isPro) {
                          onRequireAuth(m.slug as ChatModel);
                        } else {
                          setModel(m.slug as ChatModel);
                        }
                      }}
                      className={cn(
                        "flex cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold transition",
                        selected
                          ? "border-white bg-white text-neutral-900"
                          : "border-white/12 text-white/65 hover:border-white/25 hover:text-white"
                      )}
                    >
                      <ModelAvatar slug={m.slug as ChatModel} boxClass="h-6 w-6 rounded-lg" />
                      <span dir={isRtl ? "rtl" : "ltr"}>{isRtl ? m.nameAr : m.name}</span>
                      {m.tier === "PRO" && (
                        <span className="flex shrink-0 items-center justify-center" aria-label="PRO">
                          <ProCrownIcon size={28} />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={submit}
                disabled={!text.trim()}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(37,99,235,0.7)] transition hover:bg-[#1D4ED8] disabled:cursor-default disabled:opacity-40"
              >
                {isRtl ? "اسأل الآن" : "Ask now"}
                <SendHorizontal size={15} className={cn(isRtl && "-scale-x-100")} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Suggestions or lock hint */}
        <div className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {locked ? (
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/25 bg-amber-300/10 px-4 py-2 text-xs font-bold text-amber-100">
              <Lock size={12} />
              {isRtl ? "هذا النموذج احترافي. جرّب أوبر أو تك مجاناً الآن." : "This model is PRO. Try Oper or Tech free now."}
            </p>
          ) : (
            suggestions.map((s) => (
              <button
                key={s}
                onClick={() => onStart(s)}
                className="cursor-pointer whitespace-nowrap rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white/75 transition hover:border-white/25 hover:text-white"
              >
                {s}
              </button>
            ))
          )}
        </div>

        {/* Industries we serve */}
        <p className="mx-auto mt-10 text-center text-xs font-bold uppercase tracking-[0.2em] text-white/45">
          {isRtl ? "قطاعات نخدمها" : "Industries we serve"}
        </p>
        <div className="mx-auto mt-4 grid max-w-5xl grid-cols-2 gap-2.5 text-start sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.id} delay={0.03 * i}>
              <button
                onClick={() => pickIndustry(ind)}
                className="group flex h-full w-full cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-start transition hover:border-white/30 hover:bg-white/[0.07]"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${ind.color}22`, color: ind.color }}
                >
                  {ind.lottie && mounted ? (
                    <span
                      className="h-full w-full"
                      style={{
                        filter: ind.iconFilter,
                        transform: ind.iconScale ? `scale(${ind.iconScale})` : undefined,
                      }}
                    >
                      <LazyDotLottie
                        src={ind.lottie}
                        loop
                        autoplay
                        className="h-full w-full"
                      />
                    </span>
                  ) : (
                    <IndustryIcon id={ind.id} size={21} />
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-black text-white">
                    {isRtl ? ind.ar : ind.en}
                  </span>
                  <span className="mt-0.5 block text-[11px] font-semibold text-white/45">
                    {isRtl ? "انقر لسؤال جاهز" : "Tap for a ready question"}
                  </span>
                </span>
                <Plus size={14} className="shrink-0 text-white/30 transition group-hover:rotate-90 group-hover:text-white/80" />
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-xs leading-relaxed text-white/40">
          {isRtl
            ? "تجربة تعريفية بردود جاهزة. النسخة الكاملة المتصلة متاحة لعملاء الباقة الاحترافية."
            : "An introductory demo with ready replies. The fully connected version is available to PRO clients."}
        </p>
      </div>
    </section>
  );
}

/* ================= INNER CHAT ================= */

function AskChat({
  initialModel,
  initialMessage,
  onBack,
  onRequireAuth,
}: {
  initialModel: ChatModel;
  initialMessage: string;
  onBack: () => void;
  onRequireAuth: (m: ChatModel) => void;
}) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [model, setModel] = useState<ChatModel>(initialModel);
  const [messages, setMessages] = useState<Msg[]>(() => {
    const base: Msg[] = [{ id: 0, from: "agent", text: greetingFor(initialModel, locale === "ar") }];
    if (initialMessage) base.push({ id: 1, from: "user", text: initialMessage });
    return base;
  });
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [stream, setStream] = useState<{ id: number; count: number } | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>(() => {
    if (initialModel === "oper" || initialModel === "tech") {
      const s = MODEL_SUGGESTIONS[initialModel];
      return locale === "ar" ? s.ar : s.en;
    }
    return [];
  });
  const idRef = useRef(2);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<number[]>([]);
  const startedRef = useRef(false);
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  const locked = model === "gen" || model === "superfeliz";
  const active = felizModels.find((m) => m.slug === model) ?? felizModels[0];

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, stream, typing]);

  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach((t) => {
        window.clearTimeout(t);
        window.clearInterval(t);
      });
    };
  }, []);

  const scheduleReply = (userText: string, forModel: ChatModel) => {
    const timer = window.setTimeout(() => {
      if (forModel === "gen" || forModel === "superfeliz") {
        setTyping(false);
        const sysId = ++idRef.current;
        setMessages((prev) => [...prev, { id: sysId, from: "system", text: lockTextFor(isRtl) }]);
        return;
      }
      const answer = getDemoReply(forModel, userText);
      const aid = ++idRef.current;
      setTyping(false);
      setMessages((prev) => [...prev, { id: aid, from: "agent", text: answer.text }]);
      setSuggestions(answer.followups);
      const total = answer.text.split(" ").length;
      setStream({ id: aid, count: 0 });
      const interval = window.setInterval(() => {
        setStream((prev) => {
          if (!prev) {
            window.clearInterval(interval);
            return prev;
          }
          const next = prev.count + 2;
          if (next >= total) {
            window.clearInterval(interval);
            return null;
          }
          return { ...prev, count: next };
        });
      }, 40);
      timersRef.current.push(interval);
    }, 1000);
    timersRef.current.push(timer);
  };

  /* Auto-answer the landing message once */
  useEffect(() => {
    if (!initialMessage || startedRef.current) return;
    startedRef.current = true;
    setTyping(true);
    scheduleReply(initialMessage, initialModel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMessages([{ id: 0, from: "agent", text: greetingFor("oper", isRtl) }]);
    setSuggestions(isRtl ? MODEL_SUGGESTIONS.oper.ar : MODEL_SUGGESTIONS.oper.en);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const switchModel = (slug: ChatModel) => {
    if (slug === model) return;
    if (slug === "gen" || slug === "superfeliz") {
      onRequireAuth(slug);
      return;
    }
    setModel(slug);
    setTyping(false);
    setStream(null);
    const greetId = ++idRef.current;
    setMessages((prev) => [...prev, { id: greetId, from: "agent", text: greetingFor(slug, isRtl) }]);
    const s = MODEL_SUGGESTIONS[slug];
    setSuggestions(isRtl ? s.ar : s.en);
  };

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || typing || stream) return;
    const uid = ++idRef.current;
    setMessages((prev) => [...prev, { id: uid, from: "user", text }]);
    setInput("");
    setTyping(true);
    scheduleReply(text, model);
  };

  const timeNow = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <section className="relative">
      <div className="container-custom relative z-10 pb-14 pt-24 md:pt-28">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <button
            onClick={onBack}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-white/75 transition hover:border-white/30 hover:text-white"
          >
            <BackIcon size={14} />
            {isRtl ? "سؤال جديد" : "New question"}
          </button>
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-white/60">
            <Link href="/" className="transition hover:text-white">
              {isRtl ? "الرئيسية" : "Home"}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-white">{isRtl ? "اسأل فيليز" : "Ask Feliz"}</span>
          </nav>
        </div>

        <div className="grid gap-4 lg:grid-cols-[290px_1fr]">
          {/* Models sidebar */}
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {felizModels.map((m) => {
              const isActive = m.slug === model;
              const isLocked = m.tier === "PRO";
              return (
                <button
                  key={m.slug}
                  onClick={() => switchModel(m.slug as ChatModel)}
                  className={cn(
                    "flex min-w-[220px] cursor-pointer items-center gap-3 rounded-2xl border p-3.5 text-start transition lg:min-w-0",
                    isActive
                      ? "border-white/25 bg-white/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                  )}
                >
                  <ModelAvatar slug={m.slug as ChatModel} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-black tracking-tight text-white" dir={isRtl ? "rtl" : "ltr"}>
                      {isRtl ? m.nameAr : m.name}
                    </span>
                    <span className="mt-0.5 block text-[11px] font-semibold text-white/50">
                      {isRtl ? m.roleAr : m.roleEn}
                    </span>
                  </span>
                  {isLocked ? (
                      <span className="flex shrink-0 items-center justify-center" aria-label="PRO">
                        <ProCrownIcon size={32} />
                      </span>
                  ) : (
                    <span className="shrink-0 rounded-full bg-emerald-400/15 px-2 py-1 text-[10px] font-black text-emerald-300" dir={isRtl ? "rtl" : "ltr"}>
                      {isRtl ? "مجاني" : "Free"}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Chat window */}
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] backdrop-blur-md">
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5 sm:px-5">
              <ModelAvatar slug={model} />
                  <div className="min-w-0 text-start">
                    <div className="truncate text-sm font-black text-white" dir={isRtl ? "rtl" : "ltr"}>
                      {isRtl ? active.nameAr : active.name}
                    </div>
                <div className="text-xs text-emerald-300">
                  {locked
                    ? isRtl
                      ? "مغلق، يتطلب الباقة الاحترافية"
                      : "Locked, requires PRO"
                    : isRtl
                      ? "متصل ويرد فوراً"
                      : "Online and replying"}
                </div>
              </div>
              <Link
                href="/superfeliz"
                className="ms-auto shrink-0 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-bold text-white/70 transition hover:border-white/30 hover:text-white"
              >
                {isRtl ? "العائلة" : "Family"}
              </Link>
            </div>

            <div ref={scrollRef} className="h-[420px] space-y-4 overflow-y-auto px-4 py-5 sm:px-5 md:h-[460px]">
              {messages.map((m) => {
                if (m.from === "system") {
                  return (
                    <div key={m.id} className="flex justify-center">
                      <div className="flex max-w-[90%] items-start gap-2 rounded-2xl border border-amber-200/25 bg-amber-300/10 px-4 py-3 text-center">
                        <Lock size={14} className="mt-0.5 shrink-0 text-amber-200" />
                        <p className="text-[13px] leading-relaxed text-amber-100">{m.text}</p>
                      </div>
                    </div>
                  );
                }
                const mine = m.from === "user";
                const shown =
                  stream && stream.id === m.id
                    ? m.text.split(" ").slice(0, Math.max(1, stream.count)).join(" ")
                    : m.text;
                return (
                  <div key={m.id} className={cn("flex", mine ? "justify-end" : "justify-start")}>
                    <div
                      className={cn(
                        "max-w-[88%] px-4 py-3 sm:max-w-[80%]",
                        mine
                          ? cn("rounded-2xl bg-[#2563EB] text-white", isRtl ? "rounded-bl-md" : "rounded-br-md")
                          : cn(
                              "rounded-2xl border border-white/10 bg-white/[0.07] text-white/90",
                              isRtl ? "rounded-br-md" : "rounded-bl-md"
                            )
                      )}
                    >
                      <p className="text-start text-sm leading-6">{shown}</p>
                      {mine && (
                        <div className="mt-1 flex items-center justify-end gap-1 text-[10px] font-semibold text-white/70">
                          <span dir="ltr">{timeNow()}</span>
                          <span dir="ltr">✓✓</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
                    <ModelAvatar slug={model} boxClass="h-7 w-7 rounded-lg" />
                    <span className="flex items-center gap-1">
                      {[0, 1, 2].map((d) => (
                        <motion.span
                          key={d}
                          animate={{ y: [0, -4, 0], opacity: [0.35, 1, 0.35] }}
                          transition={{ duration: 1.1, repeat: Infinity, delay: d * 0.18 }}
                          className="h-1.5 w-1.5 rounded-full bg-[#7FB0FF]"
                        />
                      ))}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 px-4 pt-3 sm:px-5">
              <div className="flex gap-2 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    disabled={typing || !!stream}
                    className="shrink-0 cursor-pointer whitespace-nowrap rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-xs font-semibold text-white/75 transition hover:border-white/25 hover:text-white disabled:cursor-default disabled:opacity-50"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-center gap-2 pb-4"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    locked
                      ? isRtl
                        ? "هذا النموذج احترافي…"
                        : "This model is PRO…"
                      : isRtl
                        ? "اكتب سؤالك…"
                        : "Type your question…"
                  }
                  className="min-w-0 flex-1 rounded-full border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-white/30 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing || !!stream}
                  aria-label="Send"
                  className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#2563EB] text-white shadow-[0_8px_20px_-6px_rgba(37,99,235,0.7)] transition hover:bg-[#1D4ED8] disabled:cursor-default disabled:opacity-40"
                >
                  <SendHorizontal size={17} className={cn(isRtl && "-scale-x-100")} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= PAGE ================= */

export function AskFelizPage() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const params = useSearchParams();
  const validModel = (m: string | null): ChatModel =>
    m === "oper" || m === "tech" || m === "gen" || m === "superfeliz" ? m : "oper";
  const [phase, setPhase] = useState<"landing" | "chat">(() =>
    params.get("q") || params.get("model") ? "chat" : "landing"
  );
  const [model, setModel] = useState<ChatModel>(() => validModel(params.get("model")));
  const [firstMessage, setFirstMessage] = useState(() => params.get("q") ?? "");
  const [session, setSession] = useState(0);
  const [authOpen, setAuthOpen] = useState(false);
  const [pendingProModel, setPendingProModel] = useState<ChatModel | null>(null);

  const pendingProLabel = (() => {
    if (!pendingProModel) return undefined;
    const m = felizModels.find((x) => x.slug === pendingProModel);
    if (!m) return pendingProModel;
    return locale === "ar" ? m.nameAr : m.name;
  })();

  const handleRequireAuth = (m: ChatModel) => {
    setPendingProModel(m);
    setAuthOpen(true);
  };

  // If initial model from URL is PRO, show auth modal on mount (frontend only)
  useEffect(() => {
    const initial = validModel(params.get("model"));
    if (initial === "gen" || initial === "superfeliz") {
      setPendingProModel(initial);
      setAuthOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

/* Ambient rising particles - deterministic to avoid hydration mismatch */
  const particles = useMemo(() => {
    const particles: Array<{
      id: number;
      left: number;
      size: number;
      duration: number;
      delay: number;
      drift: number;
      peak: number;
    }> = [];
    let seed = 0x7b3a2c1d;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 0x100000000;
    };
    for (let i = 0; i < 24; i++) {
      particles.push({
        id: i,
        left: rand() * 100,
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
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-neutral-900 text-white">
      {/* Bolt-style blue aurora backdrop, shared by both phases */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 620px at 28% 16%, #2F6BFF 0%, rgba(47,107,255,0) 62%), radial-gradient(820px 480px at 76% 10%, #9CC4FF 0%, rgba(156,196,255,0) 58%), radial-gradient(1100px 760px at 50% 62%, #143A9E 0%, rgba(20,58,158,0) 66%), linear-gradient(180deg, #050A1C 0%, #0A1A45 42%, #0A1A45 60%, #050A1C 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1.6px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse 90% 70% at 50% 28%, black 20%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 28%, black 20%, transparent 80%)",
          }}
        />
        <motion.div
          className="absolute -top-24 left-[12%] h-[420px] w-[420px] rounded-full bg-[#4D86FF]/40 blur-[120px]"
          animate={{ y: [0, 40, 0], x: [0, 30, 0], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[6%] top-[8%] h-[380px] w-[380px] rounded-full bg-cyan-200/50 blur-[130px]"
          animate={{ y: [0, -35, 0], x: [0, -25, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[5%] left-[55%] h-[300px] w-[300px] rounded-full bg-violet-500/25 blur-[120px]"
          animate={{ y: [0, 35, 0], x: [0, -30, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Rotating aurora sweep */}
        <motion.div
          className="absolute left-1/2 top-[-32%] h-[900px] w-[900px]"
          style={{
            x: "-50%",
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(80,140,255,0.22) 60deg, transparent 130deg, transparent 200deg, rgba(140,220,255,0.16) 265deg, transparent 330deg)",
            filter: "blur(90px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        />
        {/* Light shimmer band sweeping across */}
        <motion.div
          className="absolute top-[-20%] h-[140%] w-40 rotate-12 bg-gradient-to-b from-transparent via-white/[0.07] to-transparent blur-2xl"
          animate={{ left: ["-12%", "108%"] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", repeatDelay: 2.5 }}
        />
        {/* Rising particles */}
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${p.left}%`, bottom: -12, width: p.size, height: p.size }}
            animate={{ y: [0, -220], x: [0, p.drift], opacity: [0, p.peak, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-neutral-900" />
      </div>
      <Header />
      <ProAuthModal open={authOpen} onOpenChange={setAuthOpen} proModelName={pendingProLabel} />
      {phase === "landing" ? (
        <>
          <AskLanding
            model={model}
            setModel={setModel}
            onRequireAuth={handleRequireAuth}
            onStart={(text) => {
              setFirstMessage(text);
              setSession((s) => s + 1);
              setPhase("chat");
            }}
          />
          <Footer dark />
        </>
      ) : (
        <>
          <AskChat
            key={session}
            initialModel={model}
            initialMessage={firstMessage}
            onBack={() => setPhase("landing")}
            onRequireAuth={handleRequireAuth}
          />
          <div className="container-custom relative z-10 pb-10">
            <p className="mx-auto flex max-w-3xl items-start justify-center gap-2 text-center text-xs leading-relaxed text-white/45">
              <Check size={13} className="mt-0.5 shrink-0 text-emerald-300" />
              {isRtl
                ? "تجربة تعريفية بردود جاهزة. النسخة الكاملة المتصلة متاحة لعملاء الباقة الاحترافية."
                : "An introductory demo with ready replies. The fully connected version is available to PRO clients."}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/superfeliz#pro"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200"
              >
                {isRtl ? "احصل على الاحترافي" : "Get PRO access"}
              </Link>
              <a
                href="https://wa.me/201003778273"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <Footer dark />
        </>
      )}
    </div>
  );
}
