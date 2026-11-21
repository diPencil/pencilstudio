"use client";

import { useLanguage } from "@/components/language-context";
import { Reveal } from "@/components/shared/motion/reveal";
import { PencilButton } from "@/components/ui/pencil-button";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function SuperfelizStackSection() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden border-b border-neutral-200/80">
      <div className="container-custom relative">
        {/* ============================================================ */}
        {/* 1. SECTION HEADER (Reference style: bold headline + subhead) */}
        {/* ============================================================ */}
        <div className="relative mb-14 md:mb-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            {/* Left: Punchy Headline */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1 text-xs font-mono font-bold tracking-wider text-[#2057FF]">
                  <span className="size-1.5 rounded-full bg-[#2057FF] animate-pulse" />
                  <span>{isRtl ? "منظومة بينسل الموحدة // 2026" : "THE PENCIL STACK // 2026"}</span>
                </div>

                <h2 className="mt-4 text-3xl font-normal tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.14]">
                  {isRtl ? (
                    <>
                      انطلق بأعمالك للأمام:{" "}
                      <span className="block font-light italic text-neutral-500">
                        من الفكرة إلى التنفيذ الحي.
                      </span>
                    </>
                  ) : (
                    <>
                      Empower your business:{" "}
                      <span className="block font-light italic text-neutral-500">
                        from ideas to execution.
                      </span>
                    </>
                  )}
                </h2>
              </Reveal>
            </div>

            {/* Right: Subtitle with Avatars Stack */}
            <div className="lg:col-span-5 relative">
              <Reveal delay={0.08}>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                  {isRtl
                    ? "سوبر فيليز هو منصة الذكاء الاصطناعي والأعمال الخاصة بمنظومة بينسل، صُممت لمساعدة المؤسسات على الانتقال من الأسئلة والأفكار إلى قرارات حاسمة، منتجات تعمل، وتنفيذ حقيقي على أرض الواقع."
                    : "SuperFeliz is Pencil's AI-powered business and creative intelligence platform, built to help people move from questions and ideas to informed decisions, working products and real execution."}
                </p>

                {/* 4 Feliz AI Models stack + badge */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <div className="flex -space-x-2 rtl:space-x-reverse items-center">
                    {/* 1. Oper */}
                    <div
                      className="relative size-9 rounded-full ring-2 ring-white border border-neutral-200/80 overflow-hidden shadow-sm bg-white p-1 flex items-center justify-center transition-transform hover:scale-110 hover:z-10"
                      title="Feliz Oper"
                    >
                      <Image
                        src="/meet-feliz/oper.png"
                        alt="Feliz Oper"
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                    {/* 2. Tech */}
                    <div
                      className="relative size-9 rounded-full ring-2 ring-white border border-neutral-200/80 overflow-hidden shadow-sm bg-white p-1 flex items-center justify-center transition-transform hover:scale-110 hover:z-10"
                      title="Feliz Tech"
                    >
                      <Image
                        src="/meet-feliz/tech.png"
                        alt="Feliz Tech"
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                    {/* 3. Gen */}
                    <div
                      className="relative size-9 rounded-full ring-2 ring-white border border-neutral-200/80 overflow-hidden shadow-sm bg-white p-1 flex items-center justify-center transition-transform hover:scale-110 hover:z-10"
                      title="Feliz Gen"
                    >
                      <Image
                        src="/meet-feliz/gen.png"
                        alt="Feliz Gen"
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                    {/* 4. Super */}
                    <div
                      className="relative size-9 rounded-full ring-2 ring-white border border-neutral-200/80 overflow-hidden shadow-sm bg-white p-1 flex items-center justify-center transition-transform hover:scale-110 hover:z-10"
                      title="SuperFeliz"
                    >
                      <Image
                        src="/meet-feliz/super.png"
                        alt="SuperFeliz"
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                  </div>

                  <span className="rounded-full border border-neutral-200/90 bg-neutral-50 px-3.5 py-1 text-xs font-bold text-neutral-800 shadow-2xs">
                    {isRtl ? "4 نماذج ذكاء اصطناعي · شريك واحد" : "4 Feliz AI Models · 1 Partner"}
                  </span>
                </div>
              </Reveal>

              {/* Playful Curvy Scribble Arrow Doodle in Pencil Royal Blue */}
              <div
                className={cn(
                  "hidden lg:block absolute -bottom-14 pointer-events-none text-[#2057FF]",
                  isRtl ? "right-44 rotate-[15deg] scale-x-[-1]" : "-left-40 sm:-left-48 rotate-[-8deg]"
                )}
                aria-hidden="true"
              >
                <svg
                  width="104"
                  height="82"
                  viewBox="0 0 92 72"
                  fill="none"
                  className="overflow-visible"
                >
                  <path
                    d="M12 8 C 30 18, 55 22, 60 48 C 62 58, 48 64, 42 56 C 38 50, 48 42, 68 54 L 74 58"
                    stroke="#2057FF"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M62 66 L 76 58 L 74 44"
                    stroke="#2057FF"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. BENTO CARDS GRID (1:1 Reference Layout & Composition)    */}
        {/* ============================================================ */}
        <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch">
          
          {/* ========================================================== */}
          {/* COLUMN 1 (Left 5 Cols): SuperFeliz (Top) + Quote (Bottom)  */}
          {/* ========================================================== */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Card 1: SuperFeliz - The Intelligence Layer (Reference Top-Left Card) */}
            <Reveal delay={0.05} className="flex-1">
              <div className="group relative h-full rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#2057FF] via-[#1B4BDB] to-[#0E35B8] p-6 sm:p-7 text-white shadow-xl shadow-blue-600/15 border border-blue-400/25 overflow-hidden flex flex-col justify-between">
                
                {/* Subtle Swirl Doodle Background Watermark (Reference match) */}
                <svg
                  className="absolute -right-16 -top-16 size-72 pointer-events-none opacity-15 stroke-white fill-none"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <circle cx="100" cy="100" r="40" strokeWidth="2.5" />
                  <circle cx="100" cy="100" r="75" strokeWidth="2.5" strokeDasharray="6 6" />
                  <circle cx="100" cy="100" r="110" strokeWidth="2" />
                </svg>

                <div>
                  {/* Top Tags / Interactive Pills */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-white/20 px-3 py-0.5 text-[11px] font-bold text-white backdrop-blur-md border border-white/25">
                        {isRtl ? "المساعدة والتحليل" : "Assistance & Analysis"}
                      </span>
                      <span className="rounded-full bg-white/20 px-3 py-0.5 text-[11px] font-bold text-white backdrop-blur-md border border-white/25">
                        {isRtl ? "الأتمتة والتوليد" : "Generation & Auto"}
                      </span>
                    </div>

                    <Link
                      href="#models"
                      className="size-8 sm:size-9 rounded-full bg-white text-neutral-950 flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45"
                      aria-label="Explore SuperFeliz models"
                    >
                      <ArrowUpRight size={16} className="stroke-[2.5]" />
                    </Link>
                  </div>

                  {/* Layer Meta + Title */}
                  <div className="mt-5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-200">
                      {isRtl ? "طبقة الذكاء الاصطناعي // 01" : "THE INTELLIGENCE LAYER // 01"}
                    </span>
                    <h3 className="mt-1.5 text-2xl sm:text-3xl font-black tracking-tight text-white">
                      {isRtl ? "سوبر فيليز" : "SuperFeliz"}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-blue-100/90 font-medium">
                      {isRtl
                        ? "المساعدة والتحليل والتوليد والأتمتة. تحويل الأسئلة والأفكار العفوية إلى قرارات استراتيجية حاسمة، وأكواد برمجية جاهزة للإنتاج الفعلي."
                        : "Assistance, analysis, generation, and automation. Moving people seamlessly from questions and ideas to informed decisions, working products, and real execution."}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Avatar Circle (Reference match) */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/15">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#E2F84A] animate-ping" />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-blue-100">
                      {isRtl ? "نشط ومتاح 24/7" : "Active & Autonomous"}
                    </span>
                  </div>

                  <div className="size-10 rounded-full bg-white/95 p-1.5 shadow-lg border border-white/80 flex items-center justify-center">
                    <Image
                      src="/macosdock/superfeliz.svg"
                      alt="SuperFeliz"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Manifesto Quote Card (Reference Bottom-Left Card) */}
            <Reveal delay={0.1}>
              <div className="relative rounded-[26px] sm:rounded-[30px] bg-[#0B0B0B] border border-white/10 p-5 sm:p-6 text-white shadow-xl overflow-hidden">
                {/* Big stylized double quote mark (Reference match) */}
                <span
                  className="absolute top-2 end-5 text-6xl sm:text-7xl font-serif text-white/10 select-none pointer-events-none leading-none"
                  aria-hidden="true"
                >
                  ”
                </span>

                <p className="relative text-xs sm:text-sm leading-relaxed text-neutral-300 font-medium pe-6">
                  {isRtl
                    ? "الذكاء الاصطناعي دون تنفيذ حقيقي يبقى مجرد نقاشات عامة. صممنا سوبر فيليز ليعمل مباشرة داخل برمجيات فعلية، أنظمة علامات راسخة، وأكواد مؤسسية حية."
                    : "AI without execution is merely conversation. We engineered SuperFeliz to operate directly inside real software architectures, enduring brand systems, and living code."}
                </p>

                {/* Author / Pod Info */}
                <div className="mt-4 flex items-center gap-3 pt-3.5 border-t border-neutral-800">
                  <div className="relative size-9 rounded-full overflow-hidden ring-2 ring-white/90 bg-white shadow-sm shrink-0 flex items-center justify-center p-1">
                    <Image
                      src="/favcion.png"
                      alt="Pencil Monogram"
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {isRtl ? "نواة عمليات بينسل ستوديو" : "PENCIL Operations Core"}
                    </h4>
                    <p className="text-[11px] text-neutral-400">
                      {isRtl ? "حوكمة هندسية وتنفيذ مباشر" : "Direct Engineering & SLA Governance"}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

          {/* ========================================================== */}
          {/* COLUMN 2 (Middle 3.5 Cols): Pencil Studio (Green Card)     */}
          {/* ========================================================== */}
          <div className="lg:col-span-4 flex flex-col">
            <Reveal delay={0.12} className="h-full">
              <div className="group relative h-full rounded-[28px] sm:rounded-[32px] bg-[#1b8135] bg-gradient-to-br from-[#1b8135] via-[#166e2c] to-[#115723] p-6 sm:p-7 text-white shadow-xl shadow-[#1b8135]/20 border border-white/20 overflow-hidden flex flex-col justify-between">
                
                {/* Icon in top-right corner inside the card (Reference: pencilstudio.png) */}
                <div className="absolute top-5 end-5 size-11 rounded-full bg-white shadow-md border border-white/90 flex items-center justify-center p-2 z-10 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/meet-feliz/pencilstudio.png"
                    alt="Pencil Studio"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                {/* Background Concentric Spiral Art in soft white */}
                <svg
                  className="absolute inset-0 size-full pointer-events-none opacity-20 stroke-white fill-none"
                  viewBox="0 0 300 400"
                  aria-hidden="true"
                >
                  <path
                    d="M 50 150 C 120 70, 220 90, 240 180 C 260 270, 150 330, 80 290 C 20 250, 40 160, 110 130 C 180 100, 230 160, 220 220 C 210 270, 160 290, 120 280"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Card Content */}
                <div className="relative z-1 pe-12">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-white/80">
                    {isRtl ? "التنفيذ والإبداع // 02" : "EXECUTION AND CRAFT // 02"}
                  </span>
                  
                  <h3 className="mt-1.5 text-2xl sm:text-3xl font-black tracking-tight text-white">
                    {isRtl ? "بينسل ستوديو" : "Pencil Studio"}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/90 font-medium">
                    {isRtl
                      ? "التصميم والتطوير وبناء المنتجات. 6 استوديوهات متخصصة تهندس منصات برمجية، علامات تجارية راسخة، وأنظمة هوية بامتياز دون ديون تقنية."
                      : "Design, development, and product building. 6 specialized studios engineering mission-critical software platforms, award-winning brands, and enduring systems."}
                  </p>

                  <div className="mt-5 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <span className="size-1.5 rounded-full bg-white" />
                      <span>{isRtl ? "هندسة برمجيات Next.js 15 وTypeScript" : "Next.js 15 & High-Velocity Code"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <span className="size-1.5 rounded-full bg-white" />
                      <span>{isRtl ? "أنظمة تصميم وعلامات فاخرة" : "Bespoke Brand Architecture"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <span className="size-1.5 rounded-full bg-white" />
                      <span>{isRtl ? "حسابات بنكية ودفع إلكتروني آمن" : "Enterprise FinTech & Edge SLAs"}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Highlight Pill */}
                <div className="relative z-1 mt-6 rounded-2xl bg-white/15 backdrop-blur-md p-3.5 border border-white/20 shadow-sm text-white">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/80">
                    {isRtl ? "سجل إنجازات موثوق" : "Proven Track Record"}
                  </div>
                  <div className="mt-1 text-sm sm:text-base font-black text-white">
                    {isRtl ? "+10 سنوات في قيادة المشاريع الرقمية" : "+10 Years Scaling Enterprise Leaders"}
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

          {/* ========================================================== */}
          {/* COLUMN 3 (Right 3.5 Cols): Circle Badge + Pencil (Compact) */}
          {/* ========================================================== */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            
            {/* Card 4: Overlapping Circles Badge (1:1 Reference Match - Compact) */}
            <Reveal delay={0.14}>
              <div className="flex items-center justify-center py-1 select-none">
                <div className="relative flex items-center">
                  
                  {/* Left Circle: Black Circle with 4-Petal Organic Bloom in Logo Red (#DD3126) */}
                  <div className="relative size-24 sm:size-28 rounded-full bg-neutral-950 flex items-center justify-center shadow-lg border border-neutral-800 shrink-0 z-0">
                    <svg
                      viewBox="0 0 100 100"
                      fill="#DD3126"
                      className="size-12 sm:size-14 overflow-visible"
                      aria-hidden="true"
                    >
                      <g transform="translate(50, 50)">
                        <ellipse cx="0" cy="-24" rx="14" ry="24" transform="rotate(45)" />
                        <ellipse cx="0" cy="-24" rx="14" ry="24" transform="rotate(135)" />
                        <ellipse cx="0" cy="-24" rx="14" ry="24" transform="rotate(225)" />
                        <ellipse cx="0" cy="-24" rx="14" ry="24" transform="rotate(315)" />
                      </g>
                    </svg>
                  </div>

                  {/* Right Circle: Logo Red Circle (#DD3126) Overlapping Left Circle */}
                  <div className="relative size-28 sm:size-32 -ms-8 sm:-ms-9 rounded-full bg-[#DD3126] text-white p-3 flex flex-col items-center justify-center text-center shadow-lg border-2 border-white shrink-0 z-10 transition-transform duration-300 hover:scale-105">
                    <div className="text-2xl sm:text-3xl font-black tracking-tight leading-none text-white">
                      +95
                    </div>
                    <p className="mt-1 text-[10px] sm:text-[11px] font-bold leading-tight text-white/95 max-w-[85px]">
                      {isRtl ? "سير عمل وأدوات ذكية" : "AI Workflows & resources"}
                    </p>
                  </div>

                </div>
              </div>
            </Reveal>

            {/* Card 5: Pencil Parent Company (Compact & Balanced Height) */}
            <Reveal delay={0.16} className="flex-1 flex flex-col justify-between">
              <div className="group relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#2057FF] via-[#1748DC] to-[#0D32A8] p-5 sm:p-6 pb-0 sm:pb-0 text-white shadow-xl border border-blue-400/25 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-200">
                      {isRtl ? "الشركة الأم // 03" : "PARENT COMPANY // 03"}
                    </span>
                    <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold text-white border border-white/20">
                      {isRtl ? "الرؤية والحوكمة" : "Governance"}
                    </span>
                  </div>

                  <h3 className="mt-2 text-2xl font-black tracking-tight text-white">
                    {isRtl ? "بينسل" : "Pencil"}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-blue-100 font-medium">
                    {isRtl
                      ? "الهوية والرؤية الاستراتيجية التي تقود كل شيء وتضمن استدامة ومكانة أعمالك المؤسسية."
                      : "The identity and vision behind everything. The commercial governance and brand system anchoring every digital initiative."}
                  </p>
                </div>

                {/* Visual of womenpencil perfectly proportioned & resting at the bottom */}
                <div className="mt-3 relative h-48 sm:h-56 w-full overflow-hidden flex items-end justify-center">
                  <Image
                    src="/meet-feliz/womenpencil.png"
                    alt="Pencil Brand Stewardship"
                    fill
                    className="object-contain object-bottom pointer-events-none drop-shadow-sm"
                  />
                </div>
              </div>

              {/* Action Button Standalone Under the Card */}
              <div className="mt-2.5">
                <PencilButton
                  href="/company"
                  variant="primary"
                  size="default"
                  fullWidth
                  showPencilIcon
                  className="font-bold shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 h-10 sm:h-11"
                >
                  {isRtl ? "استكشف بينسل" : "Explore Pencil"}
                </PencilButton>
              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
}

