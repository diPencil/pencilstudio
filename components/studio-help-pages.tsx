"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Mail, PhoneCall, Search, Sparkles, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useLanguage } from "@/components/language-context";
import {
  STUDIO_CAPABILITIES,
  STUDIO_FAQS,
  STUDIO_GUIDES,
  STUDIO_SECTORS,
} from "@/lib/studio-care-content";
import {
  BrandHero,
  Choice,
  FamilyFooterCTA,
  FormField,
  MediaReel,
  SectionIntro,
  StudioCareNav,
  StudioCareShell,
  StudioCTA,
  fieldClass,
  local,
} from "@/components/studio-care-ui";
import { cn } from "@/lib/utils";

const PROCESS = [
  { en: "Frame the real problem", ar: "صياغة المشكلة الحقيقية", bodyEn: "We identify the business change, audience, constraints and decision makers before naming deliverables.", bodyAr: "نحدد التغيير المطلوب والجمهور والقيود وأصحاب القرار قبل تسمية المخرجات." },
  { en: "Direct the experience", ar: "توجيه التجربة", bodyEn: "Strategy, content, user journeys and visual direction become one working system.", bodyAr: "تتحول الاستراتيجية والمحتوى ورحلات المستخدم والاتجاه البصري إلى نظام عمل واحد." },
  { en: "Design and build", ar: "التصميم والبناء", bodyEn: "Specialists work in one sequence so brand, interface, code and production do not drift apart.", bodyAr: "يعمل المتخصصون ضمن تسلسل واحد حتى لا تنفصل الهوية والواجهة والشيفرة والإنتاج." },
  { en: "Test the real thing", ar: "اختبار المنتج الحقيقي", bodyEn: "We review behaviour, content, devices, edge cases and operational ownership before release.", bodyAr: "نراجع السلوك والمحتوى والأجهزة والحالات الاستثنائية وملكية التشغيل قبل النشر." },
  { en: "Launch and keep learning", ar: "الإطلاق واستمرار التعلّم", bodyEn: "Release is the beginning of evidence: support, measurement and the next product decision.", bodyAr: "الإطلاق بداية الأدلة: الدعم والقياس وقرار المنتج التالي." },
];

const BRANDS = [
  "/brands/pencil.png",
  "/brands/DirectTrip.png",
  "/brands/coreschool.png",
  "/brands/aqarawii.png",
  "/brands/supportplus.png",
  "/brands/Taxidia Hotels.png",
  "/brands/Platinum Safes.png",
  "/brands/Sphinx Academy.png",
];

