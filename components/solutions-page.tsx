"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Rocket,
  Workflow,
  Sparkles,
  TrendingUp,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Zap,
  PhoneCall,
  Flame,
  HelpCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-context";
import { PencilHero } from "@/components/pencil-ui";
import { EditorialPageHero, StatStrip } from "@/components/editorial";
import { CalendlyCarousel, type CarouselItem } from "@/components/ui/connected-carousel";
import GlassFolder, { type FolderFile } from "@/components/ui/glass-folder-cards";
import { cn } from "@/lib/utils";

interface SolutionSuite {
  id: string;
  badgeEn: string;
  badgeAr: string;
  metricEn: string;
  metricAr: string;
  icon: any;
  image: string;
  video?: string;
  titleEn: string;
  titleAr: string;
  kickerEn: string;
  kickerAr: string;
  hookEn: string;
  hookAr: string;
  descEn: string;
  descAr: string;
  deliverablesEn: string[];
  deliverablesAr: string[];
  featuresEn: { title: string; desc: string }[];
  featuresAr: { title: string; desc: string }[];
  ctaEn: string;
  ctaAr: string;
  href: string;
}

const SOLUTION_SUITES: SolutionSuite[] = [
  {
    id: "market-entry",
    badgeEn: "Turnkey Launch",
    badgeAr: "إطلاق متكامل على المفتاح",
    metricEn: "Ready in 30 Days",
    metricAr: "جاهزية كاملة في 30 يوماً",
    icon: Rocket,
    image: "/hero-section.jpg",
    video: "/signature-capabilities/brand-identity-creative-design.mp4",
    titleEn: "Brand Authority & Full Market Entry",
    titleAr: "منظومة إطلاق العلامات واختراق السوق من الصفر",
    kickerEn: "For New Ventures & Ambitious Rebrands",
    kickerAr: "للمشاريع الجديدة وتجديد العلامات الطموحة",
    hookEn: "Never enter a crowded market with a generic template and fragmented freelance work. Launch with instant corporate authority.",
    hookAr: "لا تدخل سوقاً مزدحماً بقالب جاهز وشغل مشتت بين خمس مستقلين. ادخل السوق بهيبة ومكانة مؤسسية موثوقة من أول دقيقة.",
    descEn: "We don't just sketch a logo and wish you luck. We engineer the complete commercial presence: sharp strategic positioning, comprehensive design system (Brand Book), lightning-fast Next.js launch platform, and the exact creative assets you need to convert your first 100 high-value customers.",
    descAr: "لا نرسم شعاراً ونتمنى لك التوفيق. نبني الحضور التجاري الكامل: استراتيجية تموضع تنافسية، نظام هوية بصرية مؤسسية مع Brand Book تفصيلي يتجاوز 50 صفحة، موقع إطلاق فائق السرعة على Next.js، وكافة المواد الترويجية الجاهزة لاقتناص أول 100 عميل حقيقي.",
    deliverablesEn: [
      "Strategic Market Positioning & Tone of Voice Guide",
      "Full Visual Identity & Corporate Brand Book (50+ Pages)",
      "Sub-second Next.js 15 Launch Web Platform",
      "High-Converting Lead Capture Funnel & Form Workflows",
      "Launch Asset Kit for Social & Paid Campaigns",
    ],
    deliverablesAr: [
      "استراتيجية التموضع وصياغة نبرة العلامة التجارية ورسائلها",
      "كتيب الهوية البصرية ونظام الأصول الشامل (+50 صفحة)",
      "منصة ويب فائقة السرعة مبنية بـ Next.js 15 وتصميم حصري",
      "مسارات ونماذج التقاط العملاء المؤهلين وربطها بإشعارات فورية",
      "حزمة المواد الإعلانية والتصاميم الخاصة بيوم الإطلاق",
    ],
    featuresEn: [
      { title: "Day-One Credibility", desc: "Your brand looks mature, established, and fully funded before competitors even notice." },
      { title: "Zero Tech Debt", desc: "Clean modern code and assets that scale cleanly as your company doubles in size." },
    ],
    featuresAr: [
      { title: "هيبة وثقة فورية", desc: "علامتك تبدو ناضجة وراسخة وموثوقة كأنها في السوق منذ سنوات." },
      { title: "بنية دون أخطاء", desc: "أكواد وتصاميم نظيفة تتوسع معك بسلاسة حين يتضاعف حجم أعمالك." },
    ],
    ctaEn: "Plan Your Launch Solution",
    ctaAr: "خطط لإطلاق مشروعك المتكامل",
    href: "/support/callback?intent=market-entry",
  },
  {
    id: "operations-automation",
    badgeEn: "Operations Engine",
    badgeAr: "أتمتة العمليات والربط",
    metricEn: "60% Overhead Reduction",
    metricAr: "توفير 60% من وقت التشغيل اليدوي",
    icon: Workflow,
    image: "/business-sectors/crm-automation.jpg",
    video: "/signature-capabilities/business-systems-dashboards.mp4",
    titleEn: "Connected Systems & Workflow Automation",
    titleAr: "منظومة الربط التقني وأتمتة مسارات العمليات",
    kickerEn: "For Scaling Companies Losing Time in Manual Hand-offs",
    kickerAr: "للشركات التي تعاني من بطء التنسيق وتكرار الإدخال اليدوي",
    hookEn: "Stop running a multi-million-dollar operation on messy WhatsApp groups, dispersed spreadsheets, and disconnected SaaS apps.",
    hookAr: "أوقف إدارة عمليات بملايين الريالات عبر مجموعات واتساب عشوائية وشيتات إكسل مبعثرة وتطبيقات منفصلة.",
    descEn: "We bridge your lead intake, CRM, invoicing, payment gateways, and client notifications into one unified nervous system. Every customer action triggers the right internal workflow automatically, with zero missed follow-ups and complete operational visibility.",
    descAr: "نربط مسار العملاء الجدد بنظام إدارة العملاء (CRM)، إصدار الفواتير، بوابات الدفع، والإشعارات اللحظية في شبكة عصبية واحدة متصلة. كل حركة من العميل تحرك الإجراء التشغيلي الداخلي فوراً دون تدخل بشري مهدور ودون فقدان أي صفقة.",
    deliverablesEn: [
      "Custom Workflow & Integration Architecture Audit",
      "Unified CRM, Inventory & Billing Sync",
      "Automated WhatsApp & Email Customer Triggers",
      "Staff Role-Based Permissions & Internal Operations Dashboard",
      "24/7 Monitoring & Error Alerting Hooks",
    ],
    deliverablesAr: [
      "تدقيق وهندسة تدفق البيانات بين جميع أنظمتك الحالية",
      "مزامنة فورية بين الـ CRM، المخزون، والفواتير والمحاسبة",
      "أتمتة تنبيهات ورسائل الواتساب والإيميل للعميل وفريق العمل",
      "لوحة تحكم إدارية مخصصة وصلاحيات محكمة حسب الدور الوظيفي",
      "مراقبة تقنية مستمرة ورصد استباقي لأي انقطاع في الربط",
    ],
    featuresEn: [
      { title: "No Human Bottlenecks", desc: "Contracts, invoices, and hand-offs dispatch the second an agreement is logged." },
      { title: "Single Source of Truth", desc: "Executive leadership sees real performance numbers without asking five managers." },
    ],
    featuresAr: [
      { title: "إلغاء عنق الزجاجة البشري", desc: "العقود والفواتير وإشعارات المتابعة تصدر لحظياً بمجرد إغلاق الاتفاق." },
      { title: "رؤية رقمية موحدة", desc: "الإدارة التنفيذية ترى أرقام الأداء الدقيقة دون الحاجة لسؤال خمسة مدراء." },
    ],
    ctaEn: "Automate Your Workflows",
    ctaAr: "أتمت منظومة عملياتك الآن",
    href: "/support/callback?intent=operations",
  },
  {
    id: "digital-commerce",
    badgeEn: "Transaction Infrastructure",
    badgeAr: "بنية التجارة عالية التحويل",
    metricEn: "Sub-Second Checkout",
    metricAr: "إتمام طلب بأقل من ثانية",
    icon: TrendingUp,
    image: "/business-sectors/e-commerce.jpg",
    video: "/signature-capabilities/websites-digital-platforms.mp4",
    titleEn: "High-Volume Digital Commerce & Portals",
    titleAr: "منظومة التجارة الرقمية ومنصات البيع الكبرى",
    kickerEn: "For High-Growth Brands & Subscription Platforms",
    kickerAr: "للمتاجر والعلامات التي تجاوزت حدود القوالب والمنصات الجاهزة",
    hookEn: "When off-the-shelf store templates start choking on traffic spikes and custom checkout logic, you need dedicated enterprise commerce architecture.",
    hookAr: "عندما تعجز المتاجر الجاهزة عن تحمل ضغط الحملات الإعلانية وتفشل في تطبيق منطق البيع المخصص، تحتاج بنية تجارية مصممة للنمو الضخم.",
    descEn: "We construct bespoke, headless-ready shopping and booking experiences engineered for speed and conversion. Optimized checkout funnels, localized payment methods (Mada, Apple Pay, Tabby, Tamara), dynamic pricing engines, and flawless mobile UX that turns visitors into repeat buyers.",
    descAr: "نبني منصات بيع وحجز رقمية مخصصة ومصممة لتعظيم معدلات التحويل (Conversion Rate). تجربة دفع فائقة السلاسة تدعم وسائل الدفع المحلية (مدى، آبل باي، تابي، تمارا)، محركات تسعير وعروض ديناميكية، وتجربة تصفح للهواتف تُشجع على تكرار الشراء.",
    deliverablesEn: [
      "Custom Digital Storefront with Tailored UX/UI",
      "Localized Multi-Currency & Payment Gateway Integration",
      "ERP, Warehouse & Courier Dispatch Connectors",
      "Lightning CDN Caching for Heavy Traffic Campaigns",
      "Advanced Abandoned-Cart & Retention Automation",
    ],
    deliverablesAr: [
      "واجهة متجر مخصصة بتصميم حصري وهندسة تحويل مدروسة",
      "تكامل شامل مع بوابات الدفع المحلية والخليجية ومحافظ التقسيط",
      "ربط مباشر مع أنظمة المخازن وشركات الشحن والتوصيل",
      "بنية كاشينغ سحابية تصمد أمام مئات الآلاف من الزيارات في ثوانٍ",
      "أتمتة ذكية لاسترجاع السلات المتروكة وتشجيع ولاء العملاء",
    ],
    featuresEn: [
      { title: "Campaign Immunity", desc: "Zero crashes during Black Friday, influencer drops, or national day rushes." },
      { title: "Measurable ROI", desc: "Every step of the customer journey is tracked for clear attribution and unit economics." },
    ],
    featuresAr: [
      { title: "صمود أمام أضخم الحملات", desc: "استقرار مطلق في مواسم التخفيضات وإعلانات المشاهير دون توقف دقيقة واحدة." },
      { title: "عائد مالي مقاس", desc: "كل خطوة في مسار العميل مرصودة بدقة لتعرف بالضبط تكلفة وعائد كل عملية بيع." },
    ],
    ctaEn: "Scale Your Commerce Engine",
    ctaAr: "طوّر منصة مبيعاتك الكبرى",
    href: "/support/callback?intent=commerce",
  },
  {
    id: "enterprise-transformation",
    badgeEn: "Managed Partnership",
    badgeAr: "شراكة تحول كاملة",
    metricEn: "Dedicated Product Team",
    metricAr: "فريق منتج متكامل تحت إدارتك",
    icon: Layers,
    image: "/business-sectors/corporate-websites.jpg",
    video: "/signature-capabilities/hosting-cloud-tech-support.mp4",
    titleEn: "Total Digital Overhaul & Ongoing Retainer",
    titleAr: "منظومة التحول المؤسسي الشامل والإدارة المستمرة",
    kickerEn: "For Established Enterprises Modernizing Legacy Systems",
    kickerAr: "للشركات الكبرى والمؤسسات التي تحتاج ذراعاً رقمياً متكاملاً",
    hookEn: "Don't build in-house departments from scratch or juggle five conflicting agencies. Hire a senior multidisciplinary digital department on a predictable SLA.",
    hookAr: "لا تضيع سنة في توظيف فريق داخلي مكلف، ولا تتشتت بين وكالات تسويق وبرمجة متنازعة. احصل على ذراع رقمي وتنفيذي متكامل يضمن استقرارك ونموك.",
    descEn: "We step in as your strategic digital partners: modernizing legacy portals, managing high-availability cloud infrastructure, running continuous UX experimentation, and shipping bi-weekly improvements. You get senior engineering, design, and AI capabilities without the payroll bloat.",
    descAr: "نعمل كشريك استراتيجي طويل الأمد: نطور الأنظمة القديمة، ندير البنية السحابية بأعلى معايير الأمان، ننفذ اختبارات تحسين مستمرة، ونطلق ميزات وتطويرات برمجية كل أسبوعين. خبرة هندسية وتصميمية وذكاء اصطناعي بمستوى عالمي تحت سقف واحد.",
    deliverablesEn: [
      "Dedicated Technical Lead & Product Manager",
      "Guaranteed SLAs (99.9% Uptime & Priority Support)",
      "Continuous Design, Security & Code Enhancements",
      "Executive Monthly Reporting & Tech Roadmap Reviews",
      "Exclusive SuperFeliz Enterprise AI Access & Training",
    ],
    deliverablesAr: [
      "مدير تقني ومنتج مخصص لمتابعة أعمالك يومياً",
      "اتفاقيات مستوى خدمة صارمة (SLA) للاستقرار والاستجابة السريعة",
      "تطوير مستمر للتصاميم والحماية والأداء دون توقف",
      "تقارير تنفيذية شهرية ومراجعة استراتيجية للخطط القادمة",
      "تفعيل وتدريب حصري لنماذج ذكاء SuperFeliz المؤسسية لفريقك",
    ],
    featuresEn: [
      { title: "Predictable Budget", desc: "No scope creep surprise fees. Fixed retainer covering everything your tech needs." },
      { title: "Agility of a Tech Startup", desc: "Your enterprise moves faster than competitors who are slowed down by red tape." },
    ],
    featuresAr: [
      { title: "ميزانية واضحة وثابتة", desc: "اشتراك شهري واضح يغطي كل احتياجاتك التقنية دون تكاليف خفية مفاجئة." },
      { title: "مرونة وسرعة الشركات التقنية", desc: "تتحرك وتطلق ميزات جديدة بسرعة تفوق منافسيك المقيدين بالبيروقراطية." },
    ],
    ctaEn: "Explore Enterprise Retainer",
    ctaAr: "ناقش شراكة التحول المؤسسي",
    href: "/support/callback?intent=enterprise",
  },
];

