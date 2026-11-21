"use client";

import { ViewportVideo } from "@/components/shared/media/viewport-video";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight,
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
  Lock,
  MessageCircleMore,
  UserCheck,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/motion/reveal";
import { useLanguage } from "@/components/language-context";
import { PencilHero } from "@/components/shared/ui/pencil-ui";
import { EditorialPageHero, StatStrip } from "@/components/editorial";
import { PencilButton } from "@/components/ui/pencil-button";
import { CalendlyCarousel, type CarouselItem } from "@/components/ui/connected-carousel";
import GlassFolder, { type FolderFile } from "@/components/ui/glass-folder-cards";
import { CinematicHero } from "@/components/ui/cinematic-landing-hero";
import { cn } from "@/lib/utils";

interface SolutionSuite {
  id: string;
  badgeEn: string;
  badgeAr: string;
  metricEn: string;
  metricAr: string;
  icon: React.ElementType;
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
    image: "/signature-capabilities/brand-identity-creative-design.jpg",
    video: "/solutions/Brand_animation_market_entry_20261020052123.mp4",
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
    image: "/sectors/sector-section/crm-automation.jpg",
    video: "/solutions/connected-systems-workflow-automation.mp4",
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
    image: "/sectors/sector-section/e-commerce.jpg",
    video: "/solutions/high-volume-digital-commerce-portals.mp4",
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
    image: "/sectors/sector-section/corporate-websites.jpg",
    video: "/solutions/total-digital-overhaul-ongoing-retainer.mp4",
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
      "تفعيل وتدريب حصري لنماذج ذكاء سوبر فيليز المؤسسية لفريقك",
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
  art: "verdant" | "glacier" | "dusk" | "ember" | "aurora" | "cobalt";
  tone: "light" | "dark" | "blue";
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
    descAr: "الطبقة المركزية الشاملة لذكاء بينسل. يربط الأهداف التجارية مع البنية التقنية ومحادثات العملاء 24/7 دون انقطاع.",
    formulaEn: ["Holistic View", "Autonomous Triggers", "Enterprise Guardrails"],
    formulaAr: ["رؤية شمولية", "أتمتة ذاتية", "حماية وسرية تامة"],
    accent: "#2057ff",
    art: "cobalt",
    tone: "blue",
    filesEn: [
      { name: "Enterprise Orchestrator", meta: "Core · Multi-Agent", art: "cobalt" },
      { name: "24/7 WhatsApp Agent", meta: "Live Channel · Active", art: "verdant" },
      { name: "Private Knowledge Vault", meta: "Vector DB · Isolated", art: "glacier" },
      { name: "Human Audit SLA.pdf", meta: "Weekly Protocol" },
    ],
    filesAr: [
      { name: "الموجه المؤسسي الشامل", meta: "نواة · متعدد الوكلاء", art: "cobalt" },
      { name: "وكيل واتساب 24/7", meta: "قناة مباشرة · نشط", art: "verdant" },
      { name: "مستودع المعرفة المعزول", meta: "Vector DB · آمن", art: "glacier" },
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
    pencilAr: "نماذج فيليز المؤسسية المدربة خصيصاً على بيانات وسياق شركتك",
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
      defaultImage: "/solutions/Diagnostic-&-Architecture-Blueprint.jpg",
      selectedImage: "/solutions/Diagnostic-&-Architecture-Blueprint.jpg",
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
      defaultImage: "/solutions/Rapid-Production-Sprint.jpg",
      selectedImage: "/solutions/Rapid-Production-Sprint.jpg",
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
      defaultImage: "/solutions/Stress-Testing-&-Training.jpg",
      selectedImage: "/solutions/Stress-Testing-&-Training.jpg",
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
      defaultImage: "/solutions/Launch-&-Managed-SLA.jpg",
      selectedImage: "/solutions/Launch-&-Managed-SLA.jpg",
    },
  ];

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#FBFBFB] text-neutral-900 selection:bg-[#2057ff] selection:text-white">
      <Header light />

      {/* ============================================================ */}
      <EditorialPageHero
        isRtl={isRtl}
        cards={[
          { letter: "B", label: isRtl ? "الهوية" : "BRAND", index: "01", src: "/solutions/brand.mp4" },
          { letter: "S", label: isRtl ? "برمجيات" : "SOFTWARE", index: "02", src: "/solutions/software.mp4" },
          { letter: "A", label: isRtl ? "ذكاء فيليز" : "FELIZ AI", index: "03", src: "/solutions/feliz-ai.mp4" },
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
            ? "حلول تجارية شاملة تدمج الهوية المؤسسية، البرمجيات السحابية، أتمتة العمليات، وذكاء فيليز."
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
      />

      <StatStrip
        items={[
          { value: isRtl ? "+10 سنوات" : "+10 Years", label: isRtl ? "خبرة تنفيذية في السوق العربي" : "Multidisciplinary Experience" },
          { value: isRtl ? "مسؤولية كاملة" : "Single Ownership", label: isRtl ? "فريق واحد يضمن النتيجة التجارية" : "One Team Owns the Result" },
          { value: isRtl ? "99.99% استقرار" : "99.99% Uptime", label: isRtl ? "بنية سحابية ذاتية التوسع والأمان" : "Scalable Cloud Architecture" },
          { value: isRtl ? "ذكاء فيليز المؤسسي" : "Feliz AI Layer", label: isRtl ? "أتمتة العمليات وخدمة العملاء 24/7" : "Enterprise AI & Operations" },
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
              <h2 className={cn("mt-3 text-3xl font-normal text-neutral-900 md:text-5xl lg:text-6xl leading-[1.14]", isRtl ? "tracking-normal" : "tracking-tight")}>
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
                  ? "معظم الشركات لا تعاني من نقص الأفكار، بل من فوضى الأطراف المنفذة: مصمم لا يفهم البيع، مبرمج يسلّم أكواداً ميتة، مسوق يحرق الميزانية، ومحادثات عملاء تضيع دون متابعة. بينسل تجمع هذه المتاهة في حل مؤسسي متناغم."
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
                    {isRtl ? "منهجية بينسل: منظومة حل متكاملة" : "The Pencil Way: One Unified Engine"}
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
                    isRtl ? "ذكاء فيليز المؤسسي يجيب العملاء ويدير العمليات على مدار الساعة بحماية كاملة" : "SuperFeliz enterprise AI answering queries and automating workflows 24/7 securely",
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
          {/* The Reference-Matching Split Layout */}
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Left Column: 4 Interactive Suite Tabs with Full Content & Alternating Blue/White Style (5 Cols) */}
            <div className="flex flex-col gap-3.5 sm:gap-4 lg:col-span-5">
              {SOLUTION_SUITES.map((suite, idx) => {
                const isSelected = suite.id === selectedSuiteId;
                const isBlue = idx % 2 === 0; // Alternating blue and white
                const Icon = suite.icon;
                const num = `0${idx + 1}`;

                return (
                  <Reveal key={suite.id} delay={0.05 * (idx + 1)}>
                    <div
                      onClick={() => setSelectedSuiteId(suite.id)}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isSelected}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedSuiteId(suite.id);
                        }
                      }}
                      className={cn(
                        "group relative rounded-2xl sm:rounded-[22px] p-4 sm:p-5 transition-all duration-300 cursor-pointer select-none text-start outline-none flex flex-col justify-between",
                        isBlue
                          ? "bg-[#2057FF] text-white shadow-md hover:bg-[#1a4de0]"
                          : "bg-white text-neutral-900 border border-neutral-200/90 shadow-xs hover:border-[#2057FF]/40 hover:shadow-md",
                        isSelected && (
                          isBlue
                            ? "ring-4 ring-[#2057FF]/35 shadow-lg shadow-blue-500/25 scale-[1.01]"
                            : "ring-4 ring-[#2057FF]/20 border-[#2057FF] shadow-lg shadow-blue-500/10 scale-[1.01]"
                        )
                      )}
                    >
                      {/* Top Row: Index + Icon & Badge + Circular Arrow Button */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={cn(
                              "font-mono text-xl sm:text-2xl font-bold leading-none shrink-0",
                              isBlue ? "text-white" : "text-neutral-900"
                            )}
                          >
                            {num}
                          </span>
                          <div
                            className={cn(
                              "h-7 w-7 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                              isBlue
                                ? "bg-white/15 text-white border border-white/20"
                                : "bg-neutral-100 text-neutral-700 border border-neutral-200"
                            )}
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <span
                            className={cn(
                              "rounded-full px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider",
                              isBlue
                                ? "bg-white/20 text-white"
                                : "bg-neutral-100 text-neutral-600"
                            )}
                          >
                            {isRtl ? suite.badgeAr : suite.badgeEn}
                          </span>
                        </div>

                        {/* Circular Arrow Button on Right */}
                        <div
                          className={cn(
                            "h-8 w-8 sm:h-9 sm:w-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                            isBlue
                              ? "border border-white/40 bg-white/10 text-white group-hover:bg-white group-hover:text-[#2057FF]"
                              : "border border-neutral-300 bg-neutral-50 text-neutral-700 group-hover:border-[#2057FF] group-hover:bg-[#2057FF] group-hover:text-white"
                          )}
                        >
                          <ArrowDownRight
                            size={16}
                            className={cn(
                              "transition-transform duration-300",
                              isRtl && "-scale-x-100",
                              isSelected && "rotate-45"
                            )}
                          />
                        </div>
                      </div>

                      {/* Middle: Title & Kicker */}
                      <div className="mt-2.5">
                        <h4
                          className={cn(
                            "text-sm sm:text-base font-bold leading-snug",
                            isBlue ? "text-white" : "text-neutral-950 font-black"
                          )}
                        >
                          {isRtl ? suite.titleAr : suite.titleEn}
                        </h4>
                        <p
                          className={cn(
                            "mt-1 text-xs leading-relaxed line-clamp-1",
                            isBlue ? "text-white/80" : "text-neutral-500"
                          )}
                        >
                          {isRtl ? suite.kickerAr : suite.kickerEn}
                        </p>
                      </div>

                      {/* Bottom Row: Feature Highlights + Metric Badge */}
                      <div
                        className={cn(
                          "mt-3 flex items-center justify-between border-t pt-2 text-[11px]",
                          isBlue ? "border-white/15" : "border-neutral-100"
                        )}
                      >
                        <div
                          className={cn(
                            "flex items-center gap-1.5 truncate max-w-[65%]",
                            isBlue ? "text-white/85" : "text-neutral-600"
                          )}
                        >
                          <Zap
                            className={cn(
                              "h-3 w-3 shrink-0",
                              isBlue ? "fill-white text-white" : "fill-[#2057FF] text-[#2057FF]"
                            )}
                          />
                          <span className="truncate font-medium">
                            {(isRtl ? suite.deliverablesAr : suite.deliverablesEn).slice(0, 2).join(" • ")}
                          </span>
                        </div>

                        <div
                          className={cn(
                            "flex items-center gap-1 shrink-0 font-mono text-[10px] font-bold",
                            isBlue ? "text-emerald-300" : "text-emerald-600"
                          )}
                          dir="ltr"
                        >
                          <CheckCircle2 size={12} className={isBlue ? "text-emerald-300" : "text-emerald-600"} />
                          <span>{isRtl ? suite.metricAr : suite.metricEn}</span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Right Column: Rectangular Visual on Top, Tag + Arrow, Four Turnkey Suites Title & Subtitle (7 Cols) */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="relative flex flex-col justify-between text-start">
                  {/* Top: Rectangular Image with Rounded Corners */}
                  <div className="relative aspect-[2.33/1] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-md">
                    <Image
                      src="/solutions/four-turnkey-suites.jpg"
                      alt={isRtl ? "أربع منظومات متكاملة" : "Four Turnkey Suites"}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>

                  {/* Below Image: Row with Category Tag and Circular Arrow Button matching Reference */}
                  <div className="mt-6 sm:mt-7 flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white px-3.5 py-1.5 text-xs font-bold text-[#2057FF] shadow-2xs">
                      <span className="h-2 w-2 rounded-full bg-[#2057FF]" />
                      <span>{isRtl ? "منظومات الحلول التنفيذية المتخصصة" : "Signature Solution Suites"}</span>
                    </span>

                    <Link
                      href={activeSuite.href}
                      className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#2057FF] text-white flex items-center justify-center hover:bg-[#1a46cc] transition-all duration-300 hover:scale-105 shadow-sm shrink-0"
                      aria-label={isRtl ? "استكشف تفاصيل المنظومة" : "Explore Suite"}
                    >
                      <ArrowDownRight size={18} className={cn("transition-transform", isRtl && "-scale-x-100")} />
                    </Link>
                  </div>

                  {/* Main Section Title (Under the Image as requested) */}
                  <h2 className={cn("mt-4 text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 leading-[1.15] max-w-2xl", isRtl ? "tracking-normal" : "tracking-tight")}>
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

                  {/* Main Section Description (Under the Title as requested) */}
                  <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
                    {isRtl
                      ? "كل حزمة تمثل حلاً تجارياً شاملاً ومترابطاً. اختر المنظومة التي تحتاجها مؤسستك لاستكشاف مخرجاتها وهندستها بالتفصيل."
                      : "Each suite is an end-to-end commercial engine. Select a solution to explore its architectural deliverables, ROI, and execution roadmap."}
                  </p>

                  {/* Bottom Action Row */}
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <PencilButton
                      href={activeSuite.href}
                      variant="primary"
                      size="md"
                      hoverLabel={isRtl ? "تفاصيل المنظومة ←" : "Explore Suite →"}
                    >
                      <span>{isRtl ? activeSuite.ctaAr : activeSuite.ctaEn}</span>
                    </PencilButton>

                    <PencilButton
                      href="/support/callback"
                      variant="outline"
                      size="md"
                      pencilAnimation={false}
                      showPencilIcon={false}
                      className="px-8 min-w-[170px] sm:min-w-[190px]"
                    >
                      <span className="inline-flex items-center gap-2 font-bold whitespace-nowrap">
                        <PhoneCall size={16} className="shrink-0" />
                        <span>{isRtl ? "استشارة تنفيذية سريعة" : "Advisory Call"}</span>
                      </span>
                    </PencilButton>
                  </div>
                </div>
              </Reveal>
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
                <span>{isRtl ? "عائلة فيليز للذكاء الاصطناعي المؤسسي" : "SuperFeliz Enterprise AI Integration"}</span>
              </div>
              <h2 className={cn("mt-4 text-3xl font-normal text-neutral-900 md:text-5xl lg:text-6xl leading-[1.14]", isRtl ? "tracking-normal" : "tracking-tight")}>
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
                  ? "عائلة نماذج فيليز من بينسل صُممت لتحل مشاكل الشركات الحقيقية: التسعير، بنية الأنظمة، صياغة المحتوى عالي التحويل، ومحادثات العملاء الآلية 24/7 دون أي هلوسة وبأعلى معايير الخصوصية والعزل المؤسسي."
                  : "Pencil's Feliz model family is built for real operational velocity: pricing analysis, systems architecture, high-conversion copy, and autonomous customer conversations without hallucinations or data leaks."}
              </p>
            </div>
          </Reveal>

          {/* Interactive Glass Folder Cards - Feliz Model Family */}
          <div className="mt-12 w-full">
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
            <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 p-8 shadow-sm md:p-12">
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
                      ? "يتم تخصيص ودمج النموذج في موقعك أو قنوات الواتساب الخاصة بشركتك مع إشراف ومراجعة دورية من مهندسي بينسل."
                      : "Directly embedded into your customer-facing channels, web portals, or internal workflows with human audit SLAs."}
                  </p>
                  <Link
                    href="/superfeliz"
                    className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-neutral-900 transition hover:text-blue-600"
                  >
                    <span>{isRtl ? "استكشف عائلة فيليز بالتفصيل" : "Explore Feliz Family"}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 4.1 CINEMATIC FELIZ MANAGED ENTERPRISE SHOWCASE */}
      <CinematicHero
        brandName="SUPERFELIZ"
        isRtl={isRtl}
        metricValue={100}
        metricSuffix="%"
      />

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
              <h2 className={cn("mt-3 text-3xl font-normal text-neutral-900 md:text-5xl lg:text-6xl leading-[1.14]", isRtl ? "tracking-normal" : "tracking-tight")}>
                {isRtl ? (
                  <>
                    مقارنة صريحة.. <span className="font-light italic text-neutral-500">لماذا تختار بينسل؟</span>
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
                        {isRtl ? "منظومة بينسل ستوديو" : "PENCIL Studio Solutions"}
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
      <section className="relative isolate border-t border-neutral-200/80 bg-white py-20 md:py-28 overflow-hidden w-full">
        <div className="container-custom">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2057ff]">
                {isRtl ? "إطار عمل التسليم المحكم" : "Delivery Framework"}
              </span>
              <h2 className={cn("mt-3 text-3xl font-normal text-neutral-900 md:text-5xl lg:text-6xl leading-[1.14]", isRtl ? "tracking-normal" : "tracking-tight")}>
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
        <Reveal delay={0.1}>
          <div className="mt-14 w-full">
            <CalendlyCarousel
              items={deliveryCarouselItems}
              autoPlayInterval={6000}
              pauseOnHover={true}
              isRtl={isRtl}
            />
          </div>
        </Reveal>
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
              <h2 className={cn("mt-3 text-3xl font-normal text-neutral-900 md:text-5xl lg:text-6xl leading-[1.14]", isRtl ? "tracking-normal" : "tracking-tight")}>
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
      <section className="container-custom pb-20 md:pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#143eb8] via-[#2057ff] to-[#0f34a4] px-8 py-14 text-center text-white shadow-2xl shadow-blue-500/20 md:px-16 md:py-20">
            {/* Dot Matrix & Ambient Glows matching /sectors */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff18_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-900/40 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                {isRtl ? "ابدأ الشراكة الآن" : "Take The Next Step"}
              </span>
              <h2 className={cn("mt-5 text-3xl font-normal text-white md:text-5xl lg:text-6xl leading-[1.15]", isRtl ? "tracking-normal" : "tracking-tight")}>
                {isRtl ? (
                  <>
                    جاهز لبناء منظومة رقمية تليق{" "}
                    <span className="font-light italic text-neutral-400">بطموح شركتك؟</span>
                  </>
                ) : (
                  <>
                    Ready to Build an Engine Worthy{" "}
                    <span className="font-light italic text-neutral-400">of Your Ambition?</span>
                  </>
                )}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                {isRtl
                  ? "احجز جلسة استكشافية متخصصة مع فريق بينسل التنفيذي. نناقش أهدافك، نحلل الفرص غير المستغلة، ونقدم لك خطة معمارية مقترحة دون أي التزام مسبق."
                  : "Book a strategic consultation with Pencil's executive team. We review your commercial goals, identify bottlenecks, and present a clear solution roadmap with zero obligation."}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <PencilButton
                  href="/support/callback"
                  variant="primary"
                  size="lg"
                  hoverLabel={isRtl ? "احجز جلستك الآن ←" : "Book session now →"}
                >
                  <span>{isRtl ? "احجز جلسة دراسة الحل" : "Book Executive Consultation"}</span>
                </PencilButton>

                <PencilButton
                  href="/superfeliz"
                  variant="primary"
                  size="lg"
                  iconType="superfeliz"
                  hoverLabel={isRtl ? "اكتشف فيليز ←" : "Explore Feliz AI →"}
                >
                  <span>{isRtl ? "اكتشف ذكاء فيليز لشركتك" : "Discover Feliz AI"}</span>
                </PencilButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