export function NewHelpCenter() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const Next = rtl ? ArrowLeft : ArrowRight;
  const capabilityReel = STUDIO_CAPABILITIES.map((item) => ({
    image: item.image,
    title: local(item.name, rtl),
    line: local(item.detail, rtl),
  }));

  return (
    <StudioCareShell>
      <StudioCareNav family="help" />
      <BrandHero
        family="help"
        code="H/01"
        eyebrow={rtl ? "مدخل إلى عالم Pencil" : "An entrance to Pencil"}
        title={rtl ? "لا نبدأ بالخدمة." : "We do not start with the service."}
        accent={rtl ? "نبدأ بما يجب أن يتغير." : "We start with what must change."}
        description={rtl ? "تعرّف إلى Pencil وPencil Studio وSuperFeliz، وإلى الطريقة التي نجمع بها الاستراتيجية والتصميم والتطوير والتشغيل في مشروع واحد متماسك." : "Meet Pencil, Pencil Studio and SuperFeliz, and see how strategy, design, development and operations become one coherent engagement."}
        image="/hero-section.jpg"
        video
      >
        <div className="flex flex-wrap gap-3">
          <Link href="#capabilities" className="inline-flex min-h-12 items-center gap-2 bg-neutral-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-neutral-800">
            {rtl ? "استكشف ما نبنيه" : "Explore what we build"} <Next size={16} />
          </Link>
          <Link href="/work" className="inline-flex min-h-12 items-center border border-neutral-300 bg-white/70 px-6 py-3 text-sm font-bold transition hover:border-neutral-950">
            {rtl ? "شاهد الأعمال" : "View the work"}
          </Link>
        </div>
      </BrandHero>

      <section className="border-b border-neutral-200 bg-white">
        <div className="container-custom grid gap-px bg-neutral-200 md:grid-cols-2 lg:grid-cols-4">
          {[
            { code: "01", title: "Pencil", ar: "Pencil", body: "The brand, point of view and long-term digital direction.", bodyAr: "العلامة والرؤية والاتجاه الرقمي طويل الأمد." },
            { code: "02", title: "Pencil Studio", ar: "Pencil Studio", body: "The multidisciplinary team that makes and operates the work.", bodyAr: "الفريق متعدد التخصصات الذي يصنع العمل ويشغّله." },
            { code: "03", title: "SuperFeliz", ar: "SuperFeliz", body: "Pencil's AI model and central intelligence layer.", bodyAr: "نموذج الذكاء الاصطناعي لدى Pencil وطبقة الذكاء المركزية." },
            { code: "04", title: "Feliz family", ar: "عائلة Feliz", body: "Focused model voices organised around different kinds of work.", bodyAr: "أصوات نماذج متخصصة منظّمة حول أنواع مختلفة من العمل." },
          ].map((item) => (
            <div key={item.code} className="bg-white p-7 md:min-h-60 md:p-9">
              <p className="font-mono text-xs font-black text-[#2057ff]">{item.code}</p>
              <h2 className="mt-8 text-2xl font-black">{rtl ? item.ar : item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{rtl ? item.bodyAr : item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="capabilities" className="container-custom py-20 md:py-28">
        <SectionIntro
          number="01"
          eyebrow={rtl ? "القدرات" : "Capabilities"}
          title={rtl ? <>استراتيجية، حرفة، تقنية، <span className="font-light italic text-neutral-400">وتشغيل.</span></> : <>Strategy, craft, technology <span className="font-light italic text-neutral-400">and operations.</span></>}
          body={rtl ? "نختار التخصصات وفق المشكلة. قد يبدأ العمل من هوية، لكنه لا يتوقف عند ملف الشعار إذا كان النشاط يحتاج منتجًا أو نظامًا أو نموًا." : "We assemble disciplines around the problem. Work may begin with a brand, but it does not stop at a logo file when the business needs a product, system or growth engine."}
        />
        <div className="mt-12"><MediaReel items={capabilityReel} /></div>
        <div className="mt-6 grid gap-px border border-neutral-200 bg-neutral-200 md:grid-cols-3">
          {STUDIO_CAPABILITIES.map((item) => (
            <Link key={item.id} href={item.href} className="group bg-white p-6 transition hover:bg-neutral-950 hover:text-white">
              <p className="text-lg font-black">{local(item.name, rtl)}</p>
              <p className="mt-2 text-sm leading-6 text-neutral-500 transition group-hover:text-white/55">{local(item.line, rtl)}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold">{rtl ? "تفاصيل القدرة" : "Capability detail"} <ArrowUpRight size={14} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 py-20 text-white md:py-28">
        <div className="container-custom">
          <SectionIntro
            dark
            number="02"
            eyebrow={rtl ? "القطاعات" : "Business contexts"}
            title={rtl ? <>نفهم منطق القطاع، <span className="font-light italic text-white/40">لا شكله فقط.</span></> : <>We learn the operating logic, <span className="font-light italic text-white/40">not only the look.</span></>}
            body={rtl ? "الحجز في السياحة ليس الحجز في العيادات، وإدارة المخزون ليست إدارة العملاء المحتملين. يبدأ التصميم الجيد من هذا الفرق." : "Travel booking is not clinic booking, and inventory is not lead management. Good design starts with that difference."}
          />
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {STUDIO_SECTORS.map((sector, index) => (
              <div key={sector.name.en} className="group relative min-h-72 overflow-hidden bg-neutral-950">
                <Image src={sector.image} alt={local(sector.name, rtl)} fill className="object-cover opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-65" sizes="(max-width:1024px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-mono text-[10px] text-white/40">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-xl font-black">{local(sector.name, rtl)}</h3>
                  <p className="mt-2 text-xs leading-6 text-white/55">{local(sector.need, rtl)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom py-20 md:py-28">
        <SectionIntro
          number="03"
          eyebrow={rtl ? "المنهج" : "The working method"}
          title={rtl ? <>من سؤال غير مرتب <span className="font-light italic text-neutral-400">إلى شيء يعمل.</span></> : <>From an untidy question <span className="font-light italic text-neutral-400">to something that works.</span></>}
        />
        <div className="mt-12 border-t border-neutral-300">
          {PROCESS.map((step, index) => (
            <div key={step.en} className="grid gap-5 border-b border-neutral-300 py-7 md:grid-cols-[80px_.65fr_1fr] md:items-start">
              <p className="font-mono text-xs font-black text-[#2057ff]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="text-xl font-black">{rtl ? step.ar : step.en}</h3>
              <p className="leading-7 text-neutral-600">{rtl ? step.bodyAr : step.bodyEn}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white py-16">
        <div className="container-custom">
          <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-neutral-400">{rtl ? "علامات موجودة في أرشيف أعمال Pencil" : "Brands present in the Pencil project archive"}</p>
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8">
            {BRANDS.map((src) => <div key={src} className="relative h-12 grayscale transition hover:grayscale-0"><Image src={src} alt="" fill className="object-contain" sizes="140px" /></div>)}
          </div>
        </div>
      </section>

      <section className="container-custom py-20 md:py-28">
        <StudioCTA
          dark={false}
          title={rtl ? "من القاهرة عام 2014 إلى أعمال عبر مصر والمنطقة والخليج وأوروبا." : "From Cairo in 2014 to work across Egypt, the region, the Gulf and Europe."}
          body={rtl ? "لا نستخدم التاريخ كرقم تسويقي؛ نستخدمه كذاكرة مهنية. كل مشروع جديد يستفيد من قرارات صحيحة وأخطاء تعلّمنا منها وسياقات عمل مختلفة." : "We do not use history as a marketing number. We use it as professional memory: decisions that worked, mistakes we learned from, and different operating contexts."}
          primary={{ label: rtl ? "قصة Pencil" : "The Pencil story", href: "/about" }}
          secondary={{ label: rtl ? "تصفح الأعمال" : "Browse work", href: "/work" }}
        />
      </section>
      <FamilyFooterCTA family="help" />
    </StudioCareShell>
  );
}

const FAQ_CATEGORIES = [
  { id: "all", en: "All", ar: "الكل" },
  { id: "studio", en: "Pencil", ar: "Pencil" },
  { id: "services", en: "What we create", ar: "ما نصنعه" },
  { id: "process", en: "How we work", ar: "طريقة العمل" },
  { id: "technology", en: "Technology", ar: "التقنية" },
  { id: "feliz", en: "SuperFeliz", ar: "SuperFeliz" },
  { id: "engagement", en: "Working together", ar: "العمل معًا" },
];

export function NewHelpFaqs() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const [category, setCategory] = React.useState("all");
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(0);
  const term = query.trim().toLowerCase();
  const visible = STUDIO_FAQS.filter((item) => (category === "all" || item.category === category) && (!term || `${item.q.en} ${item.q.ar} ${item.a.en} ${item.a.ar}`.toLowerCase().includes(term)));
  const visual = STUDIO_CAPABILITIES[open % STUDIO_CAPABILITIES.length];

  return (
    <StudioCareShell>
      <StudioCareNav family="help" />
      <BrandHero family="help" code="H/02" eyebrow={rtl ? "أسئلة جادة، وإجابات كاملة" : "Serious questions, complete answers"} title={rtl ? "قبل أن تسأل عن السعر،" : "Before you ask for the price,"} accent={rtl ? "افهم كيف نفكر." : "understand how we think."} description={rtl ? "إجابات عميقة عن Pencil وما نصنعه وكيف نعمل والتقنية وSuperFeliz وشكل التعاون طويل الأمد." : "Deep answers about Pencil, what we make, how we work, technology, SuperFeliz and long-term collaboration."} image="/business-sectors/education-lms.jpg">
        <div className="flex max-w-xl items-center gap-3 border-b-2 border-neutral-950 bg-white/80 py-3">
          <Search size={18} className="text-neutral-500" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={rtl ? "ابحث بكلمة من سؤالك" : "Search with a word from your question"} className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400" />
          {query && <button aria-label="Clear" onClick={() => setQuery("")} className="flex h-10 w-10 items-center justify-center"><X size={16} /></button>}
        </div>
      </BrandHero>

      <section className="container-custom py-16 md:py-24">
        <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
          {FAQ_CATEGORIES.map((item) => <button key={item.id} onClick={() => { setCategory(item.id); setOpen(0); }} className={cn("min-h-11 shrink-0 border px-4 text-xs font-bold transition", category === item.id ? "border-neutral-950 bg-neutral-950 text-white" : "border-neutral-300 bg-white hover:border-neutral-950")}>{rtl ? item.ar : item.en}</button>)}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_380px]">
          <div className="border-t border-neutral-300">
            {visible.map((item, index) => {
              const active = open === index;
              return (
                <div key={item.q.en} className="border-b border-neutral-300">
                  <button onClick={() => setOpen(active ? -1 : index)} className="grid min-h-24 w-full grid-cols-[42px_1fr_24px] items-center gap-4 py-5 text-start">
                    <span className="font-mono text-[10px] font-black text-[#2057ff]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-lg font-black md:text-xl">{local(item.q, rtl)}</span>
                    <ChevronDown size={18} className={cn("transition-transform", active && "rotate-180")} />
                  </button>
                  <AnimatePresence initial={false}>
                    {active && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="pb-8 ps-[58px] text-base leading-8 text-neutral-600">{local(item.a, rtl)}</p></motion.div>}
                  </AnimatePresence>
                </div>
              );
            })}
            {visible.length === 0 && <div className="border-b border-neutral-300 py-16 text-center text-neutral-500">{rtl ? "لا توجد إجابة مطابقة. أرسل سؤالك بصياغتك." : "No matching answer. Send the question in your own words."}</div>}
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
              <AnimatePresence mode="wait">
                <motion.div key={visual.image} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                  <Image src={visual.image} alt="" fill className="object-cover opacity-75" sizes="380px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/50">{rtl ? "سياق من عملنا" : "Context from our work"}</p>
                <p className="mt-3 text-2xl font-black">{local(visual.name, rtl)}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <FamilyFooterCTA family="help" />
    </StudioCareShell>
  );
}

export function NewHelpGuides() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const [selected, setSelected] = React.useState(0);
  const guide = STUDIO_GUIDES[selected];
  const Next = rtl ? ArrowLeft : ArrowRight;
  return (
    <StudioCareShell>
      <StudioCareNav family="help" />
      <BrandHero family="help" code="H/03" eyebrow={rtl ? "دفاتر عمل Pencil" : "Pencil playbooks"} title={rtl ? "لا تحتاج إلى معرفة كل شيء." : "You do not need to know everything."} accent={rtl ? "تحتاج إلى السؤال التالي." : "You need the next question."} description={rtl ? "أدلة عملية للتخطيط للعلامات والمواقع والأنظمة والمحتوى وUX والإطلاق والذكاء الاصطناعي والعمل معنا بكفاءة." : "Practical playbooks for brands, websites, systems, content, UX, launch, AI and working effectively with us."} image="/business-sectors/real-estate.jpg" />

      <section className="container-custom py-20 md:py-28">
        <SectionIntro number="01" eyebrow={rtl ? "اختر دفتر العمل" : "Choose a playbook"} title={rtl ? <>اعمل على القرار، <span className="font-light italic text-neutral-400">لا على الحشو.</span></> : <>Work on the decision, <span className="font-light italic text-neutral-400">not the filler.</span></>} />
        <div className="mt-12 grid gap-0 border border-neutral-300 lg:grid-cols-[360px_1fr]">
          <div className="border-b border-neutral-300 bg-white lg:border-b-0 lg:border-e">
            {STUDIO_GUIDES.map((item, index) => (
              <button key={item.id} onClick={() => setSelected(index)} className={cn("grid min-h-16 w-full grid-cols-[36px_1fr] items-center border-b border-neutral-200 px-5 py-3 text-start transition last:border-b-0", selected === index ? "bg-neutral-950 text-white" : "hover:bg-neutral-100")}>
                <span className="font-mono text-[10px] opacity-50">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block text-[10px] font-black uppercase tracking-[0.15em] opacity-50">{item.category}</span>
                  <span className="mt-1 block text-sm font-bold">{local(item.title, rtl)}</span>
                </span>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.article key={guide.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.28 }} className="bg-white">
              <div className="relative min-h-72 overflow-hidden md:min-h-96">
                <Image src={guide.image} alt={local(guide.title, rtl)} fill className="object-cover" sizes="(max-width:1024px) 100vw, 70vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/55">{guide.category}</p>
                  <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-5xl">{local(guide.title, rtl)}</h2>
                </div>
              </div>
              <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[.75fr_1fr]">
                <div>
                  <p className="text-lg leading-8 text-neutral-600">{local(guide.intro, rtl)}</p>
                  <Link href="/help/contact" className="mt-7 inline-flex min-h-11 items-center gap-2 border-b-2 border-neutral-950 text-sm font-bold">{rtl ? "حوّل الدليل إلى مشروع" : "Turn this into a project"} <Next size={15} /></Link>
                </div>
                <ol className="border-t border-neutral-300">
                  {(rtl ? guide.steps.ar : guide.steps.en).map((step, index) => <li key={step} className="grid grid-cols-[36px_1fr] gap-3 border-b border-neutral-300 py-4 text-sm font-bold"><span className="font-mono text-[10px] text-[#2057ff]">{String(index + 1).padStart(2, "0")}</span>{step}</li>)}
                </ol>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      <section className="bg-neutral-950 py-20 text-white md:py-28">
        <div className="container-custom">
          <SectionIntro dark number="02" eyebrow={rtl ? "المكتبة" : "The collection"} title={rtl ? <>عشرة دفاتر، <span className="font-light italic text-white/40">عشرة أنواع من القرارات.</span></> : <>Ten playbooks, <span className="font-light italic text-white/40">ten kinds of decisions.</span></>} />
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {STUDIO_GUIDES.map((item, index) => <button key={item.id} onClick={() => { setSelected(index); window.scrollTo({ top: 760, behavior: "smooth" }); }} className="group min-h-56 bg-neutral-950 p-7 text-start transition hover:bg-white hover:text-neutral-950"><p className="font-mono text-[10px] text-[#61d095]">{String(index + 1).padStart(2, "0")} / {item.category}</p><h3 className="mt-8 text-xl font-black">{local(item.title, rtl)}</h3><p className="mt-3 text-sm leading-6 text-white/45 transition group-hover:text-neutral-500">{local(item.intro, rtl)}</p></button>)}
          </div>
        </div>
      </section>
      <FamilyFooterCTA family="help" />
    </StudioCareShell>
  );
}

const INTENTS = [
  { id: "create", en: "Create", ar: "إنشاء", lineEn: "A new brand, website, app, system, campaign or AI experience.", lineAr: "علامة أو موقع أو تطبيق أو نظام أو حملة أو تجربة ذكاء اصطناعي جديدة." },
  { id: "improve", en: "Improve", ar: "تحسين", lineEn: "An existing experience, identity, conversion journey or operating process.", lineAr: "تجربة أو هوية أو رحلة تحويل أو عملية تشغيل قائمة." },
  { id: "fix", en: "Fix", ar: "إصلاح", lineEn: "A technical, product, content or infrastructure problem.", lineAr: "مشكلة تقنية أو مشكلة منتج أو محتوى أو بنية." },
  { id: "launch", en: "Launch", ar: "إطلاق", lineEn: "A prepared product that needs production, release and operational ownership.", lineAr: "منتج جاهز يحتاج إلى تنفيذ ونشر وملكية تشغيلية." },
];

export function NewHelpContact() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const [intent, setIntent] = React.useState("create");
  const [capability, setCapability] = React.useState("web");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState("");
  const [done, setDone] = React.useState(false);
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.trim().length < 30) {
      setError(rtl ? "أضف اسمك وبريدًا صحيحًا وسياقًا واضحًا لا يقل عن سطرين." : "Add your name, a valid email, and at least two clear lines of context.");
      return;
    }
    setError("");
    setDone(true);
  };

  return (
    <StudioCareShell>
      <StudioCareNav family="help" />
      <BrandHero family="help" code="H/04" eyebrow={rtl ? "ابدأ بالسؤال الحقيقي" : "Start with the real question"} title={rtl ? "ما الذي تحاول" : "What are you trying to"} accent={rtl ? "إنشاءه أو تحسينه أو إصلاحه أو إطلاقه؟" : "create, improve, fix or launch?"} description={rtl ? "لا تحتاج إلى معرفة اسم الخدمة. أخبرنا بما تريد تغييره، وسنساعدك في تحويله إلى مشروع واضح." : "You do not need to know the service name. Tell us what you want to change, and we will help turn it into a clear project."} image="/business-sectors/crm-automation.jpg" />

      <section className="container-custom py-20 md:py-28">
        <SectionIntro number="01" eyebrow={rtl ? "النية" : "The intent"} title={rtl ? <>ابدأ بالفعل، <span className="font-light italic text-neutral-400">ثم نحدد الشكل.</span></> : <>Start with the verb, <span className="font-light italic text-neutral-400">then define the form.</span></>} />
        <div className="mt-10 grid gap-3 md:grid-cols-4">
          {INTENTS.map((item) => <Choice key={item.id} active={intent === item.id} onClick={() => setIntent(item.id)} title={rtl ? item.ar : item.en} body={rtl ? item.lineAr : item.lineEn} />)}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white py-20 md:py-28">
        <div className="container-custom">
          <SectionIntro number="02" eyebrow={rtl ? "ما يمكن أن يصبح مشروعًا" : "What can become a project"} title={rtl ? <>من فكرة غير مرتبة <span className="font-light italic text-neutral-400">إلى عمل حقيقي.</span></> : <>From an untidy idea <span className="font-light italic text-neutral-400">to real work.</span></>} />
          <div className="mt-12 grid gap-px border border-neutral-200 bg-neutral-200 md:grid-cols-2 lg:grid-cols-3">
            {STUDIO_CAPABILITIES.map((item) => <button key={item.id} onClick={() => setCapability(item.id)} className={cn("group relative min-h-72 overflow-hidden text-start", capability === item.id && "ring-4 ring-inset ring-[#2057ff]")}><Image src={item.image} alt="" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width:1024px) 50vw, 33vw" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 text-white"><h3 className="text-xl font-black">{local(item.name, rtl)}</h3><p className="mt-2 text-xs leading-6 text-white/60">{local(item.line, rtl)}</p></div></button>)}
          </div>
        </div>
      </section>

      <section className="container-custom grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_.72fr]">
        <div>
          <SectionIntro number="03" eyebrow={rtl ? "اكتب لنا" : "Write to us"} title={rtl ? "أرسل السياق كما هو." : "Send the context as it is."} />
          <div className="mt-10 border-t border-neutral-300">
            {[
              { icon: Mail, label: "help@dipencil.com", href: "mailto:help@dipencil.com", noteEn: "For briefs, links, documents and detailed context.", noteAr: "للموجزات والروابط والمستندات والسياق المفصل." },
              { icon: WhatsAppIcon, label: "+20 100 377 8273", href: "https://wa.me/201003778273", noteEn: "For a direct first conversation and time-sensitive context.", noteAr: "لبداية مباشرة والسياق الحساس للوقت." },
              { icon: PhoneCall, label: "+20 100 377 8273", href: "tel:+201003778273", noteEn: "Sunday to Thursday, 10am–7pm Cairo time.", noteAr: "من الأحد إلى الخميس، 10 صباحًا–7 مساءً بتوقيت القاهرة." },
            ].map((item) => <a key={item.href} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="grid grid-cols-[44px_1fr_auto] items-center gap-4 border-b border-neutral-300 py-5"><item.icon size={19} /><span><span className="block font-bold" dir="ltr">{item.label}</span><span className="mt-1 block text-xs text-neutral-500">{rtl ? item.noteAr : item.noteEn}</span></span><ArrowUpRight size={16} /></a>)}
          </div>
        </div>

        <div className="border border-neutral-300 bg-white p-7 md:p-9">
          {!done ? (
            <form onSubmit={submit} className="space-y-5">
              <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#2057ff]">{rtl ? "بداية المشروع" : "Project opening"}</p>
              <FormField label={rtl ? "الاسم" : "Name"}><input value={name} onChange={(e) => setName(e.target.value)} className={fieldClass} /></FormField>
              <FormField label={rtl ? "البريد" : "Email"}><input value={email} onChange={(e) => setEmail(e.target.value)} dir="ltr" className={fieldClass} /></FormField>
              <FormField label={rtl ? "ماذا تريد أن يتغير؟" : "What should change?"} hint={rtl ? "اذكر ما هو موجود الآن، وما الذي يجب أن يصبح ممكنًا بعد المشروع." : "Describe what exists today and what should become possible after the project."}><textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={7} className={cn(fieldClass, "resize-none")} /></FormField>
              <div className="border-s-2 border-[#2057ff] bg-neutral-50 p-4 text-xs leading-6 text-neutral-600">
                {rtl ? `المسار المختار: ${INTENTS.find((item) => item.id === intent)?.ar} / ${local(STUDIO_CAPABILITIES.find((item) => item.id === capability)!.name, rtl)}` : `Selected route: ${INTENTS.find((item) => item.id === intent)?.en} / ${local(STUDIO_CAPABILITIES.find((item) => item.id === capability)!.name, rtl)}`}
              </div>
              {error && <p className="text-sm font-bold text-red-600">{error}</p>}
              <button className="min-h-12 w-full bg-neutral-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-neutral-800">{rtl ? "إرسال بداية المشروع" : "Send project opening"}</button>
            </form>
          ) : (
            <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
              <span className="flex h-16 w-16 items-center justify-center bg-[#dff7ea] text-emerald-700"><Check size={24} /></span>
              <h2 className="mt-6 text-2xl font-black">{rtl ? "وصل السياق." : "Context received."}</h2>
              <p className="mt-3 max-w-sm leading-7 text-neutral-600">{rtl ? "الخطوة التالية ليست ردًا محفوظًا. سنراجع ما كتبته ونعود بالسؤال أو المسار الذي يدفع الفكرة إلى الأمام." : "The next step is not a canned reply. We review what you wrote and return with the question or route that moves it forward."}</p>
              <button onClick={() => setDone(false)} className="mt-7 min-h-11 border border-neutral-300 px-5 text-sm font-bold">{rtl ? "إرسال سياق آخر" : "Send another context"}</button>
            </div>
          )}
        </div>
      </section>
    </StudioCareShell>
  );
}
