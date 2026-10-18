"use client";

import * as React from "react";
import { PencilCareAccessibility, useCareReducedMotion } from "@/components/pencil-care-accessibility";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Minus, Plus, Search, X } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { PencilCTA, PencilSectionTitle, PENCIL } from "@/components/pencil-ui";
import { HelpHero } from "@/components/help-hero";
import { local } from "@/components/studio-care-ui";
import { FAQ_CHAPTERS, PENCIL_EDITORIAL_QUESTIONS, type PencilQuestion } from "@/lib/pencil-faq-editorial";
import { cn } from "@/lib/utils";

const featuredIds = ["who", "start", "feliz"];
const chapterImages: Record<string, string> = {
  all: "/help-editorial/pencil-home.png",
  pencil: "/help-editorial/pencil-home.png",
  creative: "/hero-section.jpg",
  digital: "/help-editorial/pencil-solutions.png",
  ai: "/help-editorial/pencil-superfeliz.png",
  process: "/business-sectors/crm-automation.jpg",
  continuity: "/help-editorial/pencil-cloud.png",
};
const chapterNotes: Record<string, { en: string; ar: string }> = {
  all: { en: "The useful question is rarely just: can you make it? It is: do you understand what it needs to do?", ar: "السؤال المفيد ليس فقط: هل تستطيعون صنعه؟ بل: هل تفهمون ما الذي يجب أن يفعله؟" },
  pencil: { en: "Different disciplines. One context that should never get lost between them.", ar: "تخصصات مختلفة، وسياق واحد يجب ألا يضيع بينها." },
  creative: { en: "An identity must work after the presentation ends. That is where the real design begins.", ar: "يجب أن تعمل الهوية بعد انتهاء العرض. هناك يبدأ التصميم الحقيقي." },
  digital: { en: "A screen is a promise. The system behind it has to keep that promise.", ar: "الشاشة وعد، وعلى النظام الذي خلفها أن يفي به." },
  ai: { en: "Choose the work first. Then decide which kind of intelligence it needs.", ar: "اختر العمل أولًا، ثم حدد نوع الذكاء الذي يحتاجه." },
  process: { en: "Good production makes decisions visible, not just deliverables.", ar: "الإنتاج الجيد يجعل القرارات واضحة، لا المخرجات فقط." },
  continuity: { en: "The launch changes the conversation. It should not end the relationship.", ar: "يغيّر الإطلاق المحادثة، ولا ينبغي أن ينهي العلاقة." },
};

function normalize(value: string) {
  return value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g, "").replace(/[أإآ]/g, "ا").replace(/ى/g, "ي");
}

function Answer({ question, rtl }: { question: PencilQuestion; rtl: boolean }) {
  return <div className="space-y-4">{question.answer[rtl ? "ar" : "en"].map((paragraph, index) => <p key={index} className="leading-8 text-neutral-600">{paragraph}</p>)}</div>;
}

