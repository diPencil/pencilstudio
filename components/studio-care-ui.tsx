"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, CircleHelp, Flag, Headphones, LifeBuoy, MessagesSquare, PhoneCall, Wrench } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-context";
import { cn } from "@/lib/utils";
import type { LocalText } from "@/lib/studio-care-content";

export const local = (value: LocalText, rtl: boolean) => rtl ? value.ar : value.en;

const ROUTES = [
  { href: "/help", en: "Help Center", ar: "مركز المساعدة", icon: LifeBuoy, family: "help" },
  { href: "/help/faqs", en: "FAQs", ar: "الأسئلة", icon: CircleHelp, family: "help" },
  { href: "/help/guides", en: "Guides", ar: "الأدلة", icon: BookOpen, family: "help" },
  { href: "/help/contact", en: "Contact Help", ar: "تواصل", icon: MessagesSquare, family: "help" },
  { href: "/support", en: "Support Center", ar: "مركز الدعم", icon: Headphones, family: "support" },
  { href: "/support/customer", en: "Customer", ar: "العملاء", icon: MessagesSquare, family: "support" },
  { href: "/support/technical", en: "Technical", ar: "التقني", icon: Wrench, family: "support" },
  { href: "/support/callback", en: "Callback", ar: "اتصال", icon: PhoneCall, family: "support" },
  { href: "/support/report", en: "Report", ar: "بلاغ", icon: Flag, family: "support" },
] as const;

