"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { Check, Sparkles, MessageSquare, ArrowRight, ArrowLeft } from "lucide-react";
import { PencilButton } from "@/components/ui/pencil-button";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import { Reveal } from "@/components/shared/motion/reveal";
import { cn } from "@/lib/utils";

export type PricingCurrency = "USD" | "SAR" | "EGP" | "EUR" | "GBP";

const CURRENCY_META: Record<
  PricingCurrency,
  {
    rateVsUsd: number;
    labelEn: string;
    labelAr: string;
    symbolEn: string;
    symbolAr: string;
  }
> = {
  USD: { rateVsUsd: 1.0, labelEn: "USD · $", labelAr: "دولار · $", symbolEn: "$", symbolAr: "$" },
  SAR: { rateVsUsd: 3.75, labelEn: "SAR · ⃁", labelAr: "ريال · ⃁", symbolEn: "⃁", symbolAr: "⃁" },
  EGP: { rateVsUsd: 50.5, labelEn: "EGP · E£", labelAr: "جنيه · ج.م", symbolEn: "E£", symbolAr: "ج.م" },
  EUR: { rateVsUsd: 0.92, labelEn: "EUR · €", labelAr: "يورو · €", symbolEn: "€", symbolAr: "€" },
  GBP: { rateVsUsd: 0.79, labelEn: "GBP · £", labelAr: "إسترليني · £", symbolEn: "£", symbolAr: "£" },
};

const CURRENCY_CODES: PricingCurrency[] = ["USD", "SAR", "EGP", "EUR", "GBP"];

export interface PricingTier {
  id: string;
  nameEn: string;
  nameAr: string;
  taglineEn: string;
  taglineAr: string;
  priceUsd: number;
  originalPriceUsd?: number;
  isMonthly?: boolean;
  popular?: boolean;
  badgeEn?: string;
  badgeAr?: string;
  featuresEn: string[];
  featuresAr: string[];
}

export interface PricingTrack {
  id: string;
  labelEn: string;
  labelAr: string;
  descriptionEn: string;
  descriptionAr: string;
  isMonthlyRetainer?: boolean;
  tiers: [PricingTier, PricingTier, PricingTier];
}

// ── BRAND IDENTITY & CREATIVE DESIGN TRACKS ──
const BRAND_IDENTITY_TRACKS: PricingTrack[] = [
  {
    id: "branding",
    labelEn: "Branding & Visual Identity",
    labelAr: "الهوية البصرية المتكاملة",
    descriptionEn: "Complete identity systems, logo architecture, typography, and brand governance.",
    descriptionAr: "بناء الهويات البصرية المتكاملة، أنظمة الشعار، الخطوط، وأدلة استخدام العلامة.",
    isMonthlyRetainer: false,
    tiers: [
      {
        id: "starter-identity",
        nameEn: "Starter Identity",
        nameAr: "الهوية الأساسية",
        taglineEn: "Essential identity system for new ventures, MVPs, and early-stage startups.",
        taglineAr: "النظام البصري الأساسي للمشاريع الناشئة والشركات في طور الانطلاق الأول.",
        priceUsd: 350,
        originalPriceUsd: 500,
        featuresEn: [
          "Primary & secondary logo suite (SVG, PNG, PDF)",
          "Monochrome and reversed dark/light variations",
          "Core typography system & curated 4-color palette",
          "Essential Brand Sheet (1-page quick rules)",
          "Brand guidelines documentation",
          "Company profile (6 pages PDF presentation)",
          "Social media avatar & header banner templates",
          "Business card & official email signature",
          "Delivery in 2–3 weeks with 2 revision rounds",
        ],
        featuresAr: [
          "شعار رئيسي وثانوي بكافة الصيغ المتجهة (SVG, PNG, PDF)",
          "نسخ أحادية اللون (Monochrome) وأوضاع داكنة وفاتحة",
          "نظام خطوط متكامل ولوحة ألوان أساسية من 4 درجات",
          "لوحة الهوية السريعة (Brand Sheet) مع قواعد الاستخدام",
          "دليل إرشادات الهوية والعلامة (Brand Guidelines)",
          "بروفايل الشركة التعريفي الاحترافي (6 صفحات PDF)",
          "قوالب الأفاتار وبانرات الهيدر لمنصات التواصل",
          "تصميم بطاقة العمل الرسمية والتوقيع الإلكتروني",
          "تسليم خلال 2–3 أسابيع مع جولتي تعديلات",
        ],
      },
      {
        id: "complete-system",
        nameEn: "Complete Brand System",
        nameAr: "الهوية المتكاملة",
        taglineEn: "Comprehensive, production-ready brand architecture for scaling companies.",
        taglineAr: "بناء بصري متكامل وشامل للشركات النامية التي تتطلب حضوراً سوقياً راسخاً.",
        priceUsd: 800,
        originalPriceUsd: 1000,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in Starter Identity, plus:",
          "Full Brand Book & Guidelines (15–25 pages PDF)",
          "Bespoke icon set (15+ custom vector icons)",
          "Unique brand pattern, grid system & textures",
          "10 editable marketing templates (PSD + AI + ID)",
          "Corporate stationery suite (Letterhead, folder, invoice)",
          "3D animated logo reveal loop (4–6s for reels & web)",
          "Staged weekly handoffs with dedicated Art Director",
        ],
        featuresAr: [
          "كل ما في باقة الهوية الأساسية، بالإضافة إلى:",
          "دليل الهوية الكامل والشامل (Brand Book من 15–25 صفحة PDF)",
          "مجموعة أيقونات مخصصة للعلامة (أكثر من 15 أيقونة Vector)",
          "أنماط بصرية ونظام شبكي وخامات حصرية للعلامة",
          "10 قوالب تسويقية قابلة للتعديل (PSD + AI + ID)",
          "مطبوعات الأعمال الرسمية (أوراق المراسلات، الفولدر، الفاتورة)",
          "فيديو تحريك الشعار ثلاثي الأبعاد (4–6 ثوانٍ للريلز والموقع)",
          "مراحل تسليم أسبوعية مع آرت دايركتور مخصص",
        ],
      },
      {
        id: "enterprise-architecture",
        nameEn: "Enterprise Architecture",
        nameAr: "هوية المؤسسات والتوسع",
        taglineEn: "Multi-tier identity ecosystem for enterprises, franchises, and major rebrands.",
        taglineAr: "نظام بصري استراتيجي متعدد الفروع للشركات الكبرى وإعادة إطلاق العلامات.",
        priceUsd: 2500,
        originalPriceUsd: 3500,
        badgeEn: "Enterprise SLA",
        badgeAr: "عقود المؤسسات",
        featuresEn: [
          "Everything in Complete Brand System, plus:",
          "Multi-brand architecture & sub-brand hierarchies",
          "Digital design tokens & Figma Component System",
          "Full packaging & retail environmental signage guide",
          "Bilingual typography audit (Arabic & English harmony)",
          "3D brand assets, spatial mockups & keynote deck",
          "30 days post-launch priority support & revisions",
          "Executive handover workshop with internal design team",
        ],
        featuresAr: [
          "كل ما في باقة الهوية المتكاملة، بالإضافة إلى:",
          "هندسة وتفرع العلامات التجارية للشركات القابضة والفروع",
          "توكنز التصميم الرقمي ونظام مكونات Figma المتكامل",
          "دليل التغليف واللافتات المعمارية والميدانية للمقرات",
          "مواءمة تايبوغرافي ثنائية اللغة احترافية (عربي وإنجليزي)",
          "أصول ثلاثية الأبعاد وعروض تقديمية تنفيذية للشركاء",
          "30 يوماً دعم وتعديلات أولوية بعد الإطلاق",
          "ورشة عمل تنفيذية لتسليم النظام لفريقك الداخلي",
        ],
      },
    ],
  },
  {
    id: "social",
    labelEn: "Social & Creative Retainer",
    labelAr: "سوشيال ميديا وحملات إعلانية",
    descriptionEn: "High-volume visual production, ad creative variations, and daily social assets.",
    descriptionAr: "إنتاج بصري شهري مستمر، تصميمات إعلانية للحملات، ومحتوى لمنصات التواصل.",
    isMonthlyRetainer: true,
    tiers: [
      {
        id: "essential-social",
        nameEn: "Essential Presence",
        nameAr: "حضور رقمي منظم",
        taglineEn: "Consistent, polished daily presence for brands that need visual consistency.",
        taglineAr: "حضور رقمي احترافي ومنتظم للشركات التي تريد واجهة بصرية منسقة وثابتة.",
        priceUsd: 750,
        isMonthly: true,
        featuresEn: [
          "12 custom graphic posts per month",
          "4 animated stories / vertical reels covers",
          "Monthly creative art direction and palette curation",
          "Multi-format assets (Instagram, LinkedIn, X, Facebook)",
          "2 revision cycles per weekly delivery batch",
          "Full export pack (High-res PNG, MP4, editable files)",
        ],
        featuresAr: [
          "12 تصميماً جرافيكياً مخصصاً شهرياً",
          "4 ستوريز متحركة / أغلفة ريلز رأسية",
          "توجه إبداعي شهري متجدد متناسق مع روح العلامة",
          "مقاسات متعددة (إنستغرام، لينكد إن، إكس، وفيسبوك)",
          "جولتا مراجعة لكل دفعة تسليم أسبوعية",
          "ملفات تصدير كاملة بدقة فائقة مع الملفات المفتوحة",
        ],
      },
      {
        id: "growth-creative",
        nameEn: "Growth Creative Suite",
        nameAr: "باقة النمو والتفاعل",
        taglineEn: "Performance visual production and high-converting paid ad creatives.",
        taglineAr: "إنتاج بصري مكثف وتصميمات إعلانية مدروسة خصيصاً لرفع التحويل والمبيعات.",
        priceUsd: 1450,
        isMonthly: true,
        popular: true,
        badgeEn: "Most Requested",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in Essential Presence, plus:",
          "30 custom graphic posts per month",
          "8 motion reels / 9:16 vertical video edits",
          "High-converting Paid Ad creative variants (Meta, TikTok)",
          "Carousel storytelling slides & data infographics",
          "Up to 3 urgent same-day graphic turnarounds",
          "Dedicated senior designer & shared WhatsApp group",
        ],
        featuresAr: [
          "كل ما في باقة الحضور الرقمي، بالإضافة إلى:",
          "30 تصميماً جرافيكياً مخصصاً شهرياً",
          "8 فيديوهات ريلز وموشن جرافيك رأسي (9:16)",
          "تصميمات إعلانية متعددة للـ Media Buying (ميتا، تيك توك)",
          "سلايدات كاروسيل قصصية وإنفوجرافيك بيانات احترافي",
          "ما يصل إلى 3 تصميمات طارئة في نفس اليوم شهرياً",
          "مصمم أول مخصص وقناة تواصل مباشرة عبر واتساب",
        ],
      },
      {
        id: "omnichannel-studio",
        nameEn: "Omnichannel Studio",
        nameAr: "استوديو مخصص متكامل",
        taglineEn: "Full external design department for aggressive multi-channel campaigns.",
        taglineAr: "فريق تصميم متكامل تحت تصرفك لإدارة الحملات التسويقية في عدة أسواق.",
        priceUsd: 2800,
        isMonthly: true,
        badgeEn: "Dedicated Squad",
        badgeAr: "فريق مخصص",
        featuresEn: [
          "Everything in Growth Creative Suite, plus:",
          "Unlimited active graphic design requests queue",
          "16 custom motion graphics & high-paced video reels",
          "Landing page creative banners & campaign UI assets",
          "Influencer PR packaging & launch campaign collateral",
          "Bilingual Arabic-English copywriting & typography sync",
          "Dedicated Art Director with weekly strategy calls",
        ],
        featuresAr: [
          "كل ما في باقة النمو والتفاعل، بالإضافة إلى:",
          "قائمة مهام تصميم مفتوحة وغير محدودة بالتتابع",
          "16 فيديو موشن جرافيك وريلز عالي الإيقاع",
          "بانرات ومواد بصرية لصفحات الهبوط والحملات",
          "تصميم هدايا المؤثرين ومواد الإطلاق الترويجية",
          "صياغة نصوص إعلانية ثنائية اللغة متناسقة مع التصميم",
          "آرت دايركتور مخصص مع اجتماعات إستراتيجية أسبوعية",
        ],
      },
    ],
  },
  {
    id: "corporate",
    labelEn: "Corporate Identity & Print",
    labelAr: "هويات الشركات والمطبوعات",
    descriptionEn: "Stationery suites, luxury packaging, editorial print, and signage engineering.",
    descriptionAr: "مطبوعات المعاملات، التغليف الفاخر، بروفايلات الشركات، واللافتات الميدانية.",
    isMonthlyRetainer: false,
    tiers: [
      {
        id: "corporate-stationery",
        nameEn: "Corporate Stationery",
        nameAr: "المطبوعات الإدارية الأساسية",
        taglineEn: "Essential branded administrative suite for day-to-day business operations.",
        taglineAr: "حزمة المطبوعات الرسمية والمستندات الإدارية اليومية لمعاملات الشركة.",
        priceUsd: 950,
        featuresEn: [
          "Luxury business cards (Spot UV & foil specifications)",
          "Official letterhead (Word + print-ready PDF)",
          "Corporate presentation folder with pocket die-cut",
          "Standard envelopes (C4, C5, DL) and corporate stamp",
          "Digital invoice & formal quotation templates",
          "Exact CMYK color profiles & printer technical sheets",
        ],
        featuresAr: [
          "بطاقات عمل فاخرة (مواصفات السبوت UV والختم الحراري)",
          "ورق المراسلات الرسمي (نسخة Word قابلة للتعديل + PDF للطباعة)",
          "فولدر الشركة الرسمي مع قوالب القص الداخلي (Die-cut)",
          "أظرف المراسلات الرسمية بكافة المقاسات وختم الشركة",
          "نماذج الفواتير وعروض الأسعار الرقمية الرسمية",
          "ملفات مفصولة الألوان (CMYK) مع كراسة مواصفات المطابع",
        ],
      },
      {
        id: "packaging-commercial",
        nameEn: "Packaging & Commercial",
        nameAr: "حزمة التغليف والتجارة",
        taglineEn: "Complete retail packaging, consumer products, and trade exhibition kits.",
        taglineAr: "تصميم التغليف والمنتجات الاستهلاكية ومطبوعات المعارض والترويج التجاري.",
        priceUsd: 2400,
        popular: true,
        badgeEn: "Commercial Grade",
        badgeAr: "الأكثر شمولاً",
        featuresEn: [
          "Everything in Corporate Stationery, plus:",
          "Product packaging suite (Boxes, pouches, or sleeves)",
          "Branded shopping bags, tissue paper & packing tape",
          "Corporate company profile brochure (Up to 16 pages)",
          "Exhibition roll-up banners & event backdrop walls",
          "Realistic 3D packaging mockups for retail sign-off",
          "Full coordination with your commercial packaging printer",
        ],
        featuresAr: [
          "كل ما في باقة المطبوعات الإدارية، بالإضافة إلى:",
          "تصميم عبوات وتغليف المنتجات (علب، أكياس، أغلفة)",
          "أكياس التسوق وأشرطة التغليف والشريط اللاصق المخصص",
          "بروفايل الشركة التعريفي والكتالوج (حتى 16 صفحة)",
          "بانرات المعارض والفعاليات وجدران التصوير (Backdrop)",
          "نماذج تجسيم ثلاثية الأبعاد (3D Mockups) قبل اعتماد الطباعة",
          "تنسيق ومتابعة فنية مباشرة مع مطبعة التغليف الخاصة بك",
        ],
      },
      {
        id: "environmental-spatial",
        nameEn: "360° Spatial & Fleet",
        nameAr: "الهوية الميدانية والأسطول",
        taglineEn: "Full architectural building signage, vehicle fleet, and spatial branding.",
        taglineAr: "الهوية المعمارية الشاملة: لافتات المباني، أسطول السيارات، والبيئة المكتبية.",
        priceUsd: 4800,
        badgeEn: "Turnkey System",
        badgeAr: "تسليم مفتاح",
        featuresEn: [
          "Everything in Packaging & Commercial, plus:",
          "Headquarters exterior signage (3D channel letters, neon, acrylic)",
          "Interior wayfinding, reception wall & office manifestations",
          "Vehicle fleet branding (Vans, trucks, executive sedans)",
          "Staff uniform, lanyard, and physical access badge design",
          "Material specification manual (Metals, acrylics, pantones)",
          "On-site sampling review & physical quality sign-off",
        ],
        featuresAr: [
          "كل ما في باقة التغليف والتجارة، بالإضافة إلى:",
          "لافتات الواجهات الخارجية (حروف بارزة، إضاءة نيون، أكريليك)",
          "أنظمة التوجيه الداخلي، جدار الاستقبال، وزجاج المكاتب",
          "تصميم كسوة أسطول السيارات (سيارات نقل، شاحنات، سيارات مدراء)",
          "تصميم الزي الموحد للموظفين (Uniform) وبطاقات الدخول",
          "دليل مواصفات الخامات (المعادن، الأكريليك، وتطابق ألوان بانتون)",
          "مراجعة عينات الطباعة والخامات واعتمادها قبل التنفيذ النهائي",
        ],
      },
    ],
  },
];

