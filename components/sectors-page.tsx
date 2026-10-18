"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-context";
import { PencilCTA, PENCIL } from "@/components/pencil-ui";
import { CinematicPageHero } from "@/components/cinematic-page-hero";
import { SectorsMatrixMotionBg } from "@/components/page-motion-backgrounds";
import { cn } from "@/lib/utils";
import { SectorsDepth } from "@/components/page-upgrades";

const SECTORS = [
  {
    image: "/business-sectors/tourism-booking.jpg",
    nameEn: "Tourism & Booking",
    nameAr: "السياحة والحجوزات",
    descEn: "Trips, bookings and availability in one calm place.",
    descAr: "رحلات وحجوزات وإتاحة، كلها في مكان واحد هادي.",
  },
  {
    image: "/business-sectors/real-estate.jpg",
    nameEn: "Real Estate",
    nameAr: "العقارات",
    descEn: "Listings and follow-ups that turn interest into closed deals.",
    descAr: "وحدات ومتابعة بتحوّل الاهتمام لصفقات مقفولة.",
  },
  {
    image: "/business-sectors/restaurant-pos.jpg",
    nameEn: "Restaurants & POS",
    nameAr: "المطاعم والكاشير",
    descEn: "Menus and orders connected from the kitchen to the counter.",
    descAr: "منيوهات وأوردرات مربوطة من المطبخ لحد الكاشير.",
  },
  {
    image: "/business-sectors/medical-clinics.jpg",
    nameEn: "Medical & Clinics",
    nameAr: "العيادات والمراكز الطبية",
    descEn: "Booking that respects patients, and a calmer front desk.",
    descAr: "حجز يحترم المريض، واستقبال أهدى بكتير.",
  },
  {
    image: "/business-sectors/education-lms.jpg",
    nameEn: "Education & LMS",
    nameAr: "التعليم والمنصات التعليمية",
    descEn: "Courses and student progress that stay organized on their own.",
    descAr: "كورسات وتقدم طلبة منظم لوحده من غير مجهود.",
  },
  {
    image: "/business-sectors/corporate-websites.jpg",
    nameEn: "Corporate Websites",
    nameAr: "مواقع الشركات",
    descEn: "A website that looks like the company you want to become.",
    descAr: "موقع شبه الشركة اللي نفسك تبقاها.",
  },
  {
    image: "/business-sectors/e-commerce.jpg",
    nameEn: "E-Commerce",
    nameAr: "المتاجر الإلكترونية",
    descEn: "Catalog, cart and checkout tuned to sell, not just display.",
    descAr: "كتالوج وسلة ودفع متظبطين يبيعوا، مش يعرضوا بس.",
  },
  {
    image: "/business-sectors/crm-automation.jpg",
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
      <Header />

      <CinematicPageHero
        isRtl={isRtl}
        badge={isRtl ? "القطاعات المتخصصة" : "Industry Sectors"}
        breadcrumb={[
          { label: isRtl ? "الرئيسية" : "Home", href: "/" },
          { label: isRtl ? "قطاعات الأعمال" : "Business Sectors" },
        ]}
        titleSolid={isRtl ? "قطاعات الأعمال." : "Industry Sectors."}
        titleOutline={isRtl ? "منطق حقيقي لكل قطاع." : "Built on Pure Industry Logic."}
        subtitle={
          isRtl
            ? "سياحة، عقارات، مطاعم، عيادات، تعليم ومتاجر. نبني على منطق قطاعك الخاص وليس على قوالب جاهزة."
            : "Tourism, real estate, clinics, hospitality, and retail. Tailored specifically to your industry mechanics, never templates."
        }
        bgMotion={<SectorsMatrixMotionBg />}
        metrics={[
          {
            value: isRtl ? "6 قطاعات رئيسية" : "6 Key Sectors",
            label: isRtl ? "معرفة تخصصية دقيقة ومتوارثة" : "Deep Vertical Domain Knowledge",
          },
          {
            value: isRtl ? "0 قوالب جاهزة" : "Zero Templates",
            label: isRtl ? "برمجيات مبنية على نموذج عملك" : "Architectures Custom-Built",
          },
          {
            value: isRtl ? "قنوات متكاملة" : "Omnichannel Flow",
            label: isRtl ? "تطبيقات، كاشير، سحاب ومواقع" : "Unified Apps, POS & Cloud",
          },
          {
            value: isRtl ? "عائد استثماري" : "Measurable ROI",
            label: isRtl ? "تركيز على زيادة التحويل والأرباح" : "Conversion & Growth Driven",
          },
        ]}
      />

      <section className="container-custom grid gap-5 py-12 sm:grid-cols-2 lg:grid-cols-4 md:py-16">
        {SECTORS.map((s, i) => (
          <Reveal key={s.nameEn} delay={0.04 * (i % 4)}>
            <Link
              href="/#contact"
              className={cn(PENCIL.card, PENCIL.cardHover, "group block h-full overflow-hidden")}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={isRtl ? s.nameAr : s.nameEn}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
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

      <SectorsDepth />

      <section className="container-custom pb-16 md:pb-24">
        <Reveal>
          <PencilCTA
            title={isRtl ? <>قطاعك مش هنا؟ <span className="font-light italic text-white/60">اسألنا.</span></> : <>Your sector not here? <span className="font-light italic text-white/60">Ask us.</span></>}
            desc={isRtl ? "لو شغلك ليه منطق خاص، هنفهمه ونبنيله. دي شغلتنا من 2014." : "If your business runs on its own logic, we will learn it and build on it. That has been our job since 2014."}
            actions={
              <>
                <Link href="/solutions" className="rounded-full bg-white px-7 py-3 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200">
                  {isRtl ? "شوف الحلول" : "See solutions"}
                </Link>
                <a href="/#contact" className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                  {isRtl ? "كلمنا" : "Talk to us"}
                </a>
              </>
            }
          />
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}


