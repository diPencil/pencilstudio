"use client";

import Image from "next/image";
import { Reveal } from "@/components/shared/motion/reveal";
import { useLanguage } from "@/components/language-context";
import {
  ArrowDownRight,
  ArrowUpRight,
  Users2,
  KeyRound,
  LineChart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PencilButton } from "@/components/ui/pencil-button";

function SuperFelizIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 608 619.3"
      width={size}
      height={size}
      fill="currentColor"
      className={cn("shrink-0 transition-colors duration-300", className)}
      aria-hidden="true"
    >
      <path d="M525.2,318.1l79-23.2-80.6-17.2c-66-13.9-103.3-84.3-77.8-146.8l31.1-76.3-63.6,52.4c-52.2,42.9-130.4,28.1-163.4-30.8L209.7,4.4l1.2,82.4c1,67.4-59.2,119.4-125.9,108.6L3.8,182l65.3,50.4c53.4,41.2,56.5,120.8,6.4,166.1l-61.1,55.2,80-19.5c65.6-16,129.7,31.1,133.8,98.5l5.1,82.2,34.6-74.8c28.3-61.3,105.2-82,160.5-43.2l67.4,47.3-36.9-73.7c-30.2-60.4,1.6-133.4,66.3-152.5ZM334.3,355.6c-19.2,5.6-28.7,27.3-19.7,45.2l11,21.8-20-14c-16.4-11.5-39.2-5.3-47.6,12.8l-10.3,22.2-1.5-24.4c-1.2-20-20.3-34-39.7-29.3l-23.7,5.8,18.1-16.4c14.8-13.4,13.9-37-1.9-49.3l-19.3-14.9,24.1,3.9c19.7,3.3,37.6-12.1,37.3-32.1l-.3-24.5,11.9,21.3c9.8,17.5,33,21.9,48.4,9.1l18.9-15.6-9.2,22.7c-7.6,18.6,3.5,39.5,23.1,43.6l23.9,5.1-23.4,7Z" />
    </svg>
  );
}