// ── WEBSITES & DIGITAL PLATFORMS TRACKS ──
const WEBSITES_PLATFORMS_TRACKS: PricingTrack[] = [
  {
    id: "corporate",
    labelEn: "Corporate & Business Sites",
    labelAr: "مواقع الشركات والأنشطة التجارية",
    descriptionEn: "High-converting corporate platforms, lead-capture landing pages, and multi-page business websites.",
    descriptionAr: "مواقع شركات احترافية، صفحات هبوط تسويقية، وبوابات أعمال ثنائية اللغة مبنية بأعلى معايير السرعة والأمان.",
    isMonthlyRetainer: false,
    tiers: [
      {
        id: "corporate-landing",
        nameEn: "High-Conversion Landing",
        nameAr: "صفحة هبوط تسويقية",
        taglineEn: "Strategic single-page digital experience built to capture leads and drive ad campaign conversions.",
        taglineAr: "صفحة هبوط مركزة ومصممة لرفع معدل التحويل وجذب العملاء المحتملين من الحملات الإعلانية.",
        priceUsd: 650,
        originalPriceUsd: 900,
        featuresEn: [
          "Storytelling single-page layout (Hero, features, proof, FAQ, CTA)",
          "100% Mobile-first responsive design & custom micro-animations",
          "Bilingual Arabic & English typography & native RTL support",
          "WhatsApp, CRM, and lead capture form integrations",
          "On-page technical SEO & OpenGraph social sharing meta tags",
          "Sub-second load speed (90+ score on Google PageSpeed)",
          "14 days post-launch support and Google Analytics 4 setup",
        ],
        featuresAr: [
          "هيكل صفحة هبوط قصصي متكامل (واجهة، ميزات، آراء عملاء، أسئلة شائعة، ودعوة للعمل)",
          "تصميم متجاوب بالكامل لشاشات الجوال مع لمسات حركة تفاعلية",
          "مواءمة تايبوغرافي ثنائية اللغة (عربي وإنجليزي) مع دعم كامل للـ RTL",
          "ربط فوري ومباشر مع واتساب، نماذج التواصل، وأنظمة إدارة العملاء (CRM)",
          "تهيئة سيو تقني داخلي (Technical SEO) وعلامات المشاركة على منصات التواصل",
          "سرعة تحميل فائقة وتجاوز معايير جوجل بسرعة 90+ (Google PageSpeed)",
          "14 يوماً دعم فني ومعالجة ملاحظات مع ربط Google Analytics 4",
        ],
      },
      {
        id: "corporate-growth",
        nameEn: "Corporate Multi-Page",
        nameAr: "موقع مؤسسي متكامل",
        taglineEn: "Comprehensive digital presence for established businesses ready to command market authority.",
        taglineAr: "واجهة رقمية شاملة للشركات والمؤسسات التي تبحث عن حضور سوقي قوي وموثوق.",
        priceUsd: 1450,
        originalPriceUsd: 1900,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in High-Conversion Landing, plus:",
          "Up to 8 custom bespoke pages (About, Services, Team, Blog, Contact, etc.)",
          "Headless CMS integration (manage your texts, images, and blogs easily)",
          "Interactive appointment booking or consultation calendar",
          "Dynamic portfolio / project showcase with category filtering",
          "Comprehensive technical SEO & Google Analytics 4 integration",
          "High-speed Next.js 15 architecture hosted on global edge CDN",
          "30 days priority SLA warranty & client handover workshop",
        ],
        featuresAr: [
          "كل ما في صفحة الهبوط التسويقية، بالإضافة إلى:",
          "حتى 8 صفحات مخصصة بالكامل (من نحن، الخدمات، الفريق، المدونة، اتصل بنا)",
          "لوحة تحكم لإدارة المحتوى (CMS) لتعديل النصوص والصور والمقالات بسهولة",
          "نظام حجز مواعيد واستشارات تفاعلي ومرتبط بالتقويم",
          "معرض أعمال ومشاريع تفاعلي مع فلترة حسب الأقسام والقطاعات",
          "تهيئة متقدمة لمحركات البحث وسرعة خارقة بأحدث تقنيات Next.js 15",
          "استضافة سحابية فائقة الأمان موزعة على شبكات الـ Edge العالمية",
          "30 يوماً ضمان ودعم أولوية مع ورشة تدريب لفريقك لإدارة الموقع",
        ],
      },
      {
        id: "corporate-enterprise",
        nameEn: "Enterprise Authority Portal",
        nameAr: "بوابة شركات كبرى وتوسع",
        taglineEn: "Bespoke multi-branch digital infrastructure for major holdings, franchises, and enterprise leaders.",
        taglineAr: "بنية رقمية متقدمة للشركات القابضة والمجموعات متعددة الفروع والخدمات.",
        priceUsd: 3200,
        originalPriceUsd: 4200,
        badgeEn: "Enterprise SLA",
        badgeAr: "عقود المؤسسات",
        featuresEn: [
          "Everything in Corporate Multi-Page, plus:",
          "Unlimited pages architecture with multi-division hierarchy",
          "Role-based CMS permissions & staging preview workflows",
          "Custom interactive tools (Cost calculators, client portals, branch locators)",
          "Enterprise security audit, penetration tests, and SSL hardening",
          "Full API connectivity with existing ERP / CRM systems",
          "Dedicated Senior Engineering Lead & Art Director",
          "90 days guaranteed maintenance, SLA backing, and staff training",
        ],
        featuresAr: [
          "كل ما في الموقع المؤسسي المتكامل، بالإضافة إلى:",
          "هيكلية صفحات غير محدودة مع إدارة الهيكل التنظيمي والفروع",
          "صلاحيات مستخدمين متعددة لإدارة المحتوى مع بيئة معاينة تجريبية قبل النشر",
          "أدوات تفاعلية مخصصة (حاسبة تكاليف، بوابة عملاء، محدد مواقع الفروع)",
          "فحص أمان واختراق شامل وشهادات حماية معتمدة ومطابقة لأعلى المعايير",
          "ربط برمجي كامل (APIs) مع أنظمة الشركة الداخلية وقواعد البيانات (ERP/CRM)",
          "مهندس برمجيات أول ومخرج فني مخصصان للمشروع بالكامل",
          "90 يوماً صيانة ومتابعة مع اتفاقية مستوى خدمة (SLA) وتدريب شامل للموظفين",
        ],
      },
    ],
  },
  {
    id: "ecommerce",
    labelEn: "E-Commerce & Digital Stores",
    labelAr: "المتاجر والتجارة الإلكترونية",
    descriptionEn: "Frictionless checkout experiences, conversion-optimized product pages, and scalable payment gateways.",
    descriptionAr: "متاجر إلكترونية فائقة السرعة، تجارب شراء سلسة، وربط بوابات الدفع والشحن المعتمدة لرفع المبيعات.",
    isMonthlyRetainer: false,
    tiers: [
      {
        id: "ecommerce-boutique",
        nameEn: "Boutique Store Launch",
        nameAr: "متجر الانطلاقة التجارية",
        taglineEn: "Focused, high-converting digital storefront for direct-to-consumer and boutique brands.",
        taglineAr: "متجر إلكتروني أنيق ومركّز للعلامات التجارية التي تطلق منتجاتها للبيع المباشر.",
        priceUsd: 950,
        originalPriceUsd: 1300,
        featuresEn: [
          "Catalog setup for up to 25 products with options & variants",
          "Seamless checkout flow with localized payment gateways (Mada, Apple Pay, Visa)",
          "Automated shipping rates calculation and customer order notifications",
          "Conversion-optimized cart & fast slide-out drawer",
          "Mobile-first catalog browsing & responsive UI",
          "Basic inventory management & coupon discounts engine",
          "14 days launch assistance & staff store operation training",
        ],
        featuresAr: [
          "تجهيز الكتالوج لما يصل إلى 25 منتجاً مع خيارات المقاسات والألوان",
          "سلة شراء فائقة السلاسة مع ربط بوابات الدفع (مدى، Apple Pay، فيزا/ماستركارد)",
          "حساب أسعار الشحن تلقائياً مع إشعارات الرسائل والبريد لحالة الطلب",
          "سلة تسوق جانبية ذكية وسريعة مصممة لتقليل التردد وإتمام الشراء فوراً",
          "واجهة تصفح مريحة مصممة للهواتف الذكية مع تجربة مستخدم سريعة",
          "نظام إدارة المخزون وتفعيل كوبونات الخصم والعروض الترويجية",
          "14 يوماً دعم فني ومساعدة إطلاق مع تدريب كامل على إدارة المتجر",
        ],
      },
      {
        id: "ecommerce-scale",
        nameEn: "High-Scale E-Commerce",
        nameAr: "متجر التوسع والمبيعات",
        taglineEn: "Advanced e-commerce infrastructure engineered for aggressive marketing and high order volume.",
        taglineAr: "بنية تجارة إلكترونية متقدمة مصممة لتحمل الحملات الإعلانية ومضاعفة معدل المبيعات.",
        priceUsd: 2200,
        originalPriceUsd: 2800,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in Boutique Store Launch, plus:",
          "Unlimited products catalog with advanced multi-filters & live search",
          "Integration with Tabby & Tamara (Buy Now, Pay Later) + Apple Pay",
          "Automated shipping courier integrations (SMSA, Aramex, DHL, etc.)",
          "Abandoned cart recovery automations & customer loyalty setup",
          "Upsell, cross-sell & bundle recommendation modules",
          "Meta Pixel, TikTok Pixel & Google Tag Manager tracking suite",
          "30 days priority support & post-launch conversion audit",
        ],
        featuresAr: [
          "كل ما في متجر الانطلاقة، بالإضافة إلى:",
          "كتالوج منتجات غير محدود مع فلاتر ذكية وبحث فوري مباشر",
          "ربط حلول الدفع الآجل والتقسيط (تابي وتمارا) لزيادة متوسط قيمة الطلب",
          "ربط آلي مع شركات الشحن المعتمدة (سمسا، أرامكس، DHL) لإصدار البوالص",
          "نظام آلي لاسترداد السلات المتروكة ورسائل تذكير تلقائية عبر واتساب/إيميل",
          "وحدات ترقية الشراء والعروض الذكية (Upsell & Cross-sell & Bundles)",
          "ربط متكامل لبيكسلات التتبع الإعلاني (ميتا، تيك توك، جوجل، وسناب شات)",
          "30 يوماً دعم أولوية ومراجعة تحليلية لرفع معدلات التحويل بعد الإطلاق",
        ],
      },
      {
        id: "ecommerce-custom",
        nameEn: "Headless Custom Commerce",
        nameAr: "منصة تجارة مخصصة ومتعددة الفروع",
        taglineEn: "Bespoke headless commerce architecture with multi-warehouse, custom loyalty, and ERP sync.",
        taglineAr: "منصة تجارية مخصصة بهندسة Headless، إدارة مستودعات متعددة، وربط أنظمة الـ ERP.",
        priceUsd: 4800,
        originalPriceUsd: 6000,
        badgeEn: "Custom Engine",
        badgeAr: "بنية مخصصة",
        featuresEn: [
          "Everything in High-Scale E-Commerce, plus:",
          "High-performance Headless storefront (Next.js + Shopify / Medusa / Custom)",
          "Multi-currency, multi-country & automatic geo-location routing",
          "Real-time two-way synchronization with inventory ERP & POS systems",
          "Custom B2B wholesale pricing tiers and corporate customer accounts",
          "Sub-second instant catalog filtering for 10,000+ SKUs",
          "Custom checkout logic and automated return/exchange portals",
          "60 days dedicated technical account manager & 24/7 SLA uptime",
        ],
        featuresAr: [
          "كل ما في متجر التوسع والمبيعات، بالإضافة إلى:",
          "واجهة تجارة إلكترونية منفصلة فائقة السرعة (Next.js Headless Commerce)",
          "دعم متعدد العملات والدول مع توجيه جغرافي تلقائي للعملاء",
          "مزامنة لحظية ثنائية الاتجاه مع أنظمة المخزون والكاشير (ERP / POS Systems)",
          "بوابة بيع بالجملة (B2B) مع أسعار مخصصة للشركات وحسابات معتمدة",
          "تصفية فورية وسريعة لكتالوجات ضخمة تتجاوز 10,000 منتج بلا أي بطء",
          "منظومة مخصصة لإدارة المرتجعات والاستبدال الذاتي للعملاء",
          "60 يوماً مدير حساب تقني مخصص مع ضمان تشغيل متواصل 24/7",
        ],
      },
    ],
  },
  {
    id: "web-apps",
    labelEn: "Web Apps & Custom Portals",
    labelAr: "المنصات الرقمية وبوابات الويب",
    descriptionEn: "Dynamic customer portals, interactive SaaS applications, internal dashboards, and custom web tools.",
    descriptionAr: "بوابات العملاء التفاعلية، منصات SaaS، لوحات التحكم التشغيلية، وحلول الويب البرمجية المخصصة.",
    isMonthlyRetainer: false,
    tiers: [
      {
        id: "portal-mvp",
        nameEn: "Interactive Portal MVP",
        nameAr: "منصة تفاعلية انطلاقة",
        taglineEn: "Validated interactive web platform with secure user authentication and essential workflows.",
        taglineAr: "منصة ويب تفاعلية أولية تشمل تسجيل المستخدمين والعمليات التشغيلية الأساسية.",
        priceUsd: 1800,
        originalPriceUsd: 2400,
        featuresEn: [
          "User authentication suite (Email, Google, OTP verification)",
          "Client dashboard with profile management & activity feed",
          "Interactive booking, request submission, or custom quotation system",
          "Relational database schema (PostgreSQL / Supabase)",
          "Clean admin panel for staff to manage requests and data",
          "Role-based permissions (User vs Admin)",
          "14 days bug-fix warranty & deployment on secure cloud",
        ],
        featuresAr: [
          "نظام مصادقة مستخدمين آمن (تسجيل بالبريد، جوجل، والتحقق برمز OTP)",
          "لوحة تحكم للعميل لإدارة الملف الشخصي ومتابعة الطلبات والنشاط",
          "نظام حجز مواعيد، طلب خدمات، أو تسعير مخصص تفاعلي",
          "بناء قاعدة بيانات علائقية سريعة ومحمية (PostgreSQL / Supabase)",
          "لوحة تحكم إدارية نظيفة لفريق العمل لإدارة البيانات والطلبات",
          "إدارة صلاحيات الوصول الأساسية (مستخدم عادي مقابل مدير نظام)",
          "14 يوماً ضمان حل الملاحظات ونشر المنصة على استضافة سحابية آمنة",
        ],
      },
      {
        id: "platform-custom",
        nameEn: "Custom Web Application",
        nameAr: "تطبيق ويب متكامل ومنصة أعمال",
        taglineEn: "Full-stack web application with deep workflows, custom APIs, billing, and real-time data.",
        taglineAr: "تطبيق ويب متكامل برمجياً مع سير عمل متقدم، اشتراكات ودفع دوري، ولوحات تحكم تفاعلية.",
        priceUsd: 3800,
        originalPriceUsd: 4800,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in Interactive Portal MVP, plus:",
          "Full-stack architecture (Next.js 15, TypeScript, Tailwind, Node / Serverless)",
          "Subscription billing and recurring payment integrations (Stripe / Paylink)",
          "Multi-role access control (Admin, Manager, Member, Guest)",
          "Real-time notifications, messaging, and email/SMS webhooks",
          "Comprehensive data visualizations, analytics charts, and PDF export",
          "Complete REST / GraphQL API endpoints with documentation",
          "30 days post-launch SLA, automated daily backups, and monitoring",
        ],
        featuresAr: [
          "كل ما في المنصة التفاعلية الأولية، بالإضافة إلى:",
          "بنية برمجية متكاملة Full-Stack (تقنيات Next.js 15, TypeScript, Tailwind)",
          "نظام اشتراكات شهرية ودفع دوري متكرر (Stripe / Paylink / Tap)",
          "صلاحيات متعددة المستويات (مدير عام، مشرف قسم، عميل، عضو فريق)",
          "إشعارات فورية وتنبيهات بريدية ورسائل SMS عبر الـ Webhooks",
          "لوحات بيانات ورسوم بيانية تفاعلية مع إمكانية تصدير تقارير PDF وإكسل",
          "بناء واجهات برمجية كاملة (APIs) موثقة لربط تطبيقات الجوال مستقبلاً",
          "30 يوماً دعم فني SLA، نسخ احتياطي يومي تلقائي، ومراقبة أداء على مدار الساعة",
        ],
      },
      {
        id: "platform-enterprise",
        nameEn: "Enterprise Platform Architecture",
        nameAr: "بنية المنصات المؤسسية الكبرى",
        taglineEn: "Mission-critical, distributed cloud platform engineered for massive concurrent traffic and compliance.",
        taglineAr: "منظومة سحابية مؤسسية مخصصة للعمليات الضخمة، أمان البيانات الصارم، وتحمل آلاف المستخدمين.",
        priceUsd: 7500,
        originalPriceUsd: 9500,
        badgeEn: "Enterprise Grade",
        badgeAr: "مواصفات كبرى",
        featuresEn: [
          "Everything in Custom Web Application, plus:",
          "High-availability microservices or modular cloud architecture (AWS / GCP / Vercel)",
          "Strict data encryption, SOC2-ready practices, and audit logs",
          "Integration with legacy enterprise databases and custom middleware",
          "Complex background jobs, automated AI workflows, and queues",
          "Dedicated DevOps & CI/CD deployment pipelines",
          "Load testing for peak concurrent user capacity",
          "90 days guaranteed support, uptime SLA contract, and developer documentation",
        ],
        featuresAr: [
          "كل ما في منصة الأعمال المتكاملة، بالإضافة إلى:",
          "بنية تحتية سحابية موزعة عالية التوافر (High-Availability AWS / GCP)",
          "تشفير بيانات متقدم، سجلات تدقيق العمليات (Audit Logs)، ومعايير أمان مصرفية",
          "ربط مع قواعد البيانات القديمة والأنظمة الداخلية المعقدة للشركات",
          "معالجة خلفية للبيانات الضخمة ودمج وظائف الذكاء الاصطناعي والأتمتة",
          "خطوط أنابيب نشر وتطوير مؤتمتة (DevOps & CI/CD Pipelines)",
          "اختبارات أحمال وضغط لضمان استقرار المنصة أثناء ذروة الاستخدام المكثف",
          "90 يوماً عقد دعم وتشغيل موثق مع ضمان استمرارية الخدمة (SLA) وتوثيق كامل للأكواد",
        ],
      },
    ],
  },
];

