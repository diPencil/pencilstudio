"use client";

import * as React from "react";
import { PencilCareAccessibility, useCareReducedMotion } from "@/components/pencil-care-accessibility";
import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, MoveUpRight, Pause, Play } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PencilCTA, PencilSectionTitle, PENCIL } from "@/components/pencil-ui";
import { HelpHero } from "@/components/help-hero";
import { STUDIO_CAPABILITIES, STUDIO_SECTORS } from "@/lib/studio-care-content";
import { EcosystemStage, FelizFamilyStage, ProjectStorySlider } from "@/components/help-editorial-interactive";
import { HELP_ARCHIVE_BRANDS, HELP_METHOD, HELP_TICKER } from "@/components/help-editorial-data";
import { cn } from "@/lib/utils";

const sectorsMarquee = `
  @keyframes sectorsMove { to { transform: translateX(-50%); } }
  .sectors-track { animation: sectorsMove 42s linear infinite; }
  @media (prefers-reduced-motion: reduce) { .sectors-track { animation: none; } }
`;

export function HelpEditorialPage() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const reduce = useCareReducedMotion();
  const [capability, setCapability] = React.useState(1);
  const [sectorsPaused, setSectorsPaused] = React.useState(false);
  const [sectorsHovered, setSectorsHovered] = React.useState(false);
  const activeCapability = STUDIO_CAPABILITIES[capability];
  const Next = rtl ? ArrowLeft : ArrowRight;

  return (
    <div data-pencil-care dir={rtl ? "rtl" : "ltr"} className={cn("pencil-help-page min-h-screen overflow-x-clip text-neutral-900", PENCIL.paper)}>
      <PencilCareAccessibility />
      <MotionConfig reducedMotion="user">
      <Header />

      <HelpHero
        size="xl"
        seed={0x1a2b3c4d}
        outline={!rtl}
        breadcrumb={[
          { label: rtl ? "الرئيسية" : "Home", href: "/" },
          { label: rtl ? "مركز المساعدة" : "Help Center" },
        ]}
        badges={
          <>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 pe-4 ps-4 text-[11px] font-bold backdrop-blur-md">
              {rtl ? "مركز المساعدة — منظومة Pencil" : "Help Center — The Pencil ecosystem"}
            </span>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1.5 text-[11px] font-bold text-emerald-300" dir="ltr">
              2014 / Cairo
            </span>
          </>
        }
        titleA={rtl ? "حين يحتاج العمل إلى أكثر من تخصص،" : "When the work needs more than one discipline,"}
        titleB={rtl ? "يحتاج إلى Pencil." : "it needs Pencil."}
        subtitle={rtl ? "شركة ومنظومة تجمع التفكير التجاري والإخراج الإبداعي وتصميم المنتجات والتطوير والذكاء الاصطناعي؛ حتى تتحرك الفكرة من سؤال مهم إلى شيء حقيقي يعمل." : "A company and ecosystem connecting business thinking, creative direction, product design, development and AI, so an important question can become something real that works."}
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <Link href="#ecosystem" className="group inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200">
            {rtl ? "افهم المنظومة" : "Understand the ecosystem"}<Next size={16} className="transition group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
          </Link>
          <Link href="/work" className="group inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-white/10 px-6 text-sm font-bold text-white/65 transition hover:border-white/25 hover:text-white">
            {rtl ? "شاهد الأعمال" : "See the work"}<ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </HelpHero>

      <section className="container-custom pt-12 md:pt-16">
        <Reveal>
          <div className={cn(PENCIL.card, "grid gap-6 p-7 sm:grid-cols-3 md:p-9")}>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">{rtl ? "البداية" : "Established"}</p>
              <p className="mt-2 text-xl font-bold tracking-tight">2014 / Cairo</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">{rtl ? "نطاق الخبرة" : "Working context"}</p>
              <p className="mt-2 text-sm font-bold leading-6">{rtl ? "مصر · الشرق الأوسط · الخليج · أوروبا" : "Egypt · Middle East · Gulf · Europe"}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">{rtl ? "ما نجمعه" : "What we connect"}</p>
              <p className="mt-2 text-sm font-bold leading-6">{rtl ? "العلامة · المنتج · التقنية · الذكاء" : "Brand · Product · Technology · AI"}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-5 flex flex-wrap gap-2">
            {HELP_TICKER.map((item) => (
              <span key={item.en} className={cn(PENCIL.chip, "border border-neutral-200 bg-white text-neutral-700")}>{rtl ? item.ar : item.en}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="ecosystem" className="container-custom scroll-mt-24 py-12 md:py-16">
        <Reveal>
          <PencilSectionTitle
            isRtl={rtl}
            kicker={rtl ? "ما هي Pencil؟" : "What Pencil is"}
            title={rtl ? <>ليست قائمة خدمات. <span className="font-light italic text-neutral-500">إنها منظومة قرار وتنفيذ.</span></> : <>Not a service menu. <span className="font-light italic text-neutral-500">A system for deciding and making.</span></>}
          />
          <p className="mt-4 max-w-2xl leading-8 text-neutral-600">{rtl ? "تتغير نقطة الدخول من مشروع إلى آخر، لكن الطبقات تتصل: Pencil تحمل الرؤية، وPencil Studio تصنع، وعائلة Feliz تضيف ذكاءً متخصصًا إلى المهمة." : "The entrance changes from project to project, but the layers connect: Pencil holds the direction, Pencil Studio makes, and the Feliz family brings specialised intelligence into the mission."}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="mt-8"><EcosystemStage /></div>
        </Reveal>
      </section>

      <section className="container-custom py-6 md:py-8">
        <Reveal>
          <PencilSectionTitle
            isRtl={rtl}
            kicker={rtl ? "ما نصنعه" : "What we make"}
            title={rtl ? <>فكرة واحدة، <span className="font-light italic text-neutral-500">تخصصات تتحرك معًا.</span></> : <>One idea, <span className="font-light italic text-neutral-500">disciplines moving together.</span></>}
          />
          <p className="mt-4 max-w-2xl leading-8 text-neutral-600">{rtl ? "أربع صور للعمل لا تمثل باقات جاهزة؛ بل توضح كيف تتعاون الاستراتيجية والتصميم والتطوير والتشغيل حول النتيجة." : "Four views of the work, not fixed packages. They show how strategy, design, development and operations gather around an outcome."}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="mt-8"><ProjectStorySlider /></div>
        </Reveal>
      </section>

      <section className="container-custom py-12 md:py-16">
        <Reveal>
          <PencilSectionTitle
            isRtl={rtl}
            kicker={rtl ? "قدرات Pencil Studio" : "Pencil Studio capabilities"}
            title={rtl ? <>من أول معنى للعلامة <span className="font-light italic text-neutral-500">حتى آخر خطوة في النشر.</span></> : <>From the first meaning of the brand <span className="font-light italic text-neutral-500">to the final release step.</span></>}
          />
          <p className="mt-4 max-w-2xl leading-8 text-neutral-600">{rtl ? "نضم التخصص المناسب في الوقت المناسب. لا نحمّل المشروع أقسامًا لا يحتاجها، ولا نترك فجوة بين ما وعد به التصميم وما يستطيع المنتج تنفيذه." : "We bring in the right discipline at the right moment: no unnecessary layers, and no gap between what design promises and what the product can deliver."}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className={cn(PENCIL.card, "mt-8 grid overflow-hidden lg:grid-cols-[.78fr_1.22fr]")}>
            <div className="border-b border-neutral-200 lg:border-b-0 lg:border-e">
              {STUDIO_CAPABILITIES.map((item, index) => (
                <button
                  key={item.id}
                  onMouseEnter={() => setCapability(index)}
                  onFocus={() => setCapability(index)}
                  onClick={() => setCapability(index)}
                  className={cn(
                    "group grid min-h-16 w-full grid-cols-[38px_1fr_auto] items-center border-b border-neutral-200 px-5 text-start transition last:border-b-0",
                    capability === index ? "bg-neutral-900 text-white" : "hover:bg-neutral-50"
                  )}
                >
                  <span className="font-mono text-[10px] opacity-40">0{index + 1}</span>
                  <span className="text-sm font-bold md:text-base">{rtl ? item.name.ar : item.name.en}</span>
                  <MoveUpRight size={16} className={cn("transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5", capability === index ? "text-white" : "text-neutral-300")} />
                </button>
              ))}
            </div>
            <motion.div key={activeCapability.id} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} className="relative min-h-[480px] overflow-hidden bg-neutral-900">
              <Image src={activeCapability.image} alt="" fill className="object-cover opacity-60" sizes="(max-width:1024px) 100vw, 62vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
                <h3 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">{rtl ? activeCapability.name.ar : activeCapability.name.en}</h3>
                <p className="mt-4 max-w-2xl leading-8 text-white/70">{rtl ? activeCapability.detail.ar : activeCapability.detail.en}</p>
                <Link href={activeCapability.href} className="group mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200">
                  {rtl ? "استكشف القدرة" : "Explore capability"}<ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </section>

      <section className="py-6 md:py-8">
        <div className="container-custom">
        <Reveal>
          <PencilSectionTitle
            isRtl={rtl}
            kicker={rtl ? "سياقات الأعمال" : "Business contexts"}
            title={rtl ? <>القطاع ليس خلفية للصورة. <span className="font-light italic text-neutral-500">إنه منطق المنتج.</span></> : <>A sector is not visual scenery. <span className="font-light italic text-neutral-500">It is product logic.</span></>}
          />
          <p className="mt-4 max-w-2xl leading-8 text-neutral-600">{rtl ? "الحجز في السياحة يختلف عن العيادات، والمخزون يختلف عن إدارة العملاء المحتملين. نتعلم هذا المنطق قبل أن نرسم الرحلة." : "Travel booking is not clinic booking, and inventory is not lead management. We learn that logic before drawing the journey."}</p>
        </Reveal>
        </div>
        <div className="help-sector-frame mt-8 overflow-hidden" onMouseEnter={() => setSectorsHovered(true)} onMouseLeave={() => setSectorsHovered(false)}>
          <style>{sectorsMarquee}</style>
          <div dir="ltr" className="sectors-track flex w-max" style={{ animationPlayState: sectorsPaused || sectorsHovered ? "paused" : undefined }}>
            {[0, 1].map((half) => (
              <div key={half} aria-hidden={half === 1} className="flex gap-5 pe-5">
                {STUDIO_SECTORS.map((sector, index) => (
                  <article
                    dir={rtl ? "rtl" : "ltr"}
                    key={sector.name.en}
                    className={cn(PENCIL.card, PENCIL.cardHover, "group relative min-h-[440px] w-[300px] shrink-0 overflow-hidden md:w-[360px]")}
                  >
                    <Image src={sector.image} alt={half === 0 ? (rtl ? sector.name.ar : sector.name.en) : ""} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="360px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <p className="font-mono text-[10px] text-white/50">{String(index + 1).padStart(2, "0")}</p>
                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">{rtl ? sector.name.ar : sector.name.en}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/70">{rtl ? sector.need.ar : sector.need.en}</p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="container-custom flex items-center justify-between gap-4">
        <p className="mt-4 text-xs text-neutral-500">{rtl ? "كل قطاع يضيف أسئلة مختلفة إلى الموجز." : "Every sector brings different questions to the brief."}</p>
        <button onClick={() => setSectorsPaused(!sectorsPaused)} aria-pressed={sectorsPaused} aria-label={sectorsPaused ? (rtl ? "استئناف شريط القطاعات" : "Resume sector strip") : (rtl ? "إيقاف شريط القطاعات" : "Pause sector strip")} title={sectorsPaused ? (rtl ? "استئناف شريط القطاعات" : "Resume sector strip") : (rtl ? "إيقاف شريط القطاعات" : "Pause sector strip")} className="mt-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-300">{sectorsPaused ? <Play size={17} /> : <Pause size={17} />}</button>
        </div>
      </section>

      <section className="container-custom py-12 md:py-16">
        <Reveal>
          <PencilSectionTitle
            isRtl={rtl}
            kicker={rtl ? "طبقة الذكاء" : "The intelligence layer"}
            title={rtl ? <>SuperFeliz في المركز. <span className="font-light italic text-neutral-500">وعائلة لكل نوع من التفكير.</span></> : <>SuperFeliz at the centre. <span className="font-light italic text-neutral-500">A family for different kinds of thinking.</span></>}
          />
          <p className="mt-4 max-w-2xl leading-8 text-neutral-600">{rtl ? "هذه منتجات Pencil للذكاء الاصطناعي، بأدوار معلنة وليست أسماء زخرفية. اختر نموذجًا لترى أين يبدأ وأي نوع من العمل يقوده." : "These are Pencil AI products with explicit roles, not decorative names. Choose a model to see where it begins and what kind of work it leads."}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="mt-8"><FelizFamilyStage /></div>
        </Reveal>
        <Reveal delay={0.08}>
          <figure className={cn(PENCIL.card, "relative mt-5 aspect-[16/7] min-h-[250px] overflow-hidden")}>
            <Image src="/help-editorial/pencil-superfeliz.png" alt={rtl ? "صفحة منتج SuperFeliz من Pencil" : "The Pencil SuperFeliz product page"} fill className="object-cover object-top" sizes="(max-width:1280px) 100vw, 1280px" />
            <div className="absolute inset-x-0 bottom-0 bg-black/75 p-5 text-white backdrop-blur-sm">
              <p className="text-xs font-bold">{rtl ? "لقطة من صفحة منتج SuperFeliz" : "A screen from the SuperFeliz product page"}</p>
            </div>
          </figure>
        </Reveal>
      </section>

      <section className="container-custom py-6 md:py-8">
        <Reveal>
          <PencilSectionTitle
            isRtl={rtl}
            kicker={rtl ? "كيف نفكر وننفذ" : "How we think and execute"}
            title={rtl ? <>العمل الجيد لا يبدأ بالشاشة. <span className="font-light italic text-neutral-500">ولا ينتهي عندها.</span></> : <>Good work does not begin with the screen. <span className="font-light italic text-neutral-500">Or end there.</span></>}
          />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {HELP_METHOD.map((item, index) => (
            <Reveal key={item.en} delay={0.04 * (index % 2)}>
              <div className={cn(PENCIL.card, "h-full p-7 md:p-8")}>
                <span className="font-mono text-sm font-bold text-neutral-300">0{index + 1}</span>
                <h3 className="mt-4 text-2xl font-bold tracking-tight">{rtl ? item.ar : item.en}</h3>
                <p className="mt-3 leading-8 text-neutral-600">{rtl ? item.bodyAr : item.bodyEn}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-custom py-12 md:py-16">
        <Reveal>
          <PencilSectionTitle
            isRtl={rtl}
            kicker={rtl ? "دليل موجود في الأرشيف" : "Evidence in the archive"}
            title={rtl ? <>منذ 2014، <span className="font-light italic text-neutral-500">العمل يترك أسماءً وذاكرة.</span></> : <>Since 2014, <span className="font-light italic text-neutral-500">the work has left names and memory.</span></>}
          />
          <p className="mt-4 max-w-2xl leading-8 text-neutral-600">{rtl ? "السياحة والتعليم والعقارات والتجارة والخدمات: أسماء من أرشيف أعمالنا، وسياقات مختلفة شكلت طريقة تفكيرنا." : "Travel, education, property, commerce and services: names from our work archive, and different contexts that shaped the way we think."}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className={cn(PENCIL.card, "mt-8 grid grid-cols-2 gap-px overflow-hidden bg-neutral-200 sm:grid-cols-3 lg:grid-cols-6")}>
            {HELP_ARCHIVE_BRANDS.map((brand) => (
              <div key={brand.name} className="flex h-24 items-center justify-center bg-white p-4">
                <Image src={brand.src} alt={brand.name} width={150} height={64} className="max-h-12 w-auto max-w-[145px] object-contain grayscale transition hover:grayscale-0" />
              </div>
            ))}
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className={cn(PENCIL.card, "h-full p-7 md:p-9")}>
              <p className="text-2xl font-bold leading-snug tracking-tight md:text-3xl">{rtl ? "خبرتنا ليست أسلوبًا بصريًا محفوظًا؛ إنها قدرة أسرع على رؤية ما يهم." : "Experience is not a house style. It is the ability to see what matters sooner."}</p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className={cn(PENCIL.card, "h-full p-7 md:p-9")}>
              <p className="leading-8 text-neutral-600">{rtl ? "من القاهرة إلى مشروعات عبر مصر والشرق الأوسط والخليج وأوروبا، تغيّرت التقنيات والقطاعات. ما بقي ثابتًا هو تحمل مسؤولية الفكرة حتى تصبح قابلة للاستخدام والتشغيل والنمو." : "From Cairo to work across Egypt, the Middle East, the Gulf and Europe, technologies and sectors changed. What remained was responsibility for the idea until it could be used, operated and grown."}</p>
              <a href="#ecosystem" aria-label={rtl ? "انتقل إلى المحتوى" : "Continue"} className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"><ArrowDown size={17} /></a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-custom pb-12 md:pb-16">
        <Reveal>
          <PencilCTA
            title={rtl ? "الآن أنت تعرف ما هي Pencil. ماذا يجب أن نصنع معًا؟" : "Now you know what Pencil is. What should we make together?"}
            desc={rtl ? "ابدأ من الهدف أو المشكلة أو اللحظة التي تريد تغييرها. لسنا بحاجة إلى اسم الخدمة قبل أن نفهم العمل." : "Begin with the goal, the problem or the moment you want to change. We do not need a service name before we understand the work."}
            actions={
              <>
                <Link href="/help/contact" className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200">{rtl ? "ابدأ محادثة" : "Start a conversation"}<ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
                <Link href="/solutions" className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 text-sm font-bold text-white transition hover:bg-white/10">{rtl ? "استكشف الحلول" : "Explore solutions"}</Link>
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
