"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Locale = "en" | "ar"
export type Direction = "ltr" | "rtl"

interface LanguageContextProps {
  locale: Locale
  direction: Direction
  t: (key: string) => any
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

const translations = {
  en: {
    // Header
    "brand.logo": "PENCIL Studio",
    "nav.featured": "Services",
    "nav.collections": "Sectors",
    "nav.materials": "Our Craft",
    "nav.contact": "Inquire",

    "hero.title1": "Digital Craft",
    "hero.title2": "Ideas Shaped Into Reality",
    "hero.description": "WE SKETCH. WE DESIGN. WE SHAPE IDEAS. WE CREATE IMPACT.",
    "hero.freeShipping": "Art From Scratch",
    "hero.delivered": "Business Ready",
    "hero.guarantee": "Technical Support",

    // Featured Services
    "featured.title": "Signature",
    "featured.subtitle": "Capabilities",
    "featured.description": "We engineer high-performance systems and build brand experiences with extreme technical precision.",
    "featured.new": "Core",
    "featured.limited": "Elite",
    "featured.quickLook": "View Scope",

    // Services Info
    "product.brand.name": "Brand Identity & Creative Design",
    "product.brand.materials": "Brand Strategy, Visual Identity, UI/UX Guidelines",
    "product.brand.dimensions": "Scope: Logo systems, typography, color palettes, vector assets, and brand books.",
    
    "product.web.name": "Websites & Digital Platforms",
    "product.web.materials": "Next.js, React, Tailwind CSS, Headless CMS Architecture",
    "product.web.dimensions": "Scope: Ultra-performance corporate sites, portals, and rich web applications.",

    "product.app.name": "Mobile Apps & SaaS Products",
    "product.app.materials": "React Native, iOS, Android, Cloud Sync Services",
    "product.app.dimensions": "Scope: Fully customized applications with real-time sync, offline storage, and APIs.",

    "product.systems.name": "Business Systems & Dashboards",
    "product.systems.materials": "Custom tools, workflows, dashboards, and booking platforms",
    "product.systems.dimensions": "Scope: Tools that help teams manage work, clients, orders, bookings, and daily operations.",

    "product.marketing.name": "Marketing & Growth Systems",
    "product.marketing.materials": "SEO Optimization, Analytics Integration, Conversion Funnels",
    "product.marketing.dimensions": "Scope: User acquisition tracking, technical performance marketing, and performance auditing.",

    "product.hosting.name": "Hosting, Cloud & Tech Support",
    "product.hosting.materials": "AWS infrastructure, CDN caching, 24/7 Monitoring & Backups",
    "product.hosting.dimensions": "Scope: Zero-downtime serverless setups, cloud security management, and ongoing maintenance.",

    // Tech Swatches/Pillars
    "swatch.design": "Strategic Design",
    "swatch.logic": "System Logic",
    "swatch.scale": "Scale & Deploy",

    // Collections (Business Sectors)
    "collections.title": "Business Sectors",
    "collections.description": "We develop specialized digital ecosystems tailored to the unique logic of different industries.",
    "collections.drag": "← Drag to explore capabilities →",
    "collections.tourism": "TOURISM & BOOKING",
    "collections.realestate": "REAL ESTATE",
    "collections.restaurants": "RESTAURANTS & POS",
    "collections.medical": "MEDICAL & CLINICS",
    "collections.education": "EDUCATION & LMS",
    "collections.corporate": "CORPORATE WEBSITES",
    "collections.ecommerce": "E-COMMERCE",
    "collections.crm": "CRM & AUTOMATION",
    "collections.pieces": "solutions",

    // Materials Section (Our Craft)
    "materials.title": "Our Craft",
    "materials.description": "Every system begins with thoughtful structure, carefully planned for security, speed, and clean design. We keep the work practical, precise, and built to last.",
    "materials.quote": "\"We build systems that last. Platforms that grow with the business and keep working as things change.\"",
    "materials.brand": "PENCIL Studio",
    "material.pistachio": "Design & UI/UX",
    "material.pistachio.desc": "Intuitive interfaces and visual clarity that optimize user interaction and retention.",
    "material.lunar": "Operations & Automation",
    "material.lunar.desc": "Clear workflows, routing rules, and practical automation built in.",
    "material.martian": "Infrastructure & Devops",
    "material.martian.desc": "Optimized microservices, ultra-fast CDN deployments, and secure hosting.",

    // Methodology Section
    "method.section_title": "From Idea to Digital Product",
    "method.badge": "PENCIL Method",
    "method.desc": "A clear process for shaping brands, websites, apps, dashboards, and business systems from the first sketch to launch.",
    "method.tab1.label": "Strategy & Direction",
    "method.tab1.badge": "Step 01",
    "method.tab1.title": "We shape the idea before we design it, with care, together.",
    "method.tab1.desc": "We start by understanding the business, audience, goals, and real problem behind the project. Then we turn the idea into a clear digital direction.",
    "method.tab1.cta": "Start Planning",
    "method.tab2.label": "Design & Experience",
    "method.tab2.badge": "Step 02",
    "method.tab2.title": "We design experiences that feel clear and premium.",
    "method.tab2.desc": "We create interfaces, brand visuals, and user journeys that are easy to use, visually sharp, and built around real business needs.",
    "method.tab2.cta": "View Design Work",
    "method.tab3.label": "Build & Launch",
    "method.tab3.badge": "Step 03",
    "method.tab3.title": "We build systems ready for daily business.",
    "method.tab3.desc": "We develop websites, apps, dashboards, booking platforms, and business tools with clean code, strong structure, and practical long-term support.",
    "method.tab3.cta": "Build With Us",

    // Technology Ecosystem Section
    "eco.badge": "Technology Ecosystem",
    "eco.section_title": "Built With the Right Stack",
    "eco.section_subtitle": "We choose the right tools for every brand, website, app, dashboard, and business system.",
    "eco.title": "The stack behind sharp digital products.",
    "eco.desc": "From interface design to deployment, we use reliable tools that help us build fast, secure, and scalable digital experiences.",
    "eco.cta.project": "Start a Project",
    "eco.cta.services": "Explore Services",

    // Business Features Section
    "business.features.badge": "Built For Operations",
    "business.features.title": "Systems Built for Real Work",
    "business.features.subtitle": "We design and build digital tools that help teams manage clients, operations, bookings, requests, and growth in one clear experience.",
    "business.features.card1.title": "Client & Request Management",
    "business.features.card1.desc": "Organize leads, customer requests, forms, inquiries, and follow-ups in one structured system built for daily operations.",
    "business.features.card2.title": "Dashboards & Business Control",
    "business.features.card2.desc": "Track performance, manage data, review activity, and make faster decisions through clean dashboards and admin panels.",
    "business.features.card3.title": "Booking & Workflow Systems",
    "business.features.card3.desc": "Build booking flows, service requests, internal approvals, and operational workflows that save time and reduce manual work.",

    // Newsletter Section
    "newsletter.title1": "Have an idea? ",
    "newsletter.title2": "Let's build it.",
    "newsletter.description": "Subscribe to our channel for creative insights, system breakdowns, and exclusive access to PENCIL Studio tools.",
    "newsletter.placeholder": "Enter your email address",
    "newsletter.subscribe": "Subscribe to Updates",
    "newsletter.invalid": "Please enter a valid email address",
    "newsletter.welcome": "Welcome to PENCIL Studio",
    "newsletter.thanks": "Thank you for subscribing. We will send you system architecture insights and new tool rollouts.",
    "newsletter.privacy1": "We respect your privacy. Unsubscribe at any time. Read our ",
    "newsletter.privacy2": "Privacy Policy",

    // Quick Look Modal
    "modal.dimensions": "SCOPE DETAIL",
    "modal.finish": "CORE PILLAR",
    "modal.features": "DELIVERABLES",
    "modal.feat1": "Zero-downtime performance hosting",
    "modal.feat2": "100% bespoke design guidelines",
    "modal.feat3": "Clean, scalable TypeScript code",
    "modal.feat4": "Ongoing engineering support program",
    "modal.addToCart": "Request Consultation",

    // Footer
    "footer.desc": "Empowering businesses with creative digital solutions. We transform ideas into exceptional digital experiences that drive growth and innovation.",
    "footer.rights": "All rights reserved.",
    "footer.sec.shop": "Services",
    "footer.sec.studio": "Studio",
    "footer.sec.support": "Sectors",
    "footer.link.branding": "Brand Identity",
    "footer.link.web": "Websites",
    "footer.link.apps": "Mobile Apps",
    "footer.link.ai": "Business Systems",
    "footer.link.booking": "Booking Platforms",
    "footer.link.support": "Technical Support",
    "footer.link.story": "Our Story",
    "footer.link.materials": "Our Craft",
    "footer.link.projects": "Projects",
    "footer.link.careers": "Careers",
    "footer.link.contact": "Contact",
    "footer.link.tourism": "Tourism",
    "footer.link.realestate": "Real Estate",
    "footer.link.restaurants": "Restaurants",
    "footer.link.medical": "Medical",
    "footer.link.education": "Education",
    "footer.link.corporate": "Corporate",
    "footer.headline": "Start From Scratch",
    "footer.cta.project": "Start a Project",
    "footer.cta.solutions": "View Solutions",
    "footer.crafted_by_agent": "CRAFTED BY OUR BUSINESS AI AGENT",
    "footer.agent_name": "SUPERFELIZ",
    // Dock
    "dock.homepage": "Homepage",
    "dock.solutions": "Solutions",
    "dock.sectors": "Business Sectors",
    "dock.programs": "Programs",
    "dock.enterprise": "Enterprise",
    "dock.feliz": "Super Feliz",
    "dock.pricing": "Pricing",
    "dock.about": "About",
    "dock.contact": "Contact",
    // Testimonials
    "testimonials.badge": "Client Reviews",
    "testimonials.title": "What Clients Say",
    "testimonials.desc": "Real feedback from brands and businesses we helped shape, design, and build.",
    "reviews.reviewed_on": "REVIEWED ON",
    "reviews.count": "1,208 REVIEWS",
    "reviews.rating": "4.9",
    "reviews.customer_reviews": "CUSTOMER REVIEWS",
    "reviews.based_on": "Based on client feedback across projects",
    // Brands
    "brands.badge": "Brands we worked with",
    "brands.title": "Built for brands that move forward.",
    "brands.desc": "From tourism and real estate to restaurants, clinics, education, e-commerce, and business systems.",

    // SuperFeliz Section
    "superfeliz.badge": "Business AI Agent",
    "superfeliz.title": "Meet SuperFeliz",
    "superfeliz.subtitle": "Your business AI agent, built to support ideas, teams, and digital growth.",
    "superfeliz.cinematic1": "SuperFeliz thinks with your business.",
    "superfeliz.cinematic2": "Plans. Organizes. Supports.",
    "superfeliz.card.heading": "Business intelligence, made practical.",
    "superfeliz.card.desc": "SuperFeliz helps businesses organize ideas, automate repetitive tasks, improve communication, and turn daily operations into clearer digital workflows.",
    "superfeliz.metric.label": "24/7 Support",
    "superfeliz.metric.value": "Business support that stays ready whenever your team needs it.",
    "superfeliz.task.one.title": "Smart Tasks",
    "superfeliz.task.one.desc": "Daily work organized",
    "superfeliz.task.two.title": "Business Flow",
    "superfeliz.task.two.desc": "Ideas turned into action",
    "superfeliz.stream.one": "Today",
    "superfeliz.stream.one.desc": "A clear view of what needs attention",
    "superfeliz.stream.two": "Workflow Summary",
    "superfeliz.stream.two.desc": "Notes, follow-ups, and next steps in one place",
    "superfeliz.cta.primary": "Explore SuperFeliz",
    "superfeliz.cta.secondary": "Talk to PENCIL",
    "superfeliz.panel.label": "SuperFeliz",
    "superfeliz.panel.status": "Active",
    "superfeliz.panel.badge": "Business Agent",
    "superfeliz.mockup.title": "One place for ideas and work",
    "superfeliz.mockup.desc": "Bring notes, requests, tasks, and communication into one focused workspace.",
    "superfeliz.mockup.heading": "SuperFeliz Workspace",
    "superfeliz.mockup.support": "Clear workflows for teams that need fewer steps and faster decisions.",
    "superfeliz.chat.user": "i'm thinking of a booking website for my clinic. arabic and english, online appointments, and it has to be fast. budget around $5k, launch in two months. doable?",
    "superfeliz.chat.agent": "Doable. And here is how we make it stronger:",
    "superfeliz.chat.t1": "Add WhatsApp reminders, no-shows drop hard",
    "superfeliz.chat.t2": "Take a small deposit online, cancellations shrink",
    "superfeliz.chat.t3": "Target a 1 second load, Google ranks you higher",
    "superfeliz.chat.typing": "SuperFeliz is thinking…",
    "superfeliz.chat.placeholder": "Ask SuperFeliz anything…",
    "superfeliz.chat.chip1": "Plan my week",
    "superfeliz.chat.chip2": "Follow up clients",
    "superfeliz.chat.chip3": "Daily summary",
    "superfeliz.desk.step1": "01, you write it messy",
    "superfeliz.desk.step2": "02, Feliz makes it a plan",
    "superfeliz.desk.brief": "The messy brief",
    "superfeliz.desk.briefNote": "client's words, kept as is",
    "superfeliz.desk.plan": "The Feliz plan",
    "superfeliz.desk.stamp": "Feliz approved",
  },
  ar: {
    // Header
    "brand.logo": "PENCIL Studio",
    "nav.featured": "الخدمات",
    "nav.collections": "القطاعات",
    "nav.materials": "حرفتنا",
    "nav.contact": "استفسار",

    // Hero
    "hero.title1": "حِرفة رقمية",
    "hero.title2": "نحوّل الأفكار إلى واقع",
    "hero.description": "نرسم. نصمم. نشكّل الأفكار. نصنع الأثر.",
    "hero.freeShipping": "الفن من الصفر",
    "hero.delivered": "جاهز للأعمال",
    "hero.guarantee": "دعم تقني",

    // Featured Services
    "featured.title": "قدراتنا",
    "featured.subtitle": "الرئيسية",
    "featured.description": "نصمم ونبني أنظمة رقمية عالية الأداء وتجارب هوية بصرية بدقة تقنية فائقة ومن الصفر.",
    "featured.new": "أساسي",
    "featured.limited": "نخبة",
    "featured.quickLook": "عرض النطاق",

    // Services Info
    "product.brand.name": "الهوية البصرية والتصميم الإبداعي",
    "product.brand.materials": "إستراتيجية العلامة البصرية، تصميم الواجهات، معايير الهوية",
    "product.brand.dimensions": "النطاق: أنظمة الشعارات، الخطوط، لوحة الألوان، الأصول الرسومية وكتيب الهوية.",
    
    "product.web.name": "المواقع والمنصات الرقمية",
    "product.web.materials": "Next.js، React، Tailwind CSS، أنظمة المحتوى اللارأسية",
    "product.web.dimensions": "النطاق: مواقع شركات عالية الأداء، بوابات رقمية، وتطبيقات ويب متكاملة.",

    "product.app.name": "تطبيقات الهواتف ومنتجات الـ SaaS",
    "product.app.materials": "React Native، iOS، Android، خدمات السحاب المتزامنة",
    "product.app.dimensions": "النطاق: تطبيقات مخصصة بالكامل مع مزامنة لحظية، وتخزين محلي، وواجهات برمجية.",

    "product.systems.name": "أنظمة تشغيل وداشبوردات",
    "product.systems.materials": "أدوات مخصصة، تدفقات عمل، داشبوردات، ومنصات حجز",
    "product.systems.dimensions": "النطاق: أدوات تساعد الفرق تدير الشغل، العملاء، الطلبات، الحجوزات، والعمليات اليومية.",

    "product.marketing.name": "أنظمة التسويق والنمو",
    "product.marketing.materials": "تحسين محركات البحث، ربط التحليلات، قنوات التحويل",
    "product.marketing.dimensions": "النطاق: تتبع الاستحواذ، التسويق التقني، ومراجعة أداء النظم التسويقية.",

    "product.hosting.name": "الاستضافة، السحاب والدعم الفني",
    "product.hosting.materials": "بنية تحتية AWS، التخزين المؤقت CDN، مراقبة ونسخ احتياطي 24/7",
    "product.hosting.dimensions": "النطاق: استضافة خادمة بدون توقف، أمان السحاب، والصيانة الدورية للمشروع.",

    // Tech Swatches/Pillars
    "swatch.design": "تصميم إستراتيجي",
    "swatch.logic": "منطق النظام",
    "swatch.scale": "النمو والنشر",

    // Collections (Business Sectors)
    "collections.title": "القطاعات التجارية",
    "collections.description": "نطور بيئات رقمية متخصصة ومصممة خصيصاً لتناسب المنطق الفريد لكل قطاع عمل.",
    "collections.drag": "→ اسحب لاستكشاف القدرات ←",
    "collections.tourism": "السياحة والحجوزات",
    "collections.realestate": "العقارات",
    "collections.restaurants": "المطاعم ونقاط البيع",
    "collections.medical": "الطب والعيادات",
    "collections.education": "التعليم والمنصات التعليمية",
    "collections.corporate": "مواقع الشركات الرسمية",
    "collections.ecommerce": "التجارة الإلكترونية",
    "collections.crm": "أنظمة العملاء والأتمتة",
    "collections.pieces": "حلول متكاملة",

    // Materials Section (Our Craft)
    "materials.title": "حرفتنا",
    "materials.description": "يبدأ كل نظام ببنية واضحة، مخططة بعناية للأمان والسرعة والتصميم النظيف. نركز على العمل العملي والدقيق والقابل للاستمرار.",
    "materials.quote": "\"نؤمن ببناء أنظمة تعيش طويلًا. منصات تكبر مع البيزنس وتكمل شغلها مع تغيّر الوقت.\"",
    "materials.brand": "PENCIL Studio",
    "material.pistachio": "التصميم وواجهة المستخدم",
    "material.pistachio.desc": "واجهات بديهية ووضوح بصري يعزز تفاعل المستخدم ومعدلات بقائه.",
    "material.lunar": "العمليات والأتمتة",
    "material.lunar.desc": "تدفقات عمل واضحة، قواعد توجيه، وأتمتة عملية ومباشرة.",
    "material.martian": "البنية التحتية والعمليات",
    "material.martian.desc": "خدمات مصغرة محسنة، ونشر فائق السرعة عبر شبكات CDN، واستضافة آمنة.",

    // Methodology Section
    "method.section_title": "من الفكرة إلى المنتج الرقمي",
    "method.badge": "منهجية PENCIL",
    "method.desc": "منهجية واضحة لتحويل الأفكار إلى هويات، مواقع، تطبيقات، لوحات تحكم، وأنظمة أعمال جاهزة للإطلاق.",
    "method.tab1.label": "الاستراتيجية والاتجاه",
    "method.tab1.badge": "الخطوة 01",
    "method.tab1.title": "نشكّل الفكرة قبل أن نبدأ التصميم.",
    "method.tab1.desc": "نبدأ بفهم العمل، الجمهور، الأهداف، والمشكلة الحقيقية خلف المشروع، ثم نحول الفكرة إلى اتجاه رقمي واضح.",
    "method.tab1.cta": "ابدأ التخطيط",
    "method.tab2.label": "التصميم والتجربة",
    "method.tab2.badge": "الخطوة 02",
    "method.tab2.title": "نصمم تجارب واضحة وراقية.",
    "method.tab2.desc": "نصمم الواجهات، الهوية البصرية، ورحلة المستخدم بشكل بسيط، قوي، ومبني على احتياجات العمل الفعلية.",
    "method.tab2.cta": "استعرض أعمال التصميم",
    "method.tab3.label": "البناء والإطلاق",
    "method.tab3.badge": "الخطوة 03",
    "method.tab3.title": "نبني أنظمة جاهزة للعمل اليومي.",
    "method.tab3.desc": "نطوّر المواقع، التطبيقات، لوحات التحكم، منصات الحجز، وأدوات الأعمال بكود نظيف وهيكل قوي ودعم عملي طويل المدى.",
    "method.tab3.cta": "ابدأ مشروعك",

    // Technology Ecosystem Section
    "eco.badge": "منظومة تقنية",
    "eco.section_title": "مبني بأدوات مناسبة لكل مشروع",
    "eco.section_subtitle": "نختار الأدوات المناسبة لكل هوية، موقع، تطبيق، لوحة تحكم، ونظام أعمال.",
    "eco.title": "الأدوات التي تبني منتجات رقمية قوية.",
    "eco.desc": "من تصميم الواجهات إلى الإطلاق، نعتمد على أدوات موثوقة تساعدنا على بناء تجارب رقمية سريعة، آمنة، وقابلة للنمو.",
    "eco.cta.project": "ابدأ مشروعك",
    "eco.cta.services": "استكشف الخدمات",

    // Business Features Section
    "business.features.badge": "مبني للعمليات",
    "business.features.title": "أنظمة مصممة للعمل الحقيقي",
    "business.features.subtitle": "نصمم ونبني أدوات رقمية تساعد الفرق على إدارة العملاء، العمليات، الحجوزات، الطلبات، والنمو من تجربة واحدة واضحة.",
    "business.features.card1.title": "إدارة العملاء والطلبات",
    "business.features.card1.desc": "تنظيم العملاء المحتملين، طلبات العملاء، النماذج، الاستفسارات، والمتابعات داخل نظام واضح مناسب للعمل اليومي.",
    "business.features.card2.title": "لوحات تحكم وإدارة الأعمال",
    "business.features.card2.desc": "متابعة الأداء، إدارة البيانات، مراجعة النشاط، واتخاذ قرارات أسرع من خلال لوحات تحكم ولوحات إدارة نظيفة.",
    "business.features.card3.title": "أنظمة الحجز وسير العمل",
    "business.features.card3.desc": "بناء مسارات حجز، طلبات خدمات، موافقات داخلية، وسير عمل تشغيلي يقلل الوقت والعمل اليدوي.",

    // Newsletter Section
    "newsletter.title1": "عندك فكرة؟ ",
    "newsletter.title2": "خلّينا نحولها.",
    "newsletter.description": "اشترك في قناتنا للحصول على أفكار عملية، شروحات للتنفيذ، ووصول حصري لأدوات PENCIL Studio.",
    "newsletter.placeholder": "أدخل عنوان بريدك الإلكتروني",
    "newsletter.subscribe": "اشترك في التحديثات",
    "newsletter.invalid": "يرجى إدخال عنوان بريد إلكتروني صالح",
    "newsletter.welcome": "مرحباً بك في PENCIL Studio",
    "newsletter.thanks": "شكراً لاشتراكك. سنرسل لك تحليلات معمارية برمجية وإصدارات الأدوات الجديدة.",
    "newsletter.privacy1": "نحن نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت. اقرأ ",
    "newsletter.privacy2": "سياسة الخصوصية",

    // Quick Look Modal
    "modal.dimensions": "تفاصيل النطاق",
    "modal.finish": "الركيزة الأساسية",
    "modal.features": "المخرجات والملفات",
    "modal.feat1": "استضافة برمجية سحابية دون أي توقف",
    "modal.feat2": "إرشادات هوية وتصميم مخصصة بالكامل",
    "modal.feat3": "أكواد برمجية نظيفة وقابلة للتوسع بلغة TypeScript",
    "modal.feat4": "برنامج صيانة ودعم هندسي متكامل ومستمر",
    "modal.addToCart": "طلب استشارة تقنية",

    // Footer
    "footer.desc": "نُمكّن الأعمال بحلول رقمية إبداعية، ونحوّل الأفكار إلى تجارب رقمية مميزة تدعم النمو والتطور.",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.sec.shop": "الخدمات",
    "footer.sec.studio": "الاستوديو",
    "footer.sec.support": "القطاعات",
    "footer.link.branding": "الهوية البصرية",
    "footer.link.web": "المواقع الإلكترونية",
    "footer.link.apps": "تطبيقات الجوال",
    "footer.link.ai": "أنظمة الأعمال",
    "footer.link.booking": "منصات الحجز",
    "footer.link.support": "الدعم التقني",
    "footer.link.story": "قصتنا",
    "footer.link.materials": "أسلوبنا",
    "footer.link.projects": "المشاريع",
    "footer.link.careers": "الوظائف",
    "footer.link.contact": "تواصل معنا",
    "footer.link.tourism": "السياحة",
    "footer.link.realestate": "العقارات",
    "footer.link.restaurants": "المطاعم",
    "footer.link.medical": "المجال الطبي",
    "footer.link.education": "التعليم",
    "footer.link.corporate": "الشركات",
    "footer.headline": "ابدأ من الصفر",
    "footer.cta.project": "ابدأ مشروعك",
    "footer.cta.solutions": "استكشف الحلول",
    "footer.crafted_by_agent": "صُنع بواسطة وكيل الأعمال الذكي",
    "footer.agent_name": "سوبر فيليز",
    // Dock
    "dock.homepage": "الرئيسية",
    "dock.solutions": "الحلول",
    "dock.sectors": "قطاعات الأعمال",
    "dock.programs": "البرامج",
    "dock.enterprise": "المؤسسات",
    "dock.feliz": "سوبر فيليز",
    "dock.pricing": "الأسعار",
    "dock.about": "من نحن",
    "dock.contact": "تواصل معنا",
    // Testimonials
    "testimonials.badge": "آراء العملاء",
    "testimonials.title": "ماذا يقول عملاؤنا",
    "testimonials.desc": "آراء من علامات تجارية وأعمال ساعدناها على بناء هويات، مواقع، تطبيقات، وأنظمة رقمية واضحة.",
    "reviews.reviewed_on": "تم التقييم على",
    "reviews.count": "1,208 تقييم",
    "reviews.rating": "4.9",
    "reviews.customer_reviews": "تقييم العملاء",
    "reviews.based_on": "بناءً على آراء العملاء عبر المشاريع",
    // Brands
    "brands.badge": "علامات عملنا معها",
    "brands.title": "بُنيت لعلامات تتحرك للأمام",
    "brands.desc": "من السياحة والعقارات إلى المطاعم، العيادات، التعليم، التجارة الإلكترونية، وأنظمة الأعمال.",

    // SuperFeliz Section
    "superfeliz.badge": "وكيل أعمال ذكي",
    "superfeliz.title": "تعرف على سوبر فيليز",
    "superfeliz.subtitle": "وكيل أعمال ذكي يساعد الأفكار والفرق والنمو الرقمي بطريقة واضحة وعملية.",
    "superfeliz.cinematic1": "SuperFeliz يفهم عملك.",
    "superfeliz.cinematic2": "يخطط. ينظّم. يدعم.",
    "superfeliz.card.heading": "ذكاء عملي للأعمال.",
    "superfeliz.card.desc": "يساعد SuperFeliz الأعمال على تنظيم الأفكار، وأتمتة المهام المتكررة، وتحسين التواصل، وتحويل العمليات اليومية إلى مسارات رقمية أوضح.",
    "superfeliz.metric.label": "دعم 24/7",
    "superfeliz.metric.value": "دعم للأعمال يبقى جاهزًا كلما احتاجه الفريق.",
    "superfeliz.task.one.title": "مهام ذكية",
    "superfeliz.task.one.desc": "تنظيم العمل اليومي",
    "superfeliz.task.two.title": "تدفق العمل",
    "superfeliz.task.two.desc": "تحويل الأفكار إلى تنفيذ",
    "superfeliz.stream.one": "اليوم",
    "superfeliz.stream.one.desc": "رؤية واضحة لما يحتاج إلى متابعة",
    "superfeliz.stream.two": "ملخص سير العمل",
    "superfeliz.stream.two.desc": "الملاحظات والمتابعات والخطوات التالية في مكان واحد",
    "superfeliz.cta.primary": "استكشف SuperFeliz",
    "superfeliz.cta.secondary": "تحدث مع PENCIL",
    "superfeliz.panel.label": "SuperFeliz",
    "superfeliz.panel.status": "نشط",
    "superfeliz.panel.badge": "وكيل أعمال",
    "superfeliz.mockup.title": "مكان واحد للأفكار والعمل",
    "superfeliz.mockup.desc": "اجمع الملاحظات والطلبات والمهام والتواصل داخل مساحة عمل مركزة وواضحة.",
    "superfeliz.mockup.heading": "مساحة SuperFeliz",
    "superfeliz.mockup.support": "مسارات عمل واضحة للفرق التي تحتاج خطوات أقل وقرارات أسرع.",
    "superfeliz.chat.user": "بفكر في موقع حجز للعيادة. عربي وإنجليزي، وحجز أونلاين، ولازم يبقى سريع. الميزانية حوالي 5000 دولار والإطلاق بعد شهرين. تنفع؟",
    "superfeliz.chat.agent": "تنفع. وكده نخليها أقوى:",
    "superfeliz.chat.t1": "ضيف تذكير واتساب، عدم الحضور هيقع جامد",
    "superfeliz.chat.t2": "خد عربون صغير أونلاين، الإلغاءات هتقل",
    "superfeliz.chat.t3": "استهدف ثانية واحدة للفتح، جوجل هيرفعك فوق",
    "superfeliz.chat.typing": "سوبر فيليز بيفكر…",
    "superfeliz.chat.placeholder": "اسأل سوبر فيليز أي حاجة…",
    "superfeliz.chat.chip1": "نظم أسبوعي",
    "superfeliz.chat.chip2": "تابع العملاء",
    "superfeliz.chat.chip3": "ملخص اليوم",
    "superfeliz.desk.step1": "01، اكتبها ملخبطة",
    "superfeliz.desk.step2": "02، فيليز يحولها خطة",
    "superfeliz.desk.brief": "المسودة الملخبطة",
    "superfeliz.desk.briefNote": "كلام العميل زي ما هو",
    "superfeliz.desk.plan": "خطة فيليز",
    "superfeliz.desk.stamp": "اعتماد فيليز",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [mounted, setMounted] = useState(false)

  const direction: Direction = locale === "ar" ? "rtl" : "ltr"

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const langParam = params.get("lang")
    if (langParam === "en" || langParam === "ar") {
      setLocaleState(langParam)
      localStorage.setItem("locale", langParam)
    } else {
      const savedLocale = localStorage.getItem("locale") as Locale
      if (savedLocale === "en" || savedLocale === "ar") {
        setLocaleState(savedLocale)
      }
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale
      document.documentElement.dir = direction
      if (locale === "ar") {
        document.documentElement.classList.add("rtl")
      } else {
        document.documentElement.classList.remove("rtl")
      }
    }
  }, [locale, direction, mounted])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  const t = (key: string): any => {
    return translations[locale][key as keyof typeof translations["en"]] || key
  }

  // Prevent flash/hydration mismatch by providing children immediately but handling document updates in client effects
  return (
    <LanguageContext.Provider value={{ locale, direction, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