// ── MOBILE APPS & SAAS PRODUCTS TRACKS ──
const MOBILE_APPS_SAAS_TRACKS: PricingTrack[] = [
  {
    id: "mobile-apps",
    labelEn: "Mobile Apps (iOS & Android)",
    labelAr: "تطبيقات الجوال (iOS & Android)",
    descriptionEn: "High-performance cross-platform apps built with React Native & Expo, ready for App Store and Google Play.",
    descriptionAr: "تطبيقات جوال هجينة عالية الأداء مبنية بتقنيات React Native و Expo مع نشر رسمي على متجري آبل وجوجل بلاي.",
    isMonthlyRetainer: false,
    tiers: [
      {
        id: "app-mvp",
        nameEn: "MVP App Launch",
        nameAr: "تطبيق الانطلاقة MVP",
        taglineEn: "Validate your app concept fast with core workflows on both iOS & Android.",
        taglineAr: "إطلاق سريع لنموذج التطبيق الأولي على متجري آبل وجوجل للتحقق من الفكرة وجذب المستخدمين.",
        priceUsd: 1250,
        originalPriceUsd: 1600,
        featuresEn: [
          "Single codebase for iOS & Android (React Native & Expo)",
          "Bespoke mobile UI/UX design (Up to 8 screens)",
          "User authentication suite (Social Login, Email & OTP)",
          "Core relational database & cloud setup (Supabase)",
          "Push notifications pipeline (OneSignal / Expo Push)",
          "App Store & Google Play initial submission assistance",
          "14 days post-handover bug fix warranty",
        ],
        featuresAr: [
          "شيفرة برمجية موحدة لنظامي iOS وأندرويد (React Native & Expo)",
          "تصميم واجهات وتجربة مستخدم مخصصة للهواتف (حتى 8 شاشات)",
          "نظام تسجيل دخول ومصادقة مستخدمين (جوجل، أبل، ورمز OTP)",
          "قاعدة بيانات سحابية سريعة ومحمية (Supabase / PostgreSQL)",
          "نظام إرسال الإشعارات اللحظية للمستخدمين (Push Notifications)",
          "تجهيز ورفع التطبيق على متجري App Store و Google Play",
          "14 يوماً ضمان حل الملاحظات البرمجية بعد التسليم",
        ],
      },
      {
        id: "app-scale",
        nameEn: "Commercial Scale App",
        nameAr: "تطبيق تجاري متكامل",
        taglineEn: "Production-grade mobile platform with in-app payments, real-time sync, and admin dashboard.",
        taglineAr: "منظومة تطبيق تجارية متكاملة مع بوابات دفع، مزامنة لحظية، ولوحة تحكم ويب إدارية شاملة.",
        priceUsd: 2900,
        originalPriceUsd: 3800,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in MVP App Launch, plus:",
          "Custom Admin Web Dashboard for managing orders, users & content",
          "In-app payments & localized gateways (Apple Pay, Mada, Stripe)",
          "Offline-first local caching & fluid 60fps micro-animations",
          "Interactive map, GPS routing, or custom geolocation tracking",
          "Bilingual Arabic (RTL) & English localization",
          "Automated crash reporting & performance monitoring (Sentry)",
          "30 days priority warranty & store acceptance guarantee",
        ],
        featuresAr: [
          "كل ما في تطبيق الانطلاقة، بالإضافة إلى:",
          "لوحة تحكم ويب إدارية شاملة للتحكم في الطلبات والبيانات والعملاء",
          "ربط بوابات الدفع الإلكتروني (Apple Pay، مدى، فيزا/ماستركارد)",
          "تجربة استخدام سريعة تعمل دون اتصال (Offline-first Caching)",
          "خرائط تفاعلية وتتبع حي وتحديد المواقع (GPS Geolocation)",
          "مواءمة كاملة للغة العربية والإنجليزية مع دعم أصيل للـ RTL",
          "نظام مراقبة الأداء وتتبع الأخطاء التقنية لحظياً (Sentry)",
          "30 يوماً ضمان أولوية والتزام بقبول التطبيق على المتاجر",
        ],
      },
      {
        id: "app-enterprise",
        nameEn: "Enterprise On-Demand Suite",
        nameAr: "منظومة تطبيقات كبرى متعددة الأطراف",
        taglineEn: "Dual-app ecosystem (Customer + Provider / Driver) with real-time dispatch and scale architecture.",
        taglineAr: "منظومة متكاملة من تطبيقين منفصلين (تطبيق العميل + تطبيق مزود الخدمة/السائق) مع إدارة مركزية.",
        priceUsd: 6400,
        originalPriceUsd: 8200,
        badgeEn: "Enterprise SLA",
        badgeAr: "عقود المؤسسات",
        featuresEn: [
          "Everything in Commercial Scale App, plus:",
          "2 Distinct native mobile apps (Customer App + Provider/Driver App)",
          "Real-time WebSocket order dispatch & live courier tracking",
          "Multi-tier commission engine, in-app wallet, & payout system",
          "Biometric FaceID / TouchID authentication & enterprise encryption",
          "High-availability backend architecture deployed on AWS / Google Cloud",
          "Dedicated Senior Engineering Lead & weekly sprint demos",
          "90 days guaranteed support & written enterprise SLA contract",
        ],
        featuresAr: [
          "كل ما في التطبيق التجاري المتكامل، بالإضافة إلى:",
          "تطبيقان مستقلان أصيلان (تطبيق للعميل + تطبيق لمزود الخدمة أو السائق)",
          "نظام توجيه وتوزيع طلبات فوري عبر الـ WebSockets وتتبع مباشر",
          "محفظة مالية رقمية داخل التطبيق وحساب العمولات والأرباح تلقائياً",
          "تسجيل دخول ببصمة الوجه والإصبع (FaceID/Biometrics) وتشفير عالي",
          "بنية تحتية سحابية موزعة على AWS أو Google Cloud للتحمل العالي",
          "مهندس برمجيات أول مخصص للمشروع واجتماعات سبرنت دورية",
          "90 يوماً ضمان شامل مع عقد مستوى خدمة رسمي موثق (SLA)",
        ],
      },
    ],
  },
  {
    id: "saas-products",
    labelEn: "SaaS & Cloud Platforms",
    labelAr: "المنصات السحابية ومنتجات ساس",
    descriptionEn: "Multi-tenant cloud platforms, automated billing, role-based workflows, and scalable subscription architecture.",
    descriptionAr: "برمجيات سحابية بنظام الاشتراكات (SaaS)، بوابات دفع دورية، إدارة صلاحيات متعددة، وبنية تحتية عالية التوسع.",
    isMonthlyRetainer: false,
    tiers: [
      {
        id: "saas-mvp",
        nameEn: "SaaS MVP Sprint",
        nameAr: "نموذج ساس الأولي MVP",
        taglineEn: "Rapidly build and launch a revenue-generating subscription software in weeks.",
        taglineAr: "بناء وإطلاق منتج سحابي تجريبي جاهز لتحصيل الاشتراكات والتحقق من السوق في أسابيع معدودة.",
        priceUsd: 1950,
        originalPriceUsd: 2500,
        featuresEn: [
          "Next.js 15 + TypeScript full-stack cloud architecture",
          "Secure user registration & team workspace invites",
          "Automated recurring subscription billing (Stripe / Paddle)",
          "Relational multi-table database schema (PostgreSQL / Supabase)",
          "Fully responsive desktop & mobile web experience",
          "Transactional emails pipeline (Resend / SendGrid)",
          "14 days post-handover bug warranty",
        ],
        featuresAr: [
          "بنية برمجية سحابية متقدمة بتقنيات Next.js 15 و TypeScript",
          "نظام تسجيل مستخدمين ودعوة أعضاء الفريق لمساحات العمل",
          "ربط نظام الاشتراكات الشهرية والسنوية والتجديد الآلي (Stripe/Paddle)",
          "قاعدة بيانات علائقية متقدمة (PostgreSQL / Supabase)",
          "تصميم متجاوب بالكامل لشاشات الحواسب والهواتف الذكية",
          "منظومة إرسال رسائل البريد الإلكتروني الآلية (فواتير، ترحيب)",
          "14 يوماً ضمان ودعم فني لمعالجة الملاحظات بعد التسليم",
        ],
      },
      {
        id: "saas-growth",
        nameEn: "Growth SaaS Platform",
        nameAr: "منصة ساس متكاملة للنمو",
        taglineEn: "Comprehensive multi-tenant software with usage tiers, granular roles, and customer self-service.",
        taglineAr: "برمجية سحابية متقدمة متعددة المستأجرين مع باقات استخدام مرنة، صلاحيات دقيقة، ولوحات إدارة ذاتية.",
        priceUsd: 4400,
        originalPriceUsd: 5600,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in SaaS MVP Sprint, plus:",
          "Multi-tenant organization accounts & member seat management",
          "Usage-based metering or feature-tier gated access",
          "Customer self-service portal (invoices, upgrade, seat add-ons)",
          "Interactive analytics charts & data export (CSV/PDF)",
          "Public REST API endpoints with auto-generated Swagger documentation",
          "Automated onboarding tours & in-app notifications",
          "30 days priority SLA warranty & client code handover workshop",
        ],
        featuresAr: [
          "كل ما في نموذج ساس الأولي، بالإضافة إلى:",
          "منظومة حسابات المؤسسات (Multi-Tenant) وإدارة مقاعد ومستخدمي كل شركة",
          "باقات تسعير مرنة تعتمد على الاستخدام أو فتح وإغلاق ميزات محددة",
          "بوابة خدمة ذاتية للعميل لإدارة الفواتير والترقية والإلغاء بسهولة",
          "رسوم بيانية تفاعلية لتحليل البيانات وتصدير التقارير (CSV/PDF)",
          "واجهة برمجية عامة (REST API) مع توثيق تقني تلقائي للمطورين",
          "جولة إرشادية تفاعلية للمستخدمين الجدد ونظام إشعارات داخل المنصة",
          "30 يوماً ضمان ودعم أولوية مع ورشة تسليم وتدريب تقني لفريقك",
        ],
      },
      {
        id: "saas-enterprise",
        nameEn: "Enterprise Cloud Suite",
        nameAr: "بنية سحابية كبرى للمؤسسات",
        taglineEn: "High-compliance, enterprise-ready SaaS with SSO, audit logs, and dedicated cloud isolation.",
        taglineAr: "نظام سحابي مخصص للمؤسسات الكبرى مع تسجيل الدخول الموحد (SSO)، سجلات تدقيق الأمان، وحماية بنكية.",
        priceUsd: 8900,
        originalPriceUsd: 11500,
        badgeEn: "Enterprise Core",
        badgeAr: "بنية المؤسسات",
        featuresEn: [
          "Everything in Growth SaaS Platform, plus:",
          "Enterprise SSO integration (SAML, Okta, Google Workspace, Azure AD)",
          "Comprehensive audit logging & compliance security trail",
          "Dedicated database tenant isolation or private cloud VPC deployment",
          "High-throughput microservices architecture with auto-scaling",
          "SOC2 / OWASP compliance & penetration testing sign-off",
          "Dedicated Solutions Architect & Technical Account Manager",
          "90 days guaranteed SLA & written code warranty contract",
        ],
        featuresAr: [
          "كل ما في منصة ساس للنمو، بالإضافة إلى:",
          "تسجيل دخول موحد للمؤسسات (SAML SSO, Okta, Google Workspace, Azure)",
          "سجلات تدقيق شاملة لكافة الأنشطة والعمليات الحساسة (Audit Trails)",
          "عزل كامل لقواعد بيانات الشركات الكبرى أو نشر سحابي خاص (Private VPC)",
          "معمارية خدمات مصغرة (Microservices) ذات قدرة توسع هائلة وتوافر عالٍ",
          "فحص أمان واختراق شامل ومطابقة أعلى المعايير المصرفية (OWASP/SOC2)",
          "مهندس معماري سحابي مخصص ومدير حساب تقني لمتابعة مشروعك",
          "90 يوماً عقد ضمان ودعم فني موثق مع التزامات أداء وتشغيل (SLA)",
        ],
      },
    ],
  },
  {
    id: "app-retainer",
    labelEn: "Continuous Engineering Squad",
    labelAr: "عقود التطوير والهندسة المستمرة",
    descriptionEn: "Dedicated product development sprints, store compliance maintenance, and 24/7 uptime monitoring.",
    descriptionAr: "فريق هندسي مخصص لتطوير الميزات الشهرية، صيانة تحديثات المتاجر، وضمان استمرارية التشغيل.",
    isMonthlyRetainer: true,
    tiers: [
      {
        id: "retainer-care",
        nameEn: "Maintenance & Care",
        nameAr: "الصيانة والأمان الدوري",
        taglineEn: "Keep your apps alive, secure, and compliant with latest iOS & Android store policies.",
        taglineAr: "الحفاظ على استقرار التطبيق وتوافقه مع متطلبات متجري آبل وجوجل وتحديثات أنظمة التشغيل.",
        priceUsd: 550,
        isMonthly: true,
        featuresEn: [
          "Monthly App Store & Google Play compliance & SDK updates",
          "24/7 automated uptime and crash monitoring (Sentry alerts)",
          "Critical security patches & dependency vulnerability fixes",
          "Automated database backups & cloud server health checks",
          "Up to 10 hours of minor bug fixes & UI tweaks per month",
          "Direct WhatsApp communication channel with engineering team",
        ],
        featuresAr: [
          "تحديثات دورية متوافقة مع متطلبات متجري آبل وجوجل وتحديثات الـ SDKs",
          "مراقبة تشغيل واستقرار متواصل على مدار 24/7 وتنبيهات فورية للأعطال",
          "تثبيت التحديثات الأمنية وسد الثغرات البرمجية في المكتبات فور صدورها",
          "نسخ احتياطي مؤتمت لقواعد البيانات وفحص دوري لموارد السيرفر",
          "حتى 10 ساعات عمل شهرياً لمعالجة الملاحظات والتحسينات البسيطة",
          "قناة تواصل مباشرة عبر واتساب مع الفريق الهندسي المخصص",
        ],
      },
      {
        id: "retainer-sprint",
        nameEn: "Dedicated Product Sprint",
        nameAr: "سبرنت تطوير شهري مخصص",
        taglineEn: "Continuous feature shipping with a dedicated engineering squad and bi-weekly release cycles.",
        taglineAr: "إطلاق وتطوير ميزات جديدة أسبوعياً مع فريق برمجي مخصص ودورات نشر منتظمة على المتاجر.",
        priceUsd: 1450,
        isMonthly: true,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in Maintenance & Care, plus:",
          "Up to 35 hours of dedicated feature development every month",
          "Bi-weekly App Store & Play Store staged release cycles",
          "Feature backlog prioritization driven by user feedback & analytics",
          "Database query profiling & mobile performance optimization",
          "Shared Slack / WhatsApp team collaboration channel",
          "Bi-weekly sprint progress demo call with Lead Engineer",
        ],
        featuresAr: [
          "كل ما في باقة الصيانة والأمان، بالإضافة إلى:",
          "ما يصل إلى 35 ساعة عمل هندسي شهرياً لتطوير وإطلاق ميزات جديدة",
          "دورات نشر وتحديثات نصف شهرية على متجري آبل وجوجل بلاي",
          "ترتيب وتطوير المهام بناءً على تحليلات وسلوك المستخدمين وملاحظاتهم",
          "تحسين مستمر لسرعة استجابة التطبيق واستهلاك الذاكرة واستعلامات البيانات",
          "قناة عمل مشتركة عبر Slack أو واتساب مع مصمم ومطور مخصصين",
          "اجتماع استعراض إنجازات السبرنت نصف شهري مع المهندس المسؤول",
        ],
      },
      {
        id: "retainer-cto",
        nameEn: "Full Tech Department",
        nameAr: "قسم تقني هندسي متكامل",
        taglineEn: "Full external technology team acting as your CTO, mobile team, and cloud DevOps.",
        taglineAr: "قسم تقني متكامل تحت تصرفك يتولى الإدارة الهندسية، تطوير التطبيقات، وإدارة البنية السحابية.",
        priceUsd: 3200,
        isMonthly: true,
        badgeEn: "Full Squad",
        badgeAr: "فريق متكامل",
        featuresEn: [
          "Everything in Dedicated Product Sprint, plus:",
          "80+ hours of dedicated engineering, design, and architecture monthly",
          "Fractional CTO attending your investor, board, and strategy calls",
          "Cross-platform capability across iOS, Android, Web & Cloud Backend",
          "Automated CI/CD test pipelines with zero-downtime deployments",
          "1-hour urgent incident response SLA for critical production outages",
          "Complete architectural ownership, technical roadmap, & code governance",
        ],
        featuresAr: [
          "كل ما في باقة سبرنت التطوير، بالإضافة إلى:",
          "أكثر من 80 ساعة هندسية شهرياً تغطي التطوير والتصميم والمعمارية",
          "مدير تقني تنفيذي (Fractional CTO) يحضر اجتماعاتك الاستراتيجية والمستثمرين",
          "فريق متكامل يغطي تطبيقات الجوال، واجهات الويب، والسيرفرات الخلفية",
          "خطوط نشر واختبار آلي مؤتمتة بالكامل (CI/CD) بلا أي توقف للخدمة",
          "اتفاقية استجابة طارئة خلال ساعة واحدة للحالات الحرجة والأعطال الكبرى",
          "ملكية هندسية شاملة وخارطة طريق تقنية واضحة لتوسيع وتطوير منتجك",
        ],
      },
    ],
  },
];