const FELIZ_FAMILY_MODELS: {
  slug: string;
  nameEn: string;
  nameAr: string;
  taglineEn: string;
  taglineAr: string;
  descEn: string;
  descAr: string;
  formulaEn: string[];
  formulaAr: string[];
  accent: string;
  art: "verdant" | "glacier" | "dusk" | "ember" | "aurora";
  tone: "light" | "dark";
  filesEn: FolderFile[];
  filesAr: FolderFile[];
}[] = [
  {
    slug: "oper",
    nameEn: "Feliz Oper",
    nameAr: "فيليز أوبر",
    taglineEn: "The AI Business Operator",
    taglineAr: "المشغّل التجاري الذكي",
    descEn: "Trained on commercial logic: pricing models, cost structures, margin defense, and operational workflows.",
    descAr: "مدرّب على المنطق التجاري الصارم: تسعير الخدمات، تحليل التكاليف، حماية الهوامش، وهندسة مسارات التشغيل اليومية.",
    formulaEn: ["Audit Costs", "Model Margins", "Streamline"],
    formulaAr: ["تحليل التكاليف", "نمذجة الهوامش", "تبسيط التشغيل"],
    accent: "#10b981",
    art: "verdant",
    tone: "light",
    filesEn: [
      { name: "Pricing Matrix v4", meta: "XLSX · 1.4 MB", art: "verdant" },
      { name: "Margin Defense Plan", meta: "Audit · 12 pp", art: "ember" },
      { name: "Unit Economics Model", meta: "Formulas" },
      { name: "Commercial SOP.pdf", meta: "PDF · 820 KB" },
    ],
    filesAr: [
      { name: "مصفوفة التسعير v4", meta: "XLSX · 1.4 MB", art: "verdant" },
      { name: "خطة حماية الهوامش", meta: "تقرير · 12 صفحة", art: "ember" },
      { name: "اقتصاديات الوحدة", meta: "معادلات مالية" },
      { name: "دليل التشغيل التجاري.pdf", meta: "PDF · 820 KB" },
    ],
  },
  {
    slug: "tech",
    nameEn: "Feliz Tech",
    nameAr: "فيليز تك",
    taglineEn: "The Systems Architect",
    taglineAr: "مهندس البنية والأنظمة",
    descEn: "Maps database schemas, chooses optimal cloud tiers, checks API payloads, and prevents architecture dead-ends.",
    descAr: "يرسم قواعد البيانات، يحدد المواصفات السحابية الأنسب، يفحص تكاملات الـ API، ويمنع القرارات التقنية المكلفة.",
    formulaEn: ["Inspect Schema", "Check Latency", "Verify Security"],
    formulaAr: ["فحص القواعد", "اختبار الاستجابة", "ضمان الأمان"],
    accent: "#06b6d4",
    art: "glacier",
    tone: "light",
    filesEn: [
      { name: "Cloud Topology v4.2", meta: "AWS & GCP · Spec", art: "glacier" },
      { name: "PostgreSQL Schema Map", meta: "28 Tables · DB", art: "aurora" },
      { name: "Latency Benchmark", meta: "p99 < 85ms" },
      { name: "Zero-Downtime Spec.pdf", meta: "SLA · 99.99%" },
    ],
    filesAr: [
      { name: "مخطط البنية السحابية v4.2", meta: "AWS & GCP · مواصفات", art: "glacier" },
      { name: "خريطة قواعد البيانات", meta: "28 جدول · PostgreSQL", art: "aurora" },
      { name: "اختبار سرعة الاستجابة", meta: "p99 < 85ms" },
      { name: "مواصفة الاستقرار الدائم.pdf", meta: "SLA · 99.99%" },
    ],
  },
  {
    slug: "gen",
    nameEn: "Feliz Gen",
    nameAr: "فيليز جن",
    taglineEn: "The Creative & Concept Engine",
    taglineAr: "محرك الأفكار والمحتوى",
    descEn: "Transforms briefs into campaign concepts, user flows, tone frameworks, and starter UI copy ready for production.",
    descAr: "يحوّل الأهداف المجردة إلى أفكار حملات، مسارات مستخدمين مدروسة، ونصوص واجهات مقنعة ترفع المبيعات.",
    formulaEn: ["Analyze Brief", "Craft Positioning", "Iterate Copy"],
    formulaAr: ["قراءة الهدف", "صياغة التموضع", "صقل النصوص"],
    accent: "#8b5cf6",
    art: "dusk",
    tone: "light",
    filesEn: [
      { name: "Campaign Concepts 2025", meta: "Deck · 42 Slides", art: "dusk" },
      { name: "Conversion Copydeck", meta: "Landing Pages · v3", art: "aurora" },
      { name: "Brand Voice Playbook", meta: "Tone & Style" },
      { name: "UI Microcopy Spec.pdf", meta: "Figma Sync" },
    ],
    filesAr: [
      { name: "أفكار الحملة 2025", meta: "عرض · 42 شريحة", art: "dusk" },
      { name: "نصوص التحويل الإعلاني", meta: "صفحات الهبوط · v3", art: "aurora" },
      { name: "دليل النبرة والهوية الصوتية", meta: "قاموس البراند" },
      { name: "نصوص الواجهات الدقيقة.pdf", meta: "مزامنة Figma" },
    ],
  },
  {
    slug: "superfeliz",
    nameEn: "SuperFeliz",
    nameAr: "سوبر فيليز",
    taglineEn: "The Enterprise Orchestrator",
    taglineAr: "الموجه المؤسسي الشامل",
    descEn: "The flagship enterprise intelligence. Connects commercial targets with technical infrastructure and customer conversations.",
    descAr: "الطبقة المركزية الشاملة لذكاء بنسل. يربط الأهداف التجارية مع البنية التقنية ومحادثات العملاء 24/7 دون انقطاع.",
    formulaEn: ["Holistic View", "Autonomous Triggers", "Enterprise Guardrails"],
    formulaAr: ["رؤية شمولية", "أتمتة ذاتية", "حماية وسرية تامة"],
    accent: "#f59e0b",
    art: "ember",
    tone: "dark",
    filesEn: [
      { name: "Enterprise Orchestrator", meta: "Core · Multi-Agent", art: "ember" },
      { name: "24/7 WhatsApp Agent", meta: "Live Channel · Active", art: "verdant" },
      { name: "Private Knowledge Vault", meta: "Vector DB · Isolated" },
      { name: "Human Audit SLA.pdf", meta: "Weekly Protocol" },
    ],
    filesAr: [
      { name: "الموجه المؤسسي الشامل", meta: "نواة · متعدد الوكلاء", art: "ember" },
      { name: "وكيل واتساب 24/7", meta: "قناة مباشرة · نشط", art: "verdant" },
      { name: "مستودع المعرفة المعزول", meta: "Vector DB · آمن", art: "verdant" },
      { name: "بروتوكول التدقيق البشري.pdf", meta: "مراجعة أسبوعية" },
    ],
  },
];

