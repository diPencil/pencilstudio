"use client";

import { useLanguage } from "@/components/language-context";
import { Reveal } from "@/components/shared/motion/reveal";
import { CalendlyCarousel, type CarouselItem } from "@/components/ui/connected-carousel";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SuperfelizModelsCarousel() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  const modelsCarouselItems: CarouselItem[] = [
    {
      id: isRtl ? "النموذج // 01" : "MODEL // 01",
      days: isRtl ? "العقل التجاري" : "The Business Brain",
      stat: isRtl ? "فيليز أوبر (Feliz Oper)" : "Feliz Oper",
      quote: isRtl
        ? "مصمم لأي سؤال عن إدارة شركة أو مشروع أو قرار تجاري استراتيجي. ليس مجرد كتابة محتوى، بل تفكير تجاري معمّق: دراسات الجدوى، أبحاث السوق والمنافسين، نماذج التسعير، التخطيط التشغيلي، وترتيب الأولويات."
        : "Built for every critical decision in business, product viability, and operational growth. Not superficial text generation, but rigorous business thinking: feasibility, market intelligence, pricing models, and strategic roadmaps.",
      author: isRtl ? "شريك الأعمال والعمليات الذكي" : "Business & Operations Partner",
      role: isRtl
        ? "دراسات الجدوى · التسعير · أبحاث السوق · الخطط التشغيلية"
        : "Feasibility Studies · Pricing · Market Research · Business Planning",
      defaultImage: "/meet-feliz/felizoper.jpg",
      selectedImage: "/meet-feliz/felizoper.jpg",
      alt: "Feliz Oper - The Business Brain",
      badge: isRtl ? "مجاني" : "FREE BETA",
    },
    {
      id: isRtl ? "النموذج // 02" : "MODEL // 02",
      days: isRtl ? "العقل التقني" : "The Technical Brain",
      stat: isRtl ? "فيليز تك (Feliz Tech)" : "Feliz Tech",
      quote: isRtl
        ? "لمن يمتلك فكرة ويريد معرفة كيف يبنيها برمجياً وهندسياً. يرفض رمي الأكواد العشوائية؛ يرسم المعمارية الشاملة، ويحدد طبقات الواجهات وقواعد البيانات ونظم الدفع، ثم يبني خطة التنفيذ المنهجية حتى لغير المبرمجين."
        : "For founders and leaders building ambitious digital products. Tech rejects messy boilerplate; it maps architecture, frontend, APIs, databases, and auth layers first, delivering an actionable production roadmap.",
      author: isRtl ? "مهندس النظم والمعمارية التقنية" : "Systems & Technical Architect",
      role: isRtl
        ? "تطبيقات الويب · الجوال · واجهات API · البنية السحابية"
        : "Web Platforms · Mobile Apps · APIs · Cloud Infrastructure",
      defaultImage: "/meet-feliz/feliztech.jpg",
      selectedImage: "/meet-feliz/feliztech.jpg",
      alt: "Feliz Tech - The Technical Brain",
      badge: isRtl ? "مجاني" : "FREE BETA",
    },
    {
      id: isRtl ? "النموذج // 03" : "MODEL // 03",
      days: isRtl ? "محرك الإبداع" : "The Creation Engine",
      stat: isRtl ? "فيليز جين (Feliz Gen)" : "Feliz Gen",
      quote: isRtl
        ? "مرحلة الإنتاج الفعلي السريع: لا يكتفي بالنصائح، بل يسلّم مخرجات ملموسة جاهزة للعمل. يحوّل الأفكار إلى مفاهيم واضحة، تدفقات مستخدم، نصوص تسويقية مقنعة، عروض استثمارية، وشيفرات برمجية أولية."
        : "The production engine closing the gap between idea and execution. Gen delivers tangible assets: brand copy, user flows, investor decks, landing page architectures, and working starter code.",
      author: isRtl ? "محرك الإنتاج الإبداعي والتنفيذي" : "Creative & Production Engine",
      role: isRtl
        ? "صفحات الهبوط · عروض المستثمرين · صياغة الهوية · MVP"
        : "Landing Pages · Investor Decks · Brand Scripting · MVP Scopes",
      defaultImage: "/meet-feliz/felizgen.jpg",
      selectedImage: "/meet-feliz/felizgen.jpg",
      alt: "Feliz Gen - The Creation Engine",
      badge: "PRO",
    },
    {
      id: isRtl ? "النموذج // 04" : "MODEL // 04",
      days: isRtl ? "الذكاء الشامل والمستقل" : "The Autonomous Flagship",
      stat: isRtl ? "سوبر فيليز (SuperFeliz)" : "SuperFeliz",
      quote: isRtl
        ? "الأخ الأكبر وأعلى مستوى ذكاء في المنظومة. يستوعب المهمة المؤسسية بالكامل، ينسق بين العقول الثلاثة في آنٍ واحد، ويقود رحلة المشروع من صياغة نموذج العمل إلى البرمجة وتوليد الأصول والتشغيل الذاتي 24/7."
        : "The flagship enterprise orchestrator. SuperFeliz connects all three specialized brains simultaneously, steering projects across business logic, technical architecture, and creative assets with full 24/7 autonomy.",
      author: isRtl ? "المنظومة القيادية الشاملة 24/7" : "Enterprise Orchestrator & AI Co-founder",
      role: isRtl
        ? "تنسيق العقول الثلاثة · ذكاء متعدد المجالات · تشغيل مستقل"
        : "Multi-Agent Coordination · Cross-Domain AI · 24/7 Autonomous Execution",
      defaultImage: "/meet-feliz/superfeliz-autonomuous.jpg",
      selectedImage: "/meet-feliz/superfeliz-autonomuous.jpg",
      alt: "SuperFeliz - The Autonomous Flagship",
      badge: "PRO FLAGSHIP",
    },
  ];

  return (
    <section id="models" className="relative scroll-mt-24 py-16 md:py-24 bg-[#FAFAFA] border-b border-neutral-200/80 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-aura-1 absolute -top-32 left-1/4 h-[440px] w-[440px] rounded-full bg-[#2057FF]/5 blur-[160px]" />
        <div className="animate-aura-2 absolute bottom-0 right-1/4 h-[440px] w-[440px] rounded-full bg-[#10B981]/5 blur-[160px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* ============================================================ */}
        {/* SECTION HEADER (Title Left, Description + Action Button Right) */}
        {/* ============================================================ */}
        <div className="relative mb-12 sm:mb-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            {/* Left: Eyebrow + Main Title */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1 text-xs font-mono font-bold tracking-wider text-[#2057FF]">
                  <span className="size-1.5 rounded-full bg-[#2057FF] animate-pulse" />
                  <span>{isRtl ? "عائلة فيليز // 2026" : "THE FAMILY // 2026"}</span>
                </div>

                <h2 className="mt-4 text-3xl font-normal tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.14]">
                  {isRtl ? (
                    <>
                      كل نموذج له
                      <span className="block font-light italic text-neutral-500">
                        شخصية ووظيفة.
                      </span>
                    </>
                  ) : (
                    <>
                      Every model has
                      <span className="block font-light italic text-neutral-500">
                        a character and a job.
                      </span>
                    </>
                  )}
                </h2>
              </Reveal>
            </div>

            {/* Right: Round Blue Button + Title & Description (Matching Reference Image) */}
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="flex items-start gap-4 sm:gap-5">
                  <Link
                    href="/askfeliz"
                    className="size-11 sm:size-12 rounded-full bg-[#2057FF] text-white flex items-center justify-center hover:bg-[#1a46cc] transition-all duration-300 hover:scale-105 shadow-md shadow-[#2057FF]/25 shrink-0 mt-0.5"
                    aria-label={isRtl ? "جرّب نماذج فيليز الآن" : "Try Feliz Models Now"}
                    title={isRtl ? "جرّب نماذج فيليز الآن" : "Try Feliz Models Now"}
                  >
                    <ArrowDownRight
                      size={22}
                      className={cn("transition-transform", isRtl && "-scale-x-100")}
                    />
                  </Link>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-950 mb-1">
                      {isRtl
                        ? "أربعة نماذج ذكاء تنفيذي متخصصة"
                        : "Four Dedicated Specialized AI Brains"}
                    </h3>
                    <p className="text-xs sm:text-[13px] md:text-sm leading-[1.7] text-neutral-600">
                      {isRtl
                        ? "بدل نموذج واحد يحاول فعل كل شيء بنفس الأسلوب، تختار النموذج الأنسب لطبيعة مهمتك، وكل عقل يفكر من زاوية مختلفة. من دراسات الجدوى والقرارات التجارية وهندسة المعمارية البرمجية، إلى صياغة الأصول الإبداعية وقيادة العمليات المؤسسية، ليعمل كل نموذج بعمق تخصصي ودقة تنفيذية موجهة."
                        : "Instead of one model trying to do everything the same way, you pick the right model for the task, and each one thinks from a different angle. From commercial feasibility and software architecture to brand generation and autonomous enterprise workflows, each model brings dedicated depth and execution focus."}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Connected 3D Carousel (Unboxed Full Width) */}
      <Reveal delay={0.12}>
        <div className="relative w-full z-10">
          <CalendlyCarousel
            items={modelsCarouselItems}
            autoPlayInterval={6500}
            pauseOnHover={true}
            isRtl={isRtl}
          />
        </div>
      </Reveal>
    </section>
  );
}