// ── BUSINESS SYSTEMS & DASHBOARDS TRACKS ──
const BUSINESS_SYSTEMS_TRACKS: PricingTrack[] = [
  {
    id: "crm-systems",
    labelEn: "Custom CRM & Lead Pipelines",
    labelAr: "أنظمة إدارة العملاء والمبيعات",
    descriptionEn: "Tailored sales pipelines, automated lead capture, and WhatsApp sync built around your team's exact workflow.",
    descriptionAr: "أنظمة مبيعات وعلاقات عملاء مفصلة خصيصاً لدورة عمل فريقك مع ربط محادثات واتساب ونماذج المبيعات تلقائياً.",
    isMonthlyRetainer: false,
    tiers: [
      {
        id: "crm-starter",
        nameEn: "Lead Pipeline CRM",
        nameAr: "نظام المبيعات والانطلاق",
        taglineEn: "Replace messy WhatsApp chats and spreadsheets with a single organized sales pipeline.",
        taglineAr: "وداعاً لفوضى مجموعات الواتساب وملفات الإكسل مع مسار متابعة مبيعات موحد ومنظم لفريقك.",
        priceUsd: 850,
        originalPriceUsd: 1100,
        featuresEn: [
          "Kanban visual deal pipeline (New, Contacted, Quoted, Closed)",
          "Centralized client directory with contact history & notes",
          "Automated lead capture from website forms & WhatsApp",
          "Role permissions (Sales Reps view only their assigned leads)",
          "Essential revenue & win/loss conversion dashboard",
          "Fast Next.js 15 + Supabase cloud deployment",
          "14 days post-launch support and staff onboarding call",
        ],
        featuresAr: [
          "مسار مبيعات مرئي بنظام كانبان (عميل جديد، تم التواصل، تم التسعير، مغلق)",
          "سجل مركزي موحد لبيانات العملاء مع سجل المكالمات والملاحظات",
          "التقاط فوري وتلقائي للعملاء من نماذج الموقع ورسائل واتساب",
          "صلاحيات مخصصة (كل مندوب مبيعات يرى فقط العملاء المخصصين له)",
          "لوحة مؤشرات سريعة للإيرادات المحصلة ونسبة تحويل الصفقات",
          "بنية سحابية فائقة السرعة بتقنيات Next.js 15 و Supabase",
          "14 يوماً دعم فني وجلسة تدريب وتأهيل لفريق المبيعات",
        ],
      },
      {
        id: "crm-scale",
        nameEn: "Commercial Operations CRM",
        nameAr: "نظام إدارة مبيعات وعمليات متكامل",
        taglineEn: "Comprehensive client management with automated contracts, WhatsApp bots, and team KPIs.",
        taglineAr: "منظومة مبيعات وعمليات متقدمة تشمل العقود والفواتير الرقمية، بوت واتساب ذكي، ومؤشرات أداء الفريق.",
        priceUsd: 1950,
        originalPriceUsd: 2600,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in Lead Pipeline CRM, plus:",
          "Automated quotation generator & one-click digital PDF contracts",
          "WhatsApp Business API integration for automated status updates",
          "Sales rep performance metrics, target tracking, & commissions",
          "Calendar appointment booking & SMS reminder sync",
          "Custom field builder to match your unique industry workflows",
          "Bilingual Arabic (RTL) & English interface with dark mode",
          "30 days priority warranty & dedicated staff training workshop",
        ],
        featuresAr: [
          "كل ما في نظام المبيعات والانطلاق، بالإضافة إلى:",
          "منشئ عروض أسعار آلي وتوليد عقود وفواتير رقمية PDF بضغطة زر",
          "ربط رسمي مع WhatsApp Business API لتحديث العملاء تلقائياً بحالة الطلب",
          "مؤشرات أداء يومية وشهرية لكل موظف مبيعات وتتبع التارجت والعمولات",
          "نظام حجز مواعيد ومقابلات تفاعلي مرتبط بالتقويم ورسائل الـ SMS",
          "حقول مخصصة بالكامل لتناسب متطلبات نشاطك التجاري بدقة",
          "واجهة ثنائية اللغة (عربي وإنجليزي) مع دعم كامل للـ RTL والوضع الليلي",
          "30 يوماً ضمان أولوية وورشة عمل تدريبية كاملة لفريق العمل",
        ],
      },
      {
        id: "crm-enterprise",
        nameEn: "Omnichannel Enterprise CRM",
        nameAr: "منظومة CRM للمؤسسات والشركات الكبرى",
        taglineEn: "Multi-branch CRM with telephony integration, ERP sync, advanced compliance, and audit logs.",
        taglineAr: "نظام متكامل للمؤسسات متعددة الفروع مع سنترال سحابي، مزامنة أنظمة ERP، وسجلات تدقيق العمليات.",
        priceUsd: 4500,
        originalPriceUsd: 5800,
        badgeEn: "Enterprise SLA",
        badgeAr: "عقود المؤسسات",
        featuresEn: [
          "Everything in Commercial Operations CRM, plus:",
          "Multi-branch & multi-department hierarchy management",
          "VoIP telephony & call recording log integrations",
          "Two-way bi-directional sync with internal ERP / accounting systems",
          "Granular data governance & full user activity audit logs",
          "Custom automated approval workflows (Discounts, refunds, contracts)",
          "Dedicated senior systems architect & high-availability cloud cluster",
          "90 days guaranteed SLA & written code handover documentation",
        ],
        featuresAr: [
          "كل ما في نظام العمليات التجاري، بالإضافة إلى:",
          "إدارة الهيكل التنظيمي والفروع المتعددة وصلاحيات الأقسام بدقة",
          "ربط السنترال السحابي ومكالمات الـ VoIP وسجلات المكالمات تلقائياً",
          "مزامنة لحظية ثنائية الاتجاه مع برامج المحاسبة وأنظمة الـ ERP للشركة",
          "حوكمة بيانات مشددة وسجلات تدقيق شاملة لكافة عمليات التعديل والحذف",
          "سير عمل موافقات مؤتمت (لاعتماد الخصومات، العقود، والمرتجعات)",
          "مهندس معماري لأنظمة الأعمال مخصص مع استضافة سحابية عالية التحمل",
          "90 يوماً عقد ضمان ودعم فني موثق مع تسليم كامل للأكواد وتوثيقها",
        ],
      },
    ],
  },
  {
    id: "dashboards",
    labelEn: "Operations Dashboards & Portals",
    labelAr: "لوحات التحكم وبوابات التشغيل",
    descriptionEn: "Internal web tools, operational dashboards, client portals, and inventory trackers built for day-to-day work.",
    descriptionAr: "لوحات تحكم تشغيلية داخلية، بوابات إدارة العملاء، ومتابعة المخزون والعمليات اليومية بلا تعقيد.",
    isMonthlyRetainer: false,
    tiers: [
      {
        id: "dash-mvp",
        nameEn: "Operations Dashboard MVP",
        nameAr: "لوحة تحكم تشغيلية انطلاقة",
        taglineEn: "Streamlined single-pane operational view for fast daily decisions and task tracking.",
        taglineAr: "شاشة تحكم موحدة للمدراء وأصحاب الأعمال لمتابعة العمليات اليومية وتوزيع المهام بسرعة.",
        priceUsd: 1250,
        originalPriceUsd: 1600,
        featuresEn: [
          "Real-time operational KPI summary cards (Revenue, orders, tasks)",
          "Staff task management board with status tracking",
          "Data filtering, multi-column search & CSV export",
          "Mobile-responsive tablet & desktop layout",
          "Role-based access (Managers vs Operators)",
          "High-speed PostgreSQL database deployed on edge CDN",
          "14 days post-handover warranty & quick tutorial",
        ],
        featuresAr: [
          "كروت مؤشرات أداء لحظية (الإيرادات، الطلبات المنجزة، المهام العالقة)",
          "لوحة إدارة وتوزيع المهام اليومية على الموظفين ومتابعة التنفيذ",
          "فلترة متقدمة وبحث سريع في كافة الجداول مع تصدير بصيغة CSV",
          "تصميم متجاوب وسهل الاستخدام على شاشات الحواسب والأجهزة اللوحية",
          "صلاحيات مستخدمين محددة (مدراء التشغيل مقابل الموظفين الميدانيين)",
          "قاعدة بيانات PostgreSQL عالية السرعة مستضافة على سيرفرات سحابية آمنة",
          "14 يوماً ضمان ودليل فيديو تدريبي لاستخدام لوحة التحكم",
        ],
      },
      {
        id: "dash-scale",
        nameEn: "Custom Business Portal / ERP",
        nameAr: "بوابة تشغيل وإدارة أعمال متكاملة",
        taglineEn: "Full-scale business engine managing appointments, inventory, contracts, and finance.",
        taglineAr: "منظومة تشغيل وإدارة مركزية متكاملة لربط الحجوزات، المخزون، الفواتير، ومتابعة الأرباح لحظياً.",
        priceUsd: 2800,
        originalPriceUsd: 3600,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in Operations Dashboard MVP, plus:",
          "End-to-end inventory tracking & low-stock automated alerts",
          "Client booking / appointment management with automated reminders",
          "Financial tracking (Cash flow, expenses, profitability by department)",
          "Client self-service portal (clients view progress, download files)",
          "Automated PDF report generation scheduled to your email weekly",
          "Interactive data charts (Bar, Line, Donut) with date-range filters",
          "30 days priority warranty & hands-on team training workshop",
        ],
        featuresAr: [
          "كل ما في لوحة التحكم التشغيلية، بالإضافة إلى:",
          "نظام تتبع وإدارة المخزون والتنبيه الآلي عند اقتراب نفاد المنتجات",
          "إدارة الحجوزات والمواعيد وجدول العمليات مع رسائل تذكير آلية",
          "إدارة مالية دقيقة (التدفقات النقدية، المصروفات، والأرباح لكل قسم)",
          "بوابة خدمة ذاتية للعملاء (لمتابعة مراحل مشاريعهم وتحميل ملفاتهم)",
          "توليد تقارير أداء PDF أسبوعية وشهرية ترسل تلقائياً لإيميل الإدارة",
          "رسوم بيانية تفاعلية متطورة للمبيعات مع فلترة حسب النطاق الزمني",
          "30 يوماً ضمان أولوية مع ورشة تدريب تفاعلية لكامل فريق التشغيل",
        ],
      },
      {
        id: "dash-enterprise",
        nameEn: "Multi-Branch Command Center",
        nameAr: "مركز قيادة متكامل للمؤسسات والفروع",
        taglineEn: "High-throughput operational intelligence hub with legacy database bridges and live IoT/POS sync.",
        taglineAr: "مركز قيادة رقمي متقدم يربط الفروع، أجهزة الكاشير (POS)، وقواعد البيانات الداخلية للمؤسسات الكبرى.",
        priceUsd: 6200,
        originalPriceUsd: 7900,
        badgeEn: "Enterprise SLA",
        badgeAr: "عقود المؤسسات",
        featuresEn: [
          "Everything in Custom Business Portal, plus:",
          "Multi-location consolidated reporting & cross-branch transfers",
          "Real-time live POS / warehouse scanner hardware integrations",
          "Custom API connectors to legacy accounting systems & SAP / Oracle",
          "Predictive AI analytics & demand forecasting algorithms",
          "Strict enterprise SSO, IP-whitelisting, and immutable audit logs",
          "Dedicated Systems Engineer & 24/7 uptime monitoring",
          "90 days guaranteed support & executive handover workshop",
        ],
        featuresAr: [
          "كل ما في بوابة التشغيل المتكاملة، بالإضافة إلى:",
          "تقارير موحدة لكافة الفروع مع إدارة مناقلات المخزون والعهد بين المقرات",
          "ربط حي ولحظي مع أجهزة الكاشير (POS) وأجهزة قراءة الباركود بالمستودعات",
          "ربط برمجي مخصص مع قواعد البيانات القديمة وأنظمة SAP / Oracle",
          "خوارزميات ذكاء اصطناعي لتحليل البيانات والتنبؤ بمعدلات الطلب المستقبلية",
          "تسجيل دخول موحد (SSO) وتحديد الآي بي (IP Whitelisting) وسجلات أمان بنكية",
          "مهندس أنظمة مخصص مع مراقبة استمرارية تشغيل على مدار 24/7",
          "90 يوماً عقد دعم وضمان موثق مع ورشة عمل تنفيذية للإدارة العليا",
        ],
      },
    ],
  },
  {
    id: "workflow-automation",
    labelEn: "Workflow Automation & Integrations",
    labelAr: "الأتمتة والربط التقني بين الأنظمة",
    descriptionEn: "Eliminate repetitive manual tasks by connecting WhatsApp, CRM, forms, Google Sheets, and accounting software.",
    descriptionAr: "التخلص من الإدخال اليدوي المكرر عبر ربط وتكامل واتساب، المحاسبة، النماذج، وجداول جوجل تلقائياً.",
    isMonthlyRetainer: false,
    tiers: [
      {
        id: "auto-starter",
        nameEn: "Essential Automations",
        nameAr: "حزمة الأتمتة الأساسية",
        taglineEn: "Automate your primary business friction points and eliminate repetitive daily data entry.",
        taglineAr: "أتمتة نقاط الاختناق اليدوية الأساسية وربط النماذج والإشعارات تلقائياً لتوفير ساعات العمل.",
        priceUsd: 450,
        originalPriceUsd: 600,
        featuresEn: [
          "Setup of up to 4 core automated business workflows",
          "Instant lead notification from website forms to WhatsApp / Telegram",
          "Two-way Google Sheets / Notion automated data logging",
          "Automated customer confirmation email & PDF receipt generation",
          "Error handling & automated failure retry alerts",
          "Built on Make.com / n8n / Zapier infrastructure",
          "14 days warranty & operational walkthrough",
        ],
        featuresAr: [
          "بناء وإطلاق ما يصل إلى 4 مسارات أتمتة تشغيلية أساسية",
          "إشعار فوري لمدير المبيعات عبر واتساب أو تيليجرام فور وصول عميل جديد",
          "تسجيل ومزامنة البيانات تلقائياً في جداول Google Sheets أو Notion",
          "إرسال إيميل تأكيد وفاتورة رقمية PDF للعميل فور إتمام الدفع أو الحجز",
          "نظام تنبيه ذكي وإعادة محاولة تلقائية في حال حدوث أي خطأ في الربط",
          "مبني على منصات أتمتة معتمدة واحترافية (Make.com أو n8n أو Zapier)",
          "14 يوماً ضمان حل المشاكل ودليل استخدام مفصل للمسارات",
        ],
      },
      {
        id: "auto-growth",
        nameEn: "Automated Operations Engine",
        nameAr: "محرك أتمتة العمليات والنمو",
        taglineEn: "End-to-end operational automation orchestrating CRM, WhatsApp bots, billing, and team tasks.",
        taglineAr: "محرك أتمتة شامل يدير العملاء، ردود واتساب التفاعلية، إصدار الفواتير، وإسناد المهام للموظفين.",
        priceUsd: 1150,
        originalPriceUsd: 1500,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in Essential Automations, plus:",
          "Up to 12 multi-step complex operational workflows",
          "Official WhatsApp Business Cloud API interactive menu / chat flows",
          "Automated invoice & payment sync with accounting software (Xero, QuickBooks, Zoho)",
          "Smart lead routing based on location, budget, or service type",
          "Automated review collection & NPS feedback requests after service completion",
          "Self-hosted n8n instance setup (Zero monthly platform fees)",
          "30 days priority warranty & live troubleshooting support",
        ],
        featuresAr: [
          "كل ما في حزمة الأتمتة الأساسية، بالإضافة إلى:",
          "بناء ما يصل إلى 12 مسار أتمتة معقد متعدد المراحل والخطوات",
          "شات بوت وقوائم تفاعلية رسمية عبر WhatsApp Business Cloud API",
          "مزامنة الفواتير والمقبوضات تلقائياً مع البرامج المحاسبية (قيود، زوهو، Xero)",
          "توجيه ذكي للعملاء للموظف المختص بناءً على المدينة، الميزانية، أو نوع الخدمة",
          "طلب تقييمات العملاء وقياس رضاهم تلقائياً فور اكتمال الخدمة أو الشراء",
          "تنصيب بيئة n8n خاصة على سيرفرك (لتوفير التكاليف الشهرية لـ Zapier)",
          "30 يوماً ضمان أولوية ودعم فني ومعالجة أي استثناءات لحظياً",
        ],
      },
      {
        id: "auto-enterprise",
        nameEn: "Custom Microservices & Webhooks",
        nameAr: "تكامل الأنظمة والبنية البرمجية المخصصة",
        taglineEn: "High-volume custom API pipelines, enterprise ERP sync, and robust queue processing.",
        taglineAr: "خطوط أنابيب بيانات برمجية مخصصة، ربط عميق مع أنظمة ERP، ومعالجة ملايين الأحداث بلا تأخير.",
        priceUsd: 2600,
        originalPriceUsd: 3400,
        badgeEn: "Enterprise Core",
        badgeAr: "بنية المؤسسات",
        featuresEn: [
          "Everything in Automated Operations Engine, plus:",
          "Custom Node.js / Python serverless microservice pipelines",
          "Bi-directional sync with enterprise legacy databases & proprietary APIs",
          "Message queue architecture (RabbitMQ / Redis / AWS SQS) for high reliability",
          "Custom webhook receiver with HMAC signature validation & security audit",
          "Real-time automated error recovery, alerting, & failover mechanisms",
          "Dedicated Senior DevOps Engineer & architecture blueprint",
          "90 days guaranteed SLA & written technical handover documentation",
        ],
        featuresAr: [
          "كل ما في محرك أتمتة العمليات، بالإضافة إلى:",
          "برمجة مسارات وخدمات مصغرة مخصصة بلغات Node.js أو Python",
          "ربط ثنائي الاتجاه مع قواعد البيانات الداخلية وأنظمة الشركات المغلقة",
          "طوابير معالجة رسائل متقدمة (Redis / RabbitMQ / AWS SQS) لمنع ضياع أي طلب",
          "استقبال وتأمين Webhooks بتشفير عالي وفحص أمان دقيق للبيانات",
          "منظومة تعافي آلي من الأخطاء وتبديل فوري للسيرفر الاحتياطي عند الطوارئ",
          "مهندس DevOps أول مخصص للمشروع مع مخطط معماري كامل للأنظمة",
          "90 يوماً عقد ضمان موثق مع التزامات أداء ودليل تشغيلي متكامل",
        ],
      },
    ],
  },
];