const COMPARISON_ROWS = [
  {
    dimensionEn: "Vendor Accountability",
    dimensionAr: "المسؤولية عن النتيجة النهائية",
    freelancersEn: "Disclaimed ('Not my fault, ask the developer')",
    freelancersAr: "معدومة (كل طرف يلوم الآخر: المصمم يلوم المبرمج)",
    agenciesEn: "Bureaucratic and divided by departments",
    agenciesAr: "بيروقراطية وتتطلب أسابيع من الاجتماعات دون حسم",
    pencilEn: "Single umbrella: design, tech & AI own the outcome",
    pencilAr: "مسؤولية مطلقة بمظلة واحدة: نضمن تشغيل ونجاح المنظومة",
  },
  {
    dimensionEn: "AI Integration (Feliz)",
    dimensionAr: "دمج الذكاء الاصطناعي التشغيلي",
    freelancersEn: "Generic ChatGPT prompts copied from the web",
    freelancersAr: "تعليمات ChatGPT عامة ومكررة تفقد العميل ثقته",
    agenciesEn: "Third-party generic SaaS resold at markup",
    agenciesAr: "إعادة بيع اشتراكات برامج وسيطة بأسعار مضاعفة",
    pencilEn: "Proprietary Feliz AI trained on your actual company data",
    pencilAr: "نماذج Feliz المؤسسية المدربة خصيصاً على بيانات وسياق شركتك",
  },
  {
    dimensionEn: "Code Quality & Modern Stack",
    dimensionAr: "جودة البرمجة والتقنيات المستخدمة",
    freelancersEn: "Vulnerable WordPress templates or outdated code",
    freelancersAr: "قوالب ووردبريس بطيئة ومعرضة للاختراق والأعطال",
    agenciesEn: "Heavy PHP monolithic systems with bloated tech debt",
    agenciesAr: "أنظمة ثقيلة قديمة يصعب تعديلها أو ربطها بالأنظمة الحديثة",
    pencilEn: "Modern Next.js 15, TypeScript, Edge APIs & Zero Tech Debt",
    pencilAr: "أحدث معايير الويب: Next.js 15 وTypeScript وبنية سحابية ذاتية التوسع",
  },
  {
    dimensionEn: "Deployment Speed",
    dimensionAr: "سرعة التسليم والإطلاق في السوق",
    freelancersEn: "Unpredictable; constant delays and ghosting",
    freelancersAr: "غير متوقعة؛ تأخير متكرر وانقطاع عن التواصل",
    agenciesEn: "6-9 months of discovery and change requests",
    agenciesAr: "6 إلى 9 أشهر من الاجتماعات العقيمة والمماطلة",
    pencilEn: "Production-ready launch sprints (30 - 45 days)",
    pencilAr: "سبرنتات تسليم مكثفة وجاهزية إطلاق خلال 30 إلى 45 يوماً",
  },
  {
    dimensionEn: "Security & Data Isolation",
    dimensionAr: "أمان البيانات والخصوصية المؤسسية",
    freelancersEn: "Zero data isolation; files on personal laptops",
    freelancersAr: "شبه معدومة؛ أسرار عملك على أجهزة شخصية غير محمية",
    agenciesEn: "Shared multi-tenant databases with open leaks",
    agenciesAr: "استضافات مشتركة وقواعد بيانات معرضة للتسريب",
    pencilEn: "Enterprise VPC isolation, zero public training, strict NDA",
    pencilAr: "عزل كامل للبيانات، حظر التدريب العام، واتفاقيات سرية صارمة",
  },
];