export function EnterpriseSection() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  const points = [
    {
      icon: Users2,
      index: "01",
      stat: "24/7 Pod",
      tagEn: "DEDICATED OPERATING POD",
      tagAr: "فريق تشغيل مخصص بالكامل",
      titleEn: "We run it with you day to day",
      titleAr: "بندير ونشغّل معاك يوم بيوم",
      descEn:
        "Dedicated Account Lead, Tech Lead, DevOps Engineer, and UI/UX Designer assigned to your business. Delivered and never forgotten.",
      descAr:
        "مدير حساب تنفيذي، Tech Lead، مهندس DevOps ومصمم منتج مخصصون لشركتك. نسلم الأنظمة ونشغّلها باستمرار ولا نختفي أبداً.",
      statusEn: "Embedded Team Extension",
      statusAr: "امتداد تقني لفريقك",
    },
    {
      icon: KeyRound,
      index: "02",
      stat: "< 15 Min",
      tagEn: "DIRECT EXECUTIVE LINE",
      tagAr: "خط اتصال تنفيذي مباشر",
      titleEn: "One single door for everything",
      titleAr: "باب واحد لكل احتياجاتك",
      descEn:
        "Dedicated direct Slack/Teams channel, fixed SLA response targets, and proactive weekly health reporting. You never chase us. We report to you.",
      descAr:
        "قناة تواصل فورية عبر Slack أو Teams، استجابة تعاقدية مضمونة، وتقارير تشغيل أسبوعية استباقية. لا تجري خلفنا، نحن من نبلّغك بكل تطور.",
      statusEn: "Zero Ticket Queues",
      statusAr: "صفر تذاكر انتظار",
    },
    {
      icon: LineChart,
      index: "03",
      stat: "1 Invoice",
      tagEn: "PREDICTABLE PARTNER RETAINER",
      tagAr: "اشتراك شهري شفاف وثابت",
      titleEn: "Priced like a genuine partner",
      titleAr: "تسعير الشريك الحقيقي بلا مفاجآت",
      descEn:
        "Comprehensive monthly retainers covering high-traffic hosting, routine updates, rapid feature build, and growth support. One number with no surprises.",
      descAr:
        "اشتراك شهري شامل يغطي استضافة السيرفرات، التحديثات الدورية، وتطوير الميزات الجديدة والدعم الاستباقي. رقم واحد متفق عليه بدون فواتير مفاجئة.",
      statusEn: "All-Inclusive Retainer",
      statusAr: "شامل التشغيل والتطوير",
    },
    {
      icon: SuperFelizIcon,
      index: "04",
      stat: "PRO AI",
      tagEn: "ISOLATED ENTERPRISE AI",
      tagAr: "ذكاء اصطناعي مؤسسي معزول",
      titleEn: "SuperFeliz PRO AI gateway",
      titleAr: "بوابة سوبر فيليز PRO المؤسسية",
      descEn:
        "Your team gets our private Pro AI workspace, custom-tuned around your proprietary knowledge base, guarded for air-gapped enterprise compliance.",
      descAr:
        "مساحة عمل ذكاء اصطناعي خاصة ومدربة خصيصاً على بيانات وسياق شركتك، معزولة بالكامل ومتوافقة مع أعلى معايير أمان وحماية المعلومات.",
      statusEn: "Private VPC Compliant",
      statusAr: "متوافقة مع خصوصية الشركات",
    },
  ];

  return (
    <section id="enterprise" className="relative scroll-mt-24 overflow-hidden border-b border-neutral-200/90 bg-[#FFFFFF] pt-20 sm:pt-28 pb-0 text-neutral-900">
      {/* ────────────────────────────────────────────────────────── */}
      {/* HEADER: Exactly matching CloudInfrastructureSection Style  */}
      {/* ────────────────────────────────────────────────────────── */}
      <div className="container-custom max-w-7xl">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 sm:pb-16 text-start">
            
            {/* Left Headline Column */}
            <div className="max-w-xl">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                {isRtl ? "المؤسسات والشركات الكبرى // ENTERPRISE" : "ENTERPRISE PARTNERSHIP // 2026"}
              </span>
              <h2 className={cn("mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 leading-[1.14]", isRtl ? "tracking-normal" : "tracking-tight")}>
                {isRtl ? (
                  <>
                    للشركات والمؤسسات،{" "}
                    <span className="font-light italic text-neutral-500">
                      التي لا تقبل الأعطال.
                    </span>
                  </>
                ) : (
                  <>
                    For companies that,{" "}
                    <span className="font-light italic text-neutral-500">
                      can&apos;t afford downtime.
                    </span>
                  </>
                )}
              </h2>

              {/* Trust Metric Counters Row (Directly Under Title) */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 pt-5 border-t border-neutral-200/80 text-xs">
                {[
                  { n: "99.99%", lEn: "uptime SLA target", lAr: "مستهدف التشغيل الصارم" },
                  { n: isRtl ? "< 15 دقيقة" : "< 15 Min", lEn: "P1 critical incident response", lAr: "رد حالات الطوارئ" },
                  { n: "2014", lEn: "scaling enterprise leaders since", lAr: "خبرة تشغيل متراكمة من" },
                ].map((s) => (
                  <div key={s.n} className="flex items-baseline gap-2">
                    <span className="font-mono text-base sm:text-lg font-black text-neutral-950">{s.n}</span>
                    <span className="text-neutral-500 font-medium text-xs leading-tight">{isRtl ? s.lAr : s.lEn}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Note, Arrow & Actions Column */}
            <div className="flex items-start gap-3.5 max-w-xl pt-1">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2057FF] text-white shadow-sm mt-1">
                <ArrowDownRight size={17} className={isRtl ? "scale-x-[-1]" : ""} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-neutral-950">
                  {isRtl
                    ? "شراكة تشغيلية هندسية كاملة ومستمرة"
                    : "Dedicated Enterprise Engineering & Embedded Operations"}
                </p>
                <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {isRtl
                    ? "لو توقف النظام يعطل أعمال موظفيك ويضر ثقة عملائك، فأنت بحاجة لشريك يحمله معك. لسنا مجرد وكالة تسلّم وتختفي، بل ندير ونشغّل أنظمة كبرى الشركات في مصر والخليج وأوروبا منذ عام 2014."
                    : "If your system going down stops people's work, you need an engineering partner carrying it with you. Not a vendor that ships and disappears. We have carried and scaled companies across Egypt, the Gulf and Europe since 2014."}
                </p>

                {/* Action CTAs + SLA Status */}
                <div className="mt-5 flex flex-wrap items-center gap-3.5 sm:gap-4">
                  <PencilButton
                    href="/superfeliz"
                    iconType="superfeliz"
                    variant="primary"
                    size="md"
                    hoverLabel={isRtl ? "ادخل فيليز برو ←" : "Explore Feliz Pro →"}
                  >
                    <span>{isRtl ? "ادخل بوابة البرو" : "Enter Pro Gateway"}</span>
                  </PencilButton>

                  <PencilButton
                    href="/#contact"
                    variant="outline"
                    size="md"
                    showPencilIcon={true}
                    hoverLabel={isRtl ? "اطلب عرض سعر ←" : "Request Quote →"}
                  >
                    <span>{isRtl ? "اطلب عرض سعر" : "Get a quote"}</span>
                  </PencilButton>

                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-600">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{isRtl ? "99.99% ضمان اتفاقية التشغيل" : "99.99% Uptime SLA Guaranteed"}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </div>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 4 CARDS GRID + OVERLAPPING SHOWCASE AREA                   */}
      {/* ────────────────────────────────────────────────────────── */}
      <div className="relative w-full">
        {/* 4 Cards Grid (Layered on top with z-20 inside container) */}
        <div className="container-custom max-w-7xl relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch text-start">
            {points.map((p, idx) => {
              const isBlueCard = idx === 1; // Card 2 is the Standout Royal Blue Card exactly like CloudInfrastructureSection

              return (
                <Reveal key={p.titleEn} delay={0.06 * idx}>
                  <div
                    className={cn(
                      "h-full min-h-[220px] sm:min-h-[240px] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300",
                      isBlueCard
                        ? "bg-[#2057FF] text-white shadow-2xl shadow-blue-600/40 lg:-translate-y-8 hover:lg:-translate-y-9 hover:-translate-y-1"
                        : "border border-neutral-100 bg-white shadow-xl shadow-neutral-900/10 hover:-translate-y-1"
                    )}
                  >
                    <div>
                      {/* Top Header: Big Stat + Index Badge */}
                      <div className="flex items-center justify-between">
                        <p
                          className={cn(
                            "font-mono text-2xl sm:text-3xl font-black tracking-tight",
                            isBlueCard ? "text-white" : "text-neutral-950"
                          )}
                        >
                          {p.stat}
                        </p>
                        <div
                          className={cn(
                            "flex items-center gap-1.5 font-mono text-xs font-bold",
                            isBlueCard ? "text-blue-200" : "text-neutral-400"
                          )}
                        >
                          <span>{p.index}</span>
                          <ArrowUpRight size={15} />
                        </div>
                      </div>

                      {/* Tag + Title with Icon */}
                      <div className="mt-4">
                        <p
                          className={cn(
                            "font-mono text-[11px] font-bold tracking-wider uppercase",
                            isBlueCard ? "text-blue-200" : "text-[#2057ff]"
                          )}
                        >
                          {isRtl ? p.tagAr : p.tagEn}
                        </p>
                        <h3
                          className={cn(
                            "mt-2 flex items-center gap-2 text-base sm:text-lg font-black tracking-tight",
                            isBlueCard ? "text-white" : "text-neutral-950"
                          )}
                        >
                          <p.icon
                            size={18}
                            className={cn("shrink-0", isBlueCard ? "text-white" : "text-[#2057FF]")}
                            strokeWidth={2.2}
                          />
                          <span>{isRtl ? p.titleAr : p.titleEn}</span>
                        </h3>
                        <p
                          className={cn(
                            "mt-2 text-xs sm:text-sm leading-relaxed",
                            isBlueCard ? "text-blue-100/90" : "text-neutral-500"
                          )}
                        >
                          {isRtl ? p.descAr : p.descEn}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Status Tag */}
                    <div
                      className={cn(
                        "mt-6 flex items-center justify-between border-t pt-3 text-[11px] font-mono",
                        isBlueCard
                          ? "border-white/20 text-blue-200"
                          : "border-neutral-100 text-neutral-400"
                      )}
                    >
                      <span className="font-semibold">
                        {isRtl ? p.statusAr : p.statusEn}
                      </span>
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          isBlueCard ? "bg-white animate-pulse" : "bg-[#2057FF]"
                        )}
                      />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* FULL BLEED IMAGE: Edge-to-Edge 100vw, identical to CloudInfrastructureSection */}
        <Reveal delay={0.2}>
          <div className="relative z-10 -mt-24 sm:-mt-28 lg:-mt-32 w-full h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[500px] overflow-hidden">
            <Image
              src="/about/for-companies.jpg"
              alt={isRtl ? "للشركات التي لا تقبل الأعطال" : "For companies that can't afford downtime"}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