// ── MARKETING & GROWTH SYSTEMS TRACKS ──
const MARKETING_GROWTH_TRACKS: PricingTrack[] = [
  {
    id: "paid-ads",
    labelEn: "Paid Ads & Performance Media",
    labelAr: "الإعلانات الممولة وإدارة الحملات",
    descriptionEn: "Multi-platform paid advertising across Meta, Google, TikTok, Snapchat, and LinkedIn with CAPI & GA4 conversion tracking.",
    descriptionAr: "إدارة وتوسيع الحملات الإعلانية الممولة على ميتا وجوجل وتيك توك وسناب شات مع ربط تتبع التحويلات المتقدم CAPI و GA4.",
    isMonthlyRetainer: false,
    tiers: [
      {
        id: "ads-launch",
        nameEn: "Multi-Platform Campaign Launch",
        nameAr: "إطلاق الحملات وتأسيس التتبع",
        taglineEn: "Comprehensive ad account setup, pixel & GTM integration, and first validated ad sprint.",
        taglineAr: "إعداد وتأسيس الحسابات الإعلانية، ربط البكسل و GTM، وإطلاق الحملات الأولى لاختبار السوق.",
        priceUsd: 550,
        originalPriceUsd: 750,
        featuresEn: [
          "Complete ad account structure & audit (Meta Ads + Google Ads)",
          "Google Tag Manager (GTM) & standard Pixel integration",
          "Custom conversion event setup (Leads, Purchases, WhatsApp clicks)",
          "Audience segmentation (Demographic, Interests, Custom Audiences)",
          "Ad creative copywriting & 4 high-converting visual assets",
          "14 days active campaign testing, A/B ad copy calibration",
          "Bi-weekly live performance report with clear cost-per-lead",
        ],
        featuresAr: [
          "هيكلة وفحص الحسابات الإعلانية بالكامل (إعلانات Meta + Google Ads)",
          "تثبيت وبرمجة Google Tag Manager وربط البكسل الرسمي",
          "إعداد أحداث التحويل المخصصة (شراء، عميل محتمل، نقرات واتساب)",
          "بناء شرائح الجماهير المستهدفة بدقة (اهتمامات، مواقع، جماهير مخصصة)",
          "كتابة نصوص إعلانية جذابة وتصميم 4 إعلانات احترافية عالية التحويل",
          "14 يوماً إدارة وإطلاق واختبار A/B لمحتوى الإعلانات والجمهور",
          "تقرير أداء دوري يوضح بدقة تكلفة العميل المحتمل والعائد المحقق",
        ],
      },
      {
        id: "ads-scaling",
        nameEn: "Performance Scaling & CAPI/GA4 Engine",
        nameAr: "التوسع الإعلاني ومحرك التحليلات و CAPI",
        taglineEn: "Cross-platform aggressive ad scaling backed by server-side Meta Conversions API and deep GA4 telemetry.",
        taglineAr: "توسيع المبيعات على كافة المنصات مع ربط سيرفر CAPI المتقدم وتتبع GA4 الدقيق لتجاوز حظر ملفات الكوكيز.",
        priceUsd: 1350,
        originalPriceUsd: 1750,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in Campaign Launch, plus:",
          "Omnichannel media buying: Meta (FB/IG), Google (Search + PMax), TikTok & Snapchat",
          "Server-side Meta Conversions API (CAPI) & TikTok Events API integration",
          "Deep Google Analytics 4 (GA4) e-commerce & lead funnel attribution",
          "Continuous creative A/B testing: hooks, headlines, video cuts, and UGC",
          "Dynamic retargeting funnels & Lookalike audience scaling",
          "Live Looker Studio dashboard with real-time ROAS & CPA metrics",
          "30 days dedicated media buyer management with daily budget optimization",
        ],
        featuresAr: [
          "كل ما في إطلاق الحملات وتأسيس التتبع، بالإضافة إلى:",
          "إدارة ميديا بايينج متقدمة: ميتا، جوجل (بحث و Performance Max)، تيك توك، وسناب",
          "ربط سيرفر Meta Conversions API (CAPI) و TikTok Events API لتتبع 100% من التحويلات",
          "إعداد شامل ومتقدم لـ Google Analytics 4 (GA4) مع تتبع كامل لمراحل الشراء ومسار العميل",
          "اختبار A/B مستمر للأفكار الإعلانية، الخطافات البصرية (Hooks)، ونصوص الإعلانات",
          "بناء مسارات إعادة الاستهداف الذكية (Retargeting) والجماهير المشابهة (Lookalikes)",
          "لوحة تحكم حية عبر Looker Studio لمراقبة العائد على الإنفاق (ROAS) وتكلفة الشراء لحظياً",
          "30 يوماً إدارة مكثفة من ميديا باير أول مخصص مع تحسين يومي للميزانيات",
        ],
      },
      {
        id: "ads-enterprise",
        nameEn: "Omnichannel High-Budget Media Buying",
        nameAr: "إدارة الميزانيات الكبرى والانتشار الشامل",
        taglineEn: "High-volume media buying with automated rule bidding, offline CRM conversion sync, and rapid creative sprints.",
        taglineAr: "إدارة ميزانيات إعلانية ضخمة عبر كافة المنصات مع ربط مبيعات CRM ونظام مزايدة آلي ورقابة صارمة.",
        priceUsd: 2900,
        originalPriceUsd: 3800,
        badgeEn: "Enterprise Media",
        badgeAr: "الميزانيات الكبرى",
        featuresEn: [
          "Everything in Performance Scaling Engine, plus:",
          "Full 6-platform coverage (Meta, Google, TikTok, Snapchat, LinkedIn, YouTube)",
          "Offline conversion import syncing closed CRM deals and POS sales back to ad algorithms",
          "Rapid creative production: 12 monthly video ads, motion graphics & copy variants",
          "Algorithmic bid management, dayparting, and automated stop-loss rules",
          "Ad fraud prevention and strict brand safety filtering",
          "Senior Growth Director attending weekly executive strategy meetings",
          "60 days dedicated campaign governance with guaranteed SLA",
        ],
        featuresAr: [
          "كل ما في التوسع الإعلاني ومحرك التحليلات، بالإضافة إلى:",
          "إدارة شاملة لـ 6 منصات (ميتا، جوجل، تيك توك، سناب شات، لينكد إن، ويوتيوب)",
          "ربط ومزامنة مبيعات CRM والكاشير مع خوارزميات المنصات (Offline Conversion Tracking)",
          "إنتاج إعلاني سريع: 12 إعلاناً مرئياً شهرياً وفيديوهات موشن مع نصوص متعددة الزوايا",
          "قواعد مزايدة برمجية آلية (Automated Rules) لمنع هدر الميزانية وضمان أعلى عائد",
          "فلترة وحماية صارمة من الزيارات الوهمية والنقرات الاحتيالية (Ad Fraud Protection)",
          "مدير نمو وتسويق تنفيذي (Growth Director) يحضر اجتماعات التخطيط الأسبوعية مع إدارتك",
          "60 يوماً حوكمة تسويقية كاملة مع التزامات أداء ومتابعة مستمرة",
        ],
      },
    ],
  },
  {
    id: "seo-geo",
    labelEn: "Certified SEO & Local GEO Dominance",
    labelAr: "السيو والظهور الجغرافي وتصدر محركات البحث",
    descriptionEn: "Certified technical SEO, local Google Maps ranking (GEO), and high-authority search content that drives organic buyer traffic.",
    descriptionAr: "فريق معتمد في السيو التقني وتصدر خرائط جوجل والبحث الجغرافي (GEO) وبناء سلطة موقعك لجلب عملاء جاهزين للشراء مجاناً.",
    isMonthlyRetainer: false,
    tiers: [
      {
        id: "geo-local",
        nameEn: "Local GEO & Google Maps Ranking",
        nameAr: "السيو الجغرافي وتصدر خرائط جوجل",
        taglineEn: "Own your local city and neighborhood search results in Google Maps and local 3-Pack.",
        taglineAr: "تصدر نتائج البحث المحلية في مدينتك وخرائط جوجل ليجدك العملاء القريبون في أول نتيجة فوراً.",
        priceUsd: 450,
        originalPriceUsd: 600,
        featuresEn: [
          "Google Business Profile (GBP) complete setup, verification & audit",
          "Local NAP consistency audit across top 20 business directories",
          "Local geo-targeted services, products, and photo optimization",
          "Automated WhatsApp review generation sequence & Google review QR card",
          "Local competitor radius audit & Geo-grid rank tracking",
          "Monthly local calls, direction requests, and interaction report",
          "14 days local authority boost warranty",
        ],
        featuresAr: [
          "إعداد وتدقيق واعتماد ملفك التجاري على خرائط جوجل (Google Business Profile) بالكامل",
          "توحيد بيانات النشاط والاسم والعنوان ورقم الهاتف (NAP) في أكبر 20 دليلاً محلياً",
          "تهيئة قوائم الخدمات والمنتجات بالكلمات المفتاحية الجغرافية والصور المحسنة",
          "بناء مسار آلي عبر واتساب لجمع تقييمات العملاء الإيجابية على جوجل مع بطاقة QR",
          "فحص تنافسي لنطاق الخريطة ومتابعة ترتيب ظهورك في شبكة البحث الجغرافي (Geo-Grid)",
          "تقرير شهري مفصل بالمكالمات، طلبات الاتجاهات، والزيارات المحققة من الخرائط",
          "14 يوماً ضمان تعزيز الظهور والتواجد الجغرافي الموثق",
        ],
      },
      {
        id: "seo-growth",
        nameEn: "Advanced Technical SEO & Arabic Search Dominance",
        nameAr: "سيو تقني متقدم وتصدر محركات البحث بالعربية",
        taglineEn: "Comprehensive on-page, technical, and content SEO strategy designed to conquer high-intent buyer keywords.",
        taglineAr: "استراتيجية سيو متكاملة تقنياً ومحتوى مدروس لتصدر الكلمات المفتاحية ذات القيمة الشرائية العالية.",
        priceUsd: 1150,
        originalPriceUsd: 1500,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in Local GEO Ranking, plus:",
          "Deep technical SEO audit: crawl errors, indexing, sitemaps, robots.txt, canonicals",
          "Core Web Vitals performance calibration (speed & mobile accessibility)",
          "Schema.org rich snippets markup (LocalBusiness, Organization, FAQ, Service, Product)",
          "Competitor keyword gap analysis & high-intent ranking roadmap",
          "Production of 15 fully-optimized Arabic & English SEO service landing pages / articles",
          "High-quality contextual niche backlink outreach & citation distribution",
          "Weekly Google Search Console monitoring & monthly keyword ranking tracker",
        ],
        featuresAr: [
          "كل ما في السيو الجغرافي وتصدر الخرائط، بالإضافة إلى:",
          "فحص سيو تقني عميق: معالجة أخطاء الأرشفة، خرائط الموقع XML، ملف robots، والروابط الدائمة",
          "تحسين معايير تجربة المستخدم ومؤشرات أداء الويب الأساسية (Core Web Vitals) للجوال",
          "إضافة أكواد البيانات المنظمة (Schema Markup) للظهور بنتائج جوجل المميزة والأسئلة الشائعة",
          "تحليل ثغرات المنافسين وبناء خارطة طريق للكلمات المفتاحية ذات العائد المالي الأعلى",
          "كتابة ونشر 15 مقالة وصفحة خدمة محسنة سيو بالكامل بالعربية والإنجليزية لجلب الزيارات",
          "بناء روابط خلفية قوية (Backlinks) في مواقع موثوقة ذات صلة بمجالك لرفع سلطة الدومين",
          "مراقبة أسبوعية عبر Google Search Console ولوحة متابعة ترتيب الكلمات المفتاحية أولاً بأول",
        ],
      },
      {
        id: "seo-enterprise",
        nameEn: "Enterprise Search Dominance & Digital PR",
        nameAr: "الهيمنة على نتائج البحث والمشاريع الكبرى",
        taglineEn: "Dominant organic search presence for multi-location brands, e-commerce, and high-competition niches.",
        taglineAr: "هيمنة عضوية شاملة للعلامات متعددة الفروع والمتاجر الكبرى والقطاعات التنافسية الشديدة.",
        priceUsd: 2400,
        originalPriceUsd: 3200,
        badgeEn: "Enterprise SEO",
        badgeAr: "سيو المؤسسات",
        featuresEn: [
          "Everything in Advanced Technical SEO, plus:",
          "Multi-location GEO strategy spanning 10+ branches or international country markets",
          "Programmatic SEO architecture for hundreds of dynamic location & category pages",
          "High-tier Digital PR outreach securing press mentions on major news and industry portals",
          "Comprehensive toxic link disavow and historical algorithmic penalty recovery",
          "Internal linking architecture & topical authority clustering for total niche dominance",
          "Dedicated Senior SEO Strategist with direct executive bi-weekly sprint reviews",
          "90 days guaranteed execution milestones and measurable organic traffic growth KPIs",
        ],
        featuresAr: [
          "كل ما في السيو التقني المتقدم، بالإضافة إلى:",
          "استراتيجية جغرافية موسعة تغطي أكثر من 10 فروع أو أسواق دولية متعددة اللغات",
          "هندسة سيو برمجية (Programmatic SEO) لإنشاء مئات الصفحات الديناميكية حسب المدن والمناطق",
          "علاقات عامة رقمية (Digital PR) للحصول على تغطيات ومقالات في كبرى الصحف والمواقع الإخبارية",
          "تنظيف شامل للروابط الضارة والتعافي من أي عقوبات سابقة من خوارزميات جوجل",
          "بنية ربط داخلي عنقودية (Topical Clusters) تجعل موقعك المرجع الأول لمحركات البحث في تخصصك",
          "خبير سيو تنفيذي أول مخصص للمشروع مع اجتماعات تخطيط دورية كل أسبوعين",
          "90 يوماً التزام تنفيذي كامل مع مؤشرات أداء KPI واضحة لقياس نمو الزيارات والمبيعات",
        ],
      },
    ],
  },
  {
    id: "social-growth",
    labelEn: "Social Media Growth & Viral Engagement",
    labelAr: "النمو الرقمي وإدارة وتنشيط المنصات والمجموعات",
    descriptionEn: "Active social media management, organic follower growth, viral reels, community group seeding, and engagement boosting.",
    descriptionAr: "إدارة تفاعلية لحسابات التواصل، نمو حقيقي للمتابعين والتفاعل، فيديوهات ريلز سريعة الانتشار، ونشر في المجموعات المتخصصة.",
    isMonthlyRetainer: true,
    tiers: [
      {
        id: "social-presence",
        nameEn: "Brand Presence & Engagement",
        nameAr: "حضور العلامة وتنشيط التفاعل",
        taglineEn: "Consistent professional brand presence, engaging visual posts, and prompt community moderation.",
        taglineAr: "حضور رقمي احترافي ومنتظم، تصاميم ومنشورات دورية، وتفاعل سريع مع استفسارات العملاء.",
        priceUsd: 390,
        originalPriceUsd: 500,
        featuresEn: [
          "Professional management of 2 core platforms (Instagram & Facebook or TikTok)",
          "12 custom high-quality graphic posts and informative carousels per month",
          "Compelling Arabic caption writing, hashtags research, and brand tone calibration",
          "Active community moderation: daily responses to public comments and direct messages",
          "Basic engagement boosting campaigns to revitalize dormant followers",
          "Monthly growth analytics report detailing reach, engagement, and follower gain",
          "WhatsApp coordination group with your dedicated social media specialist",
        ],
        featuresAr: [
          "إدارة احترافية لمنصتين أساسيتين (انستغرام وفيسبوك أو تيك توك)",
          "12 تصميماً ومنشوراً احترافياً شهرياً يشمل بوستات توعوية وسلايدات كاروسيل",
          "كتابة كابشن عربي متقن ومحدد النبرة مع بحث دقيق عن أنسب الهاشتاجات النشطة",
          "إدارة مجتمع نشطة: الرد اليومي على التعليقات العامة والرسائل المباشرة للعملاء",
          "حملات تنشيط تفاعل شهرية لتحفيز المتابعين وزيادة معدل ظهور الحساب",
          "تقرير أداء شهري يوضح نمو المتابعين، نسبة التفاعل، والوصول المحقق بدقة",
          "مجموعة واتساب مخصصة للتواصل المباشر مع أخصائي السوشيال ميديا الخاص بك",
        ],
      },
      {
        id: "viral-growth",
        nameEn: "Viral Growth, Reels & Group Seeding",
        nameAr: "الانتشار الفيروسي ونمو المتابعين والجروبات",
        taglineEn: "Aggressive organic growth via viral short-form video scripting, Reels/TikToks, and strategic niche community seeding.",
        taglineAr: "نمو فيروسي متسارع عبر صناعة الريلز والتيك توك الجذاب، والنشر التفاعلي داخل المجموعات والجروبات المستهدفة.",
        priceUsd: 850,
        originalPriceUsd: 1100,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in Brand Presence & Engagement, plus:",
          "Management of 3 primary platforms (Meta, TikTok, and LinkedIn or Snapchat)",
          "20 monthly content assets, including 8 high-retention viral Reels / TikTok scripts and edits",
          "Strategic group & community seeding: active sharing and value-posting in targeted Facebook & Telegram groups",
          "Proactive engagement engine: boosting real likes, comments, discussion sparks, and organic shares",
          "Influencer & micro-creator collaboration coordination (up to 3 creator alignments per month)",
          "Fast-response moderation: public comments and DMs answered within 30 minutes during business hours",
          "Bi-weekly content strategy brainstorm and trend hijacking alerts",
        ],
        featuresAr: [
          "كل ما في حضور العلامة وتنشيط التفاعل، بالإضافة إلى:",
          "إدارة متكاملة لـ 3 منصات أساسية (ميتا، تيك توك، ولينكد إن أو سناب شات)",
          "20 قطعة محتوى شهرياً، تتضمن 8 فيديوهات ريلز / تيك توك مكتوبة وممنتجة باحترافية للانتشار الفيروسي",
          "نشر ومشاركة ذكية في مجموعات فيسبوك وتيليجرام المتخصصة لجلب عملاء مستهدفين بلا إعلانات (Group Seeding)",
          "منظومة رفع معدلات التفاعل: تحفيز المشاركات الحقيقية (Shares)، الإعجابات، والنقاشات الإيجابية",
          "تنسيق التعاون مع صناع المحتوى والمؤثرين المتخصصين (Micro-Influencers) حتى 3 صانعي محتوى شهرياً",
          "إدارة محادثات فائقة السرعة: الرد على الرسائل والتعليقات في غضون 30 دقيقة أثناء ساعات العمل",
          "جلسة عصف ذهني كل أسبوعين لاقتناص الترندات وصناعة أفكار محتوى خارج الصندوق",
        ],
      },
      {
        id: "omnichannel-brand",
        nameEn: "360° Omnichannel Community & Brand Power",
        nameAr: "الريادة الرقمية والانتشار الشامل 360°",
        taglineEn: "Full-scale brand dominance, multi-channel viral production, rapid community management, and industry authority.",
        taglineAr: "هيمنة شاملة على كافة منصات التواصل، إنتاج فيديو مكثف، إدارة مجتمع لحظية، وبناء علامة تجارية رائدة.",
        priceUsd: 1850,
        originalPriceUsd: 2400,
        badgeEn: "Full Authority",
        badgeAr: "الريادة الكاملة",
        featuresEn: [
          "Everything in Viral Growth & Group Seeding, plus:",
          "Complete omnichannel coverage across 5 platforms (Meta, TikTok, LinkedIn, YouTube Shorts, X)",
          "35 monthly premium assets (16 viral short-form videos + custom motion graphics + carousels)",
          "Massive community distribution across 50+ niche groups and forums with high-authority seeding",
          "Dedicated Senior Community Manager handling customer inquiries 7 days a week with <15 min response time",
          "Social listening & real-time brand sentiment monitoring across social media and discussion boards",
          "Monthly live podcast or live broadcast production planning and guest outreach assistance",
          "Dedicated Senior Creative Director leading bi-weekly strategy sprints and execution reviews",
        ],
        featuresAr: [
          "كل ما في الانتشار الفيروسي ونمو المجموعات، بالإضافة إلى:",
          "تغطية شاملة لـ 5 منصات (ميتا، تيك توك، لينكد إن، يوتيوب شورتس، ومنصة X)",
          "35 قطعة محتوى متميزة شهرياً (16 فيديو ريلز وشورتس عالي الجودة + موشن جرافيك وتصاميم فاخرة)",
          "نشر موسع في أكثر من 50 مجموعة وجروب متخصص مع مشاركة دراسات حالة ومحتوى يرسخ ريادة نشاطك",
          "مدير مجتمع مخصص متفرغ للرد على العملاء 7 أيام في الأسبوع في أقل من 15 دقيقة لتحويل المتابعين إلى مبيعات",
          "رصد ومراقبة سمعة العلامة التجارية (Social Listening) وتحليل انطباعات الجمهور عنك وعن منافسيك لحظياً",
          "تخطيط وتنسيق حلقات بودكاست أو بثوث مباشرة شهرية لترسيخ مكانة علامتك كمرجع أساسي في السوق",
          "مدير إبداعي تنفيذي يقود جلسات التخطيط الاستراتيجي نصف الشهرية ويشرف على كافة المخرجات",
        ],
      },
    ],
  },
];

