"use client";

import * as React from "react";
import { PencilCareAccessibility } from "@/components/pencil-care-accessibility";
import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, GitBranch, Mail, MessageCircle, Pause, Play, Users } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StudioCareNav } from "@/components/studio-care-ui";
import { useLanguage } from "@/components/language-context";
import { ClientRequestComposer, ClientRequestWorkflow, ClientSupportModels } from "@/components/pencil-client-workbench";

const visuals = [
  { src: "/help-editorial/pencil-home.png", en: "Pencil Studio / Website", ar: "Pencil Studio / الموقع" },
  { src: "/help-editorial/pencil-solutions.png", en: "Pencil / Solutions", ar: "Pencil / الحلول" },
  { src: "/help-editorial/pencil-cloud.png", en: "Pencil / Cloud & Hosting", ar: "Pencil / السحابة والاستضافة" },
];
function SectionTitle({ number, label, title, detail, dark = false }: { number: string; label: string; title: string; detail?: string; dark?: boolean }) {
  return <div className="grid gap-7 lg:grid-cols-[1fr_.8fr]"><div><p className={`text-xs font-bold uppercase ${dark ? "text-[#61d095]" : "text-[#2057ff]"}`}>{number} / {label}</p><h2 className="mt-5 max-w-3xl text-3xl font-bold md:text-4xl">{title}</h2></div>{detail && <p className={`max-w-2xl text-base leading-8 lg:pt-7 ${dark ? "text-white/75" : "text-neutral-600"}`}>{detail}</p>}</div>;
}

