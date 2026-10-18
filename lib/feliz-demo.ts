export type DemoModel = "oper" | "tech";

interface IntentReply {
  match: RegExp;
  en: string;
  ar: string;
  nextEn: string[];
  nextAr: string[];
}

const OPER_DEFAULT: IntentReply = {
  match: /$/,
  en: "Good question. Give me one detail, your field, your city, and your budget, and I will turn it into priorities: what first, what later, what never.",
  ar: "سؤال جيد. أعطني تفصيلاً واحداً، مجالك ومدينتك وميزانيتك، وسأحوله إلى أولويات: ماذا أولاً، وماذا لاحقاً، وماذا أبداً.",
  nextEn: ["How do I price my service?", "I want to open a store", "What is risky?"],
  nextAr: ["كيف أسعّر خدمتي؟", "أريد فتح متجر", "أين المخاطرة؟"],
};

const OPER_INTENTS: IntentReply[] = [
  {
    match: /(price|pricing|cost|سعر|تسعير|تكلفة|أسعار)/i,
    en: "Pricing starts from value, not from competitors. Tell me your cost per unit and your monthly target, and I will build your price ladder: entry, core, and premium.",
    ar: "يبدأ التسعير من القيمة لا من المنافسين. أخبرني بتكلفة الوحدة وهدفك الشهري، وسأبني لك سلم الأسعار: دخول وأساسي ومميز.",
    nextEn: ["My cost is $20 per order", "How do I beat competitors?", "What should I do first?"],
    nextAr: ["تكلفتي 20 دولاراً للطلب", "كيف أتفوق على المنافسين؟", "بماذا أبدأ؟"],
  },
  {
    match: /(market|ads|advertis|تسويق|إعلان|حملة|campaign)/i,
    en: "Do not spend before measurement. First fix tracking and reply speed, then spend small on one channel, then scale what brings real customers.",
    ar: "لا تنفق قبل القياس. أولاً أصلح التتبع وسرعة الرد، ثم أنفق قليلاً على قناة واحدة، ثم وسّع ما يجلب عملاء حقيقيين.",
    nextEn: ["What budget should I start with?", "Which channel fits clinics?", "How do I track calls?"],
    nextAr: ["بأي ميزانية أبدأ؟", "أي قناة تناسب العيادات؟", "كيف أتتبع المكالمات؟"],
  },
  {
    match: /(open|start|new|begin|افتح|أفتح|ابدأ|أبدأ|جديد|شركة|store|business)/i,
    en: "Opening right means three steps in order: prove demand with ten paying customers, lock one acquisition channel, then spend on brand and scale.",
    ar: "الافتتاح الصحيح ثلاث خطوات بالترتيب: أثبت الطلب بعشرة عملاء دافعين، وثبّت قناة استحواذ واحدة، ثم أنفق على العلامة والتوسع.",
    nextEn: ["How do I prove demand?", "What budget do I need?", "What is risky?"],
    nextAr: ["كيف أثبت الطلب؟", "ما الميزانية اللازمة؟", "أين المخاطرة؟"],
  },
  {
    match: /(risk|مخاطر|خطر|خسارة|fail)/i,
    en: "The biggest risks are usually three: no real demand, slow follow-up, and burning budget on brand before sales. Tell me your idea and I will rank its risks for you.",
    ar: "أكبر المخاطر غالباً ثلاثة: لا طلب حقيقي، ومتابعة بطيئة، وحرق الميزانية على العلامة قبل المبيعات. حدثني عن فكرتك وسأرتب مخاطرها لك.",
    nextEn: ["My idea is a booking app", "How do I test demand?", "What should I improve?"],
    nextAr: ["فكرتي تطبيق حجز", "كيف أختبر الطلب؟", "ما الذي أحسّنه؟"],
  },
];

const TECH_DEFAULT: IntentReply = {
  match: /$/,
  en: "Tell me what you want to build in one line, and who will use it, and I will map it: frontend, backend, database, and hosting, in execution order.",
  ar: "أخبرني ماذا تريد أن تبني في سطر واحد، ومن سيستخدمه، وسأرسم لك الخريطة: الواجهة الأمامية والخلفية وقاعدة البيانات والاستضافة بترتيب التنفيذ.",
  nextEn: ["I need a booking website", "I need a mobile app", "Where do I host?"],
  nextAr: ["أحتاج موقع حجز", "أحتاج تطبيق جوال", "أين أستضيف؟"],
};