// ── HOSTING, CLOUD & VPS SYSTEMS TRACKS (HOSTINGER PARTNER) ──
const HOSTING_CLOUD_TRACKS: PricingTrack[] = [
  {
    id: "web-cloud-hosting",
    labelEn: "Web & Cloud Hosting",
    labelAr: "الاستضافة المشتركة والسحابية",
    descriptionEn: "High-speed NVMe cloud hosting powered by Hostinger enterprise infrastructure, free domain, SSL, and business email.",
    descriptionAr: "استضافة سحابية فائقة السرعة بأقراص NVMe مدعومة ببنية خوادم هوستنجر العالمية، مع دومين وإيميلات وشهادات SSL مجانية.",
    isMonthlyRetainer: true,
    tiers: [
      {
        id: "tier-premium-web",
        nameEn: "Premium Cloud Hosting",
        nameAr: "الاستضافة السحابية بريميوم",
        taglineEn: "Perfect for growing websites and startups with free custom domain and company emails.",
        taglineAr: "الخيار الأمثل للمواقع والشركات الناشئة مع دومين مجاني وإيميلات رسمية باسم شركتك.",
        priceUsd: 2.99,
        originalPriceUsd: 5.99,
        featuresEn: [
          "Host up to 100 websites on one account",
          "Free custom domain for 1 year (.com, .net, .org)",
          "100GB ultra-fast NVMe storage on Hostinger cloud infrastructure",
          "Free professional business email (up to 100 mailboxes)",
          "Unlimited free SSL certificates with auto-renewal",
          "Full cPanel management & Pencil Cloud Panel integration",
          "Zero-downtime automated website & database migration",
          "Powered by AMD EPYC processors with 99.9% uptime SLA",
        ],
        featuresAr: [
          "تشغيل حتى 100 موقع إلكتروني على نفس الحساب",
          "دومين مجاني لمدة سنة كاملة (.com أو .net أو .org)",
          "100GB مساحة تخزين NVMe فائقة السرعة على سيرفرات هوستنجر العالمية",
          "بريد إلكتروني رسمي مجاني للأعمال (حتى 100 صندوق بريد باسم شركتك)",
          "شهادات أمان SSL مجانية غير محدودة مع تجديد تلقائي دائم",
          "لوحة تحكم cPanel كاملة مع تكامل بانل بنسل السحابي (Pencil Cloud Panel)",
          "نقل مجاني سلس لموقعك القديم بدون أي ثانية توقف (Zero-Downtime Migration)",
          "معالجات AMD EPYC الجيل الأحدث مع ضمان تشغيل 99.9% Uptime",
        ],
      },
      {
        id: "tier-business-cloud",
        nameEn: "Business Cloud Hosting",
        nameAr: "الاستضافة السحابية للأعمال والمتاجر",
        taglineEn: "5x performance boost engineered for high-traffic e-commerce, marketing campaigns, and business platforms.",
        taglineAr: "أداء سحابي مضاعف 5x مخصص للمتاجر الإلكترونية وحملات الإعلانات الضخمة ومنصات الأعمال.",
        priceUsd: 7.99,
        originalPriceUsd: 12.99,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in Premium Cloud Hosting, plus:",
          "200GB NVMe storage with 5x isolated cloud compute resources",
          "Unlimited unmetered bandwidth & global traffic capacity",
          "Free Cloudflare Enterprise CDN with edge nodes in Cairo, Dubai & Frankfurt",
          "Free automated daily backups with 1-click instant restore",
          "Free dedicated IP address for pristine email deliverability & security",
          "WordPress & e-commerce staging tool for safe updates before publishing",
          "Priority 24/7 technical support via WhatsApp and live chat in Arabic & English",
        ],
        featuresAr: [
          "كل ما في الاستضافة السحابية بريميوم، بالإضافة إلى:",
          "200GB مساحة تخزين NVMe مع موارد سحابية معزولة مضاعفة 5 مرات",
          "ترافيك وحركة مرور غير محدودة (Unlimited Bandwidth) لكافة الزوار",
          "شبكة توزيع سحابية CDN مجانية مع خوادم محلية في القاهرة ودبي وفرانكفورت",
          "نسخ احتياطي يومي تلقائي مجاني مع إمكانية الاسترجاع الفوري بنقرة واحدة",
          "عنوان IP مخصص مجاني (Dedicated IP) لتحسين سمعة الإيميلات وتفادي الحظر",
          "بيئة تجريبية آمنة (Staging Environment) لاختبار وتحديث الموقع قبل نشره",
          "دعم فني هندسي مباشر بأولوية قصوى على مدار الساعة عبر واتساب بالعربية والإنجليزية",
        ],
      },
      {
        id: "tier-cloud-startup",
        nameEn: "Cloud Startup Dedicated Power",
        nameAr: "سحابة الشركات الكبرى والعمليات المكثفة",
        taglineEn: "Dedicated cloud server resources with the simplicity of managed cPanel & Hostinger reliability.",
        taglineAr: "سيرفر سحابي بموارد مخصصة بالكامل تضاهي السيرفرات الخاصة بدون تعقيدات الإدارة التقنية.",
        priceUsd: 19.99,
        originalPriceUsd: 29.99,
        badgeEn: "Dedicated Power",
        badgeAr: "موارد مخصصة",
        featuresEn: [
          "Everything in Business Cloud Hosting, plus:",
          "Up to 300 websites with 300GB NVMe storage",
          "2 dedicated CPU cores + 3GB isolated RAM with zero neighbor contention",
          "cPanel + WHM reseller management screens for managing sub-accounts",
          "High-performance Redis object cache for WooCommerce & Magento speed",
          "Advanced DDoS mitigation absorbing attacks up to 3.2 Tbps",
          "99.99% enterprise uptime SLA contract guarantee",
          "Dedicated Senior Cloud Engineer assigned to your account with proactive health monitoring",
        ],
        featuresAr: [
          "كل ما في استضافة الأعمال السحابية، بالإضافة إلى:",
          "تشغيل حتى 300 موقع إلكتروني مع 300GB مساحة تخزين NVMe",
          "2 أنوية معالجة مخصصة بالكامل (Dedicated Cores) مع 3GB RAM معزولة 100%",
          "شاشات تحكم cPanel و WHM كاملة لإدارة حسابات فرعية للعملاء وإعادة البيع",
          "نظام كاش متطور (Redis Object Cache) لتسريع المتاجر الكبرى والووكومرس",
          "منظومة حماية متقدمة ضد هجمات حجب الخدمة (DDoS Mitigation حتى 3.2 Tbps)",
          "عقد ضمان استمرارية تشغيل بنسبة 99.99% Uptime معتمد رسمياً",
          "مهندس سحابي أول مخصص لمشروعك ومراقبة استباقية للأداء على مدار الساعة",
        ],
      },
    ],
  },
  {
    id: "vps-cloud-compute",
    labelEn: "VPS & Cloud Compute",
    labelAr: "سيرفرات VPS والديسكتوب الرسومي",
    descriptionEn: "High-performance KVM Linux VPS and Windows Remote Desktop (RDP) servers with dedicated IPv4 and full root access.",
    descriptionAr: "سيرفرات KVM لينكس وسيرفرات ديسكتوب رسومي (RDP) فائقة السرعة مع وصول كامل للجذر وعنوان IPv4 مخصص.",
    isMonthlyRetainer: true,
    tiers: [
      {
        id: "tier-kvm2",
        nameEn: "KVM 2 Cloud Linux VPS",
        nameAr: "سيرفر لينكس السحابي KVM 2",
        taglineEn: "Pure KVM virtualization with full root access, NVMe storage, and dedicated IPv4 address.",
        taglineAr: "سيرفر افتراضي فائق السرعة مع وصول كامل للجذر (Full Root Access) وتخزين NVMe.",
        priceUsd: 6.99,
        originalPriceUsd: 10.99,
        featuresEn: [
          "2 vCPU Cores (AMD EPYC high-frequency processors)",
          "4GB RAM + 50GB ultra-fast NVMe disk space",
          "4TB high-speed monthly bandwidth with 300Mb/s network port",
          "Full Root access with dedicated IPv4 + IPv6 addresses",
          "1-click OS install (Ubuntu, Debian, AlmaLinux, Rocky Linux)",
          "Pencil Cloud Panel for instant reboots, OS reinstall & live resource tracking",
          "Docker, Node.js, Python, and microservices ready",
          "Automated weekly backups & instant snapshot creation",
        ],
        featuresAr: [
          "2 أنوية معالجة vCPU Cores (معالجات AMD EPYC عالية التردد)",
          "4GB ذاكرة عشوائية RAM مع 50GB مساحة تخزين NVMe سحابية",
          "4TB ترافيك ونطاق ترددي شهري مع منفذ شبكة 300Mb/s",
          "وصول كامل للجذر (Full Root Access) مع عنوان IPv4 مخصص و IPv6",
          "تثبيت فوري بنقرة واحدة لجميع توزيعات لينكس (Ubuntu, Debian, AlmaLinux)",
          "لوحة بنسل السحابية لإعادة التشغيل وإعادة التنصيب ومراقبة الموارد لحظياً",
          "جاهز فوراً لتشغيل Docker وحاويات Node.js و Python وقواعد البيانات",
          "نسخ احتياطي أسبوعي آلي مع إمكانية أخذ لقطات فورية (Snapshots)",
        ],
      },
      {
        id: "tier-kvm4",
        nameEn: "KVM 4 High-Performance VPS",
        nameAr: "سيرفر الأعمال والتطبيقات KVM 4",
        taglineEn: "Robust compute power for high-demand web applications, databases, and business systems.",
        taglineAr: "الخيار الأمثل لتطبيقات الويب وقواعد البيانات المعقدة والأنظمة التشغيلية الكبرى.",
        priceUsd: 14.99,
        originalPriceUsd: 22.99,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Everything in KVM 2, plus:",
          "4 vCPU Cores + 8GB RAM + 100GB NVMe storage",
          "8TB monthly bandwidth with blisteringly fast 1Gb/s network port",
          "Optional 1-click cPanel, Plesk, CyberPanel, or RunCloud control panel",
          "Full support for high-concurrency PostgreSQL, MongoDB, and Redis clusters",
          "Cloud firewall with custom rule management & IP whitelisting",
          "Real-time resource alerting (CPU, RAM, Disk) sent straight to your email/phone",
          "Free initial server setup and hardening assistance from our senior engineers",
        ],
        featuresAr: [
          "كل ما في سيرفر KVM 2، بالإضافة إلى:",
          "4 أنوية معالجة vCPU Cores مع 8GB RAM و 100GB مساحة تخزين NVMe",
          "8TB ترافيك ونطاق ترددي شهري مع منفذ شبكة فائق السرعة 1Gb/s",
          "خيار تثبيت واجهات تحكم cPanel أو Plesk أو CyberPanel أو RunCloud",
          "دعم كامل لتشغيل قواعد بيانات PostgreSQL و MongoDB و Redis ذات الضغط العالي",
          "جدار حماية سحابي ذكي مع تخصيص قواعد الأمان والقوائم البيضاء للـ IP",
          "تنبيهات فورية عند ارتفاع استهلاك المعالج أو الذاكرة لحماية استقرار الخدمة",
          "مساعدة هندسية مجانية في ضبط وتأمين السيرفر في البداية من فريقنا التقني",
        ],
      },
      {
        id: "tier-rdp-desktop",
        nameEn: "Windows & GUI Remote Desktop (RDP)",
        nameAr: "سيرفر ديسكتوب رسومي RDP / موارد قصوى",
        taglineEn: "Full graphical desktop remote server with lightning-fast RDP access for 24/7 continuous operations.",
        taglineAr: "سيرفر ديسكتوب رسومي متكامل للعمل عن بعد مع اتصال RDP فائق السرعة وتشغيل متواصل 24/7.",
        priceUsd: 29.99,
        originalPriceUsd: 44.99,
        badgeEn: "Ultimate Desktop",
        badgeAr: "ديسكتوب متكامل",
        featuresEn: [
          "6 vCPU Cores + 16GB RAM + 200GB ultra-fast NVMe storage",
          "Licensed Windows Server or Linux with full Graphical User Interface (GUI)",
          "Instant Remote Desktop Protocol (RDP) access with ultra-low latency",
          "Optimized for 24/7 algorithmic trading bots, automated scrapers, and desktop suites",
          "Massive internal data-center network speed exceeding 10Gb/s",
          "Run intensive unattended workflows continuously without keeping personal PC on",
          "Automated snapshot backups & hardware failover protection",
          "Dedicated engineering support with 99.99% uptime guarantee",
        ],
        featuresAr: [
          "6 أنوية معالجة vCPU Cores مع 16GB RAM و 200GB مساحة NVMe فائقة السرعة",
          "نظام Windows Server مرخص أو لينكس مع واجهة سطح مكتب رسومية كاملة (GUI Desktop)",
          "اتصال فوري عبر بروتوكول Remote Desktop (RDP) باستجابة فائقة السرعة وبلا أي تقطيع",
          "مثالي لتشغيل روبوتات التداول الآلي، برامج الأتمتة، وأدوات سطح المكتب المعقدة 24/7",
          "سرعة إنترنت داخلية خارقة تتجاوز 10Gb/s داخل مراكز بيانات هوستنجر",
          "استمرار تشغيل برامجك ومهامك دون انقطاع حتى لو أغلقت جهاز الكمبيوتر الشخصي",
          "نسخ احتياطي فوري وميزة استبدال العتاد الآلي عند أي خلل فني",
          "دعم هندسي متخصص وضمان تشغيل رسمي معتمد بنسبة 99.99% Uptime",
        ],
      },
    ],
  },
  {
    id: "domains-migration",
    labelEn: "Domains, Email & Migration Hub",
    labelAr: "الدومينات والإيميلات والنقل المدار",
    descriptionEn: "Zero-downtime website and email migration, enterprise business email suites, and 24/7 managed cloud operations.",
    descriptionAr: "نقل المواقع والإيميلات بدون ثانية توقف، منظومة البريد الرسمي للشركات، وإدارة هندسية سحابية شاملة 24/7.",
    isMonthlyRetainer: false,
    tiers: [
      {
        id: "tier-migration",
        nameEn: "Zero-Downtime Site Migration",
        nameAr: "نقل المواقع والدومينات المجاني المضمون",
        taglineEn: "Seamless end-to-end migration of files, databases, and mailboxes from any previous host with 0s downtime.",
        taglineAr: "نقل شامل وسلس لملفات موقعك وقواعد البيانات والإيميلات من أي استضافة قديمة دون أي توقف.",
        priceUsd: 49,
        originalPriceUsd: 99,
        featuresEn: [
          "Full transfer of website files, databases, and email mailboxes",
          "Guaranteed 100% continuous uptime with zero interruption for visitors",
          "Complete malware scan and script clean-up during the transfer",
          "DNS routing setup with Cloudflare Anycast for global speed",
          "Automated SSL security certificate deployment across all pages",
          "14-day parachute grace period keeping old host active until your sign-off",
          "Free of charge when subscribing to any annual hosting or VPS plan",
        ],
        featuresAr: [
          "نقل كامل لملفات الموقع وقواعد البيانات وصناديق البريد الإلكتروني",
          "ضمان استمرارية عمل الموقع 100% بدون دقيقة توقف واحدة للزوار (Zero Downtime)",
          "فحص شامل وتنظيف ملفات الموقع من أي برمجيات ضارة أو ملفات خبيثة سابقة",
          "ضبط وتوجيه سجلات الـ DNS على شبكة Cloudflare Anycast للسرعة القصوى",
          "تثبيت وتفعيل شهادات الأمان SSL لكافة الصفحات والنطاقات الفرعية",
          "فترة أمان 14 يوماً مع بقاء الاستضافة القديمة كاحتياط حتى اعتمادك التام",
          "مجاني بالكامل بدون أي رسوم عند الاشتراك السنوي في أي باقة هوستنج أو VPS",
        ],
      },
      {
        id: "tier-email-suite",
        nameEn: "Corporate Business Email & Domain Hub",
        nameAr: "منظومة البريد الرسمي والدومينات للشركات",
        taglineEn: "Custom domain registration, spam-proof enterprise business email accounts, and mobile setup.",
        taglineAr: "حجز الدومين وبناء بريد إلكتروني رسمي باسم شركتك محمي 100% من السبام مع ربط هواتف الموظفين.",
        priceUsd: 140,
        originalPriceUsd: 190,
        popular: true,
        badgeEn: "Most Popular",
        badgeAr: "الأكثر طلباً",
        featuresEn: [
          "Official custom domain registration (.com, .net, .sa, or .eg) for 1 year",
          "Setup of unlimited branded email mailboxes (name@yourcompany.com)",
          "Strict DNS authentication protocols (SPF, DKIM, DMARC) preventing spam placement",
          "Seamless synchronization with Outlook, Apple Mail, and Gmail on all team devices",
          "Modern fast Webmail interface with calendar, contacts, and cloud storage",
          "Central admin dashboard to add, suspend, or reset employee emails in 1 click",
          "30 days priority technical support & email migration assistance",
        ],
        featuresAr: [
          "حجز وتسجيل النطاق الرسمي (.com أو .net أو .sa أو .eg) لمدة عام كامل",
          "إنشاء حسابات بريد إلكتروني رسمية غير محدودة باسم شركتك (name@yourcompany.com)",
          "تفعيل بروتوكولات الأمان الصارمة (SPF, DKIM, DMARC) لمنع وصول رسائلك إلى السبام",
          "مزامنة كاملة مع تطبيقات Outlook و Apple Mail و Gmail على كافة هواتف وأجهزة الفريق",
          "واجهة ويب ميل Webmail عصرية وسريعة مع تقويم وجهات اتصال ومساحة تخزين سحابية",
          "لوحة تحكم إدارية مركزية لإضافة وحذف وتعديل إيميلات الموظفين بنقرة واحدة",
          "30 يوماً دعم فني واستشارات إعداد الهوية البريدية ونقل الرسائل القديمة",
        ],
      },
      {
        id: "tier-managed-cloud",
        nameEn: "Dedicated Managed Cloud Operations",
        nameAr: "إدارة سحابية شاملة ومراقبة المؤسسات",
        taglineEn: "Hands-off 24/7 senior DevOps management, proactive security patching, and disaster recovery.",
        taglineAr: "إدارة هندسية كاملة لسيرفراتك وبنيتك السحابية مع التدخل الفوري والمراقبة على مدار الساعة.",
        priceUsd: 390,
        originalPriceUsd: 550,
        badgeEn: "Enterprise Ops",
        badgeAr: "إدارة المؤسسات",
        featuresEn: [
          "Full hands-off management of VPS, cloud clusters, and database infrastructure",
          "24/7 proactive real-time monitoring of CPU, RAM, disk, and response latency",
          "Automated security patch installation and vulnerability hardening within 24 hours",
          "Advanced firewall optimization, bot traffic shielding, and database tuning",
          "Disaster recovery architecture & tested multi-region cloud backup snapshots",
          "Dedicated Senior DevOps Engineer reachable on WhatsApp with <15 min urgent response",
          "Comprehensive monthly health, security, and traffic performance audit report",
        ],
        featuresAr: [
          "إدارة وتأمين سيرفرات الـ VPS والسحابة المتعددة بالكامل نيابة عن فريقك",
          "مراقبة لحظية استباقية 24/7 للأداء والذاكرة واستهلاك السيرفر وسرعة الاستجابة",
          "تثبيت التحديثات الأمنية وسد الثغرات فورياً خلال 24 ساعة من صدورها",
          "ضبط قواعد الجدار الناري المتقدم وحجب هجمات البوتات وتسريع قواعد البيانات",
          "بناء خطط استعادة سحابية كاملة من الكوارث (Disaster Recovery Plan) بنسخ متعددة المراكز",
          "مهندس DevOps أول متاح عبر واتساب للتدخل الفوري خلال 15 دقيقة عند أي طوارئ",
          "تقرير شهري مفصل بالأداء، نسبة التشغيل، التحسينات المطبقة، واستهلاك الموارد",
        ],
      },
    ],
  },
];