export function StudioCareShell({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-[#f7f7f5] text-neutral-950">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export function StudioCareNav({ family }: { family: "help" | "support" }) {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const routes = ROUTES.filter((route) => route.family === family);
  return (
    <nav aria-label={rtl ? "التنقل بين الصفحات" : "Page navigation"} className={cn("relative z-30 border-b", family === "support" ? "border-white/10 bg-neutral-950 text-white" : "border-neutral-200 bg-white")}>
      <div className="container-custom flex min-h-16 items-center gap-1.5 overflow-x-auto py-2 [scrollbar-width:none]">
        <span className={cn("me-3 hidden shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest md:block", family === "support" ? "text-white/35" : "text-neutral-400")}>
          {family === "support" ? "PENCIL / SUPPORT" : "PENCIL / EDITIONS"}
        </span>
        {routes.map((route) => {
          const active = pathname === route.href;
          const Icon = route.icon;
          return (
            <Link
              key={route.href}
              href={route.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full px-4 text-xs font-bold transition",
                active
                  ? family === "support" ? "bg-white text-neutral-950" : "bg-neutral-900 text-white"
                  : family === "support" ? "text-white/50 hover:bg-white/10 hover:text-white" : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950"
              )}
            >
              <Icon size={15} /> {rtl ? route.ar : route.en}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function BrandHero({
  family,
  code,
  eyebrow,
  title,
  accent,
  description,
  image,
  children,
  video = false,
}: {
  family: "help" | "support";
  code: string;
  eyebrow: string;
  title: React.ReactNode;
  accent?: React.ReactNode;
  description: string;
  image: string;
  children?: React.ReactNode;
  video?: boolean;
}) {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const dark = family === "support";
  return (
    <section className={cn("relative isolate min-h-[720px] overflow-hidden", dark ? "bg-neutral-950 text-white" : "bg-white text-neutral-950")}>
      <div className="absolute inset-0 -z-20">
        {video ? (
          <video autoPlay muted loop playsInline poster={image} className={cn("h-full w-full object-cover", dark ? "opacity-35" : "opacity-20 grayscale")}>
            <source src="/pencil-hero-section-website.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image src={image} alt="" fill priority className={cn("object-cover", dark ? "opacity-35" : "opacity-20 grayscale")} sizes="100vw" />
        )}
      </div>
      <div className={cn("absolute inset-0 -z-10", dark ? "bg-[linear-gradient(90deg,rgba(10,10,10,.98)_0%,rgba(10,10,10,.88)_55%,rgba(10,10,10,.25)_100%)] rtl:bg-[linear-gradient(270deg,rgba(10,10,10,.98)_0%,rgba(10,10,10,.88)_55%,rgba(10,10,10,.25)_100%)]" : "bg-[linear-gradient(90deg,rgba(255,255,255,.99)_0%,rgba(255,255,255,.92)_58%,rgba(255,255,255,.42)_100%)] rtl:bg-[linear-gradient(270deg,rgba(255,255,255,.99)_0%,rgba(255,255,255,.92)_58%,rgba(255,255,255,.42)_100%)]")} />
      <div className="container-custom flex min-h-[720px] flex-col justify-center pb-20 pt-32">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className={cn("font-mono text-xs font-black tracking-[0.2em]", dark ? "text-[#61d095]" : "text-[#2057ff]")}>{code}</span>
            <span className={cn("h-px w-14", dark ? "bg-white/25" : "bg-neutral-300")} />
            <span className={cn("text-xs font-bold uppercase tracking-[0.18em]", dark ? "text-white/55" : "text-neutral-500")}>{eyebrow}</span>
          </div>
          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[0.98] tracking-normal sm:text-6xl lg:text-[88px]">
            {title} {accent && <span className={cn("font-light italic", dark ? "text-white/45" : "text-neutral-400")}>{accent}</span>}
          </h1>
          <p className={cn("mt-7 max-w-2xl text-lg leading-8", dark ? "text-white/62" : "text-neutral-600")}>{description}</p>
        </Reveal>
        {children && <Reveal delay={0.12}><div className="mt-9">{children}</div></Reveal>}
      </div>
      <div className={cn("absolute inset-x-0 bottom-0 h-2", dark ? "bg-[linear-gradient(90deg,#ef4444_0_24%,#f6c453_24%_52%,#61d095_52%_78%,#4d7cff_78%)]" : "bg-[linear-gradient(90deg,#2057ff_0_62%,#ef4444_62%_78%,#111827_78%)]")} aria-hidden="true" />
      <span className={cn("absolute bottom-10 hidden font-mono text-[11px] font-bold uppercase tracking-[0.2em] lg:block", rtl ? "left-8 -rotate-90 origin-bottom-left" : "right-8 rotate-90 origin-bottom-right", dark ? "text-white/25" : "text-neutral-300")}>
        Pencil Studio / Since 2014
      </span>
    </section>
  );
}

export function SectionIntro({ number, eyebrow, title, body, dark = false }: { number: string; eyebrow: string; title: React.ReactNode; body?: string; dark?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[120px_1fr_.72fr] lg:items-end">
      <p className={cn("font-mono text-5xl font-black", dark ? "text-white/12" : "text-neutral-200")}>{number}</p>
      <div>
        <p className={cn("text-xs font-black uppercase tracking-[0.2em]", dark ? "text-[#61d095]" : "text-[#2057ff]")}>{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{title}</h2>
      </div>
      {body && <p className={cn("leading-8", dark ? "text-white/55" : "text-neutral-600")}>{body}</p>}
    </div>
  );
}

export function MediaReel({ items, dark = false }: { items: { image: string; title: string; line: string }[]; dark?: boolean }) {
  const [index, setIndex] = React.useState(0);
  const reduce = useReducedMotion();
  React.useEffect(() => {
    if (reduce || items.length < 2) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % items.length), 5200);
    return () => window.clearInterval(timer);
  }, [items.length, reduce]);
  const Previous = ArrowLeft;
  const Next = ArrowRight;
  return (
    <div className="grid gap-0 overflow-hidden border border-current/15 lg:grid-cols-[1.35fr_.65fr]">
      <div className="relative min-h-[360px] overflow-hidden md:min-h-[520px]">
        <AnimatePresence mode="wait">
          <motion.div key={index} initial={{ opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : 0.45 }} className="absolute inset-0">
            <Image src={items[index].image} alt={items[index].title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 68vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-9">
              <p className="text-2xl font-black md:text-4xl">{items[index].title}</p>
              <p className="mt-2 max-w-xl text-sm leading-7 text-white/65">{items[index].line}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={cn("flex flex-col justify-between p-6 md:p-8", dark ? "bg-neutral-900" : "bg-white")}>
        <div className="space-y-1">
          {items.map((item, itemIndex) => (
            <button key={item.title} onClick={() => setIndex(itemIndex)} className={cn("grid min-h-14 w-full grid-cols-[32px_1fr] items-center border-b py-3 text-start text-sm font-bold transition", dark ? "border-white/10" : "border-neutral-200", itemIndex === index ? dark ? "text-white" : "text-neutral-950" : dark ? "text-white/35" : "text-neutral-400")}>
              <span className="font-mono text-[10px]">{String(itemIndex + 1).padStart(2, "0")}</span>
              {item.title}
            </button>
          ))}
        </div>
        <div className="mt-8 flex gap-2">
          <button aria-label="Previous" onClick={() => setIndex((index - 1 + items.length) % items.length)} className={cn("flex h-11 w-11 items-center justify-center border transition", dark ? "border-white/20 hover:bg-white hover:text-neutral-950" : "border-neutral-300 hover:bg-neutral-950 hover:text-white")}><Previous size={17} /></button>
          <button aria-label="Next" onClick={() => setIndex((index + 1) % items.length)} className={cn("flex h-11 w-11 items-center justify-center border transition", dark ? "border-white/20 hover:bg-white hover:text-neutral-950" : "border-neutral-300 hover:bg-neutral-950 hover:text-white")}><Next size={17} /></button>
        </div>
      </div>
    </div>
  );
}

export function StudioCTA({ title, body, primary, secondary, dark = true }: { title: string; body: string; primary: { label: string; href: string }; secondary?: { label: string; href: string }; dark?: boolean }) {
  return (
    <div className={cn("grid gap-8 border-y px-6 py-12 md:px-10 lg:grid-cols-[1fr_auto] lg:items-end", dark ? "border-white/10 bg-neutral-950 text-white" : "border-neutral-200 bg-white")}>
      <div>
        <h2 className="max-w-3xl text-3xl font-black md:text-5xl">{title}</h2>
        <p className={cn("mt-4 max-w-2xl leading-8", dark ? "text-white/55" : "text-neutral-600")}>{body}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href={primary.href} className={cn("inline-flex min-h-12 items-center gap-2 px-6 py-3 text-sm font-bold transition", dark ? "bg-white text-neutral-950 hover:bg-neutral-200" : "bg-neutral-950 text-white hover:bg-neutral-800")}>{primary.label}<ArrowUpRight size={16} /></Link>
        {secondary && <Link href={secondary.href} className={cn("inline-flex min-h-12 items-center px-6 py-3 text-sm font-bold transition", dark ? "border border-white/20 text-white hover:bg-white/10" : "border border-neutral-300 hover:border-neutral-950")}>{secondary.label}</Link>}
      </div>
    </div>
  );
}

export function FormField({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold">{label}</span>
      {children}
      {hint && <span className="mt-2 block text-xs leading-5 text-neutral-500">{hint}</span>}
    </label>
  );
}

export const fieldClass = "min-h-12 w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10";

export function Choice({ active, onClick, title, body, type = "button" }: { active: boolean; onClick: () => void; title: string; body?: string; type?: "button" | "submit" }) {
  return (
    <button type={type} onClick={onClick} className={cn("min-h-14 border p-4 text-start transition", active ? "border-neutral-950 bg-neutral-950 text-white shadow-[5px_5px_0_#d4d4d4]" : "border-neutral-300 bg-white hover:border-neutral-950")}>
      <span className="block text-sm font-bold">{title}</span>
      {body && <span className={cn("mt-1 block text-xs leading-5", active ? "text-white/60" : "text-neutral-500")}>{body}</span>}
    </button>
  );
}

export function FamilyFooterCTA({ family }: { family: "help" | "support" }) {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  return (
    <section className="container-custom py-16 md:py-24">
      <StudioCTA
        title={family === "help" ? (rtl ? "لديك فكرة لم تجد لها اسمًا بعد؟" : "Have an idea you cannot name yet?") : (rtl ? "اختر المسار الذي يقرّب المشكلة من الحل." : "Choose the route that moves the issue toward resolution.")}
        body={family === "help" ? (rtl ? "أرسل السياق كما هو. نستطيع مساعدتك في تحويله إلى سؤال أو موجز أو مشروع قابل للتنفيذ." : "Send the context as it is. We can turn it into a question, a brief, or a project that can be built.") : (rtl ? "استخدم الدعم الفني للعطل، ودعم العملاء للعمل المستمر، والبلاغ للحالة القابلة للتكرار." : "Use technical support for faults, customer support for ongoing work, and reporting for a repeatable issue.")}
        primary={{ label: family === "help" ? (rtl ? "تواصل مع Pencil" : "Contact Pencil") : (rtl ? "أبلغ عن مشكلة" : "Report an issue"), href: family === "help" ? "/help/contact" : "/support/report" }}
        secondary={{ label: family === "help" ? (rtl ? "اطلب مكالمة" : "Request a callback") : (rtl ? "اطلب اتصالًا" : "Request callback"), href: "/support/callback" }}
      />
    </section>
  );
}
