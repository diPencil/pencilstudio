"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Code2, Layers, Palette, Pause, Play } from "lucide-react";
import { SUPPORT_SERVICES, SUPPORT_STAGES } from "@/lib/support/pencil-support-operations";

const groups = {
  creative: { en: "Creative", ar: "الإبداع", icon: Palette, color: "#2057ff" },
  technology: { en: "Technology", ar: "التقنية", icon: Code2, color: "#2057ff" },
  operation: { en: "Operation", ar: "التشغيل", icon: Layers, color: "#2057ff" },
};
const local = (value: { en: string; ar: string }, rtl: boolean) => rtl ? value.ar : value.en;

export function useSupportReducedMotion() {
  const preference = useReducedMotion();
  const [reduce, setReduce] = React.useState(false);
  // Keep server markup and the first client render identical.
  React.useEffect(() => { setReduce(Boolean(preference)); }, [preference]);
  return reduce;
}

export function SupportServiceMap({ rtl }: { rtl: boolean }) {
  const [selected, setSelected] = React.useState(0);
  const item = SUPPORT_SERVICES[selected];
  const reduce = useSupportReducedMotion();
  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-300 hover:border-[#2057ff]/40 hover:shadow-xl hover:shadow-neutral-900/5">
        <div className="grid lg:grid-cols-[.38fr_.62fr]">
          <div role="tablist" aria-label={rtl ? "خدمات تدعمها بينسل" : "Services Pencil supports"} aria-orientation="vertical" className="border-b border-neutral-200/80 bg-neutral-50/50 lg:border-b-0 lg:border-e">
            {SUPPORT_SERVICES.map((service, index) => {
              const GroupIcon = groups[service.group].icon;
              return (
                <button
                  key={service.id}
                  role="tab"
                  id={"support-service-" + service.id}
                  aria-controls="support-service-panel"
                  aria-selected={selected === index}
                  tabIndex={selected === index ? 0 : -1}
                  onClick={() => setSelected(index)}
                  onKeyDown={event => {
                    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
                    event.preventDefault();
                    const next = event.key === "Home" ? 0 : event.key === "End" ? SUPPORT_SERVICES.length - 1 : (index + (event.key === "ArrowDown" ? 1 : -1) + SUPPORT_SERVICES.length) % SUPPORT_SERVICES.length;
                    setSelected(next);
                    document.getElementById("support-service-" + SUPPORT_SERVICES[next].id)?.focus();
                  }}
                  className={`flex min-h-[84px] w-full items-center gap-4 border-b border-neutral-200/70 px-6 py-4 text-start transition-all last:border-b-0 ${
                    selected === index ? "bg-[#2057ff] text-white shadow-md shadow-blue-500/20" : "hover:bg-neutral-100/70 text-neutral-800"
                  }`}
                >
                  <GroupIcon size={19} className="shrink-0" style={{ color: selected === index ? "#ffffff" : groups[service.group].color }} />
                  <span className="flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-wider opacity-75">{rtl ? groups[service.group].ar : groups[service.group].en}</span>
                    <span className="mt-1 block text-base font-bold">{local(service.name, rtl)}</span>
                  </span>
                  <span className="font-mono text-xs opacity-60">0{index + 1}</span>
                </button>
              );
            })}
          </div>
          <div id="support-service-panel" role="tabpanel" aria-labelledby={"support-service-" + item.id} tabIndex={0} className="min-w-0 bg-white p-6 outline-offset-[-3px] md:p-10">
            <AnimatePresence mode="wait">
              <motion.div key={item.id} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .22 }}>
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2057ff] shadow-sm shadow-blue-500" />
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2057ff]">{local(item.name, rtl)}</p>
                </div>
                <h3 className="mt-5 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl text-neutral-950">{local(item.question, rtl)}</h3>
                <p className="mt-5 text-base leading-8 text-neutral-600">{local(item.detail, rtl)}</p>
                <figure className="mt-7">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-950 shadow-md">
                    {item.video ? (
                      <video
                        key={item.video}
                        src={item.video}
                        poster={item.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Image
                        src={item.image}
                        alt={local(item.name, rtl)}
                        fill
                        sizes="(max-width:1024px) 100vw, 60vw"
                        className={item.image.startsWith("/help-editorial") ? "object-contain p-2" : "object-cover"}
                      />
                    )}
                    {item.video && (
                      <div className="absolute top-3 end-3 z-10 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md border border-white/10 shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2057ff] animate-pulse" />
                        <span>{rtl ? "معاينة مرئية حية" : "Live Production Reel"}</span>
                      </div>
                    )}
                  </div>
                  <figcaption className="mt-2.5 flex items-center justify-between text-xs text-neutral-500">
                    <span>
                      {item.video
                        ? rtl
                          ? "إنتاج مرئي حقيقي من مشروعات وأنظمة استوديو بينسل"
                          : "Real production footage from Pencil Studio systems and projects"
                        : item.image.startsWith("/help-editorial")
                        ? rtl
                          ? "واجهة فعلية من منظومة بينسل"
                          : "Actual interface from the Pencil ecosystem"
                        : rtl
                          ? "تكوين بصري للخدمة من مواد مشروع Pencil"
                          : "Service visual from Pencil project materials"}
                    </span>
                    {item.video && (
                      <span className="font-mono text-[10px] text-neutral-400">1080p / 60fps</span>
                    )}
                  </figcaption>
                </figure>
                <ul className="mt-6 border-t border-neutral-200/80 divide-y divide-neutral-100">
                  {item.tasks.map(task => (
                    <li key={task.en} className="flex items-start gap-3 py-3 text-sm leading-7 text-neutral-700">
                      <Check size={16} className="mt-1.5 shrink-0 text-[#2057ff]" />
                      {local(task, rtl)}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-7 text-neutral-600">
                  <strong className="text-neutral-950">{rtl ? "جهّز للطلب: " : "Bring to the request: "}</strong>
                  {local(item.bring, rtl)}
                </p>
                <p className="mt-4 border-s-2 border-[#2057ff] ps-4 text-xs leading-6 text-neutral-500">{local(item.boundary, rtl)}</p>
                <Link href={item.href} className="group/lnk mt-7 inline-flex min-h-12 items-center gap-4 rounded-full bg-[#2057ff] px-6 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-700">
                  <span>{rtl ? "انتقل إلى مسار الدعم المناسب" : "Continue to the relevant support route"}</span>
                  <ArrowUpRight size={18} className="transition group-hover/lnk:translate-x-0.5 group-hover/lnk:-translate-y-0.5 rtl:group-hover/lnk:-translate-x-0.5" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }

export function SupportStageTimeline({ rtl }: { rtl: boolean }) {
  const [selected, setSelected] = React.useState(3);
  const reduce = useSupportReducedMotion();
  const stage = SUPPORT_STAGES[selected];
  return (
    <div className="space-y-6">
      <div role="tablist" aria-label={rtl ? "الدعم حسب مرحلة المشروع" : "Support by project stage"} className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {SUPPORT_STAGES.map((item, index) => (
          <button
            role="tab"
            key={item.id}
            id={"support-stage-" + item.id}
            aria-selected={selected === index}
            aria-controls="support-stage-panel"
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={event => {
              if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
              event.preventDefault();
              const next = event.key === "Home" ? 0 : event.key === "End" ? 4 : (index + (event.key === (rtl ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + 5) % 5;
              setSelected(next);
              document.getElementById("support-stage-" + SUPPORT_STAGES[next].id)?.focus();
            }}
            className={`flex flex-col justify-between rounded-2xl border p-4 text-start transition-all duration-200 ${
              selected === index
                ? "border-[#2057ff] bg-[#2057ff] text-white shadow-lg shadow-blue-500/25 -translate-y-0.5"
                : "border-neutral-200/80 bg-white text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50"
            }`}
          >
            <span className={`font-mono text-xs ${selected === index ? "text-blue-100" : "text-[#2057ff]"}`}>0{index + 1}</span>
            <span className="mt-4 block font-bold text-sm sm:text-base">{local(item.title, rtl)}</span>
          </button>
        ))}
      </div>

      <div id="support-stage-panel" role="tabpanel" aria-labelledby={"support-stage-" + stage.id} tabIndex={0} className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#2057ff]/40 hover:shadow-xl hover:shadow-neutral-900/5 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div key={stage.id} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .22 }} className="grid gap-8 md:grid-cols-[.38fr_.62fr] items-start">
              <div>
                <p className="font-mono text-xs font-bold text-[#2057ff]">0{selected + 1} / {local(stage.title, rtl)}</p>
                <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl text-neutral-950">{local(stage.question, rtl)}</h3>
              </div>
              <div>
                <p className="text-base sm:text-lg leading-8 text-neutral-600">{local(stage.detail, rtl)}</p>
                <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                  {stage.checks.map(check => (
                    <li key={check.en} className="flex items-center gap-2 text-sm font-bold text-neutral-800">
                      <Check size={16} className="text-[#2057ff]" />
                      {local(check, rtl)}
                    </li>
                  ))}
                </ul>
                <Link href={stage.href} className="group/stg mt-8 inline-flex min-h-12 items-center gap-4 rounded-full bg-neutral-950 px-6 text-sm font-bold text-white transition hover:bg-[#2057ff]">
                  <span>{rtl ? "المسار المناسب لهذه المرحلة" : "The next route for this stage"}</span>
                  <ArrowUpRight size={18} className="transition group-hover/stg:translate-x-0.5 group-hover/stg:-translate-y-0.5 rtl:group-hover/stg:-translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

const scenes: {
  image: string;
  video?: string;
  title: { en: string; ar: string };
  line: { en: string; ar: string };
  caption: string;
  href: string;
}[] = [
  {
    image: "/help-editorial/pencil-home.png",
    video: "/pencil-hero-section-website.mp4",
    title: { en: "The public-facing experience", ar: "التجربة التي يراها الجمهور" },
    line: { en: "A campaign lands on a website. The visual promise, the page content and the form need to agree. Creative support and technical support belong in the same conversation when the journey crosses both.", ar: "تنتهي رحلة الحملة عند الموقع. يجب أن ينسجم الوعد البصري مع محتوى الصفحة والنموذج. يجتمع الدعم الإبداعي والتقني في حوار واحد عندما تشمل الرحلة كليهما." },
    caption: "بينسل ستوديو / Website",
    href: "/support/customer"
  },
  {
    image: "/help-editorial/pencil-solutions.png",
    video: "/solutions/software.mp4",
    title: { en: "The next product decision", ar: "القرار التالي في المنتج" },
    line: { en: "A new feature is not only a development task. Review the flow, content, permissions and existing components before adding another screen. The next phase can use the foundations already built.", ar: "الوظيفة الجديدة ليست مهمة تطوير فقط. نراجع المسار والمحتوى والصلاحيات والمكونات الحالية قبل إضافة شاشة أخرى. تستطيع المرحلة التالية الاستفادة من الأسس المبنية." },
    caption: "بينسل / Solutions interface",
    href: "/support/technical"
  },
  {
    image: "/help-editorial/pencil-cloud.png",
    video: "/cloud-hosting/panel.mp4",
    title: { en: "The release behind the screen", ar: "الإصدار خلف الشاشة" },
    line: { en: "Domains, environments and access can hold up a launch even when the interface is ready. Clarifying ownership and deployment requirements is operational work, not a last-minute extra.", ar: "قد تؤخر النطاقات والبيئات والصلاحيات الإطلاق رغم جاهزية الواجهة. توضيح الملكية ومتطلبات النشر عمل تشغيلي، وليس إضافة في اللحظة الأخيرة." },
    caption: "بينسل / Cloud & Hosting interface",
    href: "/support/technical"
  },
  {
    image: "/help-editorial/pencil-superfeliz.png",
    video: "/solutions/feliz-ai.mp4",
    title: { en: "The intelligence in the workflow", ar: "الذكاء داخل سير العمل" },
    line: { en: "SuperFeliz discussions start with the task and the result people need. Ongoing work can revisit the workflow, prompts and review points as the use case becomes clearer.", ar: "تبدأ مناقشات سوبر فيليز بالمهمة والنتيجة التي يحتاج إليها الناس. يمكن للعمل المستمر مراجعة المسار والتعليمات ونقاط المراجعة مع اتضاح حالة الاستخدام." },
    caption: "SuperFeliz / Pencil interface",
    href: "/support/callback"
  },
];

export function SupportContinuityReel({ rtl }: { rtl: boolean }) {
  const [ref, api] = useEmblaCarousel({ loop: true, direction: rtl ? "rtl" : "ltr", align: "start" });
  const [selected, setSelected] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const reduce = useSupportReducedMotion();
  React.useEffect(() => {
    if (!api) return;
    const select = () => setSelected(api.selectedScrollSnap());
    select();
    api.on("select", select);
    api.on("reInit", select);
    return () => {
      api.off("select", select);
      api.off("reInit", select);
    };
  }, [api]);
  React.useEffect(() => {
    if (!api || !playing || paused || reduce) return;
    const timer = setInterval(() => api.scrollNext(), 7000);
    return () => clearInterval(timer);
  }, [api, playing, paused, reduce]);
  const Next = rtl ? ArrowLeft : ArrowRight;
  const Prev = rtl ? ArrowRight : ArrowLeft;
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setPaused(false); }}>
      <div className="overflow-hidden" ref={ref} aria-roledescription="carousel" aria-label={rtl ? "استمرارية العمل داخل منظومة بينسل" : "Continuity across the Pencil ecosystem"}>
        <div className="flex touch-pan-y">
          {scenes.map((item, index) => (
            <article key={item.caption} className="min-w-0 flex-[0_0_100%] p-1" role="group" aria-roledescription="slide" aria-label={(index + 1) + " / 4"} aria-hidden={selected !== index} inert={selected !== index ? true : undefined}>
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#2057ff]/40 hover:shadow-xl hover:shadow-neutral-900/5 md:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] items-center">
                  <figure>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-950 shadow-md">
                      {item.video ? (
                        <video
                          key={item.video}
                          src={item.video}
                          poster={item.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Image src={item.image} alt={item.caption} fill sizes="(max-width:1024px) 100vw, 60vw" className="object-contain p-2" />
                      )}
                      {item.video && (
                        <div className="absolute top-3 end-3 z-10 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md border border-white/10 shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2057ff] animate-pulse" />
                          <span>{rtl ? "معاينة مرئية حية" : "Live Production Reel"}</span>
                        </div>
                      )}
                    </div>
                    <figcaption className="mt-3 flex items-center justify-between text-xs text-neutral-500 font-mono">
                      <span>{item.caption} / {item.video ? rtl ? "إنتاج مرئي حقيقي" : "Real Video Reel" : rtl ? "واجهة بينسل الفعلية" : "Actual Pencil interface"}</span>
                      {item.video && <span className="text-[10px] text-neutral-400">1080p / 60fps</span>}
                    </figcaption>
                  </figure>
                  <div className="flex flex-col justify-center lg:ps-6">
                    <p className="font-mono text-xs font-bold text-[#2057ff]">0{index + 1} / 04</p>
                    <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl text-neutral-950">{local(item.title, rtl)}</h3>
                    <p className="mt-5 text-base leading-8 text-neutral-600">{local(item.line, rtl)}</p>
                    <Link href={item.href} className="group/cnt mt-7 inline-flex min-h-12 items-center gap-4 rounded-full bg-neutral-950 px-6 text-sm font-bold text-white transition hover:bg-[#2057ff] w-fit">
                      <span>{rtl ? "ناقش احتياجات الاستمرار" : "Discuss the continuing work"}</span>
                      <ArrowUpRight size={18} className="transition group-hover/cnt:translate-x-0.5 group-hover/cnt:-translate-y-0.5 rtl:group-hover/cnt:-translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200/80 pt-6">
        <div className="flex gap-2">
          {scenes.map((item, index) => (
            <button key={item.caption} onClick={() => api?.scrollTo(index)} aria-label={(rtl ? "عرض المشهد " : "Show scene ") + (index + 1)} aria-pressed={index === selected} className="flex h-11 w-11 items-center justify-center">
              <span className={`h-1.5 w-7 rounded-full transition-all duration-300 ${index === selected ? "bg-[#2057ff] w-10 shadow-sm shadow-blue-500/50" : "bg-neutral-300"}`} />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {!reduce && (
            <button onClick={() => setPlaying(!playing)} aria-label={playing ? rtl ? "إيقاف العرض التلقائي" : "Pause automatic slides" : rtl ? "تشغيل العرض التلقائي" : "Play automatic slides"} title={playing ? rtl ? "إيقاف العرض التلقائي" : "Pause automatic slides" : rtl ? "تشغيل العرض التلقائي" : "Play automatic slides"} aria-pressed={playing} className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white hover:border-[#2057ff] hover:text-[#2057ff] transition">
              {playing ? <Pause size={17} /> : <Play size={17} />}
            </button>
          )}
          <button onClick={() => api?.scrollPrev()} aria-label={rtl ? "المشهد السابق" : "Previous scene"} title={rtl ? "المشهد السابق" : "Previous scene"} className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white hover:border-[#2057ff] hover:text-[#2057ff] transition">
            <Prev size={18} />
          </button>
          <button onClick={() => api?.scrollNext()} aria-label={rtl ? "المشهد التالي" : "Next scene"} title={rtl ? "المشهد التالي" : "Next scene"} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2057ff] text-white shadow-md shadow-blue-500/25 hover:bg-blue-700 transition">
            <Next size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