// ── GENERIC FALLBACK FOR OTHER SERVICES ──
function getGenericServiceTracks(serviceSlug: string, isRtl: boolean): PricingTrack[] {
  return [
    {
      id: "scope-standard",
      labelEn: "Execution Packages",
      labelAr: "باقات التنفيذ المباشر",
      descriptionEn: "Fixed-price milestone delivery with verified enterprise standards.",
      descriptionAr: "تسليم مرحلي محدد السعر بضمانات تنفيذية وجودة تقنية مضمونة.",
      isMonthlyRetainer: false,
      tiers: [
        {
          id: "essential",
          nameEn: "Essential Tier",
          nameAr: "الباقة الأساسية",
          taglineEn: "Streamlined foundation for fast turnaround and validated launch.",
          taglineAr: "انطلاقة سريعة ومدروسة للمشاريع التي تبحث عن الجاهزية الفورية.",
          priceUsd: 2200,
          featuresEn: [
            "Full discovery and scope specification sign-off",
            "Core feature architecture and implementation",
            "Responsive and mobile-calibrated testing",
            "Staging environment preview and feedback loop",
            "14 days post-handover bug fix warranty",
          ],
          featuresAr: [
            "جلسة استكشاف وتحديد النطاق الفني والتعاقدي",
            "بناء وتنفيذ الميزات الأساسية بأعلى معايير الأداء",
            "اختبار كامل وتوافق تام على كافة شاشات الهواتف",
            "بيئة تجريبية حية للمعاينة وإبداء الملاحظات أولاً بأول",
            "ضمان ودعم فني ومعالجة الملاحظات لمدة 14 يوماً",
          ],
        },
        {
          id: "growth",
          nameEn: "Growth System",
          nameAr: "الباقة الشاملة المتقدمة",
          taglineEn: "Complete production-grade implementation engineered to scale.",
          taglineAr: "تنفيذ هندسي متكامل ومبني للتوسع والنمو بأعلى المعايير.",
          priceUsd: 4800,
          popular: true,
          badgeEn: "Most Popular",
          badgeAr: "الأكثر طلباً",
          featuresEn: [
            "Everything in Essential Tier, plus:",
            "Advanced integrations and custom business logic",
            "End-to-end performance & SEO audit calibration",
            "Custom management dashboard and reporting",
            "30 days post-launch SLA and direct WhatsApp support",
          ],
          featuresAr: [
            "كل ما في الباقة الأساسية، بالإضافة إلى:",
            "تكاملات برمجية متقدمة ومنطق عمل مخصص لمشروعك",
            "معايرة شاملة للسرعة والأمان وتحسين محركات البحث",
            "لوحة تحكم وإدارة مخصصة مع تقارير أداء دورية",
            "ضمان دعم فني SLA مباشر لمدة 30 يوماً عبر واتساب",
          ],
        },
        {
          id: "enterprise",
          nameEn: "Enterprise Solution",
          nameAr: "حلول المؤسسات والتوسع",
          taglineEn: "Mission-critical architecture with bespoke integrations and SLAs.",
          taglineAr: "حلول معمارية مخصصة للشركات الكبرى ذات المتطلبات المعقدة.",
          priceUsd: 9500,
          badgeEn: "Custom Scope",
          badgeAr: "مواصفات خاصة",
          featuresEn: [
            "Everything in Growth System, plus:",
            "Bespoke high-availability architecture & custom APIs",
            "Strict compliance, security, and penetration audits",
            "Dedicated senior engineering and design leads",
            "90 days guaranteed support and milestone SLA backing",
          ],
          featuresAr: [
            "كل ما في الباقة الشاملة، بالإضافة إلى:",
            "بنية برمجية فائقة التوافر وربط برمجي مخصص (Custom APIs)",
            "فحص أمان واختراق صارم ومطابقة أعلى معايير الحماية",
            "فريق هندسي وتصميمي أول مخصص لمشروعك بالكامل",
            "عقود ضمان ودعم فني ممتدة لمدة 90 يوماً مع التزامات SLA",
          ],
        },
      ],
    },
  ];
}

// ── AUTHENTIC PENCIL LOGO WATERMARK FOR POPULAR CARD ──
function PencilWatermarkSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 453 453"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M341.5,24.3c-25.9-9.6-52.8-16-81.1-16l-130.5.2c-66.3,0-117.8,56.1-120.9,121.3l.4,55.8c33.5-55.2,91.3-88.3,156.9-88l90,.7c48.3,1,92.5-11.5,134.3-35.2,0,0,2.5-1.7,6.1-4.1-15.2-14.9-33.8-26.8-55.1-34.7Z" />
      <path d="M441.8,149.3c-.6-3.6-.7-4.4-1.4-7.9-6.5-32.3-21.7-60.6-43.9-82.3-3,2.8-4.1,4-4.1,4-31.8,30.5-76.5,42.3-120,48.7-36,3.7-70,1.9-106.3,2.7-70.2,1.6-132.6,42.5-157.4,107.4l.6,86.7c35.2-47.4,87.7-77.3,147.7-77.8,0,0,106.4,2.3,106.4,2.3,27,.6,55.2-5.2,80.3-14.8,13.3-5.1,26.3-11.1,38.3-18.8s19.6-14.4,29-22.1,22.2-17.3,30.7-28.1Z" />
      <path d="M390.1,200.7c-37.7,27.7-80.4,35.7-125.1,41.6l-102.1,4.7c-72.6,2.8-136.6,53.8-152.7,125.1-5.3,23.4-.3,46.6-1,72.7,36.7-46.5,88.2-78.5,148.3-78.8l99.7-.5c35.7-.2,69.4-9.1,100.5-25.5,70.8-37.3,96.6-112.4,84.5-189.5-21.3,27.5-52.1,50.3-52.1,50.3Z" />
    </svg>
  );
}