const TECH_INTENTS: IntentReply[] = [
  {
    match: /(book|حجز|booking|appointment|موعد)/i,
    en: "A booking system needs five layers: calendar and availability, customer accounts, notifications, payments with deposits, and an admin panel. Start with web, add the app when bookings grow.",
    ar: "نظام الحجز يحتاج خمس طبقات: التقويم والإتاحة، وحسابات العملاء، والتنبيهات، والمدفوعات مع عربون، ولوحة الإدارة. ابدأ بالويب وأضف التطبيق عندما تنمو الحجوزات.",
    nextEn: ["Do I need a mobile app?", "How do reminders work?", "Which database?"],
    nextAr: ["هل أحتاج تطبيق جوال؟", "كيف تعمل التذكيرات؟", "أي قاعدة بيانات؟"],
  },
  {
    match: /(app|mobile|تطبيق|جوال|ios|android)/i,
    en: "One codebase can serve both stores with React Native. Build the core flows first, add offline support for weak networks, and keep payments and login for phase two.",
    ar: "شيفرة واحدة تكفي المتجرين مع React Native. ابنِ المسارات الأساسية أولاً، وأضف العمل دون اتصال للشبكات الضعيفة، وأجّل المدفوعات والدخول للمرحلة الثانية.",
    nextEn: ["Native or React Native?", "How long does an MVP take?", "What about hosting?"],
    nextAr: ["أصلي أم React Native؟", "كم يستغرق MVP؟", "ماذا عن الاستضافة؟"],
  },
  {
    match: /(host|server|استضاف|سيرفر|deploy|نشر|domain|دومين)/i,
    en: "Host on serverless with a CDN in front, daily backups, and uptime monitoring. Move email records first so nothing stops during migration.",
    ar: "استضف على خوادم مرنة وأمامها شبكة توزيع، مع نسخ يومي ومراقبة تشغيل. انقل سجلات البريد أولاً حتى لا يتوقف شيء أثناء النقل.",
    nextEn: ["What does migration cost?", "Shared or cloud hosting?", "How do backups work?"],
    nextAr: ["كم يكلف النقل؟", "استضافة مشتركة أم سحابية؟", "كيف تعمل النسخ؟"],
  },
  {
    match: /(pay| deposit|دفع|مدفوع|عربون|بوابة|gateway|stripe|paymob)/i,
    en: "Take payments with a trusted gateway, deposits for bookings, and automatic invoices in both languages. Test with real money in sandbox before launch.",
    ar: "اقبل المدفوعات عبر بوابة موثوقة، وعربوناً للحجوزات، وفواتير تلقائية باللغتين. وجرّب بأموال حقيقية في بيئة تجريبية قبل الإطلاق.",
    nextEn: ["Which gateway for Egypt?", "Cash or online first?", "How do refunds work?"],
    nextAr: ["أي بوابة لمصر؟", "نقدي أم إلكتروني أولاً؟", "كيف تعمل المرتجعات؟"],
  },
];

export function isArabic(text: string): boolean {
  return /[\u0600-\u06FF]/.test(text);
}

export interface DemoAnswer {
  text: string;
  followups: string[];
}

export function getDemoReply(model: DemoModel, text: string): DemoAnswer {
  const ar = isArabic(text);
  const pool = model === "oper" ? OPER_INTENTS : TECH_INTENTS;
  const fallback = model === "oper" ? OPER_DEFAULT : TECH_DEFAULT;
  const found = pool.find((intent) => intent.match.test(text)) ?? fallback;
  return {
    text: ar ? found.ar : found.en,
    followups: ar ? found.nextAr : found.nextEn,
  };
}

export const MODEL_SUGGESTIONS: Record<DemoModel, { en: string[]; ar: string[] }> = {
  oper: {
    en: ["How do I price my service?", "I want to open a store", "What is risky?"],
    ar: ["كيف أسعّر خدمتي؟", "أريد فتح متجر", "أين المخاطرة؟"],
  },
  tech: {
    en: ["I need a booking website", "I need a mobile app", "Where do I host?"],
    ar: ["أحتاج موقع حجز", "أحتاج تطبيق جوال", "أين أستضيف؟"],
  },
};