export function PencilFaqEditorial() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const reduce = useCareReducedMotion();
  const [category, setCategory] = React.useState("all");
  const [query, setQuery] = React.useState("");
  const [featured, setFeatured] = React.useState("who");
  const [open, setOpen] = React.useState<Set<string>>(new Set(["studio"]));
  const library = React.useRef<HTMLElement>(null);
  const Next = rtl ? ArrowLeft : ArrowRight;
  const feature = PENCIL_EDITORIAL_QUESTIONS.find((item) => item.id === featured)!;
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  const visible = PENCIL_EDITORIAL_QUESTIONS.filter((item) => {
    if (category !== "all" && item.category !== category) return false;
    const haystack = normalize([item.question.en, item.question.ar, ...item.answer.en, ...item.answer.ar].join(" "));
    return terms.every((term) => haystack.includes(term));
  });
  const selectChapter = (id: string) => {
    setCategory(id);
    setOpen(new Set());
  };
  const toggle = (id: string) => setOpen((current) => {
    const next = new Set(current);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  });
  const browse = () => library.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  return (
    <div data-pencil-care dir={rtl ? "rtl" : "ltr"} className={cn("pencil-help-page min-h-screen overflow-x-clip text-neutral-900", PENCIL.paper)}>
      <PencilCareAccessibility />
      <MotionConfig reducedMotion="user">
        <Header />

        <HelpHero
          size="2xl"
          seed={0x5e6f7a8b}
          outline={!rtl}
          breadcrumb={[
            { label: rtl ? "الرئيسية" : "Home", href: "/" },
            { label: rtl ? "مركز المساعدة" : "Help Center", href: "/help" },
            { label: rtl ? "الأسئلة" : "FAQs" },
          ]}
          badges={
            <>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 pe-4 ps-4 text-[11px] font-bold backdrop-blur-md">
                {rtl ? "أسئلة وأجوبة Pencil" : "Pencil questions and answers"}
              </span>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1.5 text-[11px] font-bold text-emerald-300" dir={rtl ? "rtl" : "ltr"}>
                {visible.length} {rtl ? "سؤالًا" : "questions"}
              </span>
            </>
          }
          titleA={rtl ? "Pencil، بإجابات" : "Pencil,"}
          titleB={rtl ? "تستحق السؤال." : "with the answers left in."}
          subtitle={rtl ? "كل ما تريد عادةً أن تسأله قبل العمل معنا: من نحن، وما الذي نصنعه، وكيف نفكر، وما الذي يحدث عندما تبدأ الفكرة وتصبح مشروعًا." : "Everything people usually want to ask before working with us: who we are, what we make, how we think, and what happens when an idea becomes a project."}
          caption={
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[rtl ? "شركة واستوديو ومنتجات" : "Company, studio & products", rtl ? "قرارات قبل التنفيذ" : "Decisions before production", rtl ? "علاقة تستمر بعد الإطلاق" : "A relationship beyond launch"].map((chip) => (
                <span key={chip} className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-bold text-white/60">{chip}</span>
              ))}
            </div>
          }
        >
          <div className="flex items-center gap-2">
            <Search size={20} className="shrink-0 text-white/70" />
            <label htmlFor="pencil-question-search" className="sr-only">{rtl ? "ابحث في أسئلة Pencil وإجاباتها" : "Search Pencil questions and answers"}</label>
            <input id="pencil-question-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={rtl ? "اكتب ما يشغل بالك…" : "What is on your mind?"} className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/50 [&::-webkit-search-cancel-button]:hidden" />
            {query && <button aria-label={rtl ? "مسح البحث" : "Clear search"} onClick={() => setQuery("")} className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-white/80 transition hover:bg-white/10"><X size={17} /></button>}
            <button onClick={browse} aria-label={rtl ? "انتقل إلى الإجابات" : "Go to answers"} className="flex h-11 cursor-pointer items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200"><Next size={17} /></button>
          </div>

        </HelpHero>

        <section className="container-custom pt-12 md:pt-16">
          <Reveal>
            <PencilSectionTitle
              isRtl={rtl}
              kicker={rtl ? "ابدأ هنا" : "The first conversation"}
              title={rtl ? "ثلاثة أسئلة تفتح بقية الحديث." : "Three questions that open the rest of the conversation."}
            />
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
            <Reveal>
              <div className={cn(PENCIL.card, "flex h-full flex-col gap-1 p-3")}>
                {featuredIds.map((id, index) => {
                  const item = PENCIL_EDITORIAL_QUESTIONS.find((entry) => entry.id === id)!;
                  return (
                    <button key={id} aria-pressed={featured === id} onClick={() => setFeatured(id)} className={cn("flex min-h-16 w-full items-center gap-3 rounded-2xl px-4 py-3 text-start text-sm font-bold transition", featured === id ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900")}>
                      <span className="font-mono text-[10px] opacity-40">0{index + 1}</span>
                      <span className="flex-1">{local(item.question, rtl)}</span>
                      <Next size={15} className="shrink-0 opacity-60" />
                    </button>
                  );
                })}
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <article className={cn(PENCIL.card, "h-full p-7 md:p-9")}>
                <AnimatePresence mode="wait">
                  <motion.div key={feature.id} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">{rtl ? "الإجابة الكاملة" : "The full answer"}</p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{local(feature.question, rtl)}</h3>
                    <div className="mt-5 space-y-4">{feature.answer[rtl ? "ar" : "en"].map((paragraph, index) => <p key={index} className="leading-8 text-neutral-600">{paragraph}</p>)}</div>
                  </motion.div>
                </AnimatePresence>
              </article>
            </Reveal>
          </div>
        </section>

        <section ref={library} id="questions" className="container-custom scroll-mt-24 py-12 md:py-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <PencilSectionTitle
                isRtl={rtl}
                kicker={rtl ? "ملاحظات قبل قرار التعاون" : "Notes before you decide"}
                title={rtl ? "اسأل السؤال الذي يهم مشروعك." : "Ask the question that matters to your project."}
              />
              <p role="status" aria-live="polite" className="rounded-full border border-neutral-200 bg-white px-4 py-2 font-mono text-xs text-neutral-500">{visible.length} {rtl ? "سؤالًا" : "questions"}</p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-[280px_1fr]">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className={cn(PENCIL.card, "p-4")}>
                <p id="question-chapters" className="px-2 pb-3 pt-1 text-xs font-bold text-neutral-500">{rtl ? "فصول الحديث" : "Chapters of the conversation"}</p>
                <div aria-labelledby="question-chapters" className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
                  {FAQ_CHAPTERS.map((chapter) => {
                    const count = chapter.id === "all" ? PENCIL_EDITORIAL_QUESTIONS.length : PENCIL_EDITORIAL_QUESTIONS.filter((item) => item.category === chapter.id).length;
                    return (
                      <button key={chapter.id} aria-pressed={category === chapter.id} onClick={() => selectChapter(chapter.id)} className={cn("flex min-h-11 shrink-0 items-center justify-between gap-4 rounded-full px-4 py-2.5 text-start text-sm font-bold transition lg:w-full", category === chapter.id ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-100")}>
                        <span>{rtl ? chapter.ar : chapter.en}</span>
                        <span className="font-mono text-[10px] opacity-50">{String(count).padStart(2, "0")}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className={cn(PENCIL.card, "relative mt-5 hidden aspect-[4/5] overflow-hidden lg:block")}>
                <Image src={chapterImages[category]} alt="" fill className="object-cover object-top" sizes="280px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-6 text-lg font-bold leading-8 text-white">{local(chapterNotes[category], rtl)}</p>
              </div>
            </aside>
            <div>
              {query && (
                <div className={cn(PENCIL.card, "mb-5 flex flex-wrap items-center justify-between gap-3 p-5")}>
                  <p className="text-sm text-neutral-600">{rtl ? "نتائج البحث عن:" : "Results for:"} <strong className="text-neutral-900">{query}</strong></p>
                  <button onClick={() => { setQuery(""); setCategory("all"); }} className="min-h-11 rounded-full px-4 text-sm font-bold underline underline-offset-4">{rtl ? "إعادة ضبط" : "Reset"}</button>
                </div>
              )}
              {visible.length > 0 ? (
                <div className="space-y-4">
                  {visible.map((item) => {
                    const expanded = open.has(item.id);
                    const chapter = FAQ_CHAPTERS.find((entry) => entry.id === item.category)!;
                    const number = PENCIL_EDITORIAL_QUESTIONS.indexOf(item) + 1;
                    return (
                      <article key={item.id} className={cn(PENCIL.card, "overflow-hidden transition", expanded && "border-neutral-900")}>
                        <h3>
                          <button id={`question-${item.id}`} aria-expanded={expanded} aria-controls={`answer-${item.id}`} onClick={() => toggle(item.id)} className="grid min-h-24 w-full grid-cols-[32px_1fr_44px] items-center gap-3 p-5 text-start md:gap-4 md:p-6">
                            <span className="self-start pt-1 font-mono text-[10px] font-bold text-neutral-400">{String(number).padStart(2, "0")}</span>
                            <span>
                              <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-neutral-500">{rtl ? chapter.ar : chapter.en}</span>
                              <span className="block text-lg font-bold leading-7 tracking-tight">{local(item.question, rtl)}</span>
                            </span>
                            <span className={cn("flex h-11 w-11 items-center justify-center rounded-full border transition", expanded ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-300 text-neutral-500")}>{expanded ? <Minus size={17} /> : <Plus size={17} />}</span>
                          </button>
                        </h3>
                        <div id={`answer-${item.id}`} role="region" aria-labelledby={`question-${item.id}`} hidden={!expanded} className="px-5 pb-7 ps-[52px] md:px-8 md:pb-8 md:ps-[64px]">
                          {expanded && <motion.div initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}><Answer question={item} rtl={rtl} /></motion.div>}
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className={cn(PENCIL.card, "p-8 text-center md:p-12")}>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100"><Search size={24} className="text-neutral-500" /></div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight">{rtl ? "سؤالك يستحق إجابة خاصة." : "Your question deserves its own answer."}</h3>
                  <p className="mx-auto mt-3 max-w-lg leading-8 text-neutral-600">{rtl ? "لم نجد نتيجة مطابقة في هذا الفصل. يمكنك البحث في جميع الأسئلة أو إرسال سياق مشروعك مباشرة." : "No matching answer in this chapter. Search every question, or send your project context directly."}</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <button onClick={() => { setCategory("all"); setQuery(""); }} className="min-h-12 rounded-full bg-neutral-900 px-6 text-sm font-bold text-white transition hover:bg-neutral-700">{rtl ? "عرض جميع الأسئلة" : "Show all questions"}</button>
                    <Link href="/help/contact" className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-neutral-300 px-6 text-sm font-bold transition hover:border-neutral-900">{rtl ? "أرسل سؤالك" : "Send your question"}<ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="container-custom py-6 md:py-8">
          <Reveal>
            <div className="border-y border-neutral-300 py-10 md:grid md:grid-cols-[.8fr_1.2fr] md:gap-12">
              <PencilSectionTitle isRtl={rtl} kicker={rtl ? "قبل عرض المنتج" : "Before a product demonstration"} title={rtl ? "ما الذي يجب أن نختبره معًا؟" : "What should we evaluate together?"} />
              <div className="mt-6 md:mt-0">
                <p className="leading-8 text-neutral-600">{rtl ? "اختر مهمة حقيقية من عملك: طلب عميل، أو قرار تشغيلي، أو إنتاج محتوى. ناقش معنا المدخلات المطلوبة، ومن يراجع النتيجة، وما الذي يحتاج إلى تكامل مع نظامك. بهذه الطريقة يصبح نقاش SuperFeliz وعائلة Feliz مرتبطًا بعملك، لا بعرض خصائص عامة." : "Bring one real task: a customer request, an operational decision or a content-production step. Discuss the inputs, who reviews the result and what needs connecting to your systems. That makes a SuperFeliz or Feliz family conversation about your work, rather than a tour of features."}</p>
                <Link href="/support/callback" className="mt-6 inline-flex min-h-12 items-center gap-2 text-sm font-bold">{rtl ? "ناقش عرضًا مناسبًا لعملك" : "Discuss a relevant demonstration"}<ArrowUpRight size={16} /></Link>
              </div>
            </div>
          </Reveal>
        </section>
        <section className="container-custom py-12 md:py-16">
          <Reveal>
            <PencilSectionTitle
              isRtl={rtl}
              kicker={rtl ? "من السؤال إلى المحادثة" : "From question to conversation"}
              title={rtl ? "لست بحاجة إلى موجز مثالي. تحتاج إلى سياق صادق." : "You do not need a perfect brief. You need honest context."}
            />
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { en: "What exists today?", ar: "ما الموجود اليوم؟", de: "A brand, website, workflow, idea or unfinished product.", da: "هوية أو موقع أو مسار عمل أو فكرة أو منتج غير مكتمل." },
              { en: "What should become possible?", ar: "ما الذي يجب أن يصبح ممكنًا؟", de: "The change your audience or team needs to feel.", da: "التغيير الذي يحتاج جمهورك أو فريقك إلى الشعور به." },
              { en: "What cannot move?", ar: "ما القيود التي لا يمكن تغييرها؟", de: "A deadline, budget, system, approval or dependency.", da: "موعد أو ميزانية أو نظام أو اعتماد أو ارتباط." },
            ].map((item) => (
              <Reveal key={item.en}>
                <div className={cn(PENCIL.card, "flex h-full items-start gap-4 p-7")}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white"><Check size={17} /></span>
                  <div>
                    <p className="font-bold tracking-tight">{rtl ? item.ar : item.en}</p>
                    <p className="mt-2 text-sm leading-7 text-neutral-600">{rtl ? item.da : item.de}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container-custom pb-12 md:pb-16">
          <Reveal>
            <PencilCTA
              title={rtl ? "بقي سؤال لا تجيب عنه صفحة؟" : "Still have a question a page cannot answer?"}
              desc={rtl ? "أرسل ما يخص مشروعك. المحادثة الجيدة تبدأ حيث تنتهي الإجابة العامة." : "Send what is specific to your project. A useful conversation begins where the general answer ends."}
              actions={
                <>
                  <Link href="/help/contact" className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200">{rtl ? "تحدث مع Pencil" : "Talk to Pencil"}<ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
                  <Link href="/help" className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 text-sm font-bold text-white transition hover:bg-white/10">{rtl ? "تعرّف إلى المنظومة" : "Explore the ecosystem"}</Link>
                </>
              }
            />
          </Reveal>
        </section>

        <Footer />
      </MotionConfig>
    </div>
  );
}
