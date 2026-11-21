"use client";

import { ViewportVideo } from "@/components/shared/media/viewport-video";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/motion/reveal";
import { useLanguage } from "@/components/language-context";
import { PencilCTA, PENCIL } from "@/components/shared/ui/pencil-ui";
import { EditorialPageHero, StatStrip } from "@/components/editorial";
import { cn } from "@/lib/utils";
import { SectorsBento } from "@/components/sectors/sectors-bento";
import { PencilButton } from "@/components/ui/pencil-button";

const SECTORS = [
  {
    image: "/sectors/restaurant-pos.jpg",
    nameEn: "Restaurants & POS",
    nameAr: "المطاعم والكاشير",
    descEn: "Menus and orders connected from the kitchen to the counter.",
    descAr: "منيوهات وأوردرات مربوطة من المطبخ لحد الكاشير.",
  },
  {
    image: "/sectors/e-commerce.jpg",
    nameEn: "E-Commerce",
    nameAr: "المتاجر الإلكترونية",
    descEn: "Catalog, cart and checkout tuned to sell, not just display.",
    descAr: "كتالوج وسلة ودفع متظبطين يبيعوا، مش يعرضوا بس.",
  },
  {
    image: "/sectors/tourism-booking.jpg",
    nameEn: "Tourism & Booking",
    nameAr: "السياحة والحجوزات",
    descEn: "Trips, bookings and availability in one calm place.",
    descAr: "رحلات وحجوزات وإتاحة، كلها في مكان واحد هادي.",
  },
  {
    image: "/sectors/real-estate.jpg",
    nameEn: "Real Estate",
    nameAr: "العقارات",
    descEn: "Listings and follow-ups that turn interest into closed deals.",
    descAr: "وحدات ومتابعة بتحوّل الاهتمام لصفقات مقفولة.",
  },
  {
    image: "/sectors/medical-clinics.jpg",
    nameEn: "Medical & Clinics",
    nameAr: "العيادات والمراكز الطبية",
    descEn: "Booking that respects patients, and a calmer front desk.",
    descAr: "حجز يحترم المريض، واستقبال أهدى بكتير.",
  },
  {
    image: "/sectors/education-lms.jpg",
    nameEn: "Education & LMS",
    nameAr: "التعليم والمنصات التعليمية",
    descEn: "Courses and student progress that stay organized on their own.",
    descAr: "كورسات وتقدم طلبة منظم لوحده من غير مجهود.",
  },
  {
    image: "/sectors/corporate-websites.jpg",
    nameEn: "Corporate Websites",
    nameAr: "مواقع الشركات",
    descEn: "A website that looks like the company you want to become.",
    descAr: "موقع شبه الشركة اللي نفسك تبقاها.",
  },
  {
    image: "/sectors/crm-automation.jpg",
    nameEn: "CRM & Automation",
    nameAr: "إدارة العملاء والأتمتة",
    descEn: "Every lead tracked and every follow-up automatic. Nothing slips.",
    descAr: "كل عميل متتبع وكل متابعة تلقائية. مفيش حاجة بتقع منك.",
  },
];