export function PencilClientPartnershipPage() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const tx = (en: string, ar: string) => rtl ? ar : en;
  const Next = rtl ? ArrowLeft : ArrowRight;
  const [model, setModel] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  return <MotionConfig reducedMotion="user"><div data-pencil-care dir={rtl ? "rtl" : "ltr"} className="pencil-client-page min-h-screen bg-[#f7f7f5] text-neutral-950">
      <PencilCareAccessibility />
    <Header solid />
    <style>{`
      .pencil-client-page{width:100%;overflow-x:clip;letter-spacing:0}
      .pencil-client-page .container-custom{width:100%;min-width:0}
      .pencil-client-page .grid>*{min-width:0}
      .pencil-client-page h1,.pencil-client-page h2,.pencil-client-page h3,.pencil-client-page p{overflow-wrap:break-word;letter-spacing:0}
      .pencil-client-page:dir(rtl) h1,.pencil-client-page:dir(rtl) h2,.pencil-client-page:dir(rtl) h3{line-height:1.4}
      .pencil-client-page main [id]{scroll-margin-top:90px}
      .pencil-client-page main button:focus-visible,.pencil-client-page main a:focus-visible{outline:3px solid #2057ff;outline-offset:4px}
      .pencil-client-page [role=tab]:focus-visible{outline-offset:-4px}
      .client-nav-offset{padding-top:64px}
      .client-visual-strip{animation:clientStrip 35s linear infinite}
      .client-strip-frame:hover .client-visual-strip,.client-strip-frame:focus-within .client-visual-strip{animation-play-state:paused}
      @keyframes clientStrip{to{transform:translateX(-50%)}}
      @media(max-width:640px){
        .pencil-client-page .container-custom{padding-inline:24px}
        .client-nav-offset{padding-top:104px}
        .pencil-client-page header>div>div{height:104px;padding-top:48px}
        .pencil-client-page header>div>div>.absolute{top:24px}
        .pencil-client-page header button[aria-haspopup]{min-width:44px;min-height:44px}
        .pencil-client-page header>div{padding-inline:16px}
        .pencil-client-page header>div>div>.flex{gap:4px}
      }
      @media(prefers-reduced-motion:reduce){.client-visual-strip{animation:none}.client-strip-frame{overflow-x:auto}}
    `}</style>
    <main>
      <div className="client-nav-offset"><StudioCareNav family="support" /></div>
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <Image src="/hero-section.jpg" alt={tx("Pencil Studio creative and digital composition", "تكوين بصري للأعمال الإبداعية والرقمية في Pencil Studio")} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="container-custom relative py-10 md:py-16">
          <div className="flex items-center justify-between gap-5 text-xs font-bold uppercase"><span>Pencil / {tx("Client partnerships", "علاقات العملاء")}</span><span className="font-mono text-[#61d095]">S / 01</span></div>
          <motion.div initial={false} whileInView={{ opacity: 1 }} className="max-w-4xl py-12 md:py-16">
            <p className="text-xs font-bold uppercase text-white/75">{tx("Customer Support", "دعم العملاء")}</p>
            <h1 className="mt-6 text-[34px] font-black leading-tight md:text-5xl lg:text-6xl">{tx("An extension", "امتداد لفريقك.")}<span className="block text-[#61d095]">{tx("of your team.", "ومعرفة تتراكم مع العمل.")}</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/90 md:text-lg">{tx("Your company does not stop needing design, content or technical work when one project is delivered. Pencil can stay involved—with the brand context, product decisions and working relationships already in place—to help your team keep creating, maintaining and improving.", "لا تنتهي حاجة شركتك إلى التصميم والمحتوى والعمل التقني بتسليم مشروع واحد. تستطيع Pencil مواصلة التعاون، بفهم الهوية وقرارات المنتج وعلاقات العمل القائمة، لمساعدة فريقك على استمرار الإنتاج والصيانة والتحسين.")}</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4"><a href="#client-support-models" className="inline-flex min-h-12 items-center gap-5 border-b border-[#61d095] text-sm font-bold">{tx("Find a working model", "استكشف نموذج التعاون")}<Next size={19} /></a><a href="#client-request" className="inline-flex min-h-12 items-center gap-3 text-sm font-bold">{tx("Discuss an existing request", "ناقش طلبًا قائمًا")}<ArrowUpRight size={18} /></a></div>
          </motion.div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/30 pt-6 text-sm text-white/80">{[tx("Active projects", "مشروعات نشطة"), tx("Recurring production", "إنتاج متكرر"), tx("Technical continuity", "استمرارية تقنية"), tx("Next phases", "مراحل تالية")].map(item => <span key={item} className="flex items-center gap-2"><Check size={14} className="text-[#61d095]" />{item}</span>)}</div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom"><SectionTitle number="01" label={tx("The value of continuity", "قيمة الاستمرارية")} title={tx("Less time rebuilding context. More room to do useful work.", "وقت أقل لإعادة شرح السياق. ومساحة أكبر للعمل المفيد.")} detail={tx("When the same partner understands the identity, website, system and people involved, the next request can begin with what changed. That context is useful only when it is paired with clear priorities, approvals and responsibility.", "عندما يفهم الشريك الهوية والموقع والنظام والأشخاص المعنيين، يبدأ الطلب التالي بما تغير. ولا تصبح هذه المعرفة مفيدة إلا حين تقترن بأولويات واعتمادات ومسؤوليات واضحة.")} />
          <div className="mt-12 grid gap-7 border-t border-neutral-300 pt-7 md:grid-cols-3">{[
            [tx("The brand stays connected.", "تبقى الهوية متصلة بالعمل."), tx("New content, campaign assets and presentations use the approved direction rather than starting from scratch each time.", "تستخدم مواد المحتوى والحملات والعروض الجديدة الاتجاه المعتمد بدل البدء من الصفر كل مرة.")],
            [tx("The product keeps its history.", "يحتفظ المنتج بسياقه."), tx("A change is considered against existing journeys, code and integrations—not just the newest screen request.", "نراجع التغيير وفق الرحلات والشيفرة والتكاملات الحالية، لا وفق أحدث طلب شاشة فقط.")],
            [tx("Your team has a decision path.", "لفريقك مسار واضح للقرار."), tx("Requests can cross departments while ownership, consolidated feedback and final approval remain explicit.", "يمكن للطلبات أن تشمل إدارات عدة، مع وضوح المسؤولية وتجميع الملاحظات والاعتماد النهائي.")],
          ].map(([title, body]) => <div key={title}><h3 className="text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-neutral-600">{body}</p></div>)}</div>
          <div className="mt-12 flex items-center justify-between gap-5"><p className="text-xs font-bold uppercase text-neutral-500">Pencil Studio · Digital products · Cloud</p><button onClick={() => setPaused(!paused)} aria-label={paused ? tx("Play image reel", "تشغيل شريط الصور") : tx("Pause image reel", "إيقاف شريط الصور")} title={paused ? tx("Play image reel", "تشغيل شريط الصور") : tx("Pause image reel", "إيقاف شريط الصور")} aria-pressed={paused} className="flex h-12 w-12 shrink-0 items-center justify-center border border-neutral-300">{paused ? <Play size={18} /> : <Pause size={18} />}</button></div>
        </div>
        <div className="client-strip-frame mt-7 overflow-hidden border-y border-neutral-300 bg-white py-6" dir="ltr"><div className="client-visual-strip flex w-max" style={{ animationPlayState: paused ? "paused" : undefined }}>{[...visuals, ...visuals].map((item, index) => <figure key={item.src + index} aria-hidden={index >= visuals.length ? true : undefined} className="mx-3 w-[300px] shrink-0 md:w-[430px]"><div className="relative aspect-[16/10] bg-neutral-100"><Image src={item.src} alt={index >= visuals.length ? "" : tx(item.en, item.ar)} fill loading="eager" sizes="(max-width:768px) 300px, 430px" className="object-contain" /></div><figcaption className="mt-3 text-xs text-neutral-500">{tx(item.en, item.ar)}</figcaption></figure>)}</div></div>
      </section>

      <section id="client-support-models" className="border-y border-neutral-200 bg-white py-20 md:py-28"><div className="container-custom">
        <SectionTitle number="02" label={tx("Ways to work together", "نماذج العمل معًا")} title={tx("Choose the relationship around the work.", "نحدد العلاقة وفق طبيعة العمل.")} detail={tx("An active project needs stage decisions. A company with continuous needs needs a repeatable arrangement. A product needs room for the next version. These models can be discussed separately or combined where the work calls for it.", "يحتاج المشروع النشط إلى قرارات مرتبطة بالمراحل، وتحتاج الشركة ذات الاحتياجات المستمرة إلى ترتيب قابل للتكرار، ويحتاج المنتج إلى مساحة لنسخته التالية. يمكن مناقشة هذه النماذج بصورة مستقلة أو جمعها وفق الحاجة.")} /><div className="mt-12"><ClientSupportModels rtl={rtl} selected={model} onSelect={setModel} /></div>
      </div></section>

      <section className="bg-neutral-950 py-20 text-white md:py-28"><div className="container-custom">
        <SectionTitle dark number="03" label={tx("From request to delivery", "من الطلب إلى التسليم")} title={tx("One request. A clear chain of responsibility.", "طلب واحد. وتسلسل واضح للمسؤولية.")} detail={tx("A continuing partnership should make work easier to coordinate, not harder to track. The request needs context, a scope decision, the right discipline and an agreed result. The detail changes with the service; the decision path should stay clear.", "يجب أن تجعل الشراكة المستمرة تنسيق العمل أسهل، لا متابعته أصعب. يحتاج الطلب إلى سياق وقرار بشأن النطاق وتخصص مناسب ونتيجة متفق عليها. تتغير التفاصيل مع الخدمة، لكن مسار القرار يجب أن يظل واضحًا.")} /><div className="mt-12"><ClientRequestWorkflow rtl={rtl} /></div><p className="mt-10 max-w-3xl border-s-2 border-[#f6c453] ps-5 text-sm leading-7 text-white/65">{tx("This is a working model to agree, not a promise that every request follows a fixed turnaround. Priority, availability and response arrangements depend on the active agreement and the impact of the work.", "هذا نموذج عمل نتفق عليه، وليس وعدًا بمدة تنفيذ ثابتة لكل طلب. تعتمد الأولوية والتوافر وترتيبات الاستجابة على الاتفاق الحالي وأثر العمل.")}</p>
      </div></section>

      <section className="bg-[#e7f4ec] py-20 md:py-28"><div className="container-custom grid gap-12 lg:grid-cols-[.8fr_1fr]">
        <div><Users size={30} className="text-[#2057ff]" /><p className="mt-6 text-xs font-bold uppercase text-[#2057ff]">04 / {tx("Working across departments", "العمل بين الإدارات")}</p><h2 className="mt-5 text-3xl font-bold md:text-4xl">{tx("Many inputs. One approved direction.", "آراء متعددة. واتجاه معتمد واحد.")}</h2><p className="mt-6 text-base leading-8 text-neutral-600">{tx("Marketing, operations and management can all have valid requirements. Pencil can help connect them, but conflicting instructions should not become conflicting versions. A named owner brings the inputs together, resolves the decision and sends one consolidated round.", "قد يكون للتسويق والتشغيل والإدارة متطلبات صحيحة مختلفة. تساعد Pencil على ربطها، لكن التعليمات المتعارضة يجب ألا تتحول إلى نسخ متعارضة. يجمع مسؤول محدد الآراء ويحسم القرار ويرسل جولة ملاحظات مجمعة.")}</p></div>
        <div className="min-w-0">
          <div className="grid grid-cols-3 border-y border-neutral-950/25">{[tx("Marketing", "التسويق"), tx("Operations", "التشغيل"), tx("Management", "الإدارة")].map(item => <div key={item} className="min-w-0 border-e border-neutral-950/20 px-2 py-6 text-center text-sm font-bold last:border-e-0">{item}</div>)}</div>
          <div className="flex justify-center py-5"><ArrowDown size={22} aria-hidden="true" /></div><div className="border-y border-neutral-950/25 py-6 text-center"><p className="text-xs font-bold uppercase text-[#2057ff]">{tx("Company-side owner", "مسؤول من الشركة")}</p><p className="mt-3 text-xl font-bold">{tx("One brief. Consolidated feedback.", "موجز واحد. ملاحظات مجمعة.")}</p></div><div className="flex justify-center py-5"><ArrowDown size={22} aria-hidden="true" /></div><div className="flex items-center justify-between gap-4 border-y border-neutral-950/25 py-6"><p className="text-xl font-bold">Pencil</p><p className="text-sm">{tx("Creative + digital + technical", "إبداع + منتجات رقمية + تقنية")}</p></div>
          <p className="mt-6 text-sm leading-7 text-neutral-600">{tx("For priority requests, explain the blocked task, affected people and real deadline. We discuss the priority against dependencies and the agreed capacity; an urgent label alone does not define a delivery date.", "في طلبات الأولوية، اشرح المهمة المتعطلة والأشخاص المتأثرين والموعد الفعلي. نناقش الأولوية وفق الاعتماديات والطاقة المتفق عليها؛ فكلمة «عاجل» وحدها لا تحدد موعد التسليم.")}</p>
        </div>
      </div></section>

      <section className="container-custom py-20 md:py-28">
        <SectionTitle number="05" label={tx("Revisions, approvals & assets", "المراجعات والاعتمادات والأصول")} title={tx("Keep the details that prevent repeated work.", "نحافظ على التفاصيل التي تمنع تكرار العمل.")} />
        <div className="mt-12 border-t border-neutral-300">{[
          [tx("Revisions should have a reference.", "للمراجعة مرجع واضح."), tx("Name the version and explain the issue against the agreed objective. Combine comments before the next round. A new direction after approval is a scope conversation, not an invisible extra revision.", "حدد النسخة واشرح المشكلة وفق الهدف المتفق عليه، واجمع التعليقات قبل الجولة التالية. الاتجاه الجديد بعد الاعتماد نقاش بشأن النطاق، وليس مراجعة إضافية غير محددة.")],
          [tx("Approval should close a stage.", "الاعتماد يغلق مرحلة."), tx("Identify who can approve and what is being approved: a direction, a screen, a content set or a release. Later changes can be discussed clearly when the previous decision is recorded.", "حدد من يستطيع الاعتماد وما الذي يُعتمد: اتجاه أو شاشة أو مجموعة محتوى أو إصدار. تصبح مناقشة التغييرات اللاحقة أوضح عندما يكون القرار السابق موثقًا.")],
          [tx("A file request needs its intended use.", "طلب الملف يحتاج إلى غرض استخدامه."), tx("Ask for the format, version and application you need. An export for publishing is not the same as an editable source file. Availability, transfer and third-party licences depend on the agreed deliverables.", "اطلب الصيغة والنسخة والتطبيق المطلوب. ملف التصدير للنشر ليس ملفًا مصدريًا قابلًا للتعديل. يتبع توافر الملفات ونقلها وتراخيص الجهات الخارجية المخرجات المتفق عليها.")],
          [tx("Retained services need a coverage review.", "الخدمات المستمرة تحتاج إلى مراجعة التغطية."), tx("Discuss recurring needs, subscription follow-up and renewals alongside upcoming priorities. If the workload or type of work changes, review the arrangement rather than assuming the old scope covers it.", "ناقش الاحتياجات المتكررة ومتابعة الاشتراك والتجديد إلى جانب الأولويات المقبلة. إذا تغير حجم العمل أو نوعه، نراجع الترتيب بدل افتراض أن النطاق السابق يشمله.")],
        ].map(([title, body], index) => <motion.div key={title} initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid gap-5 border-b border-neutral-300 py-8 md:grid-cols-[35px_.65fr_1fr]"><span className="font-mono text-xs text-[#2057ff]">0{index + 1}</span><h3 className="text-xl font-bold">{title}</h3><p className="text-sm leading-7 text-neutral-600">{body}</p></motion.div>)}</div>
      </section>

      <section className="bg-[#fbe9e8] py-16 md:py-24"><div className="container-custom grid gap-10 lg:grid-cols-[.6fr_1fr]">
        <div><GitBranch size={28} /><p className="mt-5 text-xs font-bold uppercase">06 / {tx("Completed does not mean disconnected", "اكتمال المشروع لا يقطع العلاقة")}</p><h2 className="mt-5 text-3xl font-bold md:text-4xl">{tx("Bring the next chapter back to the foundations.", "نبني الفصل التالي على الأسس القائمة.")}</h2></div>
        <div><p className="text-lg leading-8 text-neutral-700">{tx("A delivered website can need a new section. An identity can need a campaign. A system can need a branch, integration or new role. Reopening the conversation starts with what changed—not with pretending the first project never happened.", "قد يحتاج الموقع المسلم إلى قسم جديد، والهوية إلى حملة، والنظام إلى فرع أو تكامل أو دور جديد. يبدأ استئناف الحوار بما تغير، لا بالتعامل كأن المشروع الأول لم يكن.")}</p><div className="mt-7 grid gap-5 border-y border-neutral-950/20 py-6 sm:grid-cols-3">{[tx("Review the existing work", "نراجع العمل الحالي"), tx("Define the new requirement", "نحدد المتطلب الجديد"), tx("Agree the next phase", "نتفق على المرحلة التالية")].map((item, index) => <p key={item} className="text-sm font-bold"><span className="mb-3 block font-mono text-xs text-[#2057ff]">0{index + 1}</span>{item}</p>)}</div><Link href="/support/callback" className="mt-7 inline-flex min-h-12 items-center gap-5 border-b border-neutral-950 text-sm font-bold">{tx("Discuss an expansion", "ناقش التوسعة")}<ArrowUpRight size={18} /></Link></div>
      </div></section>

      <section id="client-request" className="container-custom grid items-start gap-12 py-20 md:py-28 lg:grid-cols-[.7fr_1fr]">
        <div className="lg:sticky lg:top-24"><p className="text-xs font-bold uppercase text-[#2057ff]">07 / {tx("Continue the relationship", "نواصل العمل معًا")}</p><h2 className="mt-5 text-3xl font-bold md:text-4xl">{tx("Tell us what your team needs next.", "ما الذي يحتاج إليه فريقك الآن؟")}</h2><p className="mt-6 text-base leading-8 text-neutral-600">{tx("A current task, a recurring need or a next phase: start with the company and project context. You do not need to write a formal report. The useful first message says what needs to happen and why it matters.", "مهمة قائمة أو احتياج متكرر أو مرحلة تالية: ابدأ بسياق الشركة والمشروع. لا تحتاج إلى كتابة تقرير رسمي؛ الرسالة الأولى المفيدة توضح ما المطلوب ولماذا يهم.")}</p>
          <div className="mt-8 border-t border-neutral-300"><a href="mailto:help@dipencil.com" className="flex min-h-16 items-center justify-between gap-3 border-b border-neutral-300 py-4 text-sm font-bold"><span className="flex items-center gap-3"><Mail size={18} /><span dir="ltr">help@dipencil.com</span></span><ArrowUpRight size={17} /></a><a href="https://wa.me/201003778273" target="_blank" rel="noopener noreferrer" className="flex min-h-16 items-center justify-between gap-3 border-b border-neutral-300 py-4 text-sm font-bold"><span className="flex items-center gap-3"><MessageCircle size={18} /><span dir="ltr">+20 100 377 8273</span></span><ArrowUpRight size={17} /></a></div>
          <div className="mt-8 space-y-3"><Link href="/support/report" className="flex min-h-11 items-center justify-between gap-3 text-sm font-bold">{tx("A specific fault? Report an issue.", "عطل محدد؟ أبلغ عن مشكلة.")}<Next size={17} /></Link><Link href="/support/technical" className="flex min-h-11 items-center justify-between gap-3 text-sm font-bold">{tx("A technical question? Technical Support.", "سؤال تقني؟ انتقل إلى الدعم التقني.")}<Next size={17} /></Link></div>
        </div>
        <ClientRequestComposer rtl={rtl} model={model} />
      </section>
    </main><Footer />
  </div></MotionConfig>;
}