interface AnimatedPriceCounterProps {
  usdPrice: number;
  rate: number;
  currency: PricingCurrency;
  isRtl: boolean;
  isOriginal?: boolean;
  className?: string;
}

function AnimatedPriceCounter({
  usdPrice,
  rate,
  currency,
  isRtl,
  isOriginal = false,
  className,
}: AnimatedPriceCounterProps) {
  const target = Math.round(usdPrice * rate);
  const [displayVal, setDisplayVal] = useState(target);
  const [isCounting, setIsCounting] = useState(false);
  const prevTargetRef = useRef(target);

  useEffect(() => {
    const start = prevTargetRef.current;
    const end = target;
    prevTargetRef.current = end;

    if (start === end) {
      setDisplayVal(end);
      return;
    }

    setIsCounting(true);
    const controls = animate(start, end, {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayVal(Math.round(latest));
      },
      onComplete: () => {
        setIsCounting(false);
      },
    });

    return () => controls.stop();
  }, [target]);

  const formattedNum = new Intl.NumberFormat("en-US").format(displayVal);

  let formatted = `$${formattedNum}`;
  if (currency === "USD") {
    formatted = `$${formattedNum}`;
  } else if (currency === "EUR") {
    formatted = `€${formattedNum}`;
  } else if (currency === "GBP") {
    formatted = `£${formattedNum}`;
  } else if (currency === "SAR") {
    formatted = isRtl ? `${formattedNum} ⃁` : `⃁${formattedNum}`;
  } else if (currency === "EGP") {
    formatted = isRtl ? `${formattedNum} ج.م` : `E£${formattedNum}`;
  }

  return (
    <motion.span
      className={cn(
        className,
        isCounting && !isOriginal && "text-[#2057FF]"
      )}
      animate={
        isCounting
          ? {
              scale: isOriginal ? [1, 1.02, 1] : [1, 1.06, 1],
            }
          : { scale: 1 }
      }
      transition={{ duration: 0.35, ease: "easeOut" }}
      dir="ltr"
    >
      {formatted}
    </motion.span>
  );
}

export function ServicePricingMatrix({
  serviceSlug,
  isRtl,
}: {
  serviceSlug: string;
  isRtl: boolean;
}) {
  const tracks =
    serviceSlug === "brand-identity"
      ? BRAND_IDENTITY_TRACKS
      : serviceSlug === "websites-platforms"
      ? WEBSITES_PLATFORMS_TRACKS
      : serviceSlug === "mobile-apps-saas"
      ? MOBILE_APPS_SAAS_TRACKS
      : serviceSlug === "business-systems"
      ? BUSINESS_SYSTEMS_TRACKS
      : serviceSlug === "marketing-growth"
      ? MARKETING_GROWTH_TRACKS
      : serviceSlug === "hosting-cloud"
      ? HOSTING_CLOUD_TRACKS
      : getGenericServiceTracks(serviceSlug, isRtl);
  const [selectedTrackId, setSelectedTrackId] = useState<string>(tracks[0].id);

  useEffect(() => {
    setSelectedTrackId(tracks[0].id);
  }, [serviceSlug]);
  const [currency, setCurrency] = useState<PricingCurrency>("USD");
  const [rates, setRates] = useState<Record<PricingCurrency, number>>({
    USD: 1.0,
    SAR: 3.75,
    EGP: 50.5,
    EUR: 0.92,
    GBP: 0.79,
  });
  const [live, setLive] = useState(false);

  // Fetch live exchange rates
  useEffect(() => {
    let active = true;
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        if (!active || data?.result !== "success" || !data?.rates) return;
        setRates({
          USD: 1.0,
          SAR: Number(data.rates.SAR) || 3.75,
          EGP: Number(data.rates.EGP) || 50.5,
          EUR: Number(data.rates.EUR) || 0.92,
          GBP: Number(data.rates.GBP) || 0.79,
        });
        setLive(true);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const activeTrack = tracks.find((t) => t.id === selectedTrackId) || tracks[0];

  const formatConverted = (usdPrice: number) => {
    const rate = rates[currency] || 1;
    const isDecimal = currency === "USD" && usdPrice % 1 !== 0;
    const amount = isDecimal ? Number((usdPrice * rate).toFixed(2)) : Math.round(usdPrice * rate);
    const formattedNum = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: isDecimal ? 2 : 0,
      maximumFractionDigits: isDecimal ? 2 : 0,
    }).format(amount);

    if (currency === "USD") {
      return `$${formattedNum}`;
    }
    if (currency === "EUR") {
      return `€${formattedNum}`;
    }
    if (currency === "GBP") {
      return `£${formattedNum}`;
    }
    if (currency === "SAR") {
      return isRtl ? `${formattedNum} ⃁` : `⃁${formattedNum}`;
    }
    if (currency === "EGP") {
      return isRtl ? `${formattedNum} ج.م` : `E£${formattedNum}`;
    }
    return `$${formattedNum}`;
  };

  return (
    <section className="relative overflow-hidden border-t border-neutral-200/90 bg-[#FBFBFD] py-20 sm:py-28">
      <div className="container-custom">
        {/* ── HEADER ── */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#2057FF]">
              <Sparkles size={13} />
              <span>{isRtl ? "04 // باقات التسعير والتنفيذ" : "04 // PACKAGES & PRICING"}</span>
            </div>

            <h2 className="mt-4 text-3xl font-normal leading-[1.14] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl">
              {isRtl ? (
                <>
                  باقات تنفيذية مدروسة، <br className="hidden sm:inline" />
                  <span className="font-light italic text-neutral-500">مفصلة حسب حجم مشروعك.</span>
                </>
              ) : (
                <>
                  Tailored packages, <br className="hidden sm:inline" />
                  <span className="font-light italic text-neutral-500">scaled to your ambition.</span>
                </>
              )}
            </h2>

            <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-neutral-600 max-w-2xl mx-auto">
              {isRtl
                ? "اختر مسار التنفيذ الذي يناسب متطلباتك. نطاقات عمل محددة بدقة، بلا تكاليف خفية، مع عقود تنفيذية تضمن تسليم مخرجاتك في موعدها."
                : "Choose your execution track below. Transparent deliverables, predictable investment, and zero mid-project surprises."}
            </p>
          </div>
        </Reveal>

        {/* ── DUAL CONTROL BAR: SWIPING SUB-SERVICE TABS (LEFT) + CURRENCY SWITCHER (RIGHT) ON SAME ROW ── */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-5 w-full">
            {/* The Sliding Pill Tab Switcher (Services - Left) */}
            {tracks.length > 1 && (
              <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-white border border-neutral-200/90 shadow-xs">
                {tracks.map((track) => {
                  const isSelected = selectedTrackId === track.id;
                  return (
                    <button
                      key={track.id}
                      onClick={() => setSelectedTrackId(track.id)}
                      className={cn(
                        "relative rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 select-none cursor-pointer",
                        isSelected ? "text-white" : "text-neutral-600 hover:text-neutral-950"
                      )}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activePricingTrack"
                          className="absolute inset-0 rounded-full bg-[#2057FF] shadow-md shadow-blue-600/30"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10">
                        {isRtl ? track.labelAr : track.labelEn}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Currency Converter Bar (Currencies - Right) */}
            <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white border border-neutral-200/90 shadow-xs">
              <span className="ps-3 text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                {isRtl ? "العملة:" : "Currency:"}
              </span>
              <div className="inline-flex items-center gap-1 p-0.5 rounded-full bg-neutral-100">
                {CURRENCY_CODES.map((c) => {
                  const isCur = currency === c;
                  return (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={cn(
                        "rounded-full px-3 py-1.5 text-xs font-bold transition-all select-none cursor-pointer",
                        isCur
                          ? "bg-white text-neutral-950 shadow-xs"
                          : "text-neutral-600 hover:text-neutral-950"
                      )}
                    >
                      <span dir="ltr">
                        {isRtl ? CURRENCY_META[c].labelAr : CURRENCY_META[c].labelEn}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── 3 PRICING CARDS (MATCHING REFERENCE IMAGE 2 & 3) ── */}
        <div className="mt-12 lg:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrack.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 items-stretch"
            >
              {activeTrack.tiers.map((tier) => {
                const isPopular = tier.popular;
                const isMonthly = tier.isMonthly || activeTrack.isMonthlyRetainer;
                const priceFormatted = formatConverted(tier.priceUsd);

                const waMessage = isRtl
                  ? `مرحباً، أود الاستفسار عن تفاصيل ${activeTrack.labelAr} - ${tier.nameAr} (${priceFormatted}) وكيفية البدء والاشتراك.`
                  : `Hello, I'd like to ask about the details of ${activeTrack.labelEn} - ${tier.nameEn} (${priceFormatted}) and how to get started.`;
                const waLink = `https://wa.me/201003778273?text=${encodeURIComponent(waMessage)}`;

                return (
                  <div
                    key={tier.id}
                    className={cn(
                      "relative flex flex-col pt-3.5 transition-all duration-500",
                      isPopular && "lg:-translate-y-2 hover:-translate-y-3"
                    )}
                  >
                    {/* Top Popular Floating Pill (UNCLIPPED - outside overflow-hidden) */}
                    {isPopular && (
                      <div className="absolute top-0 start-1/2 -translate-x-1/2 rounded-full bg-white border-2 border-blue-400/50 px-4 py-1 text-[11px] font-black text-[#2057FF] shadow-lg uppercase tracking-wider z-30 whitespace-nowrap">
                        {isRtl ? (tier.badgeAr || "الأكثر طلباً") : (tier.badgeEn || "Most Popular")}
                      </div>
                    )}

                    <div
                      className={cn(
                        "group/card relative flex flex-1 flex-col justify-between overflow-hidden rounded-[28px] p-7 sm:p-8 text-start select-none transition-all duration-500",
                        isPopular
                          ? "bg-gradient-to-br from-[#1853EA] via-[#2057FF] to-[#0E3EC8] text-white shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/40 border-2 border-blue-400/40"
                          : "border border-neutral-200/90 bg-white text-neutral-900 shadow-sm hover:shadow-lg hover:border-neutral-300"
                      )}
                    >
                      {/* ── AUTHENTIC PENCIL LOGO WATERMARK (WHITE 20% OPACITY) ── */}
                      {isPopular && (
                        <>
                          {/* Subtle ambient light blur glows */}
                          <div className="pointer-events-none absolute -top-6 -end-36 sm:-end-44 h-68 w-68 rounded-full bg-white/10 blur-2xl transition-transform duration-700 ease-out group-hover/card:scale-125" />
                          <div className="pointer-events-none absolute -bottom-14 -start-14 h-48 w-48 rounded-full bg-black/25 blur-2xl transition-transform duration-700 ease-out group-hover/card:scale-120" />

                          {/* Authentic Pencil Brand Icon (White 20% Opacity) - Shifted further right along edge */}
                          <div className="pointer-events-none absolute -top-4 -end-36 sm:-top-5 sm:-end-44 md:-top-6 md:-end-52 lg:-end-56 h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 select-none z-0 text-white/20 transition-transform duration-700 ease-out group-hover/card:scale-110 group-hover/card:rotate-6 group-hover/card:translate-x-1 group-hover/card:translate-y-1">
                            <PencilWatermarkSvg className="h-full w-full" />
                          </div>
                        </>
                      )}

                    <div className="relative z-10">
                      {/* Tier Name & Custom Badge */}
                      <div className="flex items-center justify-between gap-3">
                        <h3 className={cn("text-xl sm:text-2xl font-black tracking-tight", isPopular ? "text-white" : "text-neutral-950")}>
                          {isRtl ? tier.nameAr : tier.nameEn}
                        </h3>
                        {!isPopular && tier.badgeEn && (
                          <span className="rounded-full bg-neutral-100 border border-neutral-200 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                            {isRtl ? tier.badgeAr : tier.badgeEn}
                          </span>
                        )}
                      </div>

                      {/* Tagline */}
                      <p className={cn("mt-2 text-xs sm:text-sm leading-relaxed min-h-[38px] line-clamp-2", isPopular ? "text-white/85" : "text-neutral-500")}>
                        {isRtl ? tier.taglineAr : tier.taglineEn}
                      </p>

                      {/* Price Display with Animated Counter */}
                      <div className={cn("mt-6 flex flex-col gap-1 border-b pb-6", isPopular ? "border-white/20" : "border-neutral-100")}>
                        <span className={cn("text-[11px] sm:text-xs font-bold uppercase tracking-wider", isPopular ? "text-white/70" : "text-neutral-400")}>
                          {isRtl ? "يبدأ من" : "Starts from"}
                        </span>
                        <div className="flex flex-wrap items-baseline gap-2">
                          <AnimatedPriceCounter
                            usdPrice={tier.priceUsd}
                            rate={rates[currency] || 1}
                            currency={currency}
                            isRtl={isRtl}
                            className={cn(
                              "text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight transition-colors",
                              isPopular ? "text-white" : "text-neutral-950"
                            )}
                          />
                          <span className={cn("text-xs sm:text-sm font-semibold", isPopular ? "text-white/80" : "text-neutral-400")}>
                            {isMonthly ? (isRtl ? "/ شهرياً" : "/ month") : (isRtl ? "/ مشروع" : "/ project")}
                          </span>
                        </div>
                        {tier.originalPriceUsd && (
                          <div dir="ltr" className="-mt-0.5">
                            <AnimatedPriceCounter
                              usdPrice={tier.originalPriceUsd}
                              rate={rates[currency] || 1}
                              currency={currency}
                              isRtl={isRtl}
                              isOriginal
                              className={cn(
                                "text-sm sm:text-base font-bold line-through decoration-2",
                                isPopular ? "text-white/60 decoration-white/70" : "text-neutral-400 decoration-neutral-400/80"
                              )}
                            />
                          </div>
                        )}
                      </div>

                      {/* Call to Action Buttons (Side by Side) */}
                      <div className="mt-6 grid grid-cols-2 gap-2">
                        <PencilButton
                          href={waLink}
                          target="_blank"
                          rel="noreferrer"
                          variant={isPopular ? "white" : "dark"}
                          size="default"
                          fullWidth
                          hoverLabel={isRtl ? "احجز الآن ←" : "Get Started →"}
                          className="px-2 text-[11px] sm:text-xs font-bold shadow-md"
                        >
                          {isRtl ? "احجز الباقة الآن" : "Get started"}
                        </PencilButton>

                        <PencilButton
                          href={waLink}
                          target="_blank"
                          rel="noreferrer"
                          variant="outline"
                          size="default"
                          fullWidth
                          icon={<WhatsAppIcon size={15} />}
                          hoverLabel="WhatsApp →"
                          className={cn(
                            "px-2 text-[11px] sm:text-xs font-bold",
                            isPopular
                              ? "bg-white/10 text-white border-white/25 hover:bg-white/20 hover:text-white"
                              : "bg-white text-neutral-900 border-neutral-300"
                          )}
                        >
                          {isRtl ? "استفسر عبر واتساب" : "Chat on WhatsApp"}
                        </PencilButton>
                      </div>

                      {/* Features List */}
                      <div className="mt-8 pt-2">
                        <p className={cn("text-[11px] font-bold uppercase tracking-wider mb-3", isPopular ? "text-white/80" : "text-neutral-400")}>
                          {isRtl ? "ما تتضمنه الباقة:" : "What's included:"}
                        </p>

                        <ul className="space-y-3">
                          {(isRtl ? tier.featuresAr : tier.featuresEn).map((feat, idx) => (
                            <li key={idx} className={cn("flex items-start gap-2.5 text-xs sm:text-[13px] leading-relaxed", isPopular ? "text-white/95" : "text-neutral-700")}>
                              <div
                                className={cn(
                                  "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                                  isPopular
                                    ? "bg-white/25 text-white shadow-2xs"
                                    : "bg-neutral-100 text-neutral-800"
                                )}
                              >
                                <Check size={11} strokeWidth={3} />
                              </div>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom SLA guarantee footer inside card */}
                    <div className={cn("relative z-10 mt-8 pt-4 border-t text-[11px] font-medium", isPopular ? "border-white/20 text-white/75" : "border-neutral-100 text-neutral-400")}>
                      {isRtl
                        ? "تسليم مرحلي بعقد رسمي وضمانات تسليم واضحة"
                        : "Milestone-backed delivery with written contract"}
                    </div>
                  </div>
                </div>
              );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