export function SectorsPage() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className={cn("min-h-screen text-neutral-900", PENCIL.paper)}>
      <Header light />

      <EditorialPageHero
        isRtl={isRtl}
        cards={[
          { label: isRtl ? "ديزاين" : "DESIGN", index: "01", src: "/sectors/design.mp4" },
          { label: isRtl ? "برمجة" : "DEVELOPMENT", index: "02", src: "/sectors/development.mp4" },
          { label: isRtl ? "تقنية IT" : "IT INFOTECH", index: "03", src: "/sectors/it-infotech.mp4" },
        ]}
        title={
          isRtl ? (
            <>
              <span className="text-[#2057ff]">قطاعات</span> مبنية على منطق حقيقي
              <span className="text-[#2057ff]">.</span>
            </>
          ) : (
            <>
              <span className="text-[#2057ff]">SECTORS</span> BUILT ON REAL LOGIC
              <span className="text-[#2057ff]">.</span>
            </>
          )
        }
        subtitle={
          isRtl
            ? "سياحة، عقارات، مطاعم، عيادات، تعليم ومتاجر. نبني على منطق قطاعك الخاص وليس على قوالب جاهزة."
            : "Tourism, real estate, clinics, hospitality, and retail. Tailored specifically to your industry mechanics, never templates."
        }
        leftMeta={isRtl ? ["ديزاين", "برمجة", "تقنية IT"] : ["DESIGN", "DEVELOPMENT", "IT INFOTECH"]}
        rightMeta={{
          brand: "PENCIL STUDIO",
          line: isRtl ? "القطاعات // 2026" : "SECTORS // 2026",
          accent: isRtl ? "بلا قوالب جاهزة" : "ZERO TEMPLATES",
        }}
        ticker={{
          status: isRtl ? "معرفة تخصصية دقيقة لكل قطاع" : "DEEP VERTICAL DOMAIN KNOWLEDGE",
          locations: ["CAIRO", "DUBAI", "RIYADH", "BERLIN"],
        }}
      />

      <StatStrip
        items={[
          { value: isRtl ? "8 قطاعات رئيسية" : "8 Key Sectors", label: isRtl ? "معرفة تخصصية دقيقة ومتوارثة" : "Deep Vertical Domain Knowledge" },
          { value: isRtl ? "0 قوالب جاهزة" : "Zero Templates", label: isRtl ? "برمجيات مبنية على نموذج عملك" : "Architectures Custom-Built" },
          { value: isRtl ? "قنوات متكاملة" : "Omnichannel Flow", label: isRtl ? "تطبيقات، كاشير، سحاب ومواقع" : "Unified Apps, POS & Cloud" },
          { value: isRtl ? "عائد استثماري" : "Measurable ROI", label: isRtl ? "تركيز على زيادة التحويل والأرباح" : "Conversion & Growth Driven" },
        ]}
      />

      <section className="container-custom grid gap-5 py-12 sm:grid-cols-2 lg:grid-cols-4 md:py-16">
        {SECTORS.map((s, i) => (
          <Reveal key={s.nameEn} delay={0.04 * (i % 4)}>
            <Link
              href="/#contact"
              className={cn(PENCIL.card, PENCIL.cardHover, "group block h-full overflow-hidden")}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                <Image
                  src={s.image}
                  alt={isRtl ? s.nameAr : s.nameEn}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
                <h2 className="absolute bottom-3 start-4 end-4 text-lg font-bold leading-snug text-white">
                  {isRtl ? s.nameAr : s.nameEn}
                </h2>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-neutral-500">{isRtl ? s.descAr : s.descEn}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold">
                  {isRtl ? "اطلب لقطاعك" : "Order for your sector"}
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <SectorsBento />

      <section className="container-custom pb-16 md:pb-24">
        <Reveal>
          <PencilCTA
            title={isRtl ? <>قطاعك مش هنا؟ <span className="font-light italic text-white/60">اسألنا.</span></> : <>Your sector not here? <span className="font-light italic text-white/60">Ask us.</span></>}
            desc={isRtl ? "لو شغلك ليه منطق خاص، هنفهمه ونبنيله. دي شغلتنا من 2014." : "If your business runs on its own logic, we will learn it and build on it. That has been our job since 2014."}
            actions={
              <>
                <PencilButton
                  href="/solutions"
                  variant="primary"
                  size="md"
                  hoverLabel={isRtl ? "اكتشف الحلول ←" : "Explore solutions →"}
                >
                  {isRtl ? "شوف الحلول" : "See solutions"}
                </PencilButton>
                <PencilButton
                  href="/#contact"
                  variant="outline"
                  size="md"
                  showPencilIcon={false}
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  {isRtl ? "كلمنا" : "Talk to us"}
                </PencilButton>
              </>
            }
          />
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}