export function SolutionsPage() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [selectedSuiteId, setSelectedSuiteId] = useState(SOLUTION_SUITES[0].id);
  const [activeFelizModel, setActiveFelizModel] = useState("superfeliz");

  const activeSuite =
    SOLUTION_SUITES.find((s) => s.id === selectedSuiteId) ?? SOLUTION_SUITES[0];
  const activeSuiteIndex = SOLUTION_SUITES.findIndex((s) => s.id === activeSuite.id);

  const selectedModel =
    FELIZ_FAMILY_MODELS.find((m) => m.slug === activeFelizModel) ??
    FELIZ_FAMILY_MODELS[3];

  const deliveryCarouselItems: CarouselItem[] = [
    {
      id: isRtl ? "المرحلة // 01" : "Phase // 01",
      days: isRtl ? "الأسبوع الأول (الأيام 1 - 7)" : "Days 1 - 7",
      stat: isRtl ? "التشخيص وهندسة معمارية المنظومة" : "Diagnostic & Architecture Blueprint",
      quote: isRtl
        ? "دراسة عميقة للهدف التجاري، تحليل البنية الحالية، ورسم المعمارية التقنية والتصميمية المحددة للحل التجاري."
        : "We audit your commercial target, existing tech stack, customer journey, and specify the exact solution blueprint.",
      author: isRtl ? "المرحلة 01" : "Phase 01 Checkpoint",
      role: isRtl ? "وثيقة المعمارية الهندسية وخريطة الطريق" : "Technical & Design Architecture Blueprint",
      defaultImage: "/business-sectors/corporate-websites.jpg",
      selectedImage: "/business-sectors/corporate-websites.jpg",
    },
    {
      id: isRtl ? "المرحلة // 02" : "Phase // 02",
      days: isRtl ? "الأسبوع 2 - 3 (الأيام 8 - 25)" : "Days 8 - 25",
      stat: isRtl ? "سبرنت البناء والتصميم المكثف" : "Rapid Production Sprint",
      quote: isRtl
        ? "التنفيذ المتوازي: صقل الهوية المؤسسية، برمجة المنصة، ربط بوابات الدفع وقواعد البيانات، وتغذية ذكاء فيليز."
        : "Full speed ahead: brand identity, custom Next.js frontend, backend integrations, and Feliz AI knowledge base ingestion.",
      author: isRtl ? "المرحلة 02" : "Phase 02 Checkpoint",
      role: isRtl ? "الأكواد البرمجية الكاملة ونظام الهوية" : "Production Code & Brand Book Handover",
      defaultImage: "/business-sectors/crm-automation.jpg",
      selectedImage: "/business-sectors/crm-automation.jpg",
    },
    {
      id: isRtl ? "المرحلة // 03" : "Phase // 03",
      days: isRtl ? "الأسبوع الرابع (الأيام 26 - 30)" : "Days 26 - 30",
      stat: isRtl ? "اختبار الضغط وتدريب الفريق" : "Stress Testing & Training",
      quote: isRtl
        ? "محاكاة ضغط الزيارات، فحص الأمان والثغرات، اختبار دورات الدفع الحقيقية، وتدريب فريقك على الإدارة."
        : "Simulating campaign traffic, security audits, payment test cycles, and training your team on dashboards.",
      author: isRtl ? "المرحلة 03" : "Phase 03 Checkpoint",
      role: isRtl ? "محضر الفحص والجودة وتدريب الإدارة" : "Security Audits & Executive Handover",
      defaultImage: "/business-sectors/e-commerce.jpg",
      selectedImage: "/business-sectors/e-commerce.jpg",
    },
    {
      id: isRtl ? "المرحلة // 04" : "Phase // 04",
      days: isRtl ? "ما بعد الإطلاق (اليوم 31 فصاعداً)" : "Day 31 Onwards",
      stat: isRtl ? "الإطلاق والإشراف المستمر" : "Launch & Managed SLA",
      quote: isRtl
        ? "تدشين الحل في السوق تحت مراقبة هندسية لصيقة، مع تقارير شهرية وتطوير مستمر يضمن تفوقك المستمر."
        : "Going live under close monitoring. Weekly performance reviews, server management, and continuous optimization.",
      author: isRtl ? "المرحلة 04" : "Phase 04 Checkpoint",
      role: isRtl ? "التزام SLA 99.99% وتطوير دوري مستمر" : "Continuous Optimization & 99.99% SLA",
      defaultImage: "/hero-section.jpg",
      selectedImage: "/hero-section.jpg",
    },
  ];

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#FBFBFB] text-neutral-900 selection:bg-[#2057ff] selection:text-white">
      <Header light />

      {/* ============================================================ */}
      <EditorialPageHero
        isRtl={isRtl}
        cards={[
          { letter: "B", label: isRtl ? "الهوية" : "BRAND", index: "01" },
          { letter: "S", label: isRtl ? "برمجيات" : "SOFTWARE", index: "02" },
          { letter: "A", label: isRtl ? "ذكاء Feliz" : "FELIZ AI", index: "03" },
        ]}
        title={
          isRtl ? (
            <>
              <span className="text-[#2057ff]">منظومات</span> أعمال متكاملة
              <span className="text-[#2057ff]">.</span>
            </>
          ) : (
            <>
              <span className="text-[#2057ff]">INTEGRATED</span> BUSINESS ENGINES
              <span className="text-[#2057ff]">.</span>
            </>
          )
        }
        subtitle={
          isRtl
            ? "حلول تجارية شاملة تدمج الهوية المؤسسية، البرمجيات السحابية، أتمتة العمليات، وذكاء Feliz."
            : "Turnkey enterprise architectures merging brand authority, custom software, automations, and SuperFeliz AI."
        }
        leftMeta={isRtl ? ["الهوية", "البرمجيات", "الأتمتة"] : ["BRAND", "SOFTWARE", "AUTOMATION"]}
        rightMeta={{
          brand: "PENCIL STUDIO",
          line: isRtl ? "الحلول // 2026" : "SOLUTIONS // 2026",
          accent: isRtl ? "مسؤولية كاملة" : "SINGLE OWNERSHIP",
        }}
        ticker={{
          status: isRtl ? "فريق واحد يضمن النتيجة التجارية" : "ONE TEAM OWNS THE RESULT",
          locations: ["CAIRO", "DUBAI", "RIYADH", "BERLIN"],
        }}
      >
        <Link
          href="#solutions-suites"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-xs font-bold text-white transition hover:bg-[#2057ff] sm:text-sm"
        >
          <span>{isRtl ? "استكشف المنظومات الأربعة" : "Explore The 4 Suites"}</span>
          <ArrowUpRight size={14} />
        </Link>
        <Link
          href="/support/callback"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-xs font-bold text-neutral-900 transition hover:bg-neutral-100 sm:text-sm"
        >
          <PhoneCall size={14} />
          <span>{isRtl ? "طلب استشارة تنفيذية" : "Book Consultation"}</span>
        </Link>
      </EditorialPageHero>

      <StatStrip
        items={[
          { value: isRtl ? "+10 سنوات" : "+10 Years", label: isRtl ? "خبرة تنفيذية في السوق العربي" : "Multidisciplinary Experience" },
          { value: isRtl ? "مسؤولية كاملة" : "Single Ownership", label: isRtl ? "فريق واحد يضمن النتيجة التجارية" : "One Team Owns the Result" },
          { value: isRtl ? "99.99% استقرار" : "99.99% Uptime", label: isRtl ? "بنية سحابية ذاتية التوسع والأمان" : "Scalable Cloud Architecture" },
          { value: isRtl ? "ذكاء Feliz المؤسسي" : "Feliz AI Layer", label: isRtl ? "أتمتة العمليات وخدمة العملاء 24/7" : "Enterprise AI & Operations" },
        ]}
      />

      {/* ============================================================ */}
      {/* 2. THE REAL PROBLEM VS THE PENCIL SOLUTION                   */}
      {/* ============================================================ */}
      <section className="border-b border-neutral-200/80 bg-white py-20 md:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                {isRtl ? "لماذا تخسر الشركات في البيئة الرقمية؟" : "The Core Enterprise Problem"}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl">
                {isRtl ? (
                  <>
                    التشتت بين 5 جهات <span className="font-light italic text-neutral-500">يقتل أرباحك ووقتك.</span>
                  </>
                ) : (
                  <>
                    Fragmented vendors <span className="font-light italic text-neutral-500">drain your budget and momentum.</span>
                  </>
                )}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {isRtl
                  ? "معظم الشركات لا تعاني من نقص الأفكار، بل من فوضى الأطراف المنفذة: مصمم لا يفهم البيع، مبرمج يسلّم أكواداً ميتة، مسوق يحرق الميزانية، ومحادثات عملاء تضيع دون متابعة. بنسل تجمع هذه المتاهة في حل مؤسسي متناغم."
                  : "Most organizations don't fail from bad ideas. They fail from execution friction: designers who ignore sales logic, developers building brittle software, marketers burning cash, and customer inquiries slipping away unmonitored."}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* The Disconnect Card */}
            <Reveal delay={0.05}>
              <div className="h-full rounded-3xl border border-red-200/90 bg-red-50/40 p-8 md:p-10 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-100 px-3.5 py-1 text-xs font-bold text-red-700">
                    {isRtl ? "الواقع الشائع: المتاهة المشتتة" : "Common Reality: Vendor Chaos"}
                  </span>
                  <XCircle className="text-red-500" size={24} />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-neutral-950">
                  {isRtl ? "5 أطراف.. ولا أحد مسؤول عن النتيجة" : "5 Disconnected Vendors.. Zero Ownership"}
                </h3>
                <ul className="mt-6 space-y-3.5 text-sm text-neutral-700">
                  {[
                    isRtl ? "وكالة التصميم تسلّم ملفات ولا تهتم بكيفية برمجتها أو تحويلها لمبيعات" : "Design agency ships files without caring how developers implement them",
                    isRtl ? "المبرمج المستقل يسلّم كوداً معقداً بلا توثيق ويختفي عند أول عطل" : "Freelance coder hands over spaghetti code with zero documentation and vanishes",
                    isRtl ? "خدمة العملاء على الواتساب بطيئة وعشوائية وتخسر الصفقات الساخنة" : "WhatsApp customer service is manual, slow, and loses high-intent leads",
                    isRtl ? "الأنظمة الداخلية (المخزن، CRM، الفواتير) معزولة وتتطلب إدخالاً يدوياً مكرراً" : "Internal tools (CRM, billing, stock) don't talk to each other, forcing double data entry",
                    isRtl ? "كل طرف يرمي اللوم على الآخر عندما تنخفض المبيعات أو يتوقف الموقع" : "When revenue drops or servers crash, every single vendor points fingers at the other",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-xl border border-red-100 bg-white/90 p-3.5 shadow-sm">
                      <span className="mt-0.5 text-base text-red-500 font-bold">✕</span>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* The Pencil Unified Solution Card */}
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl border-2 border-[#2057ff] bg-gradient-to-br from-blue-50/70 via-white to-blue-50/20 p-8 md:p-10 shadow-xl shadow-blue-500/5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2057ff] px-3.5 py-1 text-xs font-bold text-white shadow-sm">
                    {isRtl ? "منهجية بنسل: منظومة حل متكاملة" : "The Pencil Way: One Unified Engine"}
                  </span>
                  <CheckCircle2 className="text-[#2057ff]" size={24} />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-neutral-950">
                  {isRtl ? "فريق واحد يملك المنظومة ويضمن نجاحها" : "One Senior Team Owning The Entire Lifecycle"}
                </h3>
                <ul className="mt-6 space-y-3.5 text-sm text-neutral-800">
                  {[
                    isRtl ? "هوية بصرية ونبرة تسويقية تفرض الهيبة والثقة الفورية في السوق" : "Brand authority & corporate design system built to command respect on day one",
                    isRtl ? "بنية برمجية فائقة السرعة على Next.js 15 مستقرة 99.99% ولا تسقط في المواسم" : "Ultra-fast Next.js architecture with 99.99% uptime during your biggest campaigns",
                    isRtl ? "أتمتة ذكية تربط مسارات البيع بالفواتير وإشعارات الواتساب لحظياً" : "Automated workflows triggering CRM updates, invoices, and instant WhatsApp alerts",
                    isRtl ? "ذكاء Feliz المؤسسي يجيب العملاء ويدير العمليات على مدار الساعة بحماية كاملة" : "SuperFeliz enterprise AI answering queries and automating workflows 24/7 securely",
                    isRtl ? "طرف واحد مسؤول أمامك بعقد واضح، ودعم مستمر يحمي استثمارك" : "One transparent partnership, fixed SLAs, and total peace of mind for your leadership",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-xl border border-blue-100/80 bg-white p-3.5 shadow-sm">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#2057ff]" />
                      <span className="leading-relaxed font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. FOUR ENTERPRISE SOLUTION SUITES (Studio Split-Workbench) */}
      {/* ============================================================ */}
      <section
        id="solutions-suites"
        className="relative scroll-mt-24 border-b border-neutral-200/80 bg-[#FBFBFB] py-20 md:py-28"
      >
        {/* Subtle Ambient Aura */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="animate-aura-1 absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-[#2057ff]/6 blur-[150px]" />
          <div className="animate-aura-2 absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-[#8b5cf6]/5 blur-[150px]" />
        </div>

        <div className="container-custom relative z-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2057ff]">
                {isRtl ? "منظومات الحلول التنفيذية المتخصصة" : "Signature Solution Suites"}
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl">
                {isRtl ? (
                  <>
                    أربع منظومات متكاملة.. <span className="font-light italic text-neutral-500">اختر ما يناسب مرحلتك.</span>
                  </>
                ) : (
                  <>
                    Four Turnkey Suites.. <span className="font-light italic text-neutral-500">Built for your growth phase.</span>
                  </>
                )}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {isRtl
                  ? "كل حزمة تمثل حلاً تجارياً شاملاً ومترابطاً. اختر المنظومة التي تحتاجها مؤسستك لاستكشاف مخرجاتها وهندستها بالتفصيل."
                  : "Each suite is an end-to-end commercial engine. Select a solution to explore its architectural deliverables, ROI, and execution roadmap."}
              </p>
            </div>
          </Reveal>

          {/* The Studio Split-Workbench Layout */}
          <div className="mt-14 grid gap-8 lg:grid-cols-12 items-stretch">
            {/* Left Rail: Interactive Suite Cards (5 Cols) */}
            <div className="flex flex-col gap-3.5 lg:col-span-5 justify-between">
              {SOLUTION_SUITES.map((suite, idx) => {
                const isSelected = suite.id === selectedSuiteId;
                const Icon = suite.icon;
                const num = `0${idx + 1}`;

                return (
                  <button
                    key={suite.id}
                    onClick={() => setSelectedSuiteId(suite.id)}
                    aria-pressed={isSelected}
                    className={cn(
                      "group relative flex flex-col justify-between rounded-2xl p-4 sm:p-5 text-start transition-all duration-300 cursor-pointer outline-none border",
                      isSelected
                        ? "border-[#2057ff] bg-gradient-to-br from-blue-50/50 via-white to-white shadow-lg shadow-blue-500/10 ring-1 ring-[#2057ff]"
                        : "border-neutral-200/80 bg-white hover:border-blue-200 hover:bg-neutral-50/60 shadow-sm"
                    )}
                  >
                    {/* Top Row: Index + Icon & Tag */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "font-mono text-2xl sm:text-3xl font-light leading-none transition-colors",
                            isSelected ? "text-[#2057ff]" : "text-neutral-300 group-hover:text-neutral-400"
                          )}
                        >
                          {num}
                        </span>
                        <div
                          className={cn(
                            "h-8 w-8 rounded-lg border flex items-center justify-center transition-all duration-300 shrink-0",
                            isSelected
                              ? "bg-[#2057ff] text-white border-[#2057ff] shadow-sm"
                              : "border-neutral-200 bg-neutral-50 text-neutral-600 group-hover:bg-white group-hover:border-neutral-300"
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>

                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider",
                          isSelected
                            ? "bg-blue-100 text-[#2057ff]"
                            : "bg-neutral-100 text-neutral-600"
                        )}
                      >
                        {isRtl ? suite.badgeAr : suite.badgeEn}
                      </span>
                    </div>

                    {/* Middle: Title & Brief Description */}
                    <div className="mt-2.5">
                      <h4
                        className={cn(
                          "text-base sm:text-lg font-bold leading-snug transition-colors",
                          isSelected ? "text-neutral-950 font-black" : "text-neutral-800"
                        )}
                      >
                        {isRtl ? suite.titleAr : suite.titleEn}
                      </h4>
                      <p className="mt-1 text-xs text-neutral-500 leading-relaxed line-clamp-2">
                        {isRtl ? suite.kickerAr : suite.kickerEn}
                      </p>
                    </div>

                    {/* Bottom: Feature Highlights Line + Verified Metric Badge */}
                    <div
                      className={cn(
                        "mt-3 flex items-center justify-between border-t pt-2.5 text-[11px]",
                        isSelected ? "border-blue-100" : "border-neutral-100"
                      )}
                    >
                      <div className="flex items-center gap-1.5 text-neutral-700 truncate max-w-[65%]">
                        <Zap className="h-3 w-3 shrink-0 fill-[#2057ff] text-[#2057ff]" />
                        <span className="truncate font-medium text-neutral-600">
                          {(isRtl ? suite.deliverablesAr : suite.deliverablesEn).slice(0, 2).join(" • ")}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 shrink-0 font-mono text-[10px] font-bold text-emerald-600" dir="ltr">
                        <CheckCircle2 size={12} className="text-emerald-600" />
                        <span>{isRtl ? suite.metricAr : suite.metricEn}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Stage: Visual Window & Executive Dossier (7 Cols) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSuite.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex h-full flex-col justify-between rounded-[28px] border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      {/* Visual Stage (Autoplaying Video with Image Fallback) */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-950 shadow-md">
                        {activeSuite.video ? (
                          <video
                            src={activeSuite.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <Image
                            src={activeSuite.image}
                            alt={isRtl ? activeSuite.titleAr : activeSuite.titleEn}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        )}

                        {/* Visual Stage Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute top-4 start-4 end-4 flex items-center justify-between">
                          <span className="rounded-full bg-black/60 border border-white/20 px-3.5 py-1 text-[11px] font-mono font-bold text-[#8fb0ff] backdrop-blur-md" dir="ltr">
                            {isRtl ? activeSuite.metricAr : activeSuite.metricEn}
                          </span>
                          <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-neutral-900 backdrop-blur-md">
                            {isRtl ? "ضمان تسليم بنسل المعتمد" : "Pencil Certified SLA"}
                          </span>
                        </div>
                      </div>

                      {/* Executive Hook & Value Proposition */}
                      <div className="mt-5 border-s-4 border-[#2057ff] ps-4 py-1 text-start">
                        <p className="text-base sm:text-lg font-bold leading-relaxed text-neutral-900">
                          &ldquo;{isRtl ? activeSuite.hookAr : activeSuite.hookEn}&rdquo;
                        </p>
                      </div>

                      {/* 3 Core System Pillars (Minimalist Specs) */}
                      <div className="mt-6 border-t border-neutral-100 pt-5 text-start">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                          {isRtl ? "المخرجات الأساسية المضمنة // CORE DELIVERABLES" : "CORE SYSTEM PILLARS // DELIVERABLES"}
                        </span>
                        <div className="grid gap-2.5 sm:grid-cols-3">
                          {(isRtl ? activeSuite.deliverablesAr : activeSuite.deliverablesEn).slice(0, 3).map((item, idx) => (
                            <div
                              key={idx}
                              className="rounded-xl border border-neutral-200/80 bg-neutral-50/70 p-3.5 transition hover:bg-neutral-50 hover:border-neutral-300"
                            >
                              <span className="font-mono text-[10px] font-bold text-[#2057ff] block">
                                0{idx + 1} //
                              </span>
                              <p className="mt-1 text-xs font-semibold leading-relaxed text-neutral-800">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-neutral-100 pt-6">
                      <Link
                        href={activeSuite.href}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2057ff] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700"
                      >
                        <span>{isRtl ? activeSuite.ctaAr : activeSuite.ctaEn}</span>
                        <ArrowUpRight size={16} />
                      </Link>

                      <Link
                        href="/support/callback"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3.5 text-xs sm:text-sm font-bold text-neutral-800 transition hover:bg-neutral-50 hover:border-neutral-400"
                      >
                        <PhoneCall size={15} />
                        <span>{isRtl ? "استشارة تنفيذية سريعة" : "Advisory Call"}</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. SUPERFELIZ ENTERPRISE AI INTEGRATION                     */}
      {/* ============================================================ */}
      <section id="feliz-enterprise" className="relative scroll-mt-24 border-y border-neutral-200/80 bg-white py-20 text-neutral-900 md:py-28">
        <div className="container-custom relative z-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#cdd9ff] bg-[#eef3ff] px-4 py-1.5 text-xs font-bold text-[#2057ff] shadow-sm">
                <Image
                  src="/macosdock/superfeliz.svg"
                  alt="SuperFeliz"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <span>{isRtl ? "عائلة Feliz للذكاء الاصطناعي المؤسسي" : "SuperFeliz Enterprise AI Integration"}</span>
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl">
                {isRtl ? (
                  <>
                    الذكاء الاصطناعي كعضو فريق موثوق.. <span className="font-light italic text-neutral-500">لا كلعبة تسويقية.</span>
                  </>
                ) : (
                  <>
                    AI as an Accountable Team Member.. <span className="font-light italic text-neutral-500">Not a Gimmick.</span>
                  </>
                )}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {isRtl
                  ? "عائلة نماذج Feliz من بنسل صُممت لتحل مشاكل الشركات الحقيقية: التسعير، بنية الأنظمة، صياغة المحتوى عالي التحويل، ومحادثات العملاء الآلية 24/7 دون أي هلوسة وبأعلى معايير الخصوصية والعزل المؤسسي."
                  : "Pencil's Feliz model family is built for real operational velocity: pricing analysis, systems architecture, high-conversion copy, and autonomous customer conversations without hallucinations or data leaks."}
              </p>
            </div>
          </Reveal>

          {/* Interactive Glass Folder Cards - Feliz Model Family */}
          <div className="mt-14 w-full">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 justify-items-center items-end"
              dir="ltr"
            >
              {FELIZ_FAMILY_MODELS.map((m, idx) => {
                const active = m.slug === activeFelizModel;
                return (
                  <div key={m.slug} className="flex flex-col items-center">
                    <GlassFolder
                      label={isRtl ? m.nameAr : m.nameEn}
                      meta={isRtl ? m.taglineAr : m.taglineEn}
                      tone={m.tone}
                      art={m.art}
                      seed={idx * 7 + 3}
                      width={280}
                      open={active}
                      onOpenChange={(isOpen) => {
                        if (isOpen) {
                          setActiveFelizModel(m.slug);
                        }
                      }}
                      onFileSelect={() => setActiveFelizModel(m.slug)}
                      files={isRtl ? m.filesAr : m.filesEn}
                      action="more"
                      menu={[
                        {
                          label: isRtl ? "اختيار هذا النموذج" : "Focus this model",
                          onSelect: () => setActiveFelizModel(m.slug),
                        },
                      ]}
                      appearDelay={idx * 100}
                    />
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-center font-mono text-[11px] tracking-[0.16em] text-neutral-400 uppercase">
              {isRtl
                ? "مرر الماوس للمعاينة · اضغط على المجلد للفتح واختيار النموذج · اضغط القائمة لمزيد من الخيارات"
                : "Hover to lean · Click folder to open & focus model · ··· for more options"}
            </p>
          </div>

          {/* Active Model Spotlight Box */}
          <Reveal delay={0.05}>
            <div className="mt-8 rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 p-8 shadow-sm md:p-12">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-mono font-bold text-white"
                      style={{ backgroundColor: selectedModel.accent }}
                    >
                      {isRtl ? selectedModel.nameAr : selectedModel.nameEn}
                    </span>
                    <span className="text-xs font-semibold text-neutral-500">
                      {isRtl ? selectedModel.taglineAr : selectedModel.taglineEn}
                    </span>
                  </div>

                  <p className="mt-4 text-lg font-medium leading-relaxed text-neutral-800 sm:text-xl">
                    {isRtl ? selectedModel.descAr : selectedModel.descEn}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {isRtl ? "منهجية العمل:" : "Core Formula:"}
                    </span>
                    {(isRtl ? selectedModel.formulaAr : selectedModel.formulaEn).map((f, fIdx) => (
                      <span
                        key={fIdx}
                        className="rounded-full border border-neutral-200 bg-white px-3.5 py-1 text-xs font-bold text-neutral-800 shadow-sm"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm lg:col-span-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {isRtl ? "كيف يخدم أعمالك؟" : "Enterprise Application"}
                  </span>
                  <p className="text-xs leading-relaxed text-neutral-600">
                    {isRtl
                      ? "يتم تخصيص ودمج النموذج في موقعك أو قنوات الواتساب الخاصة بشركتك مع إشراف ومراجعة دورية من مهندسي بنسل."
                      : "Directly embedded into your customer-facing channels, web portals, or internal workflows with human audit SLAs."}
                  </p>
                  <Link
                    href="/superfeliz"
                    className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-neutral-900 transition hover:text-blue-600"
                  >
                    <span>{isRtl ? "استكشف عائلة Feliz بالتفصيل" : "Explore Feliz Family"}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Feliz As A Managed Service Box */}
          <div className="mt-12 rounded-3xl border border-neutral-200 bg-[#F8F9FA] p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2057ff]">
                  {isRtl ? "كيف تقدم بنسل خدمة فيليز لشركتك؟" : "Feliz as a Managed Enterprise Solution"}
                </span>
                <h3 className="mt-2 text-2xl font-black text-neutral-950 sm:text-3xl">
                  {isRtl
                    ? "اشتراك وإشراف شهري كامل.. الذكاء الاصطناعي كأصل استراتيجي لشركتك"
                    : "Turnkey AI Deployment & Ongoing Human Supervision"}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  {isRtl
                    ? "لا نتركك تتعامل مع أكواد معقدة أو واجهات API مبهمة. نحن نقوم بتغذية النموذج ببيانات شركتك، ربطه بقنواتك، وتدريبه وصيانته شهرياً لضمان دقة الإجابات بنسبة 100% وحماية سرية بياناتك."
                    : "We handle the entire lifecycle: knowledge ingestion, system integration, continuous prompt refinement, and human-in-the-loop audit so your AI never embarrasses your brand."}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      titleEn: "Private Data Isolation",
                      titleAr: "عزل وتشفير تام للبيانات",
                      descEn: "Your company knowledge is securely siloed. Zero data is shared or used to train public models.",
                      descAr: "بياناتك ومستنداتك معزولة ومحمية بسياج أمني مؤسسي، ولا يتم مشاركتها أبداً مع نماذج عامة.",
                    },
                    {
                      titleEn: "WhatsApp & Web Hookup",
                      titleAr: "ربط فوري بواتساب والموقع",
                      descEn: "SuperFeliz handles hundreds of concurrent chats round the clock without dropped inquiries.",
                      descAr: "يتعامل مع مئات المحادثات المتزامنة 24/7 دون تأخير، مع تحويل الصفقات الساخنة لفريق المبيعات.",
                    },
                    {
                      titleEn: "Human-in-the-Loop SLA",
                      titleAr: "إشراف ومراجعة بشرية دورية",
                      descEn: "Pencil's AI engineers audit responses weekly to tune accuracy, pricing logic, and tone.",
                      descAr: "فريق بنسل يراجع أداء النموذج أسبوعياً لضبط دقة الإجابات ونبرة العلامة التجارية.",
                    },
                    {
                      titleEn: "Custom Role Fine-Tuning",
                      titleAr: "تخصيص أدوار العمليات",
                      descEn: "Configured specifically for your industry: real estate, clinic bookings, SaaS, or e-commerce.",
                      descAr: "مهيأ بدقة لطبيعة مجالك: عقارات، حجوزات عيادات، منصات SaaS، أو تجارة إلكترونية.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="rounded-2xl border border-neutral-200/80 bg-white p-4 text-xs shadow-sm">
                      <span className="block font-bold text-neutral-900 text-sm">{isRtl ? item.titleAr : item.titleEn}</span>
                      <span className="mt-1 block leading-relaxed text-neutral-500">{isRtl ? item.descAr : item.descEn}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-lg lg:col-span-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50/80 p-3 shadow-sm">
                  <Image
                    src="/macosdock/superfeliz.svg"
                    alt="Feliz"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h4 className="mt-5 text-xl font-black text-neutral-950">
                  {isRtl ? "هل أنت مستعد لدمج فيليز في شركتك؟" : "Ready to Deploy Feliz?"}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                  {isRtl
                    ? "احجز جلسة استكشافية عملية نوضح لك فيها كيف يمكن لسوبر فيليز توفير مئات الساعات ومضاعفة المبيعات."
                    : "Book a practical 20-minute demo to see how Feliz automates your recurring operational workflows."}
                </p>
                <div className="mt-6 flex w-full flex-col gap-3">
                  <Link
                    href="/superfeliz"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2057ff] px-6 py-3.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#1a49d6]"
                  >
                    <Sparkles size={14} />
                    <span>{isRtl ? "تعرف على عائلة Feliz بالتفصيل" : "Explore Feliz Family Page"}</span>
                  </Link>
                  <Link
                    href="/support/callback?intent=ai"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-6 py-3.5 text-xs font-bold text-neutral-800 transition hover:bg-neutral-100"
                  >
                    <PhoneCall size={14} />
                    <span>{isRtl ? "طلب استشارة لدمج فيليز لشركتك" : "Consult on Feliz Deployment"}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. TRANSPARENT COMPARISON MATRIX                            */}
      {/* ============================================================ */}
      <section className="bg-[#F8F9FB] py-20 md:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2057ff]">
                {isRtl ? "الوضوح والشفافية" : "Market Comparison"}
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl">
                {isRtl ? (
                  <>
                    مقارنة صريحة.. <span className="font-light italic text-neutral-500">لماذا تختار بنسل؟</span>
                  </>
                ) : (
                  <>
                    A Transparent Comparison.. <span className="font-light italic text-neutral-500">Why Leaders Choose Pencil.</span>
                  </>
                )}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {isRtl
                  ? "لسنا وكالة تقليدية تبيع ساعات دون نتائج، ولسنا مستقلين تنقطع أخبارهم بعد الاستلام. نحن شريكك الهندسي والتجاري المباشر."
                  : "We are neither a bloated agency billing endless discovery hours nor freelancers disappearing after delivery. We are your direct engineering and commercial engine."}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-14 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-start text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200 bg-neutral-100/80 text-neutral-800">
                      <th className="p-4 text-start font-bold uppercase tracking-wider sm:p-5">
                        {isRtl ? "معيار التقييم" : "Evaluation Dimension"}
                      </th>
                      <th className="p-4 text-start font-semibold text-neutral-500 sm:p-5">
                        {isRtl ? "المستقلون (Freelancers)" : "Freelancers"}
                      </th>
                      <th className="p-4 text-start font-semibold text-neutral-500 sm:p-5">
                        {isRtl ? "الوكالات التقليدية (Agencies)" : "Traditional Agencies"}
                      </th>
                      <th className="border-x border-blue-200 bg-blue-50/70 p-4 text-start font-black text-blue-900 sm:p-5">
                        {isRtl ? "منظومة بنسل (PENCIL Studio)" : "PENCIL Studio Solutions"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {COMPARISON_ROWS.map((row, idx) => (
                      <tr key={idx} className="transition hover:bg-neutral-50/70">
                        <td className="p-4 font-bold text-neutral-900 sm:p-5">
                          {isRtl ? row.dimensionAr : row.dimensionEn}
                        </td>
                        <td className="p-4 text-neutral-500 sm:p-5">
                          {isRtl ? row.freelancersAr : row.freelancersEn}
                        </td>
                        <td className="p-4 text-neutral-500 sm:p-5">
                          {isRtl ? row.agenciesAr : row.agenciesEn}
                        </td>
                        <td className="border-x border-blue-100 bg-blue-50/30 p-4 font-bold text-blue-950 sm:p-5">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#2057ff]" />
                            <span>{isRtl ? row.pencilAr : row.pencilEn}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. DELIVERY ARCHITECTURE & TIMELINE                         */}
      {/* ============================================================ */}
      <section className="border-t border-neutral-200/80 bg-white py-20 md:py-28 overflow-hidden w-full">
        <div className="container-custom">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2057ff]">
                {isRtl ? "إطار عمل التسليم المحكم" : "Delivery Framework"}
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl">
                {isRtl ? (
                  <>
                    من دراسة الفرصة إلى الإطلاق.. <span className="font-light italic text-neutral-500">في أربع مراحل واضحة.</span>
                  </>
                ) : (
                  <>
                    From Diagnostic to Market.. <span className="font-light italic text-neutral-500">In Four Precise Phases.</span>
                  </>
                )}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {isRtl
                  ? "لا مجال للارتجال. نتبع خطة عمل واضحة المخرجات والتواريخ، تمنح إدارتك السيطرة الكاملة على مسار التقدم والتكاليف."
                  : "Zero improvisation. We operate with phased checkpoints, concrete deliverables, and firm commitments."}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Connected Carousel for the 4 Phases - Unboxed Full Width */}
        <div className="mt-14 w-full">
          <CalendlyCarousel
            items={deliveryCarouselItems}
            autoPlayInterval={6000}
            pauseOnHover={true}
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. EXECUTIVE FAQ                                            */}
      {/* ============================================================ */}
      <section className="border-t border-neutral-200/80 bg-[#F8F9FB] py-20 md:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2057ff]">
                {isRtl ? "الأسئلة الشائعة" : "Executive Q&A"}
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl">
                {isRtl ? (
                  <>
                    إجابات واضحة ومباشرة.. <span className="font-light italic text-neutral-500">لما يهم الإدارة التنفيذية.</span>
                  </>
                ) : (
                  <>
                    Straight Answers.. <span className="font-light italic text-neutral-500">For Decision Makers.</span>
                  </>
                )}
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 mx-auto max-w-4xl space-y-4">
            {[
              {
                qEn: "How is this different from hiring individual services from your /services page?",
                qAr: "ما الفرق بين حلول الأعمال وبين طلب خدمات منفردة من صفحة الخدمات؟",
                aEn: "Our /services page covers disciplinary capabilities (like designing a brand or developing an app). Solutions, on the other hand, are end-to-end commercial turnkey architectures: combining brand, custom software, automations, and SuperFeliz enterprise AI under one single SLA contract with guaranteed outcomes.",
                aAr: "صفحة الخدمات تقدم قدرات تخصصية فردية (مثل تصميم هوية أو برمجة تطبيق). أما صفحة حلول الأعمال فتقدم ماكينات تجارية متكاملة على المفتاح: نجمع الهوية مع البرمجة السريعة، وأتمتة العمليات، وذكاء فيليز الاصطناعي تحت عقد واحد ومسؤولية واحدة تضمن النتيجة.",
              },
              {
                qEn: "How long does it take from signing to full market launch?",
                qAr: "كم يستغرق بناء وإطلاق المنظومة بالكامل؟",
                aEn: "Most of our enterprise solution suites launch within 30 to 45 business days through our structured 4-phase sprints. Complex custom platforms with deep ERP integrations take between 60 to 90 days with transparent bi-weekly demo releases.",
                aAr: "معظم حزم الحلول المتكاملة تُسلّم جاهزة للإطلاق في السوق خلال 30 إلى 45 يوم عمل عبر خطة سبرنتات واضحة. المنصات المعقدة ذات الربط العميق مع أنظمة ERP تستغرق من 60 إلى 90 يوماً مع تسليم مراحل حية قابلة للتجربة كل أسبوعين.",
              },
              {
                qEn: "Can our existing IT and marketing teams collaborate with you?",
                qAr: "هل يمكن لفريقنا التقني أو التسويقي الداخلي العمل معكم؟",
                aEn: "Absolutely. We routinely partner with in-house CTOs, product managers, and marketing heads. We adapt to your GitHub repos, document every architecture decision, and provide complete handover documentation or ongoing co-management.",
                aAr: "بالتأكيد. نعمل باستمرار مع مدراء التقنية والتسويق الداخليين بالشركات. نتكامل مع مستودعات الأكواد الخاصة بكم (GitHub)، نوثق كل سطر برمجي، ونقدم تدريباً كاملاً لفريقك أو نتولى الإدارة والتشغيل بالكامل حسب رغبتكم.",
              },
              {
                qEn: "How does SuperFeliz protect our proprietary company data?",
                qAr: "كيف يضمن ذكاء فيليز حماية وسرية بيانات ومعلومات شركتنا؟",
                aEn: "We deploy isolated enterprise instances with zero public LLM model retraining. All data is encrypted in transit and at rest, guarded by strict NDAs and role-based access policies. Your proprietary documents remain strictly yours.",
                aAr: "نوفر بيئات سحابية معزولة تماماً (Isolated Enterprise VPC) مع حظر قاطع لأي تدريب لنماذج عامة على بياناتك. جميع المستندات مشفرة ومحمية باتفاقيات سرية صارمة (NDA) وصلاحيات دقيقة تحددها أنت.",
              },
            ].map((faq, idx) => (
              <Reveal key={idx} delay={0.04 * idx}>
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-neutral-300 sm:p-8">
                  <h3 className="text-base font-bold text-neutral-950 sm:text-lg">
                    {isRtl ? faq.qAr : faq.qEn}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {isRtl ? faq.aAr : faq.aEn}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. FINAL CONSULTATION CTA BANNER                            */}
      {/* ============================================================ */}
      <section className="border-t border-neutral-200/80 bg-white py-20 md:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-8 py-16 text-center text-white shadow-2xl md:px-16 md:py-20">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  background:
                    "radial-gradient(600px 300px at 50% 0%, rgba(32,87,255,0.4), transparent 70%)",
                }}
              />
              <div className="relative z-10 mx-auto max-w-3xl">
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  {isRtl ? "ابدأ الشراكة الآن" : "Take The Next Step"}
                </span>
                <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">
                  {isRtl
                    ? "جاهز لبناء منظومة رقمية تليق بطموح شركتك؟"
                    : "Ready to Build an Engine Worthy of Your Ambition?"}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                  {isRtl
                    ? "احجز جلسة استكشافية متخصصة مع فريق بنسل التنفيذي. نناقش أهدافك، نحلل الفرص غير المستغلة، ونقدم لك خطة معمارية مقترحة دون أي التزام مسبق."
                    : "Book a strategic consultation with Pencil's executive team. We review your commercial goals, identify bottlenecks, and present a clear solution roadmap with zero obligation."}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/support/callback"
                    className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold text-neutral-950 transition-all duration-300 hover:bg-neutral-200 hover:shadow-xl"
                  >
                    <PhoneCall size={16} />
                    <span>{isRtl ? "احجز جلسة دراسة الحل" : "Book Executive Consultation"}</span>
                    <ArrowUpRight size={16} />
                  </Link>

                  <Link
                    href="/superfeliz"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    <Sparkles size={15} className="text-[#8fb0ff]" />
                    <span>{isRtl ? "اكتشف ذكاء Feliz لشركتك" : "Discover Feliz AI"}</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

